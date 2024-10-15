/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type ButtonType = {
	link?: any;
	children?: React.ReactNode;
	props?: any;
	[key: string]: any;
};

const ConsultButton: FC<ButtonType> = ({ link, children, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Link href={link}>
			<Text
				bg={colors.light_black}
				textTransform='uppercase'
				transition='all 0.3s ease'
				color='white'
				_hover={{ bg: colors.white, color: colors.light_black }}
				size='lg'
				py='0.8rem'
				w='12rem'
				textAlign='center'
				{...props}
			>
				{children}
			</Text>
		</Link>
	);
};

export default ConsultButton;
