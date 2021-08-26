
export const lists = [
  {
    id : 'firstList',
    name : 'Action avant décollage',
    createdAt: { toDate: () => new Date('01-01-2020')},
    deadline: { toDate: () => new Date('08-30-2021')}
  }
]

export const tasks = [
  {
    id: 'firstTask',
    name : 'Freins',
    description : "Vérifier qu'ils soient efficaces et asymetriques",
    position:0,
    isChecked : true,
    listId : 'firstList'
  },
  {
    id: 'secondTask',
    name : 'Cap + Bille',
    description : "Vérifier qu'il diminue une fois puis deux et que la bille est à droite",
    position:1,
    isChecked : false,
    listId : 'firstList'
  },
  {
    id: 'treeTask',
    name : 'Action avant la rotation',
    description : "Vitesse disponible, badin actif, pas d'alarme",
    position:2,
    isChecked : false,
    listId : 'firstList'
  },
  {
    id: 'otherTask',
    name : 'Pain',
    description : null,
    position:0,
    isChecked : false,
    listId : 'secondList'
  }
]


// ---------------- PROPTYPES -------------------//

export const func = () => null

export const string = 'text string'

export const array = ['test', 'array']

export const object = {
  'test': 1,
  'test2': 'test3',
  'test4': false,
}

export const bool = false

export const number = 123485
