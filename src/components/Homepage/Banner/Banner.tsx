import Button from '@/components/Button/Button';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
	const { colors, fonts } = useCustomStyle();
	return (
		<Box
			pos='relative'
			w='100%'
			h='95vh'
			bgImage="url('/images/banner.jpeg')"
			bgPos='center'
			bgSize='cover'
			bgRepeat='no-repeat'
			borderBottom='4px solid'
			borderColor={colors.light_black}
			display='flex'
			flexDir='column'
			justifyContent='center'
		>
			<Flex
				justifyContent='center'
				flexDirection='column'
				h='full'
				maxW={{ base: '20rem', md: '30rem', lg: '40rem' }}
				ml={{ base: '1rem', md: '8rem', lg: '10rem', xl: '15vw' }}
			>
				<Heading
					fontSize={{ base: '1.5rem', lg: '3.5rem' }}
					color={colors.light_black}
					mb='4'
					w='full'
					bg={colors.banner_color}
					borderTop='4px solid'
					borderBottom='4px solid'
					borderColor={colors.light_black}
					px='1rem'
					py='0.8rem'
				>
					VINCENT&#39;S SPHERE
				</Heading>
				<Text
					fontSize='lg'
					color={colors.light_black}
					mb='4'
					maxW={{ base: '260px', md: '460px', lg: '660px' }}
					bg={colors.banner_color}
					px='1rem'
					py='0.4rem'
				>
					HANDCRAFTED HAPPINESS FOR ALL...
				</Text>

				<Box mt='2rem'>
					<Button link='#'>Explore</Button>
				</Box>
			</Flex>
		</Box>
	);
};

export default Banner;
