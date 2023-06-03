import React, { useState, FC } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Divider,
  DialogProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

//components
import Carusel from "./components/Carusel";
// import Slider from "./components/SlickSlider";
import ImagesList from "./components/ImageList";
import ViewMap from "./components/ViewMap";

//image
import RELogo from "../../assets/logoNoBg.png";
import Home from "../../assets/dialogViewIcon/home (1).png";
import Apartament from "../../assets/dialogViewIcon/apartment.png";
import M2 from "../../assets/dialogViewIcon/plans.png";
import Fav from "../../assets/dialogViewIcon/favourite.png";
import Price from "../../assets/dialogViewIcon/price-tag (1).png";
import Share from "../../assets/dialogViewIcon/share.png";
import Shop from "../../assets/dialogViewIcon/store.png";
import Phone from "../../assets/dialogViewIcon/telephone.png";
import Whatsapp from "../../assets/dialogViewIcon/whatsapp.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface Prop {
  data: any;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const CustomizedDialogs: FC<Prop> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log(data, "datadatadatadtad");

  return (
    <div>
      <Box sx={{}}>
        <Button
          fullWidth
          sx={{
            bgcolor: "#4d876a",
            fontSize: 12,
            color: "white",
          }}
          variant="contained"
          color="success"
          onClick={handleClickOpen}
        >
          View
        </Button>
      </Box>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "50px",
          },
        }}
        fullWidth={true}
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers sx={{ minHeight: "72vh", bgcolor: "#F9F5F6" }}>
          <Grid container>
            <Grid item md={5.5}>
              {/* <Carusel /> */}
              <ImagesList />
            </Grid>
            <Grid
              item
              md={6.5}
              sx={{
                // borderLeft: 1,
                pl: 8,
              }}
            >
              <Grid container sx={{ pt: 1 }}>
                <Grid
                  item
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4d876a",
                      borderRadius: 10,
                      mb: 2,
                      width: "60%",
                      boxShadow: "2px 3px 4px",
                    }}
                  >
                    <img src={RELogo} alt="Logo" width={100} height={60} />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: 20,
                      pb: 1,
                    }}
                  >
                    Property Info
                  </Typography>
                  <Divider
                    variant="middle"
                    sx={{
                      bgcolor: "#222",
                      mb: 1,
                    }}
                  />
                </Grid>
                <Grid item md={6} sx={{ pl: 3, pb: 1 }}>
                  <Typography sx={{ p: 0.5 }}>
                    <img
                      src={Price}
                      alt="price"
                      width={25}
                      height={25}
                      style={{ marginRight: 5 }}
                    />
                    {data?.price}
                  </Typography>
                  <Typography sx={{ p: 0.5 }}>
                    <img
                      src={M2}
                      alt="Size"
                      width={25}
                      height={25}
                      style={{ marginRight: 5 }}
                    />
                    2+1 | 100m2
                  </Typography>
                  <Typography sx={{ p: 0.5 }}>
                    <img
                      src={Home}
                      alt="House"
                      width={25}
                      height={25}
                      style={{ marginRight: 5 }}
                    />
                    {data?.property_type}
                  </Typography>
                </Grid>
                <Grid item md={6} sx={{ textAlign: "left" }}>
                  <Box sx={{ p: 0.5 }}>
                    <img
                      src={Whatsapp}
                      alt="Whatsapp"
                      width={25}
                      height={25}
                      style={{ marginRight: 6 }}
                    />
                    Whattsapp +355 693465034
                  </Box>
                  <Box sx={{ p: 0.5 }}>
                    <img
                      src={Phone}
                      alt="Phone"
                      width={25}
                      height={25}
                      style={{ marginRight: 6 }}
                    />
                    Number +355 683265034
                  </Box>
                </Grid>
                <Grid
                  container
                  sx={{
                    maxHeight: "37vh",
                    overflowY: "scroll",
                  }}
                >
                  <Grid item md={12} sx={{ pt: 2, pl: 2 }}>
                    <Typography sx={{ pb: 2 }}>{data?.desc}</Typography>
                  </Grid>
                  <Grid item md={12}>
                    <Box
                      sx={{
                        pr: 3,
                        mb: 3,
                      }}
                    >
                      <ViewMap
                        lat={data?.location?._lat}
                        lng={data?.location?._long}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={12}
                  sx={{ display: "flex", justifyContent: "center", pt: 1.5 }}
                >
                  <Button
                    sx={{
                      bgcolor: "#4d876a",
                      color: "white",
                      fontSize: 12,
                      mr: 1,
                    }}
                    variant="contained"
                  >
                    <img
                      src={Fav}
                      alt="Fav"
                      width={25}
                      height={25}
                      style={{ marginRight: 6 }}
                    />
                    Favourite
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "#4d876a",
                      color: "white",
                      fontSize: 12,
                      ml: 1,
                    }}
                    variant="contained"
                  >
                    <img
                      src={Share}
                      alt="Share"
                      width={25}
                      height={25}
                      style={{ marginRight: 7 }}
                    />
                    Share
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
};
export default CustomizedDialogs;
