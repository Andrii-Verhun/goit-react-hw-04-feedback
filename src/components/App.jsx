import { Component } from "react";

import { Section } from "components/Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  handleClick = ({ target: { id } }) => {
    this.setState((state) => {
      return { [id]: state[id] += 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback() * 100));
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {(this.countTotalFeedback() && <Statistics
            stats={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) || <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  };
};
