import PropTypes from 'prop-types';
import './style.css';

export const PostsCard = (props) => {
    return (
        <div className="post">
            <img src={props.posts.cover} alt={props.posts.title} />
            <div className="post-content">
                <h3>{props.posts.title}</h3>
                <p>{props.posts.body}</p>
            </div>
        </div>
    );
};

PostsCard.propTypes = {
    posts: PropTypes.object.isRequired
};

/*
PostsCard.propTypes = {
    posts: PropTypes.objectOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    )
};*/
