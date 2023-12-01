import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import AnimatedCamera from "./AnimatedCamera";
import FoodCart from "./FoodCart";
import PhotoSphere from "./PhotoSphere";
import AnimatedPhotoOverlay from "./AnimatedPhotoOverlay";

const photoOverlayUrl = '/images/halal-photo-1.jpg'
const photoSphereUrl = '/images/sphere_small.jpg'

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas>
        <Environment preset="night" />

        {/* Camera 🎥 */}
        <AnimatedCamera />
        
        {/* Lights 💡 */}
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 80, -200]} intensity={5000} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["white"]} attach="background" />



        <Suspense fallback={null}>
        <AnimatedPhotoOverlay photoUrl={photoOverlayUrl} startingScale={1} endingScale={0.6}/>
          <FoodCart position={[60, -30, -250]} />
          <PhotoSphere photoUrl={photoSphereUrl} position={[0,-100,0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;