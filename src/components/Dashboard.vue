<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
      <b-card header="Nível do Tanque">
        <div class="chart-wrapper">
          <line-example/>
        </div>
      </b-card>
      <b-card header="Temperatura">
        <div class="chart-wrapper">
          <bar-example/>
        </div>
      </b-card>
      <b-card header="Produção por Tanque">
        <div class="chart-wrapper">
          <doughnut-example/>
        </div>
      </b-card>
      <!-- <b-card header="Área do Tanque">
        <div class="chart-wrapper">
          <radar-example/>
        </div>
      </b-card> -->
      <!-- <b-card header="Pie Chart">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card> -->
      <!-- <b-card header="Polar Area Chart">
        <div class="chart-wrapper">
          <polar-area-example/>
        </div>
      </b-card> -->
    </b-card-group>
  </div>
</template>
<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
