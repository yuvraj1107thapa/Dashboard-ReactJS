import { makeStyles } from "@material-ui/core"
import blue from "@material-ui/core/colors/blue"
import blueGrey from "@material-ui/core/colors/blueGrey"

export const useStyles = makeStyles( (theme) => ({
    // Styles for Navbar
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    navlist: {
        minWidth: "250px",
        maxWidth: "300px"
    },
    // Styles for Sidebar
    drawerPaper: {
        width: "250px",
        marginTop: "65px",
        [theme.breakpoints.down("sm")]: {
            marginTop: '0px'
        }
    },
    navlinks: {
       color: blueGrey["A400"],
       " & :hover , & :hover div": {
            color: blue["A400"]
       },
       " & div": {
           color: blueGrey["A400"]
       }
    },
    activeNavlinks: {
        color: blue["A700"],
        " & div": {
            color: blueGrey["A700"]
        }
     },
     navButton: {
        width: "100%",
        textTransform: "capitalize"
     },
    // Styles for wrapper of main container
    wrapper: {
        height: "100vh",
        background: "#efefef",
        padding: theme.spacing(2, 2, 0, 34),
        [theme.breakpoints.down("xs")]:{
            padding:theme.spacing(2, 2)
        }
    }
}))