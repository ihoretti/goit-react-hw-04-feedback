import style from './notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div className={style.notification}>
      <span>{message}</span>
    </div>
  );
}

Notification.protoType = {
  message: PropTypes.string.isRequired,
};
