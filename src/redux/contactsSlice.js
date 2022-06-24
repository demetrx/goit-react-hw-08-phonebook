import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ---- POST works incorrectly with Axios ___WHY?
// import axios from 'axios';
// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: 'https://62b414da530b26da4cb5e4f5.mockapi.io' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62b414da530b26da4cb5e4f5.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: body => ({ url: '/contacts', method: 'POST', body }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    removeContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: (_, __, id) => [{ type: 'Contacts', id }],
    }),
  }),
  // ----- Too many requests, `cause devTools trigger refocus
  // refetchOnFocus: true,
  // refetchOnReconnect: true,
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
