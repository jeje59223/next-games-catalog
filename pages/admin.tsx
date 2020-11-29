import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { getDatabase } from "../src/database";
import { Table } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import SearchBarSection from "../components/searchBar";

const Admin = ({ platforms, currentPage, pageCount, platformsGames }) => {
  const router = useRouter();
  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router
      .push({
        pathname: currentPath,
        query: currentQuery,
      })
      .then(() => window.scrollTo(0, 0));
  };
  const styles = {
    icons: {
      width: "20px",
      margin: "10px",
    },
    form: {
      marginBottom: "70px",
    },
  };

  return (
    <>
      <Head>
        <title>Page Admin</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>Your Administrator Area</h1>
          <SearchBarSection />
          <Table striped bordered hover variant="dark" className="mt-2">
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
              {platformsGames.map((platform, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{platform.name}</td>
                    <Link
                      href="/platform/[platform]"
                      as={`/platform/${platform.slug}`}
                    >
                      <td className="text-center">
                        <a href="/" className="btn btn-primary">
                          Details
                        </a>
                      </td>
                    </Link>
                    <Link
                      href="/platform/update/[update]"
                      as={`/platform/update/${platform.slug}`}
                    >
                      <td className="text-center">
                        <a className="btn btn-warning">Update</a>
                      </td>
                    </Link>
                    <Link
                      href="/platform/delete/[delete]"
                      as={`/platform/delete/${platform.slug}`}
                    >
                      <td className="text-center">
                        <a className="btn btn-danger">Delete</a>
                      </td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
            {/* <PaginationPage /> */}
            <div className="paginateCenter">
              <ReactPaginate
                onPageChange={paginationHandler}
                initialPage={currentPage - 1}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                previousLabel="Precedent"
                nextLabel="Suivant"
                activeClassName="activated bg-white p-3 m-1 text-dark font-weight-bold"
                breakLabel="..."
                pageClassName="paginate"
                containerClassName="custom-paginate bg-primary"
              />
            </div>
          </div>
          <Link href="/platform/create/new-platform">
            <div className="text-center">
              <button className="btn btn-success w-100 font-weight-bolder">
                <img
                  style={styles.icons}
                  src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"
                />
                Add Platform
              </button>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const searchwithRegex = context.query.search;
  const page = context.query.page || 1;
  const nPerPage = 5  ;

  const platformsGames = await mongodb
    .db()
    .collection("platforms")
    .find({ name: new RegExp(searchwithRegex, "i") })
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();
    

  const platforms = await mongodb.db().collection("platforms").find().toArray();

  const nbPlatforms = await mongodb.db().collection("platforms").find().count();

  return {
    props: {
      platforms: JSON.parse(JSON.stringify(platforms)),
      platformsGames: JSON.parse(JSON.stringify(platformsGames)),
      pageCount: Math.ceil(nbPlatforms / nPerPage),
    },
  };
}

export default Admin;
