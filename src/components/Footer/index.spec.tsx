import { render, screen } from "@testing-library/react";
import { FooterTestRouter } from "../../utils/test/route";

describe('Footer Component', () => {
    it('should render shop name and link names', () => {
        render(<FooterTestRouter />);

        expect(screen.getByText('E-commerce')).toBeInTheDocument();
        expect(screen.getByText('HOME')).toBeInTheDocument();
        expect(screen.getByText('REGISTRO')).toBeInTheDocument();
        expect(screen.getByText('LOGIN')).toBeInTheDocument();
    });

    it('should navigate to route /login', () => {
        render(<FooterTestRouter />);

        const path = screen.getByText(/login/i);

        expect(path).toBeInTheDocument();

    });
})