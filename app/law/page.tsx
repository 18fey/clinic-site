// app/law/page.tsx
import { Noto_Serif_JP } from "next/font/google";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function LawPage() {
  return (
    <main className={`${serif.className} min-h-screen bg-[#fbf8f2] text-neutral-900`}>
      <div className="mx-auto max-w-[680px] px-5 py-16">
        <h1 className="text-2xl font-semibold">特定商取引法に基づく表記</h1>

        <div className="mt-8 space-y-4 text-sm leading-7 text-neutral-700">
          <p>
            <strong>販売事業者名：</strong>
            株式会社tweedia
          </p>

          <p>
            <strong>運営責任者：</strong>
            {/* TODO: 代表者氏名 */}
            代表取締役 〇〇 〇〇
          </p>

          <p>
            <strong>所在地：</strong>
            {/* TODO: 郵便番号・住所 */}
            〒000-0000 東京都〇〇区〇〇
          </p>

          <p>
            <strong>連絡先：</strong>
            {/* TODO: 連絡用メールアドレス */}
            info@example.com
            <br />
            ※お問い合わせは原則メールにて承ります
          </p>

          <p>
            <strong>販売価格：</strong>
            各サービスページに税込価格で表示します
          </p>

          <p>
            <strong>商品代金以外の必要料金：</strong>
            インターネット接続にかかる通信費等はお客様のご負担となります
          </p>

          <p>
            <strong>お支払い方法：</strong>
            クレジットカード決済
          </p>

          <p>
            <strong>お支払い時期：</strong>
            予約確定時に決済が完了します
          </p>

          <p>
            <strong>提供時期：</strong>
            ご予約いただいた日時にサービスを提供します
          </p>

          <p>
            <strong>キャンセル・変更について：</strong>
            <br />
            {/* TODO: キャンセル規定を確定させる */}
            ・前日（24時間前）まで：無料
            <br />
            ・当日キャンセル：料金の100%
            <br />
            ・無断キャンセル：料金の100%
          </p>

          <p>
            <strong>返金について：</strong>
            サービスの性質上、提供後の返金は承っておりません。
            ただし、当社都合により提供ができない場合は全額返金いたします。
          </p>
        </div>
      </div>
    </main>
  );
}
