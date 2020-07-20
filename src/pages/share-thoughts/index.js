import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Origamis from '../../components/origamis'

const ShareThoughtsPage = () => {

    return (
        <PageLayout>
            <div>
                <Title title="Share your thoughts..." />
                <textarea className={styles.textarea} placeholder="Publication..."></textarea>
                <SubmitButton title="Post" />
            </div>
            <Origamis length={3} />
        </PageLayout>
    )

}

export default ShareThoughtsPage