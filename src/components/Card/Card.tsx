import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { Icon } from '../Icon';
import { col } from 'framer-motion/client';
import Link from 'next/link';

const ProductCard = () => {
	const { colors } = useCustomStyle();
	return (
		// card box (card)
		<Link href='#' style={{ maxWidth: '400px', display: 'inline-block' }}>
			<Box
				w='full'
				borderRadius='lg'
				boxShadow='0 3px 10px rgba(0,0,0,0.08)'
				bg='white'
				overflow='hidden'
				paddingBottom='0.8rem'
			>
				{/* // card image */}
				<Image
					src='/images/card_1.jpg'
					alt='card image'
					w='full'
					maxH='20rem'
					objectFit='cover'
				/>
				{/* product body */}
				<Box px='1rem' pt='1rem'>
					<Text
						textTransform='uppercase'
						fontSize='0.75rem'
						fontWeight='500'
						color={colors.text_pink}
					>
						winter essentials
					</Text>
					<Text fontSize='1.1rem' fontWeight='600'>
						Starbucks Coffee
					</Text>
					<Text fontSize='0.9rem' fontWeight={500} color={colors.text_gray}>
						8 oz
					</Text>
				</Box>
				<Flex p='1rem' justifyContent='space-between'>
					<Flex alignItems='center' gap='0.5rem'>
						<Icon name='heart' color={colors.light_black} />
						<Icon name='cart_arrow' size={25} color={colors.light_black} />
					</Flex>
					<Icon size={25} name='arriw_card_right' color={colors.light_black} />
				</Flex>
			</Box>
		</Link>
	);
};

export default ProductCard;
