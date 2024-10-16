import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { Icon } from '../Icon';
import Link from 'next/link';
import { FC } from 'react';

type ProductCardTypes = {
	id?: number | string;
	sliderData: {
		id?: number | string;
		image?: string;
		productTitle?: string;
		productSubtitle?: string;
		productOz?: string;
	};
};

const ProductCard: FC<ProductCardTypes> = ({ sliderData, id }) => {
	const { colors } = useCustomStyle();

	return (
		// card box (card)
		<Link
			href={`/product/${id}`}
			style={{ maxWidth: '500px', width: '100%', display: 'inline-block' }}
		>
			<Box
				w='full'
				borderRadius='lg'
				boxShadow='0 3px 10px rgba(0,0,0,0.08)'
				bg='white'
				overflow='hidden'
				paddingBottom='0.8rem'
				minH={{ base: 'auto', sm: '30rem' }}
				transition='all 0.3s ease'
				_hover={{
					boxShadow: '0 3px 10px rgba(0,0,0,0.098)',
					transform: 'scale(1.02)',
				}}
			>
				{/* // card image */}
				<Image
					src={sliderData?.image}
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
						{sliderData?.productTitle ? sliderData?.productTitle : ''}
					</Text>
					<Text fontSize='1.1rem' fontWeight='600'>
						{sliderData?.productSubtitle ? sliderData?.productSubtitle : ''}
					</Text>
					<Text fontSize='0.9rem' fontWeight={500} color={colors.text_gray}>
						{sliderData?.productOz ? sliderData?.productOz : ''}
					</Text>
				</Box>
				<Flex p='1rem' justifyContent='space-between'>
					<Flex alignItems='center' gap='0.5rem'>
						<Icon name='heart' color={colors.light_black} />
						<Icon name='cart_arrow' size={25} color={colors.light_black} />
					</Flex>
					<Icon size={25} name='arrow_card_right' color={colors.light_black} />
				</Flex>
			</Box>
		</Link>
	);
};

export default ProductCard;
