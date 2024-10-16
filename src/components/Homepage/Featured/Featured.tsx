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
			pt={{ base: '7.5rem', lg: '12.5rem' }}
			bg={colors?.body_bg}
		>
			<Heading
				textTransform='uppercase'
				position='relative'
				zIndex={1}
				px='1rem'
				fontSize={{ base: 'xl', sm: '2xl' }}
				_after={{
					content: "''",
					position: 'absolute',
					mr: '2.2rem',
					width: { base: '5rem', sm: '10rem', lg: '20rem', xl: '30rem' },
					height: '2px',
					bg: colors.border_color,
					top: '50%',
					left: { base: '9rem', lg: '15rem' },
					transform: 'translateY(-50%)',
				}}
				_before={{
					content: "''",
					position: 'absolute',
					ml: '2.2rem',
					width: { base: '5rem', sm: '10rem', lg: '20rem', xl: '30rem' },
					height: '2px',
					bg: colors.border_color,
					top: '50%',
					right: { base: '9rem', lg: '15rem' },
					transform: 'translateY(-50%)',
				}}
			>
				Featured
			</Heading>
		</Box>
	);
};

export default Featured;
