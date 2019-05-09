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
            <div className="card text-center my-3">
                <div className="card-body">
                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="100" height="100" />
                    <h4 className="mt-4">{this.props.name}</h4>
                    <h4 className="font-weight-light">{this.props.description}</h4>
                    <button className="btn btn-outline-primary sunting" data-toggle="modal" data-target="#SuntingProfil">
                        <i class="fas fa-edit"></i>
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
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            className="form-control"
                                            placeholder="Nama"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.onChange}
                                            className="form-control"
                                            placeholder="Deskripsi" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="file"
                                            name="photo"
                                            value={this.state.photo}
                                            onChange={this.onChange}
                                            className="form-control" />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
