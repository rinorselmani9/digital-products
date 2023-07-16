import Image from "next/image"
import styles from "./page.module.css"
import Hero from 'public/hero.png'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.description}>Turning your ideas on to reality</p>
        <Link href={'/portofolio'}>
          <button className={styles.button}>See our works </button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  )
}
