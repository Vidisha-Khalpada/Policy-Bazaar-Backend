import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Home/Home.css";

import po2 from "../../assets/images/po2.webp";
import po1 from "../../assets/images/po1.webp";
import virs from "../../assets/images/virs.png";
import hert from "../../assets/images/hert.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Carosuel = () => {
  return (
    <div className="App" style={{ marginRight: "70px" }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-40-px"
        
      >
        <div
          style={{
            backgroundColor:"#7080FA",
            borderRadius:"15px",
            marginRight:"20px",
            height:"200px"
          }}>
          <div style={{display:"flex",alignItems:"center",paddingTop:"40px",justifyContent:"space-around"}}>
            <div>
              <img
              style={{ width:"25%", marginLeft:"10px" }}
              src={hert}
              alt="heart"
            />
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "10%",
              }}
            >
              Health Insurance
            </p>
            </div>
              <img
              src={virs}
              alt="virus" />
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "22px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
              paddingBottom:"20px"
            }}
          >
            Protect yourself & your family against <strong>Covid-19</strong>
          </p>
        </div>
        <div
          style={{
            backgroundColor:"rgb(79,220,149)",
            borderRadius:"15px",
            marginRight:"20px",
            height:"200px"
          }}>
          <div style={{display:"flex",alignItems:"center",paddingTop:"40px",justifyContent:"space-around"}}>
            <div>
              <img
              style={{ width:"25%", marginLeft:"10px" }}
              src={hert}
              alt="heart"
            />
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "10%",
              }}
            >
              Investment Plans
            </p>
            </div>
              <img
              src={virs}
              alt="virus" />
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "22px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
              paddingBottom:"20px"
            }}
          >
            Invest ₹10k and Get <strong>₹1 Crore</strong> return*{" "}
          </p>
        </div>

        <div
          style={{
            backgroundColor:"rgb(60,187,218)",
            borderRadius:"15px",
            marginRight:"20px",
            height:"200px"
          }}>
          <div style={{display:"flex",alignItems:"center",paddingTop:"40px",justifyContent:"space-around"}}>
            <div>
              <img
              style={{ width:"25%", marginLeft:"10px" }}
              src={hert}
              alt="heart"
            />
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "10%",
              }}
            >
              Home Insurance
            </p>
            </div>
              <img
              src={virs}
              alt="virus" />
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "22px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
              paddingBottom:"20px"
            }}
          >
            <strong>₹50 Lakh Cover</strong> for Your Home Insurance at Just{" "}
            <strong>₹80/month*</strong>{" "}
          </p>
        </div>


        <div
          style={{
            backgroundColor:"#FF9898",
            borderRadius:"15px",
            marginRight:"20px",
            height:"200px"
          }}>
          <div style={{display:"flex",alignItems:"center",paddingTop:"40px",justifyContent:"space-around"}}>
            <div>
              <img
              style={{ width:"70%", marginLeft:"10px" }}
              src={hert}
              alt="heart"
            />
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                marginLeft: "10%",
              }}
            >
              AskPB
            </p>
            </div>
              <img
              src={virs}
              alt="virus" />
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "22px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
              paddingBottom:"20px"
            }}
          >
             Got a <strong>question about insurance?</strong> Write to us
          </p>
        </div>


        
      </Carousel>
    </div>
  );
};

export default Carosuel;
