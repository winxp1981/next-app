import i18n from 'i18next'
import XHR from 'i18next-xhr-backend';
import { getTranslations } from './translationHelpers'

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */

/*
//const startI18n = (files, lang) => i18n.use(XHR).init({
const startI18n = () => i18n.use(XHR).init({
//  lng: lang, // active language http://i18next.com/translate/
  preload: ['tw', 'en'],
  fallbackLng: 'en',
//  resources: files,
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  getAsync: false,
  backend: {
  // 設定語系檔案的 server 路徑, 會以GET的方式跟 server 要檔案
  // lng = 語系代碼 ns = namespace
    "loadPath": "/static/locales/{{lng}}/{{ns}}.json"
  }
})
*/
const translationEN =
{
  common: {
    "about": "About",
    "search": "Search",
    "search_room": "Find a room",
    "login": "Login",
    "signup": "Signup",
    "email_address": "Email address",
    "password": "Password",
    "login_facebook": "Login with facebook",
    "login_google": "Login with Google",
    "tenant": "Find",
    "roomhost": "Host",
    "download_app": "app",
    "account": "My account",
    "collection": "My collection",
    "logout": "Log out",
    "login_required": "please log in first",
    "room_host": "Room Host",
    "about_us": "About Us",
    "area": "Area"
  }
}

const translationTW =
{
  common: {
    "about": "關於",
    "search": "搜尋",
    "search_room": "搜尋好房屋",
    "login": "登入",
    "signup": "註冊",
    "email_address": "電子郵件地址",
    "password": "密碼",
    "login_facebook": "facebook 登入",
    "login_google": "Google+ 登入",
    "tenant": "我要租屋",
    "roomhost": "成為房東",
    "download_app": "下載app",
    "account": "我的帳戶",
    "collection": "我的收藏",
    "logout": "登出",
    "login_required": "請先登入",
    "room_host": "房東專區",
    "about_us": "關於我們",
    "area": "坪數"
  }
}

const translations = {
  ['en']: translationEN,
  ['tw']: translationTW
}

export default function startI18n (lang) {
//  console.log("@@ startI18n: " + i18n.isInitialized)
//  if (i18n.isInitialized) return i18n;
//  console.log(translations)

  return i18n.init({
    lng: lang,
    fallbackLng: 'en',
    resources: translations,
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  })
}

 //export default startI18n
