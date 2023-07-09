import {Link} from "react-router-dom";
import {AppBar, Grid, Typography} from "@mui/material";
import navbar from "./scss/Navbar.module.scss";

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Grid container item className={navbar.navbarContainer}>
                <Grid item xs={4} className={navbar.profileImage}>
                    <img src={""} alt="Profile"/>
                </Grid>
                <Grid item xs={4} className={navbar.header}>
                    <Typography variant="h3">
                        The Kush Blog
                    </Typography>
                </Grid>
                <Grid container item xs={4} className={navbar.linkContainer}>
                    <Grid item xs={4} className={navbar.link}>
                        <Link to="/">Home</Link>
                    </Grid>
                    <Grid item xs={4} className={navbar.link}>
                        <Link to="/about">About</Link>
                    </Grid>
                    <Grid item xs={4} className={navbar.link}>
                        <Link to="/portfolio">Portfolio</Link>
                    </Grid>
                    <Grid item xs={4} className={navbar.link}>
                        <Link to="/contact">Contact</Link>
                    </Grid>
                    <Grid item xs={4} className={navbar.link}>
                        <Link to="/top-lists">Top 5s</Link>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;