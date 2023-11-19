import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../redux/counter/counterSlice';
import {counterSelector} from '../../redux/counter/counterSelectors';
import { fetchUser } from '../../redux/users/userActions';



export default function NewCounter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(counterSelector);
    const users = useSelector((state) => state.users.users)

    function handleIncrement() {
        dispatch(increment())
    }

    function handleDecrement() {
        dispatch(decrement())
    }

    function handleIncrementByAmount(amount) {
        dispatch(incrementByAmount(amount))
    }

    // useEffect(() => {
    //     dispatch(fetchUser());
    // }, [dispatch])

  return (
    <>
        <h1>Counter</h1>
        <p>{counterValue}</p>
        <button onClick={handleIncrement}>
            Increment
        </button>
        <button onClick={handleDecrement}>
            Decrement
        </button>
        <button onClick={() => handleIncrementByAmount(7)}>
            Increment by Amound
        </button>

        <h2>Users</h2>
        <button onClick={() => dispatch(fetchUser())}>
            Get users
        </button>
        <ul className='userList'>
            {users && users.map(user =>
                <li key={user.id}>{user.id}. {user.name}</li>
            )}
        </ul>
    </>
  )
}
