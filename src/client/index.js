// 모킹 클라이언트 설정 (API 호출 모킹)
export const client = {
  get(endPoint) {
    if (endPoint === 'todos') {
      return Promise.resolve(['리덕스 배우기', '미들웨어 공부하기']);
    }
  },
};
