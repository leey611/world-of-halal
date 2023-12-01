function SimpleSlide(props) {
    const { children, viewportPosition } = props;
    return (
      <div className="simpleSlide"
        style={{
          top: `${viewportPosition}vh`,
        }}
      >
        {children}
      </div>
    );
  }
  
  export default SimpleSlide;