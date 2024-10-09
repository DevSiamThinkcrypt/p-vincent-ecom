const colors = {
	primary: '#F9EAE1', // body
	secondary: '#101D42', // header
	tertiary: '#7785AC', // hover
};

const fonts = {
	primary: '"Montserrat", sans-serif',
	secondary: '"Barlow", sans-serif',
};

const useCustomStyle = () => {
	return {
		colors,
		fonts,
	};
};

export default useCustomStyle;
