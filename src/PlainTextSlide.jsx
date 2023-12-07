function PlainTextSlide(props) {
    const { children, viewportPosition } = props;
    return (
      <div className="plainTextSlide"
        style={{
          top: `${viewportPosition}vh`,
        }}>
        {children}
      </div>
    );
  }
  
  export default PlainTextSlide;