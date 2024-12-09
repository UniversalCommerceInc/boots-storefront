import PropTypes from "prop-types";

const ShopNowBanner = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-wrap items-start justify-center pt-[7px] px-4 pb-0 box-border max-w-[1440px] z-[5] mt-[-50px] text-center text-base-1 text-wwwbootscom-deep-cove font-wwwbootscom-inter-regular-16 ${className}`}
    >
      <div className="flex flex-col md:flex-row items-start justify-start py-[49px] px-[11px] box-border w-full max-w-full">
        <div className="flex flex-col md:flex-row items-start justify-start py-[11px] px-0 box-border w-full max-w-full">
          <div className="flex flex-col md:flex-row bg-wwwbootscom-scotch-mist overflow-x-auto items-start justify-between py-0 pl-0 pr-[30px] box-border min-h-[60px] w-full gap-5">
            <img
              className="h-auto w-full md:w-[425.4px] object-cover"
              alt=""
              src="/health-pollen-summer-aem-ticker-ukdam20x3ts3d1715164161361jpg@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[17.7px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px]">
                  <span className="font-light">Hello summer! Don't miss</span>
                  <b> savings</b>
                  <span className="font-light">{` on Soltan, hayfever relief & more`}</span>
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border ml-2 text-2xs">
                  <div className="relative font-light inline-block min-w-[6.6px]">
                    ‖
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-sm">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-start justify-start max-w-[129.48px]">
                  <div className="rounded-8xs border-wwwbootscom-deep-cove border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-2 pl-5 pr-[19px] max-w-[129.48px]">
                    <div className="overflow-y-auto flex flex-col items-center justify-start">
                      <b className="tracking-[1px] leading-[20px] uppercase">
                        SHOP NOW
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

ShopNowBanner.propTypes = {
  className: PropTypes.string,
};

export default ShopNowBanner;
