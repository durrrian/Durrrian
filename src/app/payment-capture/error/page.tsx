import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Durrrian — Pembayaran Error',
  }
}

interface Prop {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function Page({ searchParams }: Prop) {
  return (
    <main className='w-fit h-fit max-w-[1100px] mx-auto md:px-2 px-4 flex flex-col items-center justify-center gap-10 overflow-x-hidden mb-20 mt-4'>
      <section className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='sm:text-4xl text-2xl font-medium text-supercuan-error'>Pembayaran gagal ❌</h1>

        <p className='sm:text-2xl text-xl font-normal'>
          Ada masalah di <em>payment processor</em> yang kita pakai
        </p>

        <p className='sm:text-2xl text-xl font-normal'>Silahkan coba lagi...</p>
      </section>
    </main>
  )
}
