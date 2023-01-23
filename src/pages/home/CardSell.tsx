import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Buyy from "../../assets/sell-house.webp"

export default function MultiActionAreaCard() {

    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 13 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Buyy}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center", fontFamily: "monospace", mb: 1 }}>
                        Sell
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => { navigate("/sell") }} size="small" variant="contained" color="primary" sx={{ fontSize: 14, paddingBlock: 1, borderRadius: 10, mt: 1, mb: 4, boxShadow: 5, bgcolor: "#5a6360", color: "white", textShadow: "2px 1px #000000", fontFamily: "monospace", fontWeight: "bold" }}>
                    Sell
                </Button>
            </CardActions>
        </Card>
    );
}