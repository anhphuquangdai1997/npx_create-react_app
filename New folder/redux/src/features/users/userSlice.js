import { createSlice } from '@reduxjs/toolkit'

const initialState=[
    {
        id: '1',
        name: 'daiphu',
        email: 'daiphu094@gmail.com'
    },
    {
        id: '2',
        name: 'daiphu12',
        email: 'daiphu1944@gmail.com'
    },
    {
        id: '3',
        name: 'daiphu23',
        email: 'daiphu1922@gmail.com'
    },
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        editUser:(state,action)=>{
            const {id,name,email}=action.payload;
            const editerUser=state.find(user=>user.id===id);
            if(editerUser){
                editerUser.name=name;
                editerUser.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const deletedUser=state.find(user=>user.id===id);
            if(deletedUser){
                return state.filter(user=>user.id !==id);
            }
        }
        
    }
})

export const {addUser,editUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;