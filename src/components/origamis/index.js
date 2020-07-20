import React, { Component } from 'react'
import styles from './index.module.css'
import Origami from '../origami'

class Origamis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
        const {length} = this.props
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
        const origamis = await promise.json()

        this.setState({
            origamis
        })
    }

    componentDidMount() {
        this.getOrigamis()
    }

    render() {
        const {
            origamis
        } = this.state

        return (
            <div className={styles['origamis-wrapper']}>
                {origamis.map((origami, index) => {
                    return (
                        <Origami key={origami._id} index={index} {...origami} />
                    )
                })}
            </div>
        )
    }
}

export default Origamis
