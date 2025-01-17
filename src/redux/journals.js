import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  journals: [
    {
        id: uuidv4(),
        day: 'Day1',
        journaling1questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling2questions:
        {

            question1: 'j2Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling3questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        }
    },
    {
        id: uuidv4(),
        day: 'Day2',
        journaling1questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling2questions:
        {

            question1: 'Answear 1222',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        },


        journaling3questions:
        {

            question1: 'Answear 1',
            question2: 'Answear 2',
            question3: 'Answear 3',
            question4: 'Answear 4',
            question5: 'Answear 5'
        }


    }

],
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = journalSlice.actions

export default journalSlice.reducer