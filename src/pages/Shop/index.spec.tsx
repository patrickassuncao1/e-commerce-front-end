import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShopTest } from "../../utils/test/context";

describe('Shop Page', () => {
    it('should by clicking the button add one item to cart', async () => {
        render(<ShopTest />);

        const cart = screen.getByTestId('Cart');
        
        const buttonEl = await waitFor(() => {
            return screen.getAllByText('Adicionar')
        })

        expect(cart.innerHTML).toBe('0');
        
        expect(buttonEl[0]).toBeInTheDocument();

        userEvent.click(buttonEl[0]);
        
        expect(cart.innerHTML).toBe('1');
    })
})