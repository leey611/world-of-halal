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
      <TitleSlide viewportPosition={0} title={"The King of Halal"} subtitle={"How one man and his halal cart keeps Downtown Brooklyn fed"} credits={"By Joyce Chen, Yu Lee, Oliver Zichen Yuan, & Isabel Lee"}></TitleSlide>
      <SimpleSlide viewportPosition={100}>On the side of Brooklyn Bridge Boulevard, in the heart of downtown Brooklyn, you’ll find an establishment that has withstood the test of time. Ayman [Surname] has operated his halal cart King Halal Food since 2000, nearly half of the 51-year-old’s life. He is one of an estimated 20,000 vendors that work tirelessly to feed the people of New York City every day. </SimpleSlide>

      <SimpleSlide viewportPosition={150}>“Me? I stay here. I don’t change,” Mr. Ayman says, standing at the rear of his truck while a steady line forms in front. We visited him on a gusty Wednesday, during an off hour in the afternoon-- and yet, people kept lining up, drawn by the sizzle and aroma of fire-grilled meat.</SimpleSlide>
      
      <SimpleSlide viewportPosition={190}>Ayman’s cart is his pride and joy. He upgraded from his original cart in 2013, pouring tens of thousands of dollars to deck the vehicle out in deep fryers, a spinning kebab wheel, and LED signs that border the roof. In it, he weathers intense lunch rushes, sweltering summers without AC, and brutal, empty winters. So what does it take to turn an unassuming food truck into a beloved Brooklyn mainstay? Through spatial analysis, we break all the intricacies of a New York City halal cart.
</SimpleSlide>
      <SimpleSlide viewportPosition={500}>Hello from slide 4</SimpleSlide>
      <SimpleSlide viewportPosition={550}>Hello from slide 5</SimpleSlide>

      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
