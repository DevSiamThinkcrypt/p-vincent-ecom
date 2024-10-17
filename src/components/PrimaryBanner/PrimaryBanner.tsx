import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import PageContainer from '../PageContainer/PageContainer';

type PrimaryBannerTypes = {
	aboutBanner: {
		image?: string;
		title?: string;
	};
};

const PrimaryBanner: FC<PrimaryBannerTypes> = ({ aboutBanner }) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			pos='relative'
			_before={{
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				w: 'full',
				h: 'full',
				bg: 'rgba(0, 0, 0, 0.15)', // Adjust the opacity and color of the overlay as needed
				zIndex: 1,
			}}
			bgImage={`url(${aboutBanner?.image})`}
			backgroundSize='cover'
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			w='full'
			pt={{ base: '10rem', sm: '15rem' }}
			pb={{ base: '2rem', sm: '6rem' }}
			px='1rem'
		>
			<PageContainer>
				<Heading
					color={colors?.white}
					fontSize={{ base: '2.2rem', md: '3.25rem' }}
				>
					{aboutBanner?.title}
				</Heading>
			</PageContainer>
		</Box>
	);
};

export default PrimaryBanner;
