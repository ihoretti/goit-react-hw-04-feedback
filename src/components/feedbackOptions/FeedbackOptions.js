import PropTypes from 'prop-types';
//import shortid from 'shortid';
import style from './FeedbackOptions.module.css';

const classConfig = {
  good: style.good,
  neutral: style.neutral,
  bad: style.bad,
};
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options);
  // console.log(onLeaveFeedback)
  const keys = Object.keys(options);

  const newOptions = keys.map(option => ({
    name: option,
    btnClass: classConfig[option],
  }));
  return (
    <>
      <div className={style.feedback__buttonWrap}>
        {newOptions.map(({ name, btnClass }) => (
          <button
            className={btnClass}
            key={name}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  onLeaveFeedback: PropTypes.func.isRequired,
};
// export default function Buttons({ goodIncrement, neutralIncrement, badIncrement }) {
//     return (
//         <div className={style.feedback__buttonWrap}>
//                     <button className={style.feedback__button} type="button" onClick={goodIncrement}>good</button>
//                     <button className={style.feedback__button} type="button" onClick={neutralIncrement}>neutral</button>
//                     <button className={style.feedback__button} type="button" onClick={badIncrement}>bad</button>
//         </div>
//     )
// }
