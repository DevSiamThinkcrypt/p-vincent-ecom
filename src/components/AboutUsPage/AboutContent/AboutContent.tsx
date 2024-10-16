import PageContainer from '@/components/PageContainer/PageContainer';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type AboutContentTypes = {
	aboutContent: {
		heading?: string;
		paraOne?: string;
		paraTwo?: string;
		paraThree?: string;
		paraFour?: string;
		paraFive?: string;
	};
};

const AboutContent: FC<AboutContentTypes> = ({ aboutContent }) => {
	const { colors } = useCustomStyle();
	return (
		<PageContainer>
			<Flex flexDir={'column'} py='4rem' gap='1.5rem' px='1rem'>
				<Heading
					fontWeight={500}
					color={colors?.text_color}
					letterSpacing={2}
					mb='1.6rem'
					maxW='90rem'
				>
					{aboutContent?.heading}{' '}
				</Heading>
				<Text
					color={colors?.text_gray}
					lineHeight={'1.7rem'}
					fontSize={'1.1rem'}
					letterSpacing={1.5}
					maxW='90rem'
				>
					{aboutContent?.paraOne}
				</Text>
				<Text
					color={colors?.text_gray}
					lineHeight={'1.7rem'}
					fontSize={'1.1rem'}
					letterSpacing={1.5}
					maxW='90rem'
				>
					{aboutContent?.paraTwo}
				</Text>
				<Text
					color={colors?.text_gray}
					lineHeight={'1.7rem'}
					fontSize={'1.1rem'}
					letterSpacing={1.5}
					maxW='90rem'
				>
					{aboutContent?.paraThree}
				</Text>
				<Text
					color={colors?.text_gray}
					lineHeight={'1.7rem'}
					fontSize={'1.1rem'}
					letterSpacing={1.5}
					maxW='90rem'
				>
					{aboutContent?.paraFour}
				</Text>
				<Text
					color={colors?.text_gray}
					lineHeight={'1.7rem'}
					fontSize={'1.1rem'}
					letterSpacing={1.5}
					maxW={{ base: '90rem' }}
				>
					{aboutContent?.paraFive}
				</Text>
			</Flex>
		</PageContainer>
	);
};

export default AboutContent;
