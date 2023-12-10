import { useEffect } from "react";

import Scene from "./Scene";
import OverlaySlide from "./OverlaySlide";
import TitleSlide from "./TitleSlide";
import PlainTextSlide from "./PlainTextSlide";

import { AnimationTimeline } from "./AnimationTimeline";

import "./App.css";
import OverlaySlideBlack from "./OverlaySlideBlack";
import OverlaySlideCart from "./OverlaySlideCart";
import AymanCooking from "/images/ayman_cooking.jpg";

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

      <OverlaySlide viewportPosition={130}>
        “Me? I stay here. I don’t change,” Mr. Ayman says, standing at the rear
        of his truck while his employee cooks for customers inside. We visited
        him on a gusty Wednesday, on what he claimed would be an off-hour -
        still, though, people continued to line up at the window, drawn by the
        sizzle and aroma of fire-grilled meat. So what does it take to turn an
        unassuming food truck into a beloved Brooklyn mainstay? Through spatial
        analysis, we break all the intricacies of a New York City halal cart.
      </OverlaySlide>

      {/* Initial Cart Overview Here */}

      <OverlaySlideCart viewportPosition={220} title="Grill" id="marker - 1">
        Here's where the magic happens-- chicken and lamb are diced, seasoned,
        and grilled to perfection.
      </OverlaySlideCart>

      <OverlaySlideCart
        viewportPosition={310}
        title="Generator"
        id="marker - 1"
      >
        The heart of Ayman’s truck is a generator mounted to the back of the
        cart. The generator runs all appliances in the truck, and also a freezer
        in his family’s car, which he parks right behind it.
      </OverlaySlideCart>

      <div id="blackCard" viewportPosition={500}>
        <img id="cookingPhoto" src={AymanCooking} alt="Ayman Cooking" />
        <OverlaySlideBlack viewportPosition={20}>
          <p id="blackParagraph">
            Ayman’s cart is his pride and joy. He upgraded from his original
            cart in 2013, pouring tens of thousands of dollars to deck the
            vehicle out in deep fryers, a spinning kebab wheel, and LED signs
            that border the roof. In it, he weathers intense lunch rushes,
            sweltering summers without AC, and brutal, deserted winters.{" "}
          </p>
          <p>
            Ayman’s day starts early-- he wakes in Bay Ridge, Brooklyn, where he
            lives with his family, and drives up to Red Hook by 7 am to retrieve
            his Halal Cart from the commissary garage. By 8 am, he parks in his
            usual spot on Brooklyn Bridge Restaurant and gets to work preparing
            fresh ingredients for the day. By 10 am, he’s ready for customers.
          </p>
          <p>
            When he used to work the cart alone, Ayman would work at the cart
            late into the evening. Now, he has an employee that comes in around
            2 and works until 11, letting Ayman go home and eat dinner with his
            kids.
          </p>
          “It’s not easy. It’s kind of like a lotto.”
        </OverlaySlideBlack>
      </div>

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
