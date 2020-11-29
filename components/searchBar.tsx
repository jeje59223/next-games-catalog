import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchBarSection = () => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <MDBCol>
          <form
            method="GET"
            className="form-inline mt-4 w-100 d-flex justify-content-center"
            action="/admin"
          >
           <i className="fas fa-search"></i>
            <input
              className="form-control form-control-sm ml-3 w-50"
              type="text"
              placeholder='Search 🔎'
              aria-label="Search"
              name="search"
            />
          </form>
        </MDBCol>
      </div>
    </>
  );
};
export default SearchBarSection;
