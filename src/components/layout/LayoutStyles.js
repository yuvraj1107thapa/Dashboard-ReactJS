import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles( (theme) => ({
    // Style for Navbar
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    navlist: {
        minWidth: "250px",
        maxWidth: "300px"
    },
    // Style for Sidebar
    drawerPaper: {
        width: "250px",
        marginTop: "65px"
    }
}))