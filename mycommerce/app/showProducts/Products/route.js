import { getProduct } from "@/lib/db";

export const GET = async () => {
    const results = await getProduct().catch((e) => {
        console.log(e);
        return [];
    });
    return NextResponse.json({
        message: "Products",
        data: results,
    });
    }