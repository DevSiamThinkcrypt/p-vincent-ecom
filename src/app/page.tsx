// import PageLayout from '@/components/layout/Layout';
// import useCustomStyle from '@/hooks/useCustomStyle';
'use client';
import BathSaltSection from '@/components/BathSaltSection/BathSaltSection';
import Featured from '@/components/Featured/Featured';
import GiftBox from '@/components/GiftBox/GiftBox';
import Banner from '@/components/Homepage/Banner/Banner';
import CandleSection from '@/components/Homepage/CandleSection/Candle';
import Consultation from '@/components/Homepage/Consultaton/Consultation';
import PageLayout from '@/components/layout/Layout';
import Story from '@/components/Story/Story';

export default function Home() {
	return (
		<PageLayout>
			<Banner />
			<Story />
			<Featured />
			<CandleSection />
			<BathSaltSection />
			<GiftBox />
			<Consultation />
		</PageLayout>
	);
}
