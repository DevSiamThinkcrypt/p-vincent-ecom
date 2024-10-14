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
						<Image src='/logo/logo.png' alt='logo-image' w='3rem' h='3rem' />
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
									py='0.8rem'
									cursor='pointer'
									_hover={{ color: 'gray.500' }} // Hover effect for sub-menu items
								>
									Sub 1
								</Text>
								<Text
									py='0.8rem'
									cursor='pointer'
									_hover={{ color: 'gray.500' }} // Hover effect for sub-menu items
								>
									Sub 2
								</Text>
								<Text
									py='0.8rem'
									cursor='pointer'
									_hover={{ color: 'gray.500' }}
								>
									Sub 3
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
