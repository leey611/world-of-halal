import { useRef, useEffect } from "react";

import { Html } from "@react-three/drei";
import { AnimationTimeline } from "./AnimationTimeline";
import { AnimationTimings } from "./AnimationTimings";
import WaitForElement from "./WaitForElement";

function OverlaySlideCart(props) {
  const { children, viewportPosition, title, id } = props;
  return (
    <div
      className="overlaySlideCart"
      id={id}
      style={{
        top: `${viewportPosition}vh`,
      }}
    >
      {title ? <div className="marker-title">{title}</div> : null}
      {children}
    </div>
  );
}

export default OverlaySlideCart;
