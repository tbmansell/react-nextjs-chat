import Layout from '../components/Layout'
import React, {useEffect, useState} from "react";
import { LoginUser } from "../services/Users.service"
import styles from "../styles/Common.module.css";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let loginError = null

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function disabled() {
        return !username || !password || username.length === 0 || password.length === 0
    }

    function login(event) {
        event.preventDefault()

        LoginUser(username, password).then(value => {
            console.log('LoginOK: ', { value })
            loginError = null
        }).catch(error => {
            console.log('LoginError: ', error.message)
            loginError = error.message
        })
    }

    useEffect(() => {
        console.log('UseEffect')
    })

    return (
        <Layout>
            <form onSubmit={login}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                           value={username}
                           onChange={handleChangeUsername}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                           value={password}
                           onChange={handleChangePassword}
                           className="form-control"/>
                </div>
                <input type="submit"
                       value="Login"
                       disabled={disabled()}
                       className="btn btn-success btn-lg btn-block" />
                {loginError && <div className={styles.error}>{loginError}</div>}
            </form>
        </Layout>
    )
}

export default Login
