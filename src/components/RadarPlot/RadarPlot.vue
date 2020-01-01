<template>
    <div
        ref="svgContainer"
        class="svg-container"
    >
        <svg
            :viewBox="`0 0 ${size} ${size}`"
            preserveAspectRatio="xMinYMin meet"
        >
            <g :transform="`translate(${size / 2}, ${size / 2})`">
                <circle
                    v-for="(level, levelIndex) in levels"
                    :key="`level-${levelIndex}`"
                    :r="(graphicSize / 2 / levels) * (levelIndex + 1)"
                />
                <g>
                    <template
                        v-for="(characteristic, characteristicIndex) in characteristics"
                    >
                        <text
                            :key="`characteristic-label-${characteristicIndex}`"
                            text-anchor="middle"
                            alignment-baseline="middle"
                            :x="Math.cos(radsForCharacteristic(characteristic)) * graphicSize / 1.65"
                            :y="Math.sin(radsForCharacteristic(characteristic)) * graphicSize / 1.65"
                        >
                            {{ characteristic.name }}
                        </text>
                        <line
                            :key="`characteristic-axis-${characteristicIndex}`"
                            x1="0"
                            y1="0"
                            :x2="Math.cos(radsForCharacteristic(characteristic)) * graphicSize / 2"
                            :y2="Math.sin(radsForCharacteristic(characteristic)) * graphicSize / 2"
                        />
                    </template>
                </g>
                <g>
                    <polygon
                        :points="points"
                        :style="{'fill': color, 'stroke': color}"
                    />
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'RadarPlot',
  props: {
    /**
     * The number of concentric rings on the plot, which also represents the maximum score each characteristic may have.
    */
    levels: {
      type: Number,
      required: false,
      default: 3,
    },
    /**
     * A list of objects with a `name` and `score` to be plotted.
    */
    characteristics: {
      type: Array,
      required: true,
    },
    /**
     * The color to fill the plot with
    */
    color: {
      type: String,
      default: 'var(--radar-plot-polygon)',
    }
  },
  data () {
    return {
      size: 500,
      graphicMultiplier: 0.75,
    }
  },
  computed: {
    radsBetweenAxes () {
      return 2 * Math.PI / this.characteristics.length
    },
    graphicSize () {
      return this.size * this.graphicMultiplier
    },
    points () {
      let points = []
      this.characteristics.forEach((characteristic) => {
        let pointX = Math.cos(this.radsForCharacteristic(characteristic)) * this.graphicSize / 2 * (characteristic.score / this.levels),
            pointY = Math.sin(this.radsForCharacteristic(characteristic)) * this.graphicSize / 2 * (characteristic.score / this.levels)

        points.push(`${pointX},${pointY}`)
      });

      return points.join(" ")
    },
  },
  methods: {
    radsForCharacteristic (characteristic) {
      return (this.characteristics.indexOf(characteristic) * this.radsBetweenAxes) - (Math.PI / 2);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/_colors.scss';

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
