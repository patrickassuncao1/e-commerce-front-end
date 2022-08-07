
import { MemoryRouter } from "react-router-dom";
import ShopProvider, { ShopContext } from "../../../context/ShopProvider"
import Shop from "../../../pages/Shop";

export const ShopTest = () => {
    const initial = '/shop';
    return (
        <MemoryRouter initialEntries={[initial]}>
            <ShopProvider>
                <ShopContext.Consumer>
                    {
                        value => <span data-testid="Cart">{value.shop?.total}</span>
                    }
                </ShopContext.Consumer>
                <Shop />
            </ShopProvider>
        </MemoryRouter>
    )
}

