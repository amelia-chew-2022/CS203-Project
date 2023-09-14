import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FieldsRow from '../form/FieldsRow';
import { Fragment } from 'react';
import LeeYoungJi from '../../assets/leeyoungji.png';
import Coldplay from '../../assets/coldplay.png';
import Twice from '../../assets/twice.png';
import Ateez from '../../assets/ateez.png'
import Lauv from '../../assets/lauv.png'
import P1Harmony from '../../assets/p1harmony.png'
import HPF2023 from '../../assets/hallyupopfest.png'
import RexOrangeCounty from '../../assets/roc.png'
import TaylorSwift from '../../assets/taylorswift.png'
import { Link } from "react-router-dom";
// import CardActions from '@mui/material/CardActions';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import EventInfo from '../../pages/EventInfo';



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

export default function Cards() {

    return (
        <Fragment>
        <FieldsRow>
        <Link to="/eventinfo">
        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={LeeYoungJi}
                    alt="Lee Youngji"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    20 Oct 2023 (Fri)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    LEE YOUNGJI 1st ASIA TOUR 'THE MAIN CHARACTER' - SINGAPORE
                    </Typography>
                </CardContent>
            </Card>
        </Button>
        </Link>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={Coldplay}
                    alt="Coldplay"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    23 Jan 2024 (Tue) ~ 31 Jan 2024 (Wed)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    Coldplay: Music Of The Spheres World Tour - delivered by DHL
                    </Typography>
                </CardContent>
            </Card>
        </Button>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={Twice}
                    alt="Twice"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    2 Sep 2023 (Sat) ~ 3 Sep 2023 (Sun)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    TWICE 5TH WORLD TOUR 'READY TO BE' IN SINGAPORE
                    </Typography>
                </CardContent>
            </Card>
        </Button>
        </FieldsRow>

        <FieldsRow>
        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={Ateez}
                    alt="Ateez"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    9 Sep 2023 (Sat)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    ATEEZ WORLD TOUR [THE FELLOWSHIP: BREAK THE WALL]
                    </Typography>
                </CardContent>
            </Card>
        </Button>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={Lauv}
                    alt="Lauv"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    5 Sep 2023 (Tue)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    Lauv: The Between Albums Tour in Singapore
                    </Typography>
                </CardContent>
            </Card>
        </Button>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={P1Harmony}
                    alt="P1Harmony"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    17 Sep 2023 (Sun)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    P1HARMONY LIVE TOUR [P1USTAGE H:P1ONEER] IN SINGAPORE
                    </Typography>
                </CardContent>
            </Card>
        </Button>
        </FieldsRow>

        <FieldsRow>
        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={HPF2023}
                    alt="HPF2023"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    12 Nov 2023 (Sun)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    HallyuPopFest Singapore 2023
                    </Typography>
                </CardContent>
            </Card>
        </Button>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={RexOrangeCounty}
                    alt="Rex Orange County"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    17 Oct 2023 (Tue)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    Rex Orange County Live in Asia 2023 Singapore
                    </Typography>
                </CardContent>
            </Card>
        </Button>

        <Button>
            <Card sx={{ width: 400, height: 300 }}>
                <CardMedia
                    component="img"
                    height="175"
                    image={TaylorSwift}
                    alt="Taylor Swift"
                />
                <CardContent>
                    <Typography sx={ dateStyle }>
                    02 Mar 2024 (Sat) ~ 09 Mar 2024 (Sat)
                    </Typography>
                    <Typography sx={ eventStyle }>
                    Taylor Swift | The Eras Tour
                    </Typography>
                </CardContent>
            </Card>
        </Button>
        </FieldsRow>
        </Fragment>
  );
}