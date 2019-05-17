import React, { Component } from 'react'
import axios from "axios";

export default class Deskripsi extends Component {
    state = {
        ...this.props,
        isRedirected: false,
        selectedFile: null
    }

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onChange=(e)=>{

       this.setState({
        selectedFile: e.target.files[0],
        loaded: 0,
       })
    
    }

    handleChange = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        .then(res => { // then print response status
        console.log(res.statusText)
        })
    }
    render() {
        return (
            <div className="h-100">
                <div className="modal fade" id="SuntingDeskripsi" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Profil</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleChange}>
                                    <div className="form-group">
                                        <input
                                            type="file"
                                            name="photo"
                                            value={this.state.photo}
                                            onChange={this.onChange}
                                            className="form-control" />
                                    </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-3" style={{
                    height:"85%"
                }}>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <img src={`http://localhost:8000/${this.props.profilePic}`} className="rounded-circle" width="120" height="120" />
                        {
                            this.props.user ? <button className="btn btn-light sunting" data-toggle="modal" data-target="#SuntingDeskripsi">
                            <i className="fas fa-edit"></i>
                            </button> : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
