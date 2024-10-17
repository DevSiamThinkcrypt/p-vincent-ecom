/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReviewComment from './ReviewComment';
import ButtonPrimary from '../ButtonPrimay/ButtonPrimay';

const ReviewBox = () => {
	const { colors } = useCustomStyle();
	const [viewReview, setViewReview] = useState(false);
	const handleGetReview = (e: any) => {
		e.perventDefault();
		// first get selectbox data
		// then review text
	};
	return (
		<Box mt='1.5rem'>
			<Text
				cursor={'pointer'}
				color={colors?.twitter_color}
				onClick={() => setViewReview(!viewReview)}
			>
				Write a review
			</Text>
			<Box bg={colors?.lighter_grey} py='2rem' px='1.5rem' mt='0.5rem'>
				<Text fontWeight={'500'} letterSpacing={'1.3px'}>
					No Reviews Posted Yet
				</Text>
			</Box>
			<form>
				<Box
					mt='1rem'
					transition='all 0.2s ease-in'
					h={viewReview ? '15rem' : 0}
					opacity={viewReview ? '1' : 0}
					pointerEvents={viewReview ? 'auto' : 'none'}
				>
					<Select
						placeholder='Select option'
						maxW='30rem'
						_focus={{
							boxShadow: `0 0 0 2px ${colors?.black}`,
							border: 'none',
						}}
					>
						<option value='poor'>1 - Poor</option>
						<option value='fair'>2 - Fair</option>
						<option value='good'>3 - Good</option>
						<option value='very good'>4 - Very Good</option>
						<option value='excellent'>5 - Excellent</option>
					</Select>
					<ReviewComment />
					<Box mt='1rem'>
						<ButtonPrimary onclick={handleGetReview}>Submit</ButtonPrimary>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default ReviewBox;
