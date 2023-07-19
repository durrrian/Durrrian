import Image from 'next/image';
import DurrrianLogo from '../../public/logo/Variant=Logo Panjang.svg';
import CalComButton from './lib/CalComButton';
import DarkModeSwitch from './lib/DarkModeSwitch';

export default function Page() {
  return (
    <main className="w-screen h-screen max-h-screen max-w-screen flex items-center justify-center">
      <section className="max-w-[500px] space-y-8 mx-4">
        <header className="flex items-center justify-between">
          <Image
            src={DurrrianLogo}
            alt={'Durrrian logo'}
            height={30}
            draggable={false}
          />

          <DarkModeSwitch />
        </header>

        <h1 className="text-2xl font-bold">
          We are a software house based in Jakarta, Indonesia 🇮🇩
        </h1>

        <p className="text-justify">
          We provide services from designing to production for: Websites
          (including Web Application), Apple and Android applications (iOS,
          iPadOS, Android, tvOS, watchOS, Android TV), Desktop applications
          (Windows, Mac, Linux), Internet of Things, Backend services, and many
          more...
        </p>

        <CalComButton />

        <p className="text-sm">Awesome landing page is coming soon.</p>
      </section>
    </main>
  );
}
