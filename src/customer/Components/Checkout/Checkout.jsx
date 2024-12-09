import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomStepper from "./CustomStepper";
import DeliveryAddressPage from "./DeliveryAddressPage";
import OrderSummaryPage from "./OrderSummaryPage";
import PaymentPage from "./PaymentPage";
import PaymentSuccessfull from "./PaymentSuccessfull";


// Define the steps for the stepper
const steps = ["LogIn", "Delivery Address", "Order Summary", "Payments"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(1); // State to manage active step
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Extract query parameters from URL
  const step = parseInt(queryParams.get("step"), 10) || 0; // Get the step from query parameter or default to 0
  const navigate = useNavigate(); // Hook for navigating to different routes

  // Effect to update the active step when the URL changes
  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  // Function to handle moving to the next step
  const handleNext = () => {
    const nextStep = activeStep + 1; // Calculate the next step
    setActiveStep(nextStep); // Update the active step
    navigate(`/checkout?step=${nextStep}`); // Navigate to the next step
  };

  // Function to handle moving to the previous step
  const handleBack = () => {
    const prevStep = activeStep - 1; // Calculate the previous step
    setActiveStep(prevStep); // Update the active step
    navigate(`/checkout?step=${prevStep}`); // Navigate to the previous step
  };

  // Function to reset the stepper to the first step
  const handleReset = () => {
    setActiveStep(0); // Reset the active step to 0
    navigate("/checkout?step=0"); // Navigate to the first step
  };

  return (
    <div className="px-5 lg:px-8 w-full">
      <CustomStepper steps={steps} activeStep={activeStep} />
      {/* Conditional rendering based on the active step */}
      {activeStep === steps.length ? (
        <React.Fragment>
          {/* Display message when all steps are completed */}
          {/* <p className="mt-2 mb-1">All steps completed - you're finished</p> */}
          <PaymentSuccessfull/>
          {/* Button to reset the stepper */}
          <div className="flex flex-row pt-2">
            <div className="flex-1" />
            {/* <button
              onClick={handleReset}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button> */}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Display back button for all steps except the first one */}
          <div className="flex flex-row pt-2">
            <button
              className={`${activeStep === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded`}
              disabled={activeStep === 1}
              onClick={handleBack}
            >
              Back
            </button>
            <div className="flex-1" />
          </div>
          {/* Render different components based on the active step */}
          <div className="w-full">
            {activeStep === 1 ? (
              <DeliveryAddressPage handleNext={handleNext} />
            ) : activeStep === 2 ? (
              <OrderSummaryPage handleNext={handleNext} />
            ) : activeStep === 3 ? (
              <PaymentPage handleNext={handleNext} />
            ) : null}
          </div>


        </React.Fragment>
      )}
    </div>
  );
}
