import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <NavLink
        to="/overview"
        exact
        // style={Link}
        >
          Home
        </NavLink>
      </li>
      
      <li>
        <NavLink
        to="/deposit"
        exact
        // style={Link}
        >
          Deposit
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/withdraw"
        exact
        // style={Link}
        >
          Withdraw
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/transfer"
        exact
        // style={Link}
        >
          Transfer
        </NavLink>
      </li>

      { props.username ? 
      <li className="logout" onClick={ props.signOut }>
      <NavLink
      to="/sign-in"
      exact>
        Log Out
      </NavLink>
    </li>
    :
    <li>
        <NavLink
        to="/sign-in"
        exact
        // style={Link}
        >
          Sign in
        </NavLink>
      </li>
    }

    </ul>
  );
};

export default NavBar;
