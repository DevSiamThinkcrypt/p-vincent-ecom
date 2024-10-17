/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import PageLayout from '@/components/layout/Layout';
import PageContainer from '@/components/PageContainer/PageContainer';
import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
import ProductDescription from '@/components/SingleProductDetails/ProductDescription';
import ProductReview from '@/components/SingleProductDetails/ProductReview';
import ProductShare from '@/components/SingleProductDetails/ProductShare';
import SingleProductDetails from '@/components/SingleProductDetails/SingleProductDetails';
import useCustomStyle from '@/hooks/useCustomStyle';

import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type ProductDetailsTypes = {
	params: any;
};
type CartItem = {
	id: number;
	quantity: number;
};
const ProductDetails: NextPage<ProductDetailsTypes> = ({ params }) => {
	const { id } = params;
	const { colors } = useCustomStyle();
	console.log(id);
	const handleAddToCart = (item: CartItem) => {
		console.log('clicked cart', item);
	};
	return (
		<PageLayout>
			<Box mt='8rem' mb={'5rem'} px='1rem'>
				<PageContainer>
					<Grid
						gridTemplateColumns={{ base: '1fr', lg: '1.5fr 3fr' }}
						gridColumnGap={'1.3rem'}
					>
						<GridItem
							justifySelf={{ base: 'center' }}
							w={{ base: '100%', sm: '90%', md: '80%', lg: 'full' }}
							h={{ base: '100%', sm: '90%', md: '90%', lg: 'full' }}
						>
							<Image
								src='/images/bath_salt_1.jpg'
								alt='product image'
								w='full'
								h='full'
								objectFit={'cover'}
							/>
						</GridItem>
						<GridItem>
							<SingleProductDetails handleAddToCart={handleAddToCart} />
						</GridItem>
					</Grid>
					<ProductShare />
					<ProductDescription />
					<ProductReview />
				</PageContainer>
			</Box>
			<Box py='4rem' bg={colors?.lighter_grey}>
				<RelatedProduct />
			</Box>
		</PageLayout>
	);
};

export default ProductDetails;
