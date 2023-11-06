import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

function onChange(value) {
    console.log("Captcha value:", value);
}

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [recaptchaToken, setRecaptchaToken] = React.useState('');
    const [usernameError, setUsernameError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError(event.target.value === '');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(event.target.value === '');
    };

    const handleCaptchaChange = (value) => {
        setRecaptchaToken(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username === '' || password === '') {
            setUsernameError(username === '');
            setPasswordError(password === '');
            return;
        }

        if (!recaptchaToken) {
            alert("Please complete the ReCAPTCHA");
            return;
        }
        console.log(username);
        console.log(password);
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    recaptchaToken: recaptchaToken,
                }),
            });

            if (response.ok) {
                const userData = await response.json();
                console.log(userData);
                // Your new code snippet
                console.log("Data to send to the server:", userData);
                let authHeader = window.btoa(username + ':' + password);
                let user = { 'username': username, 'authHeader': authHeader };
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/'); // Redirect to the home page after login
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            alert(error.message); // For a better UX, consider using a dialog or snackbar instead of alert
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={handleUsernameChange}
                        error={usernameError}
                        helperText={usernameError ? 'Username is required' : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                        helperText={passwordError ? 'Password is required' : ''}
                    />
                    <ReCAPTCHA
                        sitekey="6LdH1UwoAAAAAO8hLo9y8SkrWpKT3W7VR0xHVD3S"
                        onChange={handleCaptchaChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
