import './Post.css'
import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/commons/Button/Button'
import { Alert, Intent, IToaster, Switch, Toaster, Icon } from "@blueprintjs/core";
import InputBox from '../../components/commons/TextInput/Input'
import TextareaAutosize from 'react-autosize-textarea';
import Swal from 'sweetalert2'



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenError: false,
            isShowingModal: false
        };
        this.handleErrorOpen = this.handleErrorOpen.bind(this);
        this.handleErrorClose = this.handleErrorClose.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
    }

    handlePopup() {
        Swal({
            title: "Discard your post? Your post won’t be saved.",
            showCancelButton: true,
            confirmButtonText: 'Discard post',
            cancelButtonColor: '#06bebd',
            cancelButtonText : 'Cancel',
            width: 350,
        }).then((result) => {
            if (result.value) {
                Swal(
                    
                )
            }
        })
    }

    handleErrorOpen() {
        this.setState({ isOpenError: true });
    };
    handleErrorClose() {
        this.setState({ isOpenError: false });
    };

    render() {
        const { isOpen, isOpenError } = this.state;
        return (
            <div id="dashboardpage">
                <Navbar />
                <div id="post" className="container">
                    <h2>Post</h2>
                    <div className="aboutbox" style={this.state.isOpenError ? { display: "none" } : { display: "block" }}>
                        <div></div>
                        <span>Engage with your followers in the Rovo app by sharing a post or a photo</span>
                        <div onClick={this.handleErrorOpen} className="createpost">
                            <Button text="Creat a post" />
                        </div>
                    </div>
                    <div className="background-post" style={this.state.isOpenError ? { display: "block" } : { display: "none" }}></div>
                    <div className="aboutbox group-post" style={this.state.isOpenError ? { display: "block" } : { display: "none" }}>
                        <div className="close-post" onClick={this.handlePopup}>
                            <Icon icon="cross" />
                        </div>
                        <div className="type-post">
                            <div>
                                <span><b>Greenvale Tennis Club</b></span>
                                <br />
                                <span>Only followers can see your post.</span>
                            </div>
                            <TextareaAutosize
                                rows={4}
                                placeholder="What's going on?"
                            />
                        </div>
                        <div className="btn-group-post">
                            <div className="add-photos">
                                <img src={"assets/image/addphoto.png"} />
                                <span>Add photos</span>
                            </div>
                            <div class="share-button">
                                <Button text="Share" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutbox">
                        <div className="title-post">
                            <div>
                            </div>
                            <div>
                                <span><b>Greenvale Tennis Club</b></span>
                                <br />
                                <span>1 day ago</span>
                            </div>
                            <div className="more-post">
                                <Icon icon="more" />
                            </div>
                        </div>
                        <div>
                            Come join us this Saturday for an evening of rallies, flash tournaments and prizes to be won!
                            Find out more here <b>www.greenvaletennis.com/saturdayfiesta</b>
                        </div>
                        <div className="photo-post">
                            <div className="btn-see">
                                See all photo
                            </div>
                            <img src={"https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/04/ThinkstockPhotos-513920615.jpg?fit=725%2C483"} />
                        </div>
                        <div className="group-status">
                            <div className="icon-post">
                                <span><img src={"assets/image/like.png"} /></span>
                                <span><img src={"assets/image/comment.png"} /></span>
                            </div>
                            <div className="like-post">
                                28 like
                            </div>
                        </div>
                        <div>
                            View 1 comment
                        </div>
                        <div className="comment">
                            <div>
                            </div>
                            <div>
                                <InputBox placeholder="Add a comment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post