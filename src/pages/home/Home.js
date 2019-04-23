import React, { Component } from 'react'
import Header from "../../layout/Header";
import Headline from "./Headline";
import Cari from "./Cari";
import Jadwal from "./Jadwal";

export default class Home extends Component {
    state = {
        nama: "Milos",
        headline: "Penari"
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row my-5">
                        <div className="col-sm-3">
                            <Headline
                                nama={this.state.nama}
                                headline={this.state.headline}
                            />
                        </div>
                        <div className="col-sm-9">
                            <Cari />
                        </div>
                    </div>
                    <Jadwal />
                </div>
            </div>
        )
    }
}
