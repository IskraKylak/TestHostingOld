
import { mount } from '@vue/test-utils'
import Table from '@/components/cTable.vue';

describe('Testing', () => {
  test('emits addTarif event when button is clicked', async () => {
    const mockData = {
      id: 1,
      name: 'Test Tarif',
      cpu: 1,
      ram: 512,
      size: 20
    }
    const wrapper = mount(Table, {
      props: {
        content: [mockData],
        typePage: 'Home'
      }
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted('addTarif')).toBeTruthy()
    expect(wrapper.emitted('addTarif')[0]).toEqual([mockData])
  })
})



