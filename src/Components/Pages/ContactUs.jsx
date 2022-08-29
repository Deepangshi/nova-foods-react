import React, { useEffect, useState } from "react";
import "../Css/contactus.css";

import Grid from "@mui/material/Grid";

import Mapp from "../../Images/MapPin.png";
import Phone from "../../Images/Phone.png";
import EnvelopeSimple from "../../Images/EnvelopeSimple.png";

import CPic from "../../Images/contact 1.png";

import { Box } from "@mui/material";

const ContactUs = () => {
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (first && window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "22269224",
        formId: "4422e76c-2f12-4428-b691-5e193890c02c",
        target: "#myForm",
      });
      setFirst(false);
    }
  }, [first]);

  return (
    <Grid
      container
      height={{
        xs: "100%",
        sm: "calc(100vh - 80px)",
        xl: "calc(100vh - 95px)",
      }}
      display="flex"
      justifyContent="space-between"
      paddingTop={{ xs: "32px", sm: "40px", md: "30px", xl: "70px" }}
      paddingBottom={{ xs: "40px", sm: "0" }}
      paddingInline={{
        xs: "16px",
        md: "calc(calc(100vw - 900px) / 2)",
        lg: "calc(calc(100vw - 900px) / 2)",
        xl: "calc(calc(100vw - 1150px) / 2)",
      }}
      spacing={2}
      overflow="hidden"
    >
      {/* left */}
      <Grid
        item
        sm={6}
        className=""
        display="flex"
        flexDirection="column"
        marginRight={{ sm: "auto" }}
      >
        <span className="ctext-1">Thank you for your interest in NOVA</span>
        <span className="ctext-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lorem
          dolor sed. Tempor ut ac vestibulum massa lectus consequat.
        </span>

        <Grid
          display={{ xs: "none", lg: "flex" }}
          paddingTop={{ xs: "20px", sm: "15px", md: "10px", xl: "50px" }}
          justifyContent="space-between"
        >
          <Grid item sm={4}>
            <Box
              width="30px"
              className=""
              marginLeft="auto"
              marginRight="auto"
              paddingBottom="10px"
            >
              <img src={Mapp} alt="" className="" width="100%" />
            </Box>
            <p className="ctext-3">
              4140 Parker Rd. Allentown, New Mexico 31134
            </p>
          </Grid>

          <Grid item sm={4}>
            <Box
              width="30px"
              className=""
              marginLeft="auto"
              marginRight="auto"
              paddingBottom="10px"
            >
              <img src={Phone} alt="" className="" width="100%" />
            </Box>
            <p className="ctext-3">98438872929</p>
          </Grid>

          <Grid item sm={4}>
            <Box
              width="30px"
              marginLeft="auto"
              marginRight="auto"
              paddingBottom="10px"
            >
              <img src={EnvelopeSimple} alt="" className="" width="100%" />
            </Box>
            <p className="ctext-3">novafoods@gmail.com</p>
          </Grid>
        </Grid>

        {/* phoneview */}
        <Grid
          item
          xs={12}
          display={{ xs: "block", sm: "block", lg: "none" }}
          paddingTop="15px"
        >
          <Box>
            <img src={Mapp} alt="" className="" />
            <span className="p-t1">
              4140 Parker Rd. Allentown, New Mexico 31134
            </span>
          </Box>

          <Box marginTop="15px">
            <img src={Phone} alt="" className="" />
            <span className="p-t1">98438872929</span>
          </Box>

          <Box marginTop="15px">
            <img src={EnvelopeSimple} alt="" className="" />
            <span className="p-t1">novafoods@gmail.com</span>
          </Box>
        </Grid>

        <Grid marginTop="auto" display={{ xs: "none", sm: "block" }}>
          <Box
            width={{ sm: "270px", md: "330px", xl: "360px" }}
            marginLeft="auto"
            marginRight="auto"
          >
            <img src={CPic} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>

      {/* right */}
      <Grid
        item
        sm={6}
        className=""
        width="100%"
        marginLeft={{ sm: "auto" }}
        paddingTop={{ xs: "50px", sm: "0" }}
      >
        <div className="" id="myForm"></div>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
