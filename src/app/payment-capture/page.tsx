// import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
// import { midtrans } from '@repo/api'

export function generateMetadata(): Metadata {
  return {
    title: 'Supercuan Saham — Pembayaran',
  }
}

interface Prop {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function Page({ searchParams }: Prop) {
  // if (!searchParams || !searchParams.order_id) return notFound()

  // const orderId = searchParams.order_id.toString()

  // const paymentStatus = await midtrans.transaction.status(orderId)

  // if (paymentStatus.transaction_status !== 'capture' && paymentStatus.transaction_status !== 'settlement') {
  //   return <div>Pembayaran kamu butuh diselesaikan!</div>
  // }

  return <div>Pembayaran berhasil!</div>
}
