import {
    checkInnerUrl, checkUrls, checkAlt, isTitleinFirstBlock, checkKeywordDensity, countWords
} from './advicesHelpers';

const externalUrls = (textHtml = '') => {
    if (textHtml !== '' && textHtml !== undefined) {
        const urlsNumber = checkUrls(textHtml);
        if (urlsNumber === 0) {
            return {
                status: 'danger',
                name: 'externalUrls',
                advice: 'No hay ningun enlace externo en esta pagina, planteate anadir alguno dentro del contexto'
            }
        } else {
            return {
                status: 'warning',
                name: 'external URLs',
                advice: 'Tienes ' + urlsNumber + ' enlaces externos.'
            }
        }
    } else {
        return {
            status: 'danger',
            name: 'externalUrls',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}
const internalUrls = (textHtml = '') => {
    if (textHtml !== '' && textHtml !== undefined) {
        const innerUrlsNumber = checkInnerUrl(textHtml);
        if (innerUrlsNumber === 0) {
            return {
                status: 'danger',
                name: 'internalUrls',
                advice: 'No hay ningun enlace interno en esta pagina, planteate anadir algo relevante.'
            }
        } else {
            return {
                status: 'warning',
                name: 'internalUrls',
                advice: 'Tienes ' + innerUrlsNumber + ' enlaces internos.'
            }
        }
    } else {
        return {
            status: 'danger',
            name: 'internalUrls',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}

const alt = (textHtml = '') => {
    if (textHtml !== '' && textHtml !== undefined) {
        const altNumber = checkAlt(textHtml);
        if (altNumber === 0) {
            return {
                status: 'danger',
                name: 'alt',
                advice: 'A las imagenes de esta pagina les faltan los atributos alt.'
            }
        } else {
            return {
                status: 'warning',
                name: 'internalUrls',
                advice: 'Tienes ' + altNumber + ' Elementos Alt en tus imagenes.'
            }
        }
    } else {
        return {
            status: 'danger',
            name: 'alt',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}

const keywordInFirstBlock = (text = '') => {
    if (text !== '' && text !== undefined && text !==' ') {
        const isThere = isTitleinFirstBlock(text);
        if (isThere) {
            return {
                status: 'success',
                name: 'keywordInFirstBlock',
                advice: 'La palabra clave objetivo aparece en el primer  parrafo del escrito.'
            }
        } else {
            return {
                status: 'danger',
                name: 'keywordInFirstBlock',
                advice: 'La palabra clave objetivo NO aparece en el primer parrafo del escrito. Planteate agregarla.'
            }
        }
    } else {
        return {
            status: 'danger',
            name: 'keywordInFirstBlock',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}

const keywordDensity = (text = '') => {
    if (text !== '' && text !== undefined && text !==' ') {
        const [density, keywordNumber] = checkKeywordDensity(text);
        if (density === 0) {
            return {
                status: 'danger',
                name: 'keywordDensity',
                advice: 'No se hallo la palabra clave en el texto. Planteate agregarla.'
            }
        } else {
            return {
                status: 'warning',
                name: 'keywordDensity',
                advice: 'La densidad de la palabra clave es de ' + density + '%, lo que esta  genial, la palabra clave objetivo se encontro ' + keywordNumber + ' veces.'
            }

        }
    } else {
        return {
            status: 'danger',
            name: 'keywordDensity',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}

const wordCount = (text) => {
    if (text !== '' && text !== undefined) {
        const count = countWords(text);
        switch (true) {
            case (count === 0):
                return {
                    status: 'danger',
                    name: 'wordCount',
                    advice: 'No se hallo texto. Planteate agregar algo en el editor y/o guardar.'
                }
            case (count < 400):
                return {

                }
            case (count >= 400):
                return {
                    status: 'success',
                    name: 'wordCount',
                    advice: 'El texto contiene ' + count + ' palabras. Es mas o igual que el minimo recomendado de 400 palabras.'
                }
            default:
                return {
                    status: 'error',
                    name: 'wordCount',
                    advice: 'Ocurrio un error al verificar las palabras. Intenta de nuevo mas tarde.'
                }
        }
    } else {
        return {
            status: 'danger',
            name: 'wordCount',
            advice: 'No hay ningun texto guardado en el editor.'
        }
    }
}

export const getOne = (article, name) => {
    const { title, text, textHtml } = article;
    switch (name) {
        case 'externalUrls': return externalUrls(textHtml);
        case 'internalUrls': return internalUrls(textHtml);
        case 'alt': return alt(textHtml);
        case 'keywordInFirstBlock': return keywordInFirstBlock(text);
        case 'keywordDensity': return keywordDensity(text, title);
        case 'wordCount': return wordCount(text);
        default:
            return {
                status: 'danger',
                name,
                advice: 'This name is not allowed. Please check your request for incorrect name.'
            }
    }
}

export const getAll = (article) => {
    const { title, text, textHtml } = article;
    const advices = [
        externalUrls(textHtml),
        internalUrls(textHtml),
        alt(textHtml),
        keywordInFirstBlock(text),
        keywordDensity(text, title),
        wordCount(text)
    ]
    return advices
}