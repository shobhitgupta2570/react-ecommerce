import NavBar from "../features/navbar/Navbar";
import AdminOrders from "../features/admin/components/AdminOrders";

function AdminOrderspage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrderspage;