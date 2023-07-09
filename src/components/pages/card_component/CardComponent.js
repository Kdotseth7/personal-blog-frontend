import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import capitalize from "../../../helpers/capitalize";
import cardComponent from "./scss/CardComponent.module.scss";

const CardComponent = (props) => {

    const styleName = (name) => {
        return name.split(" ").map((word) => {
            return capitalize(word);
        }).join(" ");
    }

    return (
        <Card raised="true" sx={{ maxWidth: 345 }} className={cardComponent.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.player["image"]}
                    alt={props.player["name"]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {styleName(props.player["name"])}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Team: {styleName(props.player["team"])}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        PPG: {props.player["points"]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Assists: {props.player["assists"]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rebounds: {props.player["rebounds"]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;