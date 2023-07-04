<script setup lang="ts">
export type Characteristic = {
  name: string
  score: number
}
interface RadarPlotProps {
  levels?: number
  characteristics: Characteristic[]
  color?: string
}

const props = withDefaults(defineProps<RadarPlotProps>(), {
  levels: 3,
  color: 'var(--radar-plot-polygon)'
})

const size = 500
const graphicMultiplier = 0.75
const radsBetweenAxes = (2 * Math.PI) / props.characteristics.length
const graphicSize = size * graphicMultiplier
const radsForCharacteristic = (characteristic: Characteristic) =>
  props.characteristics.indexOf(characteristic) * radsBetweenAxes - Math.PI / 2

const points = props.characteristics
  .map((characteristic) => {
    const pointX =
      ((Math.cos(radsForCharacteristic(characteristic)) * graphicSize) / 2) *
      (characteristic.score / props.levels)
    const pointY =
      ((Math.sin(radsForCharacteristic(characteristic)) * graphicSize) / 2) *
      (characteristic.score / props.levels)

    return `${pointX},${pointY}`
  })
  .join(' ')
</script>

<template>
  <div ref="svgContainer" class="svg-container">
    <svg :viewBox="`0 0 ${size} ${size}`" preserveAspectRatio="xMinYMin meet">
      <g :transform="`translate(${size / 2}, ${size / 2})`">
        <circle
          v-for="(level, levelIndex) in levels"
          :key="`level-${levelIndex}`"
          :r="(graphicSize / 2 / levels) * (levelIndex + 1)"
        />
        <g>
          <template
            v-for="(characteristic, characteristicIndex) in characteristics"
            :key="`characteristic-${characteristicIndex}`"
          >
            <text
              text-anchor="middle"
              alignment-baseline="middle"
              :x="(Math.cos(radsForCharacteristic(characteristic)) * graphicSize) / 1.65"
              :y="(Math.sin(radsForCharacteristic(characteristic)) * graphicSize) / 1.65"
            >
              {{ characteristic.name }}
            </text>
            <line
              x1="0"
              y1="0"
              :x2="(Math.cos(radsForCharacteristic(characteristic)) * graphicSize) / 2"
              :y2="(Math.sin(radsForCharacteristic(characteristic)) * graphicSize) / 2"
            />
          </template>
        </g>
        <g>
          <polygon :points="points" :style="{ fill: color, stroke: color }" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.svg-container {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

circle {
  fill: none;
  stroke: var(--radar-plot-lines);
  stroke-width: 2;
  stroke-opacity: 0.75;
}

line {
  stroke: var(--radar-plot-lines);
  stroke-width: 1;
  stroke-opacity: 0.5;
}

text {
  font-size: var(--text-md);
  fill: var(--radar-plot-text);
  text-shadow: 2px 2px var(--radar-plot-text-shadow);
}

polygon {
  fill-opacity: 0.7;
  stroke-width: 2;
  stroke-opacity: 0.85;
}
</style>
