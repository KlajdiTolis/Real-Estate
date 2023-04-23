import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

import HomeRent from "../../assets/BuySellRent/rent.jpg";

export default function MultiActionAreaCard() {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 450, borderRadius: 3, boxShadow: 13, maxHeight: 550 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={HomeRent}
          alt="green iguana"
          sx={{ position: "top ", height: 400 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "monospace",
              mb: 1,
            }}
          >
            Rent your dream house
          </Typography>
          {/* <Typography
            sx={{ textAlign: "center" }}
            variant="body2"
            color="text.secondary"
          >
            Lizards are a widespread group of squamate reptiles, with odsad asd
            sadsad asddasdsad sdsadsadsdsdsads ad sad dasdsad dsad asd sad
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            navigate("/rent");
          }}
          size="small"
          variant="contained"
          color="primary"
          sx={{
            fontSize: 14,
            paddingBlock: 1,
            borderRadius: 10,
            mb: 2,
            boxShadow: 5,
            bgcolor: "#335959",
            textShadow: "2px 1px #000000",
            color: "white",
            fontFamily: "monospace",
            fontWeight: "bold",
            paddingInline: 5,
          }}
        >
          Rent
        </Button>
      </CardActions>
    </Card>
  );
}
