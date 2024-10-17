import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

import useCustomStyle from '@/hooks/useCustomStyle';
import { Icon } from '../Icon';

type CartItemType = {
	product: {
		name?: string;
		price?: number | string;
		quantity?: number;
	};
};

const CartItemCard: FC<CartItemType> = ({ product }) => {
	const { colors } = useCustomStyle();
	return (
		<Flex
			justify='space-between'
			align='center'
			w='full'
			borderBottom={'1px solid'}
			borderColor={colors?.text_gray}
			pb='0.4rem'
			_last={{ borderBottom: 'none' }}
		>
			{/* Left */}
			<Flex justify='start' align='start' w='full' gap='1rem'>
				<Image
					src='/images/card_1.jpg'
					alt='Product Image'
					h='120px'
					w='120px'
				/>
				<Flex direction='column'>
					<Text fontSize={'1rem'} fontWeight={'500'} letterSpacing={'1.8px'}>
						{product?.name}
					</Text>

					<Text fontSize={'01rem'} fontWeight={'400'} letterSpacing={'1.6px'}>
						৳ 850.00
					</Text>
					<Flex
						bg={colors?.lighter_grey}
						px='1rem'
						alignItems={'center'}
						rounded='full'
						justifyContent='space-between'
						w='6.5rem'
						mt='1rem'
					>
						<Box>
							<Icon name='minus_icon' color={colors?.light_black} size={15} />
						</Box>
						<Text fontWeight={'500'}>3</Text>
						<Box>
							<Icon name='plus_icon' color={colors?.light_black} size={15} />
						</Box>
					</Flex>

					<Text py='0.2rem' cursor={'pointer'} color={colors?.pinterest_color}>
						Remove
					</Text>
				</Flex>
			</Flex>
			{/* Right */}
		</Flex>
	);
};
export default CartItemCard;
