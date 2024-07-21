<script>
	export let duration = 100;
	export let repeat = 10;
	export let text = '<<<<<<<';
</script>

<div class="container left noselect">
	<div style="overflow: hidden;">
		<div class="content">
			{#each Array(repeat) as _, i}
				<div class="text" style="animation-duration: {duration}s">
					<p>{text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="container right noselect">
	<div style="overflow: hidden;">
		<div class="content">
			{#each Array(repeat) as _, i}
				<div class="text" style="animation-duration: {duration}s">
					<p>{text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	p {
		font-family: 'Roboto Mono', monospace;
		font-size: 3em;
	}
	.content {
		width: 10000px;
	}

	.container {
		position: fixed;
		width: 100vh;
		top: 50%;
		opacity: 0.25;
		z-index: -2;
	}

	@media screen and (max-width: 1500px) {
		.container {
			display: none;
		}
	}

	.left {
		transform: translate(-50%, -50%) rotate(270deg);
		left: 9vw;
	}

	.right {
		transform: translate(-50%, -50%) rotate(90deg);
		right: calc(-100vh + 9vw);
	}

	.text {
		animation-name: animation;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		float: left;
	}

	@keyframes animation {
		100% {
			transform: translateX(-100%);
		}
	}
</style>
