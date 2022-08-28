import React from "react";
import "../Css/aboutus.css";

import Grid from "@mui/material/Grid";

import Rect from "../../Images/Rectangle 6.png";
import Icon from "../../Images/Icon.png";
import Icon1 from "../../Images/Vector.png";
import Icon2 from "../../Images/Icon1.png";

import { Box } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="about">
      <Grid container height="100%" justifyContent="center">
        <Grid
          item
          sm={12}
          paddingInline={{
            xs: "16px",
            sm: "16px",
            md: "calc(calc(100vw - 800px) / 2)",
            xl: "calc(calc(100vw - 1100px) / 2)",
          }}
          backgroundColor="#e7302a"
          textAlign="center"
          paddingTop={{ xs: "40px", sm: "50px", xl: "80px" }}
          paddingBottom={{ xs: "50px", sm: "50px", xl: "80px" }}
        >
          <span className="a-a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et rutrum
            lorem lacus, quis neque sit aliquet.
          </span>
        </Grid>
      </Grid>

      <Grid
        paddingInline={{
          xs: "16px",
          sm: "16px",
          md: "calc(calc(100vw - 900px) / 2)",
          xl: "calc(calc(100vw - 1150px) / 2)",
        }}
        paddingTop={{ xs: "60px", sm: "80px" }}
        paddingBottom={{ xs: "40px", sm: "100px" }}
      >
        <Grid
          display="flex"
          className="about-a"
          justifyContent="space-between"
          backgroundColor="#ffffff"
          gap="2rem"
        >
          <Grid item sm={6} xl={6}>
            <p className="text-1">About Us</p>
            <p className="text-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
              lorem dolor sed. Tempor ut ac vestibulum massa lectus consequat.
              Est odio velit pellentesque arcu facilisis adipiscing. Tempor
              facilisis velit accumsan molestie lectus viverra. Elit sapien
              convallis nisi risus rhoncus rhoncus lorem sapien tortor.
              Ullamcorper sed diam adipiscing diam. Diam eu nibh mauris laoreet
              scelerisque semper pellentesque.
            </p>
          </Grid>
          <Grid item sm={6} xl={6}>
            <Box
              width={{ sm: "auto", md: "395px", xl: "500px" }}
              marginLeft={{ md: "auto" }}
            >
              <img src={Rect} alt="" className="img-1" width="100%" />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          paddingTop={{ xs: "60px", sm: "80px" }}
          textAlign="center"
          spacing={2}
        >
          <Grid
            item
            sm={12}
            paddingBottom={{ xs: "20px", sm: "40px" }}
            marginLeft="auto"
            marginRight="auto"
          >
            <span className="text-3">Our Mission</span>
          </Grid>
          <Grid item sm={6}>
            <p className="text-2">
              We aim to provide a seamless system that caters people with an
              economical menu without compromising on quality and taste.
            </p>
          </Grid>
          <Grid item sm={6}>
            <p className="text-2">
              Feed Nepalese with healthy, fresh, tasty, and affordable food with
              quick delivery.
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          paddingTop={{ xs: "50px", sm: "80px" }}
          textAlign="center"
        >
          <Grid
            item
            sm={12}
            paddingBottom={{ xs: "20px", sm: "60px" }}
            marginLeft="auto"
            marginRight="auto"
          >
            <span className="text-3">Our Values</span>
          </Grid>

          <Grid item sm={6}>
            <Box
              width={{ xs: "36px", sm: "70px" }}
              marginLeft="auto"
              marginRight="auto"
            >
              <img src={Icon} alt="" className="" width="100%" />
            </Box>

            <p className="text-4">Customer Satisfaction</p>
            <p className="text-2">
              Why be limited with few options, quality, or price when you can
              get the best in all of these with Nova Foods. At Nova Foods, we
              address the emotions of our users with their appetite and food
              palate.
            </p>
          </Grid>

          <Grid item sm={6}>
            <Box
              width={{ xs: "36px", sm: "70px" }}
              marginLeft="auto"
              marginRight="auto"
            >
              <img src={Icon1} alt="" className="" width="100%" />
            </Box>

            <p className="text-4">Go Green</p>
            <p className="text-2">
              We practice and promote an environment-friendly approach on all
              fronts of our operation. From our kitchen to packaging and
              delivery, we leave minimal carbon footprint.
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          paddingInline="26%"
          textAlign="center"
          paddingTop={{ xs: "20px", sm: "50px" }}
        >
          <Grid item sm={12}>
            <Box
              width={{ xs: "36px", sm: "70px" }}
              marginLeft="auto"
              marginRight="auto"
            >
              <img src={Icon2} alt="" className="" width="100%" />
            </Box>
            <p className="text-4">
              Effective Communication and Feedback Implementation
            </p>
            <p className="text-2">
              Customers have the say-so on everything we do. We are always
              available to listen to their opinions and feedback on our
              products, services, and delivery upon our promises
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
