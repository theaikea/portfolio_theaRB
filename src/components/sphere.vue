<template>
    <div ref="canvasContainer"></div>
  </template>
  
  <script>
  import p5 from 'p5';
  
  export default {
    mounted() {
      this.sketch = new p5(this.createSketch, this.$refs.canvasContainer);
      window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      createSketch(p) {
        let angleX1 = 0;
        let angleY1 = 0;
        let angleZ1 =-30;
        let angleX2 = 60;
        let angleY2 = 0;
        let angleZ2 = 60;
        let canvas;
  
        // Adjust sensitivity according to your preference
        let sensitivity = 0.003;
  
        p.setup = () => {
          canvas = p.createCanvas(700, 700, p.WEBGL);
          this.handleResize();
        };
  
        p.draw = () => {
          p.background(255);
          p.noFill();
          p.stroke(0);
          p.strokeWeight(1.5); 
  
          // Update rotation angles for the first sphere
          angleX1 += sensitivity * (p.pmouseY - p.mouseY);
          angleY1 += sensitivity * (p.pmouseX - p.mouseX);
          angleZ1 += sensitivity * (p.pmouseX - p.mouseX) 
  
          // Update rotation angles for the second sphere
          angleX2 += sensitivity * (p.pmouseY - p.mouseY) 
          angleY2 += sensitivity * (p.pmouseX - p.mouseX) 
          angleZ2 += sensitivity * (p.pmouseX - p.mouseX) 
  
          p.push();
          p.translate(0, 40); // Center the first sphere
          p.rotateX(angleX1);
          p.rotateY(angleY1);
          p.rotateZ(angleZ1);
          p.sphere(160);
          p.pop();
  
          p.stroke('#DC4E36');
          p.push();
          p.translate(0, 40); // Center the second sphere
          p.rotateX(angleX2);
          p.rotateY(angleY2);
          p.rotateZ(angleZ2);
          p.sphere(280);
          p.pop();
        };
  
        this.handleResize = () => {
          const parent = this.$refs.canvasContainer;
          const rect = parent.getBoundingClientRect();
          p.resizeCanvas(rect.width, rect.height);
        };
      }
    }
  };
  </script>
  