// import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import  { Outlet } from 'react-router-dom';

const Homelayout = () => {
       return(
              <div>
                     <Navbar />
                     <Outlet />
              </div>
       );
}; export default Homelayout;