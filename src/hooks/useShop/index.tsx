import { useContext } from 'react';
import { ShopContext } from '../../context/ShopProvider';

const useShop = () => {

    const { addItem, shop, removeItem } = useContext(ShopContext);

    return { addItem, shop, removeItem };
}

export default useShop;