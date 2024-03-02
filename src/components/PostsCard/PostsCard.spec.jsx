import { render, screen } from '@testing-library/react';
import { PostsCard } from '.';

const props = {
    posts: {
        title: 'title 1',
        body: 'body 1',
        id: 1,
        cover: 'img/img.png'
    }
};

describe('Test component PostsCard', () => {
    it('should render PostsCard correctly', () => {
        render(<PostsCard {...props} />);

        expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
        expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', props.cover);
        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
        //const { debug } = render(<PostsCard {...mock} />);
        //debug();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostsCard {...props} />);
        const { firstChild } = container;

        expect(firstChild).toMatchSnapshot();
    });
});
