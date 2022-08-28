import { Box, Grid } from "@mui/material";
import React from "react";
import "../Css/services.css";

import Iphone1 from "../../Images/iPhone 13.png";
import Mac1 from "../../Images/Device - Macbook Air.png";
import Iphone2 from "../../Images/iPhone 13 (1).png";
import Mac2 from "../../Images/Device - Macbook Air (1).png";

const Services = () => {
  return (
    <Grid
      container
      height="100%"
      display="flex"
      paddingInline={{
        xs: "16px",
        md: "calc(calc(100vw - 900px) / 2)",
        xl: "calc(calc(100vw - 1150px) / 2)",
      }}
      paddingTop={{ xs: "32px", sm: "50px", xl: "70px" }}
      paddingBottom={{ xs: "60px", sm: "100px", xl: "155px" }}
      overflow="hidden"
    >
      <Grid container>
        <Grid
          item
          sm={12}
          paddingInline={{ sm: "15%", xl: "13%" }}
          textAlign="center"
        >
          <p className="Ser-text1">Our Services</p>
          <p className="Ser-text2">
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
        paddingTop={{ xs: "50px", sm: "80px" }}
        className="service-1"
      >
        <Grid
          item
          xs={12}
          sm={7}
          paddingTop={{ xs: "0px", md: "60px", xl: "80px" }}
        >
          <p className="ser-1">Nova Foods marketplace App</p>
          <p className="ser-text3">
            This is the face of Nova Foods where customers will place their
            orders and communicate with the Nova Foods Team. Here, users can
            find a wide variety of food categories and information regarding all
            of the Nova brands before creating an order that likens to their
            taste and cravings. Moreover, this app also contains a safe and
            secure method to make payments via popular payment gateways like
            eSewa, fonepay, and khalti.
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            width={{ xs: "171px", sm: "150px", xl: "211px" }}
            marginLeft="auto"
            marginRight="auto"
            paddingTop={{ xs: "22px", sm: "0" }}
          >
            <img src={Iphone1} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        paddingTop={{ xs: "60px", md: "150px" }}
        className="service-2"
      >
        <Grid item sm={5} paddingTop={{ xs: "22px", sm: "0" }}>
          <Box
            width={{ sm: "200px", md: "320px", xl: "354px" }}
            marginRight="auto"
          >
            <img src={Mac1} alt="" className="" width="100%" />
          </Box>
        </Grid>
        <Grid item sm={7}>
          <p className="ser-1">Nova Foods kitchen display system</p>
          <p className="ser-text3">
            The Kitchen Display System is mostly used in the central kitchens
            operated by Nova Foods. Here, the kitchen staff can view the user
            orders and prepare them accordingly. Additionally, it will also
            allow the kitchen staff to distinguish different order states
            (preparing, cooking, and picking up) and change the order status. As
            such, any manual hustle and shortcomings when the orders stack up
            can be easily avoided.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        paddingTop={{ xs: "60px", md: "150px" }}
        className="service-1"
      >
        <Grid item xs={12} sm={7} paddingTop={{ md: "60px", xl: "80px" }}>
          <p className="ser-1">Nova Foods delivery system</p>
          <p className="ser-text3">
            This app is the final piece of the puzzle that takes the orders from
            the fingertips of the users to their doorsteps. This app will be
            primarily used by delivery staff who operate on either personal,
            third-party, or Nova Foods-owned vehicles. Additionally, this app
            also allows the system to confirm the delivery of user orders and
            payment of those orders.
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            width={{ xs: "177px", sm: "150px", xl: "211px" }}
            marginLeft="auto"
            marginRight="auto"
            paddingTop={{ xs: "22px", sm: "0" }}
          >
            <img src={Iphone2} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        paddingTop={{ xs: "60px", md: "150px" }}
        className="service-2"
      >
        <Grid item sm={5}>
          <Box
            width={{ sm: "200px", md: "320px", xl: "378px" }}
            paddingTop={{ xs: "22px", sm: "0" }}
            marginRight="auto"
          >
            <img src={Mac2} alt="" className="" width="100%" />
          </Box>
        </Grid>
        <Grid item sm={7} paddingTop={{ md: "40px", xl: "60px" }}>
          <p className="ser-1">Nova Foods admin panel</p>
          <p className="ser-text3">
            Admin Panel is the backbone of the Nova Foods system that controls,
            monitors, and regulates the marketplace, kitchen display system, and
            delivery applications.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
