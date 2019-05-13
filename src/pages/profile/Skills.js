import React, { Component } from 'react'
import SkillItem from "./SkillItem";

export default class Skills extends Component {
    state = {
        ...this.props,
        skill: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = async (e) => {
        e.preventDefault()
        await this.setState({
            skills: [...this.state.skills, this.state.skill],
            skill: ""
        })
        this.props.updateSkill(this.state.skills)
    }

    onDelete = async (id) => {
        let newSkill = [...this.state.skills]
        newSkill.splice(id, 1)
        await this.setState({
            skills: [...newSkill]
        })
        this.props.deleteSkill(this.state.skills)
    }

    render() {
        return (
            <div>
                <div className="card my-4 text-center">
                    <h4 className=" mt-4">Skills</h4>
                    <div className="card-body ">
                        <div className="row">
                            {/* <div className="col-12"> */}
                            {
                                this.state.skills.map((skill, index) => {
                                    return <SkillItem key={index} user={this.props.user} id={index} skill={skill} id={index} onDelete={this.onDelete} />
                                })
                            }
                            {/* </div> */}
                            <div className="modal fade" id="AddSkills" tabIndex="-1" role="dialog" >
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Tambah Skill</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form onSubmit={this.handleChange}>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="skill"
                                                        value={this.state.skill}
                                                        onChange={this.onChange}
                                                        className="form-control"
                                                        placeholder="Tambah Skill"
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
                        {
                            this.props.user ? 
                            <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#AddSkills" style={{
                                margin: "auto"
                            }}>
                                Tambah
                                </button>
                            : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
