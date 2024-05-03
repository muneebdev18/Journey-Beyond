import { useMemo } from "react";
import "./Faq.css";

const Faq = ({
  whatIsThePolygenicJourney,
  propAlignSelf,
  propWidth,
  propGap,
  propMinWidth,
  propLetterSpacing,
  propAlignSelf1,
  propWidth1,
}) => {
  const imageSquareStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const buttonBaseStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const whatIsTheStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      letterSpacing: propLetterSpacing,
    };
  }, [propMinWidth, propLetterSpacing]);

  const radioButtonSetStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  return (
    <div className="faq4">
      <div className="model-evaluation">
        <div className="data-container" />
        <div className="control-hub" />
        <div className="link-connector" />
      </div>
      <div className="image-square-parent">
        <div className="image-square" style={imageSquareStyle}>
          <div className="shape-circle-parent">
            <img className="shape-circle-icon" alt="" src="/vector-1.svg" />
            <div className="frame-child10" />
          </div>
        </div>
        <div className="button-base" style={buttonBaseStyle}>
          <div className="what-is-the" style={whatIsTheStyle}>
            {whatIsThePolygenicJourney}
          </div>
          <div className="dropdown-menu">
            <div className="div">+</div>
          </div>
        </div>
      </div>
      <div className="radio-button-set" style={radioButtonSetStyle}>
        <div className="progress-bar" />
      </div>
    </div>
  );
};

export default Faq;
