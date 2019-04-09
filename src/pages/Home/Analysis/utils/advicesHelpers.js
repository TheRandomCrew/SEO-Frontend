export const countWords = (text = '') => {
    return text.split(' ')
        .filter(n => n !== '')
        .length;
}
export const checkUrls = (textHtml = '') => {
    let urls  = 0;
    if (textHtml.includes(' href=')){
        urls = textHtml.split(' href=').length-1; 
    }
    return urls;
}
export const checkAlt = (textHtml = '') => {
    return textHtml.split('<img ').filter(img => img.includes(' alt=')).length;
}
export const checkInnerUrl = (textHtml = '') => {
    try {
        const names = textHtml.split(' name=').length-1;
        const links = textHtml.split(' href=').filter(a => a.includes('#')).length;
        return names > links ? names - (names - links) : names < links ? links - (links - names) : names
    } catch (error) {
        console.error(error);
        return NaN
    }
}
export const isTitleinFirstBlock = (text = '', title = '') => {
    return text.split('\n\n')[0].includes(title)
}
export const checkKeywordDensity = (text = '', title='') => {
    if(title && text.includes(title)){
        const keyword = text.split(title).length;
        const words = countWords(text);
        if (words !== 0 && text.split(title)!==' ') { 
            console.log(keyword, title, text.split(title))
            return [(keyword / words)*100, keyword]; 
        }
        else { return [NaN, keyword] }
    }
    else { return [NaN, 0] }    
}