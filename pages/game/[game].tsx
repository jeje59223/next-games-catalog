import React from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Layout from "../../components/layout";
import Head from "next/head";
import Carousel from 'react-bootstrap/Carousel';


const styles = {
    logo: {
        width: "40px"
    },
    titre: {
        fontSize: "40px"
    }
}

const Game = ({data}) => {
    // console.log(data);
    // console.log(data.genres[0].name);
    const genres = data.genres;
    const platforms = data.platforms
    const screenshots = data.screenshots;
    
    return (
        <>
        {
            data && (
                <>
                <Head>
                <title>{data.name}</title>
                </Head>
                <Layout>
                <div className="container">
                    <div className="card mt-5">
                        <div className="card-header text-center" style={styles.titre}>
                            <div className="row">
                                <div className="col-10">
                                    {data.name}
                                </div>
                                <div className="col-2">
                                    {
                                        platforms.map((logo, index) => {
                                            return (
                                                <img key={index} className="mr-2" src={logo.platform_logo.url} style={styles.logo}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card-body row">
                                <div className="col-4 text-center">
                                    <img src={data.cover.url} />
                                </div>
                                <div className="col-8">
                                    <h5 className="card-title">{data.name}
                                    {
                                        platforms.map((platform, index) => {
                                            return (
                                                <span key={index} className="badge badge-primary m-3">{platform.name}</span>
                                            )
                                        })
                                    }
                                    </h5>
                                    <p className="card-text">{data.summary}</p>
                                    {
                                        genres.map((genre, index) => {
                                            return (
                                            <span key={index} className="badge badge-primary mr-2">{genre.name}</span>
                                            )
                                        })
                                    }                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                    data.screenshots ? 
                    <Carousel>
                            {
                                screenshots.map(screen => {
                                    return (
                                    <Carousel.Item key={screen.url}>
                                        <img
                                        className="d-block w-100"
                                        src={screen.url}
                                        alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    )
                                })
                            }
                    </Carousel>
                    : null }
                </div>
            </Layout>
        </>
    )
}
                </>
            )
        }
            

export async function getServerSideProps(context) {
    const slug = context.params.game;
    const url = "https://happy-team-games.herokuapp.com/games/";
    const {data} = await axios.get(url + slug, {
        headers: { Accept: "application/json" },
    });

    return {
        props: {
            data
        }
    }
}

export default Game;