/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	// 0은 요소로 치지 않고 제거한다.

	// index 값이 있으면,그 뒤에 nums2를 붙이고 오름차순 정렬
	// const index = nums1.findIndex(num => num === m);

	// if (index) {
	// 	nums1 = [...nums1.slice(0, index + 1), ...nums2].sort((a, b) => a - b);
	// }

	// 배열 자체를 바꿀 때는 불변성을 위해 arr를 업데이트 칠 수도 있지만, 내부의 요소의 값에 접근하여 직접 변경할 수 있다.
	for (let n = nums2.length - 1; n >= 0; n -= 1) {
		nums1[n + m] = nums2[n];
	}

	// sort method will change nums1 array itself
	nums1.sort((a, b) => a - b);
};
