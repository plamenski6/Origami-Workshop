import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import UserContext from '../../Context'
//import authenticate from '../../utils/authenticate'


class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}

        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {
            username,
            password
        } = this.state

        try {
            const promise = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const authToken = promise.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`

            const response = await promise.json()

            if (response.username && authToken) {
                this.context.logIn({
                    username: response.username,
                    id: response._id
                })
                this.props.history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        const {
            username,
            password
        } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input type="username" value={username} onChange={(e) => this.handleChange(e, 'username')} label="Username" id="username" />
                    <Input type="password" value={password} onChange={(e) => this.handleChange(e, 'password')} label="Password" id="password" />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage