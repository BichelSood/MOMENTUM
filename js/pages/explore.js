import "./_init.js";
import { events, categories } from "../data/events.js";
import { card } from "../components/shared.js";
import { isPast } from "../utils/date.js";
const app = document.querySelector("#app"),
  params = new URLSearchParams(location.search);
app.innerHTML = `<section class="page-intro"><p class="eyebrow">THE MOMENTUM CALENDAR</p><h1>Find your next <em>yes.</em></h1><p>A considered collection of events, gatherings and good reasons to get out there.</p></section><section class="explore-tools"><label class="search-field"><span>⌕</span><input id="q" type="search" placeholder="Search events, ideas, places…" value="${esc(params.get("q") || "")}"></label><label>Category<select id="category"><option value="">All categories</option>${categories.map((c) => `<option>${c}</option>`).join("")}</select></label><label>When<select id="date"><option value="all">All upcoming</option><option value="week">Next 7 days</option><option value="month">Next 30 days</option></select></label><label>City<select id="city"><option value="">Everywhere</option>${[
  ...new Set(events.map((e) => e.city)),
]
  .sort()
  .map((c) => `<option>${c}</option>`)
  .join(
    "",
  )}</select></label><label>Sort<select id="sort"><option value="soon">Soonest first</option><option value="late">Latest first</option><option value="az">A to Z</option></select></label></section><div class="results-line"><p id="count"></p><button id="clear" class="text-link">Clear all filters</button></div><div id="results" class="event-grid"></div><div id="empty" class="empty-state" hidden><span>✳</span><h2>No events found just yet.</h2><p>Try another search or clear a filter to see more.</p><button class="button secondary" id="clear-empty">Clear filters</button></div>`;
const $ = (id) => document.getElementById(id);
$("category").value = params.get("category") || "";
$("city").value = params.get("city") || "";
$("date").value = params.get("date") || "all";
function render() {
  const now = new Date(),
    end = new Date(now);
  end.setDate(end.getDate() + ($("date").value === "week" ? 7 : 30));
  let list = events.filter((e) => !isPast(e));
  const q = $("q").value.trim().toLowerCase();
  if (q)
    list = list.filter((e) =>
      `${e.title} ${e.description} ${e.city} ${e.venue}`
        .toLowerCase()
        .includes(q),
    );
  if ($("category").value)
    list = list.filter((e) => e.category === $("category").value);
  if ($("city").value) list = list.filter((e) => e.city === $("city").value);
  if ($("date").value !== "all")
    list = list.filter(
      (e) => new Date(`${e.date}T${e.startTime}:00+05:30`) <= end,
    );
  list.sort((a, b) =>
    $("sort").value === "az"
      ? a.title.localeCompare(b.title)
      : ($("sort").value === "late" ? -1 : 1) * a.date.localeCompare(b.date),
  );
  $("count").textContent =
    `${list.length} ${list.length === 1 ? "event" : "events"} to explore`;
  $("results").innerHTML = list.map(card).join("");
  $("empty").hidden = list.length > 0;
  const next = new URLSearchParams();
  for (const [key, id] of [
    ["q", "q"],
    ["category", "category"],
    ["city", "city"],
    ["date", "date"],
  ])
    if ($(id).value && $(id).value !== "all") next.set(key, $(id).value);
  history.replaceState(
    null,
    "",
    `${location.pathname}${next.size ? `?${next}` : ""}`,
  );
}
function clear() {
  ["q", "category", "city", "date"].forEach(
    (id) => ($(id).value = id === "date" ? "all" : ""),
  );
  render();
}
["q", "category", "city", "date", "sort"].forEach((id) =>
  $(id).addEventListener(id === "q" ? "input" : "change", render),
);
$("clear").onclick = clear;
$("clear-empty").onclick = clear;
render();
function esc(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
