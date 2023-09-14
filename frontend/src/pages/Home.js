import { Fragment } from "react";
import NavBar from "../components/navigation/NavBar";
import FieldsRow from "../components/form/FieldsRow";
import SearchBox from "../components/home/SearchBox";
import Cards from "../components/home/Cards";
import Button from "@mui/material/Button";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import LeeYoungJi from '../assets/leeyoungji.png';
import Coldplay from '../assets/coldplay.png';
import Twice from '../assets/twice.png';
import Ateez from '../assets/ateez.png'
import Lauv from '../assets/lauv.png'
import P1Harmony from '../assets/p1harmony.png'
import HPF2023 from '../assets/hallyupopfest.png'
import RexOrangeCounty from '../assets/roc.png'
import TaylorSwift from '../assets/taylorswift.png'
import HeadingOne from "../components/font/HeadingOne";

import { Link } from "react-router-dom";


const dateStyle = {
    variant: "body1",
    color: "#5522cc",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "none",
};

const eventStyle = {
    gutterBottom: "true",
    variant: "h5",
    fontSize: "20px",
    component: "div",
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "none",
};

const Home = () => {
    return (
        <Fragment>
            <NavBar/>

            <FieldsRow>
                <SearchBox/>
            </FieldsRow>

            <FieldsRow>
            <HeadingOne>Upcoming Events</HeadingOne>
            </FieldsRow>

            {/* cards */}
            <Cards/>

            <FieldsRow>
                <Button 
                    variant="outlined"
                    size="large"
                    sx={{ 
                        "&.Mui-selected": {
                            color: "#5522cc",
                            borderColor: "#5522cc",
                        },
                        "&:hover": {
                            borderColor: "#5522cc",
                            backgroundColor: "transparent",
                        },
                        color: "#5522cc",
                        borderColor: "#5522cc",
                    }}
                >
                        Load More
                </Button>
            </FieldsRow>

        </Fragment>
    );
};

export default Home;