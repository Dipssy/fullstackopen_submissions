// Part component that renders the name and number of exercises of one part
const Part = (props) => {
	return (
		<p>
			{props.name} {props.exercises}
		</p>
	);
};

// renders all the Parts of the course object in the App component
const Content = (props) => {
	return (
		<div>
			<Part
				name={props.course.parts[0].name}
				exercises={props.course.parts[0].exercises}
			/>
			<Part
				name={props.course.parts[1].name}
				exercises={props.course.parts[1].exercises}
			/>
			<Part
				name={props.course.parts[2].name}
				exercises={props.course.parts[2].exercises}
			/>
		</div>
	);
};

export default Content;
