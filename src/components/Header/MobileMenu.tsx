import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	Collapse,
	Text,
	Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Icon } from '../Icon';
import useCustomStyle from '@/hooks/useCustomStyle';
import Link from 'next/link';

const MobileMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

	const handleToggleCategories = () => {
		setIsCategoriesOpen(!isCategoriesOpen);
	};
	const { colors } = useCustomStyle();

	return (
		<Box display={{ lg: 'none' }} justifySelf='end'>
			{/* Hamburger Icon */}
			<Box onClick={onOpen} cursor='pointer'>
				<Icon name='hamburger' />
			</Box>

			{/* Drawer for mobile menu */}
			<Drawer placement='right' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bg={colors.light_black} color='white'>
					<DrawerCloseButton />
					<DrawerHeader>
						<Link href='/'>
							<Image src='/logo/logo.png' alt='logo-image' w='3rem' h='3rem' />
						</Link>
					</DrawerHeader>

					<DrawerBody>
						<Text
							py='1rem'
							cursor='pointer'
							_hover={{ color: 'gray.500' }} // Hover effect for mobile menu item
						>
							Home
						</Text>
						<Text
							py='1rem'
							cursor='pointer'
							_hover={{ color: 'gray.500' }} // Hover effect
							onClick={handleToggleCategories} // Toggle Categories dropdown
							display='flex'
							justifyContent='space-between'
						>
							Categories
							<Icon name='arrow_dropdown' />
						</Text>

						{/* Categories Dropdown */}
						<Collapse in={isCategoriesOpen} animateOpacity>
							<Box pl='1.5rem' mt='0.5rem'>
								<Text
									_hover={{
										color: colors.text_color,
										bg: colors.nav_hover,
									}}
									cursor='pointer'
									px='1rem'
									py='0.8rem'
									w='100%'
									letterSpacing={3}
									fontSize='0.9rem'
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
									letterSpacing={3}
									fontSize='0.9rem'
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
									letterSpacing={3}
									fontSize='0.9rem'
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
									letterSpacing={3}
									fontSize='0.9rem'
								>
									<Link href='#'>Dream Catchers</Link>
								</Text>
							</Box>
						</Collapse>

						<Text py='1rem' cursor='pointer' _hover={{ color: 'gray.500' }}>
							About Us
						</Text>
						<Text py='1rem' cursor='pointer' _hover={{ color: 'gray.500' }}>
							Wishlist
						</Text>
						<Text py='1rem' cursor='pointer' _hover={{ color: 'gray.500' }}>
							Cart
						</Text>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default MobileMenu;
