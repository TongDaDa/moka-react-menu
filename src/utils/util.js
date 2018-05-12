export function omit(obj, fields) {
    let copy = Object.assign({}, obj);
    for (let i = 0; i < fields.length; i++) {
        let key = fields[i];
        delete copy[key];
    }
    return copy;
}

export function splitObject (obj,list){
    const left = {};
    const right = {};

    Object.keys(obj).forEach((m)=>{
        if(list.indexOf(m) !== -1){
            left[m] = obj[m];
        }else{
            right[m] =obj[m];
        }
    });
    return [left,right];
}