import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import { AnimationTimeline } from "./AnimationTimeline";

import { MathUtils } from "three";

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(cameraRef.current.position, {}, "slide1");
    AnimationTimeline.to(cameraRef.current.position, {}, "slide2");
    AnimationTimeline.to(cameraRef.current.position, {}, "slide3");
    
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -10,
        y: 20,
        z: -140,
      },
      "slide4"
    );
    
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: MathUtils.degToRad(-10),
        y: MathUtils.degToRad(-20),
        z: 0,
      },
      "slide4"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: MathUtils.degToRad(20),
        z: 0,
      },

      "slide5"
    );


    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      "slide6"
    );
    
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      "slide6"
    );
    
    
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: -100,
        z: 0,
      },
      "slide7"
    );
    
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: MathUtils.degToRad(-20),
        y: 0,
        z: 0,
      },
      "slide8"
    );

    return () => AnimationTimeline.kill();
  }, []);
  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
  );
}

export default AnimatedCamera;
