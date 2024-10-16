// import PageLayout from '@/components/layout/Layout';
// import useCustomStyle from '@/hooks/useCustomStyle';
'use client';
import BathSaltSection from '@/components/Homepage/BathSaltSection/BathSaltSection';
import Featured from '@/components/Homepage/Featured/Featured';
import Banner from '@/components/Homepage/Banner/Banner';
import CandleSection from '@/components/Homepage/CandleSection/Candle';
import Consultation from '@/components/Homepage/Consultaton/Consultation';
import PageLayout from '@/components/layout/Layout';
import Story from '@/components/Homepage/Story/Story';
import GiftBox from '@/components/Homepage/GiftBox/GiftBox';


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
