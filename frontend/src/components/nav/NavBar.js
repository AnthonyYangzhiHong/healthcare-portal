import React from 'react';

import LogoutButton from './LogoutButton';

export default function NavBar() {
  return (
    <div className="top_nav">
      <div className="nav_menu">
        <nav className="nav">
          <ul className="nav navbar-nav navbar-right">
            <LogoutButton />
          </ul>
        </nav>
      </div>
    </div>
  );
}
