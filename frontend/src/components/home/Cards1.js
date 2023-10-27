import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';

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

const [eventInfoList, setEventInfoList] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/home');
            setEventInfoList(response.data);
        } catch (error) {
            // Handle any errors that occurred during the request
            navigate('/eventinfo/notfound');
        }
    };
    fetchData();
}, []);


const formattedData = [];

const formatData = (eventInfoList, formattedData) => {
    for (let i = 0; i < eventInfoList.ceil(eventInfoList.length / 3); i++) {
        const startIndex = i * 3;
        const endIndex = startIndex + 3;

        if (endIndex > eventInfoList.length) {
            endIndex = eventInfoList.length;
        }
        formattedData.push(data.slice(startIndex, endIndex));
    }
}

formatData(eventInfoList, formattedData)



export default function Cards1() {

    <Fragment>
        {formattedData.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((eventInfo, itemIndex) => (
                    <div key={itemIndex} className="element">
                        <Link to="/eventinfo/${eventInfo.id}">
                            <Button>
                                <Card sx={{ width: 400, height: 300 }}>
                                    <CardMedia
                                        component="img"
                                        height="175"
                                        image={eventInfo.getImage()}
                                        alt="Vibes"
                                    />
                                    <CardContent>
                                        <Typography sx={dateStyle}>
                                            {eventInfo.getDate()}
                                        </Typography>
                                        <Typography sx={eventStyle}>
                                            {eventInfo.getName()}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        ))}




    </Fragment>




}