import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginTestRoute } from "../../utils/test/route";


describe('Login Page', () => {
    it('should render input email, input password and button submit', () => {
        render(<LoginTestRoute />);

        const inputEmail = screen.getByLabelText('Endereço de email');
        const inputPassword = screen.getByLabelText('Senha');
        const button = screen.getAllByText('Login')[1];

        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should return error message, if the email field is empty', async () => {
        render(<LoginTestRoute />);

        const button = screen.getAllByText('Login')[1];
        userEvent.click(button);
        
        await waitFor(() => {
            expect(screen.getByText('Email Obrigatório')).toBeInTheDocument();
        })
      
    })

    it('should return error message, if the email is invalid', async () => {
        render(<LoginTestRoute />);

        const inputEmail = screen.getByLabelText('Endereço de email');
        userEvent.type(inputEmail, 'email');

        const button = screen.getAllByText('Login')[1];
        userEvent.click(button);
        
        await waitFor(() => {
            expect(screen.getByText('Digite um Email Válido')).toBeInTheDocument();
        })
      
    })

    it('should return error message, if the password field is empty', async () => {
        render(<LoginTestRoute />);

        const inputEmail = screen.getByLabelText('Endereço de email');
        const button = screen.getAllByText('Login')[1];
        userEvent.type(inputEmail, 'email@teste.com');
        userEvent.click(button);
        
        await waitFor(() => {
            expect(screen.getByText('Senha Obrigatória')).toBeInTheDocument();
        })
      
    })

})