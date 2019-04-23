import React, { Component } from 'react';
import Logo from '../../assets/WebLogo.png'

export default class Login extends Component {

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
                            <p className="text-center mb-5">Ayo gabung bersama kami </p>
                        </div>
                        {/* <form onSubmit={this.onSubmit}>
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
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}
