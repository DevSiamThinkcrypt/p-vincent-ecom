import useCustomStyle from '@/hooks/useCustomStyle';
import { Heading, Box } from '@chakra-ui/react';
import React from 'react';

const Featured = () => {
	const { colors } = useCustomStyle();
	return (
		<Box
			position='relative'
			display='flex'
			alignItems='center'
			justifyContent='center'
			color={colors.border_color}
			pt={{ base: '8.5rem', md: '12.5rem' }}
		>
			<Heading
				textTransform='uppercase'
				position='relative'
				zIndex={1}
				px='1rem'
				fontSize='2xl'
				_after={{
					content: "''",
					position: 'absolute',
					width: '30rem',
					height: '2px',
					bg: colors.border_color,
					top: '50%',
					left: '15rem',
					transform: 'translateY(-50%)',
				}}
				_before={{
					content: "''",
					position: 'absolute',
					width: '30rem',
					height: '2px',
					bg: colors.border_color,
					top: '50%',
					right: '15rem',
					transform: 'translateY(-50%)',
				}}
			>
				Featured
			</Heading>
		</Box>
	);
};

export default Featured;
