import './Dashboard.css'
import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'


class Dashboard extends Component {
    render() {
        return (
            <div id="dashboardpage">
                <Navbar />
                <div id="dashboard" className="container">
                    <h1>Hello, Stacy!</h1>
                    <div className="dasdboardmenu">
                        <div className="dashboardslot active">
                            <div>
                                <img src="/assets/image/menu1.svg" />
                                <p>ANALYTICS</p>
                                <span>Pageviews, ratings, reviews & followers</span>
                            </div>
                        </div>
                        <div className="dashboardslot active">
                            <div>
                                <img src="/assets/image/group-2@2x.jpg" />
                                <p>ABOUT</p>
                                <span>Information about your business</span>
                            </div>
                        </div>
                        <div className="dashboardslot active">
                            <div>
                                <img src="/assets/image/menu3.svg" />
                                <p>VENUES</p>
                                <span>Information about your venues</span>
                            </div>
                        </div>
                        <div className="dashboardslot active">
                            <div>
                                <img src="/assets/image/post@2x.jpg" />
                                <p>POST</p>
                                <span>Create and manage posts to your followers</span>
                            </div>
                        </div>
                        <div className="dashboardslot active">
                            <div>
                                <img src="/assets/image/menu5.svg" />
                                <p>RATINGS & REVIEWS</p>
                                <span>See and respond to ratings & reviews</span>
                            </div>
                        </div>
                        <div className="dashboardslot coming-soon">
                            <div>
                                <img src="/assets/image/menu-cs3.jpg" />
                                <p>STAFF</p>
                                <span>COMMING SOON</span>
                            </div>
                        </div>
                        <div className="dashboardslot coming-soon">
                            <div>
                                <img src="/assets/image/menu-cs2.svg" />
                                <p>ONLINE BOOKING</p>
                                <span>COMMING SOON</span>
                            </div>
                        </div>
                        <div className="dashboardslot coming-soon">
                            <div>
                                <img src="/assets/image/menu-cs1.svg" />
                                <p>MEMBERS</p>
                                <span>COMMING SOON</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard