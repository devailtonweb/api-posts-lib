import PropTypes from 'prop-types';
import './style.css';

export const ButtomLoadMorePosts = (props) => {
    const { text, onClick, disabled = false } = props;

    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

ButtomLoadMorePosts.defaultProps = {
    disabled: false
};

ButtomLoadMorePosts.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};
