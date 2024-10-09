import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
	children?: ReactNode;
	variant?: 'transparent' | 'solid' | 'blur';
};
// const PageLayout: FC<LayoutProps> = ({ children, variant }) => {
const PageLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<Box minH={'100vh'}>{children}</Box>
			</main>
			<Footer />
		</>
	);
};

export default PageLayout;
