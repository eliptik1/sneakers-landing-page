import VideoPlayButton from "./VideoPlayButton";
import checkIcon from "../assets/check-icon.svg";
import videoThumbnail from "../assets/video-thumbnail.jpeg";
import videoBar from "../assets/video-top-bar.svg";
import decoration from "../assets/decoration.svg";
import circle from "../assets/circle.svg";

export const JoinUs = () => {
  return (
    <section className="flex justify-center relative my-40 max-lg:my-4 max-lg:pb-14 max-lg:px-4">
      <div className="absolute z-10 max-sm:w-[110%] sm:w-[90%] -bottom-4 lg:hidden">
        <img
          className="select-none m-auto"
          src={decoration}
          alt="background decoration"
        />
      </div>
      <div className="max-w-[1280px] gap-10 w-full relative bg-[#ffffff] flex justify-between items-center lg:mx-20 lg:p-20 max-lg:gap-8 max-lg:flex-col max-lg:items-center rounded-[30px] shadow-[0px_0px_10px_5px_#00000012,0px_20px_25px_-5px_#0000001A]">
        <div className="z-10 flex flex-1 flex-col text-[#0F172A] max-lg:items-center max-lg:gap-6 max-lg:px-4 max-lg:pt-8">
          <h2 className="text-[56px] font-bold leading-[79px] lg:mb-6 max-lg:text-center max-lg:text-[32px] max-lg:leading-8">
            Why join us
          </h2>
          <div className="text-xl leading-9 [&>div]:gap-2 flex flex-col max-lg:gap-2 max-lg:leading-[22.4px]">
            <div className="flex items-start">
              <div className="w-6 h-6 flex justify-center items-center">
                <img src={checkIcon} alt="check icon" />
              </div>
              <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
            </div>
            <div className="flex">
              <div className="w-6 h-6 flex justify-center items-center">
                <img src={checkIcon} alt="check icon" />
              </div>
              <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
            </div>
            <div className="flex">
              <div className="w-6 h-6 flex justify-center items-center">
                <img src={checkIcon} alt="check icon" />
              </div>
              <p>Ullamcorper ornare in et egestas dolor orci.</p>
            </div>
          </div>
          <div className="flex justify-start items-center lg:mt-6">
            <a
              href="#"
              className="text-xl tracking-[0.5px] font-medium text-[#78350F] leading-6 px-8 py-4 border-current border-2 rounded-lg text-nowrap hover:underline max-lg:text-xl max-lg:px-8 max-lg:py-4"
            >
              Sign up now
            </a>
          </div>
        </div>
        <img
          className="absolute z-0 lg:-right-[40px] lg:-top-[55px] select-none max-lg:hidden"
          src={decoration}
          alt="background decoration"
        />
        <div className="relative">
          <img
            className="max-lg:w-[50px] absolute z-30 bottom-3 left-16 lg:-bottom-10 lg:left-18 select-none"
            src={circle}
            alt="circle decoration"
          />
          <div className="z-20 max-w-[520px] flex-1 relative h-min rounded-[20px] max-lg:mx-4 max-lg:mb-8 overflow-hidden shadow-[0px_0px_15px_10px_#00000012,0px_25px_50px_-12px_#00000040] ">
            <img
              className="z-10 bg-white w-full"
              src={videoBar}
              alt="video top bar"
            />
            <div className="relative bg-white p-[5px] pt-0">
              <VideoPlayButton />

              <img
                className="rounded-b-[15px]"
                src={videoThumbnail}
                alt="video thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
