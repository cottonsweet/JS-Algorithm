function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// performance.now() 함수 성능 측정
let time1 = performance.now();
addUpTo(1000000000);
let time2 = performance.now();
console.log(`두번째 함수 소요시간 ${(time2 - time1) / 1000} 초`);

// 두번째 함수 소요시간 0.000012958049774169922 초
