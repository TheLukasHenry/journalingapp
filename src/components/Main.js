import React, { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Navbarr from './Navbar'
import Journaling1 from './Journaling1'
import Journaling2 from './Journaling2'
import Journaling3 from './Journaling3'

export const JournalContext = React.createContext()


function Main() {

    const [journals, setJournals] = useState(defaultDays)

    function test(id) {
        const foundJournal = journals.findIndex(j => j.id === id)
        console.log('found journal: ', id, foundJournal);
        // console.log('main ids: ', journals.find(j => j.id === id));
    }

    test(journals[0].id)


    function handleJournalChange(id, questions) {
        const newJournals = [...journals]
        const index = newJournals.findIndex(j => j.id === id)
        const foundJournal = newJournals.find(j => j.id === id)
        // console.log('journal id: ', index);
        newJournals[index].journaling1questions = questions
        setJournals(newJournals)
    }



    const JournalContextValue = {
        handleJournalChange
    }

    return (


        <BrowserRouter>
            <Navbarr />
            <JournalContext.Provider value={JournalContextValue}>
                <Routes>

                    <Route path="/" element={<Journaling1 questions={journals[0].journaling1questions} id={journals[0].id} />}>

                    </Route>
                    <Route path="/Journaling2" element={<Journaling2 />}>

                    </Route>
                    <Route path="/Journaling3" element={<Journaling3 />}>

                    </Route>
                </Routes>
            </JournalContext.Provider>
        </BrowserRouter>
    )
}

// const defaultDays = [
//     {
//         id: uuidv4(),
//         day: 'Day1',
//         journaling1questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ],
//         journaling2questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ],
//         journaling3questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ],


//     },
//     {
//         id: uuidv4(),
//         day: 'Day2',
//         journaling1questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ],
//         journaling2questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ],
//         journaling3questions: [
//             {

//                 question1: 'Answear 1',
//                 question2: 'Answear 2',
//                 question3: 'Answear 3',
//                 question4: 'Answear 4',
//                 question5: 'Answear 5'
//             }

//         ]


//     }

// ]

const defaultDays = [
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

            question1: 'Answear 1',
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

            question1: 'Answear 1',
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

]

export default Main