import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './checkoutforms/AddressForm';
import Review from './checkoutforms/ReviewOrder';
import SeatSelection from './checkoutforms/SeatSelection';
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const steps = ["Seat Selection", "Payment Details", "Order Summary"]; 

function getStepContent(step) {
  switch (step) {
    case 0:
        return <SeatSelection />;
    case 1:
        return <AddressForm />; 
    case 2:
        return <Review />;
    default:
        throw new Error('Unknown step');
  }
}

// breadcrumbs 
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
  <Link 
      underline="hover" 
      key="1" 
      color="inherit" 
      onClick={handleClick}
  >
  <Link to="/">
      Home
  </Link>
  </Link>,
  <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
  >
  <Link to="/">
      Events
  </Link>
  </Link>,
    <Link
    underline="hover"
    key="3"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
  >
  <Link to="/eventinfo">
    VIBES
  </Link>
  </Link>,
  <Typography key="4" color="text.primary">
      Checkout
  </Typography>,
];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
          <CssBaseline />
            <NavBar></NavBar>

            {/* breadcrumbs  */}
            <div
            style={{
                marginTop: "10px",
                marginBottom: "10px",
            }}
            >
            <Container>
            <Stack spacing={2}>
            <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            >
            {breadcrumbs}
            </Breadcrumbs>
            </Stack>
            </Container>
            </div>

          <Container>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              {/* <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography> */}
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order has
                    shipped.
                  </Typography>

                  <React.Fragment>
                  {/* {getStepContent(activeStep)} */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="contained"
                      href="../"
                      sx={{ mt: 3, ml: 1 }}
                    >
                        Back to Home
                    </Button>
                  </Box>
                  </React.Fragment>
                
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
    
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          </Container>
          <Footer></Footer>
        </React.Fragment>
     
      );
}

