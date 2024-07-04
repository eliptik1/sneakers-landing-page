import worldMapImage from "../assets/worldmap.svg";
import worldMapMobile from "../assets/worldmap-mobile.svg";
import mapEllipses from "../assets/map-ellipses.svg";
import mapEllipsesMobile from "../assets/map-ellipses-mobile.svg";
import mapTooltip from "../assets/map-tooltip.svg";

export const WorldMap = () => {
  return (
    <section className="flex w-full bg-[#78350F] h-[717px]">
      <div className="relative w-full flex justify-center items-center md:p-10 text-[#FFFBEB]">
        <div className="z-20 absolute font-bold">
          <p className="text-8xl leading-[105.6px] max-md:text-5xl max-md:leading-[52.8px]">
            11,658,467
          </p>
          <p className="text-[56px] leading-[61.6px] text-center max-md:text-[32px] max-md:leading-[35.2px]">
            Shoes Collected
          </p>
        </div>
        <div className="relative">
          <img
            className="select-none h-full w-full object-cover max-md:h-[717px] max-md:hidden"
            src={worldMapImage}
            alt="world map"
          />
          <img
            className="select-none h-full w-screen object-cover max-md:h-[717px] md:hidden"
            src={worldMapMobile}
            alt="world map"
          />
          <img
            className="z-10 absolute md:left-[-5px] top-[-25px] max-[1140px]:top-[calc(28vw-355px)] select-none max-md:top-0 max-md:translate-x-1/2 max-md:right-1/2"
            src={mapTooltip}
            alt="sneakers info popup"
          />
        </div>

        <img
          className="absolute w-[65%] h-[65%] select-none max-md:hidden"
          src={mapEllipses}
          alt="locations on worldmap"
        />
        <img
          className="absolute h-full w-full translate-x-[70px] translate-y-[-85px] select-none md:hidden"
          src={mapEllipsesMobile}
          alt="locations on worldmap"
        />
      </div>
    </section>
  );
};
