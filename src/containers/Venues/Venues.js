import './Venues.css'
import React, { Component } from 'react'

import { Collapse, Switch } from "@blueprintjs/core";
import TextBox from '../../components/commons/TextBox/TextBox'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/commons/Button/Button'
import InputBox from '../../components/commons/TextInput/Input'

class Venues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            active1: false
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleClass1 = this.toggleClass1.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    toggleClass1() {
        const currentState = this.state.active1;
        this.setState({ active1: !currentState });
    };
    render() {
        return (
            <div id="venues">
                <Navbar />
                <div className="container" id="venuespage">
                    <h1>Venues</h1>
                    <div className="aboutbox">
                        <h2 style={{ marginBottom: 0 }} onClick={this.toggleClass}>Basic information</h2>
                        <Collapse isOpen={this.state.active}>
                            <div>
                                <span className="title">Venues name</span>
                                <InputBox placeholder="Greenvale Tennis Club" />
                            </div>
                            <div>
                                <span className="title">Website</span>
                                <InputBox placeholder="www.greenvaleclub.com" />
                            </div>
                            <div>
                                <span className="title">Venues page URL</span>
                                <InputBox placeholder="rovo.co/greenvale-tennis-club/venue/greenvale-tennis-club" />
                            </div>
                            <div>
                                <span className="title">Phone number</span>
                                <InputBox placeholder="3218 431 32732" />
                            </div>
                            <div>
                                <Switch className="pt-large" labelElement={<em>Enable ‘Call to book’ for my business</em>} />
                            </div>
                        </Collapse>
                    </div>
                    <div className="aboutbox">
                        <h2>Facilities</h2>
                        <div className="row">
                            <div className="col col-sm-12 col-md-3 col-lg-3">
                                Sport
                            </div>
                            <div className="col col-sm-12 col-md-5 col-lg-5">
                                Facility name
                            </div>
                            <div className="col col-sm-12 col-md-3 col-lg-3">
                                No. of facilities
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-3 col-lg-3">
                                <InputBox placeholder="Tennis" />
                            </div>
                            <div className="col col-sm-12 col-md-5 col-lg-5">
                                <InputBox placeholder="Tennis court (Clay)" />
                            </div>
                            <div className="col col-sm-12 col-md-3 col-lg-3">
                                <InputBox placeholder="6" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="button col col-sm-11 col-md-11 col-lg-11">
                                <Button text="+ Add a facility" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <h2>Address</h2>
                        <div className="row">
                            <div className="col col-sm-12 col-md-12 col-lg-12">
                                <span>Street address</span>
                                <InputBox placeholder="Greenvale Tennis Club Hardbrücke Geroldstr. 5" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <span>City</span>
                                <InputBox placeholder="Singapore" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <span>Postal Code</span>
                                <InputBox placeholder="3125" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <h2>Media</h2>
                        <span>Photos</span>
                        <div className="row media-photo">
                            <div className="">
                            </div>
                            <div className="">
                            </div>
                            <div className="add-photo">
                                <span>+Add a photo</span>
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <h2>Opening hours</h2>
                        
                    </div>
                    <div className="aboutbox">
                        <h2 style={{ marginBottom: 0 }} onClick={this.toggleClass1}>SEO Settings</h2>
                        <Collapse isOpen={this.state.active1}>
                            <span >Search Engine Optimisation Settings helps people find your page on search engines like Google.</span>
                            <div>
                                <span className="title">Page title</span>
                                <InputBox placeholder="Greenvale Tennis Club" />
                            </div>
                            <div>
                                <span className="title">Key word</span>
                                <InputBox placeholder="tennis, club, club reviews, court reviews, tennis, greenvale tennis club" />
                            </div>
                            <div className="meta-description">
                                <span className="title">Meta description</span>
                                <div>
                                    <textarea placeholder="Provide a relevant description for this page">
                                    </textarea>
                                </div>
                            </div>
                            <div>
                                <span className="title">Search engine result preview</span>
                                <div className="result-box">
                                    <p>Greenvale Tennis Club</p>
                                    <p>rovo.co/greenvale-tennis-club</p>
                                    <p>Meta description for your page here.</p>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default Venues