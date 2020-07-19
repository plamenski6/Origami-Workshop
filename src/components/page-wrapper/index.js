import React from 'react'
import Header from '../header'
import styles from './index.module.css'
import Aside from '../aside'
import Footer from '../footer'


function PageWrapper(props) {

  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Aside />
        {props.children}
      </div>
      <Footer />
    </div>
  )

}

export default PageWrapper
