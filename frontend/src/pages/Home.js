import { Fragment } from "react";
import NavBar from "../components/navigation/NavBar";
import FieldsRow from "../components/form/FieldsRow";
import SearchBox from "../components/home/SearchBox";
import Cards from "../components/home/Cards";
import Button from "@mui/material/Button";
import * as React from 'react';
import HeadingOne from "../components/font/HeadingOne";

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