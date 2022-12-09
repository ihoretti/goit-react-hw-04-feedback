import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/statistics';
import Notification from 'components/notification/notification';
//import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Number.parseInt((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;

    const objKey = Object.keys(this.state);

    return (
      <Section title={'statictics form'} subtitle={'Please leave feedback'}>
        {/* <Buttons
            goodIncrement={this.goodIncrement}
            neutralIncrement={this.neutralIncrement}
            badIncrement={this.badIncrement} /> */}
        <FeedbackOptions
          options={{ ...this.state }}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {this.countTotalFeedback() ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
