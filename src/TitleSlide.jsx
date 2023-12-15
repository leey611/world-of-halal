import "./App.css"

function TitleSlide(props){
  const { children, viewportPosition, title, subtitle, credits } = props;
  
  return (<>
    <div className="titleSlide" style={{position: "absolute", top: `${viewportPosition}vh`, zIndex: "50"}}>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      
    </div>
    {credits && <div className="credits">{credits}</div>}
    
  </>
  )
}

export default TitleSlide;