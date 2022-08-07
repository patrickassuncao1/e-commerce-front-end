import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterTestRoute } from "../../utils/test/route";


describe('Register Page', () => {
    it('should render input name, input email, input password, input confirm password and button submit', () => {
        render(<RegisterTestRoute />);

        const inputName = screen.getByLabelText('Nome');
        const inputEmail = screen.getByLabelText('Endereço de email');
        const inputPassword = screen.getByLabelText('Senha');
        const inputConfPassword = screen.getByLabelText('Confirmar sua senha');
        const button = screen.getByText('Registra-se');

        expect(inputName).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(inputConfPassword).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should return error message, if the name field is empty', async () => {
        render(<RegisterTestRoute />);

        const button = screen.getByText('Registra-se');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Nome Obrigátorio')).toBeInTheDocument();
        })

    })

    it('should return error message, if the email field is empty', async () => {
        render(<RegisterTestRoute />);

        const inputName = screen.getByLabelText('Nome');
        const button = screen.getByText('Registra-se');
        userEvent.type(inputName, 'myName');

        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Email Obrigatório')).toBeInTheDocument();
        })

    })

    it('should return error message, if the email is invalid', async () => {
        render(<RegisterTestRoute />);

        const inputEmail = screen.getByLabelText('Endereço de email');
        const inputName = screen.getByLabelText('Nome');
        userEvent.type(inputName, 'myName');
        userEvent.type(inputEmail, 'email');

        const button = screen.getByText('Registra-se');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Digite um Email Válido')).toBeInTheDocument();
        })

    })

    it('should return error message, if the password field is empty', async () => {
        render(<RegisterTestRoute />);


        const inputEmail = screen.getByLabelText('Endereço de email');
        const inputName = screen.getByLabelText('Nome');
        userEvent.type(inputName, 'myName');
        userEvent.type(inputEmail, 'email@teste.com');

        const button = screen.getByText('Registra-se');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Senha Obrigatória')).toBeInTheDocument();
        })

    })

    it('should return error message, if confirm password is different from password', async () => {
        render(<RegisterTestRoute />);


        const inputEmail = screen.getByLabelText('Endereço de email');
        const inputName = screen.getByLabelText('Nome');
        const inputPassword = screen.getByLabelText('Senha');
        const inputConfPassword = screen.getByLabelText('Confirmar sua senha');
        userEvent.type(inputName, 'myName');
        userEvent.type(inputEmail, 'email@teste.com');
        userEvent.type(inputPassword, '12345');
        userEvent.type(inputConfPassword, '123456');

        const button = screen.getByText('Registra-se');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('As senhas não coincidem')).toBeInTheDocument();
        })

    })


})