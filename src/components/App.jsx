import { useState } from "react";

import { Section } from "components/Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ target: { id } }) => {
    switch (id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback() * 100));
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={handleClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {(countTotalFeedback() && <Statistics
          stats={{ good, neutral, bad }}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />) || <Notification message="There is no feedback" />}
      </Section>
    </>
  );
};