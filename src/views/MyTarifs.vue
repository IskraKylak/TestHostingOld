<template>
  <div class="table-container">
    <CTable v-if="MYTARIFS.length" :content="MYTARIFS" :typePage="'MyTarifs'" @openModal="openModal" />
    <cModal  @cahngeTarif="cahngeTarif" />
  </div>
</template>

<script>
import cModal from '@/components/cModal'
import CTable from '@/components/CTable'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'MyTarifs',
    components: {
      cModal,
      CTable
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
        'SET_SELECTED'
    ]),
    openModal (data) {
      this.SET_SELECTED(data)
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
          'SELECTED'
      ]),
  }
};
</script>
<style>
.table-container {
  margin-top: 20px;
}
</style>