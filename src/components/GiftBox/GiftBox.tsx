import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import Title from '../Title/Title';
import { homePageData } from '@/lib/data/homePageData';
import PageContainer from '../PageContainer/PageContainer';
import Link from 'next/link';
import useCustomStyle from '@/hooks/useCustomStyle';

const giftBoxCard = homePageData?.giftBox?.giftBoxCard;
const giftBoxHeading = homePageData?.giftBox?.title;
const giftBoxSubHeading = homePageData?.giftBox?.subTitle;

const GiftBox = () => {
	const { colors } = useCustomStyle();
	return (
		<Box
			pt={{ base: '6.5rem', md: '6.5rem' }}
			pb='3rem'
			bg={colors?.body_bg}
			px='1rem'
		>
			<Title heading={giftBoxHeading} subHeading={giftBoxSubHeading} />
			<PageContainer>
				<Grid
					gridTemplateColumns={{
						base: '1fr',
						md: 'repeat(2, minmax(20rem, 1fr))',
					}}
					gap={{ base: '1.2rem', lg: '2.1rem' }}
				>
					{giftBoxCard.map((gift, i) => (
						<Link href='#' key={i} style={{ display: 'inline-block' }}>
							<GridItem
								bgImage={`url(${gift?.image})`}
								backgroundSize='cover'
								backgroundPosition='center'
								backgroundRepeat='no-repeat'
								w='full'
								h={{ base: '25rem', md: '30rem' }}
								transition='all 0.3s ease'
								_hover={{ transform: 'scale(1.02)' }}
							>
								<Flex
									w='full'
									h='full'
									flexDir='column'
									justifyContent='center'
									alignItems='center'
								>
									<Heading
										color='white'
										textShadow='2px 2px 8px rgba(0, 0, 0, 0.8)'
										fontSize={{ base: '1.8rem', lg: '2.25rem' }}
									>
										{gift?.giftTitle}
									</Heading>
									<Heading
										color='white'
										textShadow='2px 2px 8px rgba(0, 0, 0, 0.8)'
										fontSize={{ base: '1.8rem', lg: '2.25rem' }}
									>
										{gift?.giftSubTitle}
									</Heading>
								</Flex>
							</GridItem>
						</Link>
					))}
				</Grid>
			</PageContainer>
		</Box>
	);
};

export default GiftBox;
