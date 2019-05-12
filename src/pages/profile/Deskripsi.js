import React, { Component } from 'react'

export default class Deskripsi extends Component {
    state = {
        ...this.props,
        isRedirected: false
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = (e) => {
        e.preventDefault()
        this.props.updateInformation(this.state)
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
                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="120" height="120" />
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
