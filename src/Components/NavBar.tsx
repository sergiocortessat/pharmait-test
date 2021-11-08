/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/NavBar.scss';

interface NavBarSelector {
    data: {
        userData: {
            id: number,
            organization_id: number,
            first_name: string,
            last_name: string,
            profile_img: string,
        }
    }
}

const NavBar = () => {
  const { userData } = useSelector((state:NavBarSelector) => state.data);
  const {
    id, organization_id, first_name, last_name, profile_img,
  } = userData;
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://api-test.pharmit.de/static/pharm-it-logo.jpg"
          alt="pharmait-logo"
        />

        <p>
          Company organization id:
          {' '}
          <span>{organization_id}</span>
        </p>
      </div>
      <div className="navbar-right">
        <p>{`${first_name} ${last_name}`}</p>
        <img src={profile_img} alt="user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
