import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

const CreatePlatform = () => {

    const styles = {
        bouton: {
            width: "45%"
        }
    }

    return (
        <>
            <Head>
                <title>Add platform</title>
            </Head>
            <Layout>
                <div className="container">
                    <form id="addForm">
                        <fieldset>
                            <legend>Add platform</legend>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="logo">Logo</label>
                                <input type="text" className="form-control" id="logo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="summary">Summary</label>
                                <input type="text" className="form-control" id="summary" />
                            </div>
                        </fieldset>
                        <div className="text-center">
                            <button style={styles.bouton} className="btn btn-success text-center mt-2 mr-2" id="validateAdd" >Validate</button>
                            <Link href="/admin">
                                <button style={styles.bouton} className="btn btn-danger text-center mt-2">Anuler</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default CreatePlatform;