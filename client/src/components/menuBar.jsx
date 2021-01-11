import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import 'rsuite/dist/styles/rsuite-default.css';
import './menuBar.scoped.scss'
import '../../public/LOGOFINAL.svg'
// import { AutoComplete, InputGroup, Icon } from 'rsuite';

import SearchBar from './searchbar.jsx'


const styles = {
    width: 100,
    marginBottom: 10
  };
  
  const data = [
    'HYPER Advertiser',
    'HYPER Web Analytics',
    'HYPER Video Analytics',
    'HYPER DMP',
    'HYPER Ad Serving',
    'HYPER Data Discovery'
  ];


// import { Nav, Dropdown } from 'rsuite';

const MenuBar = () => {
    return (
        <div className="outerContainer">
            <div className="innerLeft">
                <img src="LOGOFINAL.svg" alt="Kiwi standing on oval" className="logo" />
                <h1 className="metascoop">METASCOOP</h1>
            </div>
            <div className="innerMiddle">
                <div className="searchbar">
                 <SearchBar />
                </div>
            </div>
            <div className="innerRight">
                <h1 className="item">login</h1>
                <h1 className="item">Signup</h1>
                <span className="icon">
                    <FontAwesomeIcon icon={faUser} size="3x" className="icons" />
                </span>
            </div>
        </div>
    )
}

export default MenuBar