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
        Venues
    </Typography>,
];

const Venues = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
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
                Venues
            </Typography>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Singapore Indoor Stadium
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    National Stadium
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    The Star Performing Arts Centre | The Star Theatre
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Capitol Theatre
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <FieldsRow>
            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Esplanade Theatre
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Gateway Theatre (Main Theatre)
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Singapore EXPO Convention & Exhibition Centre
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    University Cultural Centre Ho Bee Auditorium
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>


            <FieldsRow>
            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    School Of The Arts Singapore (SOTA) Concert Hall
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Suntec Singapore Convention & Exhibition Centre
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Singapore Chinese Cultural Centre
                    </Typography>
                </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ width: 250, height: 300 }}>
                {/* <CardMedia
                    component="img"
                    height="175"
                    image={}
                    alt=""
                /> */}
                <CardContent>
                    <Typography>
                    Victoria Theatre
                    </Typography>
                </CardContent>
            </Card>
            </Button>
            </FieldsRow>

            <Footer/>

        </React.Fragment>
    );
};

export default Venues;