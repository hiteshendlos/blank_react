import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import round from "../../public/round.jpg";

const Spring = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        speed={1}
        className="test"
        factor={1}
        style={{
          backgroundImage: `url${round}`,
          backgroundAttachment: "fixed",
        }}
      >
        <div>Welcome to my website 00000000000</div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} className="test">
        Welcome to my website 2
      </ParallaxLayer>
    </Parallax>
  );
};

export default Spring;
