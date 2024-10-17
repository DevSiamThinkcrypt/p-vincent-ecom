/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
	FormControl,
	Stack,
	useColorModeValue,
	Textarea,
	TextareaProps,
	Text,
} from '@chakra-ui/react';

// import { Label, HelperText } from '../../';

type InputContainerProps = TextareaProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	placeholder?: any;
};

const TextAreaTest: React.FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	// helper,
	...props
}) => {
	const borderColor = useColorModeValue('brand.500', 'brand.200');
	return (
		<FormControl isRequired={isRequired} gap={4}>
			<Stack spacing={2} w='full'>
				<Text fontSize='1rem' fontWeight='400' letterSpacing={'0.1rem'}>
					{label}
				</Text>
				<Stack spacing={1} w='full'>
					<Textarea
						minH='200px'
						size='md'
						px={3}
						borderRadius='0'
						focusBorderColor={borderColor}
						color='text.500'
						_dark={{
							color: 'gray.300',
						}}
						placeholder={placeholder ? placeholder : label}
						_placeholder={{ fontSize: 14, fontWeight: '500' }}
						value={value}
						{...props}
					/>
				</Stack>
			</Stack>
		</FormControl>
	);
};

export default TextAreaTest;
