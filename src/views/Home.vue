<template>
  <div class="table-container">
    <cTable v-if="TARIFS.length" :content="TARIFS" :typePage="'Home'" @addTarif="addTarif"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import cTable from '@/components/cTable'
export default {
  name: 'HomeView',
  components: {
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
    ...mapActions([
        'ADD_MYTARIFS'
    ]),
    addTarif(data) {
        this.ADD_MYTARIFS(data)
        this.$message('Тариф был добавлен!')
        this.$router.push({
            name: 'mytarifs',
        })
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
