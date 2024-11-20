

export async function GetData(url) {
    let carsDatas;
    let err;
    await axios.get(url)
    .then(res=>carsDatas=res.data)
    .catch(error=>err=error)
    return{
        carsDatas,
        err
    }
}
export async function GetData2(url) {
    let carsDatas;
    let err;
    await axios.get(url)
    .then(res=>carsDatas=res.data)
    .catch(error=>err=error)
    return{
        carsDatas,
        err
    }
}
export async function PostCars(url,newObj) {
    let carsDatas;
    let err;
    await axios.post(url,newObj)
    .then(res=>carsDatas=res.data)
    .catch(error=>err=error)
    return{
        carsDatas,
        err
    }
}