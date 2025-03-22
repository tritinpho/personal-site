import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return (<section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello there!</h1>
                <p className={styles.description}>I'm Tin Pho, a graduate student majoring in Artificial Intelligence.</p>
            </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={StyleSheet.topBlur}/>
        <div className={StyleSheet.bottomBlur}/>
    </section>);
};