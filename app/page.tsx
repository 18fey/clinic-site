// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

function PhotoPlaceholder({
  src,
  label,
  sublabel,
  aspect = "aspect-[4/3]",
  priority = false,
}: {
  src: string;
  label: string;
  sublabel?: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[24px] border border-neutral-200/70 bg-white/50 shadow-sm",
        aspect,
      ].join(" ")}
    >
      {/* 実画像（public/images を参照） */}
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 430px) 100vw, 430px"
        priority={priority}
      />

      {/* 世界観レイヤー */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/25" />

      {/* テキスト */}
      <div className="relative flex h-full flex-col justify-end p-5">
        <div className="inline-flex w-fit rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] tracking-[0.18em] text-neutral-700">
          PHOTO
        </div>
        <div className="mt-3 text-base font-semibold text-white drop-shadow-sm">
          {label}
        </div>
        {sublabel ? (
          <div className="mt-1 text-xs text-white/85 drop-shadow-sm">
            {sublabel}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      {/* Mobile Frame */}
      <div className="mx-auto w-full max-w-[430px]">
        {/* Header (mobile only) */}
        <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-[#fbf8f2]/80 backdrop-blur">
          <div className="px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-wide">CLINIC NAME</div>

              {/* ✅ 電話ボタン削除：予約・相談だけ残す */}
              <div className="flex items-center gap-2">
                <a
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm hover:bg-neutral-800"
                  href="#contact"
                >
                  予約・相談
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* 背景：生成り＋淡い光 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#fbf8f2]" />
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(255,233,190,0.55)] blur-3xl" />
            <div className="absolute -top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-[rgba(255,245,225,0.8)] blur-3xl" />
            <div className="absolute bottom-[-140px] left-[-120px] h-[520px] w-[520px] rounded-full bg-[rgba(255,255,255,0.9)] blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-[#fbf8f2]" />
          </div>

          <div className="relative px-5 py-12">
            <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-600/80">
              WOMEN&apos;S CLINIC / BEAUTY & WELLNESS
            </p>

            <h1 className="mt-3 text-[30px] font-semibold leading-[1.25]">
              からだの声に、<br />
              静かに寄り添う医療を。
            </h1>

            <p className="mt-5 text-[15px] leading-8 text-neutral-700">
              この時間を通して、本来の自分を思い出すきっかけとなりますように。
            </p>

            <div className="mt-7 grid gap-3">
              <a
                className="rounded-full bg-neutral-900 px-6 py-3 text-center text-sm text-white shadow-sm hover:bg-neutral-800"
                href="#contact"
              >
                予約・ご相談はこちら
              </a>
              <a
                className="rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-center text-sm shadow-sm hover:bg-white"
                href="#care"
              >
                提供ケアを見る
              </a>
            </div>

            {/* ✅ 駅近/土曜/完全予約制の3カードを削除して、写真で“雰囲気”を伝える */}
            <div className="mt-10">
              <div className="text-center text-[11px] tracking-[0.22em] text-neutral-500">
                SOFT LIGHT / QUIET SPACE
              </div>

              {/* 写真ストリップ（横スクロール） */}
              <div className="mt-4 -mx-5 overflow-x-auto px-5 pb-2">
                <div className="flex w-max gap-4">
                  <div className="w-[280px]">
                    <PhotoPlaceholder
                      src="/images/body-hero.jpg"
                      label="施術空間"
                      sublabel="柔らかな光と静けさ"
                      aspect="aspect-[4/3]"
                      priority
                    />
                  </div>
                  <div className="w-[280px]">
                    <PhotoPlaceholder
                      src="/images/body-hero.jpg"
                      label="手当て"
                      sublabel="触れることで整える"
                      aspect="aspect-[4/3]"
                    />
                  </div>
                  <div className="w-[280px]">
                    <PhotoPlaceholder
                      src="/images/body-hero.jpg"
                      label="カウンセリング"
                      sublabel="安心して話せる時間"
                      aspect="aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-transparent to-[#fbf8f2]" />
        </section>

        {/* Care list */}
        <section id="care" className="bg-[#fbf8f2]">
          <div className="px-5 py-14">
            <h2 className="text-center text-2xl font-semibold tracking-wide text-neutral-800">
              提供しているケア
            </h2>

            <div className="mt-8 grid gap-4">
              <Link
                href="/uterus"
                className="group overflow-hidden rounded-2xl bg-white/85 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
              >
                <div className="p-4">
                  <PhotoPlaceholder
                    src="/images/uterus-hero.jpg"
                    label="子宮からのヒーリング"
                    sublabel="女性のリズムをやさしく整える"
                    aspect="aspect-[16/10]"
                  />
                </div>

                <div className="px-6 pb-6">
                  <p className="mt-1 text-sm leading-7 text-neutral-600">
                    内側の深い部分に寄り添い、女性のリズムをやさしく整えていくケア。
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-[11px] tracking-[0.18em] text-neutral-600">
                      詳細を見る
                    </div>
                    <span className="text-sm text-neutral-400 transition group-hover:text-neutral-700">
                      →
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/phonon-reverence"
                className="group overflow-hidden rounded-2xl bg-white/85 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
              >
                <div className="p-4">
                  <PhotoPlaceholder
                    src="/images/body-hero.jpg"
                    label="全身ヒーリング"
                    sublabel="手当てのみの全身ケア"
                    aspect="aspect-[16/10]"
                  />
                </div>

                <div className="px-6 pb-6">
                  <p className="mt-1 text-sm leading-7 text-neutral-600">
                    男女問わず受けていただける、手当てのみの全身ヒーリング。
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-[11px] tracking-[0.18em] text-neutral-600">
                      詳細を見る
                    </div>
                    <span className="text-sm text-neutral-400 transition group-hover:text-neutral-700">
                      →
                    </span>
                  </div>
                </div>
              </Link>

              {/* ✅ 「こころの対話」カードは削除（希望どおり） */}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#fbf8f2]">
          <div className="px-5 pb-14">
            <div className="rounded-2xl bg-white/70 p-8 text-center shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-neutral-900">大切にしていること</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                すべての人には、自分を癒す力が備わっています。<br />
                私はただ、その力が自然に湧き出るように、そっと寄り添い、見守るだけ。<br />
                焦らず、比べず、ありのままで。
              </p>
            </div>
          </div>
        </section>

        {/* Profile */}
        <section className="bg-[#fbf8f2]">
          <div className="px-5 pb-16">
            <div className="flex flex-col items-center text-center">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-white/70 shadow-sm ring-1 ring-black/10" />

              <div className="mt-6 text-xs tracking-[0.25em] text-neutral-500">
                HEALING PRACTITIONER
              </div>
              <div className="mt-2 text-2xl font-semibold text-neutral-900">鶴巻 由紀子</div>

              <p className="mt-4 text-sm leading-7 text-neutral-700">
                2015年よりヒーリング活動を開始。<br />
                これまで500名以上の方々と向き合い、こころとからだの調和をサポートしています。
              </p>

              <p className="mt-10 text-sm text-neutral-600">
                日々の活動や、こころに響いたことをSNSで発信しています。
              </p>

              <div className="mt-5 grid w-full gap-3">
                <a
                  className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white"
                  href="#"
                >
                  Instagram
                </a>
                <a
                  className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white"
                  href="#"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Services（診療内容）セクションはまるごと削除 */}

        {/* Doctor */}
        <section id="doctor">
          <div className="px-5 py-14">
            <h2 className="text-2xl font-semibold">医師紹介</h2>
            <div className="mt-8 grid gap-6">
              <div className="aspect-square overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/60 shadow-sm" />
              <div>
                <div className="text-lg font-medium">院長：◯◯ ◯◯</div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  経歴や専門領域、患者さんへの姿勢など。安心感が伝わる文章を2〜4行。
                </p>
                <div className="mt-5 rounded-2xl border border-neutral-200/70 bg-white p-5 text-sm text-neutral-600 shadow-sm">
                  <div className="font-medium text-neutral-900">診療方針</div>
                  <div className="mt-2">
                    丁寧な説明／無理な提案をしない／プライバシー配慮、など短く箇条書きも◎
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access */}
        <section id="access" className="bg-white/55">
          <div className="px-5 py-14">
            <h2 className="text-2xl font-semibold">アクセス</h2>
            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 text-sm text-neutral-700 shadow-sm">
                <div className="font-medium text-neutral-900">住所</div>
                <div className="mt-2">東京都◯◯区◯◯…</div>
                <div className="mt-4 font-medium text-neutral-900">最寄り</div>
                <div className="mt-2">◯◯駅 徒歩◯分 / 駐車場◯台</div>
                <div className="mt-4 font-medium text-neutral-900">診療時間</div>
                <div className="mt-2">平日 10:00-19:00 / 土 10:00-17:00（例）</div>
              </div>
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
                <div className="flex h-64 items-center justify-center text-sm text-neutral-500">
                  ここにGoogle Map（後で埋め込み）
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="px-5 py-14">
            <h2 className="text-2xl font-semibold">お問い合わせ</h2>
            <p className="mt-2 text-neutral-600">予約・ご相談はフォームから承っています。</p>

            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium">フォーム</div>
                <p className="mt-2 text-sm text-neutral-600">
                  ここは後でフォーム連携（Formspree等）に置き換えるよ。
                </p>
                <a
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white shadow-sm hover:bg-neutral-800"
                  href="#"
                >
                  フォームを開く
                </a>

                <div className="mt-3 text-center text-[11px] tracking-[0.18em] text-neutral-400">
                  REPLY WITHIN 24H (例)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200/60 bg-[#fbf8f2]">
          <div className="px-5 py-10 text-sm text-neutral-600">
            <div className="flex flex-col gap-3">
              <div>© {new Date().getFullYear()} CLINIC NAME</div>
              <div className="flex gap-4">
                <a className="hover:text-neutral-900" href="#">
                  プライバシーポリシー
                </a>
                <a className="hover:text-neutral-900" href="#">
                  特定商取引法
                </a>
              </div>
            </div>
            <div className="mt-4 text-xs text-neutral-500">
              ※医療広告ガイドラインに配慮した表現にしましょう（誇大表現NG、効果保証NG）。
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
