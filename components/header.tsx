import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";

export const Header = () => {
    const router = useRouter();

    const styles = {
        active: {
            color: "orange",
            textDecoration: "none"
        },
        link: {
            color: "white",
            opacity: "0.8",
            textDecoration: "none"
        }
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link href="/">
                <a>
                    <img src="https://img.icons8.com/fluent/48/000000/super-mario.png"/>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <Link href="/" passHref >
                        <a className="nav-item">
                            <li className="nav-link " style={router.pathname === "/" ? styles.active : styles.link}>Home</li>
                        </a>
                    </Link>
                    <Link href="/platforms" passHref>
                        <a className="nav-item">
                            <li className="nav-link" style={router.pathname === "/platforms" ? styles.active : styles.link}>Platforms</li>
                        </a>
                    </Link>
                    <Link href="/games" passHref>
                        <a className="nav-item">
                            <li className="nav-link" style={router.pathname === "/games" ? styles.active : styles.link}>Games</li>
                        </a>
                    </Link>
                    <Link href="/admin" passHref>
                        <a className="nav-item">
                            <li className="nav-link" style={router.pathname === "/admin" ? styles.active : styles.link}>Admin</li>
                        </a>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
