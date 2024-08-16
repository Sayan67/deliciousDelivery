
import {fetchExchange,cacheExchange,Client,subscriptionExchange,ExchangeInput} from 'urql'

export const client  = new Client({
      url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
      exchanges:[cacheExchange,fetchExchange],
      fetchOptions:() =>{
         return{ headers : {
              'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string
            }
         }
    },

})
