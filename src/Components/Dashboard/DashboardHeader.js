import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Box, Container } from "@mui/system";
import Popover from "@mui/material/Popover";
import {
  Grid,
  useMediaQuery,
  useTheme,
  AppBar,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
  Badge,
} from "@mui/material";
import Drawers from "./Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const DashboardHeader = ({ controlNav }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar
        sx={{
          background: "#131E47",
          color: "#000",
          boxShadow: "none",
          width: { lg: "82%", md: "70%" },
          display: "flex",
          justifyContent: "center",
          // alignContent: "center",
          height: { lg: "100px", md: "70px", sm: "70px", xs: "70px" },
        }}
      >
        {isMatch ? (
          <>
            <Box> </Box>
            <Drawers />
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", alignItems: "center", width: "95%" }}>
              <Container >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pl: 4,
                  }}
                >
                  <Grid
                    item
                    lg={4}
                    md={3}
                    sm={3}
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body"
                      sx={{ color: "#fff", fontSize: "32px" }}
                    >
                   Colleges
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center", 
                      
                    }}
                  >
                    
                    <Link to="/Editprofile">
                      <Avatar />
                    </Link>
                    <Typography variant="caption" sx={{ color: "#fff", paddingLeft: "12px" }}>
                      Admin Admin
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuList>
                <MenuItem sx={{ fontSize: "15px" }}>
                  <LogoutIcon sx={{ mr: 1 }} /> Logout
                </MenuItem>
                <MenuItem sx={{ fontSize: "15px" }}>
                  <LockOpenIcon sx={{ mr: 1 }} /> Change Pin
                </MenuItem>
              </MenuList>
            </Popover>
          </>
        )}
      </AppBar>
    </>
  );
};

export default DashboardHeader;
