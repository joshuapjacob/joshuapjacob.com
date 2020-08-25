<template>
  <div id="landing" class="section">
    <div id="canvas_container"></div>
    <div class="center">
      <div id="full_name">
        <div id="first_names" class="name">Joshua Paul</div>
        <div id="last_name" class="name">Jacob</div>
      </div>
    </div>
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
      uMouse: null,
    };
  },
  methods: {
    init: function () {
      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      camera.position.z = 0.5;
      const renderer = new WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = sRGBEncoding;
      const container = document.getElementById("canvas_container");
      container.appendChild(renderer.domElement);

      const texture = new TextureLoader().load(require("@/assets/bg.jpg"));
      const mesh = new Mesh(
        new PlaneBufferGeometry(1, 0.5625),
        new MeshBasicMaterial({ map: texture })
      );
      scene.add(mesh);

      // Post-Processing
      this.composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      this.composer.addPass(renderPass);

      const myEffect = {
        uniforms: {
          tDiffuse: { value: null },
          resolution: {
            value: new Vector2(1, window.innerHeight / window.innerWidth),
          },
          uMouse: { value: new Vector2(-10, -10) },
          uVelo: { value: 0 },
        },
        vertexShader: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );}`,
        fragmentShader: `uniform float time;
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        varying vec2 vUv;
        uniform vec2 uMouse;
        float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
          uv -= disc_center;
          uv*=resolution;
          float dist = sqrt(dot(uv, uv));
          return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
        }
        void main()  {
            vec2 newUV = vUv;
            float c = circle(vUv, uMouse, 0.0, 0.2);
            float r = texture2D(tDiffuse, newUV.xy += c * (0.1 * .5)).x;
            float g = texture2D(tDiffuse, newUV.xy += c * (0.1 * .525)).y;
            float b = texture2D(tDiffuse, newUV.xy += c * (0.1 * .55)).z;
            vec4 color = vec4(r, g, b, 1.);
            gl_FragColor = color;
        }`,
      };

      this.customPass = new ShaderPass(myEffect);
      this.customPass.renderToScreen = true;
      this.composer.addPass(this.customPass);

      this.uMouse = new Vector2(0, 0);
      document.addEventListener("mousemove", this.handleMouse);
    },
    animate: function () {
      this.customPass.uniforms.uMouse.value = this.uMouse;
      requestAnimationFrame(this.animate);
      this.composer.render();
    },
    handleMouse: function (e) {
      this.uMouse.x = e.clientX / window.innerWidth;
      this.uMouse.y = 1 - e.clientY / window.innerHeight;
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouse);
  },
};
</script>

<style scoped>
#landing {
  /* background-color: black;
  background-image: url("../assets/bg.jpg"); */
  background: none;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: inset 0px -100px 100px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 0px -100px 100px 0px rgba(0, 0, 0, 1);
  box-shadow: inset 0px -100px 100px 0px rgba(0, 0, 0, 1);
  height: 100vh;
  width: 100vw;
}

#canvas_container {
  display: block;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
}

/* NAME --------------------------------------------------------------------- */

#first_names {
  -webkit-text-stroke: 1px white;
  color: white;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

#last_name {
  color: white;
}

.name {
  font-family: "Alata", sans-serif;
  font-size: 8rem;
}

@media only screen and (max-width: 600px) {
  .name {
    font-size: 4rem;
  }
}

/* IMAGE -------------------------------------------------------------------- */

#img_container {
  position: relative;
  margin: 50px 25px;
}

img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  height: 500px;
  -webkit-box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1);
  -moz-box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1);
  box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1);
  transition: 0.5s ease;
}

img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

#img_decoration {
  border: 1px solid white;
  position: absolute;
  top: -25px;
  left: -25px;
  width: 400px;
  height: 500px;
}
</style>
