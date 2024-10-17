/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import useCustomStyle from '@/hooks/useCustomStyle';
import ReviewStar from '../ReviewStar/ReviewStar';

const SingleProductDetails = ({
	handleAddToCart,
}: {
	handleAddToCart: any;
}) => {
	const { colors } = useCustomStyle();
	return (
		<Box ml={{ base: 0, md: '2.5vw', xl: '4vw' }} mt={{ base: '2rem', sm: 0 }}>
			<Heading
				as='h1'
				fontSize={{ base: '1.5rem', xl: '2rem' }}
				fontWeight={'500'}
				letterSpacing={'3px'}
				mb='0.7rem'
			>
				May the Force be with you
			</Heading>
			<Flex
				fontSize={'1.1rem'}
				color={colors?.text_gray}
				fontWeight={'500'}
				alignItems='center'
				gap='0.5rem'
			>
				<Text letterSpacing={'2px'}>Size:</Text>
				<Text>9 oz</Text>
			</Flex>
			<Flex
				pt='1.3rem'
				pb={{ base: '1.5rem', xl: '2rem' }}
				alignItems={'center'}
				gap='01rem'
			>
				<ReviewStar />
				<Heading as='h5' fontSize={'1.1rem'} color={colors?.text_gray}>
					0 Reviews
				</Heading>
			</Flex>
			<Text
				fontSize={{ base: '1.1rem', md: '1.25rem' }}
				fontWeight={'300'}
				mb='0.8rem'
				letterSpacing={'0.1rem'}
			>
				Notes: Spring Flowers, Natural Patchouli & White Cedar
			</Text>
			<Flex
				fontSize={'0.92rem'}
				fontWeight={'500'}
				color={colors?.text_gray}
				gap='0.5rem'
				pb='0.2rem'
			>
				<Text letterSpacing={'1.6px'}>Category:</Text>
				<Text letterSpacing={'1.6px'}>Scented Candles</Text>
			</Flex>
			<Flex
				fontSize={'0.92rem'}
				fontWeight={'500'}
				color={colors?.text_gray}
				gap='0.5rem'
			>
				<Text letterSpacing={'1.6px'}>Sub Category:</Text>
				<Text letterSpacing={'1.6px'}>Star Wars Special</Text>
			</Flex>
			<Flex
				fontSize={'1.1rem'}
				fontWeight={'500'}
				py={{ base: '1rem', xl: '2.2rem' }}
				gap={'0.8rem'}
			>
				<Text letterSpacing={'1.6px'}>In Stock:</Text>
				<Text>5</Text>
			</Flex>
			<Flex
				fontSize={{ base: '1.5rem', xl: '1.9rem' }}
				fontWeight={'600'}
				mb={{ base: '1.5rem', xl: '2.3rem' }}
				gap='0.8rem'
			>
				<Text>Price:</Text>
				<Text>৳850</Text>
			</Flex>
			<AddToCartBtn onclick={handleAddToCart}>Add to cart</AddToCartBtn>
		</Box>
	);
};

export default SingleProductDetails;
