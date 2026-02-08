// app/terms/page.tsx
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function TermsPage() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      <div className="mx-auto max-w-[680px] px-5 py-16">
        <h1 className="text-2xl font-semibold">利用規約</h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-neutral-700">
          <p>
            この利用規約（以下「本規約」）は、株式会社tweedia（以下「当社」）が提供する
            ヒーリング／ボディワーク等のサービス（以下「本サービス」）の利用条件を定めるものです。
            お客様は本規約に同意のうえ、本サービスをご利用ください。
          </p>

          <section>
            <h2 className="font-medium text-neutral-900">第1条（本サービスの性質）</h2>
            <p>
              本サービスは、医療行為・診断・治療を目的とするものではありません。
              効果を保証するものではなく、感じ方や変化には個人差があります。
              体調に不安がある場合は、事前に医療機関へご相談ください。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">第2条（予約・支払い）</h2>
            <p>
              予約は当社所定の方法で受け付けます。
              料金および支払方法は、当社が別途定め、サイト上に表示します。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">第3条（キャンセル・変更）</h2>
            <p>
              キャンセルおよび変更は、当社が定めるキャンセルポリシーに従うものとします。
              提供後の返金は原則として行いません。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">第4条（禁止事項）</h2>
            <p>
              利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
              <br />
              ・当社または第三者への迷惑行為、誹謗中傷
              <br />
              ・無断での録音、撮影、転載は禁止利用
              <br />
              ・虚偽の申告
              <br />
              ・法令または公序良俗に反する行為
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">第5条（免責）</h2>
            <p>
              当社は、本サービスの利用により生じたいかなる結果についても、
              医療的な効果や結果を保証するものではありません。
              当社に故意または重過失がある場合を除き、責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="font-medium text-neutral-900">第6条（準拠法・管轄）</h2>
            <p>
              本規約は日本法を準拠法とし、本サービスに関する紛争については
              {/* TODO: 管轄裁判所 */}
              東京地方裁判所
              を専属的合意管轄とします。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
