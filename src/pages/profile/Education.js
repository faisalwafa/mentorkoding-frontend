import React, { Component } from 'react'
import EducationItem from './EducationItem'

export default class Education extends Component {
    state = {
        ...this.props,
        name: "",
        dateIn: "",
        dateOut: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = async (e) => {
        e.preventDefault()
        let education = {
            name: this.state.name,
            dateIn: this.state.dateIn,
            dateOut: this.state.dateOut
        }
        await this.setState({
            educations: [...this.state.educations, education],
            name: "",
            dateIn: "",
            dateOut: ""
        })
        this.props.updateEducation(this.state.educations)
    }

    onDelete = async (id) => {
        let newEducation = [...this.state.educations]
        newEducation.splice(id, 1)
        await this.setState({
            educations: [...newEducation]
        })
        this.props.deleteEducation(this.state.educations)
    }
    render() {
        return (
            <div>
                <div className="card my-4 text-center">
                    <h5 className=" mt-4">Education</h5>
                    <div className="card-body">
                        {
                            this.state.educations.map((education, index) => {
                                return <EducationItem key={index} id={index} education={education} id={index} onDelete={this.onDelete} />
                            })
                        }
                        <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#AddEducation" style={{
                            margin: "auto"
                        }}>
                            Tambah
                        </button>
                    </div>
                    <div className="modal fade" id="AddEducation" tabIndex="-1" role="dialog" >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Tambah Pendidikan</h5>
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
                                                placeholder="Nama Instansi"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="date"
                                                name="dateIn"
                                                value={this.state.dateIn}
                                                onChange={this.onChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="date"
                                                name="dateOut"
                                                value={this.state.dateOut}
                                                onChange={this.onChange}
                                                className="form-control"
                                            />
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
            </div >
        )
    }
}
