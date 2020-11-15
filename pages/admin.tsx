import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { getDatabase } from "../src/database";
import { Table } from "react-bootstrap";
import Link from "next/link";

const Admin = ({platforms}) => {

    const styles = {
        icons: {
            width: "30px",
            margin: "10px"
        },
        form: {
            marginBottom: "70px"
        }
    }

    return (
        <>
            <Head>
                <title>Page Admin</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>Votre espace Administrateur</h1>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className="text-center">
                            <th></th>
                            <th>Platfoms</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                platforms.map((platform, index) => {
                                    return (
                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{platform.name}</td>
                                        <Link href="/platform/[platform]" as={`/platform/${platform.slug}`}>
                                            <td className="text-center"><a href="/" className="btn btn-primary">Details</a></td>
                                        </Link>
                                        <td className="text-center"><a className="btn btn-warning">Update</a></td>
                                        <td className="text-center"><a className="btn btn-danger">Delete</a></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Table>
                    <Link href="/createPlatform" >
                        <div className="text-center">
                            <button className="btn btn-success w-100"><img style={styles.icons} src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"/>Add</button>
                        </div>
                    </Link>
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

export default Admin;