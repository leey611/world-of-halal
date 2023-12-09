function OverlaySlideBlack(props) {
  const { children, viewportPosition } = props;
  return (
    <div
      className="overlaySlideBlack"
      style={{
        top: `${viewportPosition}vh`,
      }}
    >
      {children}
    </div>
  );
}

export default OverlaySlideBlack;
