import React from "react";
import Head from "next/head";
import Layout from "../src/components/shared/Layout";
import HeroFeatureToolsResearch from "../src/components/heroFeatureToolsResearch/heroFeatureToolsResearch";
import PlansEducationAboutUs from "../src/components/plansEducationAboutUs/plansEducationAboutUs";

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>DeFi-Logic</title>
				<meta
					name="description"
					content="The crypto think-tank for better decisions."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Layout>
					<HeroFeatureToolsResearch />
					<PlansEducationAboutUs />
				</Layout>
			</main>
		</React.Fragment>
	);
}
