import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ReviewStar from '../ReviewStar/ReviewStar';
import useCustomStyle from '@/hooks/useCustomStyle';
import ReviewBox from './ReviewBox';

const ProductReview = () => {
	const { colors } = useCustomStyle();
	return (
		<Box>
			<Heading as='h3' fontWeight={'500'} letterSpacing={'1.4px'} mb='1rem'>
				Ratings
			</Heading>
			<Flex flexDir={'column'} gap='0.3rem'>
				<Heading as='h5' fontSize={'1.1rem'} color={colors?.text_gray}>
					0 Reviews
				</Heading>
				<Box ml='-0.25rem'>
					<ReviewStar />
				</Box>
			</Flex>
			<ReviewBox />
		</Box>
	);
};

export default ProductReview;
