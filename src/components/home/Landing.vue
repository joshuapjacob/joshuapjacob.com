<template>
  <div id="landing">
    <div id="darken"></div>
    <div id="canvas_container"></div>
    <main>
      <div id="content">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  TextureLoader,
  PlaneBufferGeometry,
  MeshBasicMaterial,
  Vector2,
  sRGBEncoding,
  PlaneGeometry,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export default {
  name: "landing",
  data() {
    return {
      composer: null,
      customPass: null,
      camera: null,
      renderer: null,
      mouse: null,
      prevMouse: null,
      followMouse: null,
      targetSpeed: null,
      speed: null,
      time: null,
    };
  },
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    init: function () {
      const scene = new Scene();
      this.camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      this.camera.position.z = 0.5;
      this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(1);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.outputEncoding = sRGBEncoding;
      const container = document.getElementById("canvas_container");
      container.appendChild(this.renderer.domElement);

      const texture = new TextureLoader().load(require("@/assets/bg.jpg"));
      const mesh = new Mesh(
        new PlaneBufferGeometry(3 * 0.5, 2 * 0.5),
        new MeshBasicMaterial({ map: texture })
      );
      scene.add(mesh);

      if (this.$props.bg) {
        const geometry = new PlaneGeometry(1, 1);
        const material = new MeshBasicMaterial({
          color: 0x000000,
          opacity: 0.6,
          transparent: true,
        });
        const plane = new Mesh(geometry, material);
        scene.add(plane);
      }

      // Post-Processing
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(scene, this.camera);
      this.composer.addPass(renderPass);

      const myEffect = {
        uniforms: {
          tDiffuse: { value: null },
          resolution: {
            value: new Vector2(1, window.innerHeight / window.innerWidth),
          },
          uMouse: { value: new Vector2(-10, -10) },
          uVelo: { value: 0 },
          time: { value: 0 },
        },
        vertexShader: `
          uniform float time;
          uniform float progress;
          uniform vec2 resolution;
          varying vec2 vUv;
          uniform sampler2D texture1;

          const float pi = 3.1415925;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float progress;
          uniform sampler2D tDiffuse;
          uniform vec2 resolution;
          varying vec2 vUv;
          uniform vec2 uMouse;
          uniform float uVelo;
          uniform int uType;


          float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
            uv -= disc_center;
            uv *= resolution*0.5;
            float dist = sqrt(dot(uv, uv));
            return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
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
        `,
      };

      this.customPass = new ShaderPass(myEffect);
      this.customPass.renderToScreen = true;
      this.composer.addPass(this.customPass);

      this.speed = 0;
      this.time = 0;
      this.targetSpeed = 0;

      this.mouse = new Vector2(0, 0);
      this.prevMouse = new Vector2(0, 0);
      this.followMouse = new Vector2(0, 0);
      document.addEventListener("mousemove", this.handleMouse);

      window.addEventListener("resize", this.handleResize);
    },
    updateSpeed: function () {
      this.speed = Math.sqrt(
        (this.prevMouse.x - this.mouse.x) ** 2 +
          (this.prevMouse.y - this.mouse.y) ** 2
      );

      this.targetSpeed -= 0.1 * (this.targetSpeed - this.speed);
      this.followMouse.x -= 0.1 * (this.followMouse.x - this.mouse.x);
      this.followMouse.y -= 0.1 * (this.followMouse.y - this.mouse.y);

      this.prevMouse.x = this.mouse.x;
      this.prevMouse.y = this.mouse.y;
    },
    animate: function () {
      this.time += 0.05;
      this.updateSpeed();
      this.customPass.uniforms.time.value = this.time;
      this.customPass.uniforms.uMouse.value = this.followMouse;
      this.customPass.uniforms.uVelo.value = Math.min(this.targetSpeed, 0.05);
      this.targetSpeed *= 0.999;
      requestAnimationFrame(this.animate);
      this.composer.render();
    },
    handleMouse: function (e) {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = 1 - e.clientY / window.innerHeight;
    },
    handleResize: function () {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;

      this.customPass.uniforms.resolution.value.y = height / width;

      this.camera.updateProjectionMatrix();
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouse);
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
#content {
  padding: 0 10vw;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#landing {
  background: none;
  /* height: 100vh;
  width: 100vw; */
}

#darken {
  display: block;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
}

#canvas_container {
  display: block;
  position: fixed;
  z-index: -2;
  left: 0;
  top: 0;
}
</style>
