'use client';
import { useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoMdCart, IoIosHome } from 'react-icons/io';
export type IconNameOptions = 'cart';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		// icons here
		cart: IoMdCart,
	};

const Icon: FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;
	// const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	const defaultColor = useColorModeValue('#4a4a4a', 'white');
	return (
		<IconComponent
			size={props.size || 22}
			color={
				// name == 'arrow' ? brandColor : props.color ? props.color : defaultColor
				defaultColor
			}
			{...props}
		/>
	);
};

export default Icon;
