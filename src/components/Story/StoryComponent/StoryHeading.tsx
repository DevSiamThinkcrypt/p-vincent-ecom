import useCustomStyle from '@/hooks/useCustomStyle';
import { Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
type StoryHeadingType = {
	storyHeading?: string;
};

const StoryHeading: FC<StoryHeadingType> = ({ storyHeading }) => {
	const { colors } = useCustomStyle();
	return (
		<Heading
			maxW='40rem'
			fontSize={{ base: '1.55rem', lg: '2rem' }}
			pos='relative'
			_after={{
				content: '""',
				display: 'block',
				width: '8rem',
				height: '0.7rem',
				backgroundColor: colors.banner_color,
				borderRadius: '50px',
				position: 'absolute',
				top: '-2rem',
				left: '0',
			}}
		>
			{storyHeading}
		</Heading>
	);
};

export default StoryHeading;
