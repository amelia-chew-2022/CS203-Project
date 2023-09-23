import { Fragment } from "react";
import NavBar from "../components/navigation/NavBar";
import FieldsRow from "../components/form/FieldsRow";
import SearchBox from "../components/home/SearchBox";
import Cards from "../components/home/Cards";
import Button from "@mui/material/Button";
import * as React from 'react';
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <Fragment>
            <CssBaseline />
            <NavBar/>

            <FieldsRow>
                <SearchBox/>
            </FieldsRow>

            <FieldsRow>
            <Typography variant="h3" gutterBottom sx={{fontWeight: "bold"}}>
                Upcoming Events
            </Typography>
            </FieldsRow>

            {/* cards */}
            <Cards/>

            <FieldsRow>
                <Button variant="outlined" size="large">
                    Load More
                </Button>
            </FieldsRow>

            <Footer/>
        </Fragment>
    );
};

export default Home;