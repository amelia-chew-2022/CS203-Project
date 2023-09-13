import Divider from "@mui/material/Divider";
import { Fragment } from "react";
import { Typography } from "@mui/material";

const Heading = ({ divider = false, children = "Heading" }) => {
    return (
        <Fragment>
            <Typography
                style={{
                    color: "#000",
                    gutterBottom: "true",
                    fontSize: "48px",
                    component: "div",
                    fontWeight: "bold",
                    textAlign: "left",
                    textTransform: "none",
                }}
            >
                {children}
            </Typography>
            {divider && <Divider sx={{ margin: "1rem 0" }} />}
        </Fragment>
    );
};

export default Heading;