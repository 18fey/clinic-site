// app/phonon-reverence/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function PhononReverencePage() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      <div className="mx-auto w-full max-w-[430px]">
        {/* ① First View */}
        <section className="relative overflow-hidden">
          <div className="relative h-[420px]">
            {/* 背景画像（固定） */}
            <Image
              src="/images/body-hero.png"
              alt="全身ヒーリング"
              fill
              className="object-cover"
              sizes="(max-width: 430px) 100vw, 430px"
              priority
            />

            {/* 光のレイヤー */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_30%_20%,rgba(255,248,232,0.9),rgba(255,255,255,0)_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/30 to-white/80" />
              <div className="absolute inset-0 bg-white/15" />
            </div>

            <div className="relative flex h-full items-center justify-center px-6">
              <div className="text-center">
                <p className="text-[11px] tracking-[0.28em] text-neutral-600/90">
                  PHONON REVERENCE
                </p>
                <h1 className="mt-3 text-[26px] leading-[1.35] font-semibold text-neutral-900">
                  全身から、調和を整える。
                </h1>
                <p className="mt-4 text-[14px] leading-7 text-neutral-700">
                  男女問わず受けていただける、<br />
                  手当てのみのヒーリング。
                </p>
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-transparent to-[#fbf8f2]" />
        </section>

        {/* ② phonon reverence とは */}
        <section className="px-6 pt-8">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            phonon reverence とは
          </h2>
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[14px] leading-8 text-neutral-700">
              人の身体は、<br />
              目に見える肉体だけでなく、<br />
              微細な振動やリズムによって<br />
              成り立っていると考えられてきました。
              <br />
              <br />
              phonon reverence は、<br />
              お薬や医療機器を使わず、<br />
              手当てのみで行う全身ヒーリングです。
              <br />
              <br />
              その方の状態を感じ取りながら、<br />
              必要な部分にやさしく手を当て、<br />
              全身の流れと調和を整えていきます。
            </p>
          </div>
        </section>

        {/* ③ こんな方に */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            こんな方に
          </h2>

          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <ul className="space-y-3 text-[14px] leading-7 text-neutral-700">
              {[
                "理由は分からないけれど、整えたい",
                "緊張や疲れが抜けにくい",
                "心身をリセットする時間がほしい",
                "性別を問わず受けられるケアを探している",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-neutral-500/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ④ セッションの考え方 */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            セッションの考え方
          </h2>
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[14px] leading-8 text-neutral-700">
              変化の感じ方には個人差があり、<br />
              すぐに深いリラックスを感じる方もいれば、<br />
              回数を重ねる中で変化に気づく方もいます。
              <br />
              <br />
              何かを足すのではなく、<br />
              内側に本来備わっている力が<br />
              自然に働き出すことを大切にしています。
            </p>
          </div>
        </section>

        {/* ⑤ メニュー */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            メニュー
          </h2>

          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <div className="space-y-5">
              <div>
                <div className="text-[15px] font-semibold text-neutral-900">
                  Herix Power Therapy Body
                </div>
                <div className="mt-1 text-[13px] text-neutral-700">
                  120分／¥143,000
                </div>
              </div>

              <div className="h-px bg-neutral-200/70" />

              <div>
                <div className="text-[12px] tracking-[0.25em] text-neutral-500">
                  再診
                </div>
                <div className="mt-1 text-[13px] text-neutral-700">
                  状態に応じてご案内
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⑥ 注意書き */}
        <section className="px-6 pt-8">
          <p className="text-[12px] leading-6 text-neutral-600">
            医療行為ではありません。<br />
            治療や診断を目的としたものではなく、<br />
            心身の調和をサポートするヒーリングです。
          </p>
        </section>

        {/* ⑦ 戻る導線 */}
        <section className="px-6 py-12">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-[14px] font-medium text-neutral-800 shadow-sm hover:bg-white"
          >
            トップページへ戻る
          </Link>
        </section>
      </div>
    </main>
  );
}
