import styles from '../styles/Home.module.css';
import Head from "next/head";
import Layout  from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil Games-Catalog</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>Accueil Games-Catalog</h1>
        </div>
      </Layout>
    </>
  )
}
