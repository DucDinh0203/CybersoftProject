import React, { Component } from 'react'

export default class ShoeItem extends Component {
  render() {
    return (
        <div className="card">
        <img className="card-img-top" src={this.props.shoe.image} alt ="" />
            <div className="card-body">
                <h4 className="card-title">{this.props.shoe.name}</h4>
                <p>${this.props.shoe.price}</p>
                <button className="btn btn-success">
                    Details
                </button>
                <button className="btn btn-danger">
                    Add to cart
                </button>
            </div>
        </div>
    )
  }
}
