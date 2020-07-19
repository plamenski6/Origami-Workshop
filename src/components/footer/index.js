import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()

    return (
        <footer>
            <div className={styles.footer}>
                {
                    links.map(navElement => {
                        return (
                            <Link key={navElement.title} href={navElement.link} title={navElement.title} type="footer" />
                        )
                    })
                }
                <img className={styles.logo} src={logo} />
            </div>
            <p className={styles["footer-par"]}>Copyright © 2020</p>
        </footer>
    )
}

export default Footer
