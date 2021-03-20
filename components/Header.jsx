import React from 'react'
import style from '../styles/header.module.css'
import Link from 'next/link'

export default function Header({children}){
    return (
        <header className={style.header}>
            <Link href="/reg">
                <a className="nav-block">Registration</a>
            </Link>
            <Link href="/">
                <a className="nav-block">Login</a>
            </Link>
        </header>
    )
}