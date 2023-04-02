<template>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered" v-for="(item, index) in headers" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in content" :key="item.id">
            <td><span class="name">{{ item.name }}</span></td>
            <td><span class="cpu">{{ item.cpu }}</span> CPU Units</td>
            <td><span class="ram">{{ item.ram }}</span>MB</td>
            <td><span class="size">{{ item.size }}</span>GB SSD</td>
            <td v-if="typePage === 'Home'">
                <button class="button is-primary add-tarif-button" @click="this.$emit('addTarif', item)">
                <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Add</span>
                </button>
            </td>
            <td v-if="typePage === 'MyTarifs'">
                <button class="button is-primary" @click="openModal(item, index)">
                <span class="icon is-small">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                </span>
                <span>downgrade/upgrade</span>
                </button>
            </td>
            <td v-if="typePage === 'Modal' && SELECTEDT">
                <button class="button is-primary" v-if="typeBtn(item) === 'up'" @click="upgrade(item)">
                    <span class="icon is-small">
                        <i class="fas fa-chevron-up"></i>
                    </span>
                    <span>upgrade</span>
                </button>
                <button class="button is-primary" v-if="typeBtn(item) === 'down'" @click="downgrade(item)">
                    <span class="icon is-small">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                    <span>downgrade</span>
                </button>
                <div v-if="typeBtn(item) === 'your'"> Your tarif </div>
            </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    props:['content','typePage'],
    data() {
        return {
        headers: [
            { text: 'Название'},
            { text: 'CPU'},
            { text: 'RAM'},
            { text: 'Disk Size'}
        ]
        }
    },
    methods: {
        upgrade(item) {
            const obj = {
                idx: this.SELECTEDT.idx,
                item: item
            }
            this.$emit('cahngeTarif', obj)
        },
        downgrade (item) {
            if(item.size !== this.SELECTEDT.item.size) {
                this.$message('Процедура разрешена лишь для тарифов с одинаĸовым размером дисĸов')
            } else {
                this.upgrade(item)
            }
        },
        typeBtn(item) {
            if(this.SELECTEDT) {
                if(item.size > this.SELECTEDT.item.size) {
                    return 'up'
                }
                if(item.size < this.SELECTEDT.item.size) {
                    return 'down'
                }
                if(item.size == this.SELECTEDT.item.size) {
                    if(item.id == this.SELECTEDT.item.id)
                        return 'your'
                    else if (item.id > this.SELECTEDT.item.id)
                        return 'up'
                    else
                        return 'down'
                }
            }
        },
        openModal(item, idx) {
            const obj = {
                idx: idx,
                item: item
            }
            this.$emit('openModal', obj)
        }
    },
    computed: {
      ...mapGetters([
          'SELECTEDT',
      ]),
  }
}
</script>

<style lang="scss">
th {
  text-align: center;
}

td {
  vertical-align: middle;
}

@media only screen and (max-width: 1199.5px) {
    td, th {
        font-size: 14px;
    }

    button.button {
        padding-top: 3px;
        padding-bottom: 3px;
        height: auto;

        & .icon:first-child:not(:last-child) {
            margin-left: 0;
        }

        & span:nth-child(1) {
            font-size: 16px;
        }

        & span:nth-child(2) {
            font-size: 0;
        }
    }
}

@media only screen and (max-width: 767.5px) {
    td, th {
        font-size: 10px;
    }

    button.button {
        padding-top: 5px;
        padding-bottom: 5px;
        height: auto;
        padding-left: 5px;
        padding-right: 5px;

        & .icon:first-child:not(:last-child) {
            margin-left: 0;
        }

        & span:nth-child(1) {
            font-size: 14px;
        }

        & span:nth-child(2) {
            font-size: 0;
        }
    }
}
</style>
