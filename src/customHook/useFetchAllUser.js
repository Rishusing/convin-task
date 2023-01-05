import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/slice/userSlice';

const useFetchAllUser = (page) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers(`https://reqres.in/api/users?page=${page}`))
    }, [dispatch, page])
    
    return;
}

export default useFetchAllUser