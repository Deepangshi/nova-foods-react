import React from "react";
import "./Css/navbar.css";
import { Link, useLocation } from "react-router-dom";

import { navData } from "./Common/navData";

import Logo from "../Images/Group.png";
import FB from "../Images/akar-icons_facebook-fill.png";
import IG from "../Images/akar-icons_instagram-fill.png";
import TK from "../Images/bxl_tiktok.png";
import YT from "../Images/akar-icons_youtube-fill.png";

import { Box, Grid, IconButton, Drawer, List } from "@mui/material";

import { List as ListIcon } from "phosphor-react";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const location = useLocation();

  const drawerWidth = "100vw";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log("clicked here");
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      display={{ xs: "flex", md: "none", lg: "none", xl: "none" }}
      flexDirection="column"
      height="100%"
      textAlign="center"
      backgroundColor=" #E7302A"
      paddingInline="16px"
      className="drawer"
    >
      <Grid
        className="n-ab"
        display={{ xs: "flex", md: "none", lg: "none" }}
        paddingTop="12px"
        justifyContent="space-between"
      >
        <span>
          <Box width={{ xs: "56px" }} marginRight="auto" className="">
            <img src={Logo} alt="" className="" width="100%" />
          </Box>
        </span>

        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon
            sx={{
              color: "#ffffff",
            }}
          />
        </IconButton>
      </Grid>

      <div className="n-abb">
        <List
          className="n-abc"
          onClick={handleDrawerToggle}
          sx={{
            color: "#ffffff",
          }}
        >
          {navData.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={location.pathname === item.path ? "navlink-line" : ""}
            >
              {item.title}
            </Link>
          ))}
        </List>

        <span className="n-fig">
          <img src={FB} alt="" className="" />
          <img src={IG} alt="" className="" />
          <img src={TK} alt="" className="" />
        </span>
      </div>

      <Box marginTop="auto">
        <p className="n-w">
          Made with ❤️ by <span className="n-w1"> Fantastic Story Inc. </span>
        </p>
        <p className="n-w2">© 2022 NOVA Foods. All rights reserved.</p>
      </Box>
      {/* drawerend */}
    </Box>
  );

  return (
    <Grid
      container
      height={{ xs: "54px", sm: "80px", md: "80px", lg: "80px", xl: "95px" }}
      display="flex"
      paddingInline={{
        xs: "16px",
        sm: "16px",
        md: "calc(calc(100vw - 900px) / 2)",
        lg: "calc(calc(100vw - 900px) / 2)",
        xl: "calc(calc(100vw - 1150px) / 2)",
      }}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#e7302a"
      overflow="hidden"
    >
      <Grid item xs={6} md={2} lg={2} xl={2}>
        <Box
          width={{
            xs: "56px",
            sm: "60px",
            md: "80px",
            lg: "80px",
            xl: "111px",
          }}
          marginRight="auto"
        >
          <img src={Logo} alt="" className="" width="100%" />
        </Box>
      </Grid>

      {/* forphone & small ipad */}
      <Box
        className="n-icon"
        display={{
          xs: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        marginLeft="auto"
      >
        <IconButton onClick={handleDrawerToggle}>
          <ListIcon color="#FBFBFB" />
        </IconButton>
      </Box>
      {/* phoneend */}

      {/* drawer */}
      <Box
        display={{
          xs: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        width={{ xs: "auto", md: "0" }}
      >
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowX: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* navlink */}
      <Grid
        item
        md={8}
        lg={8}
        xl={8}
        className="nav-links"
        display={{ xs: "none", md: "flex" }}
      >
        {navData.map((item, i) => (
          <Link key={i} to={item.path}>
            <span
              className={location.pathname === item.path ? "navlink-bold" : ""}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </Grid>

      <Grid
        item
        md={2}
        lg={2}
        xl={2}
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
        marginLeft="auto"
      >
        <Box width={{ md: "24px" }}>
          <img src={FB} alt="" className="" width="100%" />
        </Box>
        <Box width={{ md: "24px" }}>
          <img src={IG} alt="" className="" width="100%" />
        </Box>
        <Box width={{ md: "24px" }}>
          <img src={TK} alt="" className="" width="100%" />
        </Box>
        <Box width={{ md: "24px" }}>
          <img src={YT} alt="" className="" width="100%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;
