<template>
  <div class="table-container">
    <cTable v-if="MYTARIFS.length" :content="MYTARIFS" :typePage="'MyTarifs'" @openModal="openModal" />
    <cModal  @cahngeTarif="cahngeTarif" />
  </div>
</template>

<script>
import cModal from '@/components/cModal'
import cTable from '@/components/cTable'
import {mapActions, mapGetters} from 'vuex'
export default {
    components: {
      cModal,
      cTable
    },
   data() {
    return {
      headers: [
        { text: 'Название'},
        { text: 'CPU'},
        { text: 'RAM'},
        { text: 'Disk Size'}
      ],
      search: ''
    }
  },
  methods: {
    cahngeTarif(data) {
        this.CHANGE_MYTARIFS(data)
        this.setModalActive(false)
        this.$message('Тариф был изменен!')
    },
    downgrade(data) {
        this.$emit('downgrade', data)
    },
    ...mapActions([
        'setModalActive',
        'SET_SELECTEDT'
    ]),
    openModal (data) {
      this.SET_SELECTEDT(data)
      this.setModalActive(true)
    },
    ...mapActions([
        'ADD_MYTARIFS',
        'CHANGE_MYTARIFS'
    ]),
  },
  computed: {
      ...mapGetters([
          'MYTARIFS',
          'SELECTEDT'
      ]),
  }
};
</script>
<style>
.table-container {
  margin-top: 20px;
}
</style>