export interface INote {
  id: string
  title: string
  text: string
}

export interface INotesState {
  isEmpty: boolean
  currentAmount: number
  notes: INote[]
}

