import { useState } from "react";

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

	// just use this if using ternary operator
	// return (
	// 	<div>
	// 		<p>good 6</p>
	// 		<p>neutral 2</p>
	// 		<p>bad 1</p>
	// 		<p>all 9</p>
	// 		<p>average 0.5555555556</p>
	// 		<p>positive 0.66666666667%</p>
	// 	</div>
	// );
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticsLine = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	);
};

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
			{
				// could use ternary operator for conditional rendering
				// {allClicks > 0 ? <Statistics /> : "No feedback given"}
			}
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
