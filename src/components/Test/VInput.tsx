/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { FC } from 'react';
import { InputProps, FormControl, Stack, Text, Input } from '@chakra-ui/react';
// import { Label, HelperText } from '../../';
// import { Input } from './';

type InputContainerProps = InputProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string | number | undefined;
	placeholder?: any;
};

const VInput: FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	// helper,
	...props
}) => {
	return (
		<FormControl isRequired={isRequired} gap={4}>
			<Stack spacing={2} w='full'>
				<Text fontSize='1rem' fontWeight='400' letterSpacing={'0.1rem'}>
					{label}
				</Text>

				<Stack spacing={1} w='full'>
					<Input
						_focusActive={{
							borderColor: 'black',
						}}
						_focus={{
							borderColor: 'black',
						}}
						_active={{
							borderColor: 'black',
						}}
						outline='none'
						borderRadius='0'
						size='md'
						px={3}
						placeholder={placeholder ? placeholder : label}
						_placeholder={{
							fontSize: '0.8rem',
							fontWeight: '400',
							letterSpacing: '0.1rem',
						}}
						value={value}
						{...props}
					/>
				</Stack>
			</Stack>
		</FormControl>
	);
};

export default VInput;
