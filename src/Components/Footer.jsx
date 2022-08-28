import { Divider, Grid } from "@mui/material";
import React from "react";
import "./Css/footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="footer">
      <div
        className={` ${
          path === "/"
            ? "footer-home"
            : path === "/contactus"
            ? "footer-contact"
            : "footer-others"
        }`}
      >
        <Divider />
        <Grid
          container
          height={{ md: "40px", lg: "40px", xl: "84px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="transparent"
          paddingInline={{
            md: "calc(calc(100vw - 900px) / 2)",
            lg: "calc(calc(100vw - 900px) / 2)",
            xl: "calc(calc(100vw - 1150px) / 2)",
          }}
          className={`${
            path === "/"
              ? "foot-home"
              : path === "/contactus"
              ? "foot-contact"
              : "f-others"
          }`}
        >
          <span className="f-a">
            Made with ❤️ by
            <span className="f-aa"> Fantastic Story Inc.</span>
          </span>

          <span className="f-b">© 2022 NOVA Foods. All rights reserved.</span>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
