import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Html } from "@react-three/drei";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import WaitForElement from "./WaitForElement";
import * as THREE from "three";

const fbxUrl = `${import.meta.env.BASE_URL}/models/halal-cart2.fbx`;
const cartBodyUrl = `${import.meta.env.BASE_URL}/models/cart-body.fbx`;
const chassisAndItemsUrl = `${import.meta.env.BASE_URL}/models/chassis-and-items.fbx`;
const drinkCoolerBodyUrl = `${import.meta.env.BASE_URL}/models/drink-cooler-body.fbx`;
const drinkCoolerDoorUrl = `${import.meta.env.BASE_URL}/models/drink-cooler-door.fbx`;
const drinkCoolerDoorLeftUrl = `${import.meta.env.BASE_URL}/models/drink-cooler-outside-door-left.fbx`;
const drinkCoolerDoorRightUrl = `${import.meta.env.BASE_URL}/models/drink-cooler-outside-door-right.fbx`;
const flatGrillUrl = `${import.meta.env.BASE_URL}/models/flat-grill.fbx`;
const floorSpaceUrl = `${import.meta.env.BASE_URL}/models/floor-space.fbx`;
const generatorUrl = `${import.meta.env.BASE_URL}/models/generator.fbx`;
const gyroWheelUrl = `${import.meta.env.BASE_URL}/models/gyro-wheel.fbx`;
const ledPanelUrl = `${import.meta.env.BASE_URL}/models/led-panel.fbx`;
const slidingDoorUrl = `${import.meta.env.BASE_URL}/models/sliding-door.fbx`;
const sodaUrl = `${import.meta.env.BASE_URL}/models/soda.fbx`;
const storageUrl = `${import.meta.env.BASE_URL}/models/storage.fbx`;
const topBannerUrl = `${import.meta.env.BASE_URL}/models/top-banner.fbx`;

const normalMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 1
});

const highlightMat = new THREE.MeshStandardMaterial({
  color: 0xff9854,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0,
});

function LoadModel(url){
  const normalModel = useLoader(FBXLoader, url);
  const highlightModel = normalModel.clone();
  
  if (normalModel) {
    normalModel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = normalMat.clone();
      }
    });
  }

  if (highlightModel) {
    highlightModel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = highlightMat.clone();
      }
    });
  }
  return [normalModel, highlightModel];
}

function FoodCart(props) {
  const { position } = props;

  const cartBodyRef = useRef();
  const cartBodyHighlightRef = useRef();
  const chassisAndItemsRef = useRef();
  const chassisAndItemsHighlightRef = useRef();
  const drinkCoolerBodyRef = useRef();
  const drinkCoolerBodyHighlightRef = useRef();
  const drinkCoolerDoorRef = useRef();
  const drinkCoolerDoorHighlightRef = useRef();
  const drinkCoolerDoorLeftRef = useRef();
  const drinkCoolerDoorLeftHighlightRef = useRef();
  const drinkCoolerDoorRightRef = useRef();
  const drinkCoolerDoorRightHighlightRef = useRef();
  const flatGrillRef = useRef();
  const flatGrillHighlightRef = useRef();
  const floorSpaceRef = useRef();
  const floorSpacHighlightRef = useRef();
  const generatorRef = useRef();
  const generatorHighlightRef = useRef();
  const gyroWheelRef = useRef();
  const gyroWheelHighlightRef = useRef();
  const ledPanelRef = useRef();
  const ledPanelHighlightRef = useRef();
  const slidingDoorRef = useRef();
  const slidingDooHighlightrRef = useRef();
  const sodaRef = useRef();
  const sodaHighlightRef = useRef();
  const storageRef = useRef();
  const storageHighlightRef = useRef();
  const topBannerRef = useRef();
  const topBannerHighlightRef = useRef();


  const [cartBody, cartBodyHighlight] = LoadModel(cartBodyUrl);
  const [chassisAndItems, chassisAndItemsHighlight] = LoadModel(chassisAndItemsUrl);
  const [drinkCoolerBody, drinkCoolerBodyHighlight] = LoadModel(drinkCoolerBodyUrl);
  const [drinkCoolerDoor, drinkCoolerDoorHighlight] = LoadModel(drinkCoolerDoorUrl);
  const [drinkCoolerDoorRight, drinkCoolerDoorRightHighlight] = LoadModel(drinkCoolerDoorRightUrl);
  const [drinkCoolerDoorLeft, drinkCoolerDoorLeftHighlight] = LoadModel(drinkCoolerDoorLeftUrl);
  const [flatGrill, flatGrillHighlight] = LoadModel(flatGrillUrl);
  const [floorSpace, floorSpaceHighlight] = LoadModel(floorSpaceUrl);
  const [generator, generatorHighlight] = LoadModel(generatorUrl);
  const [gyroWheel, gyroWheelHighlight] = LoadModel(gyroWheelUrl);
  const [ledPanel, ledPanelHighlight] = LoadModel(ledPanelUrl);
  const [slidingDoor, slidingDoorHighlight] = LoadModel(slidingDoorUrl);
  const [soda, sodaHighlight] = LoadModel(sodaUrl);
  const [storage, storageHighlight] = LoadModel(storageUrl);
  const [topBanner, topBannerHighlight] = LoadModel(topBannerUrl);

  const rotation = [-Math.PI / 2, 0.01, 0];
  const scale = 0.04;

  useEffect(() => {

    AnimationTimeline.to(
      generatorRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera1 },
      "camera-1"
    );
    AnimationTimeline.to(
      generatorHighlightRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera1 },
      "camera-1"
    );

    AnimationTimeline.to(
      generatorRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera2 },
      "camera-2"
    );
    AnimationTimeline.to(
      generatorHighlightRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera2 },
      "camera-2"
    );
    for (var i = 0; i < drinkCoolerBodyRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        drinkCoolerBodyRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Camera2 },
        "camera-2"
      );
      AnimationTimeline.to(
        drinkCoolerBodyHighlightRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Camera2 },
        "camera-2"
      );
    }
    AnimationTimeline.to(
      sodaRef.current.children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera2 },
      "camera-2"
    );
    AnimationTimeline.to(
      sodaHighlightRef.current.children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera2 },
      "camera-2"
    );

    for (var i = 0; i < drinkCoolerDoorLeftRef.current.children.length; i++){
      for (var j = 0; j < drinkCoolerDoorLeftRef.current.children[i].length; j++){
        AnimationTimeline.to(
          drinkCoolerDoorLeftRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera2 },
          "camera-2"
        );
        AnimationTimeline.to(
          drinkCoolerDoorLeftHighlightRef.current.children[i].children[j].material,
          { opacity: 0.4, duration: AnimationTimings.Camera2 },
          "camera-2"
        );
        AnimationTimeline.to(
          drinkCoolerDoorRightRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera2 },
          "camera-2"
        );
        AnimationTimeline.to(
          drinkCoolerDoorRightHighlightRef.current.children[i].children[j].material,
          { opacity: 0.4, duration: AnimationTimings.Camera2 },
          "camera-2"
        );
      }
    }
    
    for (var i = 0; i < drinkCoolerBodyRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        drinkCoolerBodyRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Camera4 },
        "camera-4"
      );
      AnimationTimeline.to(
        drinkCoolerBodyHighlightRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Camera4 },
        "camera-4"
      );
    }
    AnimationTimeline.to(
      sodaRef.current.children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera4 },
      "camera-4"
    );
    AnimationTimeline.to(
      sodaHighlightRef.current.children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera4 },
      "camera-4"
    );
    for (var i = 0; i < drinkCoolerDoorLeftRef.current.children.length; i++){
      for (var j = 0; j < drinkCoolerDoorLeftRef.current.children[i].length; j++){
        AnimationTimeline.to(
          drinkCoolerDoorLeftRef.current.children[i].children[j].material,
          { opacity: 1, duration: AnimationTimings.Camera4 },
          "camera-4"
        );
        AnimationTimeline.to(
          drinkCoolerDoorLeftHighlightRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera4 },
          "camera-4"
        );
        AnimationTimeline.to(
          drinkCoolerDoorRightRef.current.children[i].children[j].material,
          { opacity: 1, duration: AnimationTimings.Camera4 },
          "camera-4"
        );
        AnimationTimeline.to(
          drinkCoolerDoorRightHighlightRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera4 },
          "camera-4"
        );
      }
    }
    for (var i = 0; i < ledPanelRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        ledPanelRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Camera4 },
        "camera-4"
      );
      AnimationTimeline.to(
        ledPanelHighlightRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Camera4 },
        "camera-4"
      );
    }
    
    AnimationTimeline.to(
      cartBodyRef.current.position,
      {y: 150, z: position[2] - 0.1, duration: AnimationTimings.Wait35 },
      "wait-35"
    );
    AnimationTimeline.to(
      generatorRef.current.position,
      {y: 150, duration: AnimationTimings.Wait35 },
      "wait-35"
    );
    AnimationTimeline.to(
      ledPanelRef.current.position,
      {y: 150, duration: AnimationTimings.Wait35 },
      "wait-35"
    );
    AnimationTimeline.to(
      ledPanelHighlightRef.current.position,
      {y: 150, duration: AnimationTimings.Wait35 },
      "wait-35"
    );
    AnimationTimeline.to(
      topBannerRef.current.position,
      {y: 150, duration: AnimationTimings.Wait35 },
      "wait-35"
    );
    AnimationTimeline.to(
      slidingDoorRef.current.position,
      {y: 150, duration: AnimationTimings.Wait35 },
      "wait-35"
    );

    for (var i = 0; i < ledPanelRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        ledPanelRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Wait35 },
        "wait-35"
      );
      AnimationTimeline.to(
        ledPanelHighlightRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Wait35 },
        "wait-35"
      );
    }
    
    AnimationTimeline.to(
      flatGrillRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera5 },
      "camera-5"
    );
    AnimationTimeline.to(
      flatGrillHighlightRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera5 },
      "camera-5"
    );

    AnimationTimeline.to(
      flatGrillRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera6 },
      "camera-6"
    );
    AnimationTimeline.to(
      flatGrillHighlightRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera6 },
      "camera-6"
    );
    for (var i = 0; i < gyroWheelRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        gyroWheelRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Camera6 },
        "camera-6"
      );
      AnimationTimeline.to(
        gyroWheelHighlightRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Camera6 },
        "camera-6"
      );
    }

    for (var i = 0; i < gyroWheelRef.current.children[0].children.length; i++){
      AnimationTimeline.to(
        gyroWheelRef.current.children[0].children[i].material,
        { opacity: 1, duration: AnimationTimings.Camera7 },
        "camera-7"
      );
      AnimationTimeline.to(
        gyroWheelHighlightRef.current.children[0].children[i].material,
        { opacity: 0, duration: AnimationTimings.Camera7 },
        "camera-7"
      );
    }
    for (var i = 0; i < storageRef.current.children.length; i++){
      for (var j = 0; j < storageRef.current.children[i].children.length; j++){
        AnimationTimeline.to(
          storageRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera7 },
          "camera-7"
        );
        AnimationTimeline.to(
          storageHighlightRef.current.children[i].children[j].material,
          { opacity: 1, duration: AnimationTimings.Camera7 },
          "camera-7"
        );
      }
    }

    for (var i = 0; i < storageRef.current.children.length; i++){
      for (var j = 0; j < storageRef.current.children[i].children.length; j++){
        AnimationTimeline.to(
          storageHighlightRef.current.children[i].children[j].material,
          { opacity: 0, duration: AnimationTimings.Camera8 },
          "camera-8"
        );
      }
    }
    AnimationTimeline.to(
      floorSpaceRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.Camera8 },
      "camera-8"
    );
    AnimationTimeline.to(
      floorSpacHighlightRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.Camera8 },
      "camera-8"
    );

    for (var i = 0; i < storageRef.current.children.length; i++){
      for (var j = 0; j < storageRef.current.children[i].children.length; j++){
        AnimationTimeline.to(
          storageRef.current.children[i].children[j].material,
          { opacity: 1, duration: AnimationTimings.WaitEnd},
          "wait-end"
        );
      }
    }
    
    AnimationTimeline.to(
      floorSpaceRef.current.children[0].children[0].material,
      { opacity: 1, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      floorSpacHighlightRef.current.children[0].children[0].material,
      { opacity: 0, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      cartBodyRef.current.position,
      {y: -54,  duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      generatorRef.current.position,
      {y: -54, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      ledPanelRef.current.position,
      {y: -54, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      ledPanelHighlightRef.current.position,
      {y: -54, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      topBannerRef.current.position,
      {y: -54, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );
    AnimationTimeline.to(
      slidingDoorRef.current.position,
      {y: -54, duration: AnimationTimings.WaitEnd },
      "wait-end"
    );

    return () => AnimationTimeline.kill();
  }, [generatorRef]);

  return (
    <group>
      <primitive object={cartBody} position={position} rotation={rotation} scale={scale} ref={cartBodyRef}></primitive>
      <primitive object={cartBodyHighlight} position={position} rotation={rotation} scale={scale} ref={cartBodyHighlightRef}>
      </primitive>

      <primitive object={chassisAndItems} position={position} rotation={rotation} scale={scale} ref={chassisAndItemsRef}></primitive>
      <primitive object={chassisAndItemsHighlight} position={position} rotation={rotation} scale={scale} ref={chassisAndItemsHighlightRef}></primitive>

      <primitive object={drinkCoolerBody} position={position} rotation={rotation} scale={scale} ref={drinkCoolerBodyRef}></primitive>
      <primitive object={drinkCoolerBodyHighlight} position={position} rotation={rotation} scale={scale} ref={drinkCoolerBodyHighlightRef}></primitive>

      <primitive object={drinkCoolerDoor} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorRef}></primitive>
      <primitive object={drinkCoolerDoorHighlight} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorHighlightRef}></primitive>
      <primitive object={drinkCoolerDoorLeft} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorLeftRef}></primitive>
      <primitive object={drinkCoolerDoorLeftHighlight} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorLeftHighlightRef}></primitive>
      <primitive object={drinkCoolerDoorRight} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorRightRef}></primitive>
      <primitive object={drinkCoolerDoorRightHighlight} position={position} rotation={rotation} scale={scale} ref={drinkCoolerDoorRightHighlightRef}></primitive>

      <primitive object={flatGrill} position={position} rotation={rotation} scale={scale} ref={flatGrillRef}></primitive>
      <primitive object={flatGrillHighlight} position={position} rotation={rotation} scale={scale}ref={flatGrillHighlightRef}></primitive>

      <primitive object={floorSpace} position={position} rotation={rotation} scale={scale} ref={floorSpaceRef}></primitive>
      <primitive object={floorSpaceHighlight} position={[position[0], position[1]+0.1, position[2]]} rotation={rotation} scale={scale} ref={floorSpacHighlightRef}></primitive>

      <primitive object={generator} position={position} rotation={rotation} scale={scale} ref={generatorRef}></primitive>
      <primitive object={generatorHighlight} position={position} rotation={rotation} scale={scale} ref={generatorHighlightRef}></primitive>

      <primitive object={gyroWheel} position={position} rotation={rotation} scale={scale} ref={gyroWheelRef}></primitive>
      <primitive object={gyroWheelHighlight} position={position} rotation={rotation} scale={scale}ref={gyroWheelHighlightRef}></primitive>

      <primitive object={ledPanel} position={position} rotation={rotation} scale={scale} ref={ledPanelRef}></primitive>
      <primitive object={ledPanelHighlight} position={position} rotation={rotation} scale={scale} ref={ledPanelHighlightRef}></primitive>

      <primitive object={slidingDoor} position={position} rotation={rotation} scale={scale} ref={slidingDoorRef}></primitive>
      <primitive object={slidingDoorHighlight} position={position} rotation={rotation} scale={scale} ref={slidingDooHighlightrRef}></primitive>

      <primitive object={soda} position={position} rotation={rotation} scale={scale} ref={sodaRef}></primitive>
      <primitive object={sodaHighlight} position={position} rotation={rotation} scale={scale} ref={sodaHighlightRef}></primitive>

      <primitive object={storage} position={position} rotation={rotation} scale={scale} ref={storageRef}></primitive>
      <primitive object={storageHighlight} position={position} rotation={rotation} scale={scale} ref={storageHighlightRef}></primitive>

      <primitive object={topBanner} position={position} rotation={rotation} scale={scale} ref={topBannerRef}></primitive>
      <primitive object={topBannerHighlight} position={position} rotation={rotation} scale={scale} ref={topBannerHighlightRef}></primitive>
    </group>
    
  );
}

export default FoodCart;
