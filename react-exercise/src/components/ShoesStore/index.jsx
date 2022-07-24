import React, { Component } from 'react'
import ShoeList from './ShoeList'
import ShoeModel from './ShoeModel'
import TheCart from './TheCart'

export default class ShoesStore extends Component {
  render() {
    return (
        // <h1> hello world</h1>
        <section className="container">
            <h3 className="title text-center">DoubleD Store</h3>
            <div className="container text-center my-2">
                <button
                    className="btn btn-danger "
                    data-toggle="modal"
                    data-target="#modelId"
                >
                    Your Cart ()
                </button>
            </div>
            
            <ShoeList
            />
            <TheCart/>
            
            <ShoeModel/>
            

        </section>
    );
  }
}
