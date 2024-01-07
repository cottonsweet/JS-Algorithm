function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// performance.now() 함수 성능 측정
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`첫번째 함수 소요시간 ${(t2 - t1) / 1000} 초`);

// 첫번째 함수 소요시간 0.9632766251564026 초
