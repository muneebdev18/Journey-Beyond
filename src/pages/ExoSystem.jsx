import Navbar2 from "../components/Navbar2";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import "./ExoSystem.css";
import Navbar from "../components/Navbar";
import DataPreprocessor from "../components/DataPreprocessor";

const ExoSystem = () => {
  return (
    <div className="exosystem">
      <Navbar />
      <FrameComponent18 />
      <section className="output-validator">
        <div className="connection-handler">
          <img
            className="jb-white-e-1-1"
            loading="lazy"
            alt=""
            src="/jb-whitee-1-11@2x.png"
          />
        </div>
      </section>
      <FrameComponent17 />
      <section className="data-mapper">
        <div className="data-combiner" />
      </section>
      <FrameComponent16 />
      <FrameComponent15 />
      <section className="tree-builder">
        <div className="signal-processor">
          <div className="omniverse-1" />
          <img
            className="sequence-controller-icon"
            loading="lazy"
            alt=""
            src="/frame-110@2x.png"
          />
          <FrameComponent14 />
          <div className="signal-processor-inner">
            <div className="frame-group">
              <div className="the-journeybound-ecosystem-parent">
                <div  className="the-journeybound-ecosystem">
                  The JourneyBound Ecosystem
                </div>
                <div className="journeybound-is-an-expansion-o-parent">
                  <div className="journeybound-is-an">
                    JourneyBound is an expansion of The Atrium (link to
                    https://atrium.earth).
                  </div>
                  <div className="blending-web3-token">
                    Blending Web3 token bound (ERC6551) technology with legal
                    real world access to psychedelic therapy
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="image-1-1-parent">
                  <img className="image-1-1" alt="" src="/image-1-1-1@2x.png" />
                  <div className="button-dashboard-access-parent">
                    <div className="button-dashboard-access">
                      <div className="button-free-mint">
                        {/* <div className="rectangle-parent">
                          <div className="frame-item" />
                          <img
                            className="frame-inner"
                            alt=""
                            src="/vector-1-2.svg"
                          />
                          <div className="rectangle-div" />
                          <div className="frame-child1" />
                          <div className="frame-child2" />
                          <div className="frame-child3" />
                        </div> */}
                        <div className="dashboard-access">Dashboard Access</div>
                      </div>
                    </div>
                    <div className="web3-meets-parent">
                      <div className="web3-meets">{`Web3 Meets `}</div>
                      <div className="psychedelic-exploration">
                        Psychedelic Exploration
                      </div>
                    </div>
                  </div>
                </div>
                <div className="starting-with-the-polygenic-jo-wrapper">
                  <div className="starting-with-the-container">
                    <p className="starting-with-the">
                      Starting with the Polygenic Journey NFT integrated
                      sub-collection, JourneyBound will
                    </p>
                    <p className="continuously-expand-to">{`continuously expand to include new experiences and partnerships, fostering a community of
 legal psychedelic exploration. `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataPreprocessor />
    </div>
  );
};

export default ExoSystem;
