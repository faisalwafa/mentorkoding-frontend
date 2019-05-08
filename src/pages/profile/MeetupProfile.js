import React, { Component } from 'react'
import Header from "../../layout/Header";
import InformasiProfil from './InformasiProfil';
import Deskripsi from './Deskripsi';
import axios from 'axios';
import Skills from './Skills';
import Portofolio from './Portofolio';
import "./Profile.css";

import { apiEndpoint } from "../../helper/helper";

export default class MeetupProfile extends Component {
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
        profilePic: "",
        loading: false
    }

    componentDidMount() {
        axios.get(`${apiEndpoint}/api/v1/users/profile`, {
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
                    profilePic: response.data.profilePic,
                    loading: true
                })
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Deskripsi
                                name={this.state.name}
                                description={this.state.description}
                            />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {
                                this.state.loading ? <InformasiProfil
                                    address={this.state.address}
                                    phone={this.state.phone}
                                    educations={this.state.educations}
                                    job={this.state.job}
                                    updateInformation={this.updateInformation}
                                /> : <div class="card my-5">
                                        <div class="card-body">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div class="spinner-grow text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-secondary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-success" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-danger" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-warning" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-info" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-light" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <div class="spinner-grow text-dark" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div>
                        {
                            this.state.loading ? <Skills skills={this.state.skills} />
                                : <div class="card my-5">
                                    <div class="card-body">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div class="spinner-grow text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-secondary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-success" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-danger" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-warning" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-info" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-light" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <div class="spinner-grow text-dark" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                        <Portofolio />
                    </div>
                </div>
            </div >
        )
    }
}
