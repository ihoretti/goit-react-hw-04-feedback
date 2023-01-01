//import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/statistics';
import Notification from 'components/notification/notification';
import { useState } from 'react';
//import PropTypes from 'prop-types';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
  const countTotalFeedback = good + neutral + bad;

  const buttonChangeStatistics = e => {
    const name = e.target;
    if (name === `good`) {
      setGood(prevState => prevState + 1);
    }
    if (name === `neutral`) {
      setNeutral(prevState => prevState + 1);
    }
    if (name === `bad`) {
      setBad(prevState => prevState + 1);
    }

    const countPositiveFeedbackPercentage =
      Number.parseInt((good / countTotalFeedback()) * 100) || 0;

    const buttonsName = ['good', 'neutral', 'bad'];

    // const objKey = Object.keys(this.state);

    return (
      <Section title={'statictics form'} subtitle={'Please leave feedback'}>
        {/* <Buttons
            goodIncrement={this.goodIncrement}
            neutralIncrement={this.neutralIncrement}
            badIncrement={this.badIncrement} /> */}
        <FeedbackOptions
          options={{ buttonsName }}
          onLeaveFeedback={buttonChangeStatistics}
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
  };
};
