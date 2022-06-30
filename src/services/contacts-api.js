import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    signup: build.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: build.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    refresh: build.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
    }),
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: data => {
        return { url: '/contacts', method: 'POST', body: data };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    removeContact: build.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: (_, __, id) => [{ type: 'Contacts', id }],
    }),
    editContact: build.mutation({
      query: ({ id, ...body }) => {
        return { url: `/contacts/${id}`, method: 'PATCH', body };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
  // ----- Too many requests: devTools trigger refocus
  // refetchOnFocus: true,
  // refetchOnReconnect: true,
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
  useEditContactMutation,
} = api;
