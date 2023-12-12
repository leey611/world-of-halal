// Change position in App.css
function OverlaySlideBlack(props) {
  const { children } = props;
  return (
    <div className="overlaySlideBlack">
      {children}
    </div>
  );
}

export default OverlaySlideBlack;
