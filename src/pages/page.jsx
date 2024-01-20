import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homelayout from './Homelayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Error from './Error_2.jsx';
import About from './About';
import NewsLetter from './Newsletter.jsx';
import Landing from './Landing.jsx';
import DetailsPage from './DetailsPage.jsx';

import { loader as landingLoader } from './Landing.jsx';
import { loader as detailsLoader } from './DetailsPage.jsx';

const router = createBrowserRouter([
       {
              path: '/',
              element: <Homelayout />,
              errorElement: <ErrorPage />,
              children: [
                     {
                            index:true,
                            loader: landingLoader,
                            element: <Landing />,
                            errorElement: <Error />,
                     },
                     {
                            path: '/:id',
                            index:true,                            
                            loader: detailsLoader,
                            element: <DetailsPage />,
                            errorElement: <ErrorPage />,
                     },
                     {
                            path: '/newsletter',
                            element: <NewsLetter />,
                     }
              ],
       },
       {
              path: '/about',
              element: <About />,
       },
]);
export const PageRouter = ()=>{
       return<RouterProvider router={router}/>;
};
// export default PageRouter;