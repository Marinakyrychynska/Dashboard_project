import React from "react";
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { ReactComponent as Key } from '../../images/key-square.svg'
import { ReactComponent as Square } from '../../images/3d-square.svg';
import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as Wallet } from '../../images/wallet-money.svg';
import { ReactComponent as Shape } from '../../images/discount-shape.svg';
import { ReactComponent as Help } from '../../images/message-question.svg';
import { ReactComponent as Row } from '../../images/chevron-right.svg';




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
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/product" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <Square className="icon" alt="square icon" />
                  <p className="nav__link--name">Product</p>
                </div>
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/customers" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <User className="icon" alt="square icon" />

                  <p className="nav__link--name">Customers</p>
                </div>
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/income" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <Wallet className="icon" alt="square icon" />
                  <p className="nav__link--name">Income</p>
                </div>
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/promote" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <Shape className="icon" alt="square icon" />
                  <p className="nav__link--name">Promote</p>
                </div>
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/help" className="nav__link">
              <div className="nav__link-container">
                <div className="nav__link--group">
                  <Help className="icon" alt="square icon" />
                  <p className="nav__link--name">Help</p>
                </div>
                <Row className="icon--row" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}