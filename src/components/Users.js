import React from 'react'
import { UsersCard } from './UserCard'
import { useDispatch, useSelector, connect } from 'react-redux'
import { getUsers} from '../redux/Actions'


const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => {
        return state.users.users
    })
    if(!users.length){
        return(
            <button
            onClick={() => dispatch(getUsers())}
            >Loading Users</button>
        )
    }
    return (
       users.map(users => <UsersCard users={users} key={users.id} src={users} /> )
    )
}

const mapStateToProps = state => {
    return {users: state.users.users}
}

export default connect(mapStateToProps, null)(Users)
