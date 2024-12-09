import PropTypes from "prop-types";

const PaymentMethodBanner = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1440px] p-10 mx-auto px-4 py-2 flex flex-col items-center text-center text-sm font-light text-wwwbootscom-deep-cove ${className}`}
    >
      <div className="w-full flex flex-col items-center py-4">
        <h2 className="text-4xl font-semibold mb-4">
          Spread the cost, your way
        </h2>
        <p className="text-base text-wwwbootscom-mine-shaft">
          We have several payment options for you, including Klarna, where you can Pay in 3 or Pay in 30 days, and Clearpay, where you can pay at a later date. And don't forget our Boots gift cards, which you can use on one big purchase, or even several times in different transactions.
        </p>
        <p className="text-base mt-4 text-wwwbootscom-mine-shaft">
          Plus, you can also choose Visa or Mastercard, or use applications such as PayPal, Apple Pay, and more. To find out more, check out our payment options.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-6">
        <div className="flex flex-col items-center">
          <img
            className="h-[50px] w-[122px] object-fit"
            alt="Klarna"
            src="/kalarna@2x.png"
          />
          <p className="text-base mt-2">Pay later with pay in 3 †</p>
        </div>
        <div className="h-[1px] w-full bg-wwwbootscom-pumice my-4 sm:hidden"></div>
        <div className="flex flex-col items-center">
          <img
            className="h-[50px] w-[122px] object-fit"
            alt="Clearpay"
            src="/clearpay@2x.png"
          />
          <p className="text-base mt-2">Buy now pay later</p>
        </div>
        <div className="h-[1px] w-full bg-wwwbootscom-pumice my-4 sm:hidden"></div>
        <div className="flex flex-col items-center">
          <img
            className="h-[50px] w-[122px] object-fit"
            alt="PayPal"
            src="/paypal@2x.png"
          />
          <p className="text-base mt-2">Pay in 3 ‡</p>
        </div>
        <div className="h-[1px] w-full bg-wwwbootscom-pumice my-4 sm:hidden"></div>
        <div className="flex flex-col items-center">
          <img
            className="h-[50px] w-[69px] object-fit"
            alt="All payment options"
            src="/payment-icon-v2damts3d1691146448583@2x.png"
          />
          <p className="text-base mt-2">All payment options</p>
        </div>
      </div>
      <p className="text-base text-wwwbootscom-mine-shaft mt-6">
        Payment options include online only, in-store only, and both online and in-store. T&Cs apply.
      </p>
    </div>
  );
};

PaymentMethodBanner.propTypes = {
  className: PropTypes.string,
};

export default PaymentMethodBanner;
