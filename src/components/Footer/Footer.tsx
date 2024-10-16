import useCustomStyle from '@/hooks/useCustomStyle';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import PageContainer from '../PageContainer/PageContainer';
import { Icon } from '../Icon';
import Link from 'next/link';

const Footer = () => {
	const { colors } = useCustomStyle();
	// const [isHover, setIsHover] = useState(false);
	// const [isHover2, setIsHover2] = useState(false);
	return (
		<Box>
			<Box bg={colors?.body_bg} py={{ base: '6rem', md: '10rem' }} px='1rem'>
				<PageContainer>
					<Grid
						gridTemplateColumns={{
							base: '1fr',
							sm: 'repeat(2,1fr)',
							lg: 'repeat(4,1fr)',
						}}
						gridRowGap={{ base: '3.5rem', lg: 0 }}
					>
						<GridItem>
							<Heading fontSize='1.25rem'>Vincent&#39;s Sphere</Heading>
							<Flex flexDir='column' gap='1rem' mt='1.5rem'>
								<Flex alignItems='center' gap='1rem'>
									<Icon name='phone' color={colors?.light_black} />
									<Text>01312-795919</Text>
								</Flex>
								<Flex alignItems='center' gap='1rem'>
									<Icon name='mail' color={colors?.light_black} />
									<Link href='mailto:support@vincentsphere.com'>
										<Text
											transition='all 0.2s ease'
											_hover={{
												color: colors?.text_pink,
												textDecoration: 'underline',
											}}
										>
											support@vincentsphere.com
										</Text>
									</Link>
								</Flex>
							</Flex>
						</GridItem>
						<GridItem justifySelf={{ base: 'left', sm: 'center' }}>
							<Heading fontSize='1.25rem'>Navigation</Heading>
							<Flex flexDir='column' gap='0.8rem' mt='1.5rem'>
								<Link href='/'>
									<Text
										transition='all 0.2s ease'
										_hover={{
											color: colors?.text_pink,
											textDecoration: 'underline',
										}}
									>
										Home
									</Text>
								</Link>
								<Link href='/about'>
									<Text
										transition='all 0.2s ease'
										_hover={{
											color: colors?.text_pink,
											textDecoration: 'underline',
										}}
									>
										About
									</Text>
								</Link>
							</Flex>
						</GridItem>
						<GridItem justifySelf={{ base: 'left', lg: 'center' }}>
							<Heading fontSize='1.25rem'>Legal</Heading>
							<Flex flexDir='column' gap='0.8rem' mt='1.5rem'>
								<Link href='/privacy-policy'>
									<Text
										transition='all 0.2s ease'
										_hover={{
											color: colors?.text_pink,
											textDecoration: 'underline',
										}}
									>
										Privacy Policy
									</Text>
								</Link>
								<Link href='/service-term'>
									<Text
										transition='all 0.2s ease'
										_hover={{
											color: colors?.text_pink,
											textDecoration: 'underline',
										}}
									>
										Terms of Service
									</Text>
								</Link>
							</Flex>
						</GridItem>
						<GridItem justifySelf={{ base: 'left', sm: 'center' }}>
							<Heading fontSize='1.25rem'>Social</Heading>
							<Flex alignItems='center' gap='1rem' mt='1.5rem'>
								<Box
								// onMouseEnter={() => setIsHover(true)}
								// onMouseLeave={() => setIsHover(false)}
								>
									<Link href='#'>
										<Icon
											name='facebook'
											// color={isHover ? colors?.text_pink : colors?.light_black}
											color={colors?.light_black}
										/>
									</Link>
								</Box>
								<Box
								// onMouseEnter={() => setIsHover(true)}
								// onMouseLeave={() => setIsHover(false)}
								>
									<Link href='#'>
										<Icon
											name='instragram'
											color={colors?.light_black}
											size={25}
										/>
									</Link>
								</Box>
							</Flex>
						</GridItem>
					</Grid>
				</PageContainer>
			</Box>
			<Flex
				bg={colors?.light_black}
				py='1rem'
				gap='0.8rem'
				justifyContent='center'
				alignItems={{ base: 'center' }}
				flexDir={{ base: 'column', md: 'row' }}
			>
				<Text color={colors?.white} textAlign={'center'}>
					Copyright © 2021, Vincent&#39;s Sphere | All rights reserved |
					Developed by
				</Text>
				<Link href='http://thinkcrypt.io/'>
					<Text color={colors?.text_pink}>thinkcrypt.io</Text>
				</Link>
			</Flex>
		</Box>
	);
};

export default Footer;
