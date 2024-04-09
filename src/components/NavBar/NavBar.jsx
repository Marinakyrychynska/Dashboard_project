import React from "react";
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import {ReactComponent as Key} from '../../images/key-square.svg'
import square from '../../images/3d-square.svg';
import user from '../../images/user.svg';
import wallet from '../../images/wallet-money.svg';
import shape from '../../images/discount-shape.svg';
import message from '../../images/message-question.svg';




export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img " src={logo} alt="icon dashboard" />
        <div className="header__logo-content">
          <p className="header__logo-inscript">Dashboard</p>
          <p className="header__logo-code">v.01</p>
        </div>
      </div>

      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/dashboard"
              className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <Key className="icon" alt="square icon" />
                  <p className="nav__link--name">Dashboard</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/product" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <img src={square} className="icon icon--link" alt="square icon" />
                  <p className="nav__link--name">Product</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/customers" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <img src={user} className="icon icon--link" alt="square icon" />
                  <p className="nav__link--name">Customers</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/income" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <img src={wallet} className="icon" alt="square icon" />
                  <p className="nav__link--name">Income</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/promote" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <img src={shape} className="icon" alt="square icon" />
                  <p className="nav__link--name">Promote</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/help" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <img src={message} className="icon" alt="square icon" />
                  <p className="nav__link--name">Help</p>
                </div>
                <div className="icon--row"></div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}