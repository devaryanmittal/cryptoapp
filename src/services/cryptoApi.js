import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders= {
    'X-RapidAPI-Key': '468d365cbemshcc1774f780ae757p1d96bcjsn1b1880bc8768',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest =(url) => ({url, headers:cryptoApiHeaders});
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({uuid,timePeriod}) => createRequest(`coin/${uuid}/history?timePeriod=${timePeriod}`),
        }),
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
} = cryptoApi;