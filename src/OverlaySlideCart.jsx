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
