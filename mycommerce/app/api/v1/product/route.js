import { getProduct, insertRandomProducts, postProduct } from "@/lib/dbMySQL";

import { NextResponse, NextRequest } from "next/server";
import { toNumeric } from "@/utils";

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
  console.log("POST", body);
  const product = {
    name: body.name,
    price: 123,
    description: body.description,
    images: [],
    category: '',
    physical: { color:'', size: '', weight: {unit:"", value:0.0 }, dimensions : {width: 0.0, height: 0.0, length: 0.0, unit:""} },
    createdAt: new Date(),
    updatedAt: new Date(),
    is_active: true,
    owner: '6d795f757365725f69643030',
    stock: 100
  };

  const results = await postProduct(product).catch((e) => {
    console.log(e);
    return [];
  });
  return NextResponse.json({
    message: "Fake implemented",
    data: results,
  });
}
