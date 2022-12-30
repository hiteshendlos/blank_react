import { Parallax } from "react-scroll-parallax";
import "../App.css";

export const Component = () => {
  return (
    <>
      {/* <Parallax className="test" speed={-10} />
      <Parallax className="test2" speed={100} /> */}

      <div className="parent_div">
        <Parallax
          translateX={["-400px", "0px"]}
          scale={[0.75, 1]}
          //   rotate={[-180, 0]}
          easing="easeInQuad"
          className="test"
        />
        <Parallax
          translateX={["-400px", "0px"]}
          scale={[0.75, 1]}
          //   rotate={[-180, 0]}
          easing="easeInQuad"
          className="test"
        />
      </div>

      <div className="test">hello</div>
      <div className="test">hello</div>
      <div className="test">hello</div>

      {/* <div className="test">hello</div> */}
    </>
  );
};
