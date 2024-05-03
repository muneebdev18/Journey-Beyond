import { useMemo } from "react";
import "./HoverExclusiveAccess.css";

const HoverExclusiveAccess = ({
  exclusiveAccess,
  experienceTheJourneyBound,
  propGap,
  propWidth,
  propFlex,
  onExclusiveAccessTextClick,
}) => {
  const hoverExclusiveAccessStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const exclusiveAccessStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className="hover-exclusive-access" style={hoverExclusiveAccessStyle}>
      <div className="frame-parent7">
        <div className="exclusive-access-wrapper">
          <div
            className="exclusive-access"
            // onClick={onExclusiveAccessTextClick}
            style={exclusiveAccessStyle}
          >
            {exclusiveAccess}
          </div>
        </div>
        <div className="experience-the-journeybound">
          {experienceTheJourneyBound}
        </div>
      </div>
      <div className="hover-exclusive-access-inner">
        <div className="frame-child9" />
      </div>
    </div>
  );
};

export default HoverExclusiveAccess;
