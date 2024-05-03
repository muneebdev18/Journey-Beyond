import "./FrameComponent2.css";
import Img from '../../public/homeBanner.png'
const FrameComponent2 = () => {
  return (
<section className="self-stretch items-start w-[100%] justify-start py-0 px-[3px] box-border text-left text-xl text-white font-ag-10191">
  {/* <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[496px] px-[99px] pb-[90px] box-border relative [row-gap:20px] max-w-full mq800:pt-[322px] mq800:px-6 mq800:pb-[58px] mq800:box-border mq1325:flex-wrap mq1325:pl-[49px] mq1325:pr-[49px] mq1325:box-border"> */}
  {/* <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" /> */}
  <img
    className="h-[681px] w-[100%] relative hidden max-w-full z-[2]"
    alt=""
    // src="/rectangle-1.svg"
    src={Img}
  />
  {/* </div> */}
  {/* <img src={Img} alt="" /> */}
</section>
  );
};

export default FrameComponent2;
