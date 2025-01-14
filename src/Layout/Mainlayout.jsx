import { Outlet } from 'react-router-dom';
import Navber from '../pages/Share/Navber';

const Mainlayout = () => {
    return (
        <div>
           <Navber></Navber>
           <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;