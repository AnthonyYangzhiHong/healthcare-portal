import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../public/comcast_logo_4.jpg';
import './Sidebar.css';
import routes from '../../Routes';

class RouteSidebar extends Component {
  renderRoutes() {
    return (
      <ul className="nav side-menu">
        {routes.map((route) => (
          <li key={route.path} className={location.pathname === route.path ? 'active' : ''}>
            <Link to={route.path}>
              <i className={'fa ' + route.icon} />
              {route.text}
              {route.subroutes != null && <span className="fa fa-chevron-down" />}
            </Link>
            {route.subroutes != null && this.renderSubroutes(route.subroutes)}
          </li>
        ))}
      </ul>
    );
  }

  renderSubroutes(routes) {
    return (
      <ul className="nav child_menu" style={{display: 'block'}}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.text}</Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title">
            <Link to="/">
              <img className="logo-header logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="clearfix" />
          <div className="main_menu_side hidden-print main_menu">
            <div className="menu_section active">{this.renderRoutes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RouteSidebar;
