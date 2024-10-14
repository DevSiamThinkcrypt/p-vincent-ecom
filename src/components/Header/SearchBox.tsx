import { Box, Flex, Grid, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Icon } from '../Icon';
import useCustomStyle from '@/hooks/useCustomStyle';

type SearchBoxProps = {
	setShowSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBox: FC<SearchBoxProps> = ({ setShowSearchBox }) => {
	const { colors } = useCustomStyle();
	return (
		<Flex h='full' flexDir='column' alignItems='center' justifyContent='center'>
			<Grid
				gridTemplateColumns='2fr 0.2fr'
				border='1px solid'
				borderColor={colors.light_black}
				maxW='1024px'
				w='full'
			>
				<Input
					border='none'
					outline='none'
					placeholder='Search'
					_placeholder={{
						letterSpacing: '5px',
					}}
					color={colors?.light_black}
					borderRadius='0'
					_focus={{
						outline: 'none',
						boxShadow: 'none',
						borderColor: 'white',
					}}
				/>
				<Flex
					w='full'
					h='full'
					bg={colors.light_black}
					alignItems='center'
					justifyContent='center'
					cursor='pointer'
					transform='translateX(1px)'
				>
					<Icon name='search' />
				</Flex>
			</Grid>
			<Text mt='5rem' fontSize='1.4rem' color={colors.light_black}>
				Search for a product
			</Text>
			<Box
				pos='absolute'
				top='1.3rem'
				right='15rem'
				onClick={() => setShowSearchBox(false)}
			>
				<Icon name='times' color={colors.black} size={27} />
			</Box>
		</Flex>
	);
};

export default SearchBox;
