import React, { Component } from 'react'

export default class ShoeModel extends Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-5">
                    <img
                        className="img-fluid"
                        src=""
                        alt="asdasdasd"
                    />
                </div>
            <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>asffdf</td>
                </tr>
                <tr>
                    <td>Alias</td>
                    <td>sdfsdf</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>sdfsdf</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>sdfgsdf</td>
                </tr>
                {/* <tr>
                    <td>RAM</td>
                    <td>sdfsdf</td>
                </tr>
                <tr>
                    <td>ROM</td>
                    <td>sdfgsdf</td>
                </tr> */}
                </tbody>
            </table>
            </div>
        </div>
        );
    }
}
