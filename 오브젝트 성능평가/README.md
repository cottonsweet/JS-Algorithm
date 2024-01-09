# 배열과 오브젝트의 성능평가

```js
const instructor = {
  firstName: "kim",
  isInstructor: true,
  numbers: [1, 2, 3, 4],
};
```

자바스크립트는 어떠한 특정 정보를 객체안에 상수 시간안에 정할 수 있다.

어떤 값을 상수 시간안에 수정할 수도 있다
그게 어떤 값을 불러오는 작업과 똑같은 상수 시간대로 불러온다.

기본적인 연산은 매우 빠르다.
배열과 달리 정렬이 안되어 있으며 객체에 시작과 끝이 없다.

입력, 제거, 접근은 상수시간대며, 검색은 N에 따라 상이한다.

```
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)
```

---

```js
const names = ["Michael", "Melissa", "Andrea"];
```

자바스크립트의 배열은 정렬되어 있는 데이터 구조이다.
다만 정렬되어 있는 데이터구조가 배열만 있는것으 아니며
이는 자바스크립트에 내장되어 있는 구조일뿐이다.

또한 정렬되어 있는 데이터가 필요할때 배열을 사용할 수 있지만 그 성능을 희생해야 할 때가 있다.

대표적으로 "입력"과 "제거" 이다.
검색은 N에 따라 상이하며, 접근은 상수시간대로 접근한다.

```
Insertion - It depends...
Removal - It depends...
Searching - O(N)
Access - O(1)
```
