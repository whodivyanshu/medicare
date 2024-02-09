import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ProductComponent } from '@/components/ProductComponent'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <ProductComponent />
        <Footer />
      </div>
    </>
  )
}
