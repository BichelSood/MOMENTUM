export function initMotion(){
  const bar=document.querySelector("#progress"),top=document.querySelector("#to-top");
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let scheduled=false,lenis=null;
  const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=`${max>0?scrollY/max*100:0}%`;top.classList.toggle("visible",scrollY>500);scheduled=false};
  addEventListener("scroll",()=>{if(!scheduled){requestAnimationFrame(update);scheduled=true}},{passive:true});
  top.onclick=()=>lenis?lenis.scrollTo(0):scrollTo({top:0,behavior:reduced?"instant":"smooth"});
  let observer=null;
  if(!reduced&&"IntersectionObserver"in window){
    observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in-view");observer.unobserve(x.target)}}),{threshold:.08});
    document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
    new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType!==1)return;
      if(node.matches?.(".reveal"))observer.observe(node);
      node.querySelectorAll?.(".reveal").forEach(x=>observer.observe(x));
    }))).observe(document.querySelector("#app"),{childList:true,subtree:true});
  }
  if(!reduced&&matchMedia("(pointer: fine)").matches){
    import("https://cdn.jsdelivr.net/npm/lenis@1.1.20/+esm").then(({default:Lenis})=>{
      if(!document.body.isConnected)return;
      lenis=new Lenis({duration:1.05,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true,syncTouch:false,anchors:true});
      const raf=time=>{lenis?.raf(time);requestAnimationFrame(raf)};requestAnimationFrame(raf);
    }).catch(()=>{});
  }
  update();
}
