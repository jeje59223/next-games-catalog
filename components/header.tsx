import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
import {
    signIn, 
    signOut,
    useSession
  } from 'next-auth/client'

export const Header = () => {
    const router = useRouter();
    const [ session, loading ] = useSession()

    const styles = {
        active: {
            color: "orange",
            textDecoration: "none"
        },
        link: {
            color: "white",
            opacity: "0.8",
            textDecoration: "none",
        },
        imageProfile: {
            borderRadius: "50px"
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
                            <li className="nav-link" style={router.pathname === "/platforms" || router.pathname === "/platform/[platform]" ? styles.active : styles.link}>Platforms</li>
                        </a>
                    </Link>
                    <Link href="/games" passHref>
                        <a className="nav-item">
                            <li className="nav-link" style={router.pathname === "/games" || router.pathname === "/game/[game]" ? styles.active : styles.link}>Games</li>
                        </a>
                    </Link>
                    {
                        session && session.user.email === "jcnockaert@hotmail.fr" ?
                        <Link href="/admin" passHref>
                            <a className="nav-item">
                                <li className="nav-link" 
                                style={router.pathname === "/admin" || 
                                router.pathname === "/platforms/new" || 
                                router.pathname === "/platform/update/[update]" || 
                                router.pathname === "/platform/delete/[delete]" ? styles.active : styles.link}>Admin</li>
                            </a>
                        </Link>
                        : null
                    }
                    {console.log(session)
                    }
                </ul>
                <div className="my-2 my-lg-0">
                    {!session && <>
                    <span className="mr-2">Not signed in</span>
                    
                    <button className="btn btn-success" onClick={signIn}>Sign in</button>
                    </>}
                    {session && <>
                    <span className="mr-2">{session.user.name}</span>
                    {
                        session.user.image ?
                        <img src={session.user.image} width="40px" style={styles.imageProfile} />
                        : null
                    }
                    <button className="btn btn-success ml-2" onClick={signOut}>Sign out</button>
                    </>}
                </div>
            </div>
        </nav>
    )
}
