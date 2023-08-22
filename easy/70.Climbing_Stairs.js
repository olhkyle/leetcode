/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
	// 마지막 테스트케이스 통과 불가
	// if(n === 1) return 1;
	// if(n === 2) return 2;

	// return climbStairs(n-2) + climbStairs(n-1);

	/**
	 * Dynamic Programming(DP) -> 점화식을 잘세워야 한다.
	 * 1. 동적 계획법의 특징으로 어려운 문제가 있다면 잘게 나누어 해결한 뒤 처리하여 나중에 전체의 답을 구하는 과정
	 * 2. 이 과정에서 메모이제이션이 사용된다는 점에 분할정복과 다르다.
	 * 3. 계산한 결과를 배열에 저장하고, 나중에 동일한 계산을 해야할 때는 해당되는 index의 값을 반환하기만 하면 된다.
	 * dp[i] = dp[i-1] + dp[i-2]
	 */

	/**
	 *
	 * 분할 정복(Divide & Conquer)은 가장 유명한 알고리즘으로 둘 이상의 부분 문제로 나눈 뒤 각 문제에 대한 답을 재귀 호출을 이용해 계산하고, 각 부분 문제의 답으로부터 전체 문제의 답을 계산합니다.
	 */

	let dp = Array.from({ length: n + 1 }, (_, idx) => 0);
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}

	return dp[n];
};
