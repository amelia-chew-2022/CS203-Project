import FieldsRow from "../form/FieldsRow";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';

const textFieldStyle = {
    // Style for the white text field
    '& .MuiInputBase-root': {
      color: '#fff', // Text color
    },
    '& .MuiInputLabel-root': {
      color: '#fff', // Label color
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff', // Underline color (before input)
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#fff', // Underline color on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff', // Underline color (after input)
    },
    '& .Mui-focused .MuiFormHelperText-root': {
        color: '#fff', // Helper text color when focused
      },
  };

export default function SearchBox() {
    return (
        <Box
        sx={{
            width: "1000px",
            height: "flex",
            borderRadius: "20px", 
            backgroundColor: "#5522cc",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",

            }}
        >
        <FieldsRow>
            {/* search event */}
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon 
                        sx={{ 
                            color: '#fff', 
                            mr: 1, 
                            my: 0.5,
                        }} 
                    />
                    <TextField 
                        id="input-with-sx" 
                        label="Search Event" 
                        variant="standard"
                        sx={textFieldStyle}
                    />
                </Box>
            </Box>
            
            {/* location */}
            <Box>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-end' 
                        }}
                    >
                    <PlaceIcon 
                        sx={{ 
                            color: '#fff', 
                            mr: 1, 
                            my: 0.5,
                        }} 
                    />
                    <TextField 
                        id="input-with-sx" 
                        label="Location" 
                        variant="standard" 
                        sx={textFieldStyle}
                    />
                </Box>
            </Box>

            {/* search date */}
            {/* <SearchDate></SearchDate> */}


        </FieldsRow>

        </Box>
    );
}