import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: 'Nike Dunk Low Retro',
    price: 1549000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4329d447-d48e-4886-8585-b73355c52cda/dunk-low-retro-shoes-bCzchX.png',
  },
  {
    id: 2,
    title: 'Nike Dunk Low',
    price: 1909000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9c52ab5-ed2b-41e2-ba82-c395efcbd1e6/dunk-low-shoes-9cR8rj.png',
  },
  {
    id: 3,
    title: 'Nike Dunk Low LX',
    price: 2099000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f1e7dab-a82b-44ac-90fa-ad118af83e52/dunk-low-lx-shoes-tV8gJG.png',
  },
  
  {
    id: 4,
    title: 'Nike Dunk Low LX',
    price: 2099000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f1e7dab-a82b-44ac-90fa-ad118af83e52/dunk-low-lx-shoes-tV8gJG.png',
  },
  {
    id: 5,
    title: 'Nike Dunk Low LX',
    price: 2099000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f1e7dab-a82b-44ac-90fa-ad118af83e52/dunk-low-lx-shoes-tV8gJG.png',
  },
  
];

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = await retrieveDataById("products", id);
        if (detailProduct){
            return NextResponse.json({
            status : 200,
            message: "success",
            data: detailProduct
        })

        }
        return NextResponse.json({
            status : 404,
            message: "Not Found",
            data: {}
        })
    }

    const products = await retrieveData('products')
    
    return NextResponse.json({status : 200,message: "success",data : products })
}