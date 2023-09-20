import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import Logo from "../../assets/applogo.svg";

// Function to generate accessibility properties for a tab
function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

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
            <Link to="/">
            <img src={Logo} alt="Logo"/>
            </Link>

            <Tabs 
                    value={value}
                    onChange={handleChange} 
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        sx: { backgroundColor: "white" }, // Set the indicator color to white
                        fontColor: "white",
                    }}
                    sx={{
                        "&.MuiTabs-root": {
                            marginBottom: "0px", // Remove the default margin-bottom
                        },
                    }}
                >

                <Tab
                    label="Events"
                    {...a11yProps(0)}
                    sx={{ 
                        "&.Mui-selected": {
                            color: "white" 
                        },
                        color: "white"
                    }}
                />
                
                <Tab
                    label="Categories"
                    {...a11yProps(1)}
                    sx={{ 
                        "&.Mui-selected": {
                            color: "white" 
                        },
                        color: "white"
                    }}
                />
                
                <Tab
                    label="Venues"
                    {...a11yProps(2)}
                    sx={{ 
                        "&.Mui-selected": {
                            color: "white" 
                        },
                        color: "white" 
                    }}
                />

                <Tab
                    label="FAQ"
                    {...a11yProps(3)}
                    sx={{ 
                        "&.Mui-selected": {
                            color: "white" 
                        },
                        color: "white" 
                    }}
                />

                <Stack direction="row" spacing={2}>
                <Link to="/Login">
                <Button 
                    variant="outlined"
                    size="large"
                    sx={{ 
                        "&.Mui-selected": {
                            color: "white",
                            borderColor: "white",
                        },
                        "&:hover": {
                            borderColor: "white",
                            backgroundColor: "transparent",
                        },
                        color: "white",
                        borderColor: "white",
                    }}
                    startIcon={<LoginIcon/>}
                >
                    Login
                </Button>
                </Link>
                </Stack>
            </Tabs>


        </AppBar>
    );
};

export default NavBar;