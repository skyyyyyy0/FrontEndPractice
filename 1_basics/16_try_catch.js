/**
 * try ... catch 에러를 잡는데 사용된다
 * 
 * 1. 발생시킬때 -> 던진다고 한다 (throw)
 * 2. 명시적으로 인지할때 -> 잡는다고 한다 (catch)
 */

function runner(){
    try{
        console.log('hello');

        throw new Error('Error');

        console.log('code');
    } catch(e){
        console.log(e)
    } finally {
        console.log('finally')
    }
}

runner();