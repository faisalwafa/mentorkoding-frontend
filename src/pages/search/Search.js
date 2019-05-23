import React, { Component } from 'react'
import MultipleValueTextInput from "react-multivalue-text-input";
import Header from '../../layout/Header';
import Hasil from './Hasil';
import "./Search.css";
import axios from 'axios'
import { apiEndpoint } from "../../helper/helper";
import Loading from '../../layout/Loading';

export default class Search extends Component {
    state = {
        user: null,
        loading: true,
        skills:[],
        profiles:[]
    }
    onSubmit = async () => {
        await this.setState({
            loading: false
        })
        if (localStorage.getItem('authToken')) {
            axios.get(`${apiEndpoint}/api/v1/users/profile`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                }
            })
            .then(async response => {
                await this.setState({
                    user: response.data,
                })
                return axios.post(`${apiEndpoint}/api/v1/users/search`, {
                    skill: [...this.state.skills]
                })
            })
            .then(async response =>{
                const {data} = response
                this.setState({
                    profiles : data,
                    loading: true
                })
            })
        } else {
            axios.post(`${apiEndpoint}/api/v1/users/search`, {
                    skill: [...this.state.skills]
            })
            .then(async response =>{
                const {data} = response
                this.setState({
                    profiles : data,
                    loading: true
                })
            })
        }
    }
    render() {
        let { profiles, user } = this.state
        const results = profiles.filter(profile => profile._id !== user._id)
        return (
        <div>
            <Header />
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <div className="card text-center mt-5 px-5">
                            <div className="card-body">
                                <MultipleValueTextInput
                                    onItemAdded={(item, allItems) => {
                                        this.setState({
                                            skills: allItems
                                        })
                                    }}
                                    onItemDeleted={(item, allItems) => {
                                        this.setState({
                                            skills: allItems
                                        })
                                    }}
                                    name = "item-input"
                                    placeholder = "Input Skills (Seperate with comma or enter)"
                                />
                                <button type="button" className="btn btn-gradient btn-lg btn-block mt-4"
                                onClick={this.onSubmit}
                                >Find Mentor</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.loading ? (
                        results.map((profile, index) => {
                            return <Hasil
                                key= {profile._id}
                                id={profile._id}
                                nama={profile.name}
                                skills={profile.skills}
                                job={profile.job}
                                address={profile.address}
                            />
                        })
                    ) : <div className="row justify-content-center">
                        <div className="col-6">
                            <Loading />
                        </div>
                    </div>
                }
            </div>
        </div>
        )
    }
}
