# 빅오 표기법

코드 시간 재는 부분을 통해서는 100% 완벽하지가 않다.

코드가 실행될 때 걸리는 시간을 초로 측정하는 것 보다는
컴퓨터가 처리해야하는 연산 갯수로 세면 편하다.

즉 컴퓨터 사양과 상관 없이 연산 갯수에 달려 있다.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

/*
 여기서의 연산 갯수는 총 3개이다
 곱셈, 덧셈, 나누기
 매개변수 1이든 2이든 3이든 N의 값과 상관없이 3번 이루어진다.
*/
```

---

```js
function addUpTo(n) {
  let total = 0;
  for(let i=1; i<=; i++) {
    total += i;
  }
  return total;
}

/*
  해당 코드에서는 함수에 주어지는 n의 값 만큼 연산 갯수가 늘어난다.

  (total의 첫 변수 선언문은 for 루프 안에 있는게 아니기 때문에 시작에 딱 한번 이루어짐)

  for loop (=, <=, ++, +=)

  즉 해당 경우에는 N의 값이 커질수록 연산의 갯수도 비례적으로 늘어난다.

*/
```
