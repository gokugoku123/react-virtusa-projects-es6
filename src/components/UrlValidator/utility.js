export const makeHttpRequestUrl = (domain, paths, method = 'GET' , body) => {
    
    let pathList = paths.trim().split(' ') || [];

    let urlPath = `${domain}/${pathList.join('/')}`;

    switch(method) {
        case 'GET': {
            if(Object.keys(body).length === 0) {
                return urlPath;
            }
            if(!checkValidatiyOfBody(body))
                return false;
            let objArr = Object.keys(body);
            let finalString = [];
            for(let i = 0; i < objArr.length; i++) {
                finalString.push(`${objArr[i]}=${body[objArr[i]]}`);
            }
            let finalRequestUrl = `${urlPath}?${finalString.join('&')}`;
            return finalRequestUrl;
        }
        case 'POST':
        case 'PUT': {
            if(Object.keys(body).length === 0 || body === undefined || body === null) {
                return 'Enter a body';
            }
            if(!checkValidatiyOfBody(body))
                return false;
            return urlPath;
        }
        case 'DELETE': {
            return urlPath;
        }
        default : 
            console.log('Invalid Input for Switch');
    }

}

const checkValidatiyOfBody = (obj) => {
    try {
        JSON.stringify(obj);
        return true;
    } catch(err) {
        return false;
    }

}   

export const testValidateURL = (url) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}