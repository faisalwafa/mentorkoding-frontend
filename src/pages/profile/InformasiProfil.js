import React, { Component } from 'react'

export default class InformasiProfil extends Component {


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
            <div className="card my-3 info" style={{
                height:"85%"
            }}>
                <div className="card-body">
                    <div className="mb-4">
                        <h5 className="text-center">Profile Information</h5>
                        <button className="btn btn-light sunting" data-toggle="modal" data-target="#SuntingProfil">
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>
                    <div className="modal fade" id="SuntingProfil" tabIndex="-1" role="dialog" >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Profil</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form onSubmit={this.handleChange}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Description"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Alamat"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Telepon" />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="job"
                                                value={this.state.job}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Pekerjaan" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border-right">
                            <h6>Name: </h6>
                            <h4>{this.props.name}</h4>
                            <br/>
                            <h6>Username: </h6>
                            <h5>{this.props.username}</h5>
                        </div>
                        <div className="col">
                            <h6 className="card-text pb-3" style={{
                                fontSize:'1.1rem'
                            }}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="pl-1">Address:</span>
                                <span className="pl-3">{this.props.address}</span>
                            </h6>
                            <h6 className="card-text pb-3" style={{
                                fontSize:'1.1rem'
                            }}>
                                <i className="ffas fa-mobile-alt"></i>
                                <span className="pl-1">Phone:</span>
                                <span className="pl-4">{this.props.phone}</span>
                            </h6>
                            <h6 className="card-text pb-3" style={{
                                fontSize:'1.1rem'
                            }}>
                                <i className="fas fa-building"></i>
                                <span className="pl-1">Job:</span>
                                <span className="pl-5">{this.props.job}</span>
                            </h6>
                        </div>
                    </div>
                    <hr/>
                    <p className="lead pb-4">{this.props.description}</p>
                </div>

            </div>
        )
    }
}
