<template>
  <div>
    <div class="modal" :class="{'is-active': ACTIVEMODAL}">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
            <CTable v-if="TARIFS.length" :content="TARIFS" :typePage="'Modal'" @cahngeTarif="cahngeTarif" />
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CTable from '@/components/CTable'
export default {
    components: {
        CTable
    },
    data() {
        return {
        title: 'Тарифы',
        };
    },
    computed: {
        ...mapGetters([
            'ACTIVEMODAL',
            'TARIFS'
        ]),
    },
    methods: {
        cahngeTarif(data) {
            this.$emit('cahngeTarif', data)
        },
        ...mapActions([
            'setModalActive'
        ]),
        showModal() {
            this.setModalActive(true);
        },
        closeModal() {
            this.setModalActive(false);
        }
    }
};
</script>

<style>
.modal-card {
  width: 90vw;
}
</style>
