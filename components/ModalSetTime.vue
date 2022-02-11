<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="modal"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" color="dark">
        <v-icon>mdi-wrench</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>ตั้งค่าเวลาดึงข้อมูล</v-toolbar>
        <v-card-text class="mt-4">
          <!-- <div class="text-h2 pa-12">Hello world!</div> -->
          <v-select
            item-text="label"
            item-value="value"
            v-model="selected"
            :items="option"
          />              
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="selectTime" color="primary">บันทึก</v-btn>
          <v-btn text @click="dialog.value = false">ยกเลิก</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script>
export default {
  data() {
    return {
      modal: false,
      selected: '10 วินาที',
      option: [
        { label: '10 วินาที', value:"10000"},
        { label: '30 วินาที' ,value:"30000"},
        { label: '1 นาที' , value:"60000"},
        { label: '5 นาที' ,value:"300000"},
      ],
    }
  },
  mounted() {
    if (localStorage.getItem('time') === null) {
      this.selected = '1000'
    } else {
      this.selected = localStorage.getItem('time')
    }
  },
  methods: {
    selectTime() {
      localStorage.setItem('time', this.selected)      
      location.reload();
      
    },
  },
}
</script>
