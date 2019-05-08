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
                <div className="row d-flex justify-content-center mt-3">
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
                        placeholder = "Skill yang anda cari ? (pisahkan dengan koma atau enter)"
                    />
                    <button type="button" class="ml-3 btn btn-outline-light btn-sm"style={{
                        height:'40px'
                    }}
                    onClick={this.onSubmit}
                    >Cari</button>
                </div>
                {
                    profiles.map((profile, index) => {
                        return <Hasil 
                            key= {profile._id}
                            id={profile._id}
                            nama={profile.name}
                            skills={profile.skills}
                            instansi={profile.job}
                        />
                    })
                }
            </div>
        </div>
        )
    }
}
