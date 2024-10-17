/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

type ButtonType = {
	onclick?: any;
	children?: React.ReactNode;
	props?: any;
	[key: string]: any;
};

const ButtonPrimary: FC<ButtonType> = ({ onclick, children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			onClick={onclick}
			bg={colors.light_black}
			textTransform='uppercase'
			transition='all 0.3s ease'
			color='white'
			_hover={{ bg: colors.text_color, color: colors.white }}
			size={{ base: 'md', md: 'lg' }}
			py='0.8rem'
			w={{ base: '6rem', md: '12rem' }}
			textAlign='center'
			type='submit'
			{...props}
		>
			{children}
		</Button>
	);
};

export default ButtonPrimary;
