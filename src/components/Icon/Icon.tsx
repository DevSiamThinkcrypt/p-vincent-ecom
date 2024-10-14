/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
// import { useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoMdCart, IoIosHome, IoIosArrowForward } from 'react-icons/io';

import { IoSearch } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaTimes, FaHeart } from 'react-icons/fa';
import { TiArrowForward } from 'react-icons/ti';

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
	| 'arriw_card_right';

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
		arriw_card_right: IoIosArrowForward,
	};

const Icon: FC<IconProps> = ({ name, _hover, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;
	// const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	// const defaultColor = useColorModeValue('#4a4a4a', 'white');
	const { colors } = useCustomStyle();
	return (
		<Box
			as='span'
			_hover={_hover} // Apply hover styles here
			cursor='pointer' // Ensure cursor is pointer on hover
		>
			<IconComponent
				size={props.size || 22}
				color={colors?.white} // Use prop color or fallback to default
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
