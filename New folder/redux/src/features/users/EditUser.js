import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../component/Button'
import TextField from '../../component/TextField'
import { editUser } from './userSlice'

const EditUser = () => {
    const users=useSelector(store=>store.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const [values, setValues] = useState({
        name:'',
        email:''
    })
    const editerUser=users.filter(user=>user.id===id)
    const {name,email}=editerUser[0]
    const handleSubmitEdit=()=>{
        dispatch(editUser({
            id:id,
            name:values.name,
            email:values.email
        }))
        setValues({name:'',
        email:''})
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
            <Button onClick={handleSubmitEdit}>Edit User</Button>
        </div>
  )
}

export default EditUser
