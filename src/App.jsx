import { useEffect } from "react";

import Scene from "./Scene";
import OverlaySlide from "./OverlaySlide";
import TitleSlide from "./TitleSlide";

import { AnimationTimeline } from "./AnimationTimeline";

import "./App.css";
import OverlaySlideBlack from "./OverlaySlideBlack";
import OverlaySlideCart from "./OverlaySlideCart";
import AymanCooking from "/images/ayman_cooking.jpg";
import FoodPicture from "/images/cart_food.jpg";
import CashPicture from "/images/cash_only.jpg";

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

      <OverlaySlide viewportPosition={140}>
        “Me? I stay here. I don’t change,” Mr. Ayman says, standing at the rear
        of his truck while his employee cooks for customers inside. We visited
        him on a gusty Wednesday, on what he claimed would be an off-hour -
        still, though, people continued to line up at the window, drawn by the
        sizzle and aroma of fire-grilled meat. So what does it take to turn an
        unassuming food truck into a beloved Brooklyn mainstay? Through spatial
        analysis, we break all the intricacies of a New York City halal cart.
      </OverlaySlide>

      {/* Initial Cart Overview Here */}

      <OverlaySlideCart
        viewportPosition={220}
        title="Generator"
        id="marker - 1"
      >
        The heart of Ayman’s truck is a generator mounted to the back of the
        cart. The generator runs all appliances in the truck, and also a freezer
        in his family’s car, which he parks right behind it.
      </OverlaySlideCart>

      <OverlaySlideCart
        viewportPosition={300}
        title="Drink Cooler"
        id="marker - 2"
      >
        At the front of the cart, customers can help themselves to an assortment
        of beverages. Ayman offers a deal for students specifically, who get a
        free drink when they order a plate or sandwich.
      </OverlaySlideCart>

      {/* Pan up & Rotate 3/4 here */}

      <OverlaySlideCart
        viewportPosition={380}
        title="LED Signs"
        id="marker - 3"
      >
        Bright LED signs border two sides of the cart’s top. Together they cost
        thousands of dollars, but Ayman warns that they’re prone to
        malfunctioning.
      </OverlaySlideCart>

      {/* Lift Walls Up */}

      <OverlaySlideCart viewportPosition={460} title="Grill" id="marker - 4">
        Where the magic happens-- chicken and lamb are diced, seasoned, and
        grilled to perfection. <br />
        <br />
        When asked what’s the best dish here, Ayman responds: “Everything. No,
        seriously. But everybody likes the mixed chicken and lamb.”
      </OverlaySlideCart>

      <OverlaySlideCart
        viewportPosition={540}
        title="Gyro Wheel"
        id="marker - 5"
      >
        The kebab wheel is a special addition that allows Ayman to serve gyro
        dishes. Both chicken and lamb gyro sandwiches are offered on the menu.
      </OverlaySlideCart>

      <OverlaySlideCart viewportPosition={620} title="Storage" id="marker - 6">
        Storage compartments are nestled wherever there’s space. Bottles of
        sauces and industrial-sized spices line the back wall, while fresh
        toppings lie in bins to the side. Plenty of drawers fit underneath the
        counters. Ayman’s freezer in his personal car stores extra portions of
        meat.
      </OverlaySlideCart>

      <OverlaySlideCart viewportPosition={700} title="Floor" id="marker - 7">
        Ayman and his employee must navigate a tiny floor space -- around 28
        square feet. While the space feels cramped, it ensures that everything
        is in reach. The stool in the corner provides relief during the slow
        moments, but Ayman says he usually sticks to standing.
      </OverlaySlideCart>

      <div id="blackCard">
        <OverlaySlideBlack>
          {/* <div id="blackCardTop"> */}

          {/* </div> */}
          <div id="blackCardBottomParagraph">
            <img id="cookingPhoto" src={AymanCooking} alt="Ayman Cooking" />

            <p>
              Ayman’s day starts early-- he wakes in Bay Ridge, Brooklyn, where
              he lives with his family, and drives up to the commissary garage
              in Red Hook at 7 am to retrieve his Halal cart. By 8 am, he’s
              parked in his usual spot on Brooklyn Bridge Boulevard and starts
              preparing fresh ingredients for the day. By 10, he’s ready for
              customers.
            </p>
            <div id="blackCardPhotoParagraph">
              <p>
                When he used to run the cart by himself, Ayman would work late
                into the evening, cooking a quick meal with what he already had
                in the cart when he got a spare moment. Now, he has an employee
                that comes in around 2 and works until 11, so Ayman can bring
                dinner home and eat with his kids. He says they like the gyro
                sandwich the most.
              </p>
              <img
                id="cashPhoto"
                src={CashPicture}
                alt="Ayman's cart: Cash Only"
              />
            </div>
            <p>
              This is actually Ayman’s second cart, which he upgraded from his
              original in 2013. In it, he weathers intense lunch rushes,
              sweltering summers without AC, and brutal, deserted winters. It’s
              not easy to hack it as a food truck owner in New York City– Ayman
              compares the process of just getting a permit to the lottery.
              Afterwards, food truck owners must follow <a href="https://www.nyc.gov/assets/doh/downloads/pdf/rii/regulations-for-mobile-food-vendors.pdf">regulations</a> that often
              seem tedious and arcane, like having to set up their unit 6-12
              inches from the curb, at least 20 feet from a building’s entrance.
            </p>
            <p>
              Worse still, in the aftermath of the COVID-19 Pandemic, Ayman has
              seen a decline in business of hundreds of dollars a day. While a
              rise in hybrid and at-home work seems like an obvious culprit,
              Ayman also attributes it to a rising prevalence of in-app
              ordering.
            </p>
            <p>
              “People now are lazy, not the same as before,” he says. “Before,
              people can stay half an hour on line. But now… every customer
              stays in the office, [they] get into the app and order, and [they]
              just go into the store to pick up and go back.”
            </p>
            <div id="blackCardPhotoParagraph">
              <img id="foodPhoto" src={FoodPicture} alt="Food in the cart" />
              <p>
                Ayman says he struggles with technology, and running the
                business is already keeping his hands more than full. But not
                getting on these apps now come with significant disadvantages,
                which may only grow in the coming years. According to{" "}
                <a href="https://www.businessofapps.com/data/food-delivery-app-market/">
                  Business of Apps
                </a>
                , Food Order & Delivery Apps earned $17.1 billion in revenue in
                the U.S. in 2022, with the global industry projected to grow to
                $165 billion by 2029. It’s a unique new factor, accelerated by
                the pandemic, that will thrust many in the industry into
                uncertain waters.
              </p>
            </div>
            <p>
              For now, however, Ayman is content to run his halal cart just like
              he has for the past 23 years. Even as the food cart industry has
              changed, and more carts have cropped up in nearby spots, Ayman
              says he doesn’t see it as competition.
            </p>
            <p>
              “A street is a street. Many people sell different foods. You see,
              there's a wagon here, wagon there, another wagon down the block.
              The customer knows which food is good.”
            </p>
          </div>
        </OverlaySlideBlack>
      </div>

      <div
        className="scrollPrompt"
        style={{
          top: `975vh`,
        }}
      >
        Scroll down to see Ayman's Cart in 360° <span id="scrollArrow">↓</span>
      </div>
      <TitleSlide
        viewportPosition={1180}
        credits={
          "By Joyce Zheng, Yu Lee, Oliver Zichen Yuan, & Isabel Lee, ©2023"
        }
      ></TitleSlide>

      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
