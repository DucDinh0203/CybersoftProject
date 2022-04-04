import React, { Component } from 'react'
import GlassList from './GlassList';
import MyModel from "./MyModel";

export default class GlassShopping extends Component {
    state = {
        grassDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    };

    handleSetGrassDetail = (grass) => {
        this.setState({
            grassDetail: grass,
        });
    };

    render() {
        return (
            <section className="glasses-app bg-dark" style={{height: '100vh'}}>
            <h2 className="text-center h2 text-white py-1">Glasses App</h2>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container row">

                    <MyModel
                        grassDetail={this.state.grassDetail}
                    />

                    <GlassList
                        handleSetGrassDetail={this.handleSetGrassDetail}
                    />
                </div>
                </div>
        </section>
        )
    }
}
