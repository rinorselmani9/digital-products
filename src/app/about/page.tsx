import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/hero.png"} alt='' fill={true} className={styles.img} />

        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital products</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, assumenda. Corporis
            amet perferendis nobis rerum obcaecati aliquid iste, voluptatem sequi laboriosam laborum
            dicta repellendus molestias ratione ipsum non, explicabo quisquam.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, assumenda. Corporis
            amet perferendis nobis rerum obcaecati aliquid iste, voluptatem sequi laboriosam laborum
            dicta repellendus molestias ratione ipsum non, explicabo quisquam.
          </p>
          <Link href={'/contact'}>
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
