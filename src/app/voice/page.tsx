import { auth } from "@clerk/nextjs/server"
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/voice/WelcomeSection";
import FeatureCards from "@/components/voice/FeatureCard";
import VapiWidget from "@/components/voice/VapiWidget";

async function VoicePage() {
    const {has} = await auth();

    const hasProPlan = has({plan: 'ai_basic'}) || has({plan:"ai_pro"});
    if (!hasProPlan) return <ProPlanRequired />;
  return (
    <div className="min-h-screen bg-background mt-[72px]">
        <Navbar />
        <WelcomeSection />
        <FeatureCards />
        <VapiWidget />
    </div>
  )
}
export default VoicePage;