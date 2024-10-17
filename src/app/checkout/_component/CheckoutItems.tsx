import React from 'react';

import {
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Input,
	Radio,
} from '@chakra-ui/react';

const CheckoutItems = () => {
	// const { cartItems, subTotal } = useAppSelector(state => state.cart);

	return (
		<Flex flexDir={'column'} gap={4}>
			<Heading size='lg'>Order Summary</Heading>
			<Grid gridTemplateColumns='2fr 1fr 1fr' borderBottom='1px dashed' pb={4}>
				<Heading size='sm'>Item</Heading>
				<Heading size='sm'>qty</Heading>
				<Heading size='sm'>Total</Heading>
			</Grid>

			{/* {cartItems.map((item: CartItemProps, i: number) => ( */}
			<Grid gridTemplateColumns='2fr 1fr 1fr'>
				<Flex alignItems='center' gap={4}>
					<Image
						src={'/images/card_1.jpg'}
						h='64px'
						w='64px'
						objectFit='cover'
						alt='img chekcout'
					/>
					<Heading size='sm'>item name</Heading>
				</Flex>
				<Flex alignItems='center'>
					<Heading size='sm'>
						{/* {currency?.symbol} {item.price.toLocaleString()} x {item.qty} */}{' '}
						price*quantity
					</Heading>
				</Flex>
				<Flex alignItems='center'>
					<Heading size='sm'>
						{/* {currency?.symbol} {(item.price * item.qty).toLocaleString()} */}
						price*quantity0
					</Heading>
				</Flex>
			</Grid>

			<Flex justifyContent={'space-between'} borderTop='1px dashed' pt={4}>
				<Heading size='sm'>Shipping</Heading>
				{/* <Heading size='sm'>{currency?.symbol} 0.00</Heading> */} 0000
			</Flex>
			<Flex justifyContent={'space-between'}>
				<Heading size='sm'>Subtotal</Heading>
				<Heading size='sm'>
					{/* {currency?.symbol} {subTotal.toLocaleString()} */} sub
				</Heading>
			</Flex>
			<Flex flexDir={'column'}>
				<Heading size='sm'>Payment Method</Heading>

				<Flex alignItems={'center'} gap={4}>
					<Radio isDisabled>Card</Radio>
					<Radio isDisabled>Bkash</Radio>
					<Radio isChecked>Cash On Delivery</Radio>
				</Flex>
			</Flex>
			<Flex justifyContent={'space-between'}>
				<Input placeholder='Apply Coupon Code' size='sm' />
				<Button size='sm'>Apply</Button>
			</Flex>
			<Flex justifyContent={'space-between'} borderTop='1px dashed' pt={4}>
				<Heading size='sm'>Total</Heading>
				<Heading size='sm'>
					{/* {currency?.symbol} {subTotal.toLocaleString()} */}subtotal
				</Heading>
			</Flex>
		</Flex>
	);
};

export default CheckoutItems;
