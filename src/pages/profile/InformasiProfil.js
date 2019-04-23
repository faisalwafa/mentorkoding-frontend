import React, { Component } from 'react'

export default class InformasiProfil extends Component {
    render() {
        return (
            <div>
                <div className="card my-5">
                    <h5 className="text-center my-2">Informasi Profil</h5>
                    <div className="card-body row">
                        <div className="col-5 ">
                            <p className="card-text"><i class="fas fa-map-marker-alt"></i> Alamat</p>
                            <p className="card-text"><i class="fas fa-mobile-alt"></i> Telepon</p>
                            <p className="card-text"><i class="fas fa-graduation-cap"></i> Pendidikan Terakhir</p>
                            <p className="card-text"><i class="fas fa-building"></i> Pekerjaan</p>
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
