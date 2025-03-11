import { useState } from "react";

/**
 * statistics component renders a table displaying user feedback statistics.
 * if no feedback has been given (allClicks === 0), it displays a message instead.
 *
 * if I were using the ternary operator in the App component, I'd remove the if statement and just return the table
 */
const Statistics = (props) => {
	const average = (props.good - props.bad) / props.allClicks;
	const positive = (props.good / props.allClicks) * 100;

	if (props.allClicks > 0) {
		return (
			<table>
				<tbody>
					<StatisticsLine
						text="good"
						value={props.good}
					/>
					<StatisticsLine
						text="neutral"
						value={props.neutral}
					/>
					<StatisticsLine
						text="bad"
						value={props.bad}
					/>
					<StatisticsLine
						text="all"
						value={props.allClicks}
					/>
					<StatisticsLine
						text="average"
						value={average}
					/>
					<StatisticsLine
						text="positive"
						value={`${positive}%`}
					/>
				</tbody>
			</table>
		);
	}
	return "No feedback given";
};

// button component for recording feedback
const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

// renders a single row of statistics in in the table
const StatisticsLine = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	);
};

/**
 * main App component that collects and displays feedback
 * users can click a button to add feedback
 */
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAll] = useState(0);

	const incrementGood = () => {
		setGood(good + 1);
		setAll(allClicks + 1);
	};

	const incrementNeutral = () => {
		setNeutral(neutral + 1);
		setAll(allClicks + 1);
	};

	const incrementBad = () => {
		setBad(bad + 1);
		setAll(allClicks + 1);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<Button
				text="good"
				handleClick={incrementGood}
			/>
			<Button
				text="neutral"
				handleClick={incrementNeutral}
			/>
			<Button
				text="bad"
				handleClick={incrementBad}
			/>
			<h1>statistics</h1>
			{/**
			 * a ternary operator could be used for conditional rendering:
			 *
			 * {allClicks > 0 ? (
			 * 	<Statistics
			 * 	good={good}
			 * 	neutral={neutral}
			 * 	bad={bad}
			 * 	allClicks={allClicks}
			 * 	/>
			 * ) : (
			 * 	<p>No feedback given</p>
			 * )}
			 */}

			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				allClicks={allClicks}
			/>
		</div>
	);
};

export default App;
