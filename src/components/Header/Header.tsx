import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
	const { colors } = useCustomStyle();
	return (
		<Box bg={colors?.secondary} color='white'>
			<Container maxW='container.2xl'>
				<Grid gridTemplateColumns={{ base: '1fr 2fr 1fr' }}>
					<GridItem>Logo</GridItem>
					<Grid gridTemplateColumns={{ base: 'repeat(4,0.4fr)' }}>
						<GridItem>Home</GridItem>
						<GridItem>Categories</GridItem>
						<GridItem>About us</GridItem>
						<GridItem>Whislist</GridItem>
					</Grid>
					<GridItem>CartBox</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default Header;
