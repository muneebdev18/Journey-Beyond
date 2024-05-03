
// Journey Bound 3rd Section Home

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HoverExclusiveAccess from "./HoverExclusiveAccess";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onExclusiveAccessTextClick = useCallback(() => {
    navigate("/exosystem");
  }, [navigate]);

  const onBeAmongTheClick = useCallback(() => {
    navigate("/exosystem");
  }, [navigate]);

  const onBecomeEligibleForClick = useCallback(() => {
    navigate("/guided-services");
  }, [navigate]);

  return (
    <section className="theopening-1-1-parent">
      <div className="theopening-1-1" />
      <div className="mushroom-image-teaser-2-2" />
      <div className="frame-parent8">
        <div className="why-journeybound-wrapper">
          <div className="why-journeybound">Why JourneyBound?</div>
        </div>
        <div className="zero-cost-entry-begin-your-jo-wrapper">
          <div className="zero-cost-entry">
            Zero Cost Entry: Begin your journey without any minting fees (minus
            gas)
          </div>
        </div>
      </div>
      <div className="frame-wrapper3">
        <div className="hover-exclusive-access-parent">
          <HoverExclusiveAccess
            exclusiveAccess="Exclusive Access:"
            experienceTheJourneyBound="Experience the JourneyBound ecosystem, opening doors for continuous real-life legal psychedelic therapy and digital rarity collectibles."
            onExclusiveAccessTextClick={onExclusiveAccessTextClick}
          />
          <HoverExclusiveAccess
            exclusiveAccess="Be Among the Web3 Pyschonauts:"
            experienceTheJourneyBound="Early JourneyBound Account NFT holders can purchase and mint from the 8 diverse psychedelic-inspired dimensions, each crafted and inspired from real-life psychedelic journeys: Polygenic Journey NFT worlds, minting at 0.015 ETH on Base. "
            propGap="33px"
            propWidth="663px"
            propFlex="unset"
            onExclusiveAccessTextClick={onBeAmongTheClick}
          />
          <HoverExclusiveAccess
            exclusiveAccess="Become Eligible for a Psychedelic Journey:"
            experienceTheJourneyBound="Qualify by being one of the first 20 holders to collect all 8 of Polygenic Journey NFT worlds. Check out our partner's licensed psilocybin service center location."
            propGap="33px"
            propWidth="unset"
            propFlex="1"
            onExclusiveAccessTextClick={onBecomeEligibleForClick}
          />
          <div className="hover-support-legal-psychede">
            <div className="hash-table-key">
              <div className="support-legal-psychedelics">
                Support Legal Psychedelics:
              </div>
            </div>
            <div className="your-participation-promotes">
              Your participation promotes the legal and responsible use of
              psychedelics, supported by Web3 innovations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
