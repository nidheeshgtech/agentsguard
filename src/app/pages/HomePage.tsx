import { Hero } from '../components/Hero';
import { NewReality } from '../components/NewReality';
import { SecurityGap } from '../components/SecurityGap';
import { ThreatLandscape } from '../components/ThreatLandscape';
import { Architecture } from '../components/Architecture';
import { TrustCalibration } from '../components/TrustCalibration';
import { Capabilities } from '../components/Capabilities';
import { Observability } from '../components/Observability';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <NewReality />
      <SecurityGap />
      <ThreatLandscape />
      <Architecture />
      <TrustCalibration />
      <Capabilities />
      <Observability />
      <CallToAction />
    </>
  );
}
