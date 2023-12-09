import { useEffect } from "react";

import Scene from "./Scene";
import OverlaySlide from "./OverlaySlide";
import TitleSlide from "./TitleSlide";
import PlainTextSlide from "./PlainTextSlide";

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
      <TitleSlide
        viewportPosition={4}
        title={"The King of Halal"}
        subtitle={"How one man keeps Downtown Brooklyn fed"}
      ></TitleSlide>

      <OverlaySlide viewportPosition={100}>
        On the side of Brooklyn Bridge Boulevard, in the heart of downtown
        Brooklyn, you’ll find an establishment that has withstood the test of
        time. Ayman [Surname] has operated his halal cart King Halal Food since
        2000, nearly half of the 51-year-old’s life. He is one of an estimated
        20,000 vendors that work tirelessly to feed the people of New York City
        every day.{" "}
      </OverlaySlide>

      <OverlaySlide viewportPosition={120}>
      “Me? I stay here. I don’t change,” Mr. Ayman says, standing at the rear of his truck while his employee cooks for customers inside. We visited him on a gusty Wednesday, on what he claimed would be an off-hour– still, though, people continued to line up at the window, drawn by the sizzle and aroma of fire-grilled meat.   
      </OverlaySlide>

      <OverlaySlide viewportPosition={140}>
        Ayman’s cart is his pride and joy. He upgraded from his original cart in
        2013, pouring tens of thousands of dollars to deck the vehicle out in
        deep fryers, a spinning kebab wheel, and LED signs that border the roof.
        In it, he weathers intense lunch rushes, sweltering summers without AC,
        and brutal, deserted winters. So what does it take to turn an unassuming
        food truck into a beloved Brooklyn mainstay? Through spatial analysis,
        we break all the intricacies of a New York City halal cart.
      </OverlaySlide>

      {/* Initial Cart Overview Here */}

      <PlainTextSlide viewportPosition={700}>
        Ayman’s day starts early-- he wakes in Bay Ridge, Brooklyn, where he
        lives with his family, and drives up to Red Hook by 7 am to retrieve his
        Halal Cart from the commissary garage. By 8 am, he parks in his usual
        spot on Brooklyn Bridge Restaurant and gets to work preparing fresh
        ingredients for the day. By 10 am, he’s ready for customers. <br />
        <br />
        When he used to work the cart alone, Ayman would work at the cart late
        into the evening. Now, he has an employee that comes in around 2 and
        works until 11, letting Ayman go home and eat dinner with his kids.{" "}
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </PlainTextSlide>

      <TitleSlide
        viewportPosition={900}
        credits={"By Joyce Zheng, Yu Lee, Oliver Zichen Yuan, & Isabel Lee"}
      >
        Hello from slide 5
      </TitleSlide>

      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
