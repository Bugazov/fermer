import {
    ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
    user?:UserSchema

}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>
export interface ReducerManager {
    getReducerMap:()=> ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add:(key:StateSchemaKey, reducer:Reducer)=>void,
    remove:(key:StateSchemaKey)=> void

    getMountedReducers:()=> MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance,

}

export interface ThunkConfig<T>{
    rejectValue: T,
    extra:ThunkExtraArg,
    state:StateSchema

}
