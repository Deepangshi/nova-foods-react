import { Box, Grid } from "@mui/material";
import React from "react";
import "../Css/brands.css";

import Momo from "../../Images/image 2.png";
import FBuns from "../../Images/image 5.png";
import Twok from "../../Images/image 3.png";
import SweetC from "../../Images/image 3 (1).png";
import Classic from "../../Images/image 6.png";
import Bar from "../../Images/image 1.png";

const Brands = () => {
  return (
    <Grid
      container
      height="100%"
      display="flex"
      paddingInline={{
        xs: "16px",
        sm: "16px",
        md: "calc(calc(100vw - 900px) / 2)",
        xl: "calc(calc(100vw - 1150px) / 2)",
      }}
      paddingTop={{ xs: "32px", sm: "50px", xl: "70px" }}
      paddingBottom={{ xs: "50px", sm: "100px", xl: "150px" }}
      overflow="hidden"
    >
      <Grid
        container
        paddingInline={{ sm: "15%", xl: "13%" }}
        textAlign="center"
      >
        <Grid item sm={12}>
          <p className="btext-1">Our Brands</p>
          <p className="btext-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem
            dolor sed. Tempor ut ac vestibulum massa lectus consequat. Est odio
            velit pellentesque arcu facilisis adipiscing. Tempor facilisis velit
            accumsan molestie lectus viverra. Elit sapien convallis nisi risus
            rhoncus rhoncus lorem sapien tortor. Ullamcorper sed diam adipiscing
            diam. Diam eu nibh mauris laoreet scelerisque semper pellentesque.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "30px", sm: "60px", xl: "100px" }}
        paddingTop={{ xs: "10px", sm: "60px", xl: "84px" }}
        paddingBottom={{ xs: "32px", sm: "60px", xl: "100px" }}
        paddingInline="5%"
        backgroundColor="#0C0B0C"
        className="brand-1"
      >
        <Grid item xs={12} sm={5}>
          <Box
            width={{ xs: "188px", sm: "180px", md: "200px", xl: "255px" }}
            marginRight="auto"
            marginLeft={{ xs: "auto", sm: "0" }}
          >
            <img src={Momo} alt="" width="100%" />
          </Box>
        </Grid>
        <Grid item sm={7}>
          <p className="m-text">Momo</p>
          <p className="m-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "30px", sm: "40px", xl: "50px" }}
        paddingTop={{ sm: "50px", xl: "80px" }}
        paddingBottom={{ xs: "32px", sm: "20px", xl: "50px" }}
        paddingInline="5%"
        backgroundColor="#F6D60E"
        className="brand-2"
      >
        <Grid item sm={7} className="">
          <p className="f-text1">FUnkybuns</p>
          <p className="f-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
        <Grid item sm={5}>
          <Box
            width={{ xs: "203px", sm: "220px", md: "260px", xl: "342px" }}
            marginLeft="auto"
            marginRight={{ xs: "auto", sm: "0" }}
            className=""
          >
            <img src={FBuns} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "24px", sm: "40px", xl: "50px" }}
        paddingTop={{ xs: "", sm: "40px", xl: "60px" }}
        paddingBottom={{ sm: "20px", xl: "80px" }}
        paddingInline="5%"
        backgroundColor="#743AA0"
        className="brand-1"
      >
        <Grid item xs={12} sm={5} paddingTop="50px">
          <Box
            width={{ xs: "204px", sm: "190px", md: "230px", xl: "301px" }}
            marginRight="auto"
            marginLeft={{ xs: "auto", sm: "0" }}
          >
            <img src={Twok} alt="" width="100%" />
          </Box>
        </Grid>
        <Grid item sm={7} paddingTop="40px" paddingBottom="40px">
          <p className="t-text1">Temple of Wok</p>
          <p className="t-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "24px", sm: "40px", xl: "48px" }}
        paddingTop={{ xs: "22px", sm: "60px", xl: "80px" }}
        paddingBottom={{ xs: "32px", sm: "60px", xl: "85px" }}
        paddingInline="5%"
        backgroundColor="#F8A0BF"
        className="brand-2"
      >
        <Grid item sm={7}>
          <Box
            marginTop={{ xs: "26px", sm: "0" }}
            marginBottom={{ xs: "10px", sm: "0" }}
            className="sw-text1"
          >
            sweet cravings
          </Box>
          <p className="sw-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            width={{ xs: "204px", sm: "220px", md: "280px", xl: "357px" }}
            marginLeft="auto"
            marginRight={{ xs: "auto", sm: "0" }}
          >
            <img src={SweetC} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "24px", sm: "40px", xl: "52px" }}
        paddingTop={{ sm: "60px", xl: "80px" }}
        paddingBottom={{ sm: "50px", xl: "80px" }}
        paddingInline="5%"
        backgroundColor="#F8D511"
        className="brand-1"
      >
        <Grid item xs={12} sm={5}>
          <Box
            width={{ xs: "204px", sm: "200px", md: "270px", xl: "317px" }}
            marginRight="auto"
            marginLeft={{ xs: "auto", sm: "0" }}
          >
            <img src={Classic} alt="" width="100%" />
          </Box>
        </Grid>
        <Grid item sm={7}>
          <Box
            marginTop={{ xs: "26px", sm: "0" }}
            marginBottom={{ xs: "10px", sm: "0" }}
            className="cl-text"
          >
            Classic fried Chicken
          </Box>
          <p className="cl-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-between"
        marginTop={{ xs: "24px", sm: "40px", xl: "50px" }}
        paddingTop={{ xs: "20px", sm: "60px", xl: "80px" }}
        paddingBottom={{ xs: "30px", sm: "60px", xl: "90px" }}
        paddingInline="5%"
        backgroundColor="#F63734"
        className="brand-2"
      >
        <Grid item sm={7}>
          <Box
            marginTop={{ xs: "26px", sm: "0" }}
            marginBottom={{ xs: "10px", sm: "0" }}
            className="r-text1"
          >
            barbar
          </Box>
          <p className="r-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam
            vel ut dictumst. Cursus congue id id nam ante ac, duis sit. Vel
            pharetra laoreet arcu tristique aliquam convallis. Leo sed non et
            sit.
          </p>
        </Grid>
        <Grid item xs={12} sm={5} paddingTop="20px">
          <Box
            width={{ xs: "232px", sm: "230px", md: "270px", xl: "317px" }}
            marginLeft="auto"
            marginRight={{ xs: "auto", sm: "0" }}
          >
            <img src={Bar} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Brands;
