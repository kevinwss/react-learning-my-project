import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import News from "../News";
import Favorites from "../Favorites";

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction component={Link} to="/home/news" label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to="/home/favorites" label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'skyblue', padding: 10 }}>
                <h1>Home</h1>

                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>

                <SimpleBottomNavigation />
            </div>
        );
    }
}