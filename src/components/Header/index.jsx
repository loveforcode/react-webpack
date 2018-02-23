import React, { Component } from 'react';
import './style.scss';


export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            testObj: 'Hi Trip!'
        };
    }
    render() {
        return (
            <section>
                <div className="m-head">
                    <a className="m-title" herf="https://www.trip.com" />
                </div>
                <a className="getData" />
            </section>
        );
    }
}
