import PropTypes from "prop-types";

// Reusable Card Component
const PromoCard = ({ imgSrc, badgeText, title, description, shopNowText }) => {
  return (
    <div className="rounded-tl-none relative rounded-tr-mini rounded-br-mini rounded-bl-none bg-wwwbootscom-white border-wwwbootscom-alto border-[1px] border-solid flex flex-col items-end justify-start gap-[281.6px] mq450:gap-[141px]">
      <div className="flex flex-row items-start justify-start">
        <img
          className="w-[279.3px] h-[313.9px] absolute !m-[0] top-[-20px] left-[-14px] rounded-tl-mini rounded-tr-none rounded-b-none max-h-full overflow-hidden object-cover"
          alt=""
          src={imgSrc}
        />
        <div className="flex flex-col items-center justify-start z-[1]">
          <div className="rounded-tl-none rounded-tr-mini rounded-br-none rounded-bl-mini bg-wwwbootscom-monza flex flex-row items-start justify-center py-[26px] px-2 box-border min-w-[136px]">
            <div className="flex flex-col items-center justify-start py-0 px-[15px]">
              <div className="relative tracking-[2.14px] leading-[22px] inline-block min-w-[88px]">
                {badgeText}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0  text-3xl-1 text-wwwbootscom-black">
        <div className="flex-1 rounded-tl-none rounded-tr-mini rounded-br-mini rounded-bl-none flex flex-col items-start justify-center pt-0 px-5 pb-5">
          <div className="self-stretch flex flex-col items-start justify-between min-h-[153px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-2.5">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-11 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="self-stretch relative leading-[32px] mq450:text-lg mq450:leading-[26px]">
                  {title}
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-1 text-base-1 text-wwwbootscom-mine-shaft">
                <div className="self-stretch relative leading-[22px] font-light">
                  {description}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-end pt-[22.7px] px-0 pb-[0.1px] box-border min-h-[40px] text-sm">
                    <div className="self-stretch flex flex-col items-center justify-center py-0 px-7">
                      <div className="rounded-8xs border-wwwbootscom-deep-cove border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-center py-2 px-[21px] min-w-[182px] max-w-[239.27px]">
                        <div className="overflow-y-auto flex flex-col items-center justify-start py-0 px-[25px]">
                          <b className="relative tracking-[1px] leading-[20px] inline-block min-w-[87px]">
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
  );
};

PromoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  shopNowText: PropTypes.string.isRequired,
};

const HomeTodayGrid = ({ className = "" }) => {
  const promoData = [
    {
      imgSrc: "/rimmel-25-hp-1dam8x9x360ts3d1723022502777jpg@2x.png",
      badgeText: "NEW",
      title: "Bring the drama",
      description: (
        <>
          <span className="font-light">Get up to 5x more volume with </span>
          <b>1/2</b>
          <span className="font-light"> on Thrill Seeker Extreme mascara</span>
        </>
      ),
      shopNowText: "SHOP NOW",
    },
    {
      imgSrc: "/rimmel-25-hp-2dam8x9x360ts3d1723022503081jpg@2x.png",
      badgeText: "1/2 PRICE",
      title: "Too good to glow",
      description: (
        <>
          <p className="m-0">Better Than Filters Multi-tasker is a 3-</p>
          <p className="m-0">in-1 primer, highlighter & glow booster</p>
        </>
      ),
      shopNowText: "SHOP NOW",
    },
    // Add more promo data objects as needed
  ];

  return (
    <div
      className={`w-full flex flex-row flex-wrap items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-[1440px] shrink-0 z-[4] mt-[-7px] text-center text-14xl-6 text-wwwbootscom-black font-wwwbootscom-inter-regular-16 mq1900:max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-[49px] px-[11px] box-border max-w-full mq950:pt-[7px] mq950:pb-8 mq950:box-border">
        <div className="flex-1 flex flex-row items-start justify-start max-w-[1440px] mq1900:max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start bg-[url('/public/background2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[1418px] mq1425:max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start pt-[59.5px] px-[30px] pb-[59.9px] box-border gap-[35px] max-w-full mq950:gap-[17px] mq950:pt-[7px] mq950:pb-[39px] mq950:box-border">
              <div className="self-stretch flex flex-col items-start justify-center pt-0 px-[11px] pb-[15.1px] box-border max-w-full shrink-0">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-[0.5px] box-border max-w-full">
                    <div className="relative tracking-[-0.02px] leading-[50px] inline-block max-w-full mq450:text-xl mq450:leading-[30px] mq950:text-8xl mq950:leading-[40px]">
                      <b>Today only! 1/2 price </b>
                      <span>when you spend £20 on selected Rimmel</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px] box-border max-w-full text-mini text-wwwbootscom-white">
                <div className="flex-1 grid flex-row items-start justify-start gap-[22px] max-w-full grid-cols-[repeat(4,_minmax(238px,_1fr))] mq950:grid-cols-[minmax(238px,_1fr)] mq1425:justify-center mq1425:grid-cols-[repeat(2,_minmax(238px,_413px))]">
                  {promoData.map((item, index) => (
                    <PromoCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeTodayGrid.propTypes = {
  className: PropTypes.string,
};

export default HomeTodayGrid;
