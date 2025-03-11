/**
 * renders the button that selects a random anecdote, when clicked
 * props have been destructured for the button's text and event handler
 */
const NextButton = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

export default NextButton;
