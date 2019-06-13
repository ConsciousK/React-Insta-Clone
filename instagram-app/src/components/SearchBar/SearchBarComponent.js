import React from 'react';
import instagramlogo from '../../assets/instagram.png';
import './searchBar.css';
import logotext from '../../assets/iglogotext.png';
import igperson from '../../assets/igpersonicon.png';
import heart from '../../assets/heart.png';
import compass from '../../assets/compass.png';
const SearchBar = () => {
    return (
      <div className="searchbar">
        <div className="logocontainer">
          <img alt="logo" src={instagramlogo} className="logo" />
          <div className="logotext">instagram</div>

        </div>
        <div  className="searchinput">
          <input type="text" placeholder="Search" />
        </div>
        <div className="iconscontainer">
        <img alt="logo" src={compass} className="compass" />
        <img alt="logo" src={heart} className="heart" />
        <img alt="logo" src={igperson} className="person" />
        </div>
      </div>
    );
  };
  
  export default SearchBar;