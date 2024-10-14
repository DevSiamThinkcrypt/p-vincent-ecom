import { Box } from '@chakra-ui/react';
import React from 'react';

const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box maxW='1536px' mx='auto'>
			{children}
		</Box>
	);
};

export default PageContainer;
