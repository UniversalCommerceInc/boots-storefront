import PropTypes from "prop-types";

const FindOutBanner = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row flex-wrap items-start justify-start pt-[-50px] -mt-10 px-0 pb-0 box-border  shrink-0 text-center text-base-3 text-wwwbootscom-white font-wwwbootscom-inter-regular-16 mq1900:max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-[49px] px-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start py-[11px] px-0 box-border max-w-[1440px] mq1900:max-w-full">
          <div className="flex-1 bg-wwwbootscom-deep-cove flex flex-row items-start justify-between py-2.5 pl-[203px] pr-[30px] box-border min-h-[60px] max-w-full gap-5 mq450:pl-5 mq450:box-border mq950:pl-[50px] mq950:box-border mq1425:flex-wrap mq1425:pl-[101px] mq1425:box-border">
            <div className="w-[816.8px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq950:flex-wrap">
                <div className="flex-1 relative leading-[24px] font-light inline-block min-w-[528px] shrink-0 mq950:min-w-full">
                  Our appointment diary is now open for the Winter Flu Jab
                  Service. Book your appointment online or in-store today
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 ml-[-0.2px] text-2xs mq950:ml-0">
                  <div className="relative font-light inline-block min-w-[5px] shrink-0">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-sm">
              <div className="flex flex-row items-start justify-start max-w-[168.64px]">
                <div className="rounded-8xs border-wwwbootscom-white border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-2 pl-5 pr-[19px] max-w-[168.64px]">
                  <div className="overflow-y-auto flex flex-col items-center justify-start">
                    <b className="relative tracking-[1px] leading-[20px] uppercase inline-block min-w-[125px]">
                      FIND OUT MORE
                    </b>
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

FindOutBanner.propTypes = {
  className: PropTypes.string,
};

export default FindOutBanner;
