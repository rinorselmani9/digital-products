import Image from "next/image"
import styles from "./page.module.css"
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.description}>Turning your ideas on to reality</p>
        <button className={styles.button}>See our works </button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  )
}
