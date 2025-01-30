// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, className }) => {
	return (
		<button
			className={`
				bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary
				cursor-pointer text-lg xl:text-xl font-medium  p-3 xl:p-4 px-6 rounded-lg transition-all duration-300 
			${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
