import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";

import { MathUtils } from "three";

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    // We need to stall until the camera animations start
    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Start },
      "start"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.PhotoScale },
      "photo-scale"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.PhotoFade },
      "photo-fade"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -60,
        y: -40,
        z: -100,
        duration: AnimationTimings.Camera1,
      },
      "camera-1"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait1 },
      "wait-1"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -10,
        y: -35,
        z: -100,
        duration: AnimationTimings.Camera2,
      },
      "camera-2"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait2 },
      "wait-2"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 70,
        z: 0,
        duration: AnimationTimings.Camera3,
      },
      "camera-3"
    );
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: -0.4,
        y: 0,
        z: 0,
        duration: AnimationTimings.Camera3,
      },
      "camera-3"
    );

    AnimationTimeline.to(
      //LED
      cameraRef.current.position,
      {
        x: -170,
        y: 65,
        z: -360,
        duration: AnimationTimings.Camera4,
      },
      "camera-4"
    );
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0.52,
        y: -2.38,
        z: 0.4,
        duration: AnimationTimings.Camera4,
      },
      "camera-4"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait3 },
      "wait-3"
    );

    AnimationTimeline.to(
      //grill
      cameraRef.current.position,
      {
        x: 8,
        y: 2,
        z: -235,
        duration: AnimationTimings.Camera5,
      },
      "camera-5"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0.5,
        y: -3.3,
        z: 0,
        duration: AnimationTimings.Camera5,
      },
      "camera-5"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait5 },
      "wait-5"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Camera6 },
      "camera-6"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait6 },
      "wait-6"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Camera7 },
      "camera-7"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait7 },
      "wait-7"
    );

    // floor (chair's position):
    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 20,
    //     y: -15,
    //     z: -250,
    //     duration: AnimationTimings.Camera5,
    //   },
    //   "camera-5"
    // );

    // AnimationTimeline.to(
    //   cameraRef.current.rotation,
    //   {
    //     x: 0.8,
    //     y: -3.0,
    //     z: 0.1,
    //     duration: AnimationTimings.Camera5,
    //   },
    //   "camera-5"
    // );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 20,
        y: 200,
        z: -210,
        duration: AnimationTimings.Camera8,
      },
      "camera-8"
    );
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: Math.PI / 2,
        y: -Math.PI,
        z: 0,
        duration: AnimationTimings.Camera8,
      },
      "camera-8"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.Wait8 },
      "wait-8"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: AnimationTimings.WaitEnd,
      },
      "wait-end"
    );
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: AnimationTimings.WaitEnd,
      },
      "wait-end"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.FadeCartIn },
      "fade-cart-in"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -10,
        y: 0,
        z: -140,
        duration: AnimationTimings.ZoomInCart,
      },
      "zoom-in-cart"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: MathUtils.degToRad(-10),
        y: 0,
        z: 0,
        duration: AnimationTimings.ZoomInCart,
      },
      "zoom-in-cart"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.FadeSphereIn },
      "fade-sphere-in"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      { duration: AnimationTimings.End },
      "camera-end"
    );

    return () => AnimationTimeline.kill();
  }, []);
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />;
}

export default AnimatedCamera;
