import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { getDatabase } from "../src/database";
import Link from "next/link";

const Platforms = ({platforms}) => {

    const styles = {
        card: {
            maxWidth: 20
        },
        titre: {
            fontSize: "40px"
        },
        image: {
            width: "200px"
        }
    }

    return (
        <>
            <Head>
                <title>List Platforms</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>List Platforms</h1>
                    {
                        platforms.map(platform => (
                            <div className="card text-white mb-3" key={platform._id}>
                                <div className="card-header text-center bg-primary" style={styles.titre}>{platform.name}</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4 text-center ">
                                                <img src={platform.platform_logo.url} style={styles.image}/>  
                                        </div>
                                        <div className="col-8 p-3">
                                            <h4  className="card-title">{platform.name}</h4>
                                            <p className="card-text">{platform.summary}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center bg-dark">
                                    <Link href="/platform/[platform]" as={`/platform/${platform.slug}`}>
                                        <button className="btn btn-outline-light w-100">Details</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps () {
    const mongodb = await getDatabase();

    const platforms = await mongodb.db().collection("platforms").find().toArray();

    return {
        props: {
            platforms: JSON.parse(JSON.stringify(platforms))
        }
    }

}

export default Platforms;