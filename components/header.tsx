import React from "react";
import Link from "next/link";
import axios from "axios";

export const Header = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/">
                <img src="https://img.icons8.com/fluent/48/000000/super-mario.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <Link href="/" passHref>
                        <li className="nav-item active">
                            <span className="nav-link">Accueil</span>
                        </li>
                    </Link>
                    <Link href="/platforms" passHref>
                        <li className="nav-item">
                            <span className="nav-link">Platforms</span>
                        </li>
                    </Link>
                    <Link href="/games" passHref>
                        <li className="nav-item">
                            <span className="nav-link">Games</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
