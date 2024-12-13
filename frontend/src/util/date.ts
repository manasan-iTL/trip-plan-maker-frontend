
export function calculateTotalDays(startDate: string, endDate: string): number | null {
    // 日付文字列をDateオブジェクトに変換
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // 入力が有効な日付かどうかをチェック
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return null
    }
  
    // 帰宅日が出発日より前の場合はエラー
    if (end < start) {
      throw null
    }
  
    // 日付の差を計算（日単位に変換）
    const msInADay = 1000 * 60 * 60 * 24;
    const totalDays = Math.floor((end.getTime() - start.getTime()) / msInADay) + 1;
  
    return totalDays;
  }