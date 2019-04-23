import React, { Component } from 'react';
// import HeaderHome from "../../layout/HeaderHome";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Login.css'
import Logo from '../../assets/WebLogo.png'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        isRedirected: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mentor-koding-backend.herokuapp.com/api/v1/users/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                localStorage.setItem("authToken", response.data.token)
                this.setState({ username: "", password: "", isRedirected: true })

            })
            .catch(err => this.setState({ username: "", password: "" }))
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                {/* <HeaderHome /> */}
                <div className="container">
                    <div className=" my-5 " style={{
                        width: "40%",
                        margin: "auto"
                    }}>
                        <div className="text-center mb-5" >
                            <img src={Logo} width="120px" />
                        </div>
                        <div className="login-title">
                            <h2 className="text-center">Selamat Datang!</h2>
                            <p className="text-center mb-5">Ayo cari mentor yang cocok buat kamu </p>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                        </form>
                        <p className="text-center mt-5 login-bottom">Belum punya akun? <a href="#">Daftar disini</a></p>
                        {this.state.isRedirected && (
                            <Redirect to="/Profile" />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
