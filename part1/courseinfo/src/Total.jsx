// renders the total number of exercises in the course object inside the App component
const Total = (props) => {
	return (
		<p>
			Number of exercises{" "}
			{props.course.parts[0].exercises +
				props.course.parts[1].exercises +
				props.course.parts[2].exercises}
		</p>
	);
};

export default Total;
