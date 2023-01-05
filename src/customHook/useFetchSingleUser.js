import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSingleUser } from '../redux/slice/singleuserSlice';

const useFetchSingleUser = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleUser(`https://reqres.in/api/users/${id}`))
    }, [dispatch, id])

    return;
}

export default useFetchSingleUser