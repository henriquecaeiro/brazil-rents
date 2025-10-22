import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes.js'
import styles from '@/layouts/MainLayout.module.css'
import logo from '@/shared/assets/logo.png'

export default function MainLayout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.topbar}`}>
          <Link to={ROUTES.HOME} className={styles.brand}>
            <img src={logo} alt="Logo" width="42" height="42" />
            <strong>Estimativa SP</strong>
          </Link>

          <nav className={`nav ${styles.navRight}`}>
            <NavLink
              className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
              to={ROUTES.HOME}
            >
              <strong>Home</strong>
            </NavLink>
            <NavLink
              className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
              to={ROUTES.POSTS}
            >
              <strong>Posts</strong>
            </NavLink>
            <NavLink
              className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
              to={ROUTES.ABOUT}
            >
              <strong>About</strong>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>
    </div>
  )
}
