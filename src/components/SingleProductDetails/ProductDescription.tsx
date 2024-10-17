import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const ProductDescription = () => {
	const { colors } = useCustomStyle();
	return (
		<Box>
			<Heading>Description</Heading>
			<Text
				py={{ base: '1.8rem', md: '2.5rem' }}
				letterSpacing={'1.7px'}
				lineHeight={'35px'}
				fontSize={{ base: '1rem', md: '1.2rem' }}
				maxW={'100rem'}
				color={colors?.light_black}
			>
				In the honor of Star Wars, the worldwide pop-culture phenomenon that has
				a place in our hearts like no other, Vincent&#39;s Sphere released a
				limited edition Star Wars-themed scented candle featuring our current
				favourite character, Grogu aka Baby Yoda. The candle lasts up to 50-55
				hours.
			</Text>
		</Box>
	);
};

export default ProductDescription;
