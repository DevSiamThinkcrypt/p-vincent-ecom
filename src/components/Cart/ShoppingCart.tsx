/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import CartItemCard from './CartItemCart';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Icon } from '../Icon';
import Link from 'next/link';

// Demo Data for Cart Items
const storedCartItems = [
	{ id: 1, name: 'Starbucks Coffee', price: '$10', quantity: 1 },
	{ id: 2, name: 'Cookie Dough', price: '$15', quantity: 2 },
	{ id: 3, name: 'My Neighbor Totoro', price: '$20', quantity: 1 },
];

const no_of_items = storedCartItems.length;
const subtotal = storedCartItems.reduce(
	(acc, item) => acc + parseFloat(item.price.substring(1)) * item.quantity,
	0
);
type ShoppingCartType = {
	showCart?: any;
	setShowCart?: any;
};

const ShoppingCart: FC<ShoppingCartType> = ({ showCart, setShowCart }) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			_after={{
				content: '""',
				position: 'fixed',
				top: 0,
				right: 0,
				transform: showCart ? 'translateX(0)' : 'translateX(100%)',
				w: 'full',
				h: 'full',
				bg: 'rgba(0,0,0,0.5)',
				zIndex: 99,
			}}
		>
			<Box
				transition='all 0.3s ease-in'
				pos='fixed'
				top={0}
				right={0}
				w='30rem'
				h='100vh'
				bg={colors?.white}
				pt='10'
				mb='20'
				zIndex={100}
				transform={`${showCart ? 'translateX(0)' : 'translateX(30rem)'} `}
			>
				<Box
					w='max-content'
					pos='absolute'
					top='1.5rem'
					right='1rem'
					onClick={() => setShowCart(!showCart)}
					cursor='pointer'
				>
					<Icon name='times' color={colors?.light_black} size={28} />
				</Box>
				<Box
					w={{ base: 'full', md: '450px' }}
					color={colors?.light_black}
					px='4'
					pos='relative'
				>
					<Heading as='h1' fontSize='24px' pb='10'>
						Shopping Cart
					</Heading>
					<Box w='full' display='flex' flexDir='column' alignItems='start'>
						<Heading
							as='h2'
							fontSize='24px'
							pl='0.5rem'
							fontWeight='semibold'
							textAlign='left'
							w='full'
						>
							Added Items: {no_of_items}
						</Heading>
						<Box
							w='full'
							display='flex'
							flexDir='column'
							alignItems='center'
							gap='4'
							p='2'
						>
							{/* Cart Item List */}
							{storedCartItems.map((item, index) => (
								<CartItemCard product={item} key={index} />
							))}
						</Box>
					</Box>
				</Box>
				<Box
					w='full'
					display='flex'
					flexDir='column'
					alignItems='center'
					py='2rem'
					gap='4'
					bg={colors?.nav_hover}
					px='2rem'
					pos='absolute'
					left={0}
					bottom={0}
				>
					<Flex
						color={colors?.light_black}
						w='full'
						justifyContent='space-between'
						alignItems={'center'}
					>
						<Heading fontSize={'1.4rem'} color={colors?.text_color}>
							Subtotal{' '}
						</Heading>
						<Text fontSize={'1.2rem'} fontWeight={'500'}>
							৳ {subtotal.toFixed(2)}
						</Text>
					</Flex>
					<Button
						w='full'
						py='16px'
						rounded='lg'
						bg={colors?.light_black}
						color='white'
						_hover={{ bg: colors?.text_color }}
					>
						<Link href='/checkout'>Checkout</Link>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ShoppingCart;
