import React, { Component } from 'react'
import Header from '../../layout/Header';
import Form from './Form';

export default class Meetup extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Form />
        </div>
      </div>
    )
  }
}
