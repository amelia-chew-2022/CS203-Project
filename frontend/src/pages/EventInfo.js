import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import HeadingOne from "../components/font/HeadingOne";
import NavBar from "../components/navigation/NavBar";
import Divider from "@mui/material/Divider"
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Vibes from '../assets/vibes.png';
import * as React from 'react';
import { Link } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

// Function to generate accessibility properties for a tab
function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

const breadcrumbs = [
    <Link 
        underline="hover" 
        key="1" 
        color="inherit" 
        onClick={handleClick}
    >
        Home
    </Link>,
    <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
    >
        Events
    </Link>,
    <Typography key="3" color="text.primary">
        VIBES
    </Typography>,
];

const tabStyle={
    "&.Mui-selected": {
        color: "#5522cc",
        fontColor: "#5522cc",
        backgroundColor: "#5522cc",
    },
    color: "#5522cc" 
}

const EventInfo = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Fragment>
            <NavBar/>

            {/* breadcrumbs */}
            <Stack spacing={2}>
            <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            >
            {breadcrumbs}
            </Breadcrumbs>
            </Stack>

            {/* image */}
            <Box sx={{ maxHeight: "flex", maxWidth: "flex", backgroundColor: "#000" }}>
                <img src={Vibes} alt="Vibes" width="100%"/>

                <Typography sx={{fontSize: "32px", color: "#fff"}}>23 Sep 2023 (Sat.) / University Cultural Centre Ho Bee Auditorium</Typography>
                <Typography sx={{fontWeight: "bold", fontSize: "48px", color: "#fff"}}>VIBES</Typography>
            </Box>

            {/* tabs */}
            <Box sx={{ maxWidth: "flex", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
                <Tabs

                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                    sx: { backgroundColor: "#5522cc" }, // Set the indicator color to white
                    fontColor: "#5522cc",
                }}
                sx={{
                    "&.MuiTabs-root": {
                        marginBottom: "0px", // Remove the default margin-bottom
                    },
                }}
                >
                <Tab 
                    label="Event Details" 
                    {...a11yProps(0)} 
                    sx={{tabStyle}}
                />
                <Tab 
                    label="Ticket Pricing" 
                    {...a11yProps(1)} 
                    sx={{tabStyle}}
                />
                <Tab 
                    label="Seat Map" 
                    {...a11yProps(2)} 
                    sx={{tabStyle}}
                />
                <Tab 
                    label="Exchange & Refund Policy" 
                    {...a11yProps(3)} 
                    sx={{tabStyle}}
                />
                <Tab 
                    label="Admissions Policy" 
                    {...a11yProps(4)} 
                    sx={{tabStyle}}
                />
                <Tab 
                    label="Ways To Buy Tickets" 
                    {...a11yProps(5)} 
                    sx={{tabStyle}}
                />

                <Link to="/checkout">
                <Button 
                variant="contained" 
                sx={{backgroundColor: "#5522cc",
                "&.Mui-selected": {
                    color: "#5522cc",
                },
                "&:hover": {
                    borderColor: "#5522cc",
                    backgroundColor: "#5522cc",
                },
                }}>
                    Buy Tickets
                </Button>
                </Link>
                </Tabs>
            </Box>

            {/* event details */}
            <HeadingOne>Event Details</HeadingOne>

            <Typography paragraph>
            Art Republic proudly presents VIBES! An extraordinary festival, destined to ignite passions and capture hearts on September 23, 
            2023. Get ready for an epic celebration of music, dance, and fun at VIBES! Enchanting performances await you, featuring the 
            sensational Singaporean artist, Alfred Sun, and the mesmerizing dance choreographer from China, Orangie, whose captivating moves 
            and boundless talent will leave you in awe. And to crank up the excitement even more, we've got the esteemed radio DJ Hazelle 
            Teo from YES933FM, whose magnetic energy will light up the party as the ultimate MC!
            </Typography>

            <Typography paragraph>
            This grand spectacle involves over 200 tireless talents who have poured their hearts into crafting the show of a lifetime. 
            These extraordinary individuals worked hand in hand with creative and gifted dance and music instructors, taking you on a 
            captivating journey through their artistry. You'll be left breathless with every move, note, and beat as they showcase their 
            passion and skill on stage.
            </Typography>

            <Typography paragraph>
            At Art Republic, we dare to dream without bounds. Looking ahead, VIBES will evolve into a massive celebration, embracing legendary 
            dancers, acclaimed rappers, and celebrated entertainers from across the globe. The promise of an even more dynamic and mesmerizing 
            extravaganza will leave you craving for more. The stage is set, and the anticipation is mounting! Don't miss this opportunity to 
            experience the magic firsthand. Secure your tickets for VIBES now! We eagerly await your presence. See you there!
            </Typography>
            
            {/* ticket pricing */}
            <Box
            sx={{
                width: "flex",
                height: "flex",
                backgroundColor: "#ececec",
              }}
            >
            <HeadingOne>Ticket Pricing</HeadingOne>

            <Typography style={{fontWeight: "bold", color: "#5522cc"}} paragraph>
            GENERAL SALE
            </Typography>

            <Typography>
            <b>START DATE</b><br/>
            10 AUGUST 2023<br/>
            10:00AM onwards via online, hotline and SingPost outlets
            </Typography>

            <Divider/>

            <Typography>
            <b>STANDARD</b><br/>
            CAT 1: $55<br/>
            CAT 2: $48<br/>
            CAT 3: $32
            </Typography>

            <Divider/>

            <Typography>
            <b>NOTE:</b><br/>

            <ul>
            <li>Limited to <u><b>20</b></u> tickets per transaction.</li>
            <li>Ticket Pricing excludes Booking Fee. Booking Fee is as follows:</li>
                <ul>
                <li>$4 booking fee per ticket for tickets $30 and above</li>
                <li>$2 booking fee per ticket for tickets between $20 and $29.99</li>
                <li>$1 booking fee per ticket for tickets priced below $20.00</li>
                </ul>
            </ul>
            </Typography>
            </Box>

            {/* seat map */}
            <HeadingOne>Seat Map</HeadingOne>

            {/* exchange and refund policy */}
            <Box
            sx={{
                width: "flex",
                height: "flex",
                backgroundColor: "#ececec",
              }}
            >
            <HeadingOne>Exchange & Refund Policy</HeadingOne>
            <Typography>
            <ol type="1">
                <li>The Organiser/Venue Owner reserves the right without refund or compensation to refuse admission/evict any person(s) whose 
                conduct is disorderly or inappropriate or who poses a threat to security, or to the enjoyment of the Event by others.</li>
                <li>Ticket holders assume all risk of injury and all responsibility for property loss, destruction or theft and release the 
                promoters, performers, sponsors, ticket outlets, venues, and their employees from any liability thereafter.</li>
                <li>The resale of ticket(s) at the same or any price in excess of the initial purchase price is prohibited.</li>
                <li>There is no refund, exchange, upgrade, or cancellation once ticket(s) are sold.</li>
                <li>We would like to caution members of the public against purchasing tickets from unauthorized sellers or 3rd party websites. 
                By purchasing tickets through these non-authorized points of sale, buyers take on the risk that the validity of the tickets 
                cannot be guaranteed, with no refunds possible.⁠</li>
            </ol>
            </Typography>

            </Box>

            {/* admission policy */}
            <HeadingOne>Admission Policy</HeadingOne>
            <Typography>
            <b>Admission Rules:</b><br/>
            <ol type="1">
                <li>The seats on the third floor are relatively high. Please choose carefully if you are under 12 years old, over 60 years old, 
                or those with high blood pressure, heart disease, fear of heights, or vertigo. Ticket holders assume all risk of injury and all 
                responsibility for property loss, destruction or theft and release the promoters, performers, sponsors, ticket outlets, venues, 
                and their employees from any liability thereafter.</li>
                <li>Admission to show/venue by full ticket only. Printed/electronic tickets must be produced for admission.</li>
                <li>Admission will not be allowed for infants in arms and children aged 3 years old and below.</li>
                <li>Children above 3 years old and under 6 years old may be admitted free of charge provided that they do not occupy a seat. 
                They must be seated on the lap of a parent / guardian.</li>
                <li>Individuals aged 6 years old and above will be required to purchase a ticket for admission.</li>
                <li>No flash photography and videography allowed.</li>
                <li>No outside food and beverage are allowed into the venue.</li>
            </ol>
            </Typography>

            {/* ways to buy tickets */}
            <Box
            sx={{
                width: "flex",
                height: "flex",
                backgroundColor: "#ececec",
              }}
            >
            <HeadingOne>Ways To Buy Tickets</HeadingOne>
            <Typography>
            <b>► ONLINE & MOBILE:</b><br/>
            24 x 7 x 365 days of the year! Visit us on our website at ticketmaster.sg to purchase tickets.<br/>


            <b>► HOTLINE:</b>
            +65 3158 8588

            Operating Hours:<br/>
            Monday to Saturday (10am - 6pm)<br/>
            Sunday and Public Holidays (Closed)<br/>

            <b>► OUTLETS:</b><br/>

            ♦ SINGPOST<br/>
            The sale of tickets will be available at All SingPost outlets.<br/>
            Click here to check for available branches and operating hours.<br/>
            </Typography>

            </Box>
        </Fragment>
    );
};

export default EventInfo;