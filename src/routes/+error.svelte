<script>
	import { page } from '$app/stores';
</script>

<div class="center">
	<h1>{$page.status} {$page.error.message}</h1>
	<a href="/">RETURN</a>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		margin: 0;
		align-items: center;
		justify-content: center;
	}

	a {
		text-decoration: none;
		color: grey;
		transition: 0.3s ease;
		font-family: 'Roboto Mono', monospace;
	}

	a:hover {
		color: lightgray;
	}
</style>
