/* 
Author: Javier Miles Avello
Date: 27/06/2023
Description: Api to save images in public/assets/images folder, in NextJS 13 only with formData.
License: If you want to use this code, you must keep this comment block. Non-commercial use.
Hours Worked: 35. Not many documentation about NextJS 13 and formData available, for files.
*/
import { join } from "path";
import fs from "fs";
import { NextResponse, NextRequest } from "next/server";
import { getProduct, postProduct } from "@/lib/db";
import Product from "@/sections/Product";

export const GET = async () => {
  const results = await getProduct().catch((e) => {
    console.log(e);
    return [];
  });
  return NextResponse.json({
    message: "Products",
    data: results,
  });
};
export const POST = async (req) => {
  const formData = await req.formData(); // Parse form data
  const body = Object.fromEntries(formData.entries()); // Convert to object
  console.log("POST", body); // Log form data
  // Save product on database
  const product_data = {
    "name": body.name,
    "price": parseInt(body.price),
    "description": body.description,
    "images": [],
    "category": '',
    "physical": { "color": '', "size": '', "weight": { "unit": "", value: 0.0 }, "dimensions": { "width": 0.0, "height": 0.0, "length": 0.0, "unit": "" } },
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "is_active": true,
    "owner": '6d795f757365725f69643030',
    "stock": parseInt(body.stock)
  };

  const images = formData.getAll("images"); // Get all images in form data
  const savedFiles = []
  console.log("POST", images); // Log images
  for (const image of images) {
    // Check file type
    if (image.type !== "image/jpeg") { return NextResponse.json({ error: "Only JPEG/JPG files allowed: " + image.filename }, { status: 415 }) }; // Check file type
    // Your aport with security on upload, for example, check file size, check file type, check file name, binary check, etc.
    const fileName = `${Date.now()}-${Math.random() * 9999}.jpg`; // Generate unique file name
    const bytes = await image.arrayBuffer(); // Get image bytes
    const bufferFile = Buffer.from(bytes); // Convert to buffer
    // Check if bufferFile is a valid image, reading the first bytes of the file
    const bufferFileHeader = bufferFile.subarray(0, 4).toString("hex"); // Get first 4 bytes of the file
    if (bufferFileHeader !== "ffd8ffe0" && bufferFileHeader !== "ffd8ffe1") { // Check if bufferFile is a valid image
      return NextResponse.json({ error: "Only JPEG/JPG files allowed. Dont rename files extensions hacker ;) : " + image.filename }, { status: 415 });
    }
    // Write image file to public/assets folder
    const file = join(process.cwd(), "public", "assets", "images", fileName); // Get file path
    await fs.promises.writeFile(file, bufferFile); // Write file in public/assets/images folder
    savedFiles.push(fileName);
  }
  product_data.images = savedFiles;
  console.log("TO SAVE POST", product_data); // Log product data
const results = await postProduct(product_data).catch((e) => {
  console.log(e);
  return [];
});
return NextResponse.json({
  message: "Product Saved",
  data: results,
});
};
