import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css'
const Header: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link href="/" className={styles.nav_logo}>Houlob <i className='bx bx-camera-home'></i></Link>
            <div className={styles.nav_menu}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link href="/" className={styles.nav_link}>
                            <i className='bx bx-home-alt-2' ></i>
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="/" className={styles.nav_link}>
                            <i className='bx bx-building-house' ></i>
                            <span>Residencias</span>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="" className={styles.nav_link}>
                            <i className='bx bx-badge-check' ></i>
                            <span>Valoraciones</span>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href="" className={styles.nav_link}>
                            <i className='bx bx-phone' ></i>
                            <span>Contacto</span>
                        </Link>
                    </li>
                   
                </ul>
            </div>

            <Link href="">Suscribete</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
