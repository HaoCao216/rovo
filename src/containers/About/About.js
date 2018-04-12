import './About.css'
import React, { Component } from 'react'

import TextBox from '../../components/commons/TextBox/TextBox'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/commons/Button/Button'
import InputBox from '../../components/commons/TextInput/Input'

class About extends Component {
    render() {
        return (
            <div id="about">
                <Navbar />
                <div className="container" id="aboutpage">
                    <h1>About</h1>
                    <div className="aboutbox">
                        <h2>Brand information</h2>
                        <div>
                            <span className="title">Brand name</span>
                            <TextBox textbox="Greenvale Tennis Club" />
                        </div>
                        <div className="yourbrand">
                            <span className="title">About your brand</span>
                            <TextBox textbox="Greenvale Tennis Club courts are outdoor clay courts.  The courts are open seasonally, usually from May through October or until the first frost." />
                        </div>
                        <div>
                            <span className="title">Brand page URL</span>
                            <TextBox textbox="rovo.co/greenvale-tennis-club" />
                        </div>
                        <div>
                            <span className="title">Logo</span>
                            <div className="row"  style={{margin: 0}}>
                                <div className="logo-edit">
                                    <div className="PictureBox">

                                    </div>
                                    <Button text="Edit logo" />
                                </div>
                                <div className="">
                                    <p>Upload a 500 x 500 pixels square image of your logo.</p>
                                    <p><b>Tip:</b> Upload a white logo on a coloured background so that it will stand out more!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="title">Brand colour</span>
                            <div className="row"  style={{margin: 0}}>
                                <div className="logo-edit">
                                    <div className="ColorBox">

                                    </div>
                                    <Button text="Edit colour"/>
                                </div>
                                <div className="">
                                    <p>Your brand colour will be used on your business pages.</p>
                                    <p><b>Tip:</b> Avoid picking a light colour to ensure legibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <h2>Business info</h2>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <span className="title">Business identification number</span>
                                <TextBox textbox="A32144328F" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <span className="title">Tax reference number</span>
                                <TextBox textbox="F329547G" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <span className="title">Partner type</span>
                                <TextBox textbox="A32144328F" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <h2>SEO Settings</h2>
                        <span >Search Engine Optimisation Settings helps people find your page on search engines like Google.</span>
                        <div>
                            <span className="title">Page title</span>
                            <TextBox textbox="Greenvale Tennis Club" />
                        </div>
                        <div>
                            <span className="title">Key word</span>
                            <TextBox textbox="tennis, club, club reviews, court reviews, tennis, greenvale tennis club" />
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
                    </div>
                </div>
            </div>
        )
    }
}

export default About