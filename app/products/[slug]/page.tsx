
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/content';
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }))
}
import ProductClient from "./ProductClient";
export default async function ProductDetail({ params }: { params: Promise<{ slug: string }>  }) {
  const resolvedParams = await params; 
  const slug = resolvedParams.slug;  
  const product = PRODUCTS.find((p) => p.slug === slug)
  if(!product){
    return notFound
  }
 
  return (<ProductClient product={product} />);
}