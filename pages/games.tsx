import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";

const Games = ({data}) => {

    const styles = {
        card: {
            width: "18rem"
        }
    }

    return (
        <>
            <Head>
                <title>List Games</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>List Games</h1>
                    <div className="row d-flex justify-content-center">
                    {
                        data.map(game => (
                            <div className="card mr-3 mb-3" style={styles.card} key={game._id}>
                                <img src={game.cover.url} className="card-img-top" alt={game.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{game.name}</h5>
                                    <p className="card-text">{game.summary.substr(0, 100)}...</p>   
                                </div>
                                <div className="card-footer text-muted text-center">
                                    <Link href="/game/[game]" as={`/game/${game.slug}`}>
                                        <a href="#" className="btn btn-primary w-100">Details</a>
                                    </Link>
                                </div>
                            </div>        
                        ))
                    }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps (context) {
    const url = "https://happy-team-games.herokuapp.com/games";
    const { data } = await axios.get(url, {
        headers: { Accept: "application/json" },
    });
    
    return {
        props: {
            data
        }
    }
}

export default Games;
