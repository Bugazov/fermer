import {
    configureStore, ReducersMapObject, DeepPartial, getDefaultMiddleware, CombinedState, Reducer
} from '@reduxjs/toolkit';

import { $api } from '@/shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { userReducer } from '@/entities/User';

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>

) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers
    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArgs: ThunkExtraArg = {
        api: $api

    };

    const store = configureStore({

        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        })
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
