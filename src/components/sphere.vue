<template>
  <div ref="canvasContainer" class="w-full h-screen overflow-hidden fixed"></div>
</template>

<script>
import p5 from "p5";

export default {
  mounted() {
    this.sketch = new p5(this.createSketch, this.$refs.canvasContainer);
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    this.sketch.remove(); // Cleanup p5 instance
  },
  methods: {
    createSketch(p) {
      let angleX1 = 0;
      let angleY1 = 0;
      let angleZ1 = 30;
      let angleX2 = 60;
      let angleY2 = 0;
      let angleZ2 = 60;
      let sensitivity = 0.003;
      let canvas;
      let sphereSize1, sphereSize2;

      const updateSphereSizes = () => {
        let baseSize = Math.min(p.windowWidth, p.windowHeight);
        sphereSize1 = baseSize * 0.2; // Increased size of smaller sphere
        sphereSize2 = baseSize * 0.35; // Increased size of larger sphere
      };

      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        updateSphereSizes();
      };

      p.draw = () => {
        p.background(255);
        p.noFill();
        p.stroke(0);
        p.strokeWeight(1.5);

        // Update rotation angles
        angleX1 += sensitivity * (p.pmouseY - p.mouseY);
        angleY1 += sensitivity * (p.pmouseX - p.mouseX);
        angleZ1 += sensitivity * (p.pmouseX - p.mouseX);

        angleX2 += sensitivity * (p.pmouseY - p.mouseY);
        angleY2 += sensitivity * (p.pmouseX - p.mouseX);
        angleZ2 += sensitivity * (p.pmouseX - p.mouseX);

        let moveUpAmount = -p.height * 0.03; // Moves spheres slightly up

        p.push();
        p.translate(0, moveUpAmount); // Move first sphere up
        p.rotateX(angleX1);
        p.rotateY(angleY1);
        p.rotateZ(angleZ1);
        p.sphere(sphereSize1);
        p.pop();

        p.stroke("#DC4E36");
        p.push();
        p.translate(0, moveUpAmount); // Move second sphere up
        p.rotateX(angleX2);
        p.rotateY(angleY2);
        p.rotateZ(angleZ2);
        p.sphere(sphereSize2);
        p.pop();
      };

      this.handleResize = () => {
        if (canvas) {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          updateSphereSizes();
        }
      };
    }
  }
};
</script>