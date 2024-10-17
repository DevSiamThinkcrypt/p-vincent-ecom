/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
// import { useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

import { IoSearch } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import {
	IoMdArrowDropdown,
	IoMdStarOutline,
	IoMdStar,
	IoMdCart,
	IoIosHome,
	IoIosArrowForward,
	IoIosArrowBack,
} from 'react-icons/io';
import { FaTimes, FaHeart, FaTwitter } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';
import { MdOutlineLocalPhone, MdEmail } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoInstagram, IoMailOutline } from 'react-icons/io5';
import { FaWhatsapp, FaPinterest } from 'react-icons/fa6';
import { RiFacebookFill } from 'react-icons/ri';

import { Box } from '@chakra-ui/react';
// export type IconNameOptions = 'cart' | 'hamburger' | 'search' | 'user';
export type IconNameOptions =
	| 'cart'
	| 'search'
	| 'arrow_dropdown'
	| 'hamburger'
	| 'times'
	| 'heart'
	| 'cart_arrow'
	| 'arrow_card_right'
	| 'arrow_card_left'
	| 'phone'
	| 'mail'
	| 'facebook'
	| 'instragram'
	| 'star_outline'
	| 'star_fill'
	| 'fb_solid'
	| 'whatsapp'
	| 'pinterest'
	| 'twitter'
	| 'mail_solid';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
	_hover?: any;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		// icons here
		cart: IoMdCart,
		search: IoSearch,
		arrow_dropdown: IoMdArrowDropdown,
		hamburger: FiMenu,
		times: FaTimes,
		heart: FaHeart,
		cart_arrow: TiArrowForward,
		arrow_card_right: IoIosArrowForward,
		arrow_card_left: IoIosArrowBack,
		phone: MdOutlineLocalPhone,
		mail: MdEmail,
		facebook: ImFacebook2,
		instragram: IoLogoInstagram,
		star_outline: IoMdStarOutline,
		star_fill: IoMdStar,
		fb_solid: RiFacebookFill,
		whatsapp: FaWhatsapp,
		pinterest: FaPinterest,
		twitter: FaTwitter,
		mail_solid: IoMailOutline,
	};

const Icon: FC<IconProps> = ({ name, _hover, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;
	// const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	// const defaultColor = useColorModeValue('#4a4a4a', 'white');
	const { colors } = useCustomStyle();
	return (
		<Box
			as='span'
			_hover={{ svg: _hover }} // Apply hover styles here
			cursor='pointer' // Ensure cursor is pointer on hover
		>
			<IconComponent
				size={props.size || 22}
				color={props.color || colors?.white} // Use prop color or fallback to default
				{...props}
			/>
		</Box>
		// <IconComponent
		// 	size={props.size || 22}
		// 	color={
		// 		// name == 'arrow' ? brandColor : props.color ? props.color : defaultColor
		// 		colors?.white
		// 	}

		// 	{...props}
		// />
	);
};

export default Icon;
