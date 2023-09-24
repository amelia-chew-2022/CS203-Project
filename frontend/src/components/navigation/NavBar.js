import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import Logo from "../../assets/applogo.svg";

const NavBar = ({ authenticated = false }) => {
    const [value, setValue] = React.useState(0); // The currently selected tab index

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <AppBar
            sx={{
                backgroundColor: "#5522CC",
                minHeight: "50px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
            position="sticky"
        >
            <Container>
            <Toolbar disableGutters>

            <Link to="/">
            <img src={Logo} alt="Logo"/>
            </Link>

            <Tabs 
                    value={value}
                    onChange={handleChange} 
                    textColor="secondary"
                    indicatorColor="secondary"
                >

                <Tab
                    label="Events"
                    sx={{ 
                        color: "white"
                    }}
                />
                
                <Tab
                    label="Categories"
                    sx={{ 
                        color: "white"
                    }}
                />
                
                <Tab
                    label="Venues"
                    sx={{ 
                        color: "white" 
                    }}
                />

                <Tab
                    label="FAQ"
                    sx={{ 
                        color: "white" 
                    }}
                />

            </Tabs>

            <Link to="/login">
            <Button 
                variant="outlined"
                size="large"
                color="secondary"
                textColor="secondary"
                indicatorColor="secondary"
                startIcon={<LoginIcon/>}
            >
                Login
            </Button>
            </Link>
            </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;