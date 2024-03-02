import PropTypes from 'prop-types';
import './style.css';

export const Search = ({ value, onChange }) => {
    // const { value, onChange } = props;
    return (
        <div className="search-container">
            {!!value && <h2>Search Value: {value}</h2>}
            <input
                type="search"
                className="text-input"
                value={value}
                onChange={onChange}
                placeholder="Type of search"
            ></input>
        </div>
    );
};

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
