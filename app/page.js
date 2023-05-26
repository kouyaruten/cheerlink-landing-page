import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../components/hero'
import Features from '../components/features'
import CTA from '../components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
