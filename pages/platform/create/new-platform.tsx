import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";

const CreatePlatform: React.FC = () => {
    const [ name, setName ] = React.useState("")
    const [ slug, setSlug ] = React.useState("")
    const [ logo, setLogo ] = React.useState("")

    const styles = {
        formulaire: {
            opacity: "0.9"
        }
    }

    return (
        <>
            <Head>
                <title>Add platform</title>
            </Head>
            <Layout>
                <div className="container">
                    <h1>Add platform</h1>
                    <form method="POST" action="/api/new-platforms" className="bg-primary p-4 border border-primary rounded mt-5">
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="platform-name">Name</label>
                                <input
                                className="form-control"  
                                id="platform-name" 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="platform-slug">Slug</label>
                                <input
                                className="form-control"  
                                id="platform-slug" 
                                type="text" 
                                name="slug" 
                                value={slug} 
                                onChange={(event) => setSlug(event.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="platform-logo">Logo</label>
                                <input
                                className="form-control" 
                                id="platform-logo" 
                                type="text" 
                                name="logo" 
                                value={logo} 
                                onChange={(event) => setLogo(event.target.value)} 
                                />
                            </div>
                        </fieldset>
                        <div className="row text-center mt-4">
                            <div className="col-6">
                                <button className="btn btn-success text-center w-100" id="validateAdd" >Validate</button>
                            </div>
                            <div className="col-6">
                                <Link href="/admin">
                                    <button type="submit" className="btn btn-danger text-center w-100">Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default CreatePlatform;