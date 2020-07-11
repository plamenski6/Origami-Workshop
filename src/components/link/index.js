import React from 'react'
import styles from './index.module.css'

const Link = ({ title, href }) => {
    return (
        <div className={styles.listItem}>
            <a href={href} className={styles["header-link"]}>
                {title}
            </a>
        </div>
    )
}

export default Link