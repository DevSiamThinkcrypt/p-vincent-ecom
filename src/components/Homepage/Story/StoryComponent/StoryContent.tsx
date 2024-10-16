/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type StoryContentType = {
	storyConetent?: any;
};

const StoryContent: FC<StoryContentType> = ({ storyConetent }) => {
	return (
		<Box maxW='50rem'>
			<Text
				mt={{ base: '1.1rem', md: '1.1rem', xl: '3rem' }}
				letterSpacing='0.13rem'
				lineHeight='2.1rem'
				fontSize={{ base: '0.8rem', xl: '1rem' }}
			>
				{storyConetent.storyParagraphOne}
			</Text>
			<Text
				mt={{ base: '1.1rem', md: '1.1rem', xl: '3rem' }}
				letterSpacing='0.13rem'
				lineHeight='2.1rem'
				fontSize={{ base: '0.8rem', xl: '1rem' }}
			>
				{storyConetent.storyParagraphTwo}
			</Text>
		</Box>
	);
};

export default StoryContent;
