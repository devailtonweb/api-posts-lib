import { render, screen } from '@testing-library/react';
import { Search } from '.';
import userEvent from '@testing-library/user-event';

describe('<Search />', () => {
    it('should have a value of Search', () => {
        const fn = jest.fn();
        render(<Search value={'Teste valor digitado'} onChange={fn} />);

        const input = screen.getByPlaceholderText(/Type of search/i);
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('Teste valor digitado');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<Search value="um valor qualquer" onChange={fn} />);

        const input = screen.getByPlaceholderText(/Type of search/i);
        const value = 'o valor';

        userEvent.type(input, value);
        //screen.debug(input);
        expect(input.value).toBe('um valor qualquer');
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<Search value="" onChange={fn} />);

        const { firstChild } = container;
        expect(firstChild).toMatchSnapshot();
    });
});
