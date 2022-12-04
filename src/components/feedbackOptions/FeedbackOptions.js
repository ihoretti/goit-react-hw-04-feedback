import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options);
  // console.log(onLeaveFeedback)
  return (
    <>
      <div className={style.feedback__buttonWrap}>
        {options.map(option => (
          <button
            className={style.feedback__button}
            key={shortid.generate()}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
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
