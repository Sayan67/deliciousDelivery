'use client'
import React from 'react'
import { gql, useQuery } from 'urql'
const DATA_QUERY = gql`query{
    friend{
      name
    }
  }`

const Hero = () => {
    const [{ data, fetching, error },reexecuteQuery] = useQuery({
        query: DATA_QUERY,
        requestPolicy: 'cache-and-network',
    })
    if (fetching) return <>Loading...</>
    if (error) return <>{error.message}</>
    return (
        <div className='text-white'>{data.friend.map((item:any, idx:number) => <div key={idx}>{item.name}</div>)}</div>
    )
}

export default Hero