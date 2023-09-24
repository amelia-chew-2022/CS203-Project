import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navigation/NavBar";
import FieldsRow from "../components/form/FieldsRow";
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
    <Link 
        underline="hover" 
        key="1" 
        color="inherit" 
        onClick={handleClick}
    >
    <Link to="/">
        Home
    </Link>
    </Link>,
    <Typography key="2" color="text.primary">
        Categories
    </Typography>,
];

const Categories = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar/>

            {/* breadcrumbs */}
            <div
            style={{
                marginTop: "10px",
                marginBottom: "10px",
            }}
            >
            <Container>
            <Stack spacing={2}>
            <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            >
            {breadcrumbs}
            </Breadcrumbs>
            </Stack>
            </Container>
            </div>

            <FieldsRow>
            <Typography variant="h3" gutterBottom sx={{fontWeight: "bold"}}>
                Categories
            </Typography>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 1125, height: "flex" }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Concerts
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 1125, height: "flex" }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Sports
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 1125, height: "flex" }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Arts, Theatre & Comedy
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 1125, height: "flex" }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Family Entertainment
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 1125, height: "flex" }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    SOTA Showcases
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <Footer/>
        </React.Fragment>
    );
};

export default Categories;