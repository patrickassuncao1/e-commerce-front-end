import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Onload from '../components/Onload';
import useAuth from '../hooks/useAuth';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Shop from '../pages/Shop';
import ShopList from '../pages/ShopList';

const AppRoutes = () => {
    const { onLoading } = useAuth();

    if (onLoading) return <Onload />
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/item/:id' element={<Item />} />
                    <Route path='/shop/lista' element={<ShopList />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/registro' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;