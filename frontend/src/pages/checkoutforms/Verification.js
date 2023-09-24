import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import './Verification.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Verification() {

    const [isChecked, setIsChecked] = useState(false);

    function Checkboxes() {
        const handleCheckboxChange = () => {
            // Toggle the state between checked and unchecked
            setIsChecked(!isChecked);
        };

        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

        return (
            <div>
                <Checkbox
                    {...label}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </div>
        );
    }

    const [verificationText, setVerificationText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const generateVerificationText = () => {
        // In a real implementation, you would generate a random verification text on the server.
        // For simplicity, we'll hardcode it here.
        const generatedText = 'ABCD1234';
        setVerificationText(generatedText);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const verifyBot = () => {
        // In a real implementation, you would send the userInput to the server for verification.
        // For simplicity, we'll check it locally here.
        if (userInput === verificationText && isChecked) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };


    function YourComponent() {
        const [userInput, setUserInput] = useState('');
      
        const handleInputChange = (event) => {
          const text = event.target.value;
          setUserInput(text);
        };
      
        return (
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            validate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Verification Code"
              value={userInput}
              onChange={handleInputChange}
            />
          </Box>
        );
      };

      

    return (
        <div>
            {!isVerified ? (
                <div>
                    <div className='centered-container'>

                        {/* <button onClick={generateVerificationText}>Generate Image</button> */}
                        <p classname='verification'> ABCD1234</p>
                        <p>Please type the verification code 
                            {/* <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Type here" /> */}

                                <YourComponent/>
                                
                        </p>

                        <p>
                            The verification code consists of only alphabetic letters and can be refreshed by clicking the on its image
                            <br/>
                            <br/>
                            Please do not operate on more than one window and submit this page as soon as possible to avoid verification failure
                        </p>

                    </div>

                    <p classname='terms-and-conditions'>
                        If you are already opted-in you will receive updates by electronic means (email, SMS, etc.) about events, activities, news, products and special offers from the organisers, sponsors, and/or venue of this event.
                        <br />
                        <br />
                        If you want to receive updates or manage your preference, go to My Profile. You can unsubscribe at any time by contacting the event partner.
                    </p>


                    <FormControlLabel control={<Checkboxes />}
                        label='I hereby acknowledge that I have read and agreed to Purchase Policy and the terms and conditions of this event (including the Exchange and Refund Policy, Admission Policy and Conditions of Entry for the event), 
                        and authorize Ticketmaster to collect, process, utilize and internationally transmit my personal data in accordance with the Privacy Policy and within the scope of specific purposes set forth therein.'
                    />
                </div>

            ) : (
                <div>
                    <p>Verification successful! You are not a bot.</p>
                    {/* You can show additional content or allow the user to proceed here */}
                </div>
            )}
        </div>
    );
};

export default Verification

