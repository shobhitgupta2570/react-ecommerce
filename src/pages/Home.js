import Footer from "../features/common/footer";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
            
        </div>
     );
}

export default Home;