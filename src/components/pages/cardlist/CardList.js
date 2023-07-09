import {Grid, Typography} from "@mui/material";
import nba from "../../../static/data/nba.json";
import CardComponent from "../card_component/CardComponent";
import cardList from "./scss/CardList.module.scss";

const CardList = () => {
    return (
        <Grid container className={cardList.pageContainer}>
            <Grid item>
                <Typography variant={"h3"}>
                    Top 5s
                </Typography>
            </Grid>
            <Grid container className={cardList.cardListHeader}>
                <Typography variant={"h4"}>
                    Point Guards
                </Typography>
            </Grid>
            <Grid container className={cardList.cardList}>
                    {
                        nba["pg"].map((player, i) => {
                            return <Grid item><CardComponent key={i} player={player} /></Grid>
                        })
                    }
            </Grid>
        </Grid>
    );
}

export default CardList;
