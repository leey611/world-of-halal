import "./App.css"

function TitleSlide(props){
  const { children, viewportPosition, title, subtitle } = props;
  
  return (<div className="titleSlide" style={{position: "absolute", paddingLeft: "20px", top: `${viewportPosition}vh`, zIndex: "50"}}>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  )
}

export default TitleSlide;