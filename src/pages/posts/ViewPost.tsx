import React, { useState } from "react";
import { Grid, Box, Typography,Button,Dialog,DialogTitle,IconButton,DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import Carusel from "./Carusel";

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

function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ bgcolor: "#335959", color: "white" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        View
      </Button>
      <BootstrapDialog
        fullWidth={true}
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Grid container>
            <Grid item md={4}>
              <Carusel />
            </Grid>
            <Grid item md={6}>
              Property Info
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
}
export default CustomizedDialogs;
