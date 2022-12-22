import React, { Fragment } from "react";
import Footer from "../layout/Footer/Footer";
import logoR from "../../images/logo-rem.png";
import easy from "../../images/easy.jpg";
import fast from "../../images/fast.jpg";
import bank from "../../images/bank.jpg";
import ret from "../../images/return.jpg";
import warehouse from "../../images/warehouse.jpg";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import "./Home.css";
// import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { BiHappyAlt } from 'react-icons/bi';
import { MdReviews } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import {IconContext} from 'react-icons'

const Home = () => {

  let history = useHistory()

  return (
        <Fragment>
          <MetaData title="CheckTheDeal"/>
          <div className="banner">
            <img src = {logoR} alt = "logo"/>
            <p> Quality Products at affordable prices</p>
            <Button variant="contained" style={{backgroundColor: '#5900b3', color:'white'
            , marginTop:'20px', fontWeight:'bold', padding:'15px 20px', borderRadius:'40px', fontSize: '1rem'}}onClick={() => {
              history.push("/products")
            }} >See Products </Button>
          </div>
            <div className="choose">
              <h1> Why Choose Us? </h1>
              <div className="choose-whole">
                  <div className="choose-box">
                    <img src = {fast} alt = "logo"/>
                      <h3>Fast Delivery</h3>
                      <p>We have set up our system to deliver products within a day</p>
                   </div>
                   <div className="choose-box">
                    <img src = {bank} alt = "logo"/>
                      <h3>Full Refund</h3>
                      <p>If products are damaged or not to liking of the customer, we provide full refund</p>
                   </div>
                   <div className="choose-box">
                    <img src = {easy} alt = "logo"/>
                      <h3>Hassle Free</h3>
                      <p>Easy to use website and place order</p>
                   </div>
                   <div className="choose-box">
                    <img src = {ret} alt = "logo"/>
                      <h3>Return Policy</h3>
                      <p>If product is retuned within 7 days, we provide its replacement</p>
                   </div>
                   <div className="choose-box">
                    <img src = {warehouse} alt = "logo"/>
                      <h3>Proper Storage</h3>
                      <p>Proper storage and management of perishable items</p>
                   </div>
              </div>
              
            </div>

            <div className="numbers"> 
                <IconContext.Provider value = {{size:'5rem',color:'#bab8b8'}}> 
                <div className="numbers-box">
                    <BiHappyAlt/>
                    <h3>200000+</h3>
                    <h6>Happy Customers</h6>
                </div>
                <div className="numbers-box">
                    <MdReviews  />
                    <h3>5000+</h3>
                    <h6>Google Reviews</h6>
                </div>
                <div className="numbers-box">
                    <AiOutlineCalendar/>
                    <h3>10+</h3>
                    <h6>Years in Operation</h6>
                </div>
                </IconContext.Provider>
            </div>

            <div className="story">
                <h1>See Our Story <span onClick={() => history.push("/story")}> here</span></h1>
            </div>
          <Footer />
        </Fragment>
  );
};

export default Home;
