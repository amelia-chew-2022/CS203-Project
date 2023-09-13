import { Fragment } from 'react';
import Box from '@mui/material/Box';
import * as React from 'react';


const Login = () => {
    return (
        <Fragment>
            <Box
            sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark','&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
            
        </Fragment>
    );
};

export default Login;