import {getProduct, insertRandomProducts} from '@/lib/dbMySQL'

import { NextResponse } from 'next/server';
 
export async function GET() {
  const results = await getProduct().catch(e => {
    console.log(e);
    return [];
    });
 return NextResponse.json({
    message: 'Products',
    data: results
});
}
export async function POST() {
   console.log('POST RECEIVED');
   // const results = await insertRandomProducts().catch(e => {
   //    console.log(e);
   //    return [];
   //    });
 return NextResponse.json({
    message: 'Fake implemented',
    data: results
});
}