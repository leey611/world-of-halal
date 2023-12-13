import { Html } from '@react-three/drei';
import { useEffect } from "react";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import WaitForElement from "./WaitForElement";

function AnimatedStickyOverlay(props){
    useEffect(() => {
        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {opacity: 1, duration: AnimationTimings.FadeCartOut}, "fade-cart-out"); 
          });

        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {duration: AnimationTimings.WaitEnd}, "wait-end"); 
          });

        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {opacity: 0, duration: AnimationTimings.FadeCartIn}, "fade-cart-in"); 
        });

        return () => AnimationTimeline.kill();
      }, []);

    return  <Html zIndexRange={[167, 0]} calculatePosition={() => [0, 0, 0]}><div className="sticky-overlay"></div></Html>
}

export default AnimatedStickyOverlay;