/*Mocks BDD

LIST
  id : String
  name : String
  createdAt: timeStamp
  deadline: timeStamp

TASK
  id: String
  name : String
  description : String
  position:int
  isChecked : boolean
  listId : String*/


export const lists = [
  {
    id : 'firstList',
    name : 'Action avant décollage',
    createdAt: { toDate: () => new Date('01-01-2020')},
    deadline: { toDate: () => new Date('05-01-2021')}
  }
]

export const tasks = [
  {
    id: 'firstTask',
    name : 'Freins',
    description : "Verifier qu'ils soient efficaces et asymetriques",
    position:0,
    isChecked : false,
    listId : 'firstList'
  },
  {
    id: 'secondTask',
    name : 'Cap + Bille',
    description : "Verifier qu'il diminue une fois puis deux et que la bille est à droite",
    position:1,
    isChecked : false,
    listId : 'firstList'
  },
  {
    id: 'treeTask',
    name : 'Avant la rotation',
    description : "Vitese disponible, badin actif, pas d'alarme",
    position:2,
    isChecked : false,
    listId : 'firstList'
  }
]