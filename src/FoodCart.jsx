import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Html } from "@react-three/drei";
import * as THREE from "three";

const fbxUrl = "/models/halal-cart.fbx"

function Marker(props) {
  const { children, position, title } = props;
  return (
    <Html style={{ color: "black" }} position={position}>
      <div className="marker-div">
        {title ? 
        <div className="marker-title">
          {title}
        </div> : null}
        <div className="marker-body">
          {children}
        </div>
      </div>
    </Html>
  );
}

function FoodCart(props){
  const {children, position} = props;
  
  const mat = new THREE.MeshToonMaterial({color: 0xe6e6e6, side: THREE.DoubleSide});
  
  const model = useLoader(FBXLoader, fbxUrl);
  if (model && mat) {
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = mat;
      }
    });
  }
  
  return <primitive object={model} position={position} rotation={[-Math.PI/2, 0, Math.PI]}>
     <Marker position={[200, 4, 0]} title="">The heart of Ayman’s truck is a generator mounted to the back of the cart. The generator runs all appliances in the truck, and also a freezer in his family’s car, which he parks right behind it.</Marker>

     <Marker position={[0, -300, 0]} title="">The flat grill is where the magic happens-- chicken and lamb are diced, seasoned, and grilled to perfection.</Marker>
  </primitive>
}

export default FoodCart;