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
                    <div className="card">
                        <div className="card-body">
                            <form >
                                <div className="form-group row">
                                    <label className="col-sm-2">Nama</label>
                                    <input type="text" class="form-control col-sm-10" name="name" id="name" placeholder="" />
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2">Deskripsi</label>
                                    <input type="text" class="form-control col-sm-10" name="description" id="description" placeholder="" />
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2">Foto</label>
                                    <input type="file" class="form-control col-sm-10" name="photo" id="photo" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
