import {getProduct, insertRandomProducts} from '@/lib/dbMySQL'

import { NextResponse } from 'next/server';

export const corsHeaders = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
   "Access-Control-Allow-Headers": "Content-Type, Authorization",
 };

export async function OPTIONS() {
   return NextResponse.json({}, { headers: corsHeaders });
}
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
export async function POST(req) {
   console.log(JSON.stringify(req.body));
   // const results = await insertRandomProducts().catch(e => {
   //    console.log(e);
   //    return [];
   //    });
   const results = JSON.stringify(req.body)
 return NextResponse.json({
    message: 'Fake implemented',
    data: results
});
}