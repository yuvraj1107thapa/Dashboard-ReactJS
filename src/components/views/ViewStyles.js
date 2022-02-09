import { makeStyles } from '@material-ui/core';
import blueGrey from "@material-ui/core/colors/blueGrey"

export const useStyles = makeStyles( (theme) => ({
    section: {
        marginTop: theme.spacing(3, 0)
    },
    // Page
    pageTitle: {
        color: blueGrey[800],
        marginBottom: theme.spacing(2),
        textTransform: "capitalize"
    },
    pageSubtitle: {
        color: blueGrey[500],
        marginBottom: theme.spacing(1, 0),
        textTransform: "uppercase"
    },
    // Styles for Dashboard
    statsLabel: {
        textTransform: "uppercase",
        color: blueGrey[500],
        textAlign: "center",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem"
        }
    },
    statsTitle: {
        textTransform: "capitalize",
        color: blueGrey[800],
        textAlign: "center",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.8rem"
        }
    },
    ratioBtn: { fontSize: "1rem", fontWeight: "bold"}
}))