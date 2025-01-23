import { Outlet } from 'react-router-dom';
import Navber from '../pages/Share/Navber';
import Footer from '../pages/Share/Footer';

const Mainlayout = () => {
    return (
        <div>
           <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Mainlayout;