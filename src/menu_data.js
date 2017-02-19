const lorem = "Sliced brisket & Polish kielbasa sausage, topped with cheddar on a toasted Hoagie";

export default {
  categories: [
    { name: 'Meat', id: 0, active: true, dishes: [
      { name: 'Pulled Pork', desc: lorem, options: ['1/4 LB', '1/2 LB', '1 LB'], prices: [3, 6, 12] },
      { name: 'Beef Brisket', desc: lorem,  options: ['1/4 LB', '1/2 LB', '1 LB'], prices: [3.75, 7.5, 15] },
      { name: 'Chicken Breast', desc: lorem, options: ['1/4 LB', '1/2 LB', '1 LB'], prices: [3.25, 6.5, 13] },
    ]},
    { name: 'Westerners', id: 1, dishes: [
      { name: 'Original Westerner', desc: lorem, options: [null], prices: [7.25] },
      { name: 'Pork + Chicken Westerner', desc: lorem, options: [null], prices: [7.25] },
      { name: 'Racetrack Westerner', desc: lorem, options: [null], prices: [7.5] },
    ]},
    { name: 'Sandwitches', id: 2, dishes: [
      { name: 'The Beef', desc: lorem, options: [null], prices: [7.25] },
      { name: 'Original Chicken', desc: lorem, options: [null], prices: [7.25] },
      { name: 'Just the Pork', desc: lorem, options: [null], prices: [7.5] },
    ]},
    { name: 'Barbecue sliders', id: 3 },
    { name: 'Butcher tacos', id: 4 },
    { name: 'Smoke stacks', id: 5 },
    { name: 'Savory sides', id: 6 },
    { name: 'For the kids', id: 7 },
    { name: 'Drinks', id: 8 },
    { name: 'Salads', id: 9 },
    { name: 'Deserts', id: 10 }
  ]
}
