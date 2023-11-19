import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from '../../api/api';

export const fetchUser = createAsyncThunk('users/fetch', fetchUsers)
