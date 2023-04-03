import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import MyTarifs from '@/views/MyTarifs.vue'
import CTable from '@/components/CTable.vue'
import store from '@/store'
import message from '@/utils/message.plugin'
import cModal from '@/components/cModal'

describe('Home.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the CTable component', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store],
        components: {
          CTable
        }
      }
    })
    expect(wrapper.findComponent(CTable).exists()).toBe(true)
  })

  

  it('добавляет тариф в массив myTarifs при нажатии на кнопку "Add"', async () => {
      const content = [
        {id:2 , name:"Basic", cpu:18, ram:99620, size:40},
        {id:3 , name:"Тариф 99621", cpu:17, ram:99621, size:60},
        {id:4 , name:"Тариф 99622", cpu:19, ram:99622, size:80},
      ];

      const router = {
        push: jest.fn()
      }
    
    store.commit('SET_TARIFS', content);
    const wrapper = mount(Home, {
      global: {
        plugins: [store, message],
        components: {
          CTable
        },
        mocks: {
          $router: router
        }
      }
    });
    
      await wrapper.find('tbody tr:first-child .add-tarif-button').trigger('click');
      expect(store.getters.MYTARIFS.length).toBe(1);
      expect(store.getters.MYTARIFS[0].name).toBe('Basic')
  });

  it('получаем нужный тариф при нажатии на "downgrade/upgrade"', async () => {
      const content = [
        {id:3 , name:"Тариф 99621", cpu:17, ram:99621, size:60},
        {id:2 , name:"Basic", cpu:18, ram:99620, size:40},
        {id:4 , name:"Тариф 99622", cpu:19, ram:99622, size:80},
      ];

      const content2 = [
        {id:1 , name:"Standart", cpu:18, ram:99620, size:40},
        {id:2 , name:"Тариф 99623", cpu:17, ram:99621, size:60},
        {id:3 , name:"Тариф 99621", cpu:17, ram:99621, size:70},
        {id:4 , name:"Тариф 99622", cpu:19, ram:99622, size:60},
        {id:5 , name:"Basic Up", cpu:18, ram:99620, size:90},
      ];

      const router = {
        push: jest.fn()
      }
    
    store.commit('SET_TARIFS', content2);
    store.commit('SET_MYTARIFS', content);
    const wrapper = mount(MyTarifs, {
      global: {
        plugins: [store, message],
        components: {
          CTable,
          cModal
        },
        mocks: {
          $router: router
        }
      }
    });
    
    await wrapper.find('tbody tr:nth-child(2) .select-tarif-button').trigger('click');
    expect(store.getters.SELECTED.item.name).toBe('Basic')

    // store.commit('SET_SELECTED', {item: content[1], idx: 1});

    await wrapper.find('.modal-card-body tbody tr:nth-child(1) button').trigger('click');
    expect(store.getters.MYTARIFS[1].name).toBe('Standart')

    await wrapper.find('tbody tr:nth-child(2) .select-tarif-button').trigger('click');
    await wrapper.find('.modal-card-body tbody tr:nth-child(5) button').trigger('click');
    expect(store.getters.MYTARIFS[1].name).toBe('Basic Up')

    await wrapper.find('tbody tr:nth-child(2) .select-tarif-button').trigger('click');
    await wrapper.find('.modal-card-body tbody tr:nth-child(2) button').trigger('click');
    expect(store.getters.MYTARIFS[1].name).toBe('Basic Up')


  });

})
