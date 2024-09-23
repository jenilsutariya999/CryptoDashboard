import React from 'react' 
// import styles from "./FirstPage.module.css";
import CurrentPrice from '../Components/currentprice/currentPrice';
import PriceBoard from '../Components/priceboard/PriceBoard'
import SideNav from '../Components/SideNav/SideNav';
import Description from '../Components/Description/Description'


export default function FirstPage() {
  return (
    <div>
    <SideNav/> 
    <PriceBoard />
    <CurrentPrice />
    <Description />   
    </div>
  )
}
