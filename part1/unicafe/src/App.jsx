import { useState } from "react";

const Statistics = (props) => {
	return (
		<div>
			<p>good 6</p>
			<p>neutral 2</p>
			<p>bad 1</p>
			<p>all 9</p>
			<p>average 0.5555555556</p>
			<p>positive 0.66666666667%</p>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<button>good</button>
			<button>neutral</button>
			<button>bad</button>
			<h1>statistics</h1>
			<Statistics />
		</div>
	);
};

export default App;
