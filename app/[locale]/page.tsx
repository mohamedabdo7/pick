// app/[locale]/page.tsx
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/Hero";
import MerchantSection from "@/components/sections/MerchantSection";
import AppPromoComponent from "@/components/sections/Promo";
// import { getI18n } from "@/locales/server";

export default async function Home() {
  // const t = await getI18n();

  return (
    <>
      <HeroSection />
      <AppPromoComponent />
      <MerchantSection />
      <FaqSection />
      {/* Additional sections can be added here */}
    </>
  );
}
