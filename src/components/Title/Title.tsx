import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
type TitleTypes = {
	heading?: string;
	subHeading?: string;
};
const Title: FC<TitleTypes> = ({ heading, subHeading }) => {
	return (
		<Flex
			textAlign='center'
			justifyContent='center'
			alignItems='center'
			flexDir='column'
			marginBlock='1.5rem'
		>
			<Text fontSize='2.5rem' fontWeight='600' lineHeight='45px' mb='0.4rem'>
				{heading}
			</Text>
			<Text fontSize='1.5rem' fontWeight='300'>
				{subHeading}
			</Text>
		</Flex>
	);
};

export default Title;
