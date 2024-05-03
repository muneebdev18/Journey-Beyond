import { useMemo } from "react";
import "./HoverPoints.css";

const HoverPoints = ({
  eligibilityIsLimitedToThe,
  youDirectlyYourInformatio,
  showJourneyNFTsWithinContaine,
  frameDivPosition,
  frameDivHeight,
  journeyNFTsWithinContaineMargin,
  journeyNFTsWithinContaineHeight,
  journeyNFTsWithinContainePosition,
  journeyNFTsWithinContaineBottom,
  journeyNFTsWithinContaineLeft,
  journeyNFTsWithinContaineFontWeight,
  journeyNFTsWithinContaineWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      height: frameDivHeight,
    };
  }, [frameDivPosition, frameDivHeight]);

  const journeyNFTsWithinContainerStyle = useMemo(() => {
    return {
      margin: journeyNFTsWithinContaineMargin,
      height: journeyNFTsWithinContaineHeight,
      position: journeyNFTsWithinContainePosition,
      bottom: journeyNFTsWithinContaineBottom,
      left: journeyNFTsWithinContaineLeft,
      fontWeight: journeyNFTsWithinContaineFontWeight,
      width: journeyNFTsWithinContaineWidth,
    };
  }, [
    journeyNFTsWithinContaineMargin,
    journeyNFTsWithinContaineHeight,
    journeyNFTsWithinContainePosition,
    journeyNFTsWithinContaineBottom,
    journeyNFTsWithinContaineLeft,
    journeyNFTsWithinContaineFontWeight,
    journeyNFTsWithinContaineWidth,
  ]);

  return (
    <div className="hover-points">
      <img
        className="hover-points-child"
        loading="lazy"
        alt=""
        src="/frame-120.svg"
      />
      <div
        className="eligibility-is-limited-to-the-parent"
        style={frameDivStyle}
      >
        <h2 className="eligibility-is-limited">{eligibilityIsLimitedToThe}</h2>
        {showJourneyNFTsWithinContaine && (
          <h2
            className="journey-nfts-within-container"
            style={journeyNFTsWithinContainerStyle}
          >
            <p className="you-directly-your">{youDirectlyYourInformatio}</p>
            <p className="participating-in-the-free">
              participating in the free psilocybin experience does require you
              to be doxxed.
            </p>
          </h2>
        )}
      </div>
    </div>
  );
};

export default HoverPoints;
