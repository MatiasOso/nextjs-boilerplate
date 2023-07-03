import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    const { body } = req
    const { username, password } = body
    
    return NextResponse.json(user)
}
