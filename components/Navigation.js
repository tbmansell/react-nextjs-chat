import React from "react";
import Link from "next/link"
import styles from "../styles/Menu.module.css"

const signedIn = () => false

const menuItems = [
    {
        label: 'Posts',
        href: '/',
        show: () => true
    },
    {
        label: 'Register',
        href: '/register',
        show: () => !signedIn()
    },
    {
        label: 'Login',
        href: '/login',
        show: () => !signedIn()
    },
];

function MenuItemList() {
    const listItems =  menuItems.map(item =>
        <li className={styles.menu}><Link href={item.href}><a>{item.label}</a></Link></li>
    );

    return (
        <ul className="nav nav-pills">{listItems}</ul>
    )
}

function SignedInUser() {
    return (
        <>
            Signed in as
            <strong className="currentUser">user.username</strong>
            <br/>
            <sup className="date">user.signedIn</sup>
        </>
    )
}

function Logout() {
    return <Link href="/logout"><a>Logout</a></Link>
}

function Navigation() {
    return (
        <header className="header">
            <nav className="navbar navbar-default">
                <div className="container">
                    <p className="navbar-text navbar-left">
                        {signedIn() && <SignedInUser/>}
                    </p>
                     <MenuItemList/>
                    <p className="navbar-text navbar-left">
                        {signedIn() && <Logout/>}
                    </p>
                </div>
            </nav>
            <style jsx>{`
                header {
                    width: 100%;
                }
                nav {
                    background-color: #ddd;
                    margin-bottom: 20px;
                }
            `}</style>
        </header>
    )
}

export default Navigation
