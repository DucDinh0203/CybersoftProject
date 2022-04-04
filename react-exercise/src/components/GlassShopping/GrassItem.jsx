import React, { Component } from 'react'

export default class GrassItem extends Component {
    handleGrassItem = () => {
        this.props.handleSetGrassDetail(this.props.grasses);
        console.log("hello");
    };
    render() {
        return (
            <button className="btn btn-outline-secondary" onClick={this.handleGrassItem}>
                <img 
                    src={this.props.grasses.url} 
                    alt="hinh" 
                    style={{width: 100, borderRadius: 20}} 
                />
            </button>
        )
    }
}
