import { createContext, ReactNode, useState } from "react";
import { ContextTypeShop, productType, shopItemType, shopType } from "../../@types";

type ShopProviderType = {
    children: ReactNode
}

export const ShopContext = createContext<ContextTypeShop>({} as ContextTypeShop);

const ShopProvider = ({ children }: ShopProviderType) => {
    const [shopItem, setShopItem] = useState<shopItemType>({ products: [], total: 0 });

    const addItem = (product: productType) => {

        let total = 0;
        let boolean = false;

        for (const item of shopItem.products) {
            if (item.id === product.id) {
                boolean = true;
                break;
            }
        }

        const newItem = boolean ? shopItem.products.map((item) => {
            return item.id === product.id ? { ...item, qnt: item.qnt + 1 } : item;
        }) : [...shopItem.products, { ...product, qnt: 1 }] as shopType[];

        for (const item of newItem) {
            total = total + item.qnt;
        }

        setShopItem({ products: newItem, total: total });

    };

    const removeItem = (product: shopType) => {
        let total = 0;

        const removeItem = product.qnt !== 1 ? shopItem.products.map((item) => {
            return item.id === product.id ? { ...item, qnt: item.qnt - 1 } : item;
        }) : shopItem.products.filter((item) => {
            return item.id !== product.id;
        });

        for (const item of removeItem) {
            total = total + item.qnt;
        }

        setShopItem({ products: removeItem, total: total });
    }
    return (
        <ShopContext.Provider value={{ shop: shopItem, addItem: addItem, removeItem: removeItem }}>
            {children}
        </ShopContext.Provider>
    )

};

export default ShopProvider;