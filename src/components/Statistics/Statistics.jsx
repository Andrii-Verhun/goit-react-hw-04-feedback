import PropTypes from "prop-types";

import css from './Statistics.module.css';

export const Statistics = ({ stats, total, positivePercentage }) => {
    return (
        <div>
            {Object.keys(stats).map((el) => (
                <p className={css.info} key={el}>
                    {el}: {stats[el]}
                </p>
            ))}
            <p className={css.info}>Total: {total}</p>
            <p className={css.info}>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

Statistics.propTypes = {
    stats: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};