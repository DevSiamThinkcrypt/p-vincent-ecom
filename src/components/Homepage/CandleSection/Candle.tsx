import ProductCard from '@/components/Card/Card';
import PageContainer from '@/components/PageContainer/PageContainer';
import Title from '@/components/Title/Title';
import { Box } from '@chakra-ui/react';
import React from 'react';

const CandleSection = () => {
	return (
		<Box pt={{ base: '6.5rem', md: '8.5rem' }} mb='5rem'>
			<Title
				heading='Handcrafted Scented Candles'
				subHeading='With over hundreds of fragrances to choose from'
			/>
			<PageContainer>
				<ProductCard />
			</PageContainer>
		</Box>
	);
};

export default CandleSection;
