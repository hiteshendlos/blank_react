import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
  return (
    <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
      <ParallaxBannerLayer
        image="https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={-20}
      />
      <ParallaxBannerLayer
        image="https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={-20}
      />
      <ParallaxBannerLayer
        image="https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={-20}
      />
      <ParallaxBannerLayer
        image="https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        speed={-20}
      />
    </ParallaxBanner>
  );
};

export default Banner;
