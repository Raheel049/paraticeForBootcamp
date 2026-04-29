import React from 'react';
import styles from "./positionOfCss.module.css";
import car from "../assets/car.jpeg";
import {Users,UserCircle} from "lucide-react"

const PositionsOfCss = () => {
  return (
    <div>

        <div className={styles.mainContainer}>
            <h1>Hello</h1>
        </div>

        <div className={styles.absolutePos}>
        <h1><Users /></h1>   
        <h1><UserCircle className={styles.icon} /></h1>     

        <img src={car} alt="" className={styles.carImg} />
        </div>
        
    </div>
  )
}

export default PositionsOfCss