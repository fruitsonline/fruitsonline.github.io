
const products = [
  { slug: "kinnow-10kg", name: "Kinnow 10KG Box", price: 2200 },
  { slug: "kinnow-5kg", name: "Kinnow 5KG Box" , price: 1500},
]

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}
import ProductClient from "./ProductClient";
export default function ProductDetail({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug)

    return (<ProductClient />);
}