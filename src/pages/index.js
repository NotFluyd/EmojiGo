import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import CtaSection from "components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Satisfying classroom rewards"
        subtitle="Easily give students rewards that make it satisfying to do good."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/dashboard"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      <CtaSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/dashboard"
      />
    </>
  );
}

export default IndexPage;
