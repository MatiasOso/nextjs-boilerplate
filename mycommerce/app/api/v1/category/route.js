import {getCategory} from '@/lib/db'

import { NextResponse } from 'next/server';
 
export async function GET() {
  const results = await getCategory().catch(e => {
    console.log(e);
    return [];
    });
 return NextResponse.json({
    message: 'Categories',
    data: results
});
}
