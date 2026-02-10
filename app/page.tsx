// app/page.tsx
import Image from "next/image";
import Link from "next/link";

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
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 430px) 100vw, 430px"
        priority={priority}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/25" />

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
    <main className="min-h-screen bg-[#fbf8f2] text-neutral-900">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-[#fbf8f2]/80 backdrop-blur">
          <div className="px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-wide">
                HEALING STUDIO
              </div>

              <div className="flex items-center gap-2">
               <a
  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm hover:bg-neutral-800"
  href="https://www.instagram.com/yonipichu_dr.yuki?igsh=dWFncmg3endtNnpw"
  target="_blank"
  rel="noreferrer"
>
  予約・相談
</a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#fbf8f2]" />
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(255,233,190,0.55)] blur-3xl" />
            <div className="absolute -top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-[rgba(255,245,225,0.8)] blur-3xl" />
            <div className="absolute bottom-[-140px] left-[-120px] h-[520px] w-[520px] rounded-full bg-[rgba(255,255,255,0.9)] blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-[#fbf8f2]" />
          </div>

          <div className="relative px-5 py-12">
            <p className="text-[11px] font-medium tracking-[0.22em] text-neutral-600/80">
              HEALING
            </p>

            <h1 className="mt-3 text-[30px] font-semibold leading-[1.25]">
              からだの声に、<br />
              静かに寄り添う時間を。
            </h1>

            <p className="mt-5 text-[15px] leading-8 text-neutral-700">
              触れること、呼吸すること、ほどけていくこと。<br />
              この時間が、本来の自分を思い出すきっかけになりますように。
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
                メニューを見る
              </a>
            </div>

            <div className="mt-10">
              <div className="text-center text-[11px] tracking-[0.22em] text-neutral-500">
                SOFT LIGHT / QUIET SPACE
              </div>

              {/* ✅ 画像は2枚：カウンセリング／手当て（空間は削除） */}
              <div className="mt-4 -mx-5 overflow-x-auto px-5 pb-2">
                <div className="flex w-max gap-4">
                  <div className="w-[280px]">
                    <PhotoPlaceholder
                      src="/images/counseling.png" // 差し替え予定の画像
                      label="カウンセリング"
                      sublabel="言葉にならない感覚にも、静かに耳を澄ませる"
                      aspect="aspect-[4/3]"
                      priority
                    />
                  </div>

                  <div className="w-[280px]">
                    <PhotoPlaceholder
                      src="/images/teate.png" // 差し替え予定の画像
                      label="手当て"
                      sublabel="触れることで、からだの緊張がほどけていく"
                      aspect="aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              {/* ✅ 世界観を壊さない小さめ注記 */}
              <div className="mt-2 text-center text-[11px] tracking-[0.12em] text-neutral-500/80">
                ※掲載している画像はイメージです（生成画像を含みます）
              </div>
            </div>
          </div>

          <div className="h-10 bg-gradient-to-b from-transparent to-[#fbf8f2]" />
        </section>

        {/* Care list */}
        <section id="care" className="bg-[#fbf8f2]">
          <div className="px-5 py-14">
            <h2 className="text-center text-2xl font-semibold tracking-wide text-neutral-800">
              提供しているメニュー
            </h2>

            <p className="mt-3 text-center text-sm leading-7 text-neutral-600">
              その日の状態に合わせて、触れ方・呼吸・間（ま）を調整しながら進めます。
            </p>

            <div className="mt-8 grid gap-4">
              <Link
                href="/phonon-reverence"
                className="group overflow-hidden rounded-2xl bg-white/85 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
              >
                <div className="p-4">
                  <PhotoPlaceholder
                    src="/images/body-hero.png"
                    label="全身ヒーリング"
                    sublabel="ヒーリング"
                    aspect="aspect-[16/10]"
                  />
                </div>

                <div className="px-6 pb-6">
                  <p className="mt-1 text-sm leading-7 text-neutral-600">
                    触れる・温度・呼吸のリズムを用いて、全身の緊張をやさしくほどいていくケア。
                    静けさを取り戻したい方へ。
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
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#fbf8f2]">
          <div className="px-5 pb-14">
            <div className="rounded-2xl bg-white/70 p-8 text-center shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-neutral-900">
                大切にしていること
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                すべての人には、自分を整える力が備わっています。<br />
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
              <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-sm ring-1 ring-black/10">
                <Image
                  src="/images/profile.png"
                  alt="鶴巻 由紀子"
                  fill
                  className="object-cover scale-[1.15]"
                  priority
                />
              </div>

              <div className="mt-6 text-xs tracking-[0.25em] text-neutral-500">
                HEALER / BODYWORK PRACTITIONER
              </div>
              <div className="mt-2 text-2xl font-semibold text-neutral-900">
                鶴巻 由紀子
              </div>

              <p className="mt-4 text-sm leading-7 text-neutral-700">
                2015年よりヒーリング活動を開始。<br />
                これまで多くの方々と向き合い、こころとからだの調和をサポートしています。
              </p>

              <p className="mt-10 text-sm text-neutral-600">
                日々の活動や、こころに響いたことをSNSで発信しています。
              </p>

              {/* ✅ SNSリンク：外部へ飛ぶ */}
              <div className="mt-5 grid w-full gap-3">
                <a
                  className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white"
                  href="https://www.instagram.com/yonipichu_dr.yuki?igsh=dWFncmg3endtNnpw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  className="rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white"
                  href="https://youtu.be/ii_NY92p4Qs?si=V_pC-LwgnLRdy5pe"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Access */}
        <section id="access" className="bg-white/55">
          <div className="px-5 py-14">
            <h2 className="text-2xl font-semibold">アクセス</h2>

            <p className="mt-2 text-sm leading-7 text-neutral-600">
              （完全予約制）
            </p>

            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 text-sm text-neutral-700 shadow-sm">
                <div className="font-medium text-neutral-900">住所</div>
                <div className="mt-2">
                  東京都渋谷区代官山町20-23 Forestgate Daikanyama MAIN棟 3F　株式会社　Tweedia
                </div>

                <div className="mt-4 font-medium text-neutral-900">最寄り</div>
                <div className="mt-2">
                  東急東横線「代官山」駅 中央口より徒歩1分
                </div>

                <div className="mt-4 font-medium text-neutral-900">
                  営業時間（目安）
                </div>
                <div className="mt-2">
                  10:00-19:00（完全予約制）
                  <br />
                  ※詳細はご予約時にご案内します
                </div>

                <div className="mt-5">
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:bg-white"
                    href="https://maps.google.com/?q=Forestgate%20Daikanyama%20Business-Airport"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Googleマップで開く
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Access Map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Forestgate%20Daikanyama&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
<section id="contact">
  <div className="px-5 py-14">
    <h2 className="text-2xl font-semibold">予約・お問い合わせ</h2>

    <p className="mt-2 text-neutral-600">
      ご予約・ご相談はInstagramのDMより承っています（施術場所：ビジネスエアポート代官山 内 個室）。
    </p>

    <div className="mt-8 grid gap-6">
      <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
        <div className="text-sm font-medium">Instagram DM</div>

        <p className="mt-2 text-sm leading-7 text-neutral-600">
          内容を確認のうえ、順次ご案内いたします。<br />
          はじめての方は「お名前／ご希望日時（候補）／気になっていること」を添えてください。
        </p>

        <a
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white shadow-sm hover:bg-neutral-800"
          href="https://www.instagram.com/yonipichu_dr.yuki?igsh=dWFncmg3endtNnpw"
          target="_blank"
          rel="noreferrer"
        >
          InstagramでDMする
        </a>

        <div className="mt-3 text-center text-[11px] tracking-[0.18em] text-neutral-400">
          REPLY WITHIN 24H（目安）
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="border-t border-neutral-200/60 bg-[#fbf8f2]">
          <div className="px-5 py-10 text-sm text-neutral-600">
            <div className="flex flex-col gap-3">
              <div>© {new Date().getFullYear()} HEALING STUDIO</div>

              <div className="flex gap-4">
                <Link className="hover:text-neutral-900" href="/privacy">
                  プライバシーポリシー
                </Link>
                <Link className="hover:text-neutral-900" href="/terms">
                  利用規約
                </Link>
                <Link className="hover:text-neutral-900" href="/law">
                  特定商取引法
                </Link>
              </div>
            </div>

            <div className="mt-4 text-xs leading-6 text-neutral-500">
              ※本サイトで紹介するセッションは、医療行為・診断・治療を目的としたものではありません。
              効果を保証するものではなく、感じ方には個人差があります。体調に不安がある場合は、医療機関へご相談ください。
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
