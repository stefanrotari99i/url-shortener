"use client"
import { Suspense } from 'react'
import ShortenItem from './ShortenItem'
import { useEffect, useState } from 'react'
import getAllCollection from '@/firebase/firestore/getAllColletction';

const ItemsWrapper = () => {
    let [data, setData] = useState({}) as any;

    useEffect(() => {
        (async () => {
        fetchData();
        })();
    }, []);

    const fetchData = async () => {
        try {
            const {result, error} = await getAllCollection('urls');
            setData(result);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    console.log(data);


  return (
    <div className="shorten-items-wrapper">
    <Suspense fallback={<div>Loading...</div>}>
      {data?.result?.map((item: any) => (
          <ShortenItem
              key={item.id}
              item={item}
          />
      ))}
    </Suspense>
  </div>
  )
}

export default ItemsWrapper