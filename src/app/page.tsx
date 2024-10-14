// import PageLayout from '@/components/layout/Layout';
// import useCustomStyle from '@/hooks/useCustomStyle';
'use client';
import Featured from '@/components/Featured/Featured';
import Banner from '@/components/Homepage/Banner/Banner';
import CandleSection from '@/components/Homepage/CandleSection/Candle';
import PageLayout from '@/components/layout/Layout';
import Story from '@/components/Story/Story';

export default function Home() {
	return (
		<PageLayout>
			<Banner />
			<Story />
			<Featured />
			<CandleSection />
		</PageLayout>
	);
}
