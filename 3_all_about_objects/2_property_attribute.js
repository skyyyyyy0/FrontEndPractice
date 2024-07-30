/**
 * Propert attribute
 * 
 * 1. 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2. 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  ex) getter and setter
 */

const yuJin = {
    name : 'kim',
    year : 2002,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));


/**
 * 1. value - 실제 프로퍼티 값
 * 2. writable - 값을 수정 할 수 있는지 여부, false 로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3. enumerable - 열거가 가능한지 여부. For...in 등을 사용 할 수 있으면 true 로 반환한다.
 * 4. Configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                  false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                  단, writable 이 true 인 경우 값 변경과 writable 을 변경하는건 가능하다.
 */
 
