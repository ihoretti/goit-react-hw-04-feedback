import PropTypes from 'prop-types';
import style from './section.module.css';

export default function Section({ title, subtitle, children }) {
  return (
    <section className={style.feedback}>
      <h1 className={style.feedback__header}>{title}</h1>
      <h2 className={style.feedback__subheader}>{subtitle}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
