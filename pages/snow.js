import Image from "next/image";
import styles from "../styles/snow.module.css";
import SnowFall from "../Images/snowfall.jpg"
import React, { useEffect, useRef, useState } from "react";
const snow = () => {
    // const [show,setShow]=useState(true);
    let list=[]
    const createSnow=()=>{
        for(let i=0;i<50;i++){
            const maxSize=10;
            const minSize=5;
            const snow=
            <span className={styles.snow} key={i}
            style={{width:Math.random()*(maxSize-minSize)+minSize+"px",height:Math.random()*(maxSize-minSize)+minSize+"px",left:Math.random()*95+"%",animationDelay:`${Math.random()*10+"s"}`}}
            >
            </span>
            list.push(snow)
        }
        return list;
    }
    createSnow()
    return (
        <div className={styles.container}>
            <div className={styles.imageWrap}>
                <Image src={SnowFall} alt=""/>
            </div>
            {list}
            <div className={styles.content}>
                <p>SNOW SEASON</p>
            </div>
        </div>
    );
}

export default snow;