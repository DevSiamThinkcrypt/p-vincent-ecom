import AboutContent from '@/components/Homepage/AboutUsPage/AboutContent/AboutContent';
import PageLayout from '@/components/layout/Layout';
import PrimaryBanner from '@/components/PrimaryBanner/PrimaryBanner';
import { aboutPageData } from '@/lib/data/aboutPageData';
import { NextPage } from 'next';
import React from 'react';

const aboutBanner = aboutPageData?.banner;
const aboutContent = aboutPageData?.content;
const page: NextPage = () => {
	return (
		<PageLayout>
			<PrimaryBanner aboutBanner={aboutBanner} />
			<AboutContent aboutContent={aboutContent} />
		</PageLayout>
	);
};

export default page;
