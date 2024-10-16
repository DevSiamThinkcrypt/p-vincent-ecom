import ConsultButton from '@/components/ConsultButton/ConstultBtn';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Consultation = () => {
	const { colors } = useCustomStyle();
	return (
		<Box mb='2rem'>
			<Flex
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				py={{ base: '5rem', sm: '6rem', md: '7rem', xl: '15rem' }}
			>
				<Text
					fontSize={{ base: '1.4rem', md: '1.9rem' }}
					maxW='39rem'
					fontWeight='400'
				>
					Cant decide which one to get?
				</Text>
				<Text
					fontSize={{ base: '1.4rem', md: '1.9rem' }}
					maxW='39rem'
					fontWeight='200'
					mb='1.4rem'
					textAlign={'center'}
				>
					Let us help you choose the best products for you and your loved oned
				</Text>

				<ConsultButton
					link='#'
					_hover={{ bg: colors?.nav_hover, color: colors?.light_black }}
					width='15rem'
				>
					Get Free Consultation
				</ConsultButton>
			</Flex>
		</Box>
	);
};

export default Consultation;
