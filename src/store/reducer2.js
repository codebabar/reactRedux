
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
     name:'Haider',
     job:'app'
}

const slice2= createSlice({
    name:'slice2',
    initialState,
    reducers:{

    }
})

export const {actions,reducer:Slice2Reucer}=slice2;
