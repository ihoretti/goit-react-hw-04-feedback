import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/statistics';
import Notification from 'components/notification/notification';
import { useState } from 'react';
//import PropTypes from 'prop-types';

//export class App extends Component {
// state = {
// good: 0,
//neutral: 0,
//bad: 0,
//};
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
};

// goodIncrement = () => {
// this.setState(prevState => ({
//     good: prevState.good + 1,
// }));
// };
// neutralIncrement = () => {
// this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
// }));
// };
// badIncrement = () => {
// this.setState(prevState => ({
//     bad: prevState.bad + 1,
// }));
// };

const onLeaveFeedback = e => {
  const name = e.target.name;
  useState(prevState => ({
    [name]: prevState[name] + 1,
  }));
};

//countTotalFeedback = () =>
// this.state.good + this.state.neutral + this.state.bad;

const countTotalFeedback = good + neutral + bad;

//countPositiveFeedbackPercentage = () =>
//Number.parseInt((this.state.good / this.countTotalFeedback()) * 100) || 0;

const countPositiveFeedbackPercentage =
  Number.parseInt((good / countTotalFeedback()) * 100) || 0;

//render() {
//const { good, neutral, bad } = this.state;

const objKey = Object.keys(useState);

return (
  <Section title={'statictics form'} subtitle={'Please leave feedback'}>
    {/* <Buttons
            goodIncrement={this.goodIncrement}
            neutralIncrement={this.neutralIncrement}
            badIncrement={this.badIncrement} /> */}
    <FeedbackOptions
      options={{ ...useState }}
      onLeaveFeedback={onLeaveFeedback}
    />

    {countTotalFeedback() ? (
      <Statistics
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        percentage={countPositiveFeedbackPercentage()}
      />
    ) : (
      <Notification message="There is no feedback" />
    )}
  </Section>
);
