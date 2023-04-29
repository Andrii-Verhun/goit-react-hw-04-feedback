import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onClick}) => {
    return (
        <div>
            {options.map((el) => (
                <button
                    onClick={onClick}
                    className={css.button}
                    id={el}
                    type="button"
                    key={el}>
                    {el}
                </button>)
            )}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onClick: PropTypes.func.isRequired,
};