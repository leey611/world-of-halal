import { useRef, useEffect } from "react";
import { Sphere, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BackSide } from "three";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";

const photoScale = 20;
const rotationSpeed = 0.001;

function PhotoSphere(props) {
  const { children, photoUrl, position } = props;
  const texture = useTexture(photoUrl);
  const sphereRef = useRef();
  const meshRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(meshRef.current, {opacity: 1, duration: AnimationTimings.FadeSphereIn}, "fade-sphere-in"); 
    return () => AnimationTimeline.kill();
  }, [meshRef]);
  
  useFrame(() => {
    sphereRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh position={position} rotation={[0.2, 3.1, 0]} scale={photoScale} ref={sphereRef}>
        <sphereGeometry/>
        <meshStandardMaterial ref={meshRef} map={texture} side={BackSide} transparent={true} opacity={0}/>
      {children}
    </mesh>
    
  );

}

export default PhotoSphere;