/* global fetch */
import 'isomorphic-fetch'

// !!! NOT USED FOR NOW  !!!

/**
 * Fetch translation file(s).
 * @function getTranslation
 * @param {string} lang - Language to fetch.
 * @param {array} files - Translation files to fetch.
 * @param {string} baseUrl - Locale location.
 * @return {object} Fetched translation files.
 */
export async function getTranslations (lang, files, baseUrl) {
  let translationEN = {}
  let translationTW = {}

  // EN
  let langEN = 'en'
  for (let file of files) {
    //const response = await fetch(`${baseUrl}${lang}/${file}.json`)
    const response = await fetch(`${baseUrl}${langEN}/${file}.json`)
    translationEN[file] = await response.json()
  }

  // TW
  let langTW = 'tw'
  for (let file of files) {
    const response = await fetch(`${baseUrl}${langTW}/${file}.json`)
    translationTW[file] = await response.json()
  }

  return {
    [langEN]: translationEN,
    [langTW]: translationTW
  }
}
