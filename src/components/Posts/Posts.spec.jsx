//import { rest } from 'msw';
//import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Posts } from '.';
/*
const handlers = [
    rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    userId: 1,
                    id: 1,
                    title: 'title1',
                    body: 'body1',
                    url: 'img1.jpg'
                },
                {
                    userId: 2,
                    id: 2,
                    title: 'title2',
                    body: 'body2',
                    url: 'img1.jpg'
                },
                {
                    userId: 3,
                    id: 3,
                    title: 'title3',
                    body: 'body3',
                    url: 'img3.jpg'
                }
            ])
        );
    })
];

const server = setupServer(...handlers); */

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
    /* beforeAll(() => {
        server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => {
        server.close();
    });*/

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

    it('should render search, posts and load more', async () => {
        render(<Posts />);

        //   screen.debug();

        const noMorePosts = screen.getAllByRole('heading', { name: /Nenhum post encontrado/i }); //screen.getByText('Nenhum post encontrado :(');

        expect.assertions(3);

        await waitForElementToBeRemoved(noMorePosts);

        const search = screen.getByPlaceholderText(/Type of search/i);
        expect(search).toBeInTheDocument();

        const images = screen.getAllByRole('img', { name: /molestias/i });
        expect(images).toHaveLength(2);

        const button = screen.getByRole('button', { name: /load more posts/i });
        expect(button).toBeInTheDocument();
    });

    it('should search for posts', async () => {
        render(<Posts {...props} />);
        const noMorePosts = screen.getAllByRole('heading', { name: /Nenhum post encontrado/i }); // const noMorePosts = screen.getByText('Não existem posts =(');

        //expect.assertions(10);

        await waitForElementToBeRemoved(noMorePosts);

        const search = screen.getByPlaceholderText(/Type of search/i);

        expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'title2 2' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();

        userEvent.type(search, 'title1');
        expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'title2 2' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'title3 3' })).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Search value: title1' })).toBeInTheDocument();

        userEvent.clear(search);
        expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'title2 2' })).toBeInTheDocument();

        userEvent.type(search, 'post does not exist');
        expect(screen.getByText('Não existem posts =(')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<Posts {...props} />);
        const { firstChild } = container;
        expect(firstChild).toMatchSnapshot();
    });
});
