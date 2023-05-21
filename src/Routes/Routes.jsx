import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import About from '../pages/Home/About/About';
import Toycars from '../pages/Home/Toys/toycars';
import Login from '../pages/Home/Login/Login';
import SignUp from '../pages/Home/SignUp/SignUp';



    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/toycars',
                    element: <Toycars></Toycars>
                }
            ]
        }
    ]);


export default router;