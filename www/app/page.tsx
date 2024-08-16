'use client'
import { Provider } from 'urql';
import Hero from '@/components/Hero';
import { client } from '@/utils/client';

type cardProps = { name: string }[]

export default function Home() {

  return (

    <Provider value={client}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
    </Provider>

  );
}
