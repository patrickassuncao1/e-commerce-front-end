import { MemoryRouter } from 'react-router-dom';
import Cart from '../../../components/Cart';
import Footer from '../../../components/Footer';
import Login from '../../../pages/Login';
import Register from '../../../pages/Register';

export const FooterTestRouter = () => {
    const initial = '/';
    return (
        <MemoryRouter initialEntries={[initial]}>
            <Footer />
        </MemoryRouter>
    );
}

export const LoginTestRoute = () => {
    const initial = '/login';
    return (
        <MemoryRouter initialEntries={[initial]}>
            <Login />
        </MemoryRouter>
    );
}

export const RegisterTestRoute = () => {
    const initial = '/registro';
    return (
        <MemoryRouter initialEntries={[initial]}>
            <Register />
        </MemoryRouter>
    );
}

export const CartRoute = () => {
    const initial = '/';
    return (
        <MemoryRouter initialEntries={[initial]}>
            <Cart />
        </MemoryRouter>
    );
}