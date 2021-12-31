<script>
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import EmailSubmit from '$lib/components/EmailSubmit.svelte';
	import '$lib/assets/styles/normalize.css';
	import '$lib/assets/styles/main.css';
</script>

<Header />

<main>
	<slot />
</main>

<EmailSubmit />

<Footer />

<style>
	main {
		position: relative;
		padding-top: var(--headerHeight);
		min-height: calc(100vh - var(--headerHeight));
		max-width: 100vw;
	}
</style>
