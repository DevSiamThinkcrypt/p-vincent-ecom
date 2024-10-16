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
	body_bg: '#f9f9f9',
	fb_color: '#3b5998',
	whatsapp_color: '#25d366',
	twitter_color: '#00aced',
	pinterest_color: '#cb2128',
	gmail_color: '#7f7f7f',
	lighter_grey: '#f5f5f5',
	star_color: '#f6c340',
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
