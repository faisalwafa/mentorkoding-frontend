import React, { Component } from 'react'
import Header from "../../layout/Header";
import InformasiProfil from './InformasiProfil';
import Deskripsi from './Deskripsi';
import axios from 'axios';
import Skills from './Skills';
import Portofolio from './Portofolio';
import "./Profile.css";
import Loading from "../../layout/Loading";
import cover from "../../assets/cover.jpg";
import { apiEndpoint } from "../../helper/helper";
import Education from './Education';
import { Link } from "react-router-dom";

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
        profilePic: "",
        user: null,
        loading: false
    }

    checkUser = () => {
        return this.state._id === this.state.user._id
    }

    async componentWillReceiveProps(newProps) {
        await this.setState({
            loading: false
        })
        axios.get(`${apiEndpoint}/api/v1/users/${newProps.match.params.id}`)
            .then(async response => {
                await this.setState({
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
        })
    }

    componentDidMount() {
        axios.get(`${apiEndpoint}/api/v1/users/${this.props.match.params.id}`)
            .then(async response => {
                await this.setState({
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
                })
                return axios.get(`${apiEndpoint}/api/v1/users/profile`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            })
            .then(async response => {
                await this.setState({
                    user: response.data,
                    loading: true
                })
            })
    }

    updateIsMentor = () => {
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                isMentor: !this.state.isMentor
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    isMentor: data.isMentor
                })
            })
            .catch(err => console.log(err))
    }

    updateInformation = (contact) => {
        const { address, phone, job, description } = contact

        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                address, phone, job, description
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    address: data.address,
                    phone: data.phone,
                    educations: data.educations,
                    job: data.job
                })
            })
            .catch(err => console.log(err))
    }

    updateSkill = (skills) => {
        // let newSkill = [...this.state.skills, skill]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                skills
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    skills: [data.skills]
                })
            })
            .catch(err => console.log(err))
    }

    deleteSkill = (skills) => {
        // let newSkills = [...this.state.skills]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                skills
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    skills: [data.skills]
                })
            })
            .catch(err => console.log(err))
    }

    updateProject = (projects) => {
        // let newSkill = [...this.state.skills, skill]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                projects
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    projects: [data.projects]
                })
            })
            .catch(err => console.log(err))
    }

    deleteProject = (projects) => {
        // let newSkills = [...this.state.skills]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                projects
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    projects: [data.projects]
                })
            })
            .catch(err => console.log(err))
    }

    updateEducation = (educations) => {
        // let newSkill = [...this.state.skills, skill]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                educations
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    educations: [data.educations]
                })
            })
            .catch(err => console.log(err))
    }

    deleteEducation = (educations) => {
        // let newSkills = [...this.state.skills]
        axios
            .put(`${apiEndpoint}/api/v1/users/profile`, {
                educations
            }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            .then(response => {
                const { data } = response
                this.setState({
                    educations: [data.educations]
                })
            })
            .catch(err => console.log(err))
    }
    // checkID = () =>{
    //     this.state._id == this.props.match.params.id;
    // }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                {
                    this.state.loading ? (
                    <div className="container my-5">
                        <div className="card" style={{
                            background:`#fff url(${cover}) no-repeat 98% 118%`,
                            minHeight: "100%",
                            width:"100%",
                            overflow:"hidden"
                        }}>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <Deskripsi
                                            user={this.checkUser()}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <InformasiProfil
                                            user={this.checkUser()}
                                            address={this.state.address}
                                            phone={this.state.phone}
                                            job={this.state.job}
                                            description={this.state.description}
                                            name={this.state.name}
                                            username={this.state.username}
                                            updateInformation={this.updateInformation}
                                        /> 
                                    </div>
                                        <div className="col-md-3">
                                            <div className="card my-3">
                                                <div className="card-body text-center">
                                                {
                                                    this.checkUser() ? [
                                                        <div className="custom-control custom-switch">
                                                                <input 
                                                                type="checkbox" className="custom-control-input" id="customSwitch1" 
                                                                defaultChecked={this.state.isMentor}
                                                                onChange={this.updateIsMentor}
                                                                />
                                                                <label className="custom-control-label" for="customSwitch1">Show me as a mentor</label>
                                                        </div>
                                                    ]
                                                        :
                                                        <Link 
                                                            to={{
                                                                pathname: `/Meetup`,
                                                                state: {
                                                                    profile: {
                                                                        id: this.state._id,
                                                                        name: this.state.name
                                                                    },
                                                                    user: {
                                                                        id: this.state.user._id
                                                                    }
                                                                }
                                                            }}
                                                            className="btn btn-gradient btn-lg btn-humongous"
                                                        >Create Meetup</Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <Skills user={this.checkUser()} skills={this.state.skills} updateSkill={this.updateSkill} deleteSkill={this.deleteSkill} />
                                    
                        </div>
                        <div>
                            <Portofolio user={this.checkUser()} projects={this.state.projects} updateProject={this.updateProject} deleteProject={this.deleteProject} />  
                        </div>
                        <div>
                            <Education user={this.checkUser()} educations={this.state.educations} updateEducation={this.updateEducation} deleteEducation={this.deleteEducation} />     
                        </div>
                    </div>
                    ) : <Loading />
                }
                </div>  
            </div>
        )
    }
}
