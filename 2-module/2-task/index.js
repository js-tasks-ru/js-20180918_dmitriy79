function findInternal(obj, value, path) {
    let result = [];
    for (const key in obj) {
        const keyName = (path) ? `${path}.${key}` : key;
        const propValue = obj[key];
        if (propValue !== null && typeof propValue === 'object') {
            let internalResult = findInternal(propValue, value, keyName)
            if (internalResult.length !== 0) {
                result.push(...internalResult);
            }
        }
        if (obj[key] === value) {
            result.push(keyName);
        }
    }
    return result;
}

function find (obj, value) {
    if (!obj) {
        return null;
    }
    let res = findInternal(obj, value, '');
    if (res.length === 0) {
        return null;
    } else if (res.length === 1) {
        return res[0];
    }
    return res;
}