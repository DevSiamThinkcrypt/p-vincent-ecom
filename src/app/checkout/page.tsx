/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useGetSelfQuery } from '@/store/services/authApi';
import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import CheckoutItems from './_components/CheckoutItems';
import { usePostMutation } from '@/store/services/commonApi';
// import { resetCart } from '@/store/slices/cartSlice';
// import useCustomToast from '@/components/hooks/useCustomToast';
// import { useRouter } from 'next/navigation';

import VInput from '@/components/Test/VInput';
import CheckoutItems from './_component/CheckoutItems';
import PageContainer from '@/components/PageContainer/PageContainer';
import PageLayout from '@/components/layout/Layout';
import TextAreaTest from '@/components/Test/TextAreaTest';
import ButtonSecondary from '@/components/ButtonSecondary/ButtonSecondary';

const CheckoutPage = () => {
	const [address, setAddress] = useState<any>({
		name: '',
		email: '',
		phone: '',
		street: '',
		city: '',
		postalCode: '',
	});

	// const { cartItems } = useAppSelector(state => state.cart);
	const [trigger, result] = usePostMutation();
	// const [triggerCart, resultCart] = usePostMutation();
	// const dispatch = useAppDispatch();

	const { data, isLoading } = useGetSelfQuery({});

	const onChange = (e: React.ChangeEvent<any>) => {
		setAddress({
			...address,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = () => {
		const body = {
			address,
			// cart: resultCart.data,
			isPaid: false,
			paymentMethod: 'cash on delivery',
			paymentAmount: 0,
			status: 'pending',
		};
		trigger({ path: 'orders', body });
	};

	useEffect(() => {
		if (!data) return;
		setAddress({
			name: data.name,
			email: data.email,
			phone: data.phone,
		});
	}, [data, isLoading]);

	// const router = useRouter();

	// useEffect(() => {
	// 	if (result.isSuccess) {
	// 		dispatch(resetCart());
	// 		router.push(`/invoice/${result.data.order._id}`);
	// 	}
	// }, [result]);

	// useEffect(() => {
	// 	triggerCart({
	// 		body: { items: cartItems, discount: 0, shipping: 0 },
	// 		path: 'orders/cart-total',
	// 	});
	// }, [cartItems]);

	const isDisabled =
		!address.name ||
		!address.email ||
		!address.phone ||
		!address.street ||
		!address.city ||
		!address.postalCode;

	// useCustomToast({
	// 	isError: result.isError,
	// 	isSuccess: result.isSuccess,
	// 	error: result.error,
	// 	isLoading: result.isLoading,
	// 	successText: 'Order placed successfully',
	// 	successTitle: 'Success',
	// });

	return (
		<PageLayout>
			<PageContainer>
				<Grid
					// gap={{ base: 4, md: 12 }}
					justifyItems={'center'}
					gridTemplateColumns={{ base: '1fr' }}
					p={{ base: 4, md: 6 }}
					mt='8rem'
				>
					<Flex flexDir={'column'} gap={4} maxW={'50rem'} w='full'>
						<Heading
							size='xl'
							mb='1.2rem'
							letterSpacing={'0.1rem'}
							textTransform={'uppercase'}
							fontWeight={'400'}
						>
							Shipping
						</Heading>
						<Flex flexDir={'column'} gap={4}>
							<VInput
								name='name'
								label='Recipient Name'
								value={address.name}
								onChange={onChange}
							/>
							<Grid
								gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
								gap={4}
							>
								<VInput
									name='email'
									label='Recipient Email'
									value={address.email}
									onChange={onChange}
								/>
								<VInput
									name='phone'
									label='Recipient Phone'
									value={address.phone}
									onChange={onChange}
								/>
							</Grid>

							<TextAreaTest
								name='street'
								label='Full Address'
								value={address.street}
								onChange={onChange}
							/>
							<Grid
								gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
								gap={4}
							>
								<VInput
									name='city'
									label='City'
									value={address.city}
									onChange={onChange}
								/>
								<VInput
									name='postalCode'
									label='Postal Code'
									value={address.postalCode}
									onChange={onChange}
								/>
							</Grid>
							<ButtonSecondary link='/checkout-confirm'>
								Continue
							</ButtonSecondary>
						</Flex>
					</Flex>
					{/* <Flex flexDir='column'>
						<CheckoutItems />
						<Button
							bg='#202020'
							border='1px solid #202020'
							color='white'
							_hover={{ bg: 'white', color: '#202020' }}
							isLoading={result.isLoading}
							isDisabled={isDisabled}
							onClick={onSubmit}
						>
							Confirm Order
						</Button>
					</Flex> */}
				</Grid>
			</PageContainer>
		</PageLayout>
	);
};

export default CheckoutPage;
