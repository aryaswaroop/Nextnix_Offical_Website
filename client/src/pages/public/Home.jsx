
import React from 'react';

import HeroSection from '../../components/home/HeroSection';
import FeatureTags from '../../components/home/FeatureTags';
import TrustBar from '../../components/home/TrustBar';
import WhyNextnix from '../../components/home/WhyNextnix';
import ExploreTopics from '../../components/home/ExploreTopics';
import LatestPlaylists from '../../components/home/LatestPlaylists';
import ServicesSection from '../../components/home/ServicesSection';
import FounderMessage from '../../components/home/FounderMessage';
import FinalCTA from '../../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureTags />
      <TrustBar />
      <WhyNextnix />
      <ExploreTopics />
      <LatestPlaylists />
      <ServicesSection />
      <FounderMessage />
      <FinalCTA />
    </>
  );
}
