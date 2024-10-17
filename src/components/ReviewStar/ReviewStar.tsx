import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '../Icon';
import useCustomStyle from '@/hooks/useCustomStyle';

const ReviewStar = () => {
	const { colors } = useCustomStyle();
	return (
		<Flex gap={'0.3rem'}>
			{Array.from({ length: 5 }, (_, i) => (
				<Box key={i}>
					<Icon name='star_outline' color={colors.star_color} size={26} />
				</Box>
			))}
		</Flex>
	);
};

export default ReviewStar;
