import React from 'react'
import Header from './components/header'
import styles from './app.module.css'
import Aside from './components/aside'
import Origamis from './components/origamis'


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Aside />
        <Origamis />
      </div>
    </div>
  )
}

export default App
