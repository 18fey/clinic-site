// app/privacy/page.tsx
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function PrivacyPage() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      <div className="mx-auto max-w-[680px] px-5 py-16">
        <h1 className="text-2xl font-semibold">プライバシーポリシー</h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-neutral-700">
          <p>
            株式会社tweedia（以下「当社」）は、個人情報の重要性を認識し、
            以下のとおり適切に取り扱います。
          </p>

          <section>
            <h2 className="font-medium text-neutral-900">1. 取得する情報</h2>
            <p>
              当社は、予約・お問い合わせ等を通じて、氏名、メールアドレス、
              連絡先、予約内容等の情報を取得する場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">2. 利用目的</h2>
            <p>
              取得した個人情報は、以下の目的で利用します。
              <br />
              ・サービス提供および予約管理
              <br />
              ・お問い合わせ対応
              <br />
              ・サービス品質向上のための分析
              <br />
              ・法令に基づく対応
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">3. 第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">4. 安全管理</h2>
            <p>
              当社は、個人情報の漏えい、滅失、毀損を防止するため、
              適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">5. お問い合わせ窓口</h2>
            <p>
              本ポリシーに関するお問い合わせは、以下までご連絡ください。
              <br />
              株式会社tweedia
              <br />
              {/* TODO: 問い合わせ用メール */}
              info@example.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
