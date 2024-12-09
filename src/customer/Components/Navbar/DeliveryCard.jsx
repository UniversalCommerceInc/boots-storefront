const cardData = [
    {
      id: 1,
      title: "Click & collect",
      subtitle: "FREE for orders over £15",
      imageSrc: "/prop-ticker-cc-96x96-white@2x.png",
      altText: "Click & collect image",
      bgPadding: "px-[30px]",
    },
    {
      id: 2,
      title: "Standard delivery",
      subtitle: "FREE for orders over £25",
      imageSrc: "/prop-ticker-sd-96x96-white@2x.png",
      altText: "Standard delivery image",
      bgPadding: "px-7",
    },
    // {
    //   id: 3,
    //   title: "Next day delivery",
    //   subtitle: "Check for availability",
    //   imageSrc: "/prop-ticker-ndd-96x96-white@2x.png",
    //   altText: "Next day delivery image",
    //   bgPadding: "px-[41px]",
    // },
    // {
    //   id: 4,
    //   title: "Delivered on demand",
    //   subtitle: "by Deliveroo",
    //   imageSrc: "/propscroller-deliveroo96x96-white@2x.png",
    //   altText: "Delivered on demand image",
    //   bgPadding: "px-[39px]",
    // },
    {
      id: 5,
      title: "New Advantage Card",
      subtitle: "Sign up now",
      imageSrc: "/prop-banner-bac-96x96-white2028129@2x.png",
      altText: "Advantage Card image",
      bgPadding: "px-8 mq450:pl-5 mq450:pr-5",
    },
    {
        id: 4,
        title: "Deliver on demand",
        subtitle: "by Deliveroo",
        imageSrc: "/propscroller-deliveroo96x96-white@2x.png",
        altText: "Delivered on demand image",
        bgPadding: "px-[39px]",
      },
    //   {
    //     id: 4,
    //     title: "Delivered on demand",
    //     subtitle: "by Deliveroo",
    //     imageSrc: "/propscroller-deliveroo96x96-white@2x.png",
    //     altText: "Delivered on demand image",
    //     bgPadding: "px-[39px]",
    //   },
  ];
  
  const DeliveryCardItem = ({ title, subtitle, imageSrc, altText, bgPadding }) => (
    <div className="flex-1 flex flex-col items-start justify-center py-0 px-0  box-border w-full md:w-[24%] ">
      <div className={`w-full bg-wwwbootscom-deep-cove hover:bg-pink-600 flex flex-row items-center justify-center py-[4px] ${bgPadding}`}>
        <div className="flex flex-col items-start justify-start pt-0 pb-[5px] pl-0 pr-4">
          <img
            className="w-[35px] h-[35px] relative overflow-hidden shrink-0 object-cover"
            alt={altText}
            src={imageSrc}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[20px]">
            <p className="m-0 text-md">
              <b>{title}</b>
            </p>
            <p className="m-0 font-light text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const DeliveryCard = ({ banners}) => {
    return (
      <div
        className={`w-full  [background:linear-gradient(0deg,_rgba(255,_255,_255,_0),_#fff_2%)] overflow-hidden flex flex-col items-start justify-center max-w-[1445px] text-left text-mini-9 text-wwwbootscom-white font-wwwbootscom-inter-regular-16 mq1900:max-w-full `}
      >
        <div className=" w-full  flex flex-col md:flex-row flex-wrap items-start justify-around gap-4">
          {cardData.map((card) => (
            <DeliveryCardItem
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              imageSrc={card.imageSrc}
              altText={card.altText}
              bgPadding={card.bgPadding}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default DeliveryCard;
  