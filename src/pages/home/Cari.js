import React, { Component } from 'react'

export default class Cari extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{
                    height: '250px'
                }}>
                    <div className="card-body d-flex align-items-center">
                        <div className="px-auto">
                            <h3 className="card-title">Cari Mentor</h3>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control " placeholder="Skill Yang Ingin Dipelajari" aria-label="Skill Yang Ingin Dipelajari" aria-describedby="button-addon2" size="200" />
                                <div className="input-group-append">
                                    <button className="btn ungu" type="button" id="button-addon2">Cari</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
