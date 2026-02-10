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
    <main
      className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}
    >
      <div className="mx-auto w-full max-w-[430px]">
        {/* ① First View（ここは変更しない） */}
        <section className="relative overflow-hidden">
          <div className="relative h-[420px]">
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
                <h1 className="mt-3 text-[26px] font-semibold leading-[1.35] text-neutral-900">
                  全身から、調和を整える。
                </h1>
                <p className="mt-4 text-[14px] leading-7 text-neutral-700">
                  男女問わず受けていただける、
                  <br />
                  ヒーリング。
                </p>
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-transparent to-[#fbf8f2]" />
        </section>

        {/* ② phonon reverence とは（ここは変更しない） */}
        <section className="px-6 pt-8">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            phonon reverence とは
          </h2>
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[14px] leading-8 text-neutral-700">
              人の身体は、
              <br />
              目に見える肉体だけでなく、
              <br />
              微細な振動やリズムによって
              <br />
              成り立っていると考えられてきました。
              <br />
              <br />
              phonon reverence は、
              <br />
              お薬や医療機器を使わない、
              <br />
              全身ヒーリングです。
              <br />
              <br />
              その方の状態を感じ取りながら、
              <br />
              必要な部分にやさしく手を当て、
              <br />
              全身の流れと調和を整えていきます。
            </p>
          </div>
        </section>

        {/* ③ メニュー詳細（追加ぶん：ここから） */}
        <section className="px-6 pt-10">
          <h2 className="text-[18px] font-semibold tracking-wide text-neutral-900">
            メニュー
          </h2>

          {/* 初回 120分 */}
          <div className="mt-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-[15px] font-semibold text-neutral-900">
              🌿 全身ヒーリング 120分（初回）
            </div>
            <div className="mt-1 text-[13px] text-neutral-700">
              ¥143,000（税込）
            </div>

            <div className="mt-4 space-y-4 text-[14px] leading-8 text-neutral-700">
              <p>
                忙しさやストレスが続くと、気づかないうちに
                <br />
                身体にも心にも力が入り、
                <br />
                呼吸の浅さや、肩・背中・骨盤のこわばりが生まれます。
                <br />
                それは、身体の自然な反応です。
              </p>

              <p>
                このケアでは、まず約60分ほどゆっくりとお話をお聞きし、
                <br />
                その後、50分前後の全身ケアを行います（時間は状態により調整します）。
              </p>

              <p>
                身体や心の緊張、感覚にやさしくアプローチしながら、
                <br />
                呼吸が深まり、体も心も穏やかに安心できる感覚へと
                <br />
                導いていきます。
              </p>

              <div className="pt-1">
                <div className="text-[13px] font-semibold text-neutral-900">
                  このような方に
                </div>
                <ul className="mt-3 space-y-3">
                  {[
                    "毎日忙しく、心や体が休まる場所がない",
                    "休んでも疲れが抜けない",
                    "身体の力が抜けない",
                    "呼吸が浅い感じがする",
                    "常に気が張っている",
                    "考えが止まらず、身体が休まらない",
                    "検査では異常がないがつらい",
                    "理由の分からない不調が続いている",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-neutral-500/70" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[12px] text-neutral-600">
                  ＊性別を問わず受けていただけます
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[13px] font-semibold text-neutral-900">
                  この時間で大切にしていること
                </div>
                <p className="mt-3">
                  身体には、緊張がほどけたときに現れる
                  <br />
                  「静かな感覚」の領域があります。
                  <br />
                  そこは、頑張る場所ではなく、
                  <br />
                  静かな回復が起こる場所です。
                </p>
                <p className="mt-3">
                  ここで過ごす時間は、
                  <br />
                  その状態に近づくことを目的としています。
                  <br />
                  身体の反応を理解の土台としながら、
                  <br />
                  緊張や感覚の状態にやさしく寄り添っていきます。
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[13px] font-semibold text-neutral-900">
                  🌿 初めての方へ
                </div>
                <p className="mt-3">
                  何かをうまく話そうとしなくても大丈夫です。
                  <br />
                  身体の感覚は、言葉になる前から存在しています。
                </p>
                <p className="mt-3">
                  まずは、安心できる感覚を取り戻し、
                  <br />
                  ゆったりと呼吸することから始めてみましょう。
                </p>
                <p className="mt-3">
                  身体は本来、自ら調整し、回復しようとする力を備えています。
                  <br />
                  安心できる状態の中で、
                  <br />
                  その力が働きやすくなるよう、やさしく整えていきます。
                </p>
              </div>
            </div>
          </div>

          {/* 2回目以降 60分 */}
          <div className="mt-6 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-[15px] font-semibold text-neutral-900">
              🌿 全身ヒーリング 60分（2回目以降）
            </div>
            <div className="mt-1 text-[13px] text-neutral-700">
              ¥110,000（税込）
            </div>

            <div className="mt-4 space-y-4 text-[14px] leading-8 text-neutral-700">
              <p>
                前回のケア後の体や心の状態を約10分ほど確認した後、
                <br />
                50分前後の全身ケアを行います。
              </p>

              <p>
                呼吸がさらに深まり、
                <br />
                体と心が穏やかに安心できる感覚が
                <br />
                安定するよう、やさしく導いていきます。
              </p>

              <p>
                身体の中心に静かに意識を向ける時間は、
                <br />
                日常ではなかなか持てないものです。
                <br />
                ここでは、何かになる必要はなく、
                <br />
                ただ「本来の自分に戻る時間」を過ごしていただけます。
              </p>

              <div className="pt-1">
                <div className="text-[13px] font-semibold text-neutral-900">
                  このような方に
                </div>
                <ul className="mt-3 space-y-3">
                  {[
                    "2回目以降の方",
                    "心や体の安定的なメンテナンスをしたい",
                    "自分の内側を見つめる時間が欲しい",
                    "呼吸を深めたい",
                    "頭や心をリセットしたい",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-neutral-500/70" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[12px] text-neutral-600">
                  ＊性別を問わず受けていただけます
                </p>
              </div>
            </div>
          </div>

          {/* 大切なお知らせ */}
          <div className="mt-6 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-[15px] font-semibold text-neutral-900">
              🌱 大切なお知らせ
            </div>
            <p className="mt-3 text-[13px] leading-7 text-neutral-700">
              ※本ケアはクリニックでの医療行為とは異なり、
              <br />
              診断や治療を目的としたものではありません。
              <br />
              医療的な症状や治療が必要な場合は、
              <br />
              適切な医療機関での診療を優先していただき、
              <br />
              補完的なサポートとしてご利用ください。
            </p>
          </div>
        </section>

        {/* 戻る導線 */}
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
