import { styled } from "@mui/material/styles";
import Carousel from "../Carousel/Carousel";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import "./Home.css";

import thunder from "../../assets/images/thuder.png";
import thunder1 from "../../assets/images/thuder1.png";
import umre from "../../assets/images/Umbrella1.png";
import bk from "../../assets/images/bk.png";
import car1 from "../../assets/images/car1.png";
import Fam1 from "../../assets/images/Fam1.png";
import box from "../../assets/images/boxz1.png";
import cr from "../../assets/images/cr1.png";
import bacha from "../../assets/images/bacha1.png";
import tra from "../../assets/images/trv1.png";
import pepl from "../../assets/images/pepl.png";
import left from "../../assets/images/left-bg.webp";
import right from "../../assets/images/right-bg.png";
import part from "../../assets/images/Party1.png";
import sear1 from "../../assets/images/sear1.png";
import sear2 from "../../assets/images/sear2.png";
import sear3 from "../../assets/images/sear3.png";
import Pri1 from "../../assets/images/Pri1.png";
import Pri2 from "../../assets/images/Pri2.png";
import Pri3 from "../../assets/images/Pri3.png";
import Pri4 from "../../assets/images/Pri4.png";
import Pri5 from "../../assets/images/Pri5.png";
import star from "../../assets/images/star.png";
import bigp from "../../assets/images/bigp.png";
import Ap1 from "../../assets/images/Ap1.png";
import Ap2 from "../../assets/images/Ap2.png";
import o1 from "../../assets/images/o1.png";
import o2 from "../../assets/images/o2.png";
import o3 from "../../assets/images/o3.png";
import o4 from "../../assets/images/o4.png";
import o5 from "../../assets/images/o5.png";
import o6 from "../../assets/images/o6.png";
import o7 from "../../assets/images/o7.png";
import o8 from "../../assets/images/o8.png";
import o9 from "../../assets/images/o9.png";
import o0 from "../../assets/images/o0.png";
import k1 from "../../assets/images/k1.png";
import k2 from "../../assets/images/k2.png";
import k3 from "../../assets/images/k3.png";
import k4 from "../../assets/images/k4.png";
import k5 from "../../assets/images/k5.png";
import k6 from "../../assets/images/k6.png";
import k7 from "../../assets/images/k7.png";
import k8 from "../../assets/images/k8.png";
import k9 from "../../assets/images/k9.png";
import k0 from "../../assets/images/k0.png";
import invest1 from "../../assets/images/invest1.png";
import invest2 from "../../assets/images/invest2.png";
import { width } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "65%",
  color: theme.palette.text.secondary,
  marginBottom: "30px",
  // backgroundColor: "lightpink",
}));

const HomePage = () => {
  return (
    <>
      <div className="home-main">
        <div className="home-total">
          <div className="home-head">
              <div>
                <p>
                  Let's find you <br />
                  the <b>Best Insurance</b>
                </p>
                <div id="top-d1">
                  <div style={{display:"flex",gap:"20px", alignItems:"center"}}>
                    <img className="home-img0" src={thunder} alt="thunder" />
                    <p className="home-cont1">50+ insurers with one of the best prices{" "}</p>
                  </div>
                  <div style={{display:"flex",gap:"20px", alignItems:"center"}}>
                    <img className="home-img" src={thunder1} alt="thunder" />
                    <p className="home-cont2">Quick, easy & hassle free</p>
                  </div>
                </div>
              </div>
            <div>
              <img
                src="https://static.pbcdn.in/cdn/images/home/banner_savetax.png?v=1"
                alt="aksh"
                className="home-img2"/>
            </div>

          </div>

          

          

          <div className="home-maind">
            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Travel Insurance </p>
            </div>

            <div className="home-tol">
              <img src={Fam1} alt="one" />
              <p className="home-tm">Family Health Insurance</p>
            </div>

            <div className="home-tol">
              <img src={bk} alt="one" />
              <p className="home-tm">2 Wheeler Insurance </p>
            </div>

            <div className="home-tol">
              <img src={car1} alt="one" />
              <p className="home-tm">Car Insurance</p>
            </div>

            <div className="home-tol">
              <img src={bk} alt="one" />
              <p className="home-tm">Investment Plans </p>
            </div>

            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Health Insurance </p>
            </div>

            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Term Life Insurance </p>
            </div>

            <div className="home-tol">
              <img src={box} alt="one" />
              <p className="home-tm">Home Insurance </p>
            </div>

            <div className="home-tol">
              <img src={pepl} alt="one" />
              <p className="home-tm">Group Health Insurance</p>
            </div>

            <div className="home-tol">
              <img src={umre} alt="one" />
              <p className="home-tm">Retirement Plans </p>
            </div>

            <div className="home-tol">
              <img src={bacha} alt="one" />
              <p className="home-tm">Child Savings Plans</p>
            </div>

            <div className="home-tol">
              <img src={tra} alt="one" />
              <p className="home-tm">Guaranteed Return Plans </p>
            </div>

            <div className="home-tol" >
              <img src={umre} alt="one" />
              <p className="home-tm">Saral Jeevan Bima </p>
            </div>

            <div className="home-tol" >
              <img src={cr} alt="one" />
              <p className="home-tm"> Zero Cost Term Plan </p>
            </div>
          </div>
        </div>

        <p
          className="home-also"
        >
          ALSO BUY
        </p>
        <Grid
          container
          spacing={2.5}
          style={{
            width: "80%",
            alignItems: "left",
            textAlign: "left",
            marginTop:"5px"
          }}
        >
          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Investment
              </p>
              <p className="home-te1">LIC Plans</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Term Life
              </p>
              <p className="home-te1">Return of Premium</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Term Life
              </p>
              <p className="home-te1">Life Insurance for Housewives</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></spam>{" "}
                Health
              </p>
              <p className="home-te1">Corona Virus Health Insurance</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></spam>{" "}
                Health
              </p>
              <p className="home-te1">Arogya Sanjeevani</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te" style={{ color: "#FF4D4F" }}>
                {" "}
                <spam
                  className="home-dot3"
                  style={{ backgroundColor: "#FF4D4F" }}
                ></spam>{" "}
                Health
              </p>
              <p className="home-te1">1 Cr Health Insurance</p>
            </Item>
          </Grid>

          <Grid item xs="auto">
            <Item style={{ textAlign: "left" }}>
              <p className="home-te">
                {" "}
                <spam className="home-dot3"></spam> Others
              </p>
              <p className="home-te1">pet Insurance</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <br></br>

      <div
        style={{ backgroundColor: "#F0F6FF", cursor: "pointer", padding: "3%" }}
      >
        <div style={{ marginLeft: "5%", height: "100%"}}>
          <Carousel />
        </div>
      </div>
      <div id="home-d">
        <p
          style={{
            marginTop: "8%",
            fontSize: "36px",
            color: "#253858",
          }}
        >
          What makes <br></br>
          <b> Policybazaar</b> the<br></br>
          <b> best place</b> to buy<br></br>
          <b> insurance</b> in India?
        </p>
        <div id="home-data">
          <div className="home-d1">
            <div className="home-l" >
              <img src={part} alt="party" />
              <p style={{
                    color: "#0550C7",
                    fontWeight:"bold",
                  }}>
                  Over 9 million
              </p>
              <p className="home-d-text">
                Customers trust us & have bought their insurance on Policy bazaar
              </p>
            </div>
          </div>
          <div className="home-d2">
            <div className="home-l">
              <img src={sear1} alt="party" />
              <p style={{
                    color: "#3AC2F3",
                    fontWeight:"bold",
                  }}>
                  50+ insurers
              </p>
              <p className="home-d-text">
                Partnered with us so that you can compare easily & transparentlyr
              </p>
            </div>
          </div>
          <div className="home-d3">
            <div className="home-l" >
              <img src={sear2} alt="party" />
              <p style={{
                    color: "#57CD1D",
                    marginBottom: "13px",
                  }}>
                  The Best Price
              </p>
              <p className="home-d-text">
                For all insurance plans available online
              </p>
            </div>
          </div>
          <div className="home-d4">
            <div className="home-l">
              <img src={sear3} alt="party" />
              <p style={{
                    color: "#FFB62C",
                    marginBottom: "13px",
                  }}>
                  Claims
              </p>
              <p className="home-d-text">
                Support built in with every policy for help, when you need it the
                most
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop:"40px",
          marginLeft: "12%",
          fontFamily:
            "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
        }}
      >
        <h1>PB Advantage</h1>
        <hr style={{width:"50%", marginTop:"10px",backgroundColor:"#0663f6", height:"6px"}} />
        <div className="home-hl"></div>
        <p className="home-hp" style={{lineHeight:"40px"}}>
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </p>
        <p
          style={{ color: "#0663F6", fontWeight: "500", alignItems: "center" }}
        >
          Know more
        </p>
      </div>
      <div style={{ width: "80%", marginLeft: "15%" }}>
        <Grid marginTop="30px" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri1}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                On best Prices
              </h4>
              <p style={{ marginTop: "0px" }}>Guaranteed</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri2}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Unbiased Advice
              </h4>
              <p style={{ marginTop: "0px" }}>Keeping customers first.</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri3}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                100% Reliable
              </h4>
              <p style={{ marginTop: "0px" }}>Regulated by IRDAI</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri4}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Claims Support
              </h4>
              <p style={{ marginTop: "0px" }}>Made Stress-free</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri5}
                alt="one"
              />
              <h5
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Happy to Help
              </h5>
              <p style={{ marginTop: "0px" }}>Every day of the week</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      
        
        <div
          style={{
           
            backgroundColor: "#F0F6FF",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
              padding:"20px",
              width:"70%",
              margin:"auto",
              marginLeft: "13%",
          }}
        >
          <h1
            style={{
              fontWeight: "500",
              fontFamily:
                "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
              marginTop:"20px",
            }}
          >
            Get the Policybazaar app
          </h1>
          <hr style={{width:"50%", marginTop:"10px",backgroundColor:"#0663f6", height:"6px"}} />
          <div className="home-hl">
            <div>
              <p>
                Get control of all your insurance needs anywhere, anytime
              </p>

              <p>
                {" "}
                <img src={star} alt="star" /> Compare different insurance policies
              </p>
              <p>
                <img src={star} alt="star" /> Buy, store and share all your policies
                online
              </p>
              <p >
                <img src={star} alt="star" /> Track your policy status on the go
              </p>
              <p>
                <img src={star} alt="star" /> Download your policy with a single tap
              </p>
              <p>
                Download our app from
              </p>

              <div id="getapp"
                
              >
                <img src={Ap2} alt="app"/>
                <img src={Ap1} alt="app" />
              </div>
              
            </div>
            <img src={bigp} alt="phone" width="50%"/>
          </div>


        </div>
      <div className="home-ma-pat">
        <p className="home-pat">Our Partners</p>
        <p className="home-pat1">Leading insurers for your financial freedom</p>
        <div id="home-pat2">
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>
       
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
        
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
        
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o0} alt="one" />
          </div>
        
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
      </div>

      <div className="home-inv">
        <div
          style={{
            marginLeft: "12%",
            marginTop: "5%",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1 style={{paddingTop:"15px"}}>Investors</h1>
          <div className="home-hl"></div>

          <br />
          <br />

          <div
            className="marquee"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img src={invest1}  alt="inv" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo_of_Temasek_Holdings.svg/2560px-Logo_of_Temasek_Holdings.svg.png" alt="inv" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img width="100%" src="https://mms.businesswire.com/media/20200617005872/en/799306/23/SoftBank-Logo.jpg" alt="inv" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Tiger_Global.png" alt="inv" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
              }}
            >
              <img width="100%" src="https://mma.prnewswire.com/media/1812566/Alphawave_IP_Group_Plc_Alphawave%20Launches_US_Presence_with_New_S.jpg?p=facebook" alt="inv" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
