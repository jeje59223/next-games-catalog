import React from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Layout from "../../components/layout";
import Head from "next/head";
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from "react-bootstrap/ProgressBar";
import context from "react-bootstrap/esm/AccordionContext";


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
    let progressInstance = null;
    data.total_rating ?
    progressInstance = data.total_rating.toFixed(2) : progressInstance = null;
    
    return (
        <>
        {
            data && (
                <>
                <Head>
                <title>{data.name}</title>
                </Head>
                <Layout>
                <div className="container mt-5">
                    <div className="card mt-5">
                        <div className="card-header text-center" style={styles.titre}>
                                    {data.name}
                        </div>
                        <div>
                            <div className="card-body row">
                                <div className="col col-md-4 text-center d-flex">
                                    <img className="align-self-center" src={data.cover.url} />
                                </div>
                                <div className="col col-md-8">
                                    <h6>Available on :</h6>
                                    {
                                        platforms.map((platform, index) => {
                                            return (
                                                <span key={index} className="badge badge-primary mr-3 mt-2">{platform.name}<img key={index} className="ml-2" src={platform.platform_logo.url} style={styles.logo}/></span>
                                            )
                                        })
                                    }
                                    <h6 className="mt-4">Total rating :</h6>
                                    {
                                        data.total_rating ?
                                        <ProgressBar now={progressInstance} label={`${progressInstance}%`} className="stripped" />
                                        : <p className="text-warning">There is no rating for this game</p>
                                    }
                                         
                                    <h6 className="mt-4">Genres :</h6>
                                    {
                                        genres.map((genre, index) => {
                                            return (
                                            <span key={index} className="badge badge-primary mr-2">{genre.name}</span>
                                            )
                                        })
                                    }
                                 </div>   
                                    <p className="card-text m-3">{data.summary}</p>
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