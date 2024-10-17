import { Box, Text, Textarea } from '@chakra-ui/react';
import React, { useState, ChangeEvent } from 'react';

const ReviewComment = () => {
	const [value, setValue] = useState<string>('');

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);
	};

	return (
		<Box maxW='30rem' mt='1.3rem'>
			<Text mb='8px' fontWeight={'500'} letterSpacing={'1.3px'}>
				Comment: {value}
			</Text>
			<Textarea
				value={value}
				onChange={handleInputChange}
				placeholder='Write a review'
				size='sm'
				focusBorderColor='black'
			/>
		</Box>
	);
};

export default ReviewComment;
