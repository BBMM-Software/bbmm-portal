import React, { useEffect } from 'react';
import styles from './laptop-content.module.css';

export default function LaptopConent(){
  useEffect(() => {
    const text = document.getElementById("movingText");
    if(text==null){
      return;
    }
    const splitText = text.innerText.split("");
    text.innerHTML = splitText
      .map(
        (char : string, i:number) => `<span style="transform:rotate(${i * (360/splitText.length)}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className={styles.circle}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <p id="movingText">Professional.  Efficient.  Flexible. Transparent. </p>
      </div>
    </div>
  );
};

