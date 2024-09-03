<div class="center">
	<div class="container">
		<div class="name noselect outline">/ Joshua P.</div>
		<div class="name noselect">Jacob /</div>
	</div>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	@keyframes fadeInUp {
		0% {
			transform: translateY(10%);
			opacity: 0;
		}
		100% {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	.name {
		font-size: 10em;
		color: white;
		animation: 2s fadeInUp;
	}
	@media screen and (max-width: 1000px) {
		.name {
			font-size: 15vw;
		}

		.container {
			display: flex;
			align-items: center;
			flex-direction: column;
			height: 50%;
		}
	}

	.outline {
		-webkit-text-stroke: 2px white;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
