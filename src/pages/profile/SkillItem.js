import React, { Component } from 'react'

export default class SkillItem extends Component {
    render() {
        return (
            <div className="card my-1">
                <div className="mt-3 ml-4">
                    <p>{this.props.skill}</p>
                </div>
            </div>
        )
    }
}
