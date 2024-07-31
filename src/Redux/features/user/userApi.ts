import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath : 'userApi' ,
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:2500',
    }),
    tagTypes : ['Users'],
    endpoints : (builder) => ({
        addNewUser : builder.query({
            query : (data) => ({
                url : '/addUser',
                method : 'POST',
                body : data
            }),
        })
        
    })
})

export const {} = userApi ; 