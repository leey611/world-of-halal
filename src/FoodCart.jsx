import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import * as THREE from "three";

const fbxUrl = "/models/halal-cart.fbx"

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
  
  return <primitive object={model} position={position} rotation={[-Math.PI/2, 0, Math.PI]}/>
}

export default FoodCart;