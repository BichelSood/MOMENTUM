import {
  ArrowUpRight,
  BriefcaseBusiness,
  Landmark,
  Music2,
  Palette,
  Trophy,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
const icons = {
  Technology: Workflow,
  Music: Music2,
  Business: BriefcaseBusiness,
  Sports: Trophy,
  Arts: Palette,
  Cultural: Landmark,
};
export function CategoryCard({ category, index }) {
  const Icon = icons[category] || Landmark;
  return (
    <Link
      className="category-card cursor-interactive"
      to={`/explore?category=${encodeURIComponent(category)}`}
    >
      <span className="category-index">0{index + 1}</span>
      <Icon className="category-icon" size={22} strokeWidth={1.5} />
      <strong>{category}</strong>
      <ArrowUpRight className="category-arrow" size={16} />
    </Link>
  );
}
