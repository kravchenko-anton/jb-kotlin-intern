import {FooterComponent} from "../../components/footer";
import {HeaderComponent} from "../../components/header";
import { ThemeProvider } from "@rescui/ui-contexts";
import HeaderSection from "../../components/headerSection/Header";
import LatestFromKotlinSection from "../../components/latestFromKotlinSection/LatestFromKotlin";
import StartSection from "../../components/startSection/StartSection";
import UsageSection from "../../components/usageSection/Usage";
import WhyKotlinSection from "../../components/whyKotlinSection/WhyKotlin";

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "" },
    { property: "og:title", content: "Kotlin Programming Language" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kotlinlang.org/" },
    { property: "og:image", content: "https://kotlinlang.org/assets/images/open-graph/general.png" },
    { property: "og:description", content: "" },
    { property: "og:site_name", content: "Kotlin" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: "Kotlin Programming Language" },
    { name: "twitter:description", content: "" },
    { name: "twitter:image:src", content: "https://kotlinlang.org/assets/images/twitter/general.png" },
  ];
}

export default function Home() {
  return (
    <div className="global-layout">
    <HeaderComponent/>
      <div id="react-app">
        <ThemeProvider theme="dark">
          <div className="overview-page">
            <HeaderSection />
            <LatestFromKotlinSection />
            <WhyKotlinSection />
            <UsageSection />
            <StartSection />
          </div>
        </ThemeProvider>
      </div>
    <FooterComponent/>
    </div>
  );
}
