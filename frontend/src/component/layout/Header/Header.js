import React from "react";
import logo from "../../../images/logo.png";
import { ReactNavbar } from "overlay-navbar";

const options = {
  burgerColor:"#e09be8",
  burgerColorHover: "#5900b3",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "white",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "About",
  link4Text: "Story",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/story",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#5900b3",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover:  "#5900b3",
  searchIconColorHover:  "#5900b3",
  cartIconColorHover:  "#5900b3",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return(
        <ReactNavbar {...options} />
  )
};

export default Header;
