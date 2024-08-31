<script>
	import { onMount } from 'svelte';
	import {
		Scene,
		PerspectiveCamera,
		WebGLRenderer,
		TextureLoader,
		Mesh,
		PlaneGeometry,
		Vector2,
		MeshBasicMaterial
	} from 'three';
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

	const vertexShader = /* glsl */ `
		uniform float time;
		uniform float progress;
		uniform vec2 resolution;
		varying vec2 vUv;
		uniform sampler2D texture1;

		const float pi = 3.1415925;

		void main() {
			vUv = uv;
			gl_Position = (
				projectionMatrix * modelViewMatrix * vec4(position, 1.0 )
			);
		}
	`;

	const fragmentShader = /* glsl */ `
		uniform float time;
		uniform float progress;
		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		uniform vec2 uMouse;
		uniform float uVelo;
		uniform int uType;


		float circle(
			vec2 uv, vec2 disc_center, float disc_radius, float border_size
		) {
			uv -= disc_center;
			uv *= resolution*0.5;
			float dist = sqrt(dot(uv, uv));
			return smoothstep(
				disc_radius+border_size, disc_radius-border_size, dist
			);
		}


		void main()	{
			vec2 newUV = vUv;
			vec4 color = vec4(1.,0.,0.,1.);

			float c = circle(newUV, uMouse, 0.0, 0.25);
			float r = texture2D(tDiffuse, newUV.xy += c * (uVelo * .5)).x;
			float g = texture2D(tDiffuse, newUV.xy += c * (uVelo * .525)).y;
			float b = texture2D(tDiffuse, newUV.xy += c * (uVelo * .55)).z;
			color = vec4(r, g, b, 1.);

			gl_FragColor = color;
		}
	`;

	let scene, camera, renderer, composer, customPass;

	let speed = 0;
	let time = 0;
	let targetSpeed = 0;

	let mouse = new Vector2(0, 0);
	let prevMouse = new Vector2(0, 0);
	let followMouse = new Vector2(0, 0);

	function updateSpeed() {
		speed = Math.sqrt((prevMouse.x - mouse.x) ** 2 + (prevMouse.y - mouse.y) ** 2);
		targetSpeed -= 0.1 * (targetSpeed - speed);
		followMouse.x -= 0.1 * (followMouse.x - mouse.x);
		followMouse.y -= 0.1 * (followMouse.y - mouse.y);
		prevMouse.x = mouse.x;
		prevMouse.y = mouse.y;
	}

	function animate() {
		time += 0.1;
		updateSpeed();
		customPass.uniforms.time.value = time;
		customPass.uniforms.uMouse.value = followMouse;
		customPass.uniforms.uVelo.value = Math.min(targetSpeed, 0.05);
		targetSpeed *= 0.999;
		requestAnimationFrame(animate);
		composer.render();
	}

	function handleResize() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		renderer.setSize(width, height);
		camera.aspect = width / height;
		customPass.uniforms.resolution.value.y = height / width;
		camera.updateProjectionMatrix();
	}

	function handleMouse(e) {
		mouse.x = e.clientX / window.innerWidth;
		mouse.y = 1 - e.clientY / window.innerHeight;
	}

	onMount(() => {
		scene = new Scene();
		camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10);

		renderer = new WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(1);
		renderer.setSize(window.innerWidth, window.innerHeight);
		const container = document.getElementById('canvas');
		container.appendChild(renderer.domElement);

		camera.position.z = 1;

		let scale = 0.8;
		let mesh = new Mesh(
			new PlaneGeometry(3 * scale, 2 * scale),
			new MeshBasicMaterial({ map: new TextureLoader().load('bg.jpg') })
		);
		scene.add(mesh);

		// Post-processing.
		composer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);
		const myEffect = {
			uniforms: {
				tDiffuse: { value: null },
				resolution: {
					value: new Vector2(1, window.innerHeight / window.innerWidth)
				},
				uMouse: { value: new Vector2(-10, -10) },
				uVelo: { value: 0 },
				time: { value: 0 }
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader
		};
		customPass = new ShaderPass(myEffect);
		customPass.renderToScreen = true;
		composer.addPass(customPass);

		document.addEventListener('mousemove', handleMouse);
		window.addEventListener('resize', handleResize);
		container.style.opacity = '1';
		animate();
	});
</script>

<div class="darken"></div>
<div id="canvas"></div>

<style>
	.darken {
		display: block;
		position: fixed;
		z-index: -1;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.45);
		width: 100vw;
		height: 100vh;
	}
	@media screen and (max-width: 800px) {
		.darken {
			background-color: rgba(0, 0, 0, 0.6);
		}
	}

	#canvas {
		display: block;
		position: fixed;
		z-index: -2;
		left: 0;
		top: 0;
		opacity: 0; /* Modified by JS when ready. */
		transition: all 2s;
	}
</style>
