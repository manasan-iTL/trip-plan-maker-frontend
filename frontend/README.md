# プロジェクトの環境構築、ディレクトリ構成、state管理について

## ディレクトリ構成について

- src配下には、componentsとlibに分ける
    - components・・画面構成に関わる全てのUI、UIに関わるロジック（hooks）、Routing等
    - lib・・ライブラリ側の初期設定等
- components
    - ui・・最小のコンポーネント。ドメインロジックを持たず、Stateも持たない
    - 

## State管理について

- Local State、Global State、Server Stateに分ける
    - Local State・・１ページ内で完結するかつサーバーと同期する必要がない状態
    - Global State・・ページを跨いで管理する必要がある状態
    - Server State・・サーバーからフェッチした情報自体、またそれに関連して変わる状態
- Local State
    - Form系の状態はすべて
    - どのように管理するかは検討中。propsバケツリレーは結構しんどい。
    - 跨ぐコンポーネントの範囲が大きい場合、ContextAPIかRecoil系の状態管理ライブラリで管理するのもあり
    - 単純にcustom hooksでやるのもあり
    - イメージ： Container層でデータ管理（更新、取得含め）、Presentation層ではPropsで受け取るだけ
