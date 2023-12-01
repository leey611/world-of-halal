import { useEffect } from "react";

import Scene from "./Scene";
import SimpleSlide from "./SimpleSlide";
import TitleSlide from "./TitleSlide";

import { AnimationTimeline } from "./AnimationTimeline";

import "./App.css";

function getScrollProgress() {
  const winScroll = window.document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  return winScroll / height;
}

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();

      // console.log(`Scroll progress: ${progress}`);
      AnimationTimeline.progress(scrolled);

      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;
      };
    };
  }, []);

  return (
    <div id="article_wrapper">
      {/* HTML slides are nested here and we use vh values to specify where they are */}
      <TitleSlide viewportPosition={0} title={"Working Title"} subtitle={"Working subtitle"}></TitleSlide>
      <SimpleSlide viewportPosition={50}>Hello from slide 1</SimpleSlide>
      <SimpleSlide viewportPosition={100}>Hello from slide 2</SimpleSlide>
      <SimpleSlide viewportPosition={200}>Hello from slide 3</SimpleSlide>
      <SimpleSlide viewportPosition={300}>Hello from slide 4</SimpleSlide>
      <SimpleSlide viewportPosition={550}>Hello from slide 5</SimpleSlide>

      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
