import { Html } from '@react-three/drei';
import { useEffect } from "react";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import WaitForElement from "./WaitForElement";

function AnimatedStickyOverlay(props){
    useEffect(() => {
        WaitForElement(".sticky-overlay").then((elm) => {
          AnimationTimeline.to(".sticky-overlay", {opacity: 1, duration: AnimationTimings.Camera4}, "camera-4"); 
        });

        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {duration: AnimationTimings.Camera5}, "camera-5"); 
        });

        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {duration: AnimationTimings.Wait1}, "wait-1"); 
        });
            
        WaitForElement(".sticky-overlay").then((elm) => {
            AnimationTimeline.to(".sticky-overlay", {opacity: 0, duration: AnimationTimings.FadeCartIn}, "fade-cart-in"); 
        });

        return () => AnimationTimeline.kill();
      }, []);

    return  <Html zIndexRange={[167, 0]}><div className="sticky-overlay"></div></Html>
}

export default AnimatedStickyOverlay;