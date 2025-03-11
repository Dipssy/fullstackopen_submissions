/**
 * renders the button that adds a vote to an anecdote, when clicked
 * props have been destructured for the button's text and event handler
 */
const VoteButton = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

export default VoteButton;
