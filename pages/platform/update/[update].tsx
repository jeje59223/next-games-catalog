import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";
import { getDatabase } from "../../../src/database";

const UpdatePlatform = ({ platform }) => {
    const [ name, setName ] = React.useState(platform.name)
    const [ slug, setSlug ] = React.useState(platform.slug)
    const [ logo, setLogo ] = React.useState(platform.platform_logo.url)
    return (
        <>
            <Head>
                <title>Update Platform</title>
            </Head>
            <Layout>
                <div className="container">
                    {/* {console.log(platform)} */}
                    <h1>Update platform</h1>
                    <form method="POST" action="/api/update-platform" className="bg-primary p-4 border border-primary rounded mt-5">
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
                            <input type="hidden" name="id" value={platform._id}></input>
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

export async function getServerSideProps (context) {
    const mongodb = await getDatabase();
    const gamesPlatform = context.params.update;
    // console.log("platform : " + context.params.update);

    const platform = await mongodb.db().collection("platforms").findOne({slug: gamesPlatform});
    
    return {
        props: {
            platform: JSON.parse(JSON.stringify(platform)),
        }
    }
}

export default UpdatePlatform;