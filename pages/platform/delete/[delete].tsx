import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout";
import { getDatabase } from "../../../src/database";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const DeletePlatform = ({ platform }) => {
  return (
    <>
      <Head>
        <title>Delete</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>
              {
                  console.log(platform._id)
                  
              }
            Delete Platform :
            <span className="text-danger"> {platform.name}</span>
          </h1>
          <div>
            <Jumbotron>
              <h1>Warning</h1>
              <p>
                Are you sure you want to delete the platform <span className="font-weight-bolder badge badge-danger">{platform.name}</span>.
              </p>
              <div className="row text-center mt-4">
                <div className="col-6">
                    <form method="POST" action="/api/delete-platform">
                        <input type="hidden" name="id" value={platform._id}></input> 
                        <button type="submit" className="btn btn-success w-100"><i className="far fa-trash-alt"></i> Delete</button>
                    </form>
                    {/* <Button variant="success w-100">Validate</Button> */}
                </div>
                <div className="col-6">
                <Link href="/admin"> 
                    <Button variant="danger w-100">Cancel</Button>
                </Link>
                </div>
              </div>
            </Jumbotron>
          </div>
        </div>
        {console.log(JSON.stringify(platform))}
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const gamesPlatform = context.params.delete;

  const platform = await mongodb
    .db()
    .collection("platforms")
    .findOne({ slug: gamesPlatform });

  return {
    props: {
      platform: JSON.parse(JSON.stringify(platform)),
    },
  };
}

export default DeletePlatform;
