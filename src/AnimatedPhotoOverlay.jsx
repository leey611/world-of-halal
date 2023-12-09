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
  
    return () => AnimationTimeline.kill();
  }, [loaded]);
  
  
  return (<Html calculatePosition={() => [0, 0, 0]}>
      <div className="photo-overlay">
        <img src={photoUrl} ref={imgRef} className="photo-overlay-img" onLoad={() => setLoaded(true)}></img>
      </div>
    </Html>);
}

export default AnimatedPhotoOverlay;