/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import PageContainer from '../PageContainer/PageContainer';
import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import StoryHeading from './StoryComponent/StoryHeading';
import StoryContent from './StoryComponent/StoryContent';
import { homePageData } from '@/lib/data/homePageData';
import Button from '../Button/Button';
import useCustomStyle from '@/hooks/useCustomStyle';
console.log('deata:', homePageData);
const Story = () => {
	const { colors } = useCustomStyle();
	return (
		<Box bg={colors?.body_bg}>
			<PageContainer>
				<Grid
					gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
					pt={{ base: '8.5rem', md: '12.5rem' }}
					alignItems='center'
					px='1rem'
				>
					<GridItem order={{ base: 2, lg: 1 }} mt={{ base: '2rem', lg: 0 }}>
						<Flex
							justifyContent={{ base: 'center', lg: 'flex-start' }}
							alignItems='center'
							// pr={{ base: '1rem', lg: 0 }}
						>
							<Image
								src='/images/storyimage.jpeg'
								alt='story image'
								maxW={{ base: '21rem', md: '22.2rem', lg: '29.25rem' }}
								maxH='55rem'
								objectFit='cover'
							/>
						</Flex>
					</GridItem>
					<GridItem pl='1rem' order={{ base: 1, lg: 2 }}>
						<StoryHeading storyHeading={homePageData?.story?.storyHeading} />
						<StoryContent storyConetent={homePageData?.story?.stroyPara} />
						<Box mt='3rem'>
							<Button
								link='#'
								_hover={{ bg: colors?.nav_hover, color: colors?.light_black }}
							>
								Learn More
							</Button>
						</Box>
					</GridItem>
				</Grid>
			</PageContainer>
		</Box>
	);
};

export default Story;
