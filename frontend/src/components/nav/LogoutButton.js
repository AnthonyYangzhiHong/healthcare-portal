import React from 'react';

import './LogoutButton.css';

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <li className="cursor-pointer">
        <a className="user-profile dropdown-toggle" onClick={() => this.toggle()}>
          <span className="fa fa-user" />
          &emsp;testuser&emsp;
          <span className="caret" />
        </a>
        <ul className={this.state.dropdownOpen ? 'dropdown-menu display-block' : 'hidden'}>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </li>
    );
  }
}
