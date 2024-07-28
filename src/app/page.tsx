import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        test
        <div className="absolute w-28 left-0 -top-20 hidden lg:block">
          {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
          <img src="/snake-1.png" className="w-full" />
        </div>
      </section>
    </div>
  );
}
