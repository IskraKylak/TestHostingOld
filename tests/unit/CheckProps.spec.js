import { mount } from '@vue/test-utils';
import Table from '@/components/cTable.vue';

describe('Table component', () => {
  it('renders table with correct number of rows and columns', async () => {
    const testData = [
      {id:2 , name:"Тариф 99620", cpu:18, ram:99620, size:40},
      {id:3 , name:"Тариф 99621", cpu:17, ram:99621, size:60},
      {id:4 , name:"Тариф 99622", cpu:19, ram:99622, size:80},
    ];

    const wrapper = mount( Table, {
      props: {
        content: testData,
        typePage: 'Home',
      },
    });

    
    expect(wrapper.findAll('tbody tr').length).toBe(testData.length);

    const tableRows = wrapper.findAll('tr');
    testData.forEach((dataItem, index) => {
      const row = tableRows[index + 1];
      expect(row.find('.name').text()).toBe(dataItem.name);
      expect(row.find('.cpu').text()).toBe(dataItem.cpu.toString());
      expect(row.find('.ram').text()).toBe(dataItem.ram.toString());
      expect(row.find('.size').text()).toBe(dataItem.size.toString());
    });
  });
});
