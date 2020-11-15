import { Header } from "./header";
import Footer  from "./footer";

const Layout = ({children}) => {

   const styles = {
        page: {
            marginBottom: "100px",
            marginTop: "100px"
        }
    }


    return (
        <div style={styles.page}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;