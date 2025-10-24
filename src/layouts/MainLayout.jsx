import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes.js'
import styles from '@/layouts/MainLayout.module.css'
import logo from '@/shared/assets/logo.png'

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainLayoutContainer}>
      <header className={styles.header}>
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to={ROUTES.HOME} className={`navbar-brand ${styles.brand}`}>
              <img src={logo} alt="Logo" width="42" height="42" />
              <strong>Estimativa SP</strong>
            </Link>

            {/* Toggler (mobile) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Links colapsáveis */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to={ROUTES.HOME}
                    className={({ isActive }) => `nav-link ${isActive ? styles.activeLink : ''}`}
                  >
                    <strong>Home</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={ROUTES.CONTACT}
                    className={({ isActive }) => `nav-link ${isActive ? styles.activeLink : ''}`}
                  >
                    <strong>Contato</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={ROUTES.ABOUT}
                    className={({ isActive }) => `nav-link ${isActive ? styles.activeLink : ''}`}
                  >
                    <strong>Sobre</strong>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className={styles.mainLayoutContent}>{children}</main>
    </div>
  )
}
