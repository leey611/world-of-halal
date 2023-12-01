import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";

import { MathUtils } from "three";

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    // We need to stall until the camera animations start
    AnimationTimeline.to(cameraRef.current.position, {duration: AnimationTimings.Start}, "start");
    AnimationTimeline.to(cameraRef.current.position, {duration: AnimationTimings.PhotoScale }, "photo-scale");
    AnimationTimeline.to(cameraRef.current.position, {duration: AnimationTimings.PhotoFade }, "photo-fade");

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -10,
        y: 20,
        z: -140,
        duration: AnimationTimings.Camera1
      },
      "camera-1"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: MathUtils.degToRad(-10),
        y: MathUtils.degToRad(-20),
        z: 0,
        duration: AnimationTimings.Camera1
      },
      "camera-1"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: MathUtils.degToRad(20),
        z: 0,
        duration: AnimationTimings.Camera2
      },
      "camera-2"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: AnimationTimings.Camera3
      },
      "camera-3"
    );
    
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: AnimationTimings.Camera4
      },
      "camera-4"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: -100,
        z: 0,
        duration: AnimationTimings.Camera4
      },
      "camera-4"
    );
    
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: MathUtils.degToRad(-20),
        y: 0,
        z: 0,
        duration: AnimationTimings.Camera5
      },
      "camera-5"
    );

    AnimationTimeline.to(cameraRef.current.position, {duration: AnimationTimings.End}, "camera-end");

    return () => AnimationTimeline.kill();
  }, []);
  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
  );
}

export default AnimatedCamera;
