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
            <div>
                <div className="card my-5 info">
                    <h5 className="text-center my-2">Informasi Profil</h5>
                    <button className="btn btn-primary sunting" data-toggle="modal" data-target="#SuntingProfil">
                        Sunting
                    </button>
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
                                                name="educations"
                                                value={this.state.educations}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Pendidikan Terakhir" />
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
                    <div className="card-body row">
                        <div className="col-5 ">
                            <p className="card-text"><i className="fas fa-map-marker-alt"></i> Alamat</p>
                            <p className="card-text"><i className="fas fa-mobile-alt"></i> Telepon</p>
                            <p className="card-text"><i className="fas fa-graduation-cap"></i> Pendidikan Terakhir</p>
                            <p className="card-text"><i className="fas fa-building"></i> Pekerjaan</p>
                        </div>
                        <div className="col">
                            <p className="card-text">: {this.props.address}</p>
                            <p className="card-text">: {this.props.phone}</p>
                            <p className="card-text">: {this.props.educations}</p>
                            <p className="card-text">: {this.props.job}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
