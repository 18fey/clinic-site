// app/uterus/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function UterusHealingPage() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      <div className="mx-auto w-full max-w-[430px]">
        {/* ① First View */}
        <section className="relative overflow-hidden">
          <div className="relative h-[420px]">
            {/* 背景画像（固定） */}
            <Image
              src="/images/uterus-hero.png"
              alt="子宮からのヒーリング"
              fill
              className="object-cover"
              sizes="(max-width: 430px) 100vw, 430px"
              priority
            />

            {/* 光のレイヤー */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(255,239,210,0.85),rgba(255,255,255,0)_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white/80" />
              <div className="absolute inset-0 bg-white/15" />
            </div>

            <div className="relative flex h-full items-center justify-center px-6">
              <div className="text-center">
                <p className="text-[11px] tracking-[0.28em] text-neutral-600/90">
                  HERIX POWER THERAPY
                </p>
                <h1 className="mt-3 text-[28px] leading-[1.35] font-semibold text-neutral-900">
                  子宮は、生命がはじまる場所。
                </h1>
                <p className="mt-4 text-[14px] leading-7 text-neutral-700">
                  内側の深い部分に寄り添う、<br />
                  女性のためのヒーリング。
                </p>
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-transparent to-[#fbf8f2]" />
        </section>

        {/* ② 子宮という場所について */}
        <section className="px-6 pt-8">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            子宮という場所について
          </h2>
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[14px] leading-8 text-neutral-700">
              子宮は、妊娠や出産だけでなく、<br />
              感情や直感、創造性とも<br />
              深く結びついている場所だと<br />
              古くから考えられてきました。
              <br />
              <br />
              心や身体にたまった緊張や感情は、<br />
              子宮やその周囲のバランスにも<br />
              影響を与えることがあります。
              <br />
              <br />
              子宮からのヒーリングでは、<br />
              この場所を中心に、<br />
              内側のエネルギーの流れを<br />
              やさしく整えていきます。
            </p>
          </div>
        </section>

        {/* ③ 大切にしていること（3カード） */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            このヒーリングで大切にしていること
          </h2>

          <div className="mt-5 grid gap-4">
            {[
              {
                title: "無理に変えないこと",
                desc: "何かを押しつけたり、急がせたりしません。今の状態を尊重しながら、必要な分だけ整えていきます。",
              },
              {
                title: "内側の声に耳を澄ますこと",
                desc: "身体や心の小さなサインに、静かに気づけるように。言葉にならない感覚も大切に扱います。",
              },
              {
                title: "本来のリズムを思い出すこと",
                desc: "足すのではなく、戻る。元々備わっている自然な巡りを、やさしく思い出していくイメージです。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/75 p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-[15px] font-semibold text-neutral-900">
                  {item.title}
                </div>
                <p className="mt-3 text-[13px] leading-7 text-neutral-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ④ セッションについて */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            セッションについて
          </h2>
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[14px] leading-8 text-neutral-700">
              カウンセリングと手当てを通して、<br />
              その方の状態に合わせたケアを行います。
              <br />
              <br />
              変化の感じ方やペースには個人差があり、<br />
              回数を重ねる中で少しずつ<br />
              変化に気づかれる方もいらっしゃいます。
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
                <div className="text-[12px] tracking-[0.25em] text-neutral-500">
                  初診
                </div>
                <div className="mt-1 text-[15px] font-semibold text-neutral-900">
                  Herix Power Therapy Uterus
                </div>
                <div className="mt-1 text-[13px] text-neutral-700">
                  90分／¥55,000
                </div>
              </div>

              <div className="h-px bg-neutral-200/70" />

              <div>
                <div className="text-[12px] tracking-[0.25em] text-neutral-500">
                  再診
                </div>
                <div className="mt-1 text-[15px] font-semibold text-neutral-900">
                  子宮からの Herix Power Therapy
                </div>
                <div className="mt-1 text-[13px] text-neutral-700">
                  （内容に応じてご案内）
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
