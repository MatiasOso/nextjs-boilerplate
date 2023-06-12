'use client';
import Layout from '@/sections/Layout';
import { Provider } from 'react-redux';
import {store} from '@/store';
export default function Home() {

  return (
    <>
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
    </>
  )
}