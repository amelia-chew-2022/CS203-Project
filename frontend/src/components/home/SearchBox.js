import FieldsRow from "../form/FieldsRow";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const textFieldStyle = {
    color: '#fff', // Text color (white)
    borderColor: '#fff',
    '& .MuiInputBase-root': {
        color: '#fff',
        '& input': {
            color: '#fff', // Input text color (white)
            borderColor: '#fff',
        },
        '&.Mui-focused': {
            color: '#fff', // Text color when focused (white)
            borderColor: '#fff', // Border color when focused (white)
        },
        '&.Mui-hover': {
            color: '#fff',
            borderColor: '#fff',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            color: '#fff',
            borderColor: '#fff', // Border color (white)
        },
    },
    '& .MuiInputLabel-root': {
        color: '#fff', // Label color (white)
        borderColor: '#fff',
    },
    '& .MuiFormHelperText-root': {
        color: '#fff', // Helper text color (white)
        borderColor: '#fff',
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
                <Box>
                <TextField
                    label="Search Event"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch', ...textFieldStyle }}
                    InputProps={{
                        startAdornment: <SearchIcon 
                        sx={{ 
                            color: '#fff', 
                            mr: 1, 
                            my: 0.5,
                        }} 
                        />
                    }}
                />
                </Box>
            </Box>
            
            {/* location */}
            <Box>
                <Box>
                <TextField
                    label="Location"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch', ...textFieldStyle }}
                    InputProps={{
                        startAdornment: <PlaceIcon sx={{ color: '#fff', mr: 1, my: 0.5,}} 
                    />
                    }}
                />
                </Box>
            </Box>

            {/* search date */}
            <Box>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker id="standard-basic" label="Select Date" variant="standard"

                        sx={{ 
                            color: '#fff',
                            '& .MuiInputBase-root': {
                                color: '#fff',
                                '& input': {
                                  color: '#fff',
                                },
                                '&.Mui-hover': {
                                  color: '#fff',
                                  borderColor: '#fff',
                                },
                                '&.Mui-focused': {
                                  color: '#fff',
                                  borderColor: '#fff',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#fff',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: '#fff',
                              },
                              '& .MuiFormHelperText-root': {
                                color: '#fff',
                              },
                          }}
                          />
                    </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Box>
        </FieldsRow>

        </Box>
    );
}