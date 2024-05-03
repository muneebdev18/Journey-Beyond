import Navbar from "../components/Navbar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DataPreprocessor from "../components/DataPreprocessor";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FrameComponent2 />
      <section className="frame-parent">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-206@2x.png"
        />
        <div className="component-1">
          <img
            className="journey-bound-orange"
            loading="lazy"
            alt=""
            src="/journey-bound-orange@2x.png"
          />
          <img
            className="journey-bound-orange1"
            alt=""
            src="/journey-bound-orange-1@2x.png"
          />
          <img
            className="journey-bound-orange2"
            alt=""
            src="/journey-bound-orange-2@2x.png"
          />
        </div>
      </section>
      <div className="join-the-web3-psychedelic-revo-wrapper">
        <div className="join-the-web3">
          Join the Web3 Psychedelic Revolution
        </div>
      </div>
      <FrameComponent1 />
      <FrameComponent />
      <DataPreprocessor />
    </div>
  );
};

export default Home;
