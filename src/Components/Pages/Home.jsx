import React from "react";
import "../Css/home.css";

import Grid from "@mui/material/Grid";

import Button from "react-bootstrap/Button";

import Left from "../../Images/Left.png";
import Right from "../../Images/Right.png";
import Middle from "../../Images/Frame 1.png";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      height={{
        xs: "calc(100vh - 54px)",
        sm: "calc(100vh - 80px)",
        md: "calc(100vh - 80px)",
        xl: "calc(100vh - 95px)",
      }}
      display="flex"
      paddingTop={{ md: "50px", lg: "30px", xl: "70px" }}
      backgroundColor="#e7302a"
      overflow="hidden"
    >
      <Grid
        container
        display={{ xs: "none", md: "block" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        backgroundColor="#e7302a"
        paddingInline={{
          md: "calc(calc(100vw - 900px) / 2)",
          lg: "calc(calc(100vw - 1000px) / 2)",
          xl: "calc(calc(100vw - 1500px) / 2)",
        }}
      >
        <Grid item sm={12}>
          <p className="h-a">WELCOME TO NOVA FOODS</p>
        </Grid>

        <Grid item sm={12} paddingTop={{ md: "35px", lg: "5px", xl: "30px" }}>
          <p className="h-b">
            A cloud kitchen that delivers freshly-cooked food to your doorstep
            in an hour.
          </p>
        </Grid>
      </Grid>

      {/* lastpart image */}
      <Grid
        container
        display={{
          xs: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        justifyContent="space-between"
        paddingInline={{ md: "60px", xl: "7%" }}
        marginTop="auto"
      >
        <Grid item md={4} lg={4}>
          <Box
            width={{ md: "290px", lg: "290px", xl: "370px" }}
            marginRight="auto"
          >
            <img src={Left} alt="" className="" width="100%" />
          </Box>
        </Grid>

        <Grid
          item
          sm={4}
          textAlign="center"
          paddingTop={{ md: "30px", lg: "30px", xl: "50px" }}
          alignItems="center"
        >
          <Button className="btn-a">Order now</Button>
        </Grid>

        <Grid item sm={4}>
          <Box
            width={{ md: "290px", lg: "290px", xl: "370px" }}
            marginLeft="auto"
          >
            <img src={Right} alt="" className="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      {/* phoneview */}
      <Grid
        container
        display={{
          xs: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        paddingBottom={{ xs: "24px" }}
        paddingTop="45px"
      >
        <Grid
          item
          xs={12}
          paddingInline={{ xs: "16px", sm: "calc(calc(100vw - 350px) / 2)" }}
        >
          <Grid marginLeft="auto" marginRight="auto">
            <p className="h-a1">WELCOME TO NOVA FOODS</p>
            <Box marginTop="16px">
              <div className="h-c1">Book your table</div>
              <div className="h-c2">Enjoy our foods</div>
            </Box>
          </Grid>

          <Box
            display="flex"
            justifyContent="space-around"
            marginLeft="auto"
            marginRight="auto"
            marginTop="50px"
          >
            <Button className="btn-o">ORDER NOW</Button>
            <Button className="btn-r ">RESERVE A SEAT</Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          display={{ xs: "block", md: "none", lg: "none" }}
          marginTop="auto"
        >
          <img src={Middle} alt="" width="100%" />
        </Grid>
      </Grid>
      {/*phoneview end */}
    </Grid>
  );
};

export default Home;
