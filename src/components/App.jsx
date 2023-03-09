import { useState, useEffect } from 'react';
import Statistics from './Section-Feedback/Statistics/Statistics';
import FeedbackOptions from './Section-Feedback/Feedback/FeedbackOptions';
import Section from './Section-Feedback/Section/Section';
import Notification from './Section-Feedback/Notification/Notification';


export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0)


    const handleIncrement = (evt) => {
        const button = evt.target.name
        switch (button) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;
            case 'bad':
                setBad(prevState => prevState + 1)
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        setTotal(good + neutral + bad)
    }, [good, neutral, bad])


    useEffect(() => {
        setPercentage(Math.round((good * 100) / total))
    }, [good, total])


    return (
        <div className="Feedback">
            <Section title="Please leave feedback">
                <FeedbackOptions
                    onIncrement={handleIncrement}
                    onLeaveFeedback="Please leave feedback"
                />
            </Section>

            <Section title="Statistics">
                {!good && !neutral && !bad ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={percentage}
                    />
                )}
            </Section>
        </div>
    );
}
