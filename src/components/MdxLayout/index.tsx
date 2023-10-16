export default function MdxLayout({ children, title }: { children: React.ReactNode; title: string }) {
  // Create any shared layout or styles here
  return (
    <>
      <title>{title}</title>
      <main className='py-20 px-4 w-full max-w-[1000px] mx-auto space-y-8'>{children}</main>
    </>
  )
}
