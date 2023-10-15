import Footer from "../features/common/footer";
import Navbar from "../features/navbar/Navbar"
import ProductDetail from "../features/product-list/components/ProductDetail";


function ProductDetailPage() {
    return ( 
        <>
        <Navbar></Navbar>
        <ProductDetail></ProductDetail>
        <Footer></Footer>
        </>
     );
}

export default ProductDetailPage;