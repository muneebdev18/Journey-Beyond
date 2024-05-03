import Navbar1 from "../components/Navbar1";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import "./GuidedServices.css";
import Navbar from "../components/Navbar";
import DataPreprocessor from "../components/DataPreprocessor";

const GuidedServices = () => {
  return (
    <div className="guided-services">
      <Navbar />
      <FrameComponent12 />
      <FrameComponent11 />
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent4 />
      <DataPreprocessor/>
    </div>
  );
};

export default GuidedServices;
