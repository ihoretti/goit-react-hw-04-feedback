import PropTypes from 'prop-types';
import style from './statistics.module.css';

export default function Statistics({
  title,
  good,
  neutral,
  bad,
  total,
  percentage,
}) {
  function color() {
    if (percentage <= 33) {
      return '#ff0000';
    }
    if (percentage <= 76) {
      return '#FFFF00';
    }
    if (percentage >= 77) {
      return '#00ff99';
    }
  }
  return (
    <div className={style.statictics}>
      <h2>{title}</h2>
      <ul>
        <li>
          <span>Good: </span>
          <span className={style.good}>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span className={style.neutral}>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span className={style.bad}>{bad}</span>
        </li>

        <li>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li>
          <span>Positive feedback: </span>

          <span style={{ color: color() }}>{percentage ? percentage : 0}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
