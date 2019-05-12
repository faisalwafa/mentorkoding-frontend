import React, { Component } from 'react'
import PortofolioItem from './PortofolioItem'

export default class Portofolio extends Component {
    state = {
        ...this.props,
        name: "",
        description: "",
        linkProject: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = async (e) => {
        e.preventDefault()
        let project = {
            name: this.state.name,
            description: this.state.description,
            linkProject: this.state.linkProject
        }
        await this.setState({
            projects: [...this.state.projects, project],
            name: "",
            description: "",
            linkProject: ""
        })
        this.props.updateProject(this.state.projects)
    }

    onDelete = async (id) => {
        let newProject = [...this.state.projects]
        newProject.splice(id, 1)
        await this.setState({
            projects: [...newProject]
        })
        this.props.deleteProject(this.state.projects)
    }
    render() {
        return (
            <div>
                <div className="card my-4">
                    <h4 className=" mt-4 text-center">Portofolios & Accomplishments</h4>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.projects.map((project, index) => {
                                    return <PortofolioItem key={index} id={index} project={project} id={index} onDelete={this.onDelete} />
                                })
                            }
                        </div>
                        <div className="text-center">
                            {
                                this.props.user ? 
                                <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#AddPortofolio">
                                    Tambah
                                </button>
                                : ''
                            }
                        </div>
                    </div>
                    <div className="modal fade" id="AddPortofolio" tabIndex="-1" role="dialog" >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Tambah Portofolio</h5>
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
                                                placeholder="Nama Projek"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="Deskripsi"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="linkProject"
                                                value={this.state.linkProject}
                                                onChange={this.onChange}
                                                className="form-control"
                                                placeholder="URL"
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
