function OverlaySlide(props) {
    const { children, viewportPosition } = props;
    return (
      <div className="overlaySlide"
        style={{
          top: `${viewportPosition}vh`,
        }}
      >
        {children}
      </div>
    );
  }
  
  export default OverlaySlide;