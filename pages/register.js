import Layout from '../components/Layout'
import React from "react";

function Register() {
    return (
        <Layout>
            <h1>Create a new user account</h1>
            <form ng-submit="register(username, password)">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" ng-model="username" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" ng-model="password" className="form-control"/>
                </div>
                <input type="submit" value="Register" className="btn btn-success btn-lg btn-block"/>
            </form>
        </Layout>
    )
}

export default Register
