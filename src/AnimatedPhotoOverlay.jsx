import { useRef, useEffect, useState } from "react";
import { AnimationTimeline } from "./AnimationTimeline";

import { Html } from '@react-three/drei';

function AnimatedPhotoOverlay(props){
  const { photoUrl, startingScale, endingScale} = props;
  const imgRef = useRef();
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!loaded) { return; }
    // Here we define the entire sequence of animations for the camera using GSAP
    AnimationTimeline.to(
      ".photo-overlay-img",
      { scale: startingScale,},
      "slide1"
    );

    AnimationTimeline.to(
      ".photo-overlay-img",
      { scale: endingScale, },
      "slide2"
    );
    
    AnimationTimeline.to(
      ".photo-overlay-img",
      { opacity: 0, },
      "slide3"
    );
    
    AnimationTimeline.to(".photo-overlay-img", {}, "slide4");
    AnimationTimeline.to(".photo-overlay-img", {}, "slide5");
    AnimationTimeline.to(".photo-overlay-img", {}, "slide6");
    AnimationTimeline.to(".photo-overlay-img", {}, "slide7");
    AnimationTimeline.to(".photo-overlay-img", {}, "slide8");
    
    
    return () => AnimationTimeline.kill();
  }, [loaded]);
  
  
  return (<Html>
      <div className="photo-overlay">
        <img src={photoUrl} ref={imgRef} className="photo-overlay-img" onLoad={() => setLoaded(true)}></img>
      </div>
    </Html>);
}

export default AnimatedPhotoOverlay;