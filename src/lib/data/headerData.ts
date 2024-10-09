
export const headerData = [
	{
		logo: '/logo/logo.png',
	},
	{
		navMenu: [
			{
				menuItem: 'Home',
				link: '/',
			},
			{
				menuItem: 'Categories',
				link: '/',
				categoryDropdown: [
					{
						
						text: 'Blog',
						link: `${process.env.NEXT_PUBLIC_KRISHI_BLOG_WEBSITE}`,
					},
					{
					
						text: 'Expert Video Hub',
						link: `${process.env.NEXT_PUBLIC_KRISHI_BLOG_WEBSITE}/expert-video-hub`,
					},
				],
			},
			{
				menuItem: 'About us',
				link: '/',
			},
			{
				menuItem: 'Wishlist',
				link: '/',
			},
			{
				menuItem: 'Log In',
				link: '/',
			},
		],
	},
	{
		cartIcon: '',
		totalCartItems: 0,
		totalCost: 0,
	},
];
