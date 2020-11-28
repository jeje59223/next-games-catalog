import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import { useRouter } from "next/router";

// const PaginationPage = () => {
//     const router = useRouter();
//   const paginationHandler = (page) => {
//     const currentPath = router.pathname;
//     const currentQuery = { ...router.query };
//     currentQuery.page = page.selected + 1;
//     router
//       .push({
//         pathname: currentPath,
//         query: currentQuery,
//       })
//       .then(() => window.scrollTo(0, 0));
//   };
//   return (
//     <MDBRow>
//       <MDBCol>
//         <MDBPagination circle>
//           <MDBPageItem disabled>
//             <MDBPageNav className="page-link">
//               <span>First</span>
//             </MDBPageNav>
//           </MDBPageItem>
//           <MDBPageItem disabled>
//             <MDBPageNav className="page-link" aria-label="Previous">
//               <span aria-hidden="true">&laquo;</span>
//               <span className="sr-only">Previous</span>
//             </MDBPageNav>
//           </MDBPageItem>
//           <MDBPageItem active>
//             <MDBPageNav className="page-link">
//               1 <span className="sr-only">(current)</span>
//             </MDBPageNav>
//           </MDBPageItem>
          
//           <MDBPageItem>
//             <MDBPageNav className="page-link">
//               &raquo;
//             </MDBPageNav>
//           </MDBPageItem>
//           <MDBPageItem>
//             <MDBPageNav className="page-link">
//               Last
//             </MDBPageNav>
//           </MDBPageItem>
//         </MDBPagination>
//       </MDBCol>
//     </MDBRow>
//     )
// }

// export default PaginationPage;