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

const BathSaltsSlider = homePageData?.BathSalts?.slider;
const BathSaltsHeading = homePageData?.BathSalts?.title;
const BathSaltsSubHeading = homePageData?.BathSalts?.subTitle;

const BathSaltSection = () => {
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
			zIndex='10'
			onClick={onClick}
		>
			<Icon name='arrow_card_right' color={colors.light_black} size={25} />
		</Flex>
	);

	return (
		<Box pt={{ base: '6.5rem', md: '6.5rem' }} bg={colors?.body_bg}>
			<Title heading={BathSaltsHeading} subHeading={BathSaltsSubHeading} />
			<Box
				ml={{ base: '0', lg: '10vw' }}
				w={{ base: '100%', lg: '85vw' }}
				pos='relative'
			>
				<Swiper
					spaceBetween={15}
					slidesPerView={1}
					onSwiper={swiper => (swiperRef.current = swiper)}
					// style={{ overflow: 'visible' }}
					breakpoints={{
						1536: {
							slidesPerView: 5,
							spaceBetween: 25,
						},
						1280: {
							slidesPerView: 4,
							spaceBetween: 25,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						0: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
					}}
				>
					{BathSaltsSlider.map((sliderData, i) => (
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

export default BathSaltSection;
