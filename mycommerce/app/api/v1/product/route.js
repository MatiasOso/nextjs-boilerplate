import { getProduct, insertRandomProducts } from "@/lib/dbMySQL";

import { NextResponse, NextRequest } from "next/server";


export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
export async function GET() {
  const results = await getProduct().catch((e) => {
    console.log(e);
    return [];
  });
  return NextResponse.json({
    message: "Products",
    data: results,
  });
}
// Here receive form-data from client as POST request
export async function POST(req) {
  const formData = await req.formData();
  const body = Object.fromEntries(formData.entries());
  console.log("POST", body.files);

  return NextResponse.json({
    message: "Fake implemented",
  });
}
