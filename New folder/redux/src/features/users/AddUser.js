import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../component/Button'
import TextField from '../../component/TextField'
import { addUser } from './userSlice'

const AddUser = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [values, setValues] = useState({
        name:'',
        email:''
    })

    const handleSubmitAdd=()=>{
        setValues({name:'',
        email:''})
        dispatch(addUser({
            id:'5',
            name:values.name,
            email:values.email
        }))
        navigate('/')
        
    }
    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField
                lable="name"
                value={values.name}
                onChange={(e)=>setValues({...values,name:e.target.value})}
                inputProps={{ type: 'text', placeholder: 'daiphu' }}
            />

            <TextField
                lable="email"
                value={values.email}
                onChange={(e)=>setValues({...values,email:e.target.value})}
                inputProps={{ type: 'email', placeholder: 'daiphu@gmail.com' }}
            />
            <Button onClick={handleSubmitAdd}>button</Button>
        </div>

    )
}

export default AddUser
