import { createSlice, current } from '@reduxjs/toolkit'

// {
//     formName: "",
//     formId: '',
//     createdAt: '',
//     formDetails: [
//         {
//             question: "",
//             ansType: "",
//             options:[]
//         }
//     ]
// }
const initialState = {
    forms: []
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formName: (state, action) => {
            let index = state.forms.length - 1;
            index = index <= 0 ? 0 : index;
            state.forms[index] = { formName: action.payload };
        },
        formDetails: (state, action) => {
            const index = state.forms.length - 1;
            if (state.forms[index].formDetails === undefined) {
                state.forms[index].formDetails = []
            }
            state.forms[index].formDetails.push({ 'question': action.payload.question, 'ansType': action.payload.ansType })
        },
        options: (state, action) => {
            const index = state.forms.length - 1;
            if (state.forms[index].formDetails === undefined) {
                state.forms[index].formDetails = []
            }
            const ansIndex = state.forms[index].formDetails.length - 1;
            if (state.forms[index].formDetails[ansIndex].options === undefined) {
                state.forms[index].formDetails[ansIndex].options = []
            }
            state.forms[index].formDetails[ansIndex].options = action.payload
        }
    },
})


export const { formName, formDetails, options } = formSlice.actions

export default formSlice.reducer

