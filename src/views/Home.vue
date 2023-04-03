<template>
  <div class="table-container">
    <CTable :content="TARIFS" :typePage="'Home'" @addTarif="addTarif"/>
    
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CTable from '@/components/CTable';
export default {
  name: 'Home',
  components: {
    CTable,
  },
  methods: {
    ...mapActions([
        'ADD_MYTARIFS'
    ]),
    message () {
      this.$message('Тариф был добавлен!')
        this.$router.push({
            name: 'mytarifs',
        })
    },
    addTarif(data) {
        this.ADD_MYTARIFS(data)
        this.message()
    }
  },
  computed: {
      ...mapGetters([
          'TARIFS',
      ]),
  },
};
</script>
<style>
.table-container {
  margin-top: 20px;
}

</style>
