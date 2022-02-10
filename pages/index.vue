<template>
  <div>
    <v-row justify="end" fixed>
      <v-col col="12" class="ml-auto">
        <p v-if="labelTime<60000">
          อัพเดทข้อมูลทุกๆ {{labelTime*0.001}} วินาที
        </p>
        <p v-else>
          อัพเดทข้อมูลทุกๆ {{(labelTime*0.001)/60}} นาที
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        <v-data-table
          :headers="headers"
          :items="data"
          item-key="hn"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const data = await $axios.$get('/queue')
    return { data }
  },
  mounted() {
    this.setFetchTime()
    if (localStorage.getItem('time') === null) {
      this.labelTime = '*ยังไม่ได้กำหนดเวลาอัพเดทข้อมูล'
    } else {
      this.labelTime = parseInt(localStorage.getItem('time'))
    }
  },
  methods: {
    async fetchData() {
      const data = await this.$axios.$get('queue')
      this.data = data
      console.log('RUN')
    },
    setFetchTime() {
      const time = parseInt(localStorage.getItem('time'))
      setInterval(this.fetchData, time)
    },
  },
  data() {
    return {
      labelTime: '',
      data: [],
      headers: [
        { text: 'hn', value: 'hn' },
        { text: 'pt_name', value: 'pt_name' },
        { text: 'main_dep_queue', value: 'main_dep_queue' },
        { text: 'vsttime', value: 'vsttime' },
        { text: 'vn', value: 'vn' },
        { text: 'cc', value: 'cc' },
        { text: 'rx_time', value: 'rx_time' },
        { text: 'department', value: 'department' },
        { text: 'cur_dep_time', value: 'cur_dep_time' },
        { text: 'cur_name', value: 'cur_name' },
        { text: 'cur_dep', value: 'cur_dep' },
        { text: 'count_pt_depart', value: 'count_pt_depart' },
      ],
    }
  },
}
</script>
