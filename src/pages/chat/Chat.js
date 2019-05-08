import React, { Component } from 'react'
import Header from '../../layout/Header';
import ListChat from './ListChat';
import Message from './Message';

export default class Chat extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div className="col-sm-4">
              <ListChat />
            </div>
            <div className="col-sm-8">
              <Message />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
