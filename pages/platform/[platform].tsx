import React from "react-bootstrap";
import Platforms from "../platforms";
import {useRouter} from "next/router";
import { getDatabase } from "../../src/database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Layout from "../../components/layout";
import axios from "axios";
import Link from "next/link";

const Platform = ({platform, games}) => {
    const router = useRouter();
    console.log(platform);
    // console.log(games);
    

    const styles = {
        logo: {
            width: "200px"
        },
        titre: {
            fontSize: "60px"
        }
    }
    
    return (
        <Layout>
            <div className="container mt-5">
                <Card className="text-center">
                    <Card.Header style={styles.titre}>{platform.name}</Card.Header>
                        <Card.Body>
                        <div className="row">
                            <div className="col-4">
                                <img style={styles.logo} src={platform.platform_logo.url} />
                            </div>
                            <div className="col-8">
                                <Card.Title></Card.Title>
                                <Card.Text>
                                {platform.summary}
                                </Card.Text>
                                <p className="text-success">{platform.connectivity}</p>
                                <p className="text-success">{platform.cpu}</p>
                                <p className="text-success">{platform.media}</p>
                            </div>
                        </div>
                        </Card.Body>
                    <Card.Footer className="text-muted"><a href={platform.url}>{platform.url}</a></Card.Footer>
                </Card>
                <div className="text-center mt-5">
                    <h2>Les jeux pour la {platform.name}</h2>
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            games.map(game => {
                                return (
                                <div key={game.cover.url} className="m-2">
                                    <Link href="/game/[game]" as={`/game/${game.slug}`}>
                                        <img src={game.cover.url} />
                                    </Link>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export async function getServerSideProps (context) {
    const mongodb = await getDatabase();
    const gamesPlatform = context.params.platform;
    console.log("platform : " + context.params.platform);


    const platform = await mongodb.db().collection("platforms").findOne({slug: gamesPlatform});
    const games = await mongodb.db().collection("games").find({"platforms.slug": gamesPlatform}).toArray();
    console.log("LES JEUX : "+ JSON.stringify(games))
    
    return {
        props: {
            platform: JSON.parse(JSON.stringify(platform)),
            games: JSON.parse(JSON.stringify(games))
        }
    }
}

export default Platform;

