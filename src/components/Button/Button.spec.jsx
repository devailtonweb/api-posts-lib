import { fireEvent, render, screen } from '@testing-library/react';
import { ButtomLoadMorePosts } from '.';
//import userEvent from '@testing-library/user-event';

describe('Test component Button', () => {
    it('should test button with in text', () => {
        const fn = jest.fn();
        render(<ButtomLoadMorePosts text="load more" onClick={fn} />);

        expect.assertions(2);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'button');
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<ButtomLoadMorePosts text="load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });

        fireEvent.click(button);
        // userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        const fn = jest.fn();
        render(<ButtomLoadMorePosts text="load more" onClick={fn} disabled={true} />);

        const button = screen.getByRole('button', { name: /load more/i });

        fireEvent.click(button);
        // userEvent.click(button);

        expect(button).toBeDisabled();
        expect(button).not.toBeEnabled();
    });

    it('should be enabled when disabled is false', () => {
        const fn = jest.fn();
        render(<ButtomLoadMorePosts text="load more" onClick={fn} disabled={false} />);

        const button = screen.getByRole('button', { name: /load more/i });

        fireEvent.click(button);
        // userEvent.click(button);

        expect(button).toBeEnabled();
        expect(button).not.toBeDisabled();
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<ButtomLoadMorePosts text="load more" onClick={fn} />);
        const { firstChild } = container;

        expect(firstChild).toMatchSnapshot();
    });
});
