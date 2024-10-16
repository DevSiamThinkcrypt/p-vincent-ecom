/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import AddToCartBtn from '@/components/AddToCartBtn/AddToCartBtn';
import PageLayout from '@/components/layout/Layout';
import PageContainer from '@/components/PageContainer/PageContainer';
import useCustomStyle from '@/hooks/useCustomStyle';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type ProductDetailsTypes = {
	params: any;
};

const ProductDetails: NextPage<ProductDetailsTypes> = ({ params }) => {
	const { id } = params;
	const { colors } = useCustomStyle();
	console.log(id);
	const handleAddToCart = () => {
		console.log('clicked cart');
	};
	return (
		<PageLayout>
			<Box mt='8rem'>
				<PageContainer>
					<Grid gridTemplateColumns='1.5fr 3fr' gridColumnGap={'1.3rem'}>
						<GridItem>
							<Image
								src='/images/bath_salt_1.jpg'
								alt='product image'
								w='full'
								h='full'
							/>
						</GridItem>
						<GridItem>
							<Box ml='4vw'>
								<Heading
									as='h1'
									fontSize={'32px'}
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
								<Flex pt='1.3rem' pb='2rem'>
									star
								</Flex>
								<Text fontSize={'20px'} fontWeight={'300'} mb='0.8rem'>
									Notes: Spring Flowers, Natural Patchouli & White Cedar
								</Text>
								<Flex
									fontSize={'0.92rem'}
									fontWeight={'500'}
									color={colors?.text_gray}
									gap='0.5rem'
								>
									<Text letterSpacing={'1px'}>Category:</Text>
									<Text>Scented Candles</Text>
								</Flex>
								<Flex
									fontSize={'0.92rem'}
									fontWeight={'500'}
									color={colors?.text_gray}
									gap='0.5rem'
								>
									<Text letterSpacing={'1px'}>Sub Category:</Text>
									<Text>Star Wars Special</Text>
								</Flex>
								<Flex fontSize={'0.92rem'} fontWeight={'500'} py='2.2rem'>
									<Text>In Stock:</Text>
									<Text>5</Text>
								</Flex>
								<Flex
									fontSize={'1.9rem'}
									fontWeight={'600'}
									mb='2.2rem'
									gap='0.8rem'
								>
									<Text>Price:</Text>
									<Text>৳850</Text>
								</Flex>
								<AddToCartBtn onclick={handleAddToCart}>
									Add to cart
								</AddToCartBtn>
							</Box>
						</GridItem>
					</Grid>
				</PageContainer>
			</Box>
		</PageLayout>
	);
};

export default ProductDetails;
