import React from "react";
import styles from "./title.module.css";

const Title = () => {

    return (
        <div className={styles.titleContainer}>
            <span id="titleLeft">VILLAIN</span>
            <span id="titleRight">BURGUER</span>
        </div>
    )
}

export default Title;