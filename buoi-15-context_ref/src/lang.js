import langResource from './lang.json'

const getText = (key, lang)=>{
    return langResource[key][lang]
}
export default getText