import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Buyy from "../../assets/buy-house.webp";
import Rentt from "../../assets/rent-house.jpg";

export default function MultiActionAreaCard() {

    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345, borderRadius: 12, boxShadow: 13 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Rentt}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "center", fontFamily: "monospace", mb: 1 }}>
                        Rent
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => { navigate("/rent") }} size="small" variant="contained" color="primary" sx={{ fontSize: 14, paddingBlock: 1, borderRadius: 10, mt: 1, mb: 4, boxShadow: 5, bgcolor: "#fffeca", color: "black", fontFamily: "monospace", fontWeight: "bold" }}>
                    Rent
                </Button>
            </CardActions>
        </Card>
    );
}