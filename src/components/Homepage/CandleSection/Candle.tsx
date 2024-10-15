'use client';
import ProductCard from '@/components/Card/Card';
import Title from '@/components/Title/Title';
import { Box, Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { homePageData } from '@/lib/data/homePageData';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Icon } from '@/components/Icon';

const handCraftSlider = homePageData?.handCraft?.slider;

const CandleSection = () => {
	const swiperRef = useRef<SwiperCore>();
	const { colors } = useCustomStyle();
	const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
		<Flex
			bg={colors?.white}
			position='absolute'
			top='50%'
			transform='translateY(-50%)'
			left={{ base: '15rem', lg: '2rem' }}
			justifyContent='center'
			alignItems='center'
			w='3.4rem'
			h='3.4rem'
			cursor='pointer'
			borderRadius='full'
			zIndex='10'
			onClick={onClick}
		>
			<Icon name='arrow_card_left' color={colors.light_black} size={25} />
		</Flex>
	);

	const CustomNextArrow = ({ onClick }: { onClick: () => void }) => (
		<Flex
			bg={colors?.white}
			position='absolute'
			top='50%'
			transform='translateY(-50%)'
			right={{ base: '2rem', lg: '-100rem' }}
			justifyContent='center'
			alignItems='center'
			w='3.4rem'
			h='3.4rem'
			cursor='pointer'
			borderRadius='full'
			zIndex='10'
			onClick={onClick}
		>
			<Icon name='arrow_card_right' color={colors.light_black} size={25} />
		</Flex>
	);
	return (
		<Box pt={{ base: '6.5rem', md: '6.5rem' }} mb='5rem' bg={colors.body_bg}>
			<Title
				heading='Handcrafted Scented Candles'
				subHeading='With over hundreds of fragrances to choose from'
			/>
			<Box ml='10vw' w='115rem' pos='relative'>
				<Swiper
					spaceBetween={2}
					slidesPerView={5}
					// onSlideChange={() => console.log('slide change')}
					modules={[Navigation]}
					navigation={true}
					onSwiper={swiper => (swiperRef.current = swiper)}
					// style={{ overflowX: 'visible' }}
					breakpoints={{
						// when window width is >= 640px
						1280: {
							slidesPerView: 5,
						},

						1024: {
							slidesPerView: 4,
						},

						640: {
							slidesPerView: 3,
						},
						480: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
				>
					{handCraftSlider.map((sliderData, i) => (
						<SwiperSlide key={i}>
							<ProductCard sliderData={sliderData} />
						</SwiperSlide>
					))}
				</Swiper>
				<Box pos='absolute' top='50%'>
					<CustomNextArrow onClick={() => swiperRef.current?.slideNext()} />
					<CustomPrevArrow onClick={() => swiperRef.current?.slidePrev()} />
				</Box>
			</Box>
		</Box>
	);
};

export default CandleSection;
