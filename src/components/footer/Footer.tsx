import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Digital Products</div>
      <div className={styles.socials}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='Digital Products'/>
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='Digital Products'/>
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='Digital Products'/>
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='Digital Products'/>
      </div>
    </div>
  )
}

export default Footer