import React, { Component } from 'react'
import Header from "../../layout/Header";

export default class EditProfil extends Component {
    state = {
        address: "",
        phone: "",
        educations: "",
        job: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="card my-4">
                        <h5 className=" mt-4">Contact</h5>
                        <form onSubmit={this.props.updateInformation}>
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
                            {/* <div className="card my-4">
                                <h5 className=" mt-4">Keahlian yang Dimiliki</h5>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="job"
                                        value={this.state.job}
                                        onChange={this.onChange}
                                        className="form-control"
                                        placeholder="Pekerjaan" />
                                </div>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
