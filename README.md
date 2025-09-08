# Hotel English Master - MVP

ホテル英語フレーズ学習アプリのMVP版です。

## 機能

- **フラッシュカード学習**: 英語フレーズと日本語訳をカード形式で学習
- **カテゴリー別学習**: チェックイン、チェックアウト、施設案内などのカテゴリー別に学習
- **直感的なUI**: タップでカードを反転させて英語⇔日本語を切り替え
- **進捗表示**: 現在の学習進捗を表示

## 技術スタック

- **React Native** (Expo)
- **TypeScript**
- **React Native Safe Area Context**

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. アプリを起動:
```bash
npm start
```

3. Expo GoアプリでQRコードをスキャンするか、エミュレーターで実行

## 使用方法

1. アプリを起動すると、カテゴリー選択画面が表示されます
2. 学習したいカテゴリーを選択するか、「すべてのカテゴリー」を選択
3. フラッシュカードが表示されるので、タップして英語⇔日本語を切り替え
4. 「前へ」「次へ」ボタンでフレーズを移動
5. 左上の「← カテゴリー」ボタンでカテゴリー選択に戻る

## カテゴリー

- Check-in (チェックイン)
- Directions (道案内)
- Facilities (施設案内)
- Small Talk (雑談)

## 今後の拡張予定

- CSVファイルからの実際のデータ読み込み
- 音声再生機能 (TTS)
- クイズ機能
- 学習履歴・進捗管理
- AdMob広告の統合
- より多くのフレーズデータの追加

## 開発者向け

### プロジェクト構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── FlashCard.tsx   # フラッシュカードコンポーネント
│   └── CategorySelector.tsx # カテゴリー選択コンポーネント
├── screens/            # 画面コンポーネント
│   └── LearningScreen.tsx # メイン学習画面
├── data/               # データ管理
│   └── phraseLoader.ts # フレーズデータの読み込み
└── utils/              # ユーティリティ関数
    └── csvParser.ts    # CSVパース機能
```

### データ形式

フレーズデータは以下の形式で管理されています:

```typescript
interface Phrase {
  id: string;
  english: string;
  japanese: string;
  category: string;
}
```
