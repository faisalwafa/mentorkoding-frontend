import React, { Component } from 'react'
import Header from "../../layout/Header";
import Headline from "./Headline";
import Cari from "./Cari";
import Jadwal from "./Jadwal";
import Unconfirmed from "./Unconfirmed";

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
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="confirmed-tab" data-toggle="tab" href="#confirmed" role="tab" >Confirmed</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="unconfirmed-tab" data-toggle="tab" href="#unconfirmed" role="tab" >Unconfirmed</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="confirmed" role="tabpanel" ><Jadwal /></div>
                        <div class="tab-pane fade show" id="unconfirmed" role="tabpanel" ><Unconfirmed /></div>
                    </div>
                </div>
            </div >
        )
    }
}
