import { Navbar } from '@/components/navigation/navbar'
import { HeroSlider } from '@/components/hero/hero-slider'
import { ProductGrid } from '@/components/products/product-grid'
import { CollectionGrid } from '@/components/collections/collection-grid'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSlider />
        <ProductGrid />
        <CollectionGrid />
      </main>
    </div>
  )
}

