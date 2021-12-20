<script>
	import Faq from './lib/components/faq.svelte';
	import Footer from './lib/components/footer.svelte';
	import Header from './lib/components/header.svelte';
	import Home from './lib/components/home.svelte';
	import RoadMap from './lib/components/road-map.svelte';
	import Team from './lib/components/team.svelte';
	import Tokenomics from './lib/components/tokenomics.svelte';
	import { pages } from './lib/constants';
	import { selectedPage } from './lib/store';

	/** @type {svelte.JSX.UIEventHandler<Window>} */
	function handleScroll(e){
		pages.forEach(page => {
			const rect = document.getElementById(page)?.getBoundingClientRect()
			const windowHeight = e.currentTarget.innerHeight
			let topLimit = 150
			if(page === 'faqs') topLimit = 250
			if(rect?.top > topLimit && rect?.top < windowHeight / 2 && $selectedPage.page !== page) selectedPage.set({page, scroll: false})
		})
	}

</script>

<svelte:window on:scroll={(e) => handleScroll(e)} />

<main class="root flex flex-col space-y-48">
	<Header />
	<Home />
	<RoadMap />
	<Tokenomics />
	<Team />
	<Faq />
	<Footer />
</main>

<style global lang="postcss">

	@font-face {
		font-family: "Monument Extended";
		src: url("/fonts/MonumentExtended-Regular.otf") format("opentype");
		font-style: normal;
	}

	@font-face {
		font-family: "Product Sans";
		src: url("/fonts/Product Sans Regular.ttf") format("truetype");
		font-style: normal
	}

	@font-face {
		font-family: "Product Sans Medium";
		src : url("/fonts/Product Sans Medium 500.ttf") format("truetype");
		font-style: normal;
	}

	html *, html *::before, html *::after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #0E0E0E;
		display: flex;
		justify-content: space-around;
		width: 100vw;
	}

	:root {
		/* colors */
		--secondary-color: #FFDB30;
		--para-color: #787878;
		--bg-color: #0E0E0E;
		--footer-color: #A7A7A7;

		/* font families */
		--me-font : "Monument Extended", Verdana, Geneva, Tahoma, sans-serif;
		--ps-font: "Product Sans", Verdana, Geneva, Tahoma, sans-serif;
		--pse-font: "Product Sans Medium", Verdana, Geneva, Tahoma, sans-serif;

		/* font sizes */

	}

	main.root {
		width: 100vw;
		max-width: 1200px;
		background-color: var(--bg-color);
		position: relative;
		color: white;
	}

	main > * {
		padding-inline: 1rem; 	
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>