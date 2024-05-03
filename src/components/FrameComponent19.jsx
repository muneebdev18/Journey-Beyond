import { useMemo } from "react";
import "./FrameComponent19.css";

const FrameComponent19 = ({
  cambodian,
  ghost,
  incaStarGazer,
  thailandKohSamui,
  frameDivWidth,
  frameDivMinWidth,
  cambodianWidth,
  cambodianMinWidth,
  ghostMinWidth,
  ghostWidth,
  incaStarGazerDisplay,
  incaStarGazerMinWidth,
  thailandKohSamuiAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivWidth, frameDivMinWidth]);

  const cambodianStyle = useMemo(() => {
    return {
      width: cambodianWidth,
      minWidth: cambodianMinWidth,
    };
  }, [cambodianWidth, cambodianMinWidth]);

  const ghostStyle = useMemo(() => {
    return {
      minWidth: ghostMinWidth,
      width: ghostWidth,
    };
  }, [ghostMinWidth, ghostWidth]);

  const incaStarGazerStyle = useMemo(() => {
    return {
      display: incaStarGazerDisplay,
      minWidth: incaStarGazerMinWidth,
    };
  }, [incaStarGazerDisplay, incaStarGazerMinWidth]);

  const thailandKohSamuiStyle = useMemo(() => {
    return {
      alignSelf: thailandKohSamuiAlignSelf,
    };
  }, [thailandKohSamuiAlignSelf]);

  return (
    <div className="cambodian-parent" style={frameDiv1Style}>
      <div className="cambodian" style={cambodianStyle}>
        <ul className="cambodian1">
          <li>{cambodian}</li>
        </ul>
      </div>
      <div className="ghost" style={ghostStyle}>
        <ul className="ghost1">
          <li>{ghost}</li>
        </ul>
      </div>
      <div className="inca-stargazer" style={incaStarGazerStyle}>
        <ul className="inca-stargazer1">
          <li>{incaStarGazer}</li>
        </ul>
      </div>
      <div className="thailand-koh-samui" style={thailandKohSamuiStyle}>
        <ul className="thailand-koh-samui1">
          <li>{thailandKohSamui}</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent19;
