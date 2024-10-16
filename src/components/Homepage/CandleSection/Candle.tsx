'use client';
import ProductCard from '@/components/Card/Card';
import Title from '@/components/Title/Title';
import { Box, Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { homePageData } from '@/lib/data/homePageData';
import SwiperCore from 'swiper';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Icon } from '@/components/Icon';

const handCraftSlider = homePageData?.handCraft?.slider;
const handCraftHeading = homePageData?.handCraft?.title;
const handCraftSubHeading = homePageData?.handCraft?.subTitle;

const CandleSection = () => {
	const swiperRef = useRef<SwiperCore>();
	const { colors } = useCustomStyle();
	const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
		<Flex
			bg={colors?.white}
			position='absolute'
			top='50%'
			transform='translateY(-50%)'
			left={{ base: '1rem', lg: '2rem' }}
			justifyContent='center'
			alignItems='center'
			w='3.4rem'
			h='3.4rem'
			cursor='pointer'
			borderRadius='full'
			boxShadow='0 3px 10px rgba(0,0,0,0.1)'
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
			right={{ base: '1rem', lg: '2rem' }}
			justifyContent='center'
			alignItems='center'
			w='3.4rem'
			h='3.4rem'
			cursor='pointer'
			borderRadius='full'
			boxShadow='0 3px 10px rgba(0,0,0,0.1)'
			zIndex='10'
			onClick={onClick}
		>
			<Icon name='arrow_card_right' color={colors.light_black} size={25} />
		</Flex>
	);

	return (
		<Box pt={{ base: '6.5rem', md: '6.5rem' }} bg={colors?.body_bg}>
			<Title heading={handCraftHeading} subHeading={handCraftSubHeading} />
			<Box
				px={{ base: '3vw', sm: '6vw', lg: '10vw' }}
				pos='relative'
				overflowX='hidden'
			>
				<Swiper
					slidesPerView={1}
					onSwiper={swiper => (swiperRef.current = swiper)}
					breakpoints={{
						1536: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
						1280: {
							slidesPerView: 3,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
							// centeredSlides: true
						},
					}}
					style={{ overflow: 'visible' }}
				>
					{handCraftSlider.map((sliderData, i) => (
						<SwiperSlide key={i}>
							<ProductCard sliderData={sliderData} />
						</SwiperSlide>
					))}
				</Swiper>
				<CustomNextArrow onClick={() => swiperRef.current?.slideNext()} />
				<CustomPrevArrow onClick={() => swiperRef.current?.slidePrev()} />
			</Box>
		</Box>
	);
};

export default CandleSection;
