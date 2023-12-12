import { useRef, useEffect, useState } from "react";
import { Sphere, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BackSide } from "three";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import { useGesture } from "react-use-gesture";
import WaitForElement from "./WaitForElement";

const photoScale = 20;
const rotationSpeed = 0.001;
const dragImgUrl = `${import.meta.env.BASE_URL}/images/drag.png`;

function PhotoSphere(props) {
  const { children, photoUrl, position } = props;
  const texture = useTexture(photoUrl);
  const sphereRef = useRef();
  const meshRef = useRef();
  const [ rotationX, setRotationX ] = useState(0);
  const [ rotationY, setRotationY ] = useState(0);
  const [ hasDragged, setHasDragged ] = useState(false)
  const bind = useGesture({
    onDrag: (e) => { 
      if (!hasDragged){
        setHasDragged(true);
        document.getElementsByClassName("drag-img-container")[0].style.display = "none";
      }
      console.log(e)
      setRotationX(e.movement[1]); 
      setRotationY(e.movement[0]);
     }
  })

  useEffect(() => {
    AnimationTimeline.to(meshRef.current, {opacity: 1, duration: AnimationTimings.FadeSphereIn}, "fade-sphere-in"); 

    WaitForElement(".drag-img-container").then((elm) => {
      AnimationTimeline.to(
        ".drag-img-container",
        { opacity: 1, duration: AnimationTimings.FadeSphereIn },
        "fade-sphere-in"
      );
    });

    return () => AnimationTimeline.kill();
  }, [meshRef]);
  
  useFrame(() => {
    if (!hasDragged){
      sphereRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh position={position} rotation={[0.2 + (rotationX / 200), 3.1 + (rotationY / 200), 0]} scale={photoScale} ref={sphereRef} {...bind()}>
        <sphereGeometry/>
        <meshStandardMaterial ref={meshRef} map={texture} side={BackSide} transparent={true} opacity={0}/>
        <Html calculatePosition={() => [0, 0, 0]}><div className="drag-img-container">
          <div className="drag-img-div"> <img className="drag-img" src={dragImgUrl} /> </div>
          </div>
        </Html>
      {children}
    </mesh>
  );

}

export default PhotoSphere;