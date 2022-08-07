import { render, screen } from "@testing-library/react";
import { CartRoute } from "../../utils/test/route";


describe('Cart Component', () => {
    it('should render icon button', () => {
        render(<CartRoute />);

        const buttonEl = screen.getByRole('button');

        expect(buttonEl).toBeInTheDocument();
    })
})