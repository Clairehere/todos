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