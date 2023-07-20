import { NextResponse } from "next/server"
import {getUser , postUser} from '@/lib/db'
export async function GET(request) {
    const resultado = await getUser()
    return NextResponse.json({data : resultado})
}

export async function POST(request) {
    const formData = await request.formData();
    const body = Object.fromEntries(formData.entries());
    console.log(body);
    const resultado = await postUser(body);
    return NextResponse.json({ data: resultado });
}

// export const POST = async (req, res) => {
//      const { body } = req
//      const { username, password } = body
    
//      return NextResponse.json(user)
// }
