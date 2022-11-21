import React from "react";
import styles from "./titleNavbar.module.css";

const TitleNavbar = () => {

    return (
        <div className={styles.titleContainer}>
            <span id="titleLeft">VILLAIN</span>
            <span id="titleRight">BURGUER</span>
        </div>
    )
}

export default TitleNavbar;