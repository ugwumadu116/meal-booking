let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = 0 + dd;
}
if (mm < 10) {
  mm = 0 + mm;
}
today = `${dd}/${mm}/${yyyy}`;
export default {
  menus: [
    {
      id: 1,
      date: today,
      food: [
        {
          name: 'biscuit',
          description: 'sweet dring',
          price: '50',
          size: 'medium',
          type: 'breakfast',
        },
        {
          name: 'cone',
          description: 'sweet cone',
          price: '34',
          size: 'small',
          type: 'launch',
        },
        {
          name: 'soup',
          description: 'strong food',
          price: '179',
          size: 'large',
          type: 'breakfast',
        },
      ],
    },
    {
      id: 2,
      date: '12/2/2019',
      food: [
        {
          name: 'yam and stew',
          description: 'very strong and sweet food ',
          price: '150',
          size: 'large',
          type: 'launch',
        },
      ],
    },
  ],
};
