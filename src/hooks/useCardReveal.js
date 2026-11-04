import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useCardReveal(dependency) {
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const cards=gsap.utils.toArray('.reveal-card,.section-heading,.featured-panel,.category-grid,.benefits-layout,.closing-cta');if(!cards.length)return undefined;
    const ctx=gsap.context(()=>{
      ScrollTrigger.batch(cards,{start:'top 91%',once:true,onEnter:(batch)=>gsap.fromTo(batch,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.52,stagger:.075,ease:'power2.out',clearProps:'all',overwrite:true})});
    });
    return()=>ctx.revert();
  },[dependency]);
}
