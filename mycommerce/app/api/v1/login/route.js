/* 
/api/v1/login/route.js
Author: Javier Miles Avello
Date: 27/06/2023
Description: Api to save images in public/assets/images folder, in NextJS 13 only with formData.
License: If you want to use this code, you must keep this comment block. Non-commercial use.
Hours Worked: 35. Not many documentation about NextJS 13 and formData available, for files.
*/

import { NextResponse, NextRequest } from "next/server";
import { getProduct, getUser, postProduct } from "@/lib/db";

export const GET = async () => {
  const results = [];
  return NextResponse.json({
    message: "Products",
    data: results,
  });
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const result = await getUser(body);
    return NextResponse.json({
      message: "Login Success 200",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Login Error 500 Data not received",
      data: null,
    });
  }

};
