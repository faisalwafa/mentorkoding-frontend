import React, { Component } from 'react';
import axios from "axios"

export default class Cari extends Component {
    state ={
        skill: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mentor-koding-backend.herokuapp.com/api/v1/users/search", {
            skill: this.state.skill
        })
            .then(response => {
                console.log(response)
                this.setState({ skill: ""})

            })
            .catch(err => this.setState({ skill: ""}))
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <div className="card" style={{
                    height: '250px'
                }}>
                    <div className="card-body d-flex align-items-center">
                        <div className="px-auto">
                            <h3 className="card-title">Cari Mentor</h3>
                            <div className="input-group mb-3">
                                <input
                                type="text"
                                className="form-control " 
                                placeholder="Skill Yang Ingin Dipelajari" aria-label="Skill Yang Ingin Dipelajari" aria-describedby="button-addon2" size="200" 
                                name = "skill"
                                value={this.state.skill}
                                onChange={this.onChange}
                                />
                                <div className="input-group-append">
                                    <button className="btn ungu" type="submit" id="button-addon2">Cari</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
