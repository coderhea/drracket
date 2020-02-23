function increase(number){
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            const result = number + 10;
            if (result > 50){
                const e = new Error('number tooo big');
                   return reject(e);
            }
                resolve(result);
        }, 1000)
    });
    
    return promise;
}

async function runTasks(){
    try {
        let result = await increment(0);
        console.log(result);
        result = await increment(result);
        console.log(result);
        result = await increment(result);
        console.log(result);
        result = await increment(result);
        console.log(result);
        result = await increment(result);
        console.log(result);
        result = await increment(result);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
