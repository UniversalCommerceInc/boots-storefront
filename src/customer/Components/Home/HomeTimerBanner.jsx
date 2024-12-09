import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const HomeTimerBanner = ({ className = "" }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-14T00:00:00"); // Replace with your target date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      className={`w-full flex flex-row flex-wrap items-start justify-center pt-0 px-[11px] pb-[34px] box-border max-w-[1440px] shrink-0 z-[1] mt-[-7px] text-center text-4xl-4 text-wwwbootscom-white font-wwwbootscom-inter-regular-16 mq1900:max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-full">
        <div className="w-full flex flex-col items-start justify-center pt-0 px-0 pb-[11px] box-border max-w-[1440px] mq1900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="w-full flex flex-row items-start justify-center py-3 px-6 box-border bg-[url('/public/background1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[1418px] mq1425:max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between py-2.5 pl-[60px]  box-border max-w-full gap-5 mq1425:flex-wrap mq1425:pl-[30px] mq1425:pr-9 mq1425:box-border">
              <div  className="rounded-8xs w-[25%]  flex flex-row items-center justify-center pt-[7px] px-4 pb-1.5  text-smi-8 text-wwwbootscom-black">
                  <div className="relative  uppercase font-semibold inline-block  ">
                  <img
                  className="h-2 w-4  relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/logo5fdior20couture5fblan@2x.png"
                />                  </div>
                </div>
            
                <div className="flex flex-col items-center justify-start gap-[3px]">
               
                  <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[116px] mq450:text-lgi mq450:leading-[16px]">
                    SAUVAGE
                  </div>
                  <div className="relative text-base tracking-[0.5px] leading-[20px] font-light">
                    <p className="m-0">EAU FORTE, THE NEW PARFUM</p>
                    <p className="m-0">COMING SOON ON 14TH AUGUST</p>
                  </div>
                </div>
                <div className="w-[324px] flex flex-row items-baseline justify-start gap-[7.1px] max-w-full text-left text-21xl-2 mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-center justify-center gap-[5px] text-10xl-1">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="rounded-12xs flex flex-row items-center justify-center py-2.5 px-[5px]">
                        <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[20px] mq450:text-4xl mq450:leading-[16px]">
                          {timeLeft.days}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 px-2.5 text-base-4">
                      <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[40px]">
                        Days
                      </div>
                    </div>
                  </div>
                  <div className="w-3.5 relative tracking-[0.5px] leading-[20px] font-semibold flex items-center shrink-0 mq450:text-5xl mq450:leading-[12px] mq950:text-13xl mq950:leading-[16px]">
                    :
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-[5px] min-w-[39px] text-11xl-1">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-[0.7273] rounded-12xs flex flex-row items-center justify-center py-2.5 px-[7px]">
                        <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[15px] mq450:text-lg mq450:leading-[12px] mq950:text-5xl mq950:leading-[16px]">
                          {timeLeft.hours}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 px-1.5 text-mini">
                      <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[47px]">
                        Hours
                      </div>
                    </div>
                  </div>
                  <div className="w-3.5 relative tracking-[0.5px] leading-[20px] font-semibold flex items-center shrink-0 mq450:text-5xl mq450:leading-[12px] mq950:text-13xl mq950:leading-[16px]">
                    :
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-[5px] text-11xl-1">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 rounded-12xs flex flex-row items-center justify-center py-2.5 px-[5px]">
                        <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[19px] mq450:text-5xl mq450:leading-[16px]">
                          {timeLeft.minutes}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 px-[11px] text-mini">
                      <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[38px]">
                        Mins
                      </div>
                    </div>
                  </div>
                  <div className="w-3.5 relative tracking-[0.5px] leading-[20px] font-semibold flex items-center shrink-0 mq450:text-5xl mq450:leading-[12px] mq950:text-13xl mq950:leading-[16px]">
                    :
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-[5px] text-10xl-7">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 rounded-12xs flex flex-row items-center justify-center py-2.5 px-[5px]">
                        <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[19px] mq450:text-5xl mq450:leading-[16px]">
                          {timeLeft.seconds}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 px-3 text-sm-6">
                      <div className="relative tracking-[0.5px] leading-[20px] font-semibold inline-block min-w-[35px]">
                        Secs
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div  className="rounded-8xs bg-wwwbootscom-white border-wwwbootscom-white border-[1px] border-solid box-border flex flex-row items-center justify-center pt-[7px] px-7 pb-1.5  whitespace-nowrap text-smi-8 text-wwwbootscom-black cursor-pointer hover:bg-wwwbootscom-blackhover:text-white">
                  <div className="relative uppercase font-semibold inline-block  ">
                    FIND OUT MORE
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

HomeTimerBanner.propTypes = {
  className: PropTypes.string,
};

export default HomeTimerBanner;

