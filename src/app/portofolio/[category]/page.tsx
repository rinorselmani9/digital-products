import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Hero from 'public/hero.png'

const Category = ({ params }: any) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <p className={styles.catTitle}>{params?.category}</p>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.decscription}>test</p>
          <button className={styles.button}>See more</button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={Hero}
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.decscription}>test</p>
          <button className={styles.button}>See more</button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={Hero}
            fill={true}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category
