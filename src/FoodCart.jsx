import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Html } from "@react-three/drei";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import WaitForElement from "./WaitForElement";
import * as THREE from "three";

const fbxUrl = "/models/halal-cart.fbx";

function Marker(props) {
  const { children, position, title, id, startDuration, startCameraMovement } =
    props;

  const markerRef = useRef();

  useEffect(() => {
    WaitForElement("#" + id).then((elm) => {
      AnimationTimeline.to(
        "#" + id,
        { opacity: 1, duration: startDuration },
        startCameraMovement
      );

      AnimationTimeline.to(
        "#" + id,
        { opacity: 0, duration: AnimationTimings.Camera4 },
        "camera-4"
      );
    });
    return () => AnimationTimeline.kill();
  }, []);

  return (
    <Html ref={markerRef} style={{ color: "black" }} position={position}>
      <div className="marker-div" id={id}>
        {title ? <div className="marker-title">{title}</div> : null}
        <div className="marker-body">{children}</div>
      </div>
    </Html>
  );
}

function FoodCart(props) {
  const { position } = props;
  const cartRef = useRef();

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });

  const model = useLoader(FBXLoader, fbxUrl);
  if (model && mat) {
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = mat;
      }
    });
  }

  return (
    <primitive
      ref={cartRef}
      object={model}
      position={position}
      rotation={[-Math.PI / 2, 0, Math.PI]}
    >
      {/* <Marker
        position={[200, 4, 0]}
        title="Generator"
        id="marker-1"
        startDuration={AnimationTimings.Camera2}
        startCameraMovement="camera-2"
      >
        The heart of Ayman’s truck is a generator mounted to the back of the
        cart. The generator runs all appliances in the truck, and also a freezer
        in his family’s car, which he parks right behind it.
      </Marker>

      <Marker
        position={[0, -300, 0]}
        title="Flat Grill"
        id="marker-2"
        startDuration={AnimationTimings.Camera1}
        startCameraMovement="camera-1"
      >
        Here's where the magic happens-- chicken and lamb are diced,
        seasoned, and grilled to perfection.
      </Marker> */}
    </primitive>
  );
}

export default FoodCart;
