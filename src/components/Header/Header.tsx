'use client';
import useCustomStyle from '@/hooks/useCustomStyle';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Image,
	Input,
	Text,
	// useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import { Icon } from '../Icon';
import MobileMenu from './MobileMenu';
import SearchBox from './SearchBox';
import Link from 'next/link';

const Header = () => {
	const { colors, fonts } = useCustomStyle();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [showSearchBox, setShowSearchBox] = useState(false);
	// const { isOpen, onOpen, onClose } = useDisclosure();
	// const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

	// const handleToggleCategories = () => {
	// 	setIsCategoriesOpen(!isCategoriesOpen);
	// };
	// Animation Variants for search box
	const searchBoxVariants = {
		hidden: { y: '-10px', opacity: 0 },
		visible: {
			y: '1.125rem',
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 10,
			},
		},
		exit: {
			y: '-100px',
			opacity: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<Box
			bg={colors?.black}
			color='white'
			py={{ base: '1.25rem' }}
			pos='fixed'
			w='full'
			top='0'
			left='0'
			zIndex={99}
		>
			<PageContainer>
				<Grid
					gridTemplateColumns={{ base: '1fr 2fr' }}
					alignItems='center'
					pos='relative'
					zIndex={6}
					fontFamily={fonts.primary}
					px='1rem'
				>
					{/* Logo */}
					<GridItem
						display='flex'
						alignItems='center'
						gap='0.8rem'
						justifyContent='space-between'
					>
						<Image src='/logo/logo.png' alt='logo-image' w='3rem' h='3rem' />
						<Box
							pos='relative'
							onClick={() => setShowSearchBox(!showSearchBox)}
							w={{ base: '15rem', sm: '20rem' }}
						>
							<Input
								placeholder='Search'
								size='md'
								outline='none'
								border='none'
								bg={colors.light_black}
								_hover={{ bg: 'white', color: colors.light_black }}
								_focus={{
									outline: 'none',
									boxShadow: 'none',
									borderColor: 'white',
								}}
								_placeholder={{ fontWeight: 600 }}
							/>
							<Box pos='absolute' zIndex={15} right='1rem' top='0.5rem'>
								<Icon name='search' size={24} color={colors.white} />
							</Box>
						</Box>
					</GridItem>

					{/* Navbar Items */}
					<Flex justifySelf='end' display={{ base: 'none', lg: 'flex' }}>
						<GridItem
							px='2rem'
							_hover={{
								borderBottom: '1px solid',
								borderColor: colors.text_pink,
							}}
						>
							Home
						</GridItem>
						{/* Categories Dropdown */}
						<GridItem
							pos='relative'
							zIndex={6}
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							_hover={{
								borderBottom: '1px solid',
								borderColor: colors.text_pink,
							}}
							px='2rem'
						>
							<Box cursor='pointer' display='flex'>
								<Text>Categories</Text>
								<Icon name='arrow_dropdown' />
							</Box>
							{isDropdownOpen && (
								<Flex
									pos='absolute'
									bg={colors.white}
									flexDir='column'
									shadow='md'
									top='2.4rem'
									borderRadius='sm'
									color={colors.text_color}
									w='12rem'
									zIndex={10}
									gap='0'
									overflow='hidden'
									transition='all 0.3s ease'
									_hover={{ shadow: 'lg' }}
								>
									<Text
										_hover={{
											color: colors.text_color,
											bg: colors.nav_hover,
										}}
										cursor='pointer'
										px='1rem'
										py='0.8rem'
										w='100%'
									>
										<Link href='#'>Scented Candles</Link>
									</Text>
									<Text
										_hover={{
											color: colors.text_color,
											bg: colors.nav_hover,
										}}
										cursor='pointer'
										px='1rem'
										py='0.8rem'
										w='100%'
									>
										<Link href='#'>Bath Salts</Link>
									</Text>
									<Text
										_hover={{
											color: colors.text_color,
											bg: colors.nav_hover,
										}}
										cursor='pointer'
										px='1rem'
										py='0.8rem'
										w='100%'
									>
										<Link href='#'>Satin Scrunchies</Link>
									</Text>
									<Text
										_hover={{
											color: colors.text_color,
											bg: colors.nav_hover,
										}}
										cursor='pointer'
										px='1rem'
										py='0.8rem'
										w='100%'
									>
										<Link href='#'>Dream Catchers</Link>
									</Text>
								</Flex>
							)}
						</GridItem>
						<GridItem
							px='2rem'
							_hover={{
								borderBottom: '1px solid',
								borderColor: colors.text_pink,
							}}
						>
							About us
						</GridItem>

						{/* Cart Icon */}
						<GridItem justifySelf='end' pl='2rem'>
							{/* <Flex gap='0.5rem' alignItems='center' onClick={onOpen}> */}
							<Flex gap='0.5rem' alignItems='center'>
								<Icon name='cart' size={25} />
							</Flex>
						</GridItem>
					</Flex>
					{/* mobile menu */}
					<MobileMenu />
				</Grid>
			</PageContainer>

			{/* Search Box with Motion */}
			{showSearchBox && (
				<motion.div
					initial='hidden'
					animate={showSearchBox ? 'visible' : 'hidden'}
					exit='exit'
					variants={searchBoxVariants}
					style={{ zIndex: -1, position: 'absolute', width: '100%' }}
				>
					<Box
						height={'80vh'}
						bg='white'
						shadow='md'
						pos='absolute'
						top={'100%'}
						left={0}
						w='full'
						className='fromTop'
					>
						<SearchBox setShowSearchBox={setShowSearchBox} />
					</Box>
				</motion.div>
			)}
		</Box>
	);
};

export default Header;
