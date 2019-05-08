import React, { Component } from 'react'

export default class CariChat extends Component {
  render() {
    return (
      <div>
        <div className="px-auto">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Cari Pesan" aria-label="Cari Pesan" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
