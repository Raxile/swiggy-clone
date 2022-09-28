import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const resturantsApi = createApi({
    reducerPath:"resturantsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/api"}),
    endpoints: (builder)=>({
        getAllResturants: builder.query({
            query: ()=> "resturants",

        }),
       
    })
})

export const { useGetAllResturantsQuery } = resturantsApi