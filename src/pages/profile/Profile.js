import React, { Component } from 'react'
import Header from "../../layout/Header";
import InformasiProfil from './InformasiProfil';
import Deskripsi from './Deskripsi';
import axios from 'axios';
import Skills from './Skills';

export default class Profile extends Component {
    state = {
        name: "",
        description: "",
        address: "",
        phone: "",
        educations: "",
        job: "",
        isMentor: "",
        skills: "",
        _id: "",
        username: "",
        projects: "",
        reviews: "",
        email: "",
        profilePic: ""
    }

    componentDidMount() {
        axios.get("https://mentor-koding-backend.herokuapp.com/api/v1/users/profile", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    address: response.data.address,
                    phone: response.data.phone,
                    educations: response.data.educations,
                    job: response.data.job,
                    isMentor: response.data.isMentor,
                    skills: response.data.skills,
                    _id: response.data._id,
                    username: response.data.username,
                    projects: response.data.projects,
                    reviews: response.data.reviews,
                    email: response.data.email,
                    profilePic: response.data.profilePic
                })
                console.log(this.state)
            })
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <Deskripsi
                                name={this.state.name}
                                description={this.state.description}
                            />
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <InformasiProfil
                                address={this.state.address}
                                phone={this.state.phone}
                                educations={this.state.educations}
                                job={this.state.job}
                            />
                        </div>
                    </div>
                    <div>
                        <Skills />
                    </div>
                </div>
            </div >
        )
    }
}
