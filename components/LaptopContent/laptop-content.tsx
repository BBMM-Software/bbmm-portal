import React, { useEffect } from 'react';
import styles from './laptop-content.module.css';

export default function LaptopConent(){
  useEffect(() => {
    const text = document.getElementById("movingText");
    if(text==null){
      return;
    }
    text.innerHTML = text.innerText.split("")
      .map(
        (char : string, i:number) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className={styles.circle}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <p id="movingText">Professional.  Efficient.  Flexible. Transparent. Innovative</p>
      </div>
    </div>
  );
};

