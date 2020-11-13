import React from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Layout from "../../components/layout";
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
    console.log(data);
    // console.log(data.genres[0].name);
    const genres = data.genres;
    const platforms = data.platforms
    const screenshots = data.screenshots;
    console.log("logo : " + data.platforms[0].platform_logo.url)
    
    return (
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
                                    platforms.map(logo => {
                                        return (
                                            <img className="mr-2" src={logo.platform_logo.url} style={styles.logo}/>
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
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {
                            screenshots.map((screen,index) => {
                                return (
                                    index === 0 ? 
                                    <div className="carousel-item active">
                                        <img src={screen.url} className="d-block w-100" alt="..." />
                                    </div>
                                    :
                                    <div className="carousel-item">
                                        <img src={screen.url} className="d-block w-100" alt="..." />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                : null }
            </div>
        </Layout>
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