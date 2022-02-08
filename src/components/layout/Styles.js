import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles( (theme) => ({
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    navlist: {
        minWidth: "250px",
        maxWidth: "300px"
    }
}))