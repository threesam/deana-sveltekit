<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a class="logo" sveltekit:prefetch href="/">
			LOGO
		</a>
		<!-- <button class="burger">
			<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M0 3.5h15m-15 8h15m-15-4h15" stroke="currentColor"></path></svg>
		</button> -->
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/blog'}><a sveltekit:prefetch href="/blog">blog</a></li>
			<li class:active={$page.url.pathname === '/food'}><a sveltekit:prefetch href="/food">food</a></li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">about</a></li>
		</ul>
	</nav>

	<div class="corner">
		<a sveltekit:prefetch href="/cart">Cart</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: var(--headerHeight);
		padding: 0 1rem;
		background: var(--darkerGrey);
		color: var(--headerTextColor);
		box-shadow: var(--level-2);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}

	/* .logo {
		width: unset;
		height: var(--headerHeight);
	} */

	.corner {
		height: var(--headerHeight);
		overflow: hidden;
	}

	.corner a {
		display: flex;
		align-items: center;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	nav a {
		padding: 0 0.5rem;
		font-family: var(--bodyFont);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		font-size: var(--smallText);
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--secondary);
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		font-family: var(--headingFont);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-bottom: none;
		transition: color 0.2s linear;
		color: inherit;
	}

	a:hover {
		color: var(--secondary);
	}

	.burger {
		display: none;
	}
	@media (min-width: 767px) {
		.burger {
			display: block;
			color: white;
			background: none;
		}
		.logo {
			display: none;
		}
	}
</style>
