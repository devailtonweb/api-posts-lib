import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2.png'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png'
        }
    ]
};

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts />);

        //const { debug } = render(<Posts />);
        //debug();

        expect(screen.getAllByRole('heading', { name: /Nenhum post encontrado/i })).toHaveLength(1);
        expect(screen.getAllByRole('button', { name: /Load more posts/i })).toHaveLength(1);
        // expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });

    it('should not render posts', () => {
        render(<Posts />);
        expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
        expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(0);
    });

    it('should match snapshot', () => {
        const { container } = render(<Posts {...props} />);
        const { firstChild } = container;
        expect(firstChild).toMatchSnapshot();
    });
});
