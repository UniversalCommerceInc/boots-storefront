import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  "Placed",
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered'
];

export default function OrderTracker({ activeStep }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#312e81', // completed step color
          },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#312e81', // active step color
          },
          '& .MuiStepLabel-root .MuiStepIcon-text': {
            fill: '#ffffff', // step number text color when active/completed
          }
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
