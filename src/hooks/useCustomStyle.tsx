const colors = {
	black: '#000000',
	light_black: '#121212',
	banner_color: 'rgba(251,50,144,.85)',
	hover_color: 'rgba(251,50,144,.85)',
	nav_hover: '#e9ecef',
	text_pink: '#fb3290',
	text_color: '#212529',
	border_color: '#646464',
	text_gray: '#646464',
	white: '#fff',
};

const fonts = {
	primary: '"Noto Color Emoji", sans-serif',
};

const useCustomStyle = () => {
	return {
		colors,
		fonts,
	};
};

export default useCustomStyle;
