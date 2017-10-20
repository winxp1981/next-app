'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
var startI18n = function startI18n(files, lang) {
  return _i18next2.default.init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'pt',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  });
};

exports.default = startI18n;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzL3N0YXJ0STE4bi5qcyJdLCJuYW1lcyI6WyJpMThuIiwic3RhcnRJMThuIiwiZmlsZXMiLCJsYW5nIiwiaW5pdCIsImxuZyIsImZhbGxiYWNrTG5nIiwicmVzb3VyY2VzIiwibnMiLCJkZWZhdWx0TlMiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVA7Ozs7OztBQU1BLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQUQsQUFBUSxNQUFSOzJCQUFpQixBQUFLO1NBQUssQUFDdEMsTUFBTSxBQUNYO2lCQUYyQyxBQUU5QixBQUNiO2VBSDJDLEFBR2hDLEFBQ1g7UUFBSSxDQUp1QyxBQUl2QyxBQUFDLEFBQ0w7ZUFMMkMsQUFLaEMsQUFDWDtXQU5nQixBQUFpQixBQUFVLEFBTXBDO0FBTm9DLEFBQzNDLEdBRGlDO0FBQW5DLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3RhcnRJMThuLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9