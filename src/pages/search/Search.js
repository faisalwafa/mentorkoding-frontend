import React, { Component } from 'react'
import MultipleValueTextInput from "react-multivalue-text-input";
import Header from '../../layout/Header';
import Hasil from './Hasil';
import "./Search.css";
import axios from 'axios'

export default class Search extends Component {
    state = {
        skills:[],
        profiles:[]
    }
    onSubmit = () => {
        console.log(this.state.skills);
        axios.post("https://mentor-koding-backend.herokuapp.com/api/v1/users/search", {
            skill: [...this.state.skills]
        })
        .then(response =>{
            console.log(response)
            const {data} = response
            this.setState({
                profiles : data
            })
        })
    }
    render() {
        const { profiles } = this.state
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
                    profiles.map((profile, index) => {
                        return <Hasil 
                            key= {profile._id}
                            id={profile._id}
                            nama={profile.name}
                            skills={profile.skills}
                            job={profile.job}
                            address={profile.address}
                        />
                    })
                }
            </div>
        </div>
        )
    }
}
