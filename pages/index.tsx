import styles from '../styles/Home.module.css';
import Head from "next/head";
import Layout  from "../components/layout";

export default function Home() {

  const styles = {
    image: {
      width: "100%"
    },
    home: {
      backgroundImage: "url(https://snappygoat.com/o/ee85e2c2e41b4c3da574712e37920b745a7cd5dd/Dragon_Ball_Z_Analise_Imagem_Saga_Freeza.jpg)"
    }
  }
  

  return (
    <>
      <Head>
        <title>Home Games-Catalog</title>
      </Head>
      <Layout>
        <div className="container accueil mt-3" >
          <h1 className="text-center">Welcome to your Games-Catalog</h1>
        </div>
        <div>
          <img src="https://snappygoat.com/o/ee85e2c2e41b4c3da574712e37920b745a7cd5dd/Dragon_Ball_Z_Analise_Imagem_Saga_Freeza.jpg" style={styles.image} />
        </div>
      </Layout>
    </>
  )
}
