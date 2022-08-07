import { render, screen } from "@testing-library/react";
import { CardComponentTest } from "../../utils/test/components";

describe('Card Component', () => {
    it('should render two buttons', () => {
        render(<CardComponentTest />);

        const buttonEl = screen.getAllByRole('button');
        
        expect(buttonEl.length).toBe(2);
    })
})