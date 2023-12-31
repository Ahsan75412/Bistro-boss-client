import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();

    //admin dashboard code here!

    // TODO: load data from the server to have dynamic isAdmin based on data 
    // const isAdmin = true;

    const [isAdmin] = useAdmin();



    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                   {/* Page content here */}
                   <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
              

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  ">

                    {/* admin and user conditional rendering code here! */}

                    {
                        isAdmin ? <>

                            {/* Admin side bar content here */}
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>


                        </>  : <>

                            {/* User side bar content here */}
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>

                        </>
                    }






                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHome></FaHome> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHome></FaHome> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;