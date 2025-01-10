// eslint-disable-next-line react/prop-types
const Button = ({ text, action, className }) => {
	return (
		<div
			className={`
				bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary
				cursor-pointer text-lg xl:text-xl font-medium  p-3 xl:p-4 px-6 rounded-lg transition-all duration-300 
			${className}`}
			onClick={action}
		>
			{text}
		</div>
	);
};

export default Button;
