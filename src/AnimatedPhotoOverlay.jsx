import { useRef, useEffect, useState } from "react";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import { Html } from '@react-three/drei';

function AnimatedPhotoOverlay(props){
  const { photoUrl, startingScale, endingScale} = props;
  const imgRef = useRef();
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!loaded) { return; }

    AnimationTimeline.to(".photo-overlay-img", {duration: AnimationTimings.Start}, "start");

    AnimationTimeline.to(
      ".photo-overlay-img",
      { scale: endingScale, duration: AnimationTimings.PhotoScale },
      "photo-scale"
    );
    
    AnimationTimeline.to(
      ".photo-overlay-img",
      { opacity: 0, duration: AnimationTimings.PhotoFade },
      "photo-fade"
    );
    
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.Camera1 }, "camera-1");
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.Camera2 }, "camera-2");
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.Camera3 }, "camera-3");
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.Camera4 }, "camera-4");
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.Camera5 }, "camera-5");
    AnimationTimeline.to(".photo-overlay-img", { duration: AnimationTimings.End }, "camera-end");

    return () => AnimationTimeline.kill();
  }, [loaded]);
  
  
  return (<Html>
      <div className="photo-overlay">
        <img src={photoUrl} ref={imgRef} className="photo-overlay-img" onLoad={() => setLoaded(true)}></img>
      </div>
    </Html>);
}

export default AnimatedPhotoOverlay;