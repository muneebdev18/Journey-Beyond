import FrameComponent19 from "./FrameComponent19";
import "./FrameComponent18.css";
import Starry from '../../public/StarryFungi 1.png'
const FrameComponent18 = () => {
  return (
    <section className="frame-parent12">
      <div className="starryfungi-1-wrapper">
        <img src={Starry} alt="" />
      </div>
      <div className="frame-parent13">
        <div className="get-started-with-journeybound-wrapper">
          <div style={{fontFamily:"AG"}} className="get-started-with-container">
            <p className="get-started">{`Get Started `}</p>
            <p className="with-journeybound">with JourneYBound</p>
          </div>
        </div>
        <div className="button-free-mint-wrapper">
          <button className="button-free-mint2">
            <div className="frame-parent14">
              <div className="rectangle-parent1">
                <div className="frame-child18" />
                <div className="frame-child19" />
                <div className="frame-child20" />
              </div>
              <div className="vector-container">
                <img className="frame-child21" alt="" src="/vector-11.svg" />
                <div className="frame-child22" />
              </div>
              <div className="frame-child23" />
            </div>
            <div className="free-mint-wrapper">
              <div className="free-mint1">
                <span className="f1">Freemint</span>
                {/* <span className="ee-mint1">ee mint</span> */}
              </div>
            </div>
          </button>
        </div>
        <div className="frame-parent15">
          <div className="frame-wrapper4">
            <div className="frame-wrapper5">
              <div className="frame-wrapper6">
                <div className="elevate-your-consciousness-by-parent">
                  <div className="elevate-your-consciousness">
                    Elevate your consciousness by connecting your wallet and
                    minting your very own JourneyBound Account NFT for free
                    (excluding gas fees) on the Base network.
                  </div>
                  <div className="limited-to-1">
                    Limited to 1 per wallet address for equitable access, each
                    ERC6551 JourneyBound Account NFT randomly represents 1 of 8
                    unique psilocybin strains, lighting your way into the
                    psychedelic world of elevated consciousness.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent16">
            <div className="frame-parent17">
              <div style={{marginBottom:"20px"}} className="unique-strains-parent">
                <div className="unique-strains">
                  <p style={{fontFamily:"BansheePilot",lineHeight:0}} className="u">Unique Strains</p>
                  {/* <span className="ue">{`ue `}</span> */}
                  {/* <p className="span">{`     `}</p> */}
                </div>
                <div style={{fontFamily:"BansheePilot"}} className="for-unique-journeys">FOR UNIQUE JOURNEYS:</div>
              </div>
              <div className="frame-parent18">
                <FrameComponent19
                  cambodian="Cambodian"
                  ghost="Ghost"
                  incaStarGazer="Inca StarGazer"
                  thailandKohSamui="Thailand Koh-Samui"
                />
                <FrameComponent19
                  cambodian="Derrumbes"
                  ghost="Burma
"
                  incaStarGazer="Tidal Wave"
                  thailandKohSamui="Flying Saucers
"
                  frameDivWidth="unset"
                  frameDivMinWidth="149px"
                  cambodianWidth="unset"
                  cambodianMinWidth="122px"
                  ghostMinWidth="unset"
                  ghostWidth="83px"
                  incaStarGazerDisplay="inline-block"
                  incaStarGazerMinWidth="121px"
                  thailandKohSamuiAlignSelf="unset"
                />
              </div>
            </div>
            <div className="data-aggregator-wrapper">
              <img
                className="data-aggregator-icon"
                loading="lazy"
                alt=""
                src="/frame-106.svg"
              />
            </div>
            <div className="ultra-rarity-collectables">
              Ultra Rarity Collectables: 200 JourneyBound Account NFTs are
              JourneyBound Organics. Minting a JourneyBound Organic unlocks 5
              free Polygenic Journey NFTs (0.075 ETH value) from your
              JourneyBound Account.
            </div>
            <div className="value-transformer">
              <div className="iterative-processor">
                <div className="input-filter1">
                  <div className="total-supply-unlimited">
                    Total Supply: Unlimited
                  </div>
                  <div className="cost-absolutely-free">
                    Cost: Absolutely Free
                  </div>
                  <div className="decision-maker">
                    <div className="per-wallet-address-container">
                      <p className="per-wallet-address">{`1 per wallet address `}</p>
                      <p className="just-cover-the">- just cover the gas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="parallel-process">
                <div className="error-handler1" />
              </div>
            </div>
          </div>
          <div className="data-reader">
            <div className="holding-a-journeybound">
              Holding a JourneyBound Organic also gives you 5 free NFTs for
              every future integrated sub-collection launched in the ecosystem
              after the Polygenic Journey NFT collection fully mints.
            </div>
            <div className="input-validator">{`                                        `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent18;
