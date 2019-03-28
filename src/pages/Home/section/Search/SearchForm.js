import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import languages from './util/languages';
import SearchFormView from './SearchFormView';
import { SEOContext } from '../../store';

const SearchForm = () => {
    const [keywords, setKeywords] = useState('');
    const [longLanguage, setLongLanguage] = useState('🇧🇴 Bolivia / Spanish (Latin America) - Español (Latinoamérica)')
    const [language, setLanguage] = useState('BO:es:Bolivia:Espanol (Latinoamerica):67');

    const { actions: { setPair } } = useContext(SEOContext);

    useEffect(() => {
        axios.get('http://api.ipify.org', {
        })
            .then((res) => {
                const ip = res.data
                axios({
                    method: 'post',
                    url: `http://server.borjamediavilla.com/api/localLang`,
                    data: { ip },
                    crossdomain: true
                })
                    .then((res) => {
                        const { lang } = res.data
                        if (lang) {
                            const longLangAPI = lang.location.country_flag_emoji +
                                lang.country_name + '/' +
                                lang.location.languages[0].name + '-' +
                                lang.location.languages[0].native
                            const langAPI = lang.country_code + ':' +
                                lang.location.languages[0].code + ':' +
                                lang.country_name + ':' +
                                lang.location.languages[0].native
                            console.log('Retrieved from your Locale Info: \n', longLangAPI, ',', langAPI)
                            setLanguage(langAPI);
                            setLongLanguage(longLangAPI)
                        }
                        else {
                            console.log('Bad localLang response:', res.data)
                        }
                    })
                    .catch((e) => {
                        console.log('Bad localLang api:', e)
                    })
            })
            .catch((e) => {
                console.log(e)
            })        
    },[])

    const setLanguages = (selected) => {
        if (selected) {
            const option = languages.filter(lang => selected === lang.flag + lang.text);
            if (option[0].value !== undefined) {
                localStorage.setItem('language', selected); // TODO: check if proprely set language after or before ip-check
                setLanguage(option[0].value);
                setLongLanguage(selected)
            }
            else {
                console.error('Language Given not in json.')
                setLanguage('ES:es:Spain:Spanish:26');
                setLongLanguage('🇪🇸 Spain / Spanish - Español')
            }
        }
    }

    const submitQuery = () => {
        // TODO: Add some sanitizing and error check
        if (keywords !== '')
            setPair('query', { keywords, select: language })
    }

    return (
        <SearchFormView
            setLanguages={setLanguages}
            setKeywords={setKeywords}
            submitQuery={submitQuery}
            languages={languages}
            lang={longLanguage}
            keywords={keywords}
        />
    )
}

export default SearchForm
