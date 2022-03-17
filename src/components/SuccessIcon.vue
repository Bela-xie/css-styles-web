<script setup>
</script>

<template>
  <div class="box">
    <div class="right-tick"></div>
  </div>
</template>

<style scoped>
.box {
  width: 28px;
  height: 28px;
  position: relative;
}
.right-tick {
  width: 24px;
  height: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-38%, -112%) rotate(-45deg);
  overflow: hidden;
}
.right-tick::before,
.right-tick::after {
  content: "";
  position: absolute;
  background-color: #3cefff;
  border-radius: 2px;
}
.right-tick::before {
  width: 2px;
  height: 12px;
  left: 0;
  animation: tickLeft 0.25s linear 0.25s 1 both;
}
.right-tick:after {
  width: 24px;
  height: 2px;
  bottom: 0;
  animation: tickRight 0.25s linear 0.5s 1 both;
}
@keyframes tickLeft {
  0% {
    top: -100%;
  }
  100% {
    top: 0%;
  }
}
@keyframes tickRight {
  0% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
}
</style>
