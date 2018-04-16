import React, { Component } from 'react'
import { Icon, Navbar, NavbarGroup, NavbarHeading, Popover, Button, Menu, Position, Alignment, MenuDivider, MenuItem } from '@blueprintjs/core'
import './Navbar.css'
import logonavbar from '../../assets/image/logo-navbar.png'
import avt from '../../assets/image/maxresdefault.jpg'

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'ANALYTICS',
        link: '',
        icon: '/assets/image/menu1.svg'
      }, {
        text: 'ABOUT',
        link: '',
        icon: '/assets/image/menu2.jpg'
      }, {
        text: 'VENUES',
        link: '',
        icon: '/assets/image/menu3.svg'
      },{
        text: 'POSTS',
        link: '',
        icon: '/assets/image/menu4.jpg'
      },{
        text: 'RATINGS & REVIEWS',
        link: '',
        icon: '/assets/image/menu5.svg'
      },{
        text: 'DASHBOARD',
        link: '',
        icon: '/assets/image/menu6.svg'
      }, ]
    }
  }
  render() {
    let links = this.state.links.map((link) => 
    <ul>
      <span><img src={link.icon}/></span>
      <span className="menu-name">{link.text}</span>
    </ul>);

    return (
        <div>
          { links }
        </div>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.state.isOpen === true && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';
    return (
      <div>
        <Navbar className="Navbar">
          <NavbarGroup align={Alignment.LEFT}>
            <Icon icon="menu" onClick={this._menuToggle} />
            <NavbarHeading style={{ marginLeft: 20 }}>
              <span><img src={logonavbar} width="100" /></span>
              <span >for Greenvale Tennis Club</span>
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Popover
              content={
                <Menu>
                  <MenuItem text="Log out" />
                </Menu>}
              position={Position.BOTTOM}>
              <div className="AccountButton">
                <span>
                  <img src={avt} width="30" height="30" />
                </span>
                <span className="AccountName">Gaben</span>
                <Icon className="DropdownIcon" icon="caret-down" />
              </div>
            </Popover>
          </NavbarGroup>
          <div id="menu" className={this.state.isOpen ? 'isopen' : ''} ref={this.setWrapperRef}>
            <div className="side-nav-logo">
              Rovo Logo
            </div>
            <MenuLinks menuStatus={ menuStatus }/>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header