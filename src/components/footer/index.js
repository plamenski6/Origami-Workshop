import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {

    return (
        <footer>
            <div className={styles.footer}>
                <Link href="#" title="Going to 1" type="footer" />
                <Link href="#" title="Going to 2" type="footer" />
                <Link href="#" title="Going to 3" type="footer" />
                <Link href="#" title="Going to 4" type="footer" />
                <Link href="#" title="Going to 5" type="footer" />
                <Link href="#" title="Going to 6" type="footer" />
                <img className={styles.logo} src={logo} />
            </div>
            <p className={styles["footer-par"]}>Copyright © 2020</p>
        </footer>
    )
}

export default Footer
