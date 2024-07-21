<div class="left decor">
	<div class="vl"></div>
	<div class="email">
		<p>
			<a href="mailto:contact@joshuapjacob.com?subject=Hello" target="_blank" title="Email"
				>contact @ joshuapjacob.com</a
			>
		</p>
	</div>
	<div class="vl"></div>
	<div class="social">
		<a href="https://www.linkedin.com/in/joshuapjacob/" target="_blank" title="LinkedIn "
			><img src="/icons/linkedin-brands.svg" alt="" /></a
		>
		<a href="https://t.me/joshuapjacob" target="_blank" title="Telegram "
			><img src="icons/telegram-plane-brands.svg" alt="" /></a
		>
		<a href="https://github.com/joshuapjacob/" target="_blank" title="GitHub "
			><img src="/icons/github-brands.svg" alt="" /></a
		>
		<a
			href="https://www.goodreads.com/user/show/57891424-joshua-jacob"
			target="_blank"
			title="Goodreads "><img src="/icons/goodreads-brands.svg" alt="" /></a
		>
	</div>
	<div class="vl"></div>
</div>
<div class="right decor">
	<div class="vl"></div>
	<p>Joshua P. Jacob 2024 — All Rights Reserved</p>
	<div class="vl"></div>
</div>

<style>
	.decor {
		position: fixed;
		top: 0;
		z-index: 10;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.left {
		left: 0;
		margin-left: 3vw;
	}

	.right {
		right: 0;
		margin-right: 3vw;
	}

	.vl {
		width: 1px;
		background-color: grey;
		flex-grow: 1;
	}

	p {
		margin: 10px 0;
		font-size: 12px;
		font-family: 'Roboto Mono', monospace;
		color: grey;
		writing-mode: vertical-lr;
	}

	.email {
		transform: translateX(-2px) rotate(180deg);
	}

	a {
		text-decoration: none;
		color: grey;
		font-family: 'Roboto Mono', monospace;
		font-size: 1.3rem;
		font-weight: 300;
		margin: 10px;
		transition: 0.3s ease;
		border: 0px;
	}

	a:hover {
		color: lightgrey;
		transform: translateX(2px);
	}

	.social {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0;
	}

	.social img {
		/* https://codepen.io/sosuke/pen/Pjoqqp */
		filter: invert(50%);
		width: 20px;
		transition: 0.3s ease;
	}

	.social img:hover {
		filter: invert(85%);
	}

	@media screen and (max-width: 800px) {
		.vl,
		.right {
			display: none;
		}

		.decor {
			width: 100vw;
			margin: 75vh 0;
		}

		.social {
			flex-direction: row;
		}

		.social img {
			filter: invert(75%);
		}

		p {
			writing-mode: unset;
		}

		a {
			color: lightgrey;
			font-size: 1rem;
		}

		.email,
		a:hover {
			transform: none;
		}
	}
</style>
