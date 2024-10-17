import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '../Icon';
import useCustomStyle from '@/hooks/useCustomStyle';

const ProductShare = () => {
	const { colors } = useCustomStyle();
	return (
		<Flex
			flexDir={{ base: 'column', sm: 'row' }}
			gap={{ base: '0.5rem', small: '0.9rem' }}
			alignItems={{ base: 'left', sm: 'center' }}
			py={{ base: '3rem', sm: '2rem' }}
		>
			<Text fontWeight={'500'} letterSpacing={'1.8px'}>
				Share This Item:
			</Text>
			<Box ml={{ base: '-0.3rem', sm: 0 }}>
				<Flex gap='0.1rem' alignItems='center'>
					<Box
						p='0.5rem'
						transition='all 0.2s ease-in'
						_hover={{ bg: colors?.lighter_grey }}
						cursor={'pointer'}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							backgroundColor={colors?.fb_color}
							w='2rem'
							h='2rem'
							rounded='full'
						>
							<Icon name='fb_solid' color={colors?.white} />
						</Flex>
					</Box>
					<Box
						p='0.5rem'
						transition='all 0.2s ease-in'
						_hover={{ bg: colors?.lighter_grey }}
						cursor={'pointer'}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							backgroundColor={colors?.whatsapp_color}
							w='2rem'
							h='2rem'
							rounded='full'
						>
							<Icon name='whatsapp' color={colors?.white} />
						</Flex>
					</Box>
					<Box
						p='0.5rem'
						transition='all 0.2s ease-in'
						_hover={{ bg: colors?.lighter_grey }}
						cursor={'pointer'}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							backgroundColor={colors?.pinterest_color}
							w='2rem'
							h='2rem'
							rounded='full'
						>
							<Icon name='pinterest' color={colors?.white} size={20} />
						</Flex>
					</Box>
					<Box
						p='0.5rem'
						transition='all 0.2s ease-in'
						_hover={{ bg: colors?.lighter_grey }}
						cursor={'pointer'}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							backgroundColor={colors?.twitter_color}
							w='2rem'
							h='2rem'
							rounded='full'
						>
							<Icon name='twitter' color={colors?.white} size={20} />
						</Flex>
					</Box>
					<Box
						p='0.5rem'
						transition='all 0.2s ease-in'
						_hover={{ bg: colors?.lighter_grey }}
						cursor={'pointer'}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							backgroundColor={colors?.gmail_color}
							w='2rem'
							h='2rem'
							rounded='full'
						>
							<Icon name='mail_solid' color={colors?.white} />
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default ProductShare;
