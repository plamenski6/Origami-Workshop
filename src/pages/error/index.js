import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'

const ErrorPage = () => {

    return (
        <PageLayout>
            <div className={styles.error}>
                <h1>ERROR PAGE!</h1>
            </div>
        </PageLayout>
    )

}

export default ErrorPage