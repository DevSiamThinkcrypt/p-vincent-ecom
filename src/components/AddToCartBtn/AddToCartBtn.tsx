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

const AddToCartBtn: FC<ButtonType> = ({ onclick, children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Button
			onClick={onclick}
			bg={colors.light_black}
			textTransform='uppercase'
			transition='all 0.3s ease'
			color='white'
			_hover={{ bg: colors.text_color, color: colors.white }}
			size='lg'
			py='0.8rem'
			w='12rem'
			textAlign='center'
			{...props}
		>
			{children}
		</Button>
	);
};

export default AddToCartBtn;
