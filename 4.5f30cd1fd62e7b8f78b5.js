(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/keys.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/keys.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/keys.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/keys.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.keys.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.keys.js"); } }(); 

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/emoji-mart/css/emoji-mart.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/emoji-mart/css/emoji-mart.css ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emoji-mart,\n.emoji-mart * {\n  box-sizing: border-box;\n  line-height: 1.15;\n}\n\n.emoji-mart {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  display: inline-block;\n  color: #222427;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.emoji-mart .emoji-mart-emoji {\n  padding: 6px;\n}\n\n.emoji-mart-bar {\n  border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n  border-bottom-width: 1px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n  border-top-width: 1px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-anchors {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 6px;\n  color: #858585;\n  line-height: 0;\n}\n\n.emoji-mart-anchor {\n  position: relative;\n  display: block;\n  flex: 1 1 auto;\n  text-align: center;\n  padding: 12px 4px;\n  overflow: hidden;\n  transition: color .1s ease-out;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor-selected {\n  color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n  bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n  position: absolute;\n  bottom: -3px; left: 0;\n  width: 100%; height: 3px;\n  background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n  display: inline-block;\n  width: 100%;\n  max-width: 22px;\n}\n\n.emoji-mart-anchors svg,\n.emoji-mart-anchors img {\n  fill: currentColor;\n  height: 18px;\n  width: 18px;\n}\n\n.emoji-mart-scroll {\n  overflow-y: scroll;\n  height: 270px;\n  padding: 0 6px 6px 6px;\n  will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n}\n\n.emoji-mart-search {\n  margin-top: 6px;\n  padding: 0 6px;\n  position: relative;\n}\n\n.emoji-mart-search input {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  padding: 5px 25px 6px 10px;\n  border-radius: 5px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n}\n\n.emoji-mart-search-icon {\n  position: absolute;\n  top: 9px;\n  right: 16px;\n  z-index: 2;\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before {\n  z-index: 0;\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 100%;\n  background-color: #f4f4f4;\n  border-radius: 100%;\n}\n\n.emoji-mart-category-label {\n  z-index: 2;\n  position: relative;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.emoji-mart-category-label span {\n  display: block;\n  width: 100%;\n  font-weight: 500;\n  padding: 5px 6px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, .95);\n}\n\n.emoji-mart-emoji {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n.emoji-mart-emoji-native {\n  font-family: \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Segoe UI\", \"Apple Color Emoji\";\n}\n\n.emoji-mart-no-results {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 70px;\n  color: #858585;\n}\n.emoji-mart-no-results-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n  display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n  margin-top: .2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n  content: none;\n}\n\n.emoji-mart-preview {\n  position: relative;\n  height: 70px;\n}\n\n.emoji-mart-preview-emoji,\n.emoji-mart-preview-data,\n.emoji-mart-preview-skins {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.emoji-mart-preview-emoji {\n  left: 12px;\n}\n\n.emoji-mart-preview-data {\n  left: 68px; right: 12px;\n  word-break: break-all;\n}\n\n.emoji-mart-preview-skins {\n  right: 30px;\n  text-align: right;\n}\n\n.emoji-mart-preview-skins.custom {\n  right: 10px;\n  text-align: right;\n}\n\n.emoji-mart-preview-name {\n  font-size: 14px;\n}\n\n.emoji-mart-preview-shortname {\n  font-size: 12px;\n  color: #888;\n}\n.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,\n.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,\n.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {\n  margin-left: .5em;\n}\n\n.emoji-mart-preview-emoticon {\n  font-size: 11px;\n  color: #bbb;\n}\n\n.emoji-mart-title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.emoji-mart-title .emoji-mart-emoji {\n  padding: 0;\n}\n\n.emoji-mart-title-label {\n  color: #999A9C;\n  font-size: 26px;\n  font-weight: 300;\n}\n\n.emoji-mart-skin-swatches {\n  font-size: 0;\n  padding: 2px 0;\n  border: 1px solid #d9d9d9;\n  border-radius: 12px;\n  background-color: #fff;\n}\n\n.emoji-mart-skin-swatches.custom {\n  font-size: 0;\n  border: none;\n  background-color: #fff;\n}\n\n.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch {\n  width: 16px;\n  padding: 0 2px;\n}\n\n.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch.selected:after {\n  opacity: .75;\n}\n\n.emoji-mart-skin-swatch {\n  display: inline-block;\n  width: 0;\n  vertical-align: middle;\n  transition-property: width, padding;\n  transition-duration: .125s;\n  transition-timing-function: ease-out;\n}\n\n.emoji-mart-skin-swatch:nth-child(1) { transition-delay: 0s }\n.emoji-mart-skin-swatch:nth-child(2) { transition-delay: .03s }\n.emoji-mart-skin-swatch:nth-child(3) { transition-delay: .06s }\n.emoji-mart-skin-swatch:nth-child(4) { transition-delay: .09s }\n.emoji-mart-skin-swatch:nth-child(5) { transition-delay: .12s }\n.emoji-mart-skin-swatch:nth-child(6) { transition-delay: .15s }\n\n.emoji-mart-skin-swatch.selected {\n  position: relative;\n  width: 16px;\n  padding: 0 2px;\n}\n\n.emoji-mart-skin-swatch.selected:after {\n  content: \"\";\n  position: absolute;\n  top: 50%; left: 50%;\n  width: 4px; height: 4px;\n  margin: -2px 0 0 -2px;\n  background-color: #fff;\n  border-radius: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .2s ease-out;\n}\n\n.emoji-mart-skin-swatch.custom {\n  display: inline-block;\n  width: 0;\n  height: 38px;\n  overflow: hidden;\n  vertical-align: middle;\n  transition-property: width, height;\n  transition-duration: .125s;\n  transition-timing-function: ease-out;\n  cursor: default;\n}\n\n.emoji-mart-skin-swatch.custom.selected {\n  position: relative;\n  width: 36px;\n  height: 38px;\n  padding: 0 2px 0 0;\n}\n\n.emoji-mart-skin-swatch.custom.selected:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n}\n\n.emoji-mart-skin-swatches.custom .emoji-mart-skin-swatch.custom:hover {\n  background-color: #f4f4f4;\n  border-radius: 10%;\n}\n\n.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom {\n  width: 36px;\n  height: 38px;\n  padding: 0 2px 0 0;\n}\n\n.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom.selected:after {\n  opacity: .75;\n}\n\n.emoji-mart-skin-text.opened {\n  display: inline-block;\n  vertical-align: middle;\n  text-align: left;\n  color: #888;\n  font-size: 11px;\n  padding: 5px 2px;\n  width: 95px;\n  height: 40px;\n  border-radius: 10%;\n  background-color: #fff;\n}\n\n.emoji-mart-skin {\n  display: inline-block;\n  width: 100%;\n  padding-top: 100%;\n  max-width: 12px;\n  border-radius: 100%;\n}\n\n.emoji-mart-skin-tone-1 { background-color: #ffc93a }\n.emoji-mart-skin-tone-2 { background-color: #fadcbc }\n.emoji-mart-skin-tone-3 { background-color: #e0bb95 }\n.emoji-mart-skin-tone-4 { background-color: #bf8f68 }\n.emoji-mart-skin-tone-5 { background-color: #9b643d }\n.emoji-mart-skin-tone-6 { background-color: #594539 }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/emoji-mart/data/all.json":
/*!***********************************************!*\
  !*** ./node_modules/emoji-mart/data/all.json ***!
  \***********************************************/
/*! exports provided: compressed, categories, emojis, aliases, default */
/*! exports used: default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressed\":true,\"categories\":[{\"id\":\"people\",\"name\":\"Smileys & People\",\"emojis\":[\"grinning\",\"grin\",\"joy\",\"rolling_on_the_floor_laughing\",\"smiley\",\"smile\",\"sweat_smile\",\"laughing\",\"wink\",\"blush\",\"yum\",\"sunglasses\",\"heart_eyes\",\"kissing_heart\",\"kissing\",\"kissing_smiling_eyes\",\"kissing_closed_eyes\",\"relaxed\",\"slightly_smiling_face\",\"hugging_face\",\"star-struck\",\"thinking_face\",\"face_with_raised_eyebrow\",\"neutral_face\",\"expressionless\",\"no_mouth\",\"face_with_rolling_eyes\",\"smirk\",\"persevere\",\"disappointed_relieved\",\"open_mouth\",\"zipper_mouth_face\",\"hushed\",\"sleepy\",\"tired_face\",\"sleeping\",\"relieved\",\"stuck_out_tongue\",\"stuck_out_tongue_winking_eye\",\"stuck_out_tongue_closed_eyes\",\"drooling_face\",\"unamused\",\"sweat\",\"pensive\",\"confused\",\"upside_down_face\",\"money_mouth_face\",\"astonished\",\"white_frowning_face\",\"slightly_frowning_face\",\"confounded\",\"disappointed\",\"worried\",\"triumph\",\"cry\",\"sob\",\"frowning\",\"anguished\",\"fearful\",\"weary\",\"exploding_head\",\"grimacing\",\"cold_sweat\",\"scream\",\"flushed\",\"zany_face\",\"dizzy_face\",\"rage\",\"angry\",\"face_with_symbols_on_mouth\",\"mask\",\"face_with_thermometer\",\"face_with_head_bandage\",\"nauseated_face\",\"face_vomiting\",\"sneezing_face\",\"innocent\",\"face_with_cowboy_hat\",\"clown_face\",\"lying_face\",\"shushing_face\",\"face_with_hand_over_mouth\",\"face_with_monocle\",\"nerd_face\",\"smiling_imp\",\"imp\",\"japanese_ogre\",\"japanese_goblin\",\"skull\",\"skull_and_crossbones\",\"ghost\",\"alien\",\"space_invader\",\"robot_face\",\"hankey\",\"smiley_cat\",\"smile_cat\",\"joy_cat\",\"heart_eyes_cat\",\"smirk_cat\",\"kissing_cat\",\"scream_cat\",\"crying_cat_face\",\"pouting_cat\",\"see_no_evil\",\"hear_no_evil\",\"speak_no_evil\",\"baby\",\"child\",\"boy\",\"girl\",\"adult\",\"man\",\"woman\",\"older_adult\",\"older_man\",\"older_woman\",\"male-doctor\",\"female-doctor\",\"male-student\",\"female-student\",\"male-teacher\",\"female-teacher\",\"male-judge\",\"female-judge\",\"male-farmer\",\"female-farmer\",\"male-cook\",\"female-cook\",\"male-mechanic\",\"female-mechanic\",\"male-factory-worker\",\"female-factory-worker\",\"male-office-worker\",\"female-office-worker\",\"male-scientist\",\"female-scientist\",\"male-technologist\",\"female-technologist\",\"male-singer\",\"female-singer\",\"male-artist\",\"female-artist\",\"male-pilot\",\"female-pilot\",\"male-astronaut\",\"female-astronaut\",\"male-firefighter\",\"female-firefighter\",\"cop\",\"male-police-officer\",\"female-police-officer\",\"sleuth_or_spy\",\"male-detective\",\"female-detective\",\"guardsman\",\"male-guard\",\"female-guard\",\"construction_worker\",\"male-construction-worker\",\"female-construction-worker\",\"prince\",\"princess\",\"man_with_turban\",\"man-wearing-turban\",\"woman-wearing-turban\",\"man_with_gua_pi_mao\",\"person_with_headscarf\",\"bearded_person\",\"person_with_blond_hair\",\"blond-haired-man\",\"blond-haired-woman\",\"man_in_tuxedo\",\"bride_with_veil\",\"pregnant_woman\",\"breast-feeding\",\"angel\",\"santa\",\"mrs_claus\",\"mage\",\"female_mage\",\"male_mage\",\"fairy\",\"female_fairy\",\"male_fairy\",\"vampire\",\"female_vampire\",\"male_vampire\",\"merperson\",\"mermaid\",\"merman\",\"elf\",\"female_elf\",\"male_elf\",\"genie\",\"female_genie\",\"male_genie\",\"zombie\",\"female_zombie\",\"male_zombie\",\"person_frowning\",\"man-frowning\",\"woman-frowning\",\"person_with_pouting_face\",\"man-pouting\",\"woman-pouting\",\"no_good\",\"man-gesturing-no\",\"woman-gesturing-no\",\"ok_woman\",\"man-gesturing-ok\",\"woman-gesturing-ok\",\"information_desk_person\",\"man-tipping-hand\",\"woman-tipping-hand\",\"raising_hand\",\"man-raising-hand\",\"woman-raising-hand\",\"bow\",\"man-bowing\",\"woman-bowing\",\"face_palm\",\"man-facepalming\",\"woman-facepalming\",\"shrug\",\"man-shrugging\",\"woman-shrugging\",\"massage\",\"man-getting-massage\",\"woman-getting-massage\",\"haircut\",\"man-getting-haircut\",\"woman-getting-haircut\",\"walking\",\"man-walking\",\"woman-walking\",\"runner\",\"man-running\",\"woman-running\",\"dancer\",\"man_dancing\",\"dancers\",\"man-with-bunny-ears-partying\",\"woman-with-bunny-ears-partying\",\"person_in_steamy_room\",\"woman_in_steamy_room\",\"man_in_steamy_room\",\"person_climbing\",\"woman_climbing\",\"man_climbing\",\"person_in_lotus_position\",\"woman_in_lotus_position\",\"man_in_lotus_position\",\"bath\",\"sleeping_accommodation\",\"man_in_business_suit_levitating\",\"speaking_head_in_silhouette\",\"bust_in_silhouette\",\"busts_in_silhouette\",\"fencer\",\"horse_racing\",\"skier\",\"snowboarder\",\"golfer\",\"man-golfing\",\"woman-golfing\",\"surfer\",\"man-surfing\",\"woman-surfing\",\"rowboat\",\"man-rowing-boat\",\"woman-rowing-boat\",\"swimmer\",\"man-swimming\",\"woman-swimming\",\"person_with_ball\",\"man-bouncing-ball\",\"woman-bouncing-ball\",\"weight_lifter\",\"man-lifting-weights\",\"woman-lifting-weights\",\"bicyclist\",\"man-biking\",\"woman-biking\",\"mountain_bicyclist\",\"man-mountain-biking\",\"woman-mountain-biking\",\"racing_car\",\"racing_motorcycle\",\"person_doing_cartwheel\",\"man-cartwheeling\",\"woman-cartwheeling\",\"wrestlers\",\"man-wrestling\",\"woman-wrestling\",\"water_polo\",\"man-playing-water-polo\",\"woman-playing-water-polo\",\"handball\",\"man-playing-handball\",\"woman-playing-handball\",\"juggling\",\"man-juggling\",\"woman-juggling\",\"couple\",\"two_men_holding_hands\",\"two_women_holding_hands\",\"couplekiss\",\"woman-kiss-man\",\"man-kiss-man\",\"woman-kiss-woman\",\"couple_with_heart\",\"woman-heart-man\",\"man-heart-man\",\"woman-heart-woman\",\"family\",\"man-woman-boy\",\"man-woman-girl\",\"man-woman-girl-boy\",\"man-woman-boy-boy\",\"man-woman-girl-girl\",\"man-man-boy\",\"man-man-girl\",\"man-man-girl-boy\",\"man-man-boy-boy\",\"man-man-girl-girl\",\"woman-woman-boy\",\"woman-woman-girl\",\"woman-woman-girl-boy\",\"woman-woman-boy-boy\",\"woman-woman-girl-girl\",\"man-boy\",\"man-boy-boy\",\"man-girl\",\"man-girl-boy\",\"man-girl-girl\",\"woman-boy\",\"woman-boy-boy\",\"woman-girl\",\"woman-girl-boy\",\"woman-girl-girl\",\"selfie\",\"muscle\",\"point_left\",\"point_right\",\"point_up\",\"point_up_2\",\"middle_finger\",\"point_down\",\"v\",\"crossed_fingers\",\"spock-hand\",\"the_horns\",\"call_me_hand\",\"raised_hand_with_fingers_splayed\",\"hand\",\"ok_hand\",\"+1\",\"-1\",\"fist\",\"facepunch\",\"left-facing_fist\",\"right-facing_fist\",\"raised_back_of_hand\",\"wave\",\"i_love_you_hand_sign\",\"writing_hand\",\"clap\",\"open_hands\",\"raised_hands\",\"palms_up_together\",\"pray\",\"handshake\",\"nail_care\",\"ear\",\"nose\",\"footprints\",\"eyes\",\"eye\",\"eye-in-speech-bubble\",\"brain\",\"tongue\",\"lips\",\"kiss\",\"cupid\",\"heart\",\"heartbeat\",\"broken_heart\",\"two_hearts\",\"sparkling_heart\",\"heartpulse\",\"blue_heart\",\"green_heart\",\"yellow_heart\",\"orange_heart\",\"purple_heart\",\"black_heart\",\"gift_heart\",\"revolving_hearts\",\"heart_decoration\",\"heavy_heart_exclamation_mark_ornament\",\"love_letter\",\"zzz\",\"anger\",\"bomb\",\"boom\",\"sweat_drops\",\"dash\",\"dizzy\",\"speech_balloon\",\"left_speech_bubble\",\"right_anger_bubble\",\"thought_balloon\",\"hole\",\"eyeglasses\",\"dark_sunglasses\",\"necktie\",\"shirt\",\"jeans\",\"scarf\",\"gloves\",\"coat\",\"socks\",\"dress\",\"kimono\",\"bikini\",\"womans_clothes\",\"purse\",\"handbag\",\"pouch\",\"shopping_bags\",\"school_satchel\",\"mans_shoe\",\"athletic_shoe\",\"high_heel\",\"sandal\",\"boot\",\"crown\",\"womans_hat\",\"tophat\",\"mortar_board\",\"billed_cap\",\"helmet_with_white_cross\",\"prayer_beads\",\"lipstick\",\"ring\",\"gem\"]},{\"id\":\"nature\",\"name\":\"Animals & Nature\",\"emojis\":[\"monkey_face\",\"monkey\",\"gorilla\",\"dog\",\"dog2\",\"poodle\",\"wolf\",\"fox_face\",\"cat\",\"cat2\",\"lion_face\",\"tiger\",\"tiger2\",\"leopard\",\"horse\",\"racehorse\",\"unicorn_face\",\"zebra_face\",\"deer\",\"cow\",\"ox\",\"water_buffalo\",\"cow2\",\"pig\",\"pig2\",\"boar\",\"pig_nose\",\"ram\",\"sheep\",\"goat\",\"dromedary_camel\",\"camel\",\"giraffe_face\",\"elephant\",\"rhinoceros\",\"mouse\",\"mouse2\",\"rat\",\"hamster\",\"rabbit\",\"rabbit2\",\"chipmunk\",\"hedgehog\",\"bat\",\"bear\",\"koala\",\"panda_face\",\"feet\",\"turkey\",\"chicken\",\"rooster\",\"hatching_chick\",\"baby_chick\",\"hatched_chick\",\"bird\",\"penguin\",\"dove_of_peace\",\"eagle\",\"duck\",\"owl\",\"frog\",\"crocodile\",\"turtle\",\"lizard\",\"snake\",\"dragon_face\",\"dragon\",\"sauropod\",\"t-rex\",\"whale\",\"whale2\",\"dolphin\",\"fish\",\"tropical_fish\",\"blowfish\",\"shark\",\"octopus\",\"shell\",\"crab\",\"shrimp\",\"squid\",\"snail\",\"butterfly\",\"bug\",\"ant\",\"bee\",\"beetle\",\"cricket\",\"spider\",\"spider_web\",\"scorpion\",\"bouquet\",\"cherry_blossom\",\"white_flower\",\"rosette\",\"rose\",\"wilted_flower\",\"hibiscus\",\"sunflower\",\"blossom\",\"tulip\",\"seedling\",\"evergreen_tree\",\"deciduous_tree\",\"palm_tree\",\"cactus\",\"ear_of_rice\",\"herb\",\"shamrock\",\"four_leaf_clover\",\"maple_leaf\",\"fallen_leaf\",\"leaves\"]},{\"id\":\"foods\",\"name\":\"Food & Drink\",\"emojis\":[\"grapes\",\"melon\",\"watermelon\",\"tangerine\",\"lemon\",\"banana\",\"pineapple\",\"apple\",\"green_apple\",\"pear\",\"peach\",\"cherries\",\"strawberry\",\"kiwifruit\",\"tomato\",\"coconut\",\"avocado\",\"eggplant\",\"potato\",\"carrot\",\"corn\",\"hot_pepper\",\"cucumber\",\"broccoli\",\"mushroom\",\"peanuts\",\"chestnut\",\"bread\",\"croissant\",\"baguette_bread\",\"pretzel\",\"pancakes\",\"cheese_wedge\",\"meat_on_bone\",\"poultry_leg\",\"cut_of_meat\",\"bacon\",\"hamburger\",\"fries\",\"pizza\",\"hotdog\",\"sandwich\",\"taco\",\"burrito\",\"stuffed_flatbread\",\"egg\",\"fried_egg\",\"shallow_pan_of_food\",\"stew\",\"bowl_with_spoon\",\"green_salad\",\"popcorn\",\"canned_food\",\"bento\",\"rice_cracker\",\"rice_ball\",\"rice\",\"curry\",\"ramen\",\"spaghetti\",\"sweet_potato\",\"oden\",\"sushi\",\"fried_shrimp\",\"fish_cake\",\"dango\",\"dumpling\",\"fortune_cookie\",\"takeout_box\",\"icecream\",\"shaved_ice\",\"ice_cream\",\"doughnut\",\"cookie\",\"birthday\",\"cake\",\"pie\",\"chocolate_bar\",\"candy\",\"lollipop\",\"custard\",\"honey_pot\",\"baby_bottle\",\"glass_of_milk\",\"coffee\",\"tea\",\"sake\",\"champagne\",\"wine_glass\",\"cocktail\",\"tropical_drink\",\"beer\",\"beers\",\"clinking_glasses\",\"tumbler_glass\",\"cup_with_straw\",\"chopsticks\",\"knife_fork_plate\",\"fork_and_knife\",\"spoon\",\"hocho\",\"amphora\"]},{\"id\":\"activity\",\"name\":\"Activities\",\"emojis\":[\"jack_o_lantern\",\"christmas_tree\",\"fireworks\",\"sparkler\",\"sparkles\",\"balloon\",\"tada\",\"confetti_ball\",\"tanabata_tree\",\"bamboo\",\"dolls\",\"flags\",\"wind_chime\",\"rice_scene\",\"ribbon\",\"gift\",\"reminder_ribbon\",\"admission_tickets\",\"ticket\",\"medal\",\"trophy\",\"sports_medal\",\"first_place_medal\",\"second_place_medal\",\"third_place_medal\",\"soccer\",\"baseball\",\"basketball\",\"volleyball\",\"football\",\"rugby_football\",\"tennis\",\"8ball\",\"bowling\",\"cricket_bat_and_ball\",\"field_hockey_stick_and_ball\",\"ice_hockey_stick_and_puck\",\"table_tennis_paddle_and_ball\",\"badminton_racquet_and_shuttlecock\",\"boxing_glove\",\"martial_arts_uniform\",\"goal_net\",\"dart\",\"golf\",\"ice_skate\",\"fishing_pole_and_fish\",\"running_shirt_with_sash\",\"ski\",\"sled\",\"curling_stone\",\"video_game\",\"joystick\",\"game_die\",\"spades\",\"hearts\",\"diamonds\",\"clubs\",\"black_joker\",\"mahjong\",\"flower_playing_cards\"]},{\"id\":\"places\",\"name\":\"Travel & Places\",\"emojis\":[\"earth_africa\",\"earth_americas\",\"earth_asia\",\"globe_with_meridians\",\"world_map\",\"japan\",\"snow_capped_mountain\",\"mountain\",\"volcano\",\"mount_fuji\",\"camping\",\"beach_with_umbrella\",\"desert\",\"desert_island\",\"national_park\",\"stadium\",\"classical_building\",\"building_construction\",\"house_buildings\",\"cityscape\",\"derelict_house_building\",\"house\",\"house_with_garden\",\"office\",\"post_office\",\"european_post_office\",\"hospital\",\"bank\",\"hotel\",\"love_hotel\",\"convenience_store\",\"school\",\"department_store\",\"factory\",\"japanese_castle\",\"european_castle\",\"wedding\",\"tokyo_tower\",\"statue_of_liberty\",\"church\",\"mosque\",\"synagogue\",\"shinto_shrine\",\"kaaba\",\"fountain\",\"tent\",\"foggy\",\"night_with_stars\",\"sunrise_over_mountains\",\"sunrise\",\"city_sunset\",\"city_sunrise\",\"bridge_at_night\",\"hotsprings\",\"milky_way\",\"carousel_horse\",\"ferris_wheel\",\"roller_coaster\",\"barber\",\"circus_tent\",\"performing_arts\",\"frame_with_picture\",\"art\",\"slot_machine\",\"steam_locomotive\",\"railway_car\",\"bullettrain_side\",\"bullettrain_front\",\"train2\",\"metro\",\"light_rail\",\"station\",\"tram\",\"monorail\",\"mountain_railway\",\"train\",\"bus\",\"oncoming_bus\",\"trolleybus\",\"minibus\",\"ambulance\",\"fire_engine\",\"police_car\",\"oncoming_police_car\",\"taxi\",\"oncoming_taxi\",\"car\",\"oncoming_automobile\",\"blue_car\",\"truck\",\"articulated_lorry\",\"tractor\",\"bike\",\"scooter\",\"motor_scooter\",\"busstop\",\"motorway\",\"railway_track\",\"fuelpump\",\"rotating_light\",\"traffic_light\",\"vertical_traffic_light\",\"construction\",\"octagonal_sign\",\"anchor\",\"boat\",\"canoe\",\"speedboat\",\"passenger_ship\",\"ferry\",\"motor_boat\",\"ship\",\"airplane\",\"small_airplane\",\"airplane_departure\",\"airplane_arriving\",\"seat\",\"helicopter\",\"suspension_railway\",\"mountain_cableway\",\"aerial_tramway\",\"satellite\",\"rocket\",\"flying_saucer\",\"bellhop_bell\",\"door\",\"bed\",\"couch_and_lamp\",\"toilet\",\"shower\",\"bathtub\",\"hourglass\",\"hourglass_flowing_sand\",\"watch\",\"alarm_clock\",\"stopwatch\",\"timer_clock\",\"mantelpiece_clock\",\"clock12\",\"clock1230\",\"clock1\",\"clock130\",\"clock2\",\"clock230\",\"clock3\",\"clock330\",\"clock4\",\"clock430\",\"clock5\",\"clock530\",\"clock6\",\"clock630\",\"clock7\",\"clock730\",\"clock8\",\"clock830\",\"clock9\",\"clock930\",\"clock10\",\"clock1030\",\"clock11\",\"clock1130\",\"new_moon\",\"waxing_crescent_moon\",\"first_quarter_moon\",\"moon\",\"full_moon\",\"waning_gibbous_moon\",\"last_quarter_moon\",\"waning_crescent_moon\",\"crescent_moon\",\"new_moon_with_face\",\"first_quarter_moon_with_face\",\"last_quarter_moon_with_face\",\"thermometer\",\"sunny\",\"full_moon_with_face\",\"sun_with_face\",\"star\",\"star2\",\"stars\",\"cloud\",\"partly_sunny\",\"thunder_cloud_and_rain\",\"mostly_sunny\",\"barely_sunny\",\"partly_sunny_rain\",\"rain_cloud\",\"snow_cloud\",\"lightning\",\"tornado\",\"fog\",\"wind_blowing_face\",\"cyclone\",\"rainbow\",\"closed_umbrella\",\"umbrella\",\"umbrella_with_rain_drops\",\"umbrella_on_ground\",\"zap\",\"snowflake\",\"snowman\",\"snowman_without_snow\",\"comet\",\"fire\",\"droplet\",\"ocean\"]},{\"id\":\"objects\",\"name\":\"Objects\",\"emojis\":[\"mute\",\"speaker\",\"sound\",\"loud_sound\",\"loudspeaker\",\"mega\",\"postal_horn\",\"bell\",\"no_bell\",\"musical_score\",\"musical_note\",\"notes\",\"studio_microphone\",\"level_slider\",\"control_knobs\",\"microphone\",\"headphones\",\"radio\",\"saxophone\",\"guitar\",\"musical_keyboard\",\"trumpet\",\"violin\",\"drum_with_drumsticks\",\"iphone\",\"calling\",\"phone\",\"telephone_receiver\",\"pager\",\"fax\",\"battery\",\"electric_plug\",\"computer\",\"desktop_computer\",\"printer\",\"keyboard\",\"three_button_mouse\",\"trackball\",\"minidisc\",\"floppy_disk\",\"cd\",\"dvd\",\"movie_camera\",\"film_frames\",\"film_projector\",\"clapper\",\"tv\",\"camera\",\"camera_with_flash\",\"video_camera\",\"vhs\",\"mag\",\"mag_right\",\"microscope\",\"telescope\",\"satellite_antenna\",\"candle\",\"bulb\",\"flashlight\",\"izakaya_lantern\",\"notebook_with_decorative_cover\",\"closed_book\",\"book\",\"green_book\",\"blue_book\",\"orange_book\",\"books\",\"notebook\",\"ledger\",\"page_with_curl\",\"scroll\",\"page_facing_up\",\"newspaper\",\"rolled_up_newspaper\",\"bookmark_tabs\",\"bookmark\",\"label\",\"moneybag\",\"yen\",\"dollar\",\"euro\",\"pound\",\"money_with_wings\",\"credit_card\",\"chart\",\"currency_exchange\",\"heavy_dollar_sign\",\"email\",\"e-mail\",\"incoming_envelope\",\"envelope_with_arrow\",\"outbox_tray\",\"inbox_tray\",\"package\",\"mailbox\",\"mailbox_closed\",\"mailbox_with_mail\",\"mailbox_with_no_mail\",\"postbox\",\"ballot_box_with_ballot\",\"pencil2\",\"black_nib\",\"lower_left_fountain_pen\",\"lower_left_ballpoint_pen\",\"lower_left_paintbrush\",\"lower_left_crayon\",\"memo\",\"briefcase\",\"file_folder\",\"open_file_folder\",\"card_index_dividers\",\"date\",\"calendar\",\"spiral_note_pad\",\"spiral_calendar_pad\",\"card_index\",\"chart_with_upwards_trend\",\"chart_with_downwards_trend\",\"bar_chart\",\"clipboard\",\"pushpin\",\"round_pushpin\",\"paperclip\",\"linked_paperclips\",\"straight_ruler\",\"triangular_ruler\",\"scissors\",\"card_file_box\",\"file_cabinet\",\"wastebasket\",\"lock\",\"unlock\",\"lock_with_ink_pen\",\"closed_lock_with_key\",\"key\",\"old_key\",\"hammer\",\"pick\",\"hammer_and_pick\",\"hammer_and_wrench\",\"dagger_knife\",\"crossed_swords\",\"gun\",\"bow_and_arrow\",\"shield\",\"wrench\",\"nut_and_bolt\",\"gear\",\"compression\",\"alembic\",\"scales\",\"link\",\"chains\",\"syringe\",\"pill\",\"smoking\",\"coffin\",\"funeral_urn\",\"moyai\",\"oil_drum\",\"crystal_ball\",\"shopping_trolley\"]},{\"id\":\"symbols\",\"name\":\"Symbols\",\"emojis\":[\"atm\",\"put_litter_in_its_place\",\"potable_water\",\"wheelchair\",\"mens\",\"womens\",\"restroom\",\"baby_symbol\",\"wc\",\"passport_control\",\"customs\",\"baggage_claim\",\"left_luggage\",\"warning\",\"children_crossing\",\"no_entry\",\"no_entry_sign\",\"no_bicycles\",\"no_smoking\",\"do_not_litter\",\"non-potable_water\",\"no_pedestrians\",\"no_mobile_phones\",\"underage\",\"radioactive_sign\",\"biohazard_sign\",\"arrow_up\",\"arrow_upper_right\",\"arrow_right\",\"arrow_lower_right\",\"arrow_down\",\"arrow_lower_left\",\"arrow_left\",\"arrow_upper_left\",\"arrow_up_down\",\"left_right_arrow\",\"leftwards_arrow_with_hook\",\"arrow_right_hook\",\"arrow_heading_up\",\"arrow_heading_down\",\"arrows_clockwise\",\"arrows_counterclockwise\",\"back\",\"end\",\"on\",\"soon\",\"top\",\"place_of_worship\",\"atom_symbol\",\"om_symbol\",\"star_of_david\",\"wheel_of_dharma\",\"yin_yang\",\"latin_cross\",\"orthodox_cross\",\"star_and_crescent\",\"peace_symbol\",\"menorah_with_nine_branches\",\"six_pointed_star\",\"aries\",\"taurus\",\"gemini\",\"cancer\",\"leo\",\"virgo\",\"libra\",\"scorpius\",\"sagittarius\",\"capricorn\",\"aquarius\",\"pisces\",\"ophiuchus\",\"twisted_rightwards_arrows\",\"repeat\",\"repeat_one\",\"arrow_forward\",\"fast_forward\",\"black_right_pointing_double_triangle_with_vertical_bar\",\"black_right_pointing_triangle_with_double_vertical_bar\",\"arrow_backward\",\"rewind\",\"black_left_pointing_double_triangle_with_vertical_bar\",\"arrow_up_small\",\"arrow_double_up\",\"arrow_down_small\",\"arrow_double_down\",\"double_vertical_bar\",\"black_square_for_stop\",\"black_circle_for_record\",\"eject\",\"cinema\",\"low_brightness\",\"high_brightness\",\"signal_strength\",\"vibration_mode\",\"mobile_phone_off\",\"female_sign\",\"male_sign\",\"medical_symbol\",\"recycle\",\"fleur_de_lis\",\"trident\",\"name_badge\",\"beginner\",\"o\",\"white_check_mark\",\"ballot_box_with_check\",\"heavy_check_mark\",\"heavy_multiplication_x\",\"x\",\"negative_squared_cross_mark\",\"heavy_plus_sign\",\"heavy_minus_sign\",\"heavy_division_sign\",\"curly_loop\",\"loop\",\"part_alternation_mark\",\"eight_spoked_asterisk\",\"eight_pointed_black_star\",\"sparkle\",\"bangbang\",\"interrobang\",\"question\",\"grey_question\",\"grey_exclamation\",\"exclamation\",\"wavy_dash\",\"copyright\",\"registered\",\"tm\",\"hash\",\"keycap_star\",\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"keycap_ten\",\"100\",\"capital_abcd\",\"abcd\",\"1234\",\"symbols\",\"abc\",\"a\",\"ab\",\"b\",\"cl\",\"cool\",\"free\",\"information_source\",\"id\",\"m\",\"new\",\"ng\",\"o2\",\"ok\",\"parking\",\"sos\",\"up\",\"vs\",\"koko\",\"sa\",\"u6708\",\"u6709\",\"u6307\",\"ideograph_advantage\",\"u5272\",\"u7121\",\"u7981\",\"accept\",\"u7533\",\"u5408\",\"u7a7a\",\"congratulations\",\"secret\",\"u55b6\",\"u6e80\",\"black_small_square\",\"white_small_square\",\"white_medium_square\",\"black_medium_square\",\"white_medium_small_square\",\"black_medium_small_square\",\"black_large_square\",\"white_large_square\",\"large_orange_diamond\",\"large_blue_diamond\",\"small_orange_diamond\",\"small_blue_diamond\",\"small_red_triangle\",\"small_red_triangle_down\",\"diamond_shape_with_a_dot_inside\",\"radio_button\",\"black_square_button\",\"white_square_button\",\"white_circle\",\"black_circle\",\"red_circle\",\"large_blue_circle\"]},{\"id\":\"flags\",\"name\":\"Flags\",\"emojis\":[\"checkered_flag\",\"cn\",\"crossed_flags\",\"de\",\"es\",\"flag-ac\",\"flag-ad\",\"flag-ae\",\"flag-af\",\"flag-ag\",\"flag-ai\",\"flag-al\",\"flag-am\",\"flag-ao\",\"flag-aq\",\"flag-ar\",\"flag-as\",\"flag-at\",\"flag-au\",\"flag-aw\",\"flag-ax\",\"flag-az\",\"flag-ba\",\"flag-bb\",\"flag-bd\",\"flag-be\",\"flag-bf\",\"flag-bg\",\"flag-bh\",\"flag-bi\",\"flag-bj\",\"flag-bl\",\"flag-bm\",\"flag-bn\",\"flag-bo\",\"flag-bq\",\"flag-br\",\"flag-bs\",\"flag-bt\",\"flag-bv\",\"flag-bw\",\"flag-by\",\"flag-bz\",\"flag-ca\",\"flag-cc\",\"flag-cd\",\"flag-cf\",\"flag-cg\",\"flag-ch\",\"flag-ci\",\"flag-ck\",\"flag-cl\",\"flag-cm\",\"flag-co\",\"flag-cp\",\"flag-cr\",\"flag-cu\",\"flag-cv\",\"flag-cw\",\"flag-cx\",\"flag-cy\",\"flag-cz\",\"flag-dg\",\"flag-dj\",\"flag-dk\",\"flag-dm\",\"flag-do\",\"flag-dz\",\"flag-ea\",\"flag-ec\",\"flag-ee\",\"flag-eg\",\"flag-eh\",\"flag-england\",\"flag-er\",\"flag-et\",\"flag-eu\",\"flag-fi\",\"flag-fj\",\"flag-fk\",\"flag-fm\",\"flag-fo\",\"flag-ga\",\"flag-gd\",\"flag-ge\",\"flag-gf\",\"flag-gg\",\"flag-gh\",\"flag-gi\",\"flag-gl\",\"flag-gm\",\"flag-gn\",\"flag-gp\",\"flag-gq\",\"flag-gr\",\"flag-gs\",\"flag-gt\",\"flag-gu\",\"flag-gw\",\"flag-gy\",\"flag-hk\",\"flag-hm\",\"flag-hn\",\"flag-hr\",\"flag-ht\",\"flag-hu\",\"flag-ic\",\"flag-id\",\"flag-ie\",\"flag-il\",\"flag-im\",\"flag-in\",\"flag-io\",\"flag-iq\",\"flag-ir\",\"flag-is\",\"flag-je\",\"flag-jm\",\"flag-jo\",\"flag-ke\",\"flag-kg\",\"flag-kh\",\"flag-ki\",\"flag-km\",\"flag-kn\",\"flag-kp\",\"flag-kw\",\"flag-ky\",\"flag-kz\",\"flag-la\",\"flag-lb\",\"flag-lc\",\"flag-li\",\"flag-lk\",\"flag-lr\",\"flag-ls\",\"flag-lt\",\"flag-lu\",\"flag-lv\",\"flag-ly\",\"flag-ma\",\"flag-mc\",\"flag-md\",\"flag-me\",\"flag-mf\",\"flag-mg\",\"flag-mh\",\"flag-mk\",\"flag-ml\",\"flag-mm\",\"flag-mn\",\"flag-mo\",\"flag-mp\",\"flag-mq\",\"flag-mr\",\"flag-ms\",\"flag-mt\",\"flag-mu\",\"flag-mv\",\"flag-mw\",\"flag-mx\",\"flag-my\",\"flag-mz\",\"flag-na\",\"flag-nc\",\"flag-ne\",\"flag-nf\",\"flag-ng\",\"flag-ni\",\"flag-nl\",\"flag-no\",\"flag-np\",\"flag-nr\",\"flag-nu\",\"flag-nz\",\"flag-om\",\"flag-pa\",\"flag-pe\",\"flag-pf\",\"flag-pg\",\"flag-ph\",\"flag-pk\",\"flag-pl\",\"flag-pm\",\"flag-pn\",\"flag-pr\",\"flag-ps\",\"flag-pt\",\"flag-pw\",\"flag-py\",\"flag-qa\",\"flag-re\",\"flag-ro\",\"flag-rs\",\"flag-rw\",\"flag-sa\",\"flag-sb\",\"flag-sc\",\"flag-scotland\",\"flag-sd\",\"flag-se\",\"flag-sg\",\"flag-sh\",\"flag-si\",\"flag-sj\",\"flag-sk\",\"flag-sl\",\"flag-sm\",\"flag-sn\",\"flag-so\",\"flag-sr\",\"flag-ss\",\"flag-st\",\"flag-sv\",\"flag-sx\",\"flag-sy\",\"flag-sz\",\"flag-ta\",\"flag-tc\",\"flag-td\",\"flag-tf\",\"flag-tg\",\"flag-th\",\"flag-tj\",\"flag-tk\",\"flag-tl\",\"flag-tm\",\"flag-tn\",\"flag-to\",\"flag-tr\",\"flag-tt\",\"flag-tv\",\"flag-tw\",\"flag-tz\",\"flag-ua\",\"flag-ug\",\"flag-um\",\"flag-uy\",\"flag-uz\",\"flag-va\",\"flag-vc\",\"flag-ve\",\"flag-vg\",\"flag-vi\",\"flag-vn\",\"flag-vu\",\"flag-wales\",\"flag-wf\",\"flag-ws\",\"flag-xk\",\"flag-ye\",\"flag-yt\",\"flag-za\",\"flag-zm\",\"flag-zw\",\"fr\",\"gb\",\"it\",\"jp\",\"kr\",\"rainbow-flag\",\"ru\",\"triangular_flag_on_post\",\"us\",\"waving_black_flag\",\"waving_white_flag\"]}],\"emojis\":{\"100\":{\"a\":\"Hundred Points Symbol\",\"b\":\"1F4AF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"score\",\"perfect\",\"numbers\",\"century\",\"exam\",\"quiz\",\"test\",\"pass\",\"hundred\"],\"k\":[25,26]},\"1234\":{\"a\":\"Input Symbol for Numbers\",\"b\":\"1F522\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"numbers\",\"blue-square\"],\"k\":[27,36]},\"monkey_face\":{\"a\":\"Monkey Face\",\"b\":\"1F435\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"circus\"],\"k\":[13,31],\"l\":[\":o)\"]},\"grinning\":{\"a\":\"Grinning Face\",\"b\":\"1F600\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"smile\",\"happy\",\"joy\",\":D\",\"grin\"],\"k\":[30,24],\"m\":\":D\"},\"earth_africa\":{\"a\":\"Earth Globe Europe-Africa\",\"b\":\"1F30D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"globe\",\"world\",\"international\"],\"k\":[6,5]},\"checkered_flag\":{\"a\":\"Chequered Flag\",\"b\":\"1F3C1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"contest\",\"finishline\",\"race\",\"gokart\"],\"k\":[9,27]},\"mute\":{\"a\":\"Speaker with Cancellation Stroke\",\"b\":\"1F507\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"volume\",\"silence\",\"quiet\"],\"k\":[27,9]},\"jack_o_lantern\":{\"a\":\"Jack-O-Lantern\",\"b\":\"1F383\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"halloween\",\"light\",\"pumpkin\",\"creepy\",\"fall\"],\"k\":[8,17]},\"atm\":{\"a\":\"Automated Teller Machine\",\"b\":\"1F3E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"cash\",\"blue-square\",\"payment\",\"bank\"],\"k\":[12,4]},\"grapes\":{\"a\":\"Grapes\",\"b\":\"1F347\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"food\",\"wine\"],\"k\":[7,9]},\"earth_americas\":{\"a\":\"Earth Globe Americas\",\"b\":\"1F30E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"globe\",\"world\",\"USA\",\"international\"],\"k\":[6,6]},\"grin\":{\"a\":\"Grinning Face with Smiling Eyes\",\"b\":\"1F601\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"happy\",\"smile\",\"joy\",\"kawaii\"],\"k\":[30,25]},\"melon\":{\"a\":\"Melon\",\"b\":\"1F348\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[7,10]},\"triangular_flag_on_post\":{\"a\":\"Triangular Flag on Post\",\"b\":\"1F6A9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mark\",\"milestone\",\"place\"],\"k\":[35,14]},\"monkey\":{\"a\":\"Monkey\",\"b\":\"1F412\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"banana\",\"circus\"],\"k\":[12,48]},\"christmas_tree\":{\"a\":\"Christmas Tree\",\"b\":\"1F384\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"festival\",\"vacation\",\"december\",\"xmas\",\"celebration\"],\"k\":[8,18]},\"put_litter_in_its_place\":{\"a\":\"Put Litter in Its Place Symbol\",\"b\":\"1F6AE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"sign\",\"human\",\"info\"],\"k\":[35,19]},\"speaker\":{\"a\":\"Speaker\",\"b\":\"1F508\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"volume\",\"silence\",\"broadcast\"],\"k\":[27,10]},\"earth_asia\":{\"a\":\"Earth Globe Asia-Australia\",\"b\":\"1F30F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"globe\",\"world\",\"east\",\"international\"],\"k\":[6,7]},\"crossed_flags\":{\"a\":\"Crossed Flags\",\"b\":\"1F38C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"nation\",\"country\",\"border\"],\"k\":[8,31]},\"joy\":{\"a\":\"Face with Tears of Joy\",\"b\":\"1F602\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"cry\",\"tears\",\"weep\",\"happy\",\"happytears\",\"haha\"],\"k\":[30,26]},\"sound\":{\"a\":\"Speaker with One Sound Wave\",\"b\":\"1F509\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"volume\",\"speaker\",\"broadcast\"],\"k\":[27,11]},\"watermelon\":{\"a\":\"Watermelon\",\"b\":\"1F349\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"food\",\"picnic\",\"summer\"],\"k\":[7,11]},\"gorilla\":{\"a\":\"Gorilla\",\"b\":\"1F98D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"circus\"],\"k\":[42,37],\"o\":9},\"fireworks\":{\"a\":\"Fireworks\",\"b\":\"1F386\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"festival\",\"carnival\",\"congratulations\"],\"k\":[8,25]},\"potable_water\":{\"a\":\"Potable Water Symbol\",\"b\":\"1F6B0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"liquid\",\"restroom\",\"cleaning\",\"faucet\"],\"k\":[35,21]},\"wheelchair\":{\"a\":\"Wheelchair Symbol\",\"b\":\"267F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"disabled\",\"a11y\",\"accessibility\"],\"k\":[48,10],\"o\":4},\"rolling_on_the_floor_laughing\":{\"a\":\"Rolling on the Floor Laughing\",\"b\":\"1F923\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,26],\"o\":9},\"loud_sound\":{\"a\":\"Speaker with Three Sound Waves\",\"b\":\"1F50A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"volume\",\"noise\",\"noisy\",\"speaker\",\"broadcast\"],\"k\":[27,12]},\"waving_black_flag\":{\"a\":\"Waving Black Flag\",\"b\":\"1F3F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,19],\"o\":7},\"tangerine\":{\"a\":\"Tangerine\",\"b\":\"1F34A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"fruit\",\"nature\",\"orange\"],\"k\":[7,12]},\"dog\":{\"a\":\"Dog Face\",\"b\":\"1F436\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"friend\",\"nature\",\"woof\",\"puppy\",\"pet\",\"faithful\"],\"k\":[13,32]},\"sparkler\":{\"a\":\"Firework Sparkler\",\"b\":\"1F387\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stars\",\"night\",\"shine\"],\"k\":[8,26]},\"globe_with_meridians\":{\"a\":\"Globe with Meridians\",\"b\":\"1F310\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"earth\",\"international\",\"world\",\"internet\",\"interweb\",\"i18n\"],\"k\":[6,8]},\"smiley\":{\"a\":\"Smiling Face with Open Mouth\",\"b\":\"1F603\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"happy\",\"joy\",\"haha\",\":D\",\":)\",\"smile\",\"funny\"],\"k\":[30,27],\"l\":[\"=)\",\"=-)\"],\"m\":\":)\"},\"loudspeaker\":{\"a\":\"Public Address Loudspeaker\",\"b\":\"1F4E2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"volume\",\"sound\"],\"k\":[26,25]},\"sparkles\":{\"a\":\"Sparkles\",\"b\":\"2728\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stars\",\"shine\",\"shiny\",\"cool\",\"awesome\",\"good\",\"magic\"],\"k\":[49,48]},\"dog2\":{\"a\":\"Dog\",\"b\":\"1F415\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"friend\",\"doge\",\"pet\",\"faithful\"],\"k\":[12,51]},\"waving_white_flag\":{\"a\":\"Waving White Flag\",\"b\":\"1F3F3-FE0F\",\"c\":\"1F3F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,15],\"o\":7},\"world_map\":{\"a\":\"World Map\",\"b\":\"1F5FA-FE0F\",\"c\":\"1F5FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"location\",\"direction\"],\"k\":[30,18],\"o\":7},\"lemon\":{\"a\":\"Lemon\",\"b\":\"1F34B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\"],\"k\":[7,13]},\"mens\":{\"a\":\"Mens Symbol\",\"b\":\"1F6B9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"toilet\",\"restroom\",\"wc\",\"blue-square\",\"gender\",\"male\"],\"k\":[36,29]},\"womens\":{\"a\":\"Womens Symbol\",\"b\":\"1F6BA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"woman\",\"female\",\"toilet\",\"loo\",\"restroom\",\"gender\"],\"k\":[36,30]},\"rainbow-flag\":{\"a\":\"Rainbow Flag\",\"b\":\"1F3F3-FE0F-200D-1F308\",\"c\":\"1F3F3-200D-1F308\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[12,14],\"o\":7},\"smile\":{\"a\":\"Smiling Face with Open Mouth and Smiling Eyes\",\"b\":\"1F604\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"happy\",\"joy\",\"funny\",\"haha\",\"laugh\",\"like\",\":D\",\":)\"],\"k\":[30,28],\"l\":[\"C:\",\"c:\",\":D\",\":-D\"],\"m\":\":)\"},\"banana\":{\"a\":\"Banana\",\"b\":\"1F34C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"food\",\"monkey\"],\"k\":[7,14]},\"mega\":{\"a\":\"Cheering Megaphone\",\"b\":\"1F4E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"speaker\",\"volume\"],\"k\":[26,26]},\"japan\":{\"a\":\"Silhouette of Japan\",\"b\":\"1F5FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nation\",\"country\",\"japanese\",\"asia\"],\"k\":[30,22]},\"poodle\":{\"a\":\"Poodle\",\"b\":\"1F429\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dog\",\"animal\",\"101\",\"nature\",\"pet\"],\"k\":[13,19]},\"balloon\":{\"a\":\"Balloon\",\"b\":\"1F388\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"party\",\"celebration\",\"birthday\",\"circus\"],\"k\":[8,27]},\"flag-ac\":{\"a\":\"Ascension Island Flag\",\"b\":\"1F1E6-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,31]},\"sweat_smile\":{\"a\":\"Smiling Face with Open Mouth and Cold Sweat\",\"b\":\"1F605\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"hot\",\"happy\",\"laugh\",\"sweat\",\"smile\",\"relief\"],\"k\":[30,29]},\"pineapple\":{\"a\":\"Pineapple\",\"b\":\"1F34D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[7,15]},\"restroom\":{\"a\":\"Restroom\",\"b\":\"1F6BB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"toilet\",\"refresh\",\"wc\",\"gender\"],\"k\":[36,31]},\"postal_horn\":{\"a\":\"Postal Horn\",\"b\":\"1F4EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"instrument\",\"music\"],\"k\":[26,38]},\"wolf\":{\"a\":\"Wolf Face\",\"b\":\"1F43A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"wild\"],\"k\":[13,36]},\"tada\":{\"a\":\"Party Popper\",\"b\":\"1F389\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"party\",\"congratulations\",\"birthday\",\"magic\",\"circus\",\"celebration\"],\"k\":[8,28]},\"snow_capped_mountain\":{\"a\":\"Snow Capped Mountain\",\"b\":\"1F3D4-FE0F\",\"c\":\"1F3D4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,37],\"o\":7},\"laughing\":{\"a\":\"Smiling Face with Open Mouth and Tightly-Closed Eyes\",\"b\":\"1F606\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"happy\",\"joy\",\"lol\",\"satisfied\",\"haha\",\"face\",\"glad\",\"XD\",\"laugh\"],\"k\":[30,30],\"l\":[\":>\",\":->\"],\"n\":[\"satisfied\"]},\"apple\":{\"a\":\"Red Apple\",\"b\":\"1F34E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"mac\",\"school\"],\"k\":[7,16]},\"flag-ad\":{\"a\":\"Andorra Flag\",\"b\":\"1F1E6-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,32]},\"fox_face\":{\"a\":\"Fox Face\",\"b\":\"1F98A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"face\"],\"k\":[42,34],\"o\":9},\"confetti_ball\":{\"a\":\"Confetti Ball\",\"b\":\"1F38A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"festival\",\"party\",\"birthday\",\"circus\"],\"k\":[8,29]},\"bell\":{\"a\":\"Bell\",\"b\":\"1F514\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"notification\",\"christmas\",\"xmas\",\"chime\"],\"k\":[27,22]},\"mountain\":{\"a\":\"Mountain\",\"b\":\"26F0-FE0F\",\"c\":\"26F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"nature\",\"environment\"],\"k\":[48,38],\"o\":5},\"baby_symbol\":{\"a\":\"Baby Symbol\",\"b\":\"1F6BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"orange-square\",\"child\"],\"k\":[36,32]},\"wc\":{\"a\":\"Water Closet\",\"b\":\"1F6BE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"toilet\",\"restroom\",\"blue-square\"],\"k\":[36,34]},\"wink\":{\"a\":\"Winking Face\",\"b\":\"1F609\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"happy\",\"mischievous\",\"secret\",\";)\",\"smile\",\"eye\"],\"k\":[30,33],\"l\":[\";)\",\";-)\"],\"m\":\";)\"},\"no_bell\":{\"a\":\"Bell with Cancellation Stroke\",\"b\":\"1F515\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"volume\",\"mute\",\"quiet\",\"silent\"],\"k\":[27,23]},\"green_apple\":{\"a\":\"Green Apple\",\"b\":\"1F34F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\"],\"k\":[7,17]},\"tanabata_tree\":{\"a\":\"Tanabata Tree\",\"b\":\"1F38B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"nature\",\"branch\",\"summer\"],\"k\":[8,30]},\"flag-ae\":{\"a\":\"United Arab Emirates Flag\",\"b\":\"1F1E6-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,33]},\"volcano\":{\"a\":\"Volcano\",\"b\":\"1F30B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"nature\",\"disaster\"],\"k\":[6,3]},\"cat\":{\"a\":\"Cat Face\",\"b\":\"1F431\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"meow\",\"nature\",\"pet\",\"kitten\"],\"k\":[13,27]},\"flag-af\":{\"a\":\"Afghanistan Flag\",\"b\":\"1F1E6-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,34]},\"musical_score\":{\"a\":\"Musical Score\",\"b\":\"1F3BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"treble\",\"clef\",\"compose\"],\"k\":[9,22]},\"blush\":{\"a\":\"Smiling Face with Smiling Eyes\",\"b\":\"1F60A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"smile\",\"happy\",\"flushed\",\"crush\",\"embarrassed\",\"shy\",\"joy\"],\"k\":[30,34],\"m\":\":)\"},\"pear\":{\"a\":\"Pear\",\"b\":\"1F350\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[7,18]},\"bamboo\":{\"a\":\"Pine Decoration\",\"b\":\"1F38D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"nature\",\"vegetable\",\"panda\",\"pine_decoration\"],\"k\":[8,32]},\"passport_control\":{\"a\":\"Passport Control\",\"b\":\"1F6C2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"custom\",\"blue-square\"],\"k\":[36,43]},\"mount_fuji\":{\"a\":\"Mount Fuji\",\"b\":\"1F5FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"mountain\",\"nature\",\"japanese\"],\"k\":[30,19]},\"cat2\":{\"a\":\"Cat\",\"b\":\"1F408\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"meow\",\"pet\",\"cats\"],\"k\":[12,38]},\"musical_note\":{\"a\":\"Musical Note\",\"b\":\"1F3B5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"score\",\"tone\",\"sound\"],\"k\":[9,15]},\"dolls\":{\"a\":\"Japanese Dolls\",\"b\":\"1F38E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"toy\",\"kimono\"],\"k\":[8,33]},\"lion_face\":{\"a\":\"Lion Face\",\"b\":\"1F981\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,25],\"o\":8},\"camping\":{\"a\":\"Camping\",\"b\":\"1F3D5-FE0F\",\"c\":\"1F3D5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"outdoors\",\"tent\"],\"k\":[11,38],\"o\":7},\"flag-ag\":{\"a\":\"Antigua & Barbuda Flag\",\"b\":\"1F1E6-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,35]},\"customs\":{\"a\":\"Customs\",\"b\":\"1F6C3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"passport\",\"border\",\"blue-square\"],\"k\":[36,44]},\"yum\":{\"a\":\"Face Savouring Delicious Food\",\"b\":\"1F60B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"happy\",\"joy\",\"tongue\",\"smile\",\"face\",\"silly\",\"yummy\",\"nom\",\"delicious\",\"savouring\"],\"k\":[30,35]},\"peach\":{\"a\":\"Peach\",\"b\":\"1F351\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[7,19]},\"tiger\":{\"a\":\"Tiger Face\",\"b\":\"1F42F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cat\",\"danger\",\"wild\",\"nature\",\"roar\"],\"k\":[13,25]},\"notes\":{\"a\":\"Multiple Musical Notes\",\"b\":\"1F3B6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"score\"],\"k\":[9,16]},\"flags\":{\"a\":\"Carp Streamer\",\"b\":\"1F38F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fish\",\"japanese\",\"koinobori\",\"carp\",\"banner\"],\"k\":[8,34]},\"beach_with_umbrella\":{\"a\":\"Beach with Umbrella\",\"b\":\"1F3D6-FE0F\",\"c\":\"1F3D6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,39],\"o\":7},\"cherries\":{\"a\":\"Cherries\",\"b\":\"1F352\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"fruit\"],\"k\":[7,20]},\"flag-ai\":{\"a\":\"Anguilla Flag\",\"b\":\"1F1E6-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,36]},\"baggage_claim\":{\"a\":\"Baggage Claim\",\"b\":\"1F6C4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"airport\",\"transport\"],\"k\":[36,45]},\"sunglasses\":{\"a\":\"Smiling Face with Sunglasses\",\"b\":\"1F60E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"cool\",\"smile\",\"summer\",\"beach\",\"sunglass\"],\"k\":[30,38],\"l\":[\"8)\"]},\"left_luggage\":{\"a\":\"Left Luggage\",\"b\":\"1F6C5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"travel\"],\"k\":[36,46]},\"wind_chime\":{\"a\":\"Wind Chime\",\"b\":\"1F390\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"ding\",\"spring\",\"bell\"],\"k\":[8,35]},\"strawberry\":{\"a\":\"Strawberry\",\"b\":\"1F353\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"food\",\"nature\"],\"k\":[7,21]},\"desert\":{\"a\":\"Desert\",\"b\":\"1F3DC-FE0F\",\"c\":\"1F3DC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"warm\",\"saharah\"],\"k\":[11,45],\"o\":7},\"studio_microphone\":{\"a\":\"Studio Microphone\",\"b\":\"1F399-FE0F\",\"c\":\"1F399\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sing\",\"recording\",\"artist\",\"talkshow\"],\"k\":[8,41],\"o\":7},\"flag-al\":{\"a\":\"Albania Flag\",\"b\":\"1F1E6-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,37]},\"tiger2\":{\"a\":\"Tiger\",\"b\":\"1F405\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"roar\"],\"k\":[12,35]},\"heart_eyes\":{\"a\":\"Smiling Face with Heart-Shaped Eyes\",\"b\":\"1F60D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"crush\",\"heart\"],\"k\":[30,37]},\"desert_island\":{\"a\":\"Desert Island\",\"b\":\"1F3DD-FE0F\",\"c\":\"1F3DD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"tropical\",\"mojito\"],\"k\":[11,46],\"o\":7},\"kiwifruit\":{\"a\":\"Kiwifruit\",\"b\":\"1F95D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,9],\"o\":9},\"rice_scene\":{\"a\":\"Moon Viewing Ceremony\",\"b\":\"1F391\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"japan\",\"asia\",\"tsukimi\"],\"k\":[8,36]},\"kissing_heart\":{\"a\":\"Face Throwing a Kiss\",\"b\":\"1F618\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[30,48],\"l\":[\":*\",\":-*\"]},\"warning\":{\"a\":\"Warning Sign\",\"b\":\"26A0-FE0F\",\"c\":\"26A0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"exclamation\",\"wip\",\"alert\",\"error\",\"problem\",\"issue\"],\"k\":[48,20],\"o\":4},\"flag-am\":{\"a\":\"Armenia Flag\",\"b\":\"1F1E6-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,38]},\"leopard\":{\"a\":\"Leopard\",\"b\":\"1F406\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[12,36]},\"level_slider\":{\"a\":\"Level Slider\",\"b\":\"1F39A-FE0F\",\"c\":\"1F39A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"scale\"],\"k\":[8,42],\"o\":7},\"horse\":{\"a\":\"Horse Face\",\"b\":\"1F434\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"brown\",\"nature\"],\"k\":[13,30]},\"children_crossing\":{\"a\":\"Children Crossing\",\"b\":\"1F6B8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"school\",\"warning\",\"danger\",\"sign\",\"driving\",\"yellow-diamond\"],\"k\":[36,28]},\"ribbon\":{\"a\":\"Ribbon\",\"b\":\"1F380\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"decoration\",\"pink\",\"girl\",\"bowtie\"],\"k\":[8,14]},\"national_park\":{\"a\":\"National Park\",\"b\":\"1F3DE-FE0F\",\"c\":\"1F3DE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"environment\",\"nature\"],\"k\":[11,47],\"o\":7},\"control_knobs\":{\"a\":\"Control Knobs\",\"b\":\"1F39B-FE0F\",\"c\":\"1F39B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"dial\"],\"k\":[8,43],\"o\":7},\"kissing\":{\"a\":\"Kissing Face\",\"b\":\"1F617\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"face\",\"3\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[30,47]},\"tomato\":{\"a\":\"Tomato\",\"b\":\"1F345\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fruit\",\"vegetable\",\"nature\",\"food\"],\"k\":[7,7]},\"flag-ao\":{\"a\":\"Angola Flag\",\"b\":\"1F1E6-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,39]},\"stadium\":{\"a\":\"Stadium\",\"b\":\"1F3DF-FE0F\",\"c\":\"1F3DF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"place\",\"sports\",\"concert\",\"venue\"],\"k\":[11,48],\"o\":7},\"flag-aq\":{\"a\":\"Antarctica Flag\",\"b\":\"1F1E6-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,40]},\"gift\":{\"a\":\"Wrapped Present\",\"b\":\"1F381\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"present\",\"birthday\",\"christmas\",\"xmas\"],\"k\":[8,15]},\"no_entry\":{\"a\":\"No Entry\",\"b\":\"26D4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"limit\",\"security\",\"privacy\",\"bad\",\"denied\",\"stop\",\"circle\"],\"k\":[48,35],\"o\":5},\"kissing_smiling_eyes\":{\"a\":\"Kissing Face with Smiling Eyes\",\"b\":\"1F619\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[30,49]},\"coconut\":{\"a\":\"Coconut\",\"b\":\"1F965\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,17],\"o\":10},\"racehorse\":{\"a\":\"Horse\",\"b\":\"1F40E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"gamble\",\"luck\"],\"k\":[12,44]},\"microphone\":{\"a\":\"Microphone\",\"b\":\"1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sound\",\"music\",\"PA\",\"sing\",\"talkshow\"],\"k\":[8,50]},\"classical_building\":{\"a\":\"Classical Building\",\"b\":\"1F3DB-FE0F\",\"c\":\"1F3DB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"art\",\"culture\",\"history\"],\"k\":[11,44],\"o\":7},\"no_entry_sign\":{\"a\":\"No Entry Sign\",\"b\":\"1F6AB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"forbid\",\"stop\",\"limit\",\"denied\",\"disallow\",\"circle\"],\"k\":[35,16]},\"reminder_ribbon\":{\"a\":\"Reminder Ribbon\",\"b\":\"1F397-FE0F\",\"c\":\"1F397\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\",\"cause\",\"support\",\"awareness\"],\"k\":[8,40],\"o\":7},\"kissing_closed_eyes\":{\"a\":\"Kissing Face with Closed Eyes\",\"b\":\"1F61A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[30,50]},\"unicorn_face\":{\"a\":\"Unicorn Face\",\"b\":\"1F984\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,28],\"o\":8},\"flag-ar\":{\"a\":\"Argentina Flag\",\"b\":\"1F1E6-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,41]},\"headphones\":{\"a\":\"Headphone\",\"b\":\"1F3A7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"score\",\"gadgets\"],\"k\":[9,1]},\"avocado\":{\"a\":\"Avocado\",\"b\":\"1F951\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"fruit\",\"food\"],\"k\":[41,49],\"o\":9},\"relaxed\":{\"a\":\"White Smiling Face\",\"b\":\"263A-FE0F\",\"c\":\"263A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"blush\",\"massage\",\"happiness\"],\"k\":[47,41],\"o\":1},\"zebra_face\":{\"a\":\"Zebra Face\",\"b\":\"1F993\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,43],\"o\":10},\"eggplant\":{\"a\":\"Aubergine\",\"b\":\"1F346\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vegetable\",\"nature\",\"food\",\"aubergine\"],\"k\":[7,8]},\"radio\":{\"a\":\"Radio\",\"b\":\"1F4FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"communication\",\"music\",\"podcast\",\"program\"],\"k\":[26,50]},\"building_construction\":{\"a\":\"Building Construction\",\"b\":\"1F3D7-FE0F\",\"c\":\"1F3D7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"wip\",\"working\",\"progress\"],\"k\":[11,40],\"o\":7},\"flag-as\":{\"a\":\"American Samoa Flag\",\"b\":\"1F1E6-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,42]},\"admission_tickets\":{\"a\":\"Admission Tickets\",\"b\":\"1F39F-FE0F\",\"c\":\"1F39F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[8,45],\"o\":7},\"no_bicycles\":{\"a\":\"No Bicycles\",\"b\":\"1F6B3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cyclist\",\"prohibited\",\"circle\"],\"k\":[35,24]},\"no_smoking\":{\"a\":\"No Smoking Symbol\",\"b\":\"1F6AD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cigarette\",\"blue-square\",\"smell\",\"smoke\"],\"k\":[35,18]},\"slightly_smiling_face\":{\"a\":\"Slightly Smiling Face\",\"b\":\"1F642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"smile\"],\"k\":[31,38],\"l\":[\":)\",\"(:\",\":-)\"],\"o\":7},\"flag-at\":{\"a\":\"Austria Flag\",\"b\":\"1F1E6-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,43]},\"ticket\":{\"a\":\"Ticket\",\"b\":\"1F3AB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"event\",\"concert\",\"pass\"],\"k\":[9,5]},\"saxophone\":{\"a\":\"Saxophone\",\"b\":\"1F3B7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"instrument\",\"jazz\",\"blues\"],\"k\":[9,17]},\"deer\":{\"a\":\"Deer\",\"b\":\"1F98C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"horns\",\"venison\"],\"k\":[42,36],\"o\":9},\"house_buildings\":{\"a\":\"House Buildings\",\"b\":\"1F3D8-FE0F\",\"c\":\"1F3D8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,41],\"o\":7},\"potato\":{\"a\":\"Potato\",\"b\":\"1F954\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"tuber\",\"vegatable\",\"starch\"],\"k\":[42,0],\"o\":9},\"guitar\":{\"a\":\"Guitar\",\"b\":\"1F3B8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"instrument\"],\"k\":[9,18]},\"carrot\":{\"a\":\"Carrot\",\"b\":\"1F955\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"vegetable\",\"food\",\"orange\"],\"k\":[42,1],\"o\":9},\"cityscape\":{\"a\":\"Cityscape\",\"b\":\"1F3D9-FE0F\",\"c\":\"1F3D9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"photo\",\"night life\",\"urban\"],\"k\":[11,42],\"o\":7},\"flag-au\":{\"a\":\"Australia Flag\",\"b\":\"1F1E6-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,44]},\"do_not_litter\":{\"a\":\"Do Not Litter Symbol\",\"b\":\"1F6AF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"trash\",\"bin\",\"garbage\",\"circle\"],\"k\":[35,20]},\"hugging_face\":{\"a\":\"Hugging Face\",\"b\":\"1F917\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,31],\"o\":8},\"cow\":{\"a\":\"Cow Face\",\"b\":\"1F42E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"k\":[13,24]},\"medal\":{\"a\":\"Medal\",\"b\":\"1F396-FE0F\",\"c\":\"1F396\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[8,39],\"o\":7},\"musical_keyboard\":{\"a\":\"Musical Keyboard\",\"b\":\"1F3B9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"piano\",\"instrument\",\"compose\"],\"k\":[9,19]},\"corn\":{\"a\":\"Ear of Maize\",\"b\":\"1F33D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"vegetable\",\"plant\"],\"k\":[6,51]},\"derelict_house_building\":{\"a\":\"Derelict House Building\",\"b\":\"1F3DA-FE0F\",\"c\":\"1F3DA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,43],\"o\":7},\"non-potable_water\":{\"a\":\"Non-Potable Water Symbol\",\"b\":\"1F6B1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"drink\",\"faucet\",\"tap\",\"circle\"],\"k\":[35,22]},\"trophy\":{\"a\":\"Trophy\",\"b\":\"1F3C6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"win\",\"award\",\"contest\",\"place\",\"ftw\",\"ceremony\"],\"k\":[10,19]},\"flag-aw\":{\"a\":\"Aruba Flag\",\"b\":\"1F1E6-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,45]},\"star-struck\":{\"a\":\"Grinning Face with Star Eyes\",\"b\":\"1F929\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,49],\"n\":[\"grinning_face_with_star_eyes\"],\"o\":10},\"ox\":{\"a\":\"Ox\",\"b\":\"1F402\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cow\",\"beef\"],\"k\":[12,32]},\"trumpet\":{\"a\":\"Trumpet\",\"b\":\"1F3BA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"brass\"],\"k\":[9,20]},\"hot_pepper\":{\"a\":\"Hot Pepper\",\"b\":\"1F336-FE0F\",\"c\":\"1F336\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"spicy\",\"chilli\",\"chili\"],\"k\":[6,44],\"o\":7},\"sports_medal\":{\"a\":\"Sports Medal\",\"b\":\"1F3C5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[10,18],\"o\":7},\"flag-ax\":{\"a\":\"Åland Islands Flag\",\"b\":\"1F1E6-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,46]},\"water_buffalo\":{\"a\":\"Water Buffalo\",\"b\":\"1F403\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"ox\",\"cow\"],\"k\":[12,33]},\"no_pedestrians\":{\"a\":\"No Pedestrians\",\"b\":\"1F6B7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"rules\",\"crossing\",\"walking\",\"circle\"],\"k\":[36,27]},\"thinking_face\":{\"a\":\"Thinking Face\",\"b\":\"1F914\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,28],\"o\":8},\"house\":{\"a\":\"House Building\",\"b\":\"1F3E0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"home\"],\"k\":[11,49]},\"no_mobile_phones\":{\"a\":\"No Mobile Phones\",\"b\":\"1F4F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"iphone\",\"mute\",\"circle\"],\"k\":[26,44]},\"flag-az\":{\"a\":\"Azerbaijan Flag\",\"b\":\"1F1E6-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,47]},\"first_place_medal\":{\"a\":\"First Place Medal\",\"b\":\"1F947\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,42],\"o\":9},\"house_with_garden\":{\"a\":\"House with Garden\",\"b\":\"1F3E1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"home\",\"plant\",\"nature\"],\"k\":[11,50]},\"violin\":{\"a\":\"Violin\",\"b\":\"1F3BB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"music\",\"instrument\",\"orchestra\",\"symphony\"],\"k\":[9,21]},\"face_with_raised_eyebrow\":{\"a\":\"Face with One Eyebrow Raised\",\"b\":\"1F928\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,48],\"n\":[\"face_with_one_eyebrow_raised\"],\"o\":10},\"cucumber\":{\"a\":\"Cucumber\",\"b\":\"1F952\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"fruit\",\"food\",\"pickle\"],\"k\":[41,50],\"o\":9},\"cow2\":{\"a\":\"Cow\",\"b\":\"1F404\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"k\":[12,34]},\"flag-ba\":{\"a\":\"Bosnia & Herzegovina Flag\",\"b\":\"1F1E7-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[0,48]},\"pig\":{\"a\":\"Pig Face\",\"b\":\"1F437\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"oink\",\"nature\"],\"k\":[13,33]},\"drum_with_drumsticks\":{\"a\":\"Drum with Drumsticks\",\"b\":\"1F941\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,37],\"o\":9},\"underage\":{\"a\":\"No One Under Eighteen Symbol\",\"b\":\"1F51E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"18\",\"drink\",\"pub\",\"night\",\"minor\",\"circle\"],\"k\":[27,32]},\"broccoli\":{\"a\":\"Broccoli\",\"b\":\"1F966\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,18],\"o\":10},\"office\":{\"a\":\"Office Building\",\"b\":\"1F3E2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"bureau\",\"work\"],\"k\":[11,51]},\"second_place_medal\":{\"a\":\"Second Place Medal\",\"b\":\"1F948\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,43],\"o\":9},\"neutral_face\":{\"a\":\"Neutral Face\",\"b\":\"1F610\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"indifference\",\"meh\",\":|\",\"neutral\"],\"k\":[30,40],\"l\":[\":|\",\":-|\"]},\"third_place_medal\":{\"a\":\"Third Place Medal\",\"b\":\"1F949\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,44],\"o\":9},\"mushroom\":{\"a\":\"Mushroom\",\"b\":\"1F344\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"vegetable\"],\"k\":[7,6]},\"flag-bb\":{\"a\":\"Barbados Flag\",\"b\":\"1F1E7-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,49]},\"radioactive_sign\":{\"a\":\"Radioactive Sign\",\"b\":\"2622-FE0F\",\"c\":\"2622\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,33],\"o\":1},\"pig2\":{\"a\":\"Pig\",\"b\":\"1F416\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[13,0]},\"expressionless\":{\"a\":\"Expressionless Face\",\"b\":\"1F611\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"indifferent\",\"-_-\",\"meh\",\"deadpan\"],\"k\":[30,41]},\"iphone\":{\"a\":\"Mobile Phone\",\"b\":\"1F4F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"apple\",\"gadgets\",\"dial\"],\"k\":[26,40]},\"post_office\":{\"a\":\"Japanese Post Office\",\"b\":\"1F3E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"envelope\",\"communication\"],\"k\":[12,0]},\"european_post_office\":{\"a\":\"European Post Office\",\"b\":\"1F3E4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"email\"],\"k\":[12,1]},\"soccer\":{\"a\":\"Soccer Ball\",\"b\":\"26BD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"football\"],\"k\":[48,26],\"o\":5},\"boar\":{\"a\":\"Boar\",\"b\":\"1F417\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[13,1]},\"peanuts\":{\"a\":\"Peanuts\",\"b\":\"1F95C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"nut\"],\"k\":[42,8],\"o\":9},\"calling\":{\"a\":\"Mobile Phone with Rightwards Arrow at Left\",\"b\":\"1F4F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"iphone\",\"incoming\"],\"k\":[26,41]},\"biohazard_sign\":{\"a\":\"Biohazard Sign\",\"b\":\"2623-FE0F\",\"c\":\"2623\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,34],\"o\":1},\"flag-bd\":{\"a\":\"Bangladesh Flag\",\"b\":\"1F1E7-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,50]},\"no_mouth\":{\"a\":\"Face Without Mouth\",\"b\":\"1F636\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"hellokitty\"],\"k\":[31,26]},\"face_with_rolling_eyes\":{\"a\":\"Face with Rolling Eyes\",\"b\":\"1F644\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[31,40],\"o\":8},\"phone\":{\"a\":\"Black Telephone\",\"b\":\"260E-FE0F\",\"c\":\"260E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"communication\",\"dial\",\"telephone\"],\"k\":[47,21],\"n\":[\"telephone\"],\"o\":1},\"pig_nose\":{\"a\":\"Pig Nose\",\"b\":\"1F43D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"oink\"],\"k\":[13,39]},\"chestnut\":{\"a\":\"Chestnut\",\"b\":\"1F330\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"squirrel\"],\"k\":[6,38]},\"arrow_up\":{\"a\":\"Upwards Black Arrow\",\"b\":\"2B06-FE0F\",\"c\":\"2B06\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"continue\",\"top\",\"direction\"],\"k\":[50,18],\"o\":4},\"hospital\":{\"a\":\"Hospital\",\"b\":\"1F3E5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"health\",\"surgery\",\"doctor\"],\"k\":[12,2]},\"flag-be\":{\"a\":\"Belgium Flag\",\"b\":\"1F1E7-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[0,51]},\"baseball\":{\"a\":\"Baseball\",\"b\":\"26BE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"balls\"],\"k\":[48,27],\"o\":5},\"smirk\":{\"a\":\"Smirking Face\",\"b\":\"1F60F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"smile\",\"mean\",\"prank\",\"smug\",\"sarcasm\"],\"k\":[30,39]},\"arrow_upper_right\":{\"a\":\"North East Arrow\",\"b\":\"2197-FE0F\",\"c\":\"2197\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northeast\"],\"k\":[46,36],\"o\":1},\"flag-bf\":{\"a\":\"Burkina Faso Flag\",\"b\":\"1F1E7-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,0]},\"basketball\":{\"a\":\"Basketball and Hoop\",\"b\":\"1F3C0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"balls\",\"NBA\"],\"k\":[9,26]},\"ram\":{\"a\":\"Ram\",\"b\":\"1F40F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"sheep\",\"nature\"],\"k\":[12,45]},\"bank\":{\"a\":\"Bank\",\"b\":\"1F3E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"money\",\"sales\",\"cash\",\"business\",\"enterprise\"],\"k\":[12,3]},\"bread\":{\"a\":\"Bread\",\"b\":\"1F35E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"wheat\",\"breakfast\",\"toast\"],\"k\":[7,32]},\"telephone_receiver\":{\"a\":\"Telephone Receiver\",\"b\":\"1F4DE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"communication\",\"dial\"],\"k\":[26,21]},\"croissant\":{\"a\":\"Croissant\",\"b\":\"1F950\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"bread\",\"french\"],\"k\":[41,48],\"o\":9},\"pager\":{\"a\":\"Pager\",\"b\":\"1F4DF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bbcall\",\"oldschool\",\"90s\"],\"k\":[26,22]},\"sheep\":{\"a\":\"Sheep\",\"b\":\"1F411\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"wool\",\"shipit\"],\"k\":[12,47]},\"arrow_right\":{\"a\":\"Black Rightwards Arrow\",\"b\":\"27A1-FE0F\",\"c\":\"27A1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"next\"],\"k\":[50,12],\"o\":1},\"persevere\":{\"a\":\"Persevering Face\",\"b\":\"1F623\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"sick\",\"no\",\"upset\",\"oops\"],\"k\":[31,7]},\"flag-bg\":{\"a\":\"Bulgaria Flag\",\"b\":\"1F1E7-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,1]},\"volleyball\":{\"a\":\"Volleyball\",\"b\":\"1F3D0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\",\"balls\"],\"k\":[11,33],\"o\":8},\"hotel\":{\"a\":\"Hotel\",\"b\":\"1F3E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"accomodation\",\"checkin\"],\"k\":[12,5]},\"arrow_lower_right\":{\"a\":\"South East Arrow\",\"b\":\"2198-FE0F\",\"c\":\"2198\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"diagonal\",\"southeast\"],\"k\":[46,37],\"o\":1},\"goat\":{\"a\":\"Goat\",\"b\":\"1F410\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[12,46]},\"flag-bh\":{\"a\":\"Bahrain Flag\",\"b\":\"1F1E7-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,2]},\"love_hotel\":{\"a\":\"Love Hotel\",\"b\":\"1F3E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"like\",\"affection\",\"dating\"],\"k\":[12,6]},\"disappointed_relieved\":{\"a\":\"Disappointed but Relieved Face\",\"b\":\"1F625\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"phew\",\"sweat\",\"nervous\"],\"k\":[31,9]},\"baguette_bread\":{\"a\":\"Baguette Bread\",\"b\":\"1F956\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"bread\",\"french\"],\"k\":[42,2],\"o\":9},\"football\":{\"a\":\"American Football\",\"b\":\"1F3C8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"balls\",\"NFL\"],\"k\":[10,26]},\"fax\":{\"a\":\"Fax Machine\",\"b\":\"1F4E0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"communication\",\"technology\"],\"k\":[26,23]},\"convenience_store\":{\"a\":\"Convenience Store\",\"b\":\"1F3EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"shopping\",\"groceries\"],\"k\":[12,7]},\"dromedary_camel\":{\"a\":\"Dromedary Camel\",\"b\":\"1F42A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"hot\",\"desert\",\"hump\"],\"k\":[13,20]},\"arrow_down\":{\"a\":\"Downwards Black Arrow\",\"b\":\"2B07-FE0F\",\"c\":\"2B07\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[50,19],\"o\":4},\"battery\":{\"a\":\"Battery\",\"b\":\"1F50B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"power\",\"energy\",\"sustain\"],\"k\":[27,13]},\"rugby_football\":{\"a\":\"Rugby Football\",\"b\":\"1F3C9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"team\"],\"k\":[10,27]},\"pretzel\":{\"a\":\"Pretzel\",\"b\":\"1F968\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,20],\"o\":10},\"open_mouth\":{\"a\":\"Face with Open Mouth\",\"b\":\"1F62E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"surprise\",\"impressed\",\"wow\",\"whoa\",\":O\"],\"k\":[31,18],\"l\":[\":o\",\":-o\",\":O\",\":-O\"]},\"flag-bi\":{\"a\":\"Burundi Flag\",\"b\":\"1F1E7-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,3]},\"flag-bj\":{\"a\":\"Benin Flag\",\"b\":\"1F1E7-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,4]},\"pancakes\":{\"a\":\"Pancakes\",\"b\":\"1F95E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"breakfast\",\"flapjacks\",\"hotcakes\"],\"k\":[42,10],\"o\":9},\"school\":{\"a\":\"School\",\"b\":\"1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"student\",\"education\",\"learn\",\"teach\"],\"k\":[12,8]},\"tennis\":{\"a\":\"Tennis Racquet and Ball\",\"b\":\"1F3BE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"balls\",\"green\"],\"k\":[9,24]},\"zipper_mouth_face\":{\"a\":\"Zipper-Mouth Face\",\"b\":\"1F910\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"sealed\",\"zipper\",\"secret\"],\"k\":[37,24],\"o\":8},\"camel\":{\"a\":\"Bactrian Camel\",\"b\":\"1F42B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"hot\",\"desert\",\"hump\"],\"k\":[13,21]},\"arrow_lower_left\":{\"a\":\"South West Arrow\",\"b\":\"2199-FE0F\",\"c\":\"2199\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"diagonal\",\"southwest\"],\"k\":[46,38],\"o\":1},\"electric_plug\":{\"a\":\"Electric Plug\",\"b\":\"1F50C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"charger\",\"power\"],\"k\":[27,14]},\"cheese_wedge\":{\"a\":\"Cheese Wedge\",\"b\":\"1F9C0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,48],\"o\":8},\"hushed\":{\"a\":\"Hushed Face\",\"b\":\"1F62F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"woo\",\"shh\"],\"k\":[31,19]},\"computer\":{\"a\":\"Personal Computer\",\"b\":\"1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"laptop\",\"screen\",\"display\",\"monitor\"],\"k\":[25,38]},\"giraffe_face\":{\"a\":\"Giraffe Face\",\"b\":\"1F992\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,42],\"o\":10},\"8ball\":{\"a\":\"Billiards\",\"b\":\"1F3B1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"pool\",\"hobby\",\"game\",\"luck\",\"magic\"],\"k\":[9,11]},\"flag-bl\":{\"a\":\"St. Barthélemy Flag\",\"b\":\"1F1E7-1F1F1\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,5]},\"arrow_left\":{\"a\":\"Leftwards Black Arrow\",\"b\":\"2B05-FE0F\",\"c\":\"2B05\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"previous\",\"back\"],\"k\":[50,17],\"o\":4},\"department_store\":{\"a\":\"Department Store\",\"b\":\"1F3EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"shopping\",\"mall\"],\"k\":[12,9]},\"meat_on_bone\":{\"a\":\"Meat on Bone\",\"b\":\"1F356\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"good\",\"food\",\"drumstick\"],\"k\":[7,24]},\"arrow_upper_left\":{\"a\":\"North West Arrow\",\"b\":\"2196-FE0F\",\"c\":\"2196\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northwest\"],\"k\":[46,35],\"o\":1},\"flag-bm\":{\"a\":\"Bermuda Flag\",\"b\":\"1F1E7-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,6]},\"sleepy\":{\"a\":\"Sleepy Face\",\"b\":\"1F62A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"tired\",\"rest\",\"nap\"],\"k\":[31,14]},\"bowling\":{\"a\":\"Bowling\",\"b\":\"1F3B3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"fun\",\"play\"],\"k\":[9,13]},\"factory\":{\"a\":\"Factory\",\"b\":\"1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"industry\",\"pollution\",\"smoke\"],\"k\":[12,10]},\"desktop_computer\":{\"a\":\"Desktop Computer\",\"b\":\"1F5A5-FE0F\",\"c\":\"1F5A5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"technology\",\"computing\",\"screen\"],\"k\":[29,51],\"o\":7},\"elephant\":{\"a\":\"Elephant\",\"b\":\"1F418\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"nose\",\"th\",\"circus\"],\"k\":[13,2]},\"rhinoceros\":{\"a\":\"Rhinoceros\",\"b\":\"1F98F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"horn\"],\"k\":[42,39],\"o\":9},\"arrow_up_down\":{\"a\":\"Up Down Arrow\",\"b\":\"2195-FE0F\",\"c\":\"2195\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"way\",\"vertical\"],\"k\":[46,34],\"o\":1},\"cricket_bat_and_ball\":{\"a\":\"Cricket Bat and Ball\",\"b\":\"1F3CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,32],\"o\":8},\"printer\":{\"a\":\"Printer\",\"b\":\"1F5A8-FE0F\",\"c\":\"1F5A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"paper\",\"ink\"],\"k\":[30,0],\"o\":7},\"poultry_leg\":{\"a\":\"Poultry Leg\",\"b\":\"1F357\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"meat\",\"drumstick\",\"bird\",\"chicken\",\"turkey\"],\"k\":[7,25]},\"tired_face\":{\"a\":\"Tired Face\",\"b\":\"1F62B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sick\",\"whine\",\"upset\",\"frustrated\"],\"k\":[31,15]},\"japanese_castle\":{\"a\":\"Japanese Castle\",\"b\":\"1F3EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"building\"],\"k\":[12,12]},\"flag-bn\":{\"a\":\"Brunei Flag\",\"b\":\"1F1E7-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[1,7]},\"field_hockey_stick_and_ball\":{\"a\":\"Field Hockey Stick and Ball\",\"b\":\"1F3D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,34],\"o\":8},\"sleeping\":{\"a\":\"Sleeping Face\",\"b\":\"1F634\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"tired\",\"sleepy\",\"night\",\"zzz\"],\"k\":[31,24]},\"left_right_arrow\":{\"a\":\"Left Right Arrow\",\"b\":\"2194-FE0F\",\"c\":\"2194\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"direction\",\"horizontal\",\"sideways\"],\"k\":[46,33],\"o\":1},\"keyboard\":{\"a\":\"Keyboard\",\"b\":\"2328-FE0F\",\"c\":\"2328\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"technology\",\"computer\",\"type\",\"input\",\"text\"],\"k\":[46,43],\"o\":1},\"european_castle\":{\"a\":\"European Castle\",\"b\":\"1F3F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"royalty\",\"history\"],\"k\":[12,13]},\"mouse\":{\"a\":\"Mouse Face\",\"b\":\"1F42D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"cheese_wedge\",\"rodent\"],\"k\":[13,23]},\"flag-bo\":{\"a\":\"Bolivia Flag\",\"b\":\"1F1E7-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,8]},\"cut_of_meat\":{\"a\":\"Cut of Meat\",\"b\":\"1F969\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,21],\"o\":10},\"ice_hockey_stick_and_puck\":{\"a\":\"Ice Hockey Stick and Puck\",\"b\":\"1F3D2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,35],\"o\":8},\"mouse2\":{\"a\":\"Mouse\",\"b\":\"1F401\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"rodent\"],\"k\":[12,31]},\"three_button_mouse\":{\"a\":\"Three Button Mouse\",\"b\":\"1F5B1-FE0F\",\"c\":\"1F5B1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,1],\"o\":7},\"leftwards_arrow_with_hook\":{\"a\":\"Leftwards Arrow with Hook\",\"b\":\"21A9-FE0F\",\"c\":\"21A9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"back\",\"return\",\"blue-square\",\"undo\",\"enter\"],\"k\":[46,39],\"o\":1},\"bacon\":{\"a\":\"Bacon\",\"b\":\"1F953\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"breakfast\",\"pork\",\"pig\",\"meat\"],\"k\":[41,51],\"o\":9},\"relieved\":{\"a\":\"Relieved Face\",\"b\":\"1F60C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"relaxed\",\"phew\",\"massage\",\"happiness\"],\"k\":[30,36]},\"flag-bq\":{\"a\":\"Caribbean Netherlands Flag\",\"b\":\"1F1E7-1F1F6\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,9]},\"wedding\":{\"a\":\"Wedding\",\"b\":\"1F492\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"couple\",\"marriage\",\"bride\",\"groom\"],\"k\":[24,44]},\"tokyo_tower\":{\"a\":\"Tokyo Tower\",\"b\":\"1F5FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"japanese\"],\"k\":[30,20]},\"arrow_right_hook\":{\"a\":\"Rightwards Arrow with Hook\",\"b\":\"21AA-FE0F\",\"c\":\"21AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"return\",\"rotate\",\"direction\"],\"k\":[46,40],\"o\":1},\"hamburger\":{\"a\":\"Hamburger\",\"b\":\"1F354\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"meat\",\"fast food\",\"beef\",\"cheeseburger\",\"mcdonalds\",\"burger king\"],\"k\":[7,22]},\"stuck_out_tongue\":{\"a\":\"Face with Stuck-out Tongue\",\"b\":\"1F61B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"k\":[30,51],\"l\":[\":p\",\":-p\",\":P\",\":-P\",\":b\",\":-b\"],\"m\":\":p\"},\"trackball\":{\"a\":\"Trackball\",\"b\":\"1F5B2-FE0F\",\"c\":\"1F5B2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"technology\",\"trackpad\"],\"k\":[30,2],\"o\":7},\"flag-br\":{\"a\":\"Brazil Flag\",\"b\":\"1F1E7-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,10]},\"rat\":{\"a\":\"Rat\",\"b\":\"1F400\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"mouse\",\"rodent\"],\"k\":[12,30]},\"table_tennis_paddle_and_ball\":{\"a\":\"Table Tennis Paddle and Ball\",\"b\":\"1F3D3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,36],\"o\":8},\"minidisc\":{\"a\":\"Minidisc\",\"b\":\"1F4BD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"record\",\"data\",\"disk\",\"90s\"],\"k\":[25,40]},\"stuck_out_tongue_winking_eye\":{\"a\":\"Face with Stuck-out Tongue and Winking Eye\",\"b\":\"1F61C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"wink\",\"tongue\"],\"k\":[31,0],\"l\":[\";p\",\";-p\",\";b\",\";-b\",\";P\",\";-P\"],\"m\":\";p\"},\"fries\":{\"a\":\"French Fries\",\"b\":\"1F35F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chips\",\"snack\",\"fast food\"],\"k\":[7,33]},\"badminton_racquet_and_shuttlecock\":{\"a\":\"Badminton Racquet and Shuttlecock\",\"b\":\"1F3F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,22],\"o\":8},\"statue_of_liberty\":{\"a\":\"Statue of Liberty\",\"b\":\"1F5FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"american\",\"newyork\"],\"k\":[30,21]},\"flag-bs\":{\"a\":\"Bahamas Flag\",\"b\":\"1F1E7-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,11]},\"arrow_heading_up\":{\"a\":\"Arrow Pointing Rightwards Then Curving Upwards\",\"b\":\"2934-FE0F\",\"c\":\"2934\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"top\"],\"k\":[50,15],\"o\":3},\"hamster\":{\"a\":\"Hamster Face\",\"b\":\"1F439\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[13,35]},\"stuck_out_tongue_closed_eyes\":{\"a\":\"Face with Stuck-out Tongue and Tightly-Closed Eyes\",\"b\":\"1F61D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"prank\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"k\":[31,1]},\"pizza\":{\"a\":\"Slice of Pizza\",\"b\":\"1F355\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"party\"],\"k\":[7,23]},\"boxing_glove\":{\"a\":\"Boxing Glove\",\"b\":\"1F94A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\",\"fighting\"],\"k\":[41,45],\"o\":9},\"floppy_disk\":{\"a\":\"Floppy Disk\",\"b\":\"1F4BE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"oldschool\",\"technology\",\"save\",\"90s\",\"80s\"],\"k\":[25,41]},\"arrow_heading_down\":{\"a\":\"Arrow Pointing Rightwards Then Curving Downwards\",\"b\":\"2935-FE0F\",\"c\":\"2935\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[50,16],\"o\":3},\"flag-bt\":{\"a\":\"Bhutan Flag\",\"b\":\"1F1E7-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,12]},\"rabbit\":{\"a\":\"Rabbit Face\",\"b\":\"1F430\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"pet\",\"spring\",\"magic\",\"bunny\"],\"k\":[13,26]},\"church\":{\"a\":\"Church\",\"b\":\"26EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"building\",\"religion\",\"christ\"],\"k\":[48,37],\"o\":5},\"drooling_face\":{\"a\":\"Drooling Face\",\"b\":\"1F924\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\"],\"k\":[38,27],\"o\":9},\"flag-bv\":{\"a\":\"Bouvet Island Flag\",\"b\":\"1F1E7-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,13]},\"mosque\":{\"a\":\"Mosque\",\"b\":\"1F54C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"islam\",\"worship\",\"minaret\"],\"k\":[28,15],\"o\":8},\"rabbit2\":{\"a\":\"Rabbit\",\"b\":\"1F407\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"pet\",\"magic\",\"spring\"],\"k\":[12,37]},\"hotdog\":{\"a\":\"Hot Dog\",\"b\":\"1F32D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"frankfurter\"],\"k\":[6,35],\"o\":8},\"martial_arts_uniform\":{\"a\":\"Martial Arts Uniform\",\"b\":\"1F94B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"judo\",\"karate\",\"taekwondo\"],\"k\":[41,46],\"o\":9},\"arrows_clockwise\":{\"a\":\"Clockwise Downwards and Upwards Open Circle Arrows\",\"b\":\"1F503\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sync\",\"cycle\",\"round\",\"repeat\"],\"k\":[27,5]},\"cd\":{\"a\":\"Optical Disc\",\"b\":\"1F4BF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"dvd\",\"disk\",\"disc\",\"90s\"],\"k\":[25,42]},\"arrows_counterclockwise\":{\"a\":\"Anticlockwise Downwards and Upwards Open Circle Arrows\",\"b\":\"1F504\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"sync\",\"cycle\"],\"k\":[27,6]},\"sandwich\":{\"a\":\"Sandwich\",\"b\":\"1F96A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,22],\"o\":10},\"chipmunk\":{\"a\":\"Chipmunk\",\"b\":\"1F43F-FE0F\",\"c\":\"1F43F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"rodent\",\"squirrel\"],\"k\":[13,41],\"o\":7},\"synagogue\":{\"a\":\"Synagogue\",\"b\":\"1F54D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"judaism\",\"worship\",\"temple\",\"jewish\"],\"k\":[28,16],\"o\":8},\"unamused\":{\"a\":\"Unamused Face\",\"b\":\"1F612\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"indifference\",\"bored\",\"straight face\",\"serious\",\"sarcasm\"],\"k\":[30,42],\"m\":\":(\"},\"goal_net\":{\"a\":\"Goal Net\",\"b\":\"1F945\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\"],\"k\":[41,41],\"o\":9},\"flag-bw\":{\"a\":\"Botswana Flag\",\"b\":\"1F1E7-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,14]},\"dvd\":{\"a\":\"Dvd\",\"b\":\"1F4C0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cd\",\"disk\",\"disc\"],\"k\":[25,43]},\"hedgehog\":{\"a\":\"Hedgehog\",\"b\":\"1F994\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,44],\"o\":10},\"dart\":{\"a\":\"Direct Hit\",\"b\":\"1F3AF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"game\",\"play\",\"bar\"],\"k\":[9,9]},\"taco\":{\"a\":\"Taco\",\"b\":\"1F32E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"mexican\"],\"k\":[6,36],\"o\":8},\"back\":{\"a\":\"Back with Leftwards Arrow Above\",\"b\":\"1F519\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"arrow\",\"words\",\"return\"],\"k\":[27,27]},\"flag-by\":{\"a\":\"Belarus Flag\",\"b\":\"1F1E7-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,15]},\"shinto_shrine\":{\"a\":\"Shinto Shrine\",\"b\":\"26E9-FE0F\",\"c\":\"26E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"temple\",\"japan\",\"kyoto\"],\"k\":[48,36],\"o\":5},\"movie_camera\":{\"a\":\"Movie Camera\",\"b\":\"1F3A5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"film\",\"record\"],\"k\":[8,51]},\"sweat\":{\"a\":\"Face with Cold Sweat\",\"b\":\"1F613\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"hot\",\"sad\",\"tired\",\"exercise\"],\"k\":[30,43]},\"burrito\":{\"a\":\"Burrito\",\"b\":\"1F32F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"mexican\"],\"k\":[6,37],\"o\":8},\"flag-bz\":{\"a\":\"Belize Flag\",\"b\":\"1F1E7-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,16]},\"pensive\":{\"a\":\"Pensive Face\",\"b\":\"1F614\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"sad\",\"depressed\",\"upset\"],\"k\":[30,44]},\"kaaba\":{\"a\":\"Kaaba\",\"b\":\"1F54B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"mecca\",\"mosque\",\"islam\"],\"k\":[28,14],\"o\":8},\"film_frames\":{\"a\":\"Film Frames\",\"b\":\"1F39E-FE0F\",\"c\":\"1F39E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[8,44],\"o\":7},\"bat\":{\"a\":\"Bat\",\"b\":\"1F987\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"blind\",\"vampire\"],\"k\":[42,31],\"o\":9},\"golf\":{\"a\":\"Flag in Hole\",\"b\":\"26F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"business\",\"flag\",\"hole\",\"summer\"],\"k\":[48,41],\"o\":5},\"end\":{\"a\":\"End with Leftwards Arrow Above\",\"b\":\"1F51A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"words\",\"arrow\"],\"k\":[27,28]},\"film_projector\":{\"a\":\"Film Projector\",\"b\":\"1F4FD-FE0F\",\"c\":\"1F4FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"video\",\"tape\",\"record\",\"movie\"],\"k\":[27,0],\"o\":7},\"bear\":{\"a\":\"Bear Face\",\"b\":\"1F43B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"wild\"],\"k\":[13,37]},\"ice_skate\":{\"a\":\"Ice Skate\",\"b\":\"26F8-FE0F\",\"c\":\"26F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\"],\"k\":[48,45],\"o\":5},\"fountain\":{\"a\":\"Fountain\",\"b\":\"26F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"summer\",\"water\",\"fresh\"],\"k\":[48,40],\"o\":5},\"confused\":{\"a\":\"Confused Face\",\"b\":\"1F615\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"indifference\",\"huh\",\"weird\",\"hmmm\",\":/\"],\"k\":[30,45],\"l\":[\":\\\\\",\":-\\\\\",\":/\",\":-/\"]},\"flag-ca\":{\"a\":\"Canada Flag\",\"b\":\"1F1E8-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,17]},\"on\":{\"a\":\"On with Exclamation Mark with Left Right Arrow Above\",\"b\":\"1F51B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"arrow\",\"words\"],\"k\":[27,29]},\"stuffed_flatbread\":{\"a\":\"Stuffed Flatbread\",\"b\":\"1F959\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"flatbread\",\"stuffed\",\"gyro\"],\"k\":[42,5],\"o\":9},\"soon\":{\"a\":\"Soon with Rightwards Arrow Above\",\"b\":\"1F51C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"arrow\",\"words\"],\"k\":[27,30]},\"upside_down_face\":{\"a\":\"Upside-Down Face\",\"b\":\"1F643\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"flipped\",\"silly\",\"smile\"],\"k\":[31,39],\"o\":8},\"fishing_pole_and_fish\":{\"a\":\"Fishing Pole and Fish\",\"b\":\"1F3A3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"hobby\",\"summer\"],\"k\":[8,49]},\"tent\":{\"a\":\"Tent\",\"b\":\"26FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"camping\",\"outdoors\"],\"k\":[49,12],\"o\":5},\"clapper\":{\"a\":\"Clapper Board\",\"b\":\"1F3AC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"movie\",\"film\",\"record\"],\"k\":[9,6]},\"egg\":{\"a\":\"Egg\",\"b\":\"1F95A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"chicken\",\"breakfast\"],\"k\":[42,6],\"o\":9},\"flag-cc\":{\"a\":\"Cocos (keeling) Islands Flag\",\"b\":\"1F1E8-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,18]},\"koala\":{\"a\":\"Koala\",\"b\":\"1F428\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[13,18]},\"foggy\":{\"a\":\"Foggy\",\"b\":\"1F301\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"mountain\"],\"k\":[5,45]},\"tv\":{\"a\":\"Television\",\"b\":\"1F4FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"technology\",\"program\",\"oldschool\",\"show\",\"television\"],\"k\":[26,49]},\"panda_face\":{\"a\":\"Panda Face\",\"b\":\"1F43C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"panda\"],\"k\":[13,38]},\"fried_egg\":{\"a\":\"Cooking\",\"b\":\"1F373\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"breakfast\",\"kitchen\",\"egg\"],\"k\":[8,1],\"n\":[\"cooking\"]},\"top\":{\"a\":\"Top with Upwards Arrow Above\",\"b\":\"1F51D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"words\",\"blue-square\"],\"k\":[27,31]},\"flag-cd\":{\"a\":\"Congo - Kinshasa Flag\",\"b\":\"1F1E8-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,19]},\"money_mouth_face\":{\"a\":\"Money-Mouth Face\",\"b\":\"1F911\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"rich\",\"dollar\",\"money\"],\"k\":[37,25],\"o\":8},\"running_shirt_with_sash\":{\"a\":\"Running Shirt with Sash\",\"b\":\"1F3BD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"play\",\"pageant\"],\"k\":[9,23]},\"astonished\":{\"a\":\"Astonished Face\",\"b\":\"1F632\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"xox\",\"surprised\",\"poisoned\"],\"k\":[31,22]},\"feet\":{\"a\":\"Paw Prints\",\"b\":\"1F43E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[13,40],\"n\":[\"paw_prints\"]},\"camera\":{\"a\":\"Camera\",\"b\":\"1F4F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"gadgets\",\"photography\"],\"k\":[26,46]},\"flag-cf\":{\"a\":\"Central African Republic Flag\",\"b\":\"1F1E8-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,20]},\"place_of_worship\":{\"a\":\"Place of Worship\",\"b\":\"1F6D0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"religion\",\"church\",\"temple\",\"prayer\"],\"k\":[37,5],\"o\":8},\"night_with_stars\":{\"a\":\"Night with Stars\",\"b\":\"1F303\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"evening\",\"city\",\"downtown\"],\"k\":[5,47]},\"ski\":{\"a\":\"Ski and Ski Boot\",\"b\":\"1F3BF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"winter\",\"cold\",\"snow\"],\"k\":[9,25]},\"shallow_pan_of_food\":{\"a\":\"Shallow Pan of Food\",\"b\":\"1F958\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"cooking\",\"casserole\",\"paella\"],\"k\":[42,4],\"o\":9},\"camera_with_flash\":{\"a\":\"Camera with Flash\",\"b\":\"1F4F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[26,47],\"o\":7},\"sunrise_over_mountains\":{\"a\":\"Sunrise over Mountains\",\"b\":\"1F304\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"view\",\"vacation\",\"photo\"],\"k\":[5,48]},\"turkey\":{\"a\":\"Turkey\",\"b\":\"1F983\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"bird\"],\"k\":[42,27],\"o\":8},\"white_frowning_face\":{\"a\":\"White Frowning Face\",\"b\":\"2639-FE0F\",\"c\":\"2639\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,40],\"o\":1},\"flag-cg\":{\"a\":\"Congo - Brazzaville Flag\",\"b\":\"1F1E8-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,21]},\"stew\":{\"a\":\"Pot of Food\",\"b\":\"1F372\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"meat\",\"soup\"],\"k\":[8,0]},\"sled\":{\"a\":\"Sled\",\"b\":\"1F6F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,22],\"o\":10},\"atom_symbol\":{\"a\":\"Atom Symbol\",\"b\":\"269B-FE0F\",\"c\":\"269B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"science\",\"physics\",\"chemistry\"],\"k\":[48,18],\"o\":4},\"curling_stone\":{\"a\":\"Curling Stone\",\"b\":\"1F94C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,47],\"o\":10},\"slightly_frowning_face\":{\"a\":\"Slightly Frowning Face\",\"b\":\"1F641\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"frowning\",\"disappointed\",\"sad\",\"upset\"],\"k\":[31,37],\"o\":7},\"sunrise\":{\"a\":\"Sunrise\",\"b\":\"1F305\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"morning\",\"view\",\"vacation\",\"photo\"],\"k\":[5,49]},\"om_symbol\":{\"a\":\"Om Symbol\",\"b\":\"1F549-FE0F\",\"c\":\"1F549\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[28,12],\"o\":7},\"chicken\":{\"a\":\"Chicken\",\"b\":\"1F414\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cluck\",\"nature\",\"bird\"],\"k\":[12,50]},\"bowl_with_spoon\":{\"a\":\"Bowl with Spoon\",\"b\":\"1F963\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,15],\"o\":10},\"flag-ch\":{\"a\":\"Switzerland Flag\",\"b\":\"1F1E8-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,22]},\"video_camera\":{\"a\":\"Video Camera\",\"b\":\"1F4F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"film\",\"record\"],\"k\":[26,48]},\"video_game\":{\"a\":\"Video Game\",\"b\":\"1F3AE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"play\",\"console\",\"PS4\",\"controller\"],\"k\":[9,8]},\"rooster\":{\"a\":\"Rooster\",\"b\":\"1F413\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"chicken\"],\"k\":[12,49]},\"vhs\":{\"a\":\"Videocassette\",\"b\":\"1F4FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"record\",\"video\",\"oldschool\",\"90s\",\"80s\"],\"k\":[26,51]},\"city_sunset\":{\"a\":\"Cityscape at Dusk\",\"b\":\"1F306\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"evening\",\"sky\",\"buildings\"],\"k\":[5,50]},\"confounded\":{\"a\":\"Confounded Face\",\"b\":\"1F616\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"confused\",\"sick\",\"unwell\",\"oops\",\":S\"],\"k\":[30,46]},\"green_salad\":{\"a\":\"Green Salad\",\"b\":\"1F957\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"healthy\",\"lettuce\"],\"k\":[42,3],\"o\":9},\"star_of_david\":{\"a\":\"Star of David\",\"b\":\"2721-FE0F\",\"c\":\"2721\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"judaism\"],\"k\":[49,47],\"o\":1},\"flag-ci\":{\"a\":\"Côte D’ivoire Flag\",\"b\":\"1F1E8-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,23]},\"popcorn\":{\"a\":\"Popcorn\",\"b\":\"1F37F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"food\",\"movie theater\",\"films\",\"snack\"],\"k\":[8,13],\"o\":8},\"city_sunrise\":{\"a\":\"Sunset over Buildings\",\"b\":\"1F307\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"good morning\",\"dawn\"],\"k\":[5,51]},\"disappointed\":{\"a\":\"Disappointed Face\",\"b\":\"1F61E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"sad\",\"upset\",\"depressed\",\":(\"],\"k\":[31,2],\"l\":[\"):\",\":(\",\":-(\"],\"m\":\":(\"},\"mag\":{\"a\":\"Left-Pointing Magnifying Glass\",\"b\":\"1F50D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"search\",\"zoom\",\"find\",\"detective\"],\"k\":[27,15]},\"hatching_chick\":{\"a\":\"Hatching Chick\",\"b\":\"1F423\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"chicken\",\"egg\",\"born\",\"baby\",\"bird\"],\"k\":[13,13]},\"joystick\":{\"a\":\"Joystick\",\"b\":\"1F579-FE0F\",\"c\":\"1F579\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"game\",\"play\"],\"k\":[29,20],\"o\":7},\"wheel_of_dharma\":{\"a\":\"Wheel of Dharma\",\"b\":\"2638-FE0F\",\"c\":\"2638\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"hinduism\",\"buddhism\",\"sikhism\",\"jainism\"],\"k\":[47,39],\"o\":1},\"flag-ck\":{\"a\":\"Cook Islands Flag\",\"b\":\"1F1E8-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,24]},\"canned_food\":{\"a\":\"Canned Food\",\"b\":\"1F96B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,23],\"o\":10},\"worried\":{\"a\":\"Worried Face\",\"b\":\"1F61F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"concern\",\"nervous\",\":(\"],\"k\":[31,3]},\"baby_chick\":{\"a\":\"Baby Chick\",\"b\":\"1F424\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"chicken\",\"bird\"],\"k\":[13,14]},\"flag-cl\":{\"a\":\"Chile Flag\",\"b\":\"1F1E8-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,25]},\"game_die\":{\"a\":\"Game Die\",\"b\":\"1F3B2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dice\",\"random\",\"tabletop\",\"play\",\"luck\"],\"k\":[9,12]},\"mag_right\":{\"a\":\"Right-Pointing Magnifying Glass\",\"b\":\"1F50E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"search\",\"zoom\",\"find\",\"detective\"],\"k\":[27,16]},\"yin_yang\":{\"a\":\"Yin Yang\",\"b\":\"262F-FE0F\",\"c\":\"262F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"balance\"],\"k\":[47,38],\"o\":1},\"bridge_at_night\":{\"a\":\"Bridge at Night\",\"b\":\"1F309\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"sanfrancisco\"],\"k\":[6,1]},\"spades\":{\"a\":\"Black Spade Suit\",\"b\":\"2660-FE0F\",\"c\":\"2660\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"poker\",\"cards\",\"suits\",\"magic\"],\"k\":[48,4],\"o\":1},\"hatched_chick\":{\"a\":\"Front-Facing Baby Chick\",\"b\":\"1F425\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"chicken\",\"baby\",\"bird\"],\"k\":[13,15]},\"flag-cm\":{\"a\":\"Cameroon Flag\",\"b\":\"1F1E8-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,26]},\"latin_cross\":{\"a\":\"Latin Cross\",\"b\":\"271D-FE0F\",\"c\":\"271D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"christianity\"],\"k\":[49,46],\"o\":1},\"triumph\":{\"a\":\"Face with Look of Triumph\",\"b\":\"1F624\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"gas\",\"phew\",\"proud\",\"pride\"],\"k\":[31,8]},\"hotsprings\":{\"a\":\"Hot Springs\",\"b\":\"2668-FE0F\",\"c\":\"2668\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bath\",\"warm\",\"relax\"],\"k\":[48,8],\"o\":1},\"bento\":{\"a\":\"Bento Box\",\"b\":\"1F371\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japanese\",\"box\"],\"k\":[7,51]},\"microscope\":{\"a\":\"Microscope\",\"b\":\"1F52C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"laboratory\",\"experiment\",\"zoomin\",\"science\",\"study\"],\"k\":[27,46]},\"cry\":{\"a\":\"Crying Face\",\"b\":\"1F622\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"tears\",\"sad\",\"depressed\",\"upset\",\":'(\"],\"k\":[31,6],\"l\":[\":'(\"],\"m\":\":'(\"},\"bird\":{\"a\":\"Bird\",\"b\":\"1F426\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"fly\",\"tweet\",\"spring\"],\"k\":[13,16]},\"cn\":{\"a\":\"China Flag\",\"b\":\"1F1E8-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"china\",\"chinese\",\"prc\",\"flag\",\"country\",\"nation\",\"banner\"],\"k\":[1,27],\"n\":[\"flag-cn\"]},\"telescope\":{\"a\":\"Telescope\",\"b\":\"1F52D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stars\",\"space\",\"zoom\",\"science\",\"astronomy\"],\"k\":[27,47]},\"rice_cracker\":{\"a\":\"Rice Cracker\",\"b\":\"1F358\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japanese\"],\"k\":[7,26]},\"hearts\":{\"a\":\"Black Heart Suit\",\"b\":\"2665-FE0F\",\"c\":\"2665\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[48,6],\"o\":1},\"orthodox_cross\":{\"a\":\"Orthodox Cross\",\"b\":\"2626-FE0F\",\"c\":\"2626\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"suppedaneum\",\"religion\"],\"k\":[47,35],\"o\":1},\"milky_way\":{\"a\":\"Milky Way\",\"b\":\"1F30C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"space\",\"stars\"],\"k\":[6,4]},\"rice_ball\":{\"a\":\"Rice Ball\",\"b\":\"1F359\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japanese\"],\"k\":[7,27]},\"satellite_antenna\":{\"a\":\"Satellite Antenna\",\"b\":\"1F4E1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[26,24]},\"flag-co\":{\"a\":\"Colombia Flag\",\"b\":\"1F1E8-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,28]},\"carousel_horse\":{\"a\":\"Carousel Horse\",\"b\":\"1F3A0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"carnival\"],\"k\":[8,46]},\"sob\":{\"a\":\"Loudly Crying Face\",\"b\":\"1F62D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"cry\",\"tears\",\"sad\",\"upset\",\"depressed\"],\"k\":[31,17],\"m\":\":'(\"},\"diamonds\":{\"a\":\"Black Diamond Suit\",\"b\":\"2666-FE0F\",\"c\":\"2666\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[48,7],\"o\":1},\"star_and_crescent\":{\"a\":\"Star and Crescent\",\"b\":\"262A-FE0F\",\"c\":\"262A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"islam\"],\"k\":[47,36],\"o\":1},\"penguin\":{\"a\":\"Penguin\",\"b\":\"1F427\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\"],\"k\":[13,17]},\"dove_of_peace\":{\"a\":\"Dove of Peace\",\"b\":\"1F54A-FE0F\",\"c\":\"1F54A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[28,13],\"o\":7},\"flag-cp\":{\"a\":\"Clipperton Island Flag\",\"b\":\"1F1E8-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[1,29]},\"ferris_wheel\":{\"a\":\"Ferris Wheel\",\"b\":\"1F3A1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"photo\",\"carnival\",\"londoneye\"],\"k\":[8,47]},\"clubs\":{\"a\":\"Black Club Suit\",\"b\":\"2663-FE0F\",\"c\":\"2663\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[48,5],\"o\":1},\"peace_symbol\":{\"a\":\"Peace Symbol\",\"b\":\"262E-FE0F\",\"c\":\"262E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"hippie\"],\"k\":[47,37],\"o\":1},\"candle\":{\"a\":\"Candle\",\"b\":\"1F56F-FE0F\",\"c\":\"1F56F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"fire\",\"wax\"],\"k\":[28,42],\"o\":7},\"frowning\":{\"a\":\"Frowning Face with Open Mouth\",\"b\":\"1F626\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"aw\",\"what\"],\"k\":[31,10]},\"rice\":{\"a\":\"Cooked Rice\",\"b\":\"1F35A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"china\",\"asian\"],\"k\":[7,28]},\"flag-cr\":{\"a\":\"Costa Rica Flag\",\"b\":\"1F1E8-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,30]},\"roller_coaster\":{\"a\":\"Roller Coaster\",\"b\":\"1F3A2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"carnival\",\"playground\",\"photo\",\"fun\"],\"k\":[8,48]},\"menorah_with_nine_branches\":{\"a\":\"Menorah with Nine Branches\",\"b\":\"1F54E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[28,17],\"o\":8},\"black_joker\":{\"a\":\"Playing Card Black Joker\",\"b\":\"1F0CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"poker\",\"cards\",\"game\",\"play\",\"magic\"],\"k\":[0,15]},\"eagle\":{\"a\":\"Eagle\",\"b\":\"1F985\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"bird\"],\"k\":[42,29],\"o\":9},\"curry\":{\"a\":\"Curry and Rice\",\"b\":\"1F35B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"spicy\",\"hot\",\"indian\"],\"k\":[7,29]},\"bulb\":{\"a\":\"Electric Light Bulb\",\"b\":\"1F4A1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"light\",\"electricity\",\"idea\"],\"k\":[25,7]},\"anguished\":{\"a\":\"Anguished Face\",\"b\":\"1F627\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"stunned\",\"nervous\"],\"k\":[31,11],\"l\":[\"D:\"]},\"flag-cu\":{\"a\":\"Cuba Flag\",\"b\":\"1F1E8-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,31]},\"barber\":{\"a\":\"Barber Pole\",\"b\":\"1F488\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hair\",\"salon\",\"style\"],\"k\":[24,34]},\"duck\":{\"a\":\"Duck\",\"b\":\"1F986\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"bird\",\"mallard\"],\"k\":[42,30],\"o\":9},\"six_pointed_star\":{\"a\":\"Six Pointed Star with Middle Dot\",\"b\":\"1F52F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"religion\",\"jewish\",\"hexagram\"],\"k\":[27,49]},\"ramen\":{\"a\":\"Steaming Bowl\",\"b\":\"1F35C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japanese\",\"noodle\",\"chopsticks\"],\"k\":[7,30]},\"flashlight\":{\"a\":\"Electric Torch\",\"b\":\"1F526\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dark\",\"camping\",\"sight\",\"night\"],\"k\":[27,40]},\"mahjong\":{\"a\":\"Mahjong Tile Red Dragon\",\"b\":\"1F004\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"game\",\"play\",\"chinese\",\"kanji\"],\"k\":[0,14],\"o\":5},\"fearful\":{\"a\":\"Fearful Face\",\"b\":\"1F628\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"scared\",\"terrified\",\"nervous\",\"oops\",\"huh\"],\"k\":[31,12]},\"aries\":{\"a\":\"Aries\",\"b\":\"2648\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[47,44],\"o\":1},\"spaghetti\":{\"a\":\"Spaghetti\",\"b\":\"1F35D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"italian\",\"noodle\"],\"k\":[7,31]},\"circus_tent\":{\"a\":\"Circus Tent\",\"b\":\"1F3AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"festival\",\"carnival\",\"party\"],\"k\":[9,4]},\"izakaya_lantern\":{\"a\":\"Izakaya Lantern\",\"b\":\"1F3EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"light\",\"paper\",\"halloween\",\"spooky\"],\"k\":[12,11],\"n\":[\"lantern\"]},\"flag-cv\":{\"a\":\"Cape Verde Flag\",\"b\":\"1F1E8-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,32]},\"weary\":{\"a\":\"Weary Face\",\"b\":\"1F629\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"tired\",\"sleepy\",\"sad\",\"frustrated\",\"upset\"],\"k\":[31,13]},\"flower_playing_cards\":{\"a\":\"Flower Playing Cards\",\"b\":\"1F3B4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"game\",\"sunset\",\"red\"],\"k\":[9,14]},\"owl\":{\"a\":\"Owl\",\"b\":\"1F989\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"bird\",\"hoot\"],\"k\":[42,33],\"o\":9},\"performing_arts\":{\"a\":\"Performing Arts\",\"b\":\"1F3AD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"acting\",\"theater\",\"drama\"],\"k\":[9,7]},\"frog\":{\"a\":\"Frog Face\",\"b\":\"1F438\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"croak\",\"toad\"],\"k\":[13,34]},\"flag-cw\":{\"a\":\"Curaçao Flag\",\"b\":\"1F1E8-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,33]},\"notebook_with_decorative_cover\":{\"a\":\"Notebook with Decorative Cover\",\"b\":\"1F4D4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"classroom\",\"notes\",\"record\",\"paper\",\"study\"],\"k\":[26,11]},\"exploding_head\":{\"a\":\"Shocked Face with Exploding Head\",\"b\":\"1F92F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,3],\"n\":[\"shocked_face_with_exploding_head\"],\"o\":10},\"taurus\":{\"a\":\"Taurus\",\"b\":\"2649\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"k\":[47,45],\"o\":1},\"sweet_potato\":{\"a\":\"Roasted Sweet Potato\",\"b\":\"1F360\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"nature\"],\"k\":[7,34]},\"closed_book\":{\"a\":\"Closed Book\",\"b\":\"1F4D5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"learn\"],\"k\":[26,12]},\"gemini\":{\"a\":\"Gemini\",\"b\":\"264A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[47,46],\"o\":1},\"frame_with_picture\":{\"a\":\"Frame with Picture\",\"b\":\"1F5BC-FE0F\",\"c\":\"1F5BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,3],\"o\":7},\"flag-cx\":{\"a\":\"Christmas Island Flag\",\"b\":\"1F1E8-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,34]},\"grimacing\":{\"a\":\"Grimacing Face\",\"b\":\"1F62C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"grimace\",\"teeth\"],\"k\":[31,16]},\"crocodile\":{\"a\":\"Crocodile\",\"b\":\"1F40A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"reptile\",\"lizard\",\"alligator\"],\"k\":[12,40]},\"oden\":{\"a\":\"Oden\",\"b\":\"1F362\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japanese\"],\"k\":[7,36]},\"flag-cy\":{\"a\":\"Cyprus Flag\",\"b\":\"1F1E8-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,35]},\"book\":{\"a\":\"Open Book\",\"b\":\"1F4D6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[26,13],\"n\":[\"open_book\"]},\"turtle\":{\"a\":\"Turtle\",\"b\":\"1F422\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"slow\",\"nature\",\"tortoise\"],\"k\":[13,12]},\"art\":{\"a\":\"Artist Palette\",\"b\":\"1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"design\",\"paint\",\"draw\",\"colors\"],\"k\":[9,2]},\"sushi\":{\"a\":\"Sushi\",\"b\":\"1F363\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"fish\",\"japanese\",\"rice\"],\"k\":[7,37]},\"cold_sweat\":{\"a\":\"Face with Open Mouth and Cold Sweat\",\"b\":\"1F630\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"nervous\",\"sweat\"],\"k\":[31,20]},\"cancer\":{\"a\":\"Cancer\",\"b\":\"264B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[47,47],\"o\":1},\"fried_shrimp\":{\"a\":\"Fried Shrimp\",\"b\":\"1F364\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"animal\",\"appetizer\",\"summer\"],\"k\":[7,38]},\"slot_machine\":{\"a\":\"Slot Machine\",\"b\":\"1F3B0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bet\",\"gamble\",\"vegas\",\"fruit machine\",\"luck\",\"casino\"],\"k\":[9,10]},\"scream\":{\"a\":\"Face Screaming in Fear\",\"b\":\"1F631\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"munch\",\"scared\",\"omg\"],\"k\":[31,21]},\"green_book\":{\"a\":\"Green Book\",\"b\":\"1F4D7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"study\"],\"k\":[26,14]},\"leo\":{\"a\":\"Leo\",\"b\":\"264C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[47,48],\"o\":1},\"flag-cz\":{\"a\":\"Czechia Flag\",\"b\":\"1F1E8-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,36]},\"lizard\":{\"a\":\"Lizard\",\"b\":\"1F98E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"reptile\"],\"k\":[42,38],\"o\":9},\"virgo\":{\"a\":\"Virgo\",\"b\":\"264D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[47,49],\"o\":1},\"steam_locomotive\":{\"a\":\"Steam Locomotive\",\"b\":\"1F682\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"train\"],\"k\":[34,10]},\"de\":{\"a\":\"Germany Flag\",\"b\":\"1F1E9-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"german\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[1,37],\"n\":[\"flag-de\"]},\"flushed\":{\"a\":\"Flushed Face\",\"b\":\"1F633\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"blush\",\"shy\",\"flattered\"],\"k\":[31,23]},\"blue_book\":{\"a\":\"Blue Book\",\"b\":\"1F4D8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"learn\",\"study\"],\"k\":[26,15]},\"snake\":{\"a\":\"Snake\",\"b\":\"1F40D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"evil\",\"nature\",\"hiss\",\"python\"],\"k\":[12,43]},\"fish_cake\":{\"a\":\"Fish Cake with Swirl Design\",\"b\":\"1F365\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"japan\",\"sea\",\"beach\",\"narutomaki\",\"pink\",\"swirl\",\"kamaboko\",\"surimi\",\"ramen\"],\"k\":[7,39]},\"railway_car\":{\"a\":\"Railway Car\",\"b\":\"1F683\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,11]},\"dango\":{\"a\":\"Dango\",\"b\":\"1F361\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"dessert\",\"sweet\",\"japanese\",\"barbecue\",\"meat\"],\"k\":[7,35]},\"orange_book\":{\"a\":\"Orange Book\",\"b\":\"1F4D9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"study\"],\"k\":[26,16]},\"libra\":{\"a\":\"Libra\",\"b\":\"264E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[47,50],\"o\":1},\"dragon_face\":{\"a\":\"Dragon Face\",\"b\":\"1F432\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"k\":[13,28]},\"flag-dg\":{\"a\":\"Diego Garcia Flag\",\"b\":\"1F1E9-1F1EC\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,38]},\"zany_face\":{\"a\":\"Grinning Face with One Large and One Small Eye\",\"b\":\"1F92A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,50],\"n\":[\"grinning_face_with_one_large_and_one_small_eye\"],\"o\":10},\"books\":{\"a\":\"Books\",\"b\":\"1F4DA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"literature\",\"library\",\"study\"],\"k\":[26,17]},\"dragon\":{\"a\":\"Dragon\",\"b\":\"1F409\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"k\":[12,39]},\"flag-dj\":{\"a\":\"Djibouti Flag\",\"b\":\"1F1E9-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,39]},\"dumpling\":{\"a\":\"Dumpling\",\"b\":\"1F95F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,11],\"o\":10},\"dizzy_face\":{\"a\":\"Dizzy Face\",\"b\":\"1F635\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"spent\",\"unconscious\",\"xox\",\"dizzy\"],\"k\":[31,25]},\"scorpius\":{\"a\":\"Scorpius\",\"b\":\"264F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\",\"scorpio\"],\"k\":[47,51],\"o\":1},\"bullettrain_side\":{\"a\":\"High-Speed Train\",\"b\":\"1F684\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,12]},\"bullettrain_front\":{\"a\":\"High-Speed Train with Bullet Nose\",\"b\":\"1F685\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"speed\",\"fast\",\"public\",\"travel\"],\"k\":[34,13]},\"notebook\":{\"a\":\"Notebook\",\"b\":\"1F4D3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"record\",\"notes\",\"paper\",\"study\"],\"k\":[26,10]},\"fortune_cookie\":{\"a\":\"Fortune Cookie\",\"b\":\"1F960\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,12],\"o\":10},\"sagittarius\":{\"a\":\"Sagittarius\",\"b\":\"2650\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[48,0],\"o\":1},\"sauropod\":{\"a\":\"Sauropod\",\"b\":\"1F995\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,45],\"o\":10},\"flag-dk\":{\"a\":\"Denmark Flag\",\"b\":\"1F1E9-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,40]},\"rage\":{\"a\":\"Pouting Face\",\"b\":\"1F621\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"angry\",\"mad\",\"hate\",\"despise\"],\"k\":[31,5]},\"ledger\":{\"a\":\"Ledger\",\"b\":\"1F4D2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"notes\",\"paper\"],\"k\":[26,9]},\"angry\":{\"a\":\"Angry Face\",\"b\":\"1F620\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mad\",\"face\",\"annoyed\",\"frustrated\"],\"k\":[31,4],\"l\":[\">:(\",\">:-(\"]},\"t-rex\":{\"a\":\"T-Rex\",\"b\":\"1F996\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,46],\"o\":10},\"capricorn\":{\"a\":\"Capricorn\",\"b\":\"2651\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[48,1],\"o\":1},\"takeout_box\":{\"a\":\"Takeout Box\",\"b\":\"1F961\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,13],\"o\":10},\"flag-dm\":{\"a\":\"Dominica Flag\",\"b\":\"1F1E9-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,41]},\"train2\":{\"a\":\"Train\",\"b\":\"1F686\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,14]},\"page_with_curl\":{\"a\":\"Page with Curl\",\"b\":\"1F4C3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"office\",\"paper\"],\"k\":[25,46]},\"whale\":{\"a\":\"Spouting Whale\",\"b\":\"1F433\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"k\":[13,29]},\"face_with_symbols_on_mouth\":{\"a\":\"Serious Face with Symbols Covering Mouth\",\"b\":\"1F92C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,0],\"n\":[\"serious_face_with_symbols_covering_mouth\"],\"o\":10},\"flag-do\":{\"a\":\"Dominican Republic Flag\",\"b\":\"1F1E9-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,42]},\"metro\":{\"a\":\"Metro\",\"b\":\"1F687\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"blue-square\",\"mrt\",\"underground\",\"tube\"],\"k\":[34,15]},\"icecream\":{\"a\":\"Soft Ice Cream\",\"b\":\"1F366\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"hot\",\"dessert\",\"summer\"],\"k\":[7,40]},\"aquarius\":{\"a\":\"Aquarius\",\"b\":\"2652\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[48,2],\"o\":1},\"flag-dz\":{\"a\":\"Algeria Flag\",\"b\":\"1F1E9-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,43]},\"whale2\":{\"a\":\"Whale\",\"b\":\"1F40B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"k\":[12,41]},\"mask\":{\"a\":\"Face with Medical Mask\",\"b\":\"1F637\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"sick\",\"ill\",\"disease\"],\"k\":[31,27]},\"scroll\":{\"a\":\"Scroll\",\"b\":\"1F4DC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"ancient\",\"history\",\"paper\"],\"k\":[26,19]},\"shaved_ice\":{\"a\":\"Shaved Ice\",\"b\":\"1F367\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hot\",\"dessert\",\"summer\"],\"k\":[7,41]},\"pisces\":{\"a\":\"Pisces\",\"b\":\"2653\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"k\":[48,3],\"o\":1},\"light_rail\":{\"a\":\"Light Rail\",\"b\":\"1F688\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,16]},\"dolphin\":{\"a\":\"Dolphin\",\"b\":\"1F42C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"flipper\",\"fins\",\"beach\"],\"k\":[13,22],\"n\":[\"flipper\"]},\"face_with_thermometer\":{\"a\":\"Face with Thermometer\",\"b\":\"1F912\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sick\",\"temperature\",\"thermometer\",\"cold\",\"fever\"],\"k\":[37,26],\"o\":8},\"flag-ea\":{\"a\":\"Ceuta & Melilla Flag\",\"b\":\"1F1EA-1F1E6\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,44]},\"ophiuchus\":{\"a\":\"Ophiuchus\",\"b\":\"26CE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sign\",\"purple-square\",\"constellation\",\"astrology\"],\"k\":[48,31]},\"station\":{\"a\":\"Station\",\"b\":\"1F689\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"public\"],\"k\":[34,17]},\"ice_cream\":{\"a\":\"Ice Cream\",\"b\":\"1F368\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"hot\",\"dessert\"],\"k\":[7,42]},\"page_facing_up\":{\"a\":\"Page Facing Up\",\"b\":\"1F4C4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"office\",\"paper\",\"information\"],\"k\":[25,47]},\"doughnut\":{\"a\":\"Doughnut\",\"b\":\"1F369\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"dessert\",\"snack\",\"sweet\",\"donut\"],\"k\":[7,43]},\"face_with_head_bandage\":{\"a\":\"Face with Head-Bandage\",\"b\":\"1F915\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"injured\",\"clumsy\",\"bandage\",\"hurt\"],\"k\":[37,29],\"o\":8},\"fish\":{\"a\":\"Fish\",\"b\":\"1F41F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"food\",\"nature\"],\"k\":[13,9]},\"newspaper\":{\"a\":\"Newspaper\",\"b\":\"1F4F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"press\",\"headline\"],\"k\":[26,39]},\"tram\":{\"a\":\"Tram\",\"b\":\"1F68A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,18]},\"flag-ec\":{\"a\":\"Ecuador Flag\",\"b\":\"1F1EA-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,45]},\"twisted_rightwards_arrows\":{\"a\":\"Twisted Rightwards Arrows\",\"b\":\"1F500\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"shuffle\",\"music\",\"random\"],\"k\":[27,2]},\"flag-ee\":{\"a\":\"Estonia Flag\",\"b\":\"1F1EA-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,46]},\"cookie\":{\"a\":\"Cookie\",\"b\":\"1F36A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"snack\",\"oreo\",\"chocolate\",\"sweet\",\"dessert\"],\"k\":[7,44]},\"monorail\":{\"a\":\"Monorail\",\"b\":\"1F69D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,37]},\"tropical_fish\":{\"a\":\"Tropical Fish\",\"b\":\"1F420\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"swim\",\"ocean\",\"beach\",\"nemo\"],\"k\":[13,10]},\"rolled_up_newspaper\":{\"a\":\"Rolled Up Newspaper\",\"b\":\"1F5DE-FE0F\",\"c\":\"1F5DE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,12],\"o\":7},\"nauseated_face\":{\"a\":\"Nauseated Face\",\"b\":\"1F922\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"vomit\",\"gross\",\"green\",\"sick\",\"throw up\",\"ill\"],\"k\":[38,25],\"o\":9},\"repeat\":{\"a\":\"Clockwise Rightwards and Leftwards Open Circle Arrows\",\"b\":\"1F501\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"loop\",\"record\"],\"k\":[27,3]},\"bookmark_tabs\":{\"a\":\"Bookmark Tabs\",\"b\":\"1F4D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"favorite\",\"save\",\"order\",\"tidy\"],\"k\":[26,8]},\"repeat_one\":{\"a\":\"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay\",\"b\":\"1F502\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"loop\"],\"k\":[27,4]},\"flag-eg\":{\"a\":\"Egypt Flag\",\"b\":\"1F1EA-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,47]},\"mountain_railway\":{\"a\":\"Mountain Railway\",\"b\":\"1F69E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,38]},\"birthday\":{\"a\":\"Birthday Cake\",\"b\":\"1F382\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"dessert\",\"cake\"],\"k\":[8,16]},\"blowfish\":{\"a\":\"Blowfish\",\"b\":\"1F421\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"nature\",\"food\",\"sea\",\"ocean\"],\"k\":[13,11]},\"face_vomiting\":{\"a\":\"Face with Open Mouth Vomiting\",\"b\":\"1F92E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,2],\"n\":[\"face_with_open_mouth_vomiting\"],\"o\":10},\"arrow_forward\":{\"a\":\"Black Right-Pointing Triangle\",\"b\":\"25B6-FE0F\",\"c\":\"25B6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"right\",\"direction\",\"play\"],\"k\":[47,10],\"o\":1},\"bookmark\":{\"a\":\"Bookmark\",\"b\":\"1F516\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"favorite\",\"label\",\"save\"],\"k\":[27,24]},\"flag-eh\":{\"a\":\"Western Sahara Flag\",\"b\":\"1F1EA-1F1ED\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,48]},\"shark\":{\"a\":\"Shark\",\"b\":\"1F988\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"jaws\",\"fins\",\"beach\"],\"k\":[42,32],\"o\":9},\"train\":{\"a\":\"Tram Car\",\"b\":\"1F68B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"carriage\",\"public\",\"travel\"],\"k\":[34,19]},\"sneezing_face\":{\"a\":\"Sneezing Face\",\"b\":\"1F927\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"gesundheit\",\"sneeze\",\"sick\",\"allergy\"],\"k\":[38,47],\"o\":9},\"cake\":{\"a\":\"Shortcake\",\"b\":\"1F370\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"dessert\"],\"k\":[7,50]},\"bus\":{\"a\":\"Bus\",\"b\":\"1F68C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"car\",\"vehicle\",\"transportation\"],\"k\":[34,20]},\"pie\":{\"a\":\"Pie\",\"b\":\"1F967\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,19],\"o\":10},\"innocent\":{\"a\":\"Smiling Face with Halo\",\"b\":\"1F607\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"angel\",\"heaven\",\"halo\"],\"k\":[30,31]},\"fast_forward\":{\"a\":\"Black Right-Pointing Double Triangle\",\"b\":\"23E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"play\",\"speed\",\"continue\"],\"k\":[46,45]},\"label\":{\"a\":\"Label\",\"b\":\"1F3F7-FE0F\",\"c\":\"1F3F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sale\",\"tag\"],\"k\":[12,21],\"o\":7},\"octopus\":{\"a\":\"Octopus\",\"b\":\"1F419\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"creature\",\"ocean\",\"sea\",\"nature\",\"beach\"],\"k\":[13,3]},\"flag-er\":{\"a\":\"Eritrea Flag\",\"b\":\"1F1EA-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,49]},\"black_right_pointing_double_triangle_with_vertical_bar\":{\"a\":\"Black Right Pointing Double Triangle with Vertical Bar\",\"b\":\"23ED-FE0F\",\"c\":\"23ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,49]},\"chocolate_bar\":{\"a\":\"Chocolate Bar\",\"b\":\"1F36B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"snack\",\"dessert\",\"sweet\"],\"k\":[7,45]},\"oncoming_bus\":{\"a\":\"Oncoming Bus\",\"b\":\"1F68D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"transportation\"],\"k\":[34,21]},\"shell\":{\"a\":\"Spiral Shell\",\"b\":\"1F41A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"sea\",\"beach\"],\"k\":[13,4]},\"face_with_cowboy_hat\":{\"a\":\"Face with Cowboy Hat\",\"b\":\"1F920\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,23],\"o\":9},\"moneybag\":{\"a\":\"Money Bag\",\"b\":\"1F4B0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dollar\",\"payment\",\"coins\",\"sale\"],\"k\":[25,27]},\"es\":{\"a\":\"Spain Flag\",\"b\":\"1F1EA-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"spain\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[1,50],\"n\":[\"flag-es\"]},\"crab\":{\"a\":\"Crab\",\"b\":\"1F980\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"crustacean\"],\"k\":[42,24],\"o\":8},\"yen\":{\"a\":\"Banknote with Yen Sign\",\"b\":\"1F4B4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"japanese\",\"dollar\",\"currency\"],\"k\":[25,31]},\"flag-et\":{\"a\":\"Ethiopia Flag\",\"b\":\"1F1EA-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[1,51]},\"clown_face\":{\"a\":\"Clown Face\",\"b\":\"1F921\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\"],\"k\":[38,24],\"o\":9},\"black_right_pointing_triangle_with_double_vertical_bar\":{\"a\":\"Black Right Pointing Triangle with Double Vertical Bar\",\"b\":\"23EF-FE0F\",\"c\":\"23EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,51]},\"trolleybus\":{\"a\":\"Trolleybus\",\"b\":\"1F68E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bart\",\"transportation\",\"vehicle\"],\"k\":[34,22]},\"candy\":{\"a\":\"Candy\",\"b\":\"1F36C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"snack\",\"dessert\",\"sweet\",\"lolly\"],\"k\":[7,46]},\"lying_face\":{\"a\":\"Lying Face\",\"b\":\"1F925\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"lie\",\"pinocchio\"],\"k\":[38,28],\"o\":9},\"arrow_backward\":{\"a\":\"Black Left-Pointing Triangle\",\"b\":\"25C0-FE0F\",\"c\":\"25C0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"left\",\"direction\"],\"k\":[47,11],\"o\":1},\"dollar\":{\"a\":\"Banknote with Dollar Sign\",\"b\":\"1F4B5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"bill\",\"currency\"],\"k\":[25,32]},\"shrimp\":{\"a\":\"Shrimp\",\"b\":\"1F990\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"ocean\",\"nature\",\"seafood\"],\"k\":[42,40],\"o\":9},\"minibus\":{\"a\":\"Minibus\",\"b\":\"1F690\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"car\",\"transportation\"],\"k\":[34,24]},\"flag-eu\":{\"a\":\"European Union Flag\",\"b\":\"1F1EA-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,0]},\"lollipop\":{\"a\":\"Lollipop\",\"b\":\"1F36D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"snack\",\"candy\",\"sweet\"],\"k\":[7,47]},\"squid\":{\"a\":\"Squid\",\"b\":\"1F991\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"nature\",\"ocean\",\"sea\"],\"k\":[42,41],\"o\":9},\"euro\":{\"a\":\"Banknote with Euro Sign\",\"b\":\"1F4B6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"currency\"],\"k\":[25,33]},\"flag-fi\":{\"a\":\"Finland Flag\",\"b\":\"1F1EB-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,1]},\"ambulance\":{\"a\":\"Ambulance\",\"b\":\"1F691\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"health\",\"911\",\"hospital\"],\"k\":[34,25]},\"custard\":{\"a\":\"Custard\",\"b\":\"1F36E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dessert\",\"food\"],\"k\":[7,48]},\"shushing_face\":{\"a\":\"Face with Finger Covering Closed Lips\",\"b\":\"1F92B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,51],\"n\":[\"face_with_finger_covering_closed_lips\"],\"o\":10},\"rewind\":{\"a\":\"Black Left-Pointing Double Triangle\",\"b\":\"23EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"play\",\"blue-square\"],\"k\":[46,46]},\"black_left_pointing_double_triangle_with_vertical_bar\":{\"a\":\"Black Left Pointing Double Triangle with Vertical Bar\",\"b\":\"23EE-FE0F\",\"c\":\"23EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,50]},\"face_with_hand_over_mouth\":{\"a\":\"Smiling Face with Smiling Eyes and Hand Covering Mouth\",\"b\":\"1F92D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,1],\"n\":[\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\"],\"o\":10},\"flag-fj\":{\"a\":\"Fiji Flag\",\"b\":\"1F1EB-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,2]},\"honey_pot\":{\"a\":\"Honey Pot\",\"b\":\"1F36F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bees\",\"sweet\",\"kitchen\"],\"k\":[7,49]},\"snail\":{\"a\":\"Snail\",\"b\":\"1F40C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"slow\",\"animal\",\"shell\"],\"k\":[12,42]},\"pound\":{\"a\":\"Banknote with Pound Sign\",\"b\":\"1F4B7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"british\",\"sterling\",\"money\",\"sales\",\"bills\",\"uk\",\"england\",\"currency\"],\"k\":[25,34]},\"fire_engine\":{\"a\":\"Fire Engine\",\"b\":\"1F692\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"cars\",\"vehicle\"],\"k\":[34,26]},\"baby_bottle\":{\"a\":\"Baby Bottle\",\"b\":\"1F37C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"food\",\"container\",\"milk\"],\"k\":[8,10]},\"flag-fk\":{\"a\":\"Falkland Islands Flag\",\"b\":\"1F1EB-1F1F0\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,3]},\"butterfly\":{\"a\":\"Butterfly\",\"b\":\"1F98B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"insect\",\"nature\",\"caterpillar\"],\"k\":[42,35],\"o\":9},\"money_with_wings\":{\"a\":\"Money with Wings\",\"b\":\"1F4B8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dollar\",\"bills\",\"payment\",\"sale\"],\"k\":[25,35]},\"face_with_monocle\":{\"a\":\"Face with Monocle\",\"b\":\"1F9D0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,49],\"o\":10},\"police_car\":{\"a\":\"Police Car\",\"b\":\"1F693\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"cars\",\"transportation\",\"law\",\"legal\",\"enforcement\"],\"k\":[34,27]},\"arrow_up_small\":{\"a\":\"Up-Pointing Small Red Triangle\",\"b\":\"1F53C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"triangle\",\"direction\",\"point\",\"forward\",\"top\"],\"k\":[28,10]},\"flag-fm\":{\"a\":\"Micronesia Flag\",\"b\":\"1F1EB-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,4]},\"glass_of_milk\":{\"a\":\"Glass of Milk\",\"b\":\"1F95B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,7],\"o\":9},\"credit_card\":{\"a\":\"Credit Card\",\"b\":\"1F4B3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"bill\",\"payment\",\"shopping\"],\"k\":[25,30]},\"oncoming_police_car\":{\"a\":\"Oncoming Police Car\",\"b\":\"1F694\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"law\",\"legal\",\"enforcement\",\"911\"],\"k\":[34,28]},\"bug\":{\"a\":\"Bug\",\"b\":\"1F41B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"worm\"],\"k\":[13,5]},\"nerd_face\":{\"a\":\"Nerd Face\",\"b\":\"1F913\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"nerdy\",\"geek\",\"dork\"],\"k\":[37,27],\"o\":8},\"arrow_double_up\":{\"a\":\"Black Up-Pointing Double Triangle\",\"b\":\"23EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"top\"],\"k\":[46,47]},\"chart\":{\"a\":\"Chart with Upwards Trend and Yen Sign\",\"b\":\"1F4B9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"green-square\",\"graph\",\"presentation\",\"stats\"],\"k\":[25,36]},\"flag-fo\":{\"a\":\"Faroe Islands Flag\",\"b\":\"1F1EB-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,5]},\"ant\":{\"a\":\"Ant\",\"b\":\"1F41C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"bug\"],\"k\":[13,6]},\"arrow_down_small\":{\"a\":\"Down-Pointing Small Red Triangle\",\"b\":\"1F53D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[28,11]},\"smiling_imp\":{\"a\":\"Smiling Face with Horns\",\"b\":\"1F608\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"devil\",\"horns\"],\"k\":[30,32]},\"taxi\":{\"a\":\"Taxi\",\"b\":\"1F695\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"uber\",\"vehicle\",\"cars\",\"transportation\"],\"k\":[34,29]},\"coffee\":{\"a\":\"Hot Beverage\",\"b\":\"2615\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"beverage\",\"caffeine\",\"latte\",\"espresso\"],\"k\":[47,24],\"o\":4},\"fr\":{\"a\":\"France Flag\",\"b\":\"1F1EB-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"banner\",\"flag\",\"nation\",\"france\",\"french\",\"country\"],\"k\":[2,6],\"n\":[\"flag-fr\"]},\"oncoming_taxi\":{\"a\":\"Oncoming Taxi\",\"b\":\"1F696\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"cars\",\"uber\"],\"k\":[34,30]},\"arrow_double_down\":{\"a\":\"Black Down-Pointing Double Triangle\",\"b\":\"23EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[46,48]},\"imp\":{\"a\":\"Imp\",\"b\":\"1F47F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"devil\",\"angry\",\"horns\"],\"k\":[22,51]},\"currency_exchange\":{\"a\":\"Currency Exchange\",\"b\":\"1F4B1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"travel\"],\"k\":[25,28]},\"tea\":{\"a\":\"Teacup Without Handle\",\"b\":\"1F375\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"drink\",\"bowl\",\"breakfast\",\"green\",\"british\"],\"k\":[8,3]},\"bee\":{\"a\":\"Honeybee\",\"b\":\"1F41D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[13,7],\"n\":[\"honeybee\"]},\"heavy_dollar_sign\":{\"a\":\"Heavy Dollar Sign\",\"b\":\"1F4B2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"money\",\"sales\",\"payment\",\"currency\",\"buck\"],\"k\":[25,29]},\"car\":{\"a\":\"Automobile\",\"b\":\"1F697\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[34,31],\"n\":[\"red_car\"]},\"sake\":{\"a\":\"Sake Bottle and Cup\",\"b\":\"1F376\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"wine\",\"drink\",\"drunk\",\"beverage\",\"japanese\",\"alcohol\",\"booze\"],\"k\":[8,4]},\"flag-ga\":{\"a\":\"Gabon Flag\",\"b\":\"1F1EC-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,7]},\"beetle\":{\"a\":\"Lady Beetle\",\"b\":\"1F41E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"ladybug\"],\"k\":[13,8]},\"japanese_ogre\":{\"a\":\"Japanese Ogre\",\"b\":\"1F479\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"monster\",\"red\",\"mask\",\"halloween\",\"scary\",\"creepy\",\"devil\",\"demon\",\"japanese\",\"ogre\"],\"k\":[22,40]},\"double_vertical_bar\":{\"a\":\"Double Vertical Bar\",\"b\":\"23F8-FE0F\",\"c\":\"23F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,4],\"o\":7},\"champagne\":{\"a\":\"Bottle with Popping Cork\",\"b\":\"1F37E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"drink\",\"wine\",\"bottle\",\"celebration\"],\"k\":[8,12],\"o\":8},\"japanese_goblin\":{\"a\":\"Japanese Goblin\",\"b\":\"1F47A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"red\",\"evil\",\"mask\",\"monster\",\"scary\",\"creepy\",\"japanese\",\"goblin\"],\"k\":[22,41]},\"black_square_for_stop\":{\"a\":\"Black Square for Stop\",\"b\":\"23F9-FE0F\",\"c\":\"23F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,5],\"o\":7},\"oncoming_automobile\":{\"a\":\"Oncoming Automobile\",\"b\":\"1F698\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"car\",\"vehicle\",\"transportation\"],\"k\":[34,32]},\"email\":{\"a\":\"Envelope\",\"b\":\"2709-FE0F\",\"c\":\"2709\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"letter\",\"postal\",\"inbox\",\"communication\"],\"k\":[49,17],\"n\":[\"envelope\"],\"o\":1},\"cricket\":{\"a\":\"Cricket\",\"b\":\"1F997\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\"],\"k\":[42,47],\"o\":10},\"gb\":{\"a\":\"United Kingdom Flag\",\"b\":\"1F1EC-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,8],\"n\":[\"uk\",\"flag-gb\"]},\"black_circle_for_record\":{\"a\":\"Black Circle for Record\",\"b\":\"23FA-FE0F\",\"c\":\"23FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,6],\"o\":7},\"flag-gd\":{\"a\":\"Grenada Flag\",\"b\":\"1F1EC-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,9]},\"spider\":{\"a\":\"Spider\",\"b\":\"1F577-FE0F\",\"c\":\"1F577\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"arachnid\"],\"k\":[29,18],\"o\":7},\"blue_car\":{\"a\":\"Recreational Vehicle\",\"b\":\"1F699\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,33]},\"skull\":{\"a\":\"Skull\",\"b\":\"1F480\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dead\",\"skeleton\",\"creepy\",\"death\"],\"k\":[23,0]},\"e-mail\":{\"a\":\"E-Mail Symbol\",\"b\":\"1F4E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"communication\",\"inbox\"],\"k\":[26,30]},\"wine_glass\":{\"a\":\"Wine Glass\",\"b\":\"1F377\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"booze\"],\"k\":[8,5]},\"spider_web\":{\"a\":\"Spider Web\",\"b\":\"1F578-FE0F\",\"c\":\"1F578\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"insect\",\"arachnid\",\"silk\"],\"k\":[29,19],\"o\":7},\"cocktail\":{\"a\":\"Cocktail Glass\",\"b\":\"1F378\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"drink\",\"drunk\",\"alcohol\",\"beverage\",\"booze\",\"mojito\"],\"k\":[8,6]},\"skull_and_crossbones\":{\"a\":\"Skull and Crossbones\",\"b\":\"2620-FE0F\",\"c\":\"2620\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"poison\",\"danger\",\"deadly\",\"scary\",\"death\",\"pirate\",\"evil\"],\"k\":[47,32],\"o\":1},\"flag-ge\":{\"a\":\"Georgia Flag\",\"b\":\"1F1EC-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,10]},\"eject\":{\"a\":\"Eject\",\"b\":\"23CF-FE0F\",\"c\":\"23CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,44],\"o\":4},\"truck\":{\"a\":\"Delivery Truck\",\"b\":\"1F69A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cars\",\"transportation\"],\"k\":[34,34]},\"incoming_envelope\":{\"a\":\"Incoming Envelope\",\"b\":\"1F4E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"inbox\"],\"k\":[26,31]},\"tropical_drink\":{\"a\":\"Tropical Drink\",\"b\":\"1F379\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"beverage\",\"cocktail\",\"summer\",\"beach\",\"alcohol\",\"booze\",\"mojito\"],\"k\":[8,7]},\"scorpion\":{\"a\":\"Scorpion\",\"b\":\"1F982\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"animal\",\"arachnid\"],\"k\":[42,26],\"o\":8},\"cinema\":{\"a\":\"Cinema\",\"b\":\"1F3A6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"record\",\"film\",\"movie\",\"curtain\",\"stage\",\"theater\"],\"k\":[9,0]},\"articulated_lorry\":{\"a\":\"Articulated Lorry\",\"b\":\"1F69B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"cars\",\"transportation\",\"express\"],\"k\":[34,35]},\"envelope_with_arrow\":{\"a\":\"Envelope with Downwards Arrow Above\",\"b\":\"1F4E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"communication\"],\"k\":[26,32]},\"ghost\":{\"a\":\"Ghost\",\"b\":\"1F47B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"halloween\",\"spooky\",\"scary\"],\"k\":[22,42]},\"flag-gf\":{\"a\":\"French Guiana Flag\",\"b\":\"1F1EC-1F1EB\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,11]},\"bouquet\":{\"a\":\"Bouquet\",\"b\":\"1F490\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"flowers\",\"nature\",\"spring\"],\"k\":[24,42]},\"tractor\":{\"a\":\"Tractor\",\"b\":\"1F69C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"car\",\"farming\",\"agriculture\"],\"k\":[34,36]},\"beer\":{\"a\":\"Beer Mug\",\"b\":\"1F37A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"k\":[8,8]},\"outbox_tray\":{\"a\":\"Outbox Tray\",\"b\":\"1F4E4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"inbox\",\"email\"],\"k\":[26,27]},\"low_brightness\":{\"a\":\"Low Brightness Symbol\",\"b\":\"1F505\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sun\",\"afternoon\",\"warm\",\"summer\"],\"k\":[27,7]},\"alien\":{\"a\":\"Extraterrestrial Alien\",\"b\":\"1F47D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"UFO\",\"paul\",\"weird\",\"outer_space\"],\"k\":[22,49]},\"flag-gg\":{\"a\":\"Guernsey Flag\",\"b\":\"1F1EC-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,12]},\"cherry_blossom\":{\"a\":\"Cherry Blossom\",\"b\":\"1F338\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\",\"spring\",\"flower\"],\"k\":[6,46]},\"inbox_tray\":{\"a\":\"Inbox Tray\",\"b\":\"1F4E5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"documents\"],\"k\":[26,28]},\"flag-gh\":{\"a\":\"Ghana Flag\",\"b\":\"1F1EC-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,13]},\"bike\":{\"a\":\"Bicycle\",\"b\":\"1F6B2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"bicycle\",\"exercise\",\"hipster\"],\"k\":[35,23]},\"space_invader\":{\"a\":\"Alien Monster\",\"b\":\"1F47E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"game\",\"arcade\",\"play\"],\"k\":[22,50]},\"beers\":{\"a\":\"Clinking Beer Mugs\",\"b\":\"1F37B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"k\":[8,9]},\"high_brightness\":{\"a\":\"High Brightness Symbol\",\"b\":\"1F506\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sun\",\"light\"],\"k\":[27,8]},\"package\":{\"a\":\"Package\",\"b\":\"1F4E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mail\",\"gift\",\"cardboard\",\"box\",\"moving\"],\"k\":[26,29]},\"scooter\":{\"a\":\"Scooter\",\"b\":\"1F6F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,19],\"o\":9},\"white_flower\":{\"a\":\"White Flower\",\"b\":\"1F4AE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"spring\"],\"k\":[25,25]},\"clinking_glasses\":{\"a\":\"Clinking Glasses\",\"b\":\"1F942\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"beverage\",\"drink\",\"party\",\"alcohol\",\"celebrate\",\"cheers\"],\"k\":[41,38],\"o\":9},\"robot_face\":{\"a\":\"Robot Face\",\"b\":\"1F916\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,30],\"o\":8},\"signal_strength\":{\"a\":\"Antenna with Bars\",\"b\":\"1F4F6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"reception\",\"phone\",\"internet\",\"connection\",\"wifi\",\"bluetooth\",\"bars\"],\"k\":[26,45]},\"flag-gi\":{\"a\":\"Gibraltar Flag\",\"b\":\"1F1EC-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,14]},\"flag-gl\":{\"a\":\"Greenland Flag\",\"b\":\"1F1EC-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,15]},\"motor_scooter\":{\"a\":\"Motor Scooter\",\"b\":\"1F6F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"vehicle\",\"vespa\",\"sasha\"],\"k\":[37,20],\"o\":9},\"mailbox\":{\"a\":\"Closed Mailbox with Raised Flag\",\"b\":\"1F4EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"inbox\",\"communication\"],\"k\":[26,34]},\"vibration_mode\":{\"a\":\"Vibration Mode\",\"b\":\"1F4F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"orange-square\",\"phone\"],\"k\":[26,42]},\"hankey\":{\"a\":\"Pile of Poo\",\"b\":\"1F4A9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[25,15],\"n\":[\"poop\",\"shit\"]},\"rosette\":{\"a\":\"Rosette\",\"b\":\"1F3F5-FE0F\",\"c\":\"1F3F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"flower\",\"decoration\",\"military\"],\"k\":[12,20],\"o\":7},\"tumbler_glass\":{\"a\":\"Tumbler Glass\",\"b\":\"1F943\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"liquor\",\"booze\",\"bourbon\",\"scotch\",\"whisky\",\"glass\",\"shot\"],\"k\":[41,39],\"o\":9},\"cup_with_straw\":{\"a\":\"Cup with Straw\",\"b\":\"1F964\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,16],\"o\":10},\"flag-gm\":{\"a\":\"Gambia Flag\",\"b\":\"1F1EC-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,16]},\"mailbox_closed\":{\"a\":\"Closed Mailbox with Lowered Flag\",\"b\":\"1F4EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"communication\",\"inbox\"],\"k\":[26,33]},\"mobile_phone_off\":{\"a\":\"Mobile Phone off\",\"b\":\"1F4F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mute\",\"orange-square\",\"silence\",\"quiet\"],\"k\":[26,43]},\"busstop\":{\"a\":\"Bus Stop\",\"b\":\"1F68F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"wait\"],\"k\":[34,23]},\"smiley_cat\":{\"a\":\"Smiling Cat Face with Open Mouth\",\"b\":\"1F63A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"happy\",\"smile\"],\"k\":[31,30]},\"rose\":{\"a\":\"Rose\",\"b\":\"1F339\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"flowers\",\"valentines\",\"love\",\"spring\"],\"k\":[6,47]},\"motorway\":{\"a\":\"Motorway\",\"b\":\"1F6E3-FE0F\",\"c\":\"1F6E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"road\",\"cupertino\",\"interstate\",\"highway\"],\"k\":[37,11],\"o\":7},\"smile_cat\":{\"a\":\"Grinning Cat Face with Smiling Eyes\",\"b\":\"1F638\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"smile\"],\"k\":[31,28]},\"flag-gn\":{\"a\":\"Guinea Flag\",\"b\":\"1F1EC-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,17]},\"wilted_flower\":{\"a\":\"Wilted Flower\",\"b\":\"1F940\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"plant\",\"nature\",\"flower\"],\"k\":[41,36],\"o\":9},\"mailbox_with_mail\":{\"a\":\"Open Mailbox with Raised Flag\",\"b\":\"1F4EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"inbox\",\"communication\"],\"k\":[26,35]},\"chopsticks\":{\"a\":\"Chopsticks\",\"b\":\"1F962\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,14],\"o\":10},\"female_sign\":{\"a\":\"Female Sign\",\"b\":\"2640-FE0F\",\"c\":\"2640\",\"d\":false,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,42],\"o\":1},\"mailbox_with_no_mail\":{\"a\":\"Open Mailbox with Lowered Flag\",\"b\":\"1F4ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"inbox\"],\"k\":[26,36]},\"knife_fork_plate\":{\"a\":\"Knife Fork Plate\",\"b\":\"1F37D-FE0F\",\"c\":\"1F37D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[8,11],\"o\":7},\"hibiscus\":{\"a\":\"Hibiscus\",\"b\":\"1F33A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"vegetable\",\"flowers\",\"beach\"],\"k\":[6,48]},\"flag-gp\":{\"a\":\"Guadeloupe Flag\",\"b\":\"1F1EC-1F1F5\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,18]},\"railway_track\":{\"a\":\"Railway Track\",\"b\":\"1F6E4-FE0F\",\"c\":\"1F6E4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"train\",\"transportation\"],\"k\":[37,12],\"o\":7},\"male_sign\":{\"a\":\"Male Sign\",\"b\":\"2642-FE0F\",\"c\":\"2642\",\"d\":false,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[47,43],\"o\":1},\"joy_cat\":{\"a\":\"Cat Face with Tears of Joy\",\"b\":\"1F639\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"haha\",\"happy\",\"tears\"],\"k\":[31,29]},\"fuelpump\":{\"a\":\"Fuel Pump\",\"b\":\"26FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"gas station\",\"petroleum\"],\"k\":[49,13],\"o\":5},\"sunflower\":{\"a\":\"Sunflower\",\"b\":\"1F33B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\",\"fall\"],\"k\":[6,49]},\"postbox\":{\"a\":\"Postbox\",\"b\":\"1F4EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"letter\",\"envelope\"],\"k\":[26,37]},\"flag-gq\":{\"a\":\"Equatorial Guinea Flag\",\"b\":\"1F1EC-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,19]},\"heart_eyes_cat\":{\"a\":\"Smiling Cat Face with Heart-Shaped Eyes\",\"b\":\"1F63B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"love\",\"like\",\"affection\",\"cats\",\"valentines\",\"heart\"],\"k\":[31,31]},\"fork_and_knife\":{\"a\":\"Fork and Knife\",\"b\":\"1F374\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cutlery\",\"kitchen\"],\"k\":[8,2]},\"medical_symbol\":{\"a\":\"Medical Symbol\",\"b\":\"2695-FE0F\",\"c\":\"2695\",\"d\":false,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[48,14],\"n\":[\"staff_of_aesculapius\"],\"o\":4},\"recycle\":{\"a\":\"Black Universal Recycling Symbol\",\"b\":\"267B-FE0F\",\"c\":\"267B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"arrow\",\"environment\",\"garbage\",\"trash\"],\"k\":[48,9],\"o\":3},\"spoon\":{\"a\":\"Spoon\",\"b\":\"1F944\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"cutlery\",\"kitchen\",\"tableware\"],\"k\":[41,40],\"o\":9},\"blossom\":{\"a\":\"Blossom\",\"b\":\"1F33C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"flowers\",\"yellow\"],\"k\":[6,50]},\"rotating_light\":{\"a\":\"Police Cars Revolving Light\",\"b\":\"1F6A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"police\",\"ambulance\",\"911\",\"emergency\",\"alert\",\"error\",\"pinged\",\"law\",\"legal\"],\"k\":[35,13]},\"smirk_cat\":{\"a\":\"Cat Face with Wry Smile\",\"b\":\"1F63C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"smirk\"],\"k\":[31,32]},\"ballot_box_with_ballot\":{\"a\":\"Ballot Box with Ballot\",\"b\":\"1F5F3-FE0F\",\"c\":\"1F5F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,17],\"o\":7},\"flag-gr\":{\"a\":\"Greece Flag\",\"b\":\"1F1EC-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,20]},\"kissing_cat\":{\"a\":\"Kissing Cat Face with Closed Eyes\",\"b\":\"1F63D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"kiss\"],\"k\":[31,33]},\"pencil2\":{\"a\":\"Pencil\",\"b\":\"270F-FE0F\",\"c\":\"270F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"write\",\"paper\",\"writing\",\"school\",\"study\"],\"k\":[49,42],\"o\":1},\"traffic_light\":{\"a\":\"Horizontal Traffic Light\",\"b\":\"1F6A5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"signal\"],\"k\":[35,10]},\"fleur_de_lis\":{\"a\":\"Fleur De Lis\",\"b\":\"269C-FE0F\",\"c\":\"269C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"decorative\",\"scout\"],\"k\":[48,19],\"o\":4},\"tulip\":{\"a\":\"Tulip\",\"b\":\"1F337\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"flowers\",\"plant\",\"nature\",\"summer\",\"spring\"],\"k\":[6,45]},\"hocho\":{\"a\":\"Hocho\",\"b\":\"1F52A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"knife\",\"blade\",\"cutlery\",\"kitchen\",\"weapon\"],\"k\":[27,44],\"n\":[\"knife\"]},\"flag-gs\":{\"a\":\"South Georgia & South Sandwich Islands Flag\",\"b\":\"1F1EC-1F1F8\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,21]},\"seedling\":{\"a\":\"Seedling\",\"b\":\"1F331\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"nature\",\"grass\",\"lawn\",\"spring\"],\"k\":[6,39]},\"amphora\":{\"a\":\"Amphora\",\"b\":\"1F3FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"vase\",\"jar\"],\"k\":[12,24],\"o\":8},\"scream_cat\":{\"a\":\"Weary Cat Face\",\"b\":\"1F640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\",\"munch\",\"scared\",\"scream\"],\"k\":[31,36]},\"vertical_traffic_light\":{\"a\":\"Vertical Traffic Light\",\"b\":\"1F6A6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"driving\"],\"k\":[35,11]},\"black_nib\":{\"a\":\"Black Nib\",\"b\":\"2712-FE0F\",\"c\":\"2712\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"pen\",\"stationery\",\"writing\",\"write\"],\"k\":[49,43],\"o\":1},\"flag-gt\":{\"a\":\"Guatemala Flag\",\"b\":\"1F1EC-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,22]},\"trident\":{\"a\":\"Trident Emblem\",\"b\":\"1F531\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weapon\",\"spear\"],\"k\":[27,51]},\"flag-gu\":{\"a\":\"Guam Flag\",\"b\":\"1F1EC-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,23]},\"name_badge\":{\"a\":\"Name Badge\",\"b\":\"1F4DB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fire\",\"forbid\"],\"k\":[26,18]},\"construction\":{\"a\":\"Construction Sign\",\"b\":\"1F6A7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"wip\",\"progress\",\"caution\",\"warning\"],\"k\":[35,12]},\"lower_left_fountain_pen\":{\"a\":\"Lower Left Fountain Pen\",\"b\":\"1F58B-FE0F\",\"c\":\"1F58B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,29],\"o\":7},\"evergreen_tree\":{\"a\":\"Evergreen Tree\",\"b\":\"1F332\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"nature\"],\"k\":[6,40]},\"crying_cat_face\":{\"a\":\"Crying Cat Face\",\"b\":\"1F63F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"tears\",\"weep\",\"sad\",\"cats\",\"upset\",\"cry\"],\"k\":[31,35]},\"flag-gw\":{\"a\":\"Guinea-Bissau Flag\",\"b\":\"1F1EC-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,24]},\"lower_left_ballpoint_pen\":{\"a\":\"Lower Left Ballpoint Pen\",\"b\":\"1F58A-FE0F\",\"c\":\"1F58A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,28],\"o\":7},\"pouting_cat\":{\"a\":\"Pouting Cat Face\",\"b\":\"1F63E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"cats\"],\"k\":[31,34]},\"deciduous_tree\":{\"a\":\"Deciduous Tree\",\"b\":\"1F333\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"nature\"],\"k\":[6,41]},\"octagonal_sign\":{\"a\":\"Octagonal Sign\",\"b\":\"1F6D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,6],\"o\":9},\"beginner\":{\"a\":\"Japanese Symbol for Beginner\",\"b\":\"1F530\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"badge\",\"shield\"],\"k\":[27,50]},\"flag-gy\":{\"a\":\"Guyana Flag\",\"b\":\"1F1EC-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,25]},\"lower_left_paintbrush\":{\"a\":\"Lower Left Paintbrush\",\"b\":\"1F58C-FE0F\",\"c\":\"1F58C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,30],\"o\":7},\"o\":{\"a\":\"Heavy Large Circle\",\"b\":\"2B55\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"circle\",\"round\"],\"k\":[50,23],\"o\":5},\"palm_tree\":{\"a\":\"Palm Tree\",\"b\":\"1F334\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"plant\",\"vegetable\",\"nature\",\"summer\",\"beach\",\"mojito\",\"tropical\"],\"k\":[6,42]},\"anchor\":{\"a\":\"Anchor\",\"b\":\"2693\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"ship\",\"ferry\",\"sea\",\"boat\"],\"k\":[48,12],\"o\":4},\"see_no_evil\":{\"a\":\"See-No-Evil Monkey\",\"b\":\"1F648\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"monkey\",\"animal\",\"nature\",\"haha\"],\"k\":[32,43]},\"boat\":{\"a\":\"Sailboat\",\"b\":\"26F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[48,43],\"n\":[\"sailboat\"],\"o\":5},\"white_check_mark\":{\"a\":\"White Heavy Check Mark\",\"b\":\"2705\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"green-square\",\"ok\",\"agree\",\"vote\",\"election\",\"answer\",\"tick\"],\"k\":[49,15]},\"flag-hk\":{\"a\":\"Hong Kong Sar China Flag\",\"b\":\"1F1ED-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,26]},\"lower_left_crayon\":{\"a\":\"Lower Left Crayon\",\"b\":\"1F58D-FE0F\",\"c\":\"1F58D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,31],\"o\":7},\"hear_no_evil\":{\"a\":\"Hear-No-Evil Monkey\",\"b\":\"1F649\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"monkey\",\"nature\"],\"k\":[32,44]},\"cactus\":{\"a\":\"Cactus\",\"b\":\"1F335\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vegetable\",\"plant\",\"nature\"],\"k\":[6,43]},\"ear_of_rice\":{\"a\":\"Ear of Rice\",\"b\":\"1F33E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\"],\"k\":[7,0]},\"speak_no_evil\":{\"a\":\"Speak-No-Evil Monkey\",\"b\":\"1F64A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"monkey\",\"animal\",\"nature\",\"omg\"],\"k\":[32,45]},\"flag-hm\":{\"a\":\"Heard & Mcdonald Islands Flag\",\"b\":\"1F1ED-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,27]},\"ballot_box_with_check\":{\"a\":\"Ballot Box with Check\",\"b\":\"2611-FE0F\",\"c\":\"2611\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"ok\",\"agree\",\"confirm\",\"black-square\",\"vote\",\"election\",\"yes\",\"tick\"],\"k\":[47,22],\"o\":1},\"canoe\":{\"a\":\"Canoe\",\"b\":\"1F6F6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"boat\",\"paddle\",\"water\",\"ship\"],\"k\":[37,21],\"o\":9},\"memo\":{\"a\":\"Memo\",\"b\":\"1F4DD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"write\",\"documents\",\"stationery\",\"pencil\",\"paper\",\"writing\",\"legal\",\"exam\",\"quiz\",\"test\",\"study\",\"compose\"],\"k\":[26,20],\"n\":[\"pencil\"]},\"herb\":{\"a\":\"Herb\",\"b\":\"1F33F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vegetable\",\"plant\",\"medicine\",\"weed\",\"grass\",\"lawn\"],\"k\":[7,1]},\"flag-hn\":{\"a\":\"Honduras Flag\",\"b\":\"1F1ED-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,28]},\"heavy_check_mark\":{\"a\":\"Heavy Check Mark\",\"b\":\"2714-FE0F\",\"c\":\"2714\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"ok\",\"nike\",\"answer\",\"yes\",\"tick\"],\"k\":[49,44],\"o\":1},\"briefcase\":{\"a\":\"Briefcase\",\"b\":\"1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"business\",\"documents\",\"work\",\"law\",\"legal\",\"job\",\"career\"],\"k\":[25,39]},\"speedboat\":{\"a\":\"Speedboat\",\"b\":\"1F6A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"ship\",\"transportation\",\"vehicle\",\"summer\"],\"k\":[35,9]},\"baby\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F476-1F3FB\",\"non_qualified\":null,\"image\":\"1f476-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F476-1F3FC\",\"non_qualified\":null,\"image\":\"1f476-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F476-1F3FD\",\"non_qualified\":null,\"image\":\"1f476-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F476-1F3FE\",\"non_qualified\":null,\"image\":\"1f476-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F476-1F3FF\",\"non_qualified\":null,\"image\":\"1f476-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Baby\",\"b\":\"1F476\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"child\",\"boy\",\"girl\",\"toddler\"],\"k\":[22,10]},\"heavy_multiplication_x\":{\"a\":\"Heavy Multiplication X\",\"b\":\"2716-FE0F\",\"c\":\"2716\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"math\",\"calculation\"],\"k\":[49,45],\"o\":1},\"child\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D2-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":5,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D2-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":6,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D2-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":7,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D2-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":8,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D2-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d2-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":9,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Child\",\"b\":\"1F9D2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,4],\"o\":10},\"shamrock\":{\"a\":\"Shamrock\",\"b\":\"2618-FE0F\",\"c\":\"2618\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"vegetable\",\"plant\",\"nature\",\"irish\",\"clover\"],\"k\":[47,25],\"o\":4},\"passenger_ship\":{\"a\":\"Passenger Ship\",\"b\":\"1F6F3-FE0F\",\"c\":\"1F6F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"yacht\",\"cruise\",\"ferry\"],\"k\":[37,18],\"o\":7},\"flag-hr\":{\"a\":\"Croatia Flag\",\"b\":\"1F1ED-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,29]},\"file_folder\":{\"a\":\"File Folder\",\"b\":\"1F4C1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"business\",\"office\"],\"k\":[25,44]},\"x\":{\"a\":\"Cross Mark\",\"b\":\"274C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"no\",\"delete\",\"remove\",\"cancel\"],\"k\":[50,1]},\"four_leaf_clover\":{\"a\":\"Four Leaf Clover\",\"b\":\"1F340\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vegetable\",\"plant\",\"nature\",\"lucky\",\"irish\"],\"k\":[7,2]},\"open_file_folder\":{\"a\":\"Open File Folder\",\"b\":\"1F4C2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"load\"],\"k\":[25,45]},\"boy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F466-1F3FB\",\"non_qualified\":null,\"image\":\"1f466-1f3fb.png\",\"sheet_x\":15,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F466-1F3FC\",\"non_qualified\":null,\"image\":\"1f466-1f3fc.png\",\"sheet_x\":15,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F466-1F3FD\",\"non_qualified\":null,\"image\":\"1f466-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F466-1F3FE\",\"non_qualified\":null,\"image\":\"1f466-1f3fe.png\",\"sheet_x\":15,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F466-1F3FF\",\"non_qualified\":null,\"image\":\"1f466-1f3ff.png\",\"sheet_x\":15,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Boy\",\"b\":\"1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"man\",\"male\",\"guy\",\"teenager\"],\"k\":[15,42]},\"ferry\":{\"a\":\"Ferry\",\"b\":\"26F4-FE0F\",\"c\":\"26F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"boat\",\"ship\",\"yacht\"],\"k\":[48,42],\"o\":5},\"flag-ht\":{\"a\":\"Haiti Flag\",\"b\":\"1F1ED-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,30]},\"girl\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F467-1F3FB\",\"non_qualified\":null,\"image\":\"1f467-1f3fb.png\",\"sheet_x\":15,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F467-1F3FC\",\"non_qualified\":null,\"image\":\"1f467-1f3fc.png\",\"sheet_x\":15,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F467-1F3FD\",\"non_qualified\":null,\"image\":\"1f467-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F467-1F3FE\",\"non_qualified\":null,\"image\":\"1f467-1f3fe.png\",\"sheet_x\":16,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F467-1F3FF\",\"non_qualified\":null,\"image\":\"1f467-1f3ff.png\",\"sheet_x\":16,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Girl\",\"b\":\"1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"female\",\"woman\",\"teenager\"],\"k\":[15,48]},\"negative_squared_cross_mark\":{\"a\":\"Negative Squared Cross Mark\",\"b\":\"274E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"x\",\"green-square\",\"no\",\"deny\"],\"k\":[50,2]},\"flag-hu\":{\"a\":\"Hungary Flag\",\"b\":\"1F1ED-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,31]},\"card_index_dividers\":{\"a\":\"Card Index Dividers\",\"b\":\"1F5C2-FE0F\",\"c\":\"1F5C2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"organizing\",\"business\",\"stationery\"],\"k\":[30,4],\"o\":7},\"maple_leaf\":{\"a\":\"Maple Leaf\",\"b\":\"1F341\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\",\"vegetable\",\"ca\",\"fall\"],\"k\":[7,3]},\"motor_boat\":{\"a\":\"Motor Boat\",\"b\":\"1F6E5-FE0F\",\"c\":\"1F6E5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"ship\"],\"k\":[37,13],\"o\":7},\"flag-ic\":{\"a\":\"Canary Islands Flag\",\"b\":\"1F1EE-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,32]},\"fallen_leaf\":{\"a\":\"Fallen Leaf\",\"b\":\"1F342\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\",\"vegetable\",\"leaves\"],\"k\":[7,4]},\"adult\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb.png\",\"sheet_x\":42,\"sheet_y\":51,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":0,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":1,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":2,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":3,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Adult\",\"b\":\"1F9D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[42,50],\"o\":10},\"ship\":{\"a\":\"Ship\",\"b\":\"1F6A2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"titanic\",\"deploy\"],\"k\":[34,42]},\"heavy_plus_sign\":{\"a\":\"Heavy Plus Sign\",\"b\":\"2795\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"math\",\"calculation\",\"addition\",\"more\",\"increase\"],\"k\":[50,9]},\"date\":{\"a\":\"Calendar\",\"b\":\"1F4C5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"calendar\",\"schedule\"],\"k\":[25,48]},\"man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb.png\",\"sheet_x\":18,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3fc.png\",\"sheet_x\":18,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3fd.png\",\"sheet_x\":18,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3fe.png\",\"sheet_x\":18,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3ff.png\",\"sheet_x\":18,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Man\",\"b\":\"1F468\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mustache\",\"father\",\"dad\",\"guy\",\"classy\",\"sir\",\"moustache\"],\"k\":[18,11]},\"flag-id\":{\"a\":\"Indonesia Flag\",\"b\":\"1F1EE-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,33]},\"leaves\":{\"a\":\"Leaf Fluttering in Wind\",\"b\":\"1F343\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"plant\",\"tree\",\"vegetable\",\"grass\",\"lawn\",\"spring\"],\"k\":[7,5]},\"heavy_minus_sign\":{\"a\":\"Heavy Minus Sign\",\"b\":\"2796\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"math\",\"calculation\",\"subtract\",\"less\"],\"k\":[50,10]},\"calendar\":{\"a\":\"Tear-off Calendar\",\"b\":\"1F4C6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"schedule\",\"date\",\"planning\"],\"k\":[25,49]},\"airplane\":{\"a\":\"Airplane\",\"b\":\"2708-FE0F\",\"c\":\"2708\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"transportation\",\"flight\",\"fly\"],\"k\":[49,16],\"o\":1},\"spiral_note_pad\":{\"a\":\"Spiral Note Pad\",\"b\":\"1F5D2-FE0F\",\"c\":\"1F5D2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,8],\"o\":7},\"heavy_division_sign\":{\"a\":\"Heavy Division Sign\",\"b\":\"2797\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"divide\",\"math\",\"calculation\"],\"k\":[50,11]},\"small_airplane\":{\"a\":\"Small Airplane\",\"b\":\"1F6E9-FE0F\",\"c\":\"1F6E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"flight\",\"transportation\",\"fly\",\"vehicle\"],\"k\":[37,14],\"o\":7},\"woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Woman\",\"b\":\"1F469\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"female\",\"girls\",\"lady\"],\"k\":[20,23]},\"flag-ie\":{\"a\":\"Ireland Flag\",\"b\":\"1F1EE-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,34]},\"curly_loop\":{\"a\":\"Curly Loop\",\"b\":\"27B0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"scribble\",\"draw\",\"shape\",\"squiggle\"],\"k\":[50,13]},\"flag-il\":{\"a\":\"Israel Flag\",\"b\":\"1F1EE-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,35]},\"airplane_departure\":{\"a\":\"Airplane Departure\",\"b\":\"1F6EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,15],\"o\":7},\"spiral_calendar_pad\":{\"a\":\"Spiral Calendar Pad\",\"b\":\"1F5D3-FE0F\",\"c\":\"1F5D3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,9],\"o\":7},\"older_adult\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D3-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":11,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D3-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":12,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D3-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":13,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D3-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":14,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D3-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d3-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":15,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Older Adult\",\"b\":\"1F9D3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,10],\"o\":10},\"airplane_arriving\":{\"a\":\"Airplane Arriving\",\"b\":\"1F6EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,16],\"o\":7},\"card_index\":{\"a\":\"Card Index\",\"b\":\"1F4C7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"business\",\"stationery\"],\"k\":[25,50]},\"loop\":{\"a\":\"Double Curly Loop\",\"b\":\"27BF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"tape\",\"cassette\"],\"k\":[50,14]},\"older_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F474-1F3FB\",\"non_qualified\":null,\"image\":\"1f474-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F474-1F3FC\",\"non_qualified\":null,\"image\":\"1f474-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F474-1F3FD\",\"non_qualified\":null,\"image\":\"1f474-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F474-1F3FE\",\"non_qualified\":null,\"image\":\"1f474-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F474-1F3FF\",\"non_qualified\":null,\"image\":\"1f474-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Older Man\",\"b\":\"1F474\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"human\",\"male\",\"men\",\"old\",\"elder\",\"senior\"],\"k\":[21,50]},\"flag-im\":{\"a\":\"Isle of Man Flag\",\"b\":\"1F1EE-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,36]},\"flag-in\":{\"a\":\"India Flag\",\"b\":\"1F1EE-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,37]},\"chart_with_upwards_trend\":{\"a\":\"Chart with Upwards Trend\",\"b\":\"1F4C8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"recovery\",\"business\",\"economics\",\"money\",\"sales\",\"good\",\"success\"],\"k\":[25,51]},\"part_alternation_mark\":{\"a\":\"Part Alternation Mark\",\"b\":\"303D-FE0F\",\"c\":\"303D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"business\",\"economics\",\"bad\"],\"k\":[50,25],\"o\":3},\"seat\":{\"a\":\"Seat\",\"b\":\"1F4BA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sit\",\"airplane\",\"transport\",\"bus\",\"flight\",\"fly\"],\"k\":[25,37]},\"older_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F475-1F3FB\",\"non_qualified\":null,\"image\":\"1f475-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F475-1F3FC\",\"non_qualified\":null,\"image\":\"1f475-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F475-1F3FD\",\"non_qualified\":null,\"image\":\"1f475-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F475-1F3FE\",\"non_qualified\":null,\"image\":\"1f475-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F475-1F3FF\",\"non_qualified\":null,\"image\":\"1f475-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Older Woman\",\"b\":\"1F475\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"human\",\"female\",\"women\",\"lady\",\"old\",\"elder\",\"senior\"],\"k\":[22,4]},\"eight_spoked_asterisk\":{\"a\":\"Eight Spoked Asterisk\",\"b\":\"2733-FE0F\",\"c\":\"2733\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"star\",\"sparkle\",\"green-square\"],\"k\":[49,49],\"o\":1},\"chart_with_downwards_trend\":{\"a\":\"Chart with Downwards Trend\",\"b\":\"1F4C9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"recession\",\"business\",\"economics\",\"money\",\"sales\",\"bad\",\"failure\"],\"k\":[26,0]},\"flag-io\":{\"a\":\"British Indian Ocean Territory Flag\",\"b\":\"1F1EE-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,38]},\"male-doctor\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2695\",\"image\":\"1f468-1f3fb-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2695\",\"image\":\"1f468-1f3fc-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2695\",\"image\":\"1f468-1f3fd-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2695\",\"image\":\"1f468-1f3fe-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2695\",\"image\":\"1f468-1f3ff-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Doctor\",\"b\":\"1F468-200D-2695-FE0F\",\"c\":\"1F468-200D-2695\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,43]},\"helicopter\":{\"a\":\"Helicopter\",\"b\":\"1F681\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"fly\"],\"k\":[34,9]},\"female-doctor\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2695\",\"image\":\"1f469-1f3fb-200d-2695-fe0f.png\",\"sheet_x\":20,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2695\",\"image\":\"1f469-1f3fc-200d-2695-fe0f.png\",\"sheet_x\":20,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2695\",\"image\":\"1f469-1f3fd-200d-2695-fe0f.png\",\"sheet_x\":20,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2695\",\"image\":\"1f469-1f3fe-200d-2695-fe0f.png\",\"sheet_x\":20,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2695\",\"image\":\"1f469-1f3ff-200d-2695-fe0f.png\",\"sheet_x\":20,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Doctor\",\"b\":\"1F469-200D-2695-FE0F\",\"c\":\"1F469-200D-2695\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,1]},\"suspension_railway\":{\"a\":\"Suspension Railway\",\"b\":\"1F69F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"vehicle\",\"transportation\"],\"k\":[34,39]},\"bar_chart\":{\"a\":\"Bar Chart\",\"b\":\"1F4CA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"graph\",\"presentation\",\"stats\"],\"k\":[26,1]},\"flag-iq\":{\"a\":\"Iraq Flag\",\"b\":\"1F1EE-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,39]},\"eight_pointed_black_star\":{\"a\":\"Eight Pointed Black Star\",\"b\":\"2734-FE0F\",\"c\":\"2734\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"orange-square\",\"shape\",\"polygon\"],\"k\":[49,50],\"o\":1},\"mountain_cableway\":{\"a\":\"Mountain Cableway\",\"b\":\"1F6A0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"ski\"],\"k\":[34,40]},\"male-student\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f393.png\",\"sheet_x\":16,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f393.png\",\"sheet_x\":16,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f393.png\",\"sheet_x\":16,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f393.png\",\"sheet_x\":16,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f393.png\",\"sheet_x\":16,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Student\",\"b\":\"1F468-200D-1F393\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,14]},\"clipboard\":{\"a\":\"Clipboard\",\"b\":\"1F4CB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"documents\"],\"k\":[26,2]},\"flag-ir\":{\"a\":\"Iran Flag\",\"b\":\"1F1EE-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,40]},\"sparkle\":{\"a\":\"Sparkle\",\"b\":\"2747-FE0F\",\"c\":\"2747\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stars\",\"green-square\",\"awesome\",\"good\",\"fireworks\"],\"k\":[50,0],\"o\":1},\"female-student\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f393.png\",\"sheet_x\":18,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f393.png\",\"sheet_x\":18,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f393.png\",\"sheet_x\":18,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f393.png\",\"sheet_x\":18,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f393.png\",\"sheet_x\":18,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Student\",\"b\":\"1F469-200D-1F393\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,29]},\"pushpin\":{\"a\":\"Pushpin\",\"b\":\"1F4CC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"mark\",\"here\"],\"k\":[26,3]},\"aerial_tramway\":{\"a\":\"Aerial Tramway\",\"b\":\"1F6A1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"transportation\",\"vehicle\",\"ski\"],\"k\":[34,41]},\"flag-is\":{\"a\":\"Iceland Flag\",\"b\":\"1F1EE-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,41]},\"bangbang\":{\"a\":\"Double Exclamation Mark\",\"b\":\"203C-FE0F\",\"c\":\"203C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"exclamation\",\"surprise\"],\"k\":[46,29],\"o\":1},\"interrobang\":{\"a\":\"Exclamation Question Mark\",\"b\":\"2049-FE0F\",\"c\":\"2049\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"wat\",\"punctuation\",\"surprise\"],\"k\":[46,30],\"o\":3},\"satellite\":{\"a\":\"Satellite\",\"b\":\"1F6F0-FE0F\",\"c\":\"1F6F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"communication\",\"future\",\"radio\",\"space\"],\"k\":[37,17],\"o\":7},\"it\":{\"a\":\"Italy Flag\",\"b\":\"1F1EE-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"italy\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[2,42],\"n\":[\"flag-it\"]},\"male-teacher\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3eb.png\",\"sheet_x\":16,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3eb.png\",\"sheet_x\":16,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3eb.png\",\"sheet_x\":16,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3eb.png\",\"sheet_x\":16,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3eb.png\",\"sheet_x\":16,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Teacher\",\"b\":\"1F468-200D-1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,32]},\"round_pushpin\":{\"a\":\"Round Pushpin\",\"b\":\"1F4CD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"location\",\"map\",\"here\"],\"k\":[26,4]},\"flag-je\":{\"a\":\"Jersey Flag\",\"b\":\"1F1EF-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,43]},\"question\":{\"a\":\"Black Question Mark Ornament\",\"b\":\"2753\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"doubt\",\"confused\"],\"k\":[50,3]},\"rocket\":{\"a\":\"Rocket\",\"b\":\"1F680\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"launch\",\"ship\",\"staffmode\",\"NASA\",\"outer space\",\"outer_space\",\"fly\"],\"k\":[34,8]},\"female-teacher\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3eb.png\",\"sheet_x\":19,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Teacher\",\"b\":\"1F469-200D-1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,47]},\"paperclip\":{\"a\":\"Paperclip\",\"b\":\"1F4CE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"documents\",\"stationery\"],\"k\":[26,5]},\"linked_paperclips\":{\"a\":\"Linked Paperclips\",\"b\":\"1F587-FE0F\",\"c\":\"1F587\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,27],\"o\":7},\"flying_saucer\":{\"a\":\"Flying Saucer\",\"b\":\"1F6F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,23],\"o\":10},\"male-judge\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2696\",\"image\":\"1f468-1f3fb-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2696\",\"image\":\"1f468-1f3fc-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2696\",\"image\":\"1f468-1f3fd-200d-2696-fe0f.png\",\"sheet_x\":18,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2696\",\"image\":\"1f468-1f3fe-200d-2696-fe0f.png\",\"sheet_x\":18,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2696\",\"image\":\"1f468-1f3ff-200d-2696-fe0f.png\",\"sheet_x\":18,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Judge\",\"b\":\"1F468-200D-2696-FE0F\",\"c\":\"1F468-200D-2696\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,49]},\"grey_question\":{\"a\":\"White Question Mark Ornament\",\"b\":\"2754\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"doubts\",\"gray\",\"huh\",\"confused\"],\"k\":[50,4]},\"flag-jm\":{\"a\":\"Jamaica Flag\",\"b\":\"1F1EF-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,44]},\"bellhop_bell\":{\"a\":\"Bellhop Bell\",\"b\":\"1F6CE-FE0F\",\"c\":\"1F6CE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"service\"],\"k\":[37,3],\"o\":7},\"straight_ruler\":{\"a\":\"Straight Ruler\",\"b\":\"1F4CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"calculate\",\"length\",\"math\",\"school\",\"drawing\",\"architect\",\"sketch\"],\"k\":[26,6]},\"flag-jo\":{\"a\":\"Jordan Flag\",\"b\":\"1F1EF-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,45]},\"female-judge\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2696\",\"image\":\"1f469-1f3fb-200d-2696-fe0f.png\",\"sheet_x\":20,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2696\",\"image\":\"1f469-1f3fc-200d-2696-fe0f.png\",\"sheet_x\":20,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2696\",\"image\":\"1f469-1f3fd-200d-2696-fe0f.png\",\"sheet_x\":20,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2696\",\"image\":\"1f469-1f3fe-200d-2696-fe0f.png\",\"sheet_x\":20,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2696\",\"image\":\"1f469-1f3ff-200d-2696-fe0f.png\",\"sheet_x\":20,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Judge\",\"b\":\"1F469-200D-2696-FE0F\",\"c\":\"1F469-200D-2696\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,7]},\"grey_exclamation\":{\"a\":\"White Exclamation Mark Ornament\",\"b\":\"2755\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"surprise\",\"punctuation\",\"gray\",\"wow\",\"warning\"],\"k\":[50,5]},\"door\":{\"a\":\"Door\",\"b\":\"1F6AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"house\",\"entry\",\"exit\"],\"k\":[35,15]},\"male-farmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f33e.png\",\"sheet_x\":16,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f33e.png\",\"sheet_x\":16,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f33e.png\",\"sheet_x\":16,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f33e.png\",\"sheet_x\":16,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f33e.png\",\"sheet_x\":16,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Farmer\",\"b\":\"1F468-200D-1F33E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,2]},\"jp\":{\"a\":\"Japan Flag\",\"b\":\"1F1EF-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[2,46],\"n\":[\"flag-jp\"]},\"triangular_ruler\":{\"a\":\"Triangular Ruler\",\"b\":\"1F4D0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"math\",\"architect\",\"sketch\"],\"k\":[26,7]},\"exclamation\":{\"a\":\"Heavy Exclamation Mark Symbol\",\"b\":\"2757\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"heavy_exclamation_mark\",\"danger\",\"surprise\",\"punctuation\",\"wow\",\"warning\"],\"k\":[50,6],\"n\":[\"heavy_exclamation_mark\"],\"o\":5},\"bed\":{\"a\":\"Bed\",\"b\":\"1F6CF-FE0F\",\"c\":\"1F6CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sleep\",\"rest\"],\"k\":[37,4],\"o\":7},\"female-farmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f33e.png\",\"sheet_x\":18,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f33e.png\",\"sheet_x\":18,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f33e.png\",\"sheet_x\":18,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f33e.png\",\"sheet_x\":18,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f33e.png\",\"sheet_x\":18,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Farmer\",\"b\":\"1F469-200D-1F33E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,17]},\"scissors\":{\"a\":\"Black Scissors\",\"b\":\"2702-FE0F\",\"c\":\"2702\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"stationery\",\"cut\"],\"k\":[49,14],\"o\":1},\"wavy_dash\":{\"a\":\"Wavy Dash\",\"b\":\"3030-FE0F\",\"c\":\"3030\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"draw\",\"line\",\"moustache\",\"mustache\",\"squiggle\",\"scribble\"],\"k\":[50,24],\"o\":1},\"flag-ke\":{\"a\":\"Kenya Flag\",\"b\":\"1F1F0-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,47]},\"flag-kg\":{\"a\":\"Kyrgyzstan Flag\",\"b\":\"1F1F0-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,48]},\"couch_and_lamp\":{\"a\":\"Couch and Lamp\",\"b\":\"1F6CB-FE0F\",\"c\":\"1F6CB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"read\",\"chill\"],\"k\":[36,47],\"o\":7},\"male-cook\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f373.png\",\"sheet_x\":16,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f373.png\",\"sheet_x\":16,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f373.png\",\"sheet_x\":16,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f373.png\",\"sheet_x\":16,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f373.png\",\"sheet_x\":16,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Cook\",\"b\":\"1F468-200D-1F373\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,8]},\"card_file_box\":{\"a\":\"Card File Box\",\"b\":\"1F5C3-FE0F\",\"c\":\"1F5C3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"business\",\"stationery\"],\"k\":[30,5],\"o\":7},\"copyright\":{\"a\":\"Copyright Sign\",\"b\":\"00A9-FE0F\",\"c\":\"00A9\",\"d\":true,\"e\":true,\"f\":false,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"ip\",\"license\",\"circle\",\"law\",\"legal\"],\"k\":[0,12],\"o\":1},\"file_cabinet\":{\"a\":\"File Cabinet\",\"b\":\"1F5C4-FE0F\",\"c\":\"1F5C4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"filing\",\"organizing\"],\"k\":[30,6],\"o\":7},\"registered\":{\"a\":\"Registered Sign\",\"b\":\"00AE-FE0F\",\"c\":\"00AE\",\"d\":true,\"e\":true,\"f\":false,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"alphabet\",\"circle\"],\"k\":[0,13],\"o\":1},\"flag-kh\":{\"a\":\"Cambodia Flag\",\"b\":\"1F1F0-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,49]},\"female-cook\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f373.png\",\"sheet_x\":18,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f373.png\",\"sheet_x\":18,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f373.png\",\"sheet_x\":18,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f373.png\",\"sheet_x\":18,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f373.png\",\"sheet_x\":18,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Cook\",\"b\":\"1F469-200D-1F373\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,23]},\"toilet\":{\"a\":\"Toilet\",\"b\":\"1F6BD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"restroom\",\"wc\",\"washroom\",\"bathroom\",\"potty\"],\"k\":[36,33]},\"wastebasket\":{\"a\":\"Wastebasket\",\"b\":\"1F5D1-FE0F\",\"c\":\"1F5D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"bin\",\"trash\",\"rubbish\",\"garbage\",\"toss\"],\"k\":[30,7],\"o\":7},\"flag-ki\":{\"a\":\"Kiribati Flag\",\"b\":\"1F1F0-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,50]},\"shower\":{\"a\":\"Shower\",\"b\":\"1F6BF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"clean\",\"water\",\"bathroom\"],\"k\":[36,35]},\"male-mechanic\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f527.png\",\"sheet_x\":17,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f527.png\",\"sheet_x\":17,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f527.png\",\"sheet_x\":17,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f527.png\",\"sheet_x\":17,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f527.png\",\"sheet_x\":17,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Mechanic\",\"b\":\"1F468-200D-1F527\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,19]},\"tm\":{\"a\":\"Trade Mark Sign\",\"b\":\"2122-FE0F\",\"c\":\"2122\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"trademark\",\"brand\",\"law\",\"legal\"],\"k\":[46,31],\"o\":1},\"hash\":{\"a\":\"Hash Key\",\"b\":\"0023-FE0F-20E3\",\"c\":\"0023-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"symbol\",\"blue-square\",\"twitter\"],\"k\":[0,0],\"o\":3},\"flag-km\":{\"a\":\"Comoros Flag\",\"b\":\"1F1F0-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[2,51]},\"bathtub\":{\"a\":\"Bathtub\",\"b\":\"1F6C1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"clean\",\"shower\",\"bathroom\"],\"k\":[36,42]},\"female-mechanic\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f527.png\",\"sheet_x\":19,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f527.png\",\"sheet_x\":19,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f527.png\",\"sheet_x\":19,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f527.png\",\"sheet_x\":19,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f527.png\",\"sheet_x\":19,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Mechanic\",\"b\":\"1F469-200D-1F527\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,29]},\"lock\":{\"a\":\"Lock\",\"b\":\"1F512\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"security\",\"password\",\"padlock\"],\"k\":[27,20]},\"male-factory-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3ed.png\",\"sheet_x\":16,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3ed.png\",\"sheet_x\":16,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3ed.png\",\"sheet_x\":16,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3ed.png\",\"sheet_x\":16,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3ed.png\",\"sheet_x\":16,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Factory Worker\",\"b\":\"1F468-200D-1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,38]},\"flag-kn\":{\"a\":\"St. Kitts & Nevis Flag\",\"b\":\"1F1F0-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,0]},\"hourglass\":{\"a\":\"Hourglass\",\"b\":\"231B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"clock\",\"oldschool\",\"limit\",\"exam\",\"quiz\",\"test\"],\"k\":[46,42],\"o\":1},\"keycap_star\":{\"a\":\"Keycap Star\",\"b\":\"002A-FE0F-20E3\",\"c\":\"002A-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[0,1],\"o\":3},\"unlock\":{\"a\":\"Open Lock\",\"b\":\"1F513\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"privacy\",\"security\"],\"k\":[27,21]},\"flag-kp\":{\"a\":\"North Korea Flag\",\"b\":\"1F1F0-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,1]},\"female-factory-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3ed.png\",\"sheet_x\":19,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3ed.png\",\"sheet_x\":19,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3ed.png\",\"sheet_x\":19,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3ed.png\",\"sheet_x\":19,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3ed.png\",\"sheet_x\":19,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Factory Worker\",\"b\":\"1F469-200D-1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,1]},\"zero\":{\"a\":\"Keycap 0\",\"b\":\"0030-FE0F-20E3\",\"c\":\"0030-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"0\",\"numbers\",\"blue-square\",\"null\"],\"k\":[0,2],\"o\":3},\"lock_with_ink_pen\":{\"a\":\"Lock with Ink Pen\",\"b\":\"1F50F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"security\",\"secret\"],\"k\":[27,17]},\"hourglass_flowing_sand\":{\"a\":\"Hourglass with Flowing Sand\",\"b\":\"23F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"oldschool\",\"time\",\"countdown\"],\"k\":[47,3]},\"one\":{\"a\":\"Keycap 1\",\"b\":\"0031-FE0F-20E3\",\"c\":\"0031-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"blue-square\",\"numbers\",\"1\"],\"k\":[0,3],\"o\":3},\"kr\":{\"a\":\"South Korea Flag\",\"b\":\"1F1F0-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"south\",\"korea\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[3,2],\"n\":[\"flag-kr\"]},\"watch\":{\"a\":\"Watch\",\"b\":\"231A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"accessories\"],\"k\":[46,41],\"o\":1},\"male-office-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f4bc.png\",\"sheet_x\":17,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f4bc.png\",\"sheet_x\":17,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f4bc.png\",\"sheet_x\":17,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f4bc.png\",\"sheet_x\":17,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f4bc.png\",\"sheet_x\":17,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Office Worker\",\"b\":\"1F468-200D-1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,13]},\"closed_lock_with_key\":{\"a\":\"Closed Lock with Key\",\"b\":\"1F510\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"security\",\"privacy\"],\"k\":[27,18]},\"female-office-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f4bc.png\",\"sheet_x\":19,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f4bc.png\",\"sheet_x\":19,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f4bc.png\",\"sheet_x\":19,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f4bc.png\",\"sheet_x\":19,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f4bc.png\",\"sheet_x\":19,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Office Worker\",\"b\":\"1F469-200D-1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,23]},\"two\":{\"a\":\"Keycap 2\",\"b\":\"0032-FE0F-20E3\",\"c\":\"0032-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"numbers\",\"2\",\"prime\",\"blue-square\"],\"k\":[0,4],\"o\":3},\"alarm_clock\":{\"a\":\"Alarm Clock\",\"b\":\"23F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"wake\"],\"k\":[47,0]},\"key\":{\"a\":\"Key\",\"b\":\"1F511\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"lock\",\"door\",\"password\"],\"k\":[27,19]},\"flag-kw\":{\"a\":\"Kuwait Flag\",\"b\":\"1F1F0-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,3]},\"stopwatch\":{\"a\":\"Stopwatch\",\"b\":\"23F1-FE0F\",\"c\":\"23F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"time\",\"deadline\"],\"k\":[47,1]},\"male-scientist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f52c.png\",\"sheet_x\":17,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f52c.png\",\"sheet_x\":17,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f52c.png\",\"sheet_x\":17,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f52c.png\",\"sheet_x\":17,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f52c.png\",\"sheet_x\":17,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Scientist\",\"b\":\"1F468-200D-1F52C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,25]},\"three\":{\"a\":\"Keycap 3\",\"b\":\"0033-FE0F-20E3\",\"c\":\"0033-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"3\",\"numbers\",\"prime\",\"blue-square\"],\"k\":[0,5],\"o\":3},\"flag-ky\":{\"a\":\"Cayman Islands Flag\",\"b\":\"1F1F0-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,4]},\"old_key\":{\"a\":\"Old Key\",\"b\":\"1F5DD-FE0F\",\"c\":\"1F5DD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"lock\",\"door\",\"password\"],\"k\":[30,11],\"o\":7},\"flag-kz\":{\"a\":\"Kazakhstan Flag\",\"b\":\"1F1F0-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,5]},\"hammer\":{\"a\":\"Hammer\",\"b\":\"1F528\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[27,42]},\"female-scientist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f52c.png\",\"sheet_x\":19,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f52c.png\",\"sheet_x\":19,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f52c.png\",\"sheet_x\":19,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f52c.png\",\"sheet_x\":19,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f52c.png\",\"sheet_x\":19,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Scientist\",\"b\":\"1F469-200D-1F52C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,35]},\"timer_clock\":{\"a\":\"Timer Clock\",\"b\":\"23F2-FE0F\",\"c\":\"23F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"alarm\"],\"k\":[47,2]},\"four\":{\"a\":\"Keycap 4\",\"b\":\"0034-FE0F-20E3\",\"c\":\"0034-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"4\",\"numbers\",\"blue-square\"],\"k\":[0,6],\"o\":3},\"male-technologist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f4bb.png\",\"sheet_x\":17,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f4bb.png\",\"sheet_x\":17,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f4bb.png\",\"sheet_x\":17,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f4bb.png\",\"sheet_x\":17,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f4bb.png\",\"sheet_x\":17,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Technologist\",\"b\":\"1F468-200D-1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,7]},\"mantelpiece_clock\":{\"a\":\"Mantelpiece Clock\",\"b\":\"1F570-FE0F\",\"c\":\"1F570\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"time\"],\"k\":[28,43],\"o\":7},\"five\":{\"a\":\"Keycap 5\",\"b\":\"0035-FE0F-20E3\",\"c\":\"0035-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"5\",\"numbers\",\"blue-square\",\"prime\"],\"k\":[0,7],\"o\":3},\"flag-la\":{\"a\":\"Laos Flag\",\"b\":\"1F1F1-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,6]},\"pick\":{\"a\":\"Pick\",\"b\":\"26CF-FE0F\",\"c\":\"26CF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"tools\",\"dig\"],\"k\":[48,32],\"o\":5},\"flag-lb\":{\"a\":\"Lebanon Flag\",\"b\":\"1F1F1-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,7]},\"clock12\":{\"a\":\"Clock Face Twelve Oclock\",\"b\":\"1F55B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"noon\",\"midnight\",\"midday\",\"late\",\"early\",\"schedule\"],\"k\":[28,29]},\"hammer_and_pick\":{\"a\":\"Hammer and Pick\",\"b\":\"2692-FE0F\",\"c\":\"2692\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[48,11],\"o\":4},\"six\":{\"a\":\"Keycap 6\",\"b\":\"0036-FE0F-20E3\",\"c\":\"0036-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"6\",\"numbers\",\"blue-square\"],\"k\":[0,8],\"o\":3},\"female-technologist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f4bb.png\",\"sheet_x\":19,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f4bb.png\",\"sheet_x\":19,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f4bb.png\",\"sheet_x\":19,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f4bb.png\",\"sheet_x\":19,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f4bb.png\",\"sheet_x\":19,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Technologist\",\"b\":\"1F469-200D-1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,17]},\"hammer_and_wrench\":{\"a\":\"Hammer and Wrench\",\"b\":\"1F6E0-FE0F\",\"c\":\"1F6E0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[37,8],\"o\":7},\"flag-lc\":{\"a\":\"St. Lucia Flag\",\"b\":\"1F1F1-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,8]},\"clock1230\":{\"a\":\"Clock Face Twelve-Thirty\",\"b\":\"1F567\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,41]},\"seven\":{\"a\":\"Keycap 7\",\"b\":\"0037-FE0F-20E3\",\"c\":\"0037-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"7\",\"numbers\",\"blue-square\",\"prime\"],\"k\":[0,9],\"o\":3},\"male-singer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3a4.png\",\"sheet_x\":16,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3a4.png\",\"sheet_x\":16,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3a4.png\",\"sheet_x\":16,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3a4.png\",\"sheet_x\":16,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3a4.png\",\"sheet_x\":16,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Singer\",\"b\":\"1F468-200D-1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,20]},\"eight\":{\"a\":\"Keycap 8\",\"b\":\"0038-FE0F-20E3\",\"c\":\"0038-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"8\",\"blue-square\",\"numbers\"],\"k\":[0,10],\"o\":3},\"flag-li\":{\"a\":\"Liechtenstein Flag\",\"b\":\"1F1F1-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,9]},\"dagger_knife\":{\"a\":\"Dagger Knife\",\"b\":\"1F5E1-FE0F\",\"c\":\"1F5E1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,13],\"o\":7},\"clock1\":{\"a\":\"Clock Face One Oclock\",\"b\":\"1F550\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,18]},\"female-singer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3a4.png\",\"sheet_x\":18,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3a4.png\",\"sheet_x\":18,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3a4.png\",\"sheet_x\":18,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3a4.png\",\"sheet_x\":18,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3a4.png\",\"sheet_x\":18,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Singer\",\"b\":\"1F469-200D-1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,35]},\"male-artist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3a8.png\",\"sheet_x\":16,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3a8.png\",\"sheet_x\":16,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3a8.png\",\"sheet_x\":16,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3a8.png\",\"sheet_x\":16,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3a8.png\",\"sheet_x\":16,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Artist\",\"b\":\"1F468-200D-1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,26]},\"crossed_swords\":{\"a\":\"Crossed Swords\",\"b\":\"2694-FE0F\",\"c\":\"2694\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"weapon\"],\"k\":[48,13],\"o\":4},\"nine\":{\"a\":\"Keycap 9\",\"b\":\"0039-FE0F-20E3\",\"c\":\"0039-20E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"j\":[\"blue-square\",\"numbers\",\"9\"],\"k\":[0,11],\"o\":3},\"flag-lk\":{\"a\":\"Sri Lanka Flag\",\"b\":\"1F1F1-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,10]},\"clock130\":{\"a\":\"Clock Face One-Thirty\",\"b\":\"1F55C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,30]},\"clock2\":{\"a\":\"Clock Face Two Oclock\",\"b\":\"1F551\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,19]},\"gun\":{\"a\":\"Pistol\",\"b\":\"1F52B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"violence\",\"weapon\",\"pistol\",\"revolver\"],\"k\":[27,45]},\"keycap_ten\":{\"a\":\"Keycap Ten\",\"b\":\"1F51F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"numbers\",\"10\",\"blue-square\"],\"k\":[27,33]},\"female-artist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Artist\",\"b\":\"1F469-200D-1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,41]},\"flag-lr\":{\"a\":\"Liberia Flag\",\"b\":\"1F1F1-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,11]},\"clock230\":{\"a\":\"Clock Face Two-Thirty\",\"b\":\"1F55D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,31]},\"bow_and_arrow\":{\"a\":\"Bow and Arrow\",\"b\":\"1F3F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\"],\"k\":[12,23],\"o\":8},\"male-pilot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2708\",\"image\":\"1f468-1f3fb-200d-2708-fe0f.png\",\"sheet_x\":18,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2708\",\"image\":\"1f468-1f3fc-200d-2708-fe0f.png\",\"sheet_x\":18,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2708\",\"image\":\"1f468-1f3fd-200d-2708-fe0f.png\",\"sheet_x\":18,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2708\",\"image\":\"1f468-1f3fe-200d-2708-fe0f.png\",\"sheet_x\":18,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2708\",\"image\":\"1f468-1f3ff-200d-2708-fe0f.png\",\"sheet_x\":18,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Pilot\",\"b\":\"1F468-200D-2708-FE0F\",\"c\":\"1F468-200D-2708\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[18,3]},\"flag-ls\":{\"a\":\"Lesotho Flag\",\"b\":\"1F1F1-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,12]},\"flag-lt\":{\"a\":\"Lithuania Flag\",\"b\":\"1F1F1-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,13]},\"capital_abcd\":{\"a\":\"Input Symbol for Latin Capital Letters\",\"b\":\"1F520\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"alphabet\",\"words\",\"blue-square\"],\"k\":[27,34]},\"female-pilot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2708\",\"image\":\"1f469-1f3fb-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2708\",\"image\":\"1f469-1f3fc-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2708\",\"image\":\"1f469-1f3fd-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2708\",\"image\":\"1f469-1f3fe-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2708\",\"image\":\"1f469-1f3ff-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Pilot\",\"b\":\"1F469-200D-2708-FE0F\",\"c\":\"1F469-200D-2708\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,13]},\"clock3\":{\"a\":\"Clock Face Three Oclock\",\"b\":\"1F552\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,20]},\"shield\":{\"a\":\"Shield\",\"b\":\"1F6E1-FE0F\",\"c\":\"1F6E1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"protection\",\"security\"],\"k\":[37,9],\"o\":7},\"male-astronaut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f680.png\",\"sheet_x\":17,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f680.png\",\"sheet_x\":17,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f680.png\",\"sheet_x\":17,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f680.png\",\"sheet_x\":17,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f680.png\",\"sheet_x\":17,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Astronaut\",\"b\":\"1F468-200D-1F680\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,31]},\"abcd\":{\"a\":\"Input Symbol for Latin Small Letters\",\"b\":\"1F521\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"alphabet\"],\"k\":[27,35]},\"clock330\":{\"a\":\"Clock Face Three-Thirty\",\"b\":\"1F55E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,32]},\"flag-lu\":{\"a\":\"Luxembourg Flag\",\"b\":\"1F1F1-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,14]},\"wrench\":{\"a\":\"Wrench\",\"b\":\"1F527\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"tools\",\"diy\",\"ikea\",\"fix\",\"maintainer\"],\"k\":[27,41]},\"nut_and_bolt\":{\"a\":\"Nut and Bolt\",\"b\":\"1F529\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"handy\",\"tools\",\"fix\"],\"k\":[27,43]},\"clock4\":{\"a\":\"Clock Face Four Oclock\",\"b\":\"1F553\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,21]},\"female-astronaut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f680.png\",\"sheet_x\":19,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f680.png\",\"sheet_x\":19,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f680.png\",\"sheet_x\":19,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f680.png\",\"sheet_x\":19,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f680.png\",\"sheet_x\":19,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Astronaut\",\"b\":\"1F469-200D-1F680\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,41]},\"flag-lv\":{\"a\":\"Latvia Flag\",\"b\":\"1F1F1-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,15]},\"gear\":{\"a\":\"Gear\",\"b\":\"2699-FE0F\",\"c\":\"2699\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"cog\"],\"k\":[48,17],\"o\":4},\"male-firefighter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f692.png\",\"sheet_x\":17,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f692.png\",\"sheet_x\":17,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f692.png\",\"sheet_x\":17,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f692.png\",\"sheet_x\":17,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f692.png\",\"sheet_x\":17,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Male Firefighter\",\"b\":\"1F468-200D-1F692\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[17,37]},\"flag-ly\":{\"a\":\"Libya Flag\",\"b\":\"1F1F1-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,16]},\"symbols\":{\"a\":\"Input Symbol for Symbols\",\"b\":\"1F523\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"music\",\"note\",\"ampersand\",\"percent\",\"glyphs\",\"characters\"],\"k\":[27,37]},\"clock430\":{\"a\":\"Clock Face Four-Thirty\",\"b\":\"1F55F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,33]},\"flag-ma\":{\"a\":\"Morocco Flag\",\"b\":\"1F1F2-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,17]},\"compression\":{\"a\":\"Compression\",\"b\":\"1F5DC-FE0F\",\"c\":\"1F5DC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,10],\"o\":7},\"female-firefighter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f692.png\",\"sheet_x\":20,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Female Firefighter\",\"b\":\"1F469-200D-1F692\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,47]},\"abc\":{\"a\":\"Input Symbol for Latin Letters\",\"b\":\"1F524\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"alphabet\"],\"k\":[27,38]},\"clock5\":{\"a\":\"Clock Face Five Oclock\",\"b\":\"1F554\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,22]},\"clock530\":{\"a\":\"Clock Face Five-Thirty\",\"b\":\"1F560\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,34]},\"a\":{\"a\":\"Negative Squared Latin Capital Letter a\",\"b\":\"1F170-FE0F\",\"c\":\"1F170\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"red-square\",\"alphabet\",\"letter\"],\"k\":[0,16]},\"alembic\":{\"a\":\"Alembic\",\"b\":\"2697-FE0F\",\"c\":\"2697\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"distilling\",\"science\",\"experiment\",\"chemistry\"],\"k\":[48,16],\"o\":4},\"flag-mc\":{\"a\":\"Monaco Flag\",\"b\":\"1F1F2-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,18]},\"cop\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB\",\"non_qualified\":null,\"image\":\"1f46e-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F46E-1F3FC\",\"non_qualified\":null,\"image\":\"1f46e-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F46E-1F3FD\",\"non_qualified\":null,\"image\":\"1f46e-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F46E-1F3FE\",\"non_qualified\":null,\"image\":\"1f46e-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F46E-1F3FF\",\"non_qualified\":null,\"image\":\"1f46e-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F46E-200D-2642-FE0F\",\"a\":\"Police Officer\",\"b\":\"1F46E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[20,45]},\"scales\":{\"a\":\"Scales\",\"b\":\"2696-FE0F\",\"c\":\"2696\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[48,15],\"o\":4},\"clock6\":{\"a\":\"Clock Face Six Oclock\",\"b\":\"1F555\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\",\"dawn\",\"dusk\"],\"k\":[28,23]},\"flag-md\":{\"a\":\"Moldova Flag\",\"b\":\"1F1F2-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,19]},\"ab\":{\"a\":\"Negative Squared Ab\",\"b\":\"1F18E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"red-square\",\"alphabet\"],\"k\":[0,20]},\"male-police-officer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FB-200D-2642\",\"image\":\"1f46e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":20,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F46E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FC-200D-2642\",\"image\":\"1f46e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":20,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F46E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FD-200D-2642\",\"image\":\"1f46e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":20,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F46E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FE-200D-2642\",\"image\":\"1f46e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":20,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F46E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FF-200D-2642\",\"image\":\"1f46e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":20,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F46E\",\"a\":\"Male Police Officer\",\"b\":\"1F46E-200D-2642-FE0F\",\"c\":\"1F46E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,39]},\"link\":{\"a\":\"Link Symbol\",\"b\":\"1F517\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"rings\",\"url\"],\"k\":[27,25]},\"flag-me\":{\"a\":\"Montenegro Flag\",\"b\":\"1F1F2-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,20]},\"clock630\":{\"a\":\"Clock Face Six-Thirty\",\"b\":\"1F561\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,35]},\"b\":{\"a\":\"Negative Squared Latin Capital Letter B\",\"b\":\"1F171-FE0F\",\"c\":\"1F171\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"red-square\",\"alphabet\",\"letter\"],\"k\":[0,17]},\"female-police-officer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FB-200D-2640\",\"image\":\"1f46e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":20,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F46E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FC-200D-2640\",\"image\":\"1f46e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":20,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F46E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FD-200D-2640\",\"image\":\"1f46e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":20,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F46E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FE-200D-2640\",\"image\":\"1f46e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":20,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F46E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FF-200D-2640\",\"image\":\"1f46e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":20,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Police Officer\",\"b\":\"1F46E-200D-2640-FE0F\",\"c\":\"1F46E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,33]},\"clock7\":{\"a\":\"Clock Face Seven Oclock\",\"b\":\"1F556\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,24]},\"cl\":{\"a\":\"Squared Cl\",\"b\":\"1F191\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"alphabet\",\"words\",\"red-square\"],\"k\":[0,21]},\"sleuth_or_spy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB\",\"non_qualified\":null,\"image\":\"1f575-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F575-1F3FC\",\"non_qualified\":null,\"image\":\"1f575-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F575-1F3FD\",\"non_qualified\":null,\"image\":\"1f575-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F575-1F3FE\",\"non_qualified\":null,\"image\":\"1f575-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F575-1F3FF\",\"non_qualified\":null,\"image\":\"1f575-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoleted_by\":\"1F575-FE0F-200D-2642-FE0F\",\"a\":\"Sleuth or Spy\",\"b\":\"1F575-FE0F\",\"c\":\"1F575\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[29,11],\"o\":7},\"flag-mf\":{\"a\":\"St. Martin Flag\",\"b\":\"1F1F2-1F1EB\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,21]},\"chains\":{\"a\":\"Chains\",\"b\":\"26D3-FE0F\",\"c\":\"26D3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"lock\",\"arrest\"],\"k\":[48,34],\"o\":5},\"syringe\":{\"a\":\"Syringe\",\"b\":\"1F489\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"health\",\"hospital\",\"drugs\",\"blood\",\"medicine\",\"needle\",\"doctor\",\"nurse\"],\"k\":[24,35]},\"male-detective\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FB-200D-2642\",\"image\":\"1f575-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F575-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FC-200D-2642\",\"image\":\"1f575-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F575-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FD-200D-2642\",\"image\":\"1f575-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F575-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FE-200D-2642\",\"image\":\"1f575-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F575-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FF-200D-2642\",\"image\":\"1f575-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F575-FE0F\",\"a\":\"Male Detective\",\"b\":\"1F575-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[29,5],\"o\":7},\"cool\":{\"a\":\"Squared Cool\",\"b\":\"1F192\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"words\",\"blue-square\"],\"k\":[0,22]},\"clock730\":{\"a\":\"Clock Face Seven-Thirty\",\"b\":\"1F562\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,36]},\"flag-mg\":{\"a\":\"Madagascar Flag\",\"b\":\"1F1F2-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,22]},\"free\":{\"a\":\"Squared Free\",\"b\":\"1F193\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"words\"],\"k\":[0,23]},\"flag-mh\":{\"a\":\"Marshall Islands Flag\",\"b\":\"1F1F2-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,23]},\"clock8\":{\"a\":\"Clock Face Eight Oclock\",\"b\":\"1F557\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,25]},\"pill\":{\"a\":\"Pill\",\"b\":\"1F48A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"health\",\"medicine\",\"doctor\",\"pharmacy\",\"drug\"],\"k\":[24,36]},\"female-detective\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FB-200D-2640\",\"image\":\"1f575-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F575-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FC-200D-2640\",\"image\":\"1f575-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F575-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FD-200D-2640\",\"image\":\"1f575-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F575-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FE-200D-2640\",\"image\":\"1f575-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F575-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FF-200D-2640\",\"image\":\"1f575-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Detective\",\"b\":\"1F575-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[28,51],\"o\":7},\"clock830\":{\"a\":\"Clock Face Eight-Thirty\",\"b\":\"1F563\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,37]},\"guardsman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB\",\"non_qualified\":null,\"image\":\"1f482-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F482-1F3FC\",\"non_qualified\":null,\"image\":\"1f482-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F482-1F3FD\",\"non_qualified\":null,\"image\":\"1f482-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F482-1F3FE\",\"non_qualified\":null,\"image\":\"1f482-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F482-1F3FF\",\"non_qualified\":null,\"image\":\"1f482-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F482-200D-2642-FE0F\",\"a\":\"Guardsman\",\"b\":\"1F482\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"j\":[\"uk\",\"gb\",\"british\",\"male\",\"guy\",\"royal\"],\"k\":[23,31]},\"information_source\":{\"a\":\"Information Source\",\"b\":\"2139-FE0F\",\"c\":\"2139\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"alphabet\",\"letter\"],\"k\":[46,32],\"o\":3},\"flag-mk\":{\"a\":\"Macedonia Flag\",\"b\":\"1F1F2-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,24]},\"smoking\":{\"a\":\"Smoking Symbol\",\"b\":\"1F6AC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"kills\",\"tobacco\",\"cigarette\",\"joint\",\"smoke\"],\"k\":[35,17]},\"id\":{\"a\":\"Squared Id\",\"b\":\"1F194\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"words\"],\"k\":[0,24]},\"clock9\":{\"a\":\"Clock Face Nine Oclock\",\"b\":\"1F558\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,26]},\"flag-ml\":{\"a\":\"Mali Flag\",\"b\":\"1F1F2-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,25]},\"coffin\":{\"a\":\"Coffin\",\"b\":\"26B0-FE0F\",\"c\":\"26B0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"vampire\",\"dead\",\"die\",\"death\",\"rip\",\"graveyard\",\"cemetery\",\"casket\",\"funeral\",\"box\"],\"k\":[48,24],\"o\":4},\"male-guard\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FB-200D-2642\",\"image\":\"1f482-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F482-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FC-200D-2642\",\"image\":\"1f482-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F482-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FD-200D-2642\",\"image\":\"1f482-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F482-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FE-200D-2642\",\"image\":\"1f482-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F482-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FF-200D-2642\",\"image\":\"1f482-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F482\",\"a\":\"Male Guard\",\"b\":\"1F482-200D-2642-FE0F\",\"c\":\"1F482-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[23,25]},\"m\":{\"a\":\"Circled Latin Capital Letter M\",\"b\":\"24C2-FE0F\",\"c\":\"24C2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"alphabet\",\"blue-circle\",\"letter\"],\"k\":[47,7],\"o\":1},\"funeral_urn\":{\"a\":\"Funeral Urn\",\"b\":\"26B1-FE0F\",\"c\":\"26B1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"dead\",\"die\",\"death\",\"rip\",\"ashes\"],\"k\":[48,25],\"o\":4},\"female-guard\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FB-200D-2640\",\"image\":\"1f482-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F482-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FC-200D-2640\",\"image\":\"1f482-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F482-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FD-200D-2640\",\"image\":\"1f482-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F482-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FE-200D-2640\",\"image\":\"1f482-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F482-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FF-200D-2640\",\"image\":\"1f482-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Guard\",\"b\":\"1F482-200D-2640-FE0F\",\"c\":\"1F482-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[23,19]},\"flag-mm\":{\"a\":\"Myanmar (burma) Flag\",\"b\":\"1F1F2-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,26]},\"clock930\":{\"a\":\"Clock Face Nine-Thirty\",\"b\":\"1F564\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,38]},\"moyai\":{\"a\":\"Moyai\",\"b\":\"1F5FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"rock\",\"easter island\",\"moai\"],\"k\":[30,23]},\"new\":{\"a\":\"Squared New\",\"b\":\"1F195\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"words\",\"start\"],\"k\":[0,25]},\"flag-mn\":{\"a\":\"Mongolia Flag\",\"b\":\"1F1F2-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,27]},\"construction_worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB\",\"non_qualified\":null,\"image\":\"1f477-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F477-1F3FC\",\"non_qualified\":null,\"image\":\"1f477-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F477-1F3FD\",\"non_qualified\":null,\"image\":\"1f477-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F477-1F3FE\",\"non_qualified\":null,\"image\":\"1f477-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F477-1F3FF\",\"non_qualified\":null,\"image\":\"1f477-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F477-200D-2642-FE0F\",\"a\":\"Construction Worker\",\"b\":\"1F477\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[22,28]},\"clock10\":{\"a\":\"Clock Face Ten Oclock\",\"b\":\"1F559\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,27]},\"clock1030\":{\"a\":\"Clock Face Ten-Thirty\",\"b\":\"1F565\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,39]},\"ng\":{\"a\":\"Squared Ng\",\"b\":\"1F196\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"words\",\"shape\",\"icon\"],\"k\":[0,26]},\"male-construction-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FB-200D-2642\",\"image\":\"1f477-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F477-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FC-200D-2642\",\"image\":\"1f477-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F477-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FD-200D-2642\",\"image\":\"1f477-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F477-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FE-200D-2642\",\"image\":\"1f477-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F477-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FF-200D-2642\",\"image\":\"1f477-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F477\",\"a\":\"Male Construction Worker\",\"b\":\"1F477-200D-2642-FE0F\",\"c\":\"1F477-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[22,22]},\"flag-mo\":{\"a\":\"Macau Sar China Flag\",\"b\":\"1F1F2-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,28]},\"oil_drum\":{\"a\":\"Oil Drum\",\"b\":\"1F6E2-FE0F\",\"c\":\"1F6E2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"barrell\"],\"k\":[37,10],\"o\":7},\"o2\":{\"a\":\"Negative Squared Latin Capital Letter O\",\"b\":\"1F17E-FE0F\",\"c\":\"1F17E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"alphabet\",\"red-square\",\"letter\"],\"k\":[0,18]},\"female-construction-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FB-200D-2640\",\"image\":\"1f477-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F477-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FC-200D-2640\",\"image\":\"1f477-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F477-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FD-200D-2640\",\"image\":\"1f477-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F477-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FE-200D-2640\",\"image\":\"1f477-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F477-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FF-200D-2640\",\"image\":\"1f477-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Construction Worker\",\"b\":\"1F477-200D-2640-FE0F\",\"c\":\"1F477-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[22,16]},\"clock11\":{\"a\":\"Clock Face Eleven Oclock\",\"b\":\"1F55A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,28]},\"crystal_ball\":{\"a\":\"Crystal Ball\",\"b\":\"1F52E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"disco\",\"party\",\"magic\",\"circus\",\"fortune_teller\"],\"k\":[27,48]},\"flag-mp\":{\"a\":\"Northern Mariana Islands Flag\",\"b\":\"1F1F2-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,29]},\"flag-mq\":{\"a\":\"Martinique Flag\",\"b\":\"1F1F2-1F1F6\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,30]},\"prince\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F934-1F3FB\",\"non_qualified\":null,\"image\":\"1f934-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":29,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F934-1F3FC\",\"non_qualified\":null,\"image\":\"1f934-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":30,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F934-1F3FD\",\"non_qualified\":null,\"image\":\"1f934-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":31,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F934-1F3FE\",\"non_qualified\":null,\"image\":\"1f934-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":32,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F934-1F3FF\",\"non_qualified\":null,\"image\":\"1f934-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":33,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Prince\",\"b\":\"1F934\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"boy\",\"man\",\"male\",\"crown\",\"royal\",\"king\"],\"k\":[39,28],\"o\":9},\"ok\":{\"a\":\"Squared Ok\",\"b\":\"1F197\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"good\",\"agree\",\"yes\",\"blue-square\"],\"k\":[0,27]},\"clock1130\":{\"a\":\"Clock Face Eleven-Thirty\",\"b\":\"1F566\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,40]},\"shopping_trolley\":{\"a\":\"Shopping Trolley\",\"b\":\"1F6D2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,7],\"o\":9},\"flag-mr\":{\"a\":\"Mauritania Flag\",\"b\":\"1F1F2-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,31]},\"princess\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F478-1F3FB\",\"non_qualified\":null,\"image\":\"1f478-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F478-1F3FC\",\"non_qualified\":null,\"image\":\"1f478-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F478-1F3FD\",\"non_qualified\":null,\"image\":\"1f478-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F478-1F3FE\",\"non_qualified\":null,\"image\":\"1f478-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F478-1F3FF\",\"non_qualified\":null,\"image\":\"1f478-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Princess\",\"b\":\"1F478\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"girl\",\"woman\",\"female\",\"blond\",\"crown\",\"royal\",\"queen\"],\"k\":[22,34]},\"new_moon\":{\"a\":\"New Moon Symbol\",\"b\":\"1F311\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,9]},\"parking\":{\"a\":\"Negative Squared Latin Capital Letter P\",\"b\":\"1F17F-FE0F\",\"c\":\"1F17F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cars\",\"blue-square\",\"alphabet\",\"letter\"],\"k\":[0,19],\"o\":5},\"sos\":{\"a\":\"Squared Sos\",\"b\":\"1F198\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"help\",\"red-square\",\"words\",\"emergency\",\"911\"],\"k\":[0,28]},\"man_with_turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB\",\"non_qualified\":null,\"image\":\"1f473-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F473-1F3FC\",\"non_qualified\":null,\"image\":\"1f473-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F473-1F3FD\",\"non_qualified\":null,\"image\":\"1f473-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F473-1F3FE\",\"non_qualified\":null,\"image\":\"1f473-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F473-1F3FF\",\"non_qualified\":null,\"image\":\"1f473-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F473-200D-2642-FE0F\",\"a\":\"Man with Turban\",\"b\":\"1F473\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"j\":[\"male\",\"indian\",\"hinduism\",\"arabs\"],\"k\":[21,44]},\"flag-ms\":{\"a\":\"Montserrat Flag\",\"b\":\"1F1F2-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,32]},\"waxing_crescent_moon\":{\"a\":\"Waxing Crescent Moon Symbol\",\"b\":\"1F312\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,10]},\"up\":{\"a\":\"Squared Up with Exclamation Mark\",\"b\":\"1F199\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"above\",\"high\"],\"k\":[0,29]},\"first_quarter_moon\":{\"a\":\"First Quarter Moon Symbol\",\"b\":\"1F313\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,11]},\"flag-mt\":{\"a\":\"Malta Flag\",\"b\":\"1F1F2-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,33]},\"man-wearing-turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FB-200D-2642\",\"image\":\"1f473-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F473-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FC-200D-2642\",\"image\":\"1f473-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F473-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FD-200D-2642\",\"image\":\"1f473-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F473-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FE-200D-2642\",\"image\":\"1f473-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F473-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FF-200D-2642\",\"image\":\"1f473-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F473\",\"a\":\"Man Wearing Turban\",\"b\":\"1F473-200D-2642-FE0F\",\"c\":\"1F473-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[21,38]},\"moon\":{\"a\":\"Waxing Gibbous Moon Symbol\",\"b\":\"1F314\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[6,12],\"n\":[\"waxing_gibbous_moon\"]},\"woman-wearing-turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FB-200D-2640\",\"image\":\"1f473-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F473-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FC-200D-2640\",\"image\":\"1f473-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F473-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FD-200D-2640\",\"image\":\"1f473-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F473-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FE-200D-2640\",\"image\":\"1f473-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F473-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FF-200D-2640\",\"image\":\"1f473-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Wearing Turban\",\"b\":\"1F473-200D-2640-FE0F\",\"c\":\"1F473-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[21,32]},\"vs\":{\"a\":\"Squared Vs\",\"b\":\"1F19A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"words\",\"orange-square\"],\"k\":[0,30]},\"flag-mu\":{\"a\":\"Mauritius Flag\",\"b\":\"1F1F2-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,34]},\"man_with_gua_pi_mao\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F472-1F3FB\",\"non_qualified\":null,\"image\":\"1f472-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F472-1F3FC\",\"non_qualified\":null,\"image\":\"1f472-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F472-1F3FD\",\"non_qualified\":null,\"image\":\"1f472-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F472-1F3FE\",\"non_qualified\":null,\"image\":\"1f472-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F472-1F3FF\",\"non_qualified\":null,\"image\":\"1f472-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Man with Gua Pi Mao\",\"b\":\"1F472\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"male\",\"boy\",\"chinese\"],\"k\":[21,26]},\"koko\":{\"a\":\"Squared Katakana Koko\",\"b\":\"1F201\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue-square\",\"here\",\"katakana\",\"japanese\",\"destination\"],\"k\":[5,29]},\"full_moon\":{\"a\":\"Full Moon Symbol\",\"b\":\"1F315\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"yellow\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,13]},\"flag-mv\":{\"a\":\"Maldives Flag\",\"b\":\"1F1F2-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,35]},\"person_with_headscarf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D5-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":23,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D5-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":24,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D5-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":25,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D5-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":26,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D5-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d5-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":27,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Person with Headscarf\",\"b\":\"1F9D5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,22],\"o\":10},\"waning_gibbous_moon\":{\"a\":\"Waning Gibbous Moon Symbol\",\"b\":\"1F316\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\",\"waxing_gibbous_moon\"],\"k\":[6,14]},\"sa\":{\"a\":\"Squared Katakana Sa\",\"b\":\"1F202-FE0F\",\"c\":\"1F202\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"blue-square\",\"katakana\"],\"k\":[5,30]},\"flag-mw\":{\"a\":\"Malawi Flag\",\"b\":\"1F1F2-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,36]},\"last_quarter_moon\":{\"a\":\"Last Quarter Moon Symbol\",\"b\":\"1F317\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,15]},\"u6708\":{\"a\":\"Squared Cjk Unified Ideograph-6708\",\"b\":\"1F237-FE0F\",\"c\":\"1F237\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chinese\",\"month\",\"moon\",\"japanese\",\"orange-square\",\"kanji\"],\"k\":[5,38]},\"bearded_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D4-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":17,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D4-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":18,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D4-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":19,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D4-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":20,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D4-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d4-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":21,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Bearded Person\",\"b\":\"1F9D4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,16],\"o\":10},\"flag-mx\":{\"a\":\"Mexico Flag\",\"b\":\"1F1F2-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,37]},\"u6709\":{\"a\":\"Squared Cjk Unified Ideograph-6709\",\"b\":\"1F236\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"orange-square\",\"chinese\",\"have\",\"kanji\"],\"k\":[5,37]},\"person_with_blond_hair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB\",\"non_qualified\":null,\"image\":\"1f471-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F471-1F3FC\",\"non_qualified\":null,\"image\":\"1f471-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F471-1F3FD\",\"non_qualified\":null,\"image\":\"1f471-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F471-1F3FE\",\"non_qualified\":null,\"image\":\"1f471-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F471-1F3FF\",\"non_qualified\":null,\"image\":\"1f471-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F471-200D-2642-FE0F\",\"a\":\"Person with Blond Hair\",\"b\":\"1F471\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[21,20]},\"waning_crescent_moon\":{\"a\":\"Waning Crescent Moon Symbol\",\"b\":\"1F318\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,16]},\"flag-my\":{\"a\":\"Malaysia Flag\",\"b\":\"1F1F2-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,38]},\"u6307\":{\"a\":\"Squared Cjk Unified Ideograph-6307\",\"b\":\"1F22F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chinese\",\"point\",\"green-square\",\"kanji\"],\"k\":[5,32],\"o\":5},\"blond-haired-man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FB-200D-2642\",\"image\":\"1f471-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F471-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FC-200D-2642\",\"image\":\"1f471-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F471-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FD-200D-2642\",\"image\":\"1f471-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F471-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FE-200D-2642\",\"image\":\"1f471-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F471-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FF-200D-2642\",\"image\":\"1f471-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F471\",\"a\":\"Blond Haired Man\",\"b\":\"1F471-200D-2642-FE0F\",\"c\":\"1F471-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[21,14]},\"crescent_moon\":{\"a\":\"Crescent Moon\",\"b\":\"1F319\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"night\",\"sleep\",\"sky\",\"evening\",\"magic\"],\"k\":[6,17]},\"flag-mz\":{\"a\":\"Mozambique Flag\",\"b\":\"1F1F2-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,39]},\"new_moon_with_face\":{\"a\":\"New Moon with Face\",\"b\":\"1F31A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,18]},\"flag-na\":{\"a\":\"Namibia Flag\",\"b\":\"1F1F3-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,40]},\"blond-haired-woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FB-200D-2640\",\"image\":\"1f471-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F471-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FC-200D-2640\",\"image\":\"1f471-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F471-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FD-200D-2640\",\"image\":\"1f471-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F471-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FE-200D-2640\",\"image\":\"1f471-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F471-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FF-200D-2640\",\"image\":\"1f471-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Blond Haired Woman\",\"b\":\"1F471-200D-2640-FE0F\",\"c\":\"1F471-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[21,8]},\"ideograph_advantage\":{\"a\":\"Circled Ideograph Advantage\",\"b\":\"1F250\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chinese\",\"kanji\",\"obtain\",\"get\",\"circle\"],\"k\":[5,42]},\"first_quarter_moon_with_face\":{\"a\":\"First Quarter Moon with Face\",\"b\":\"1F31B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,19]},\"man_in_tuxedo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F935-1F3FB\",\"non_qualified\":null,\"image\":\"1f935-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":35,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F935-1F3FC\",\"non_qualified\":null,\"image\":\"1f935-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":36,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F935-1F3FD\",\"non_qualified\":null,\"image\":\"1f935-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":37,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F935-1F3FE\",\"non_qualified\":null,\"image\":\"1f935-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":38,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F935-1F3FF\",\"non_qualified\":null,\"image\":\"1f935-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":39,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Man in Tuxedo\",\"b\":\"1F935\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"couple\",\"marriage\",\"wedding\",\"groom\"],\"k\":[39,34],\"o\":9},\"flag-nc\":{\"a\":\"New Caledonia Flag\",\"b\":\"1F1F3-1F1E8\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,41]},\"u5272\":{\"a\":\"Squared Cjk Unified Ideograph-5272\",\"b\":\"1F239\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"cut\",\"divide\",\"chinese\",\"kanji\",\"pink-square\"],\"k\":[5,40]},\"flag-ne\":{\"a\":\"Niger Flag\",\"b\":\"1F1F3-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,42]},\"last_quarter_moon_with_face\":{\"a\":\"Last Quarter Moon with Face\",\"b\":\"1F31C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,20]},\"u7121\":{\"a\":\"Squared Cjk Unified Ideograph-7121\",\"b\":\"1F21A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nothing\",\"chinese\",\"kanji\",\"japanese\",\"orange-square\"],\"k\":[5,31],\"o\":5},\"bride_with_veil\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F470-1F3FB\",\"non_qualified\":null,\"image\":\"1f470-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F470-1F3FC\",\"non_qualified\":null,\"image\":\"1f470-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F470-1F3FD\",\"non_qualified\":null,\"image\":\"1f470-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F470-1F3FE\",\"non_qualified\":null,\"image\":\"1f470-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F470-1F3FF\",\"non_qualified\":null,\"image\":\"1f470-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Bride with Veil\",\"b\":\"1F470\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"couple\",\"marriage\",\"wedding\",\"woman\",\"bride\"],\"k\":[21,2]},\"u7981\":{\"a\":\"Squared Cjk Unified Ideograph-7981\",\"b\":\"1F232\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"kanji\",\"japanese\",\"chinese\",\"forbidden\",\"limit\",\"restricted\",\"red-square\"],\"k\":[5,33]},\"pregnant_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F930-1F3FB\",\"non_qualified\":null,\"image\":\"1f930-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":5,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F930-1F3FC\",\"non_qualified\":null,\"image\":\"1f930-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":6,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F930-1F3FD\",\"non_qualified\":null,\"image\":\"1f930-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":7,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F930-1F3FE\",\"non_qualified\":null,\"image\":\"1f930-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":8,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F930-1F3FF\",\"non_qualified\":null,\"image\":\"1f930-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":9,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Pregnant Woman\",\"b\":\"1F930\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"baby\"],\"k\":[39,4],\"o\":9},\"thermometer\":{\"a\":\"Thermometer\",\"b\":\"1F321-FE0F\",\"c\":\"1F321\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"weather\",\"temperature\",\"hot\",\"cold\"],\"k\":[6,25],\"o\":7},\"flag-nf\":{\"a\":\"Norfolk Island Flag\",\"b\":\"1F1F3-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,43]},\"sunny\":{\"a\":\"Black Sun with Rays\",\"b\":\"2600-FE0F\",\"c\":\"2600\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weather\",\"nature\",\"brightness\",\"summer\",\"beach\",\"spring\"],\"k\":[47,16],\"o\":1},\"accept\":{\"a\":\"Circled Ideograph Accept\",\"b\":\"1F251\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"ok\",\"good\",\"chinese\",\"kanji\",\"agree\",\"yes\",\"orange-circle\"],\"k\":[5,43]},\"flag-ng\":{\"a\":\"Nigeria Flag\",\"b\":\"1F1F3-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,44]},\"breast-feeding\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F931-1F3FB\",\"non_qualified\":null,\"image\":\"1f931-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":11,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F931-1F3FC\",\"non_qualified\":null,\"image\":\"1f931-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":12,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F931-1F3FD\",\"non_qualified\":null,\"image\":\"1f931-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":13,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F931-1F3FE\",\"non_qualified\":null,\"image\":\"1f931-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":14,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F931-1F3FF\",\"non_qualified\":null,\"image\":\"1f931-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":15,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Breast-Feeding\",\"b\":\"1F931\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,10],\"o\":10},\"full_moon_with_face\":{\"a\":\"Full Moon with Face\",\"b\":\"1F31D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[6,21]},\"flag-ni\":{\"a\":\"Nicaragua Flag\",\"b\":\"1F1F3-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,45]},\"u7533\":{\"a\":\"Squared Cjk Unified Ideograph-7533\",\"b\":\"1F238\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chinese\",\"japanese\",\"kanji\",\"orange-square\"],\"k\":[5,39]},\"angel\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F47C-1F3FB\",\"non_qualified\":null,\"image\":\"1f47c-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F47C-1F3FC\",\"non_qualified\":null,\"image\":\"1f47c-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F47C-1F3FD\",\"non_qualified\":null,\"image\":\"1f47c-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F47C-1F3FE\",\"non_qualified\":null,\"image\":\"1f47c-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F47C-1F3FF\",\"non_qualified\":null,\"image\":\"1f47c-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Baby Angel\",\"b\":\"1F47C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"heaven\",\"wings\",\"halo\"],\"k\":[22,43]},\"sun_with_face\":{\"a\":\"Sun with Face\",\"b\":\"1F31E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"morning\",\"sky\"],\"k\":[6,22]},\"santa\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F385-1F3FB\",\"non_qualified\":null,\"image\":\"1f385-1f3fb.png\",\"sheet_x\":8,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F385-1F3FC\",\"non_qualified\":null,\"image\":\"1f385-1f3fc.png\",\"sheet_x\":8,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F385-1F3FD\",\"non_qualified\":null,\"image\":\"1f385-1f3fd.png\",\"sheet_x\":8,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F385-1F3FE\",\"non_qualified\":null,\"image\":\"1f385-1f3fe.png\",\"sheet_x\":8,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F385-1F3FF\",\"non_qualified\":null,\"image\":\"1f385-1f3ff.png\",\"sheet_x\":8,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Father Christmas\",\"b\":\"1F385\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"festival\",\"man\",\"male\",\"xmas\",\"father christmas\"],\"k\":[8,19]},\"u5408\":{\"a\":\"Squared Cjk Unified Ideograph-5408\",\"b\":\"1F234\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"chinese\",\"join\",\"kanji\",\"red-square\"],\"k\":[5,35]},\"flag-nl\":{\"a\":\"Netherlands Flag\",\"b\":\"1F1F3-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,46]},\"mrs_claus\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F936-1F3FB\",\"non_qualified\":null,\"image\":\"1f936-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":41,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F936-1F3FC\",\"non_qualified\":null,\"image\":\"1f936-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":42,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F936-1F3FD\",\"non_qualified\":null,\"image\":\"1f936-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":43,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F936-1F3FE\",\"non_qualified\":null,\"image\":\"1f936-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":44,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F936-1F3FF\",\"non_qualified\":null,\"image\":\"1f936-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":45,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Mother Christmas\",\"b\":\"1F936\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"woman\",\"female\",\"xmas\",\"mother christmas\"],\"k\":[39,40],\"n\":[\"mother_christmas\"],\"o\":9},\"u7a7a\":{\"a\":\"Squared Cjk Unified Ideograph-7a7a\",\"b\":\"1F233\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"kanji\",\"japanese\",\"chinese\",\"empty\",\"sky\",\"blue-square\"],\"k\":[5,34]},\"star\":{\"a\":\"White Medium Star\",\"b\":\"2B50\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"night\",\"yellow\"],\"k\":[50,22],\"o\":5},\"flag-no\":{\"a\":\"Norway Flag\",\"b\":\"1F1F3-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,47]},\"mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fb.png\",\"sheet_x\":44,\"sheet_y\":43,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D9-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":44,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D9-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":45,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D9-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":46,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D9-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d9-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":47,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D9-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D9-200D-2640-FE0F\",\"a\":\"Mage\",\"b\":\"1F9D9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,42],\"o\":10},\"star2\":{\"a\":\"Glowing Star\",\"b\":\"1F31F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"night\",\"sparkle\",\"awesome\",\"good\",\"magic\"],\"k\":[6,23]},\"flag-np\":{\"a\":\"Nepal Flag\",\"b\":\"1F1F3-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,48]},\"congratulations\":{\"a\":\"Circled Ideograph Congratulation\",\"b\":\"3297-FE0F\",\"c\":\"3297\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"chinese\",\"kanji\",\"japanese\",\"red-circle\"],\"k\":[50,26],\"o\":1},\"flag-nr\":{\"a\":\"Nauru Flag\",\"b\":\"1F1F3-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,49]},\"stars\":{\"a\":\"Shooting Star\",\"b\":\"1F320\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"night\",\"photo\"],\"k\":[6,24]},\"female_mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FB-200D-2640\",\"image\":\"1f9d9-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":31,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D9-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FC-200D-2640\",\"image\":\"1f9d9-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":32,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D9-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FD-200D-2640\",\"image\":\"1f9d9-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":33,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D9-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FE-200D-2640\",\"image\":\"1f9d9-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":34,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D9-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FF-200D-2640\",\"image\":\"1f9d9-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":35,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D9-1F3FF\"}},\"obsoletes\":\"1F9D9\",\"a\":\"Female Mage\",\"b\":\"1F9D9-200D-2640-FE0F\",\"c\":\"1F9D9-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,30],\"o\":10},\"secret\":{\"a\":\"Circled Ideograph Secret\",\"b\":\"3299-FE0F\",\"c\":\"3299\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"privacy\",\"chinese\",\"sshh\",\"kanji\",\"red-circle\"],\"k\":[50,27],\"o\":1},\"flag-nu\":{\"a\":\"Niue Flag\",\"b\":\"1F1F3-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,50]},\"u55b6\":{\"a\":\"Squared Cjk Unified Ideograph-55b6\",\"b\":\"1F23A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"japanese\",\"opening hours\",\"orange-square\"],\"k\":[5,41]},\"male_mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FB-200D-2642\",\"image\":\"1f9d9-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":37,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FC-200D-2642\",\"image\":\"1f9d9-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":38,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FD-200D-2642\",\"image\":\"1f9d9-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":39,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FE-200D-2642\",\"image\":\"1f9d9-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":40,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FF-200D-2642\",\"image\":\"1f9d9-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":41,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Mage\",\"b\":\"1F9D9-200D-2642-FE0F\",\"c\":\"1F9D9-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,36],\"o\":10},\"cloud\":{\"a\":\"Cloud\",\"b\":\"2601-FE0F\",\"c\":\"2601\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weather\",\"sky\"],\"k\":[47,17],\"o\":1},\"flag-nz\":{\"a\":\"New Zealand Flag\",\"b\":\"1F1F3-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[3,51]},\"partly_sunny\":{\"a\":\"Sun Behind Cloud\",\"b\":\"26C5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weather\",\"nature\",\"cloudy\",\"morning\",\"fall\",\"spring\"],\"k\":[48,29],\"o\":5},\"fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB\",\"non_qualified\":null,\"image\":\"1f9da-1f3fb.png\",\"sheet_x\":45,\"sheet_y\":9,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DA-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC\",\"non_qualified\":null,\"image\":\"1f9da-1f3fc.png\",\"sheet_x\":45,\"sheet_y\":10,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DA-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD\",\"non_qualified\":null,\"image\":\"1f9da-1f3fd.png\",\"sheet_x\":45,\"sheet_y\":11,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DA-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE\",\"non_qualified\":null,\"image\":\"1f9da-1f3fe.png\",\"sheet_x\":45,\"sheet_y\":12,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DA-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF\",\"non_qualified\":null,\"image\":\"1f9da-1f3ff.png\",\"sheet_x\":45,\"sheet_y\":13,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DA-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9DA-200D-2640-FE0F\",\"a\":\"Fairy\",\"b\":\"1F9DA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,8],\"o\":10},\"u6e80\":{\"a\":\"Squared Cjk Unified Ideograph-6e80\",\"b\":\"1F235\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"full\",\"chinese\",\"japanese\",\"red-square\",\"kanji\"],\"k\":[5,36]},\"black_small_square\":{\"a\":\"Black Small Square\",\"b\":\"25AA-FE0F\",\"c\":\"25AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"icon\"],\"k\":[47,8],\"o\":1},\"thunder_cloud_and_rain\":{\"a\":\"Thunder Cloud and Rain\",\"b\":\"26C8-FE0F\",\"c\":\"26C8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[48,30],\"o\":5},\"female_fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FB-200D-2640\",\"image\":\"1f9da-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":49,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DA-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FC-200D-2640\",\"image\":\"1f9da-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":50,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DA-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FD-200D-2640\",\"image\":\"1f9da-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":51,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DA-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FE-200D-2640\",\"image\":\"1f9da-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":0,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DA-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FF-200D-2640\",\"image\":\"1f9da-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":1,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DA-1F3FF\"}},\"obsoletes\":\"1F9DA\",\"a\":\"Female Fairy\",\"b\":\"1F9DA-200D-2640-FE0F\",\"c\":\"1F9DA-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,48],\"o\":10},\"flag-om\":{\"a\":\"Oman Flag\",\"b\":\"1F1F4-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,0]},\"white_small_square\":{\"a\":\"White Small Square\",\"b\":\"25AB-FE0F\",\"c\":\"25AB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"icon\"],\"k\":[47,9],\"o\":1},\"flag-pa\":{\"a\":\"Panama Flag\",\"b\":\"1F1F5-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,1]},\"mostly_sunny\":{\"a\":\"Mostly Sunny\",\"b\":\"1F324-FE0F\",\"c\":\"1F324\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,26],\"n\":[\"sun_small_cloud\"],\"o\":7},\"male_fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FB-200D-2642\",\"image\":\"1f9da-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":3,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FC-200D-2642\",\"image\":\"1f9da-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":4,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FD-200D-2642\",\"image\":\"1f9da-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":5,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FE-200D-2642\",\"image\":\"1f9da-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":6,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FF-200D-2642\",\"image\":\"1f9da-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":7,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Fairy\",\"b\":\"1F9DA-200D-2642-FE0F\",\"c\":\"1F9DA-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,2],\"o\":10},\"barely_sunny\":{\"a\":\"Barely Sunny\",\"b\":\"1F325-FE0F\",\"c\":\"1F325\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,27],\"n\":[\"sun_behind_cloud\"],\"o\":7},\"white_medium_square\":{\"a\":\"White Medium Square\",\"b\":\"25FB-FE0F\",\"c\":\"25FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"stone\",\"icon\"],\"k\":[47,12],\"o\":3},\"flag-pe\":{\"a\":\"Peru Flag\",\"b\":\"1F1F5-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,2]},\"vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB\",\"non_qualified\":null,\"image\":\"1f9db-1f3fb.png\",\"sheet_x\":45,\"sheet_y\":27,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DB-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC\",\"non_qualified\":null,\"image\":\"1f9db-1f3fc.png\",\"sheet_x\":45,\"sheet_y\":28,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DB-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD\",\"non_qualified\":null,\"image\":\"1f9db-1f3fd.png\",\"sheet_x\":45,\"sheet_y\":29,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DB-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE\",\"non_qualified\":null,\"image\":\"1f9db-1f3fe.png\",\"sheet_x\":45,\"sheet_y\":30,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DB-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF\",\"non_qualified\":null,\"image\":\"1f9db-1f3ff.png\",\"sheet_x\":45,\"sheet_y\":31,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DB-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9DB-200D-2640-FE0F\",\"a\":\"Vampire\",\"b\":\"1F9DB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,26],\"o\":10},\"female_vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FB-200D-2640\",\"image\":\"1f9db-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":15,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DB-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FC-200D-2640\",\"image\":\"1f9db-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":16,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DB-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FD-200D-2640\",\"image\":\"1f9db-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":17,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DB-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FE-200D-2640\",\"image\":\"1f9db-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":18,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DB-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FF-200D-2640\",\"image\":\"1f9db-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":19,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DB-1F3FF\"}},\"obsoletes\":\"1F9DB\",\"a\":\"Female Vampire\",\"b\":\"1F9DB-200D-2640-FE0F\",\"c\":\"1F9DB-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,14],\"o\":10},\"partly_sunny_rain\":{\"a\":\"Partly Sunny Rain\",\"b\":\"1F326-FE0F\",\"c\":\"1F326\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,28],\"n\":[\"sun_behind_rain_cloud\"],\"o\":7},\"flag-pf\":{\"a\":\"French Polynesia Flag\",\"b\":\"1F1F5-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,3]},\"black_medium_square\":{\"a\":\"Black Medium Square\",\"b\":\"25FC-FE0F\",\"c\":\"25FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"button\",\"icon\"],\"k\":[47,13],\"o\":3},\"white_medium_small_square\":{\"a\":\"White Medium Small Square\",\"b\":\"25FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"stone\",\"icon\",\"button\"],\"k\":[47,14],\"o\":3},\"rain_cloud\":{\"a\":\"Rain Cloud\",\"b\":\"1F327-FE0F\",\"c\":\"1F327\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,29],\"o\":7},\"flag-pg\":{\"a\":\"Papua New Guinea Flag\",\"b\":\"1F1F5-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,4]},\"male_vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FB-200D-2642\",\"image\":\"1f9db-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":21,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FC-200D-2642\",\"image\":\"1f9db-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":22,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FD-200D-2642\",\"image\":\"1f9db-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":23,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FE-200D-2642\",\"image\":\"1f9db-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":24,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FF-200D-2642\",\"image\":\"1f9db-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":25,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Male Vampire\",\"b\":\"1F9DB-200D-2642-FE0F\",\"c\":\"1F9DB-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,20],\"o\":10},\"flag-ph\":{\"a\":\"Philippines Flag\",\"b\":\"1F1F5-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,5]},\"merperson\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fb.png\",\"sheet_x\":45,\"sheet_y\":45,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DC-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fc.png\",\"sheet_x\":45,\"sheet_y\":46,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DC-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fd.png\",\"sheet_x\":45,\"sheet_y\":47,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DC-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fe.png\",\"sheet_x\":45,\"sheet_y\":48,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DC-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF\",\"non_qualified\":null,\"image\":\"1f9dc-1f3ff.png\",\"sheet_x\":45,\"sheet_y\":49,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DC-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9DC-200D-2642-FE0F\",\"a\":\"Merperson\",\"b\":\"1F9DC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,44],\"o\":10},\"black_medium_small_square\":{\"a\":\"Black Medium Small Square\",\"b\":\"25FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"icon\",\"shape\",\"button\"],\"k\":[47,15],\"o\":3},\"snow_cloud\":{\"a\":\"Snow Cloud\",\"b\":\"1F328-FE0F\",\"c\":\"1F328\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,30],\"o\":7},\"lightning\":{\"a\":\"Lightning\",\"b\":\"1F329-FE0F\",\"c\":\"1F329\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,31],\"n\":[\"lightning_cloud\"],\"o\":7},\"black_large_square\":{\"a\":\"Black Large Square\",\"b\":\"2B1B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"icon\",\"button\"],\"k\":[50,20],\"o\":5},\"mermaid\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FB-200D-2640\",\"image\":\"1f9dc-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":33,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FC-200D-2640\",\"image\":\"1f9dc-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":34,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FD-200D-2640\",\"image\":\"1f9dc-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":35,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FE-200D-2640\",\"image\":\"1f9dc-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":36,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FF-200D-2640\",\"image\":\"1f9dc-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":37,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Mermaid\",\"b\":\"1F9DC-200D-2640-FE0F\",\"c\":\"1F9DC-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,32],\"o\":10},\"flag-pk\":{\"a\":\"Pakistan Flag\",\"b\":\"1F1F5-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,6]},\"merman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FB-200D-2642\",\"image\":\"1f9dc-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":39,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DC-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FC-200D-2642\",\"image\":\"1f9dc-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":40,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DC-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FD-200D-2642\",\"image\":\"1f9dc-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":41,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DC-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FE-200D-2642\",\"image\":\"1f9dc-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":42,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DC-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FF-200D-2642\",\"image\":\"1f9dc-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":43,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DC-1F3FF\"}},\"obsoletes\":\"1F9DC\",\"a\":\"Merman\",\"b\":\"1F9DC-200D-2642-FE0F\",\"c\":\"1F9DC-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,38],\"o\":10},\"white_large_square\":{\"a\":\"White Large Square\",\"b\":\"2B1C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"icon\",\"stone\",\"button\"],\"k\":[50,21],\"o\":5},\"tornado\":{\"a\":\"Tornado\",\"b\":\"1F32A-FE0F\",\"c\":\"1F32A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"weather\",\"cyclone\",\"twister\"],\"k\":[6,32],\"n\":[\"tornado_cloud\"],\"o\":7},\"flag-pl\":{\"a\":\"Poland Flag\",\"b\":\"1F1F5-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,7]},\"elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fb.png\",\"sheet_x\":46,\"sheet_y\":11,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DD-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fc.png\",\"sheet_x\":46,\"sheet_y\":12,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DD-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fd.png\",\"sheet_x\":46,\"sheet_y\":13,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DD-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fe.png\",\"sheet_x\":46,\"sheet_y\":14,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DD-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF\",\"non_qualified\":null,\"image\":\"1f9dd-1f3ff.png\",\"sheet_x\":46,\"sheet_y\":15,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9DD-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9DD-200D-2642-FE0F\",\"a\":\"Elf\",\"b\":\"1F9DD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,10],\"o\":10},\"fog\":{\"a\":\"Fog\",\"b\":\"1F32B-FE0F\",\"c\":\"1F32B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"weather\"],\"k\":[6,33],\"o\":7},\"large_orange_diamond\":{\"a\":\"Large Orange Diamond\",\"b\":\"1F536\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,4]},\"flag-pm\":{\"a\":\"St. Pierre & Miquelon Flag\",\"b\":\"1F1F5-1F1F2\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,8]},\"flag-pn\":{\"a\":\"Pitcairn Islands Flag\",\"b\":\"1F1F5-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,9]},\"wind_blowing_face\":{\"a\":\"Wind Blowing Face\",\"b\":\"1F32C-FE0F\",\"c\":\"1F32C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[6,34],\"o\":7},\"female_elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FB-200D-2640\",\"image\":\"1f9dd-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":51,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FC-200D-2640\",\"image\":\"1f9dd-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":46,\"sheet_y\":0,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FD-200D-2640\",\"image\":\"1f9dd-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":46,\"sheet_y\":1,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FE-200D-2640\",\"image\":\"1f9dd-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":46,\"sheet_y\":2,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FF-200D-2640\",\"image\":\"1f9dd-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":46,\"sheet_y\":3,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Female Elf\",\"b\":\"1F9DD-200D-2640-FE0F\",\"c\":\"1F9DD-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[45,50],\"o\":10},\"large_blue_diamond\":{\"a\":\"Large Blue Diamond\",\"b\":\"1F537\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,5]},\"male_elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FB-200D-2642\",\"image\":\"1f9dd-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":46,\"sheet_y\":5,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DD-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FC-200D-2642\",\"image\":\"1f9dd-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":46,\"sheet_y\":6,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DD-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FD-200D-2642\",\"image\":\"1f9dd-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":46,\"sheet_y\":7,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DD-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FE-200D-2642\",\"image\":\"1f9dd-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":46,\"sheet_y\":8,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DD-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FF-200D-2642\",\"image\":\"1f9dd-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":46,\"sheet_y\":9,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9DD-1F3FF\"}},\"obsoletes\":\"1F9DD\",\"a\":\"Male Elf\",\"b\":\"1F9DD-200D-2642-FE0F\",\"c\":\"1F9DD-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,4],\"o\":10},\"small_orange_diamond\":{\"a\":\"Small Orange Diamond\",\"b\":\"1F538\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,6]},\"flag-pr\":{\"a\":\"Puerto Rico Flag\",\"b\":\"1F1F5-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,10]},\"cyclone\":{\"a\":\"Cyclone\",\"b\":\"1F300\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weather\",\"swirl\",\"blue\",\"cloud\",\"vortex\",\"spiral\",\"whirlpool\",\"spin\",\"tornado\",\"hurricane\",\"typhoon\"],\"k\":[5,44]},\"rainbow\":{\"a\":\"Rainbow\",\"b\":\"1F308\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"nature\",\"happy\",\"unicorn_face\",\"photo\",\"sky\",\"spring\"],\"k\":[6,0]},\"small_blue_diamond\":{\"a\":\"Small Blue Diamond\",\"b\":\"1F539\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,7]},\"genie\":{\"obsoleted_by\":\"1F9DE-200D-2642-FE0F\",\"a\":\"Genie\",\"b\":\"1F9DE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,18],\"o\":10},\"flag-ps\":{\"a\":\"Palestinian Territories Flag\",\"b\":\"1F1F5-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,11]},\"small_red_triangle\":{\"a\":\"Up-Pointing Red Triangle\",\"b\":\"1F53A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"direction\",\"up\",\"top\"],\"k\":[28,8]},\"closed_umbrella\":{\"a\":\"Closed Umbrella\",\"b\":\"1F302\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"weather\",\"rain\",\"drizzle\"],\"k\":[5,46]},\"female_genie\":{\"a\":\"Female Genie\",\"b\":\"1F9DE-200D-2640-FE0F\",\"c\":\"1F9DE-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,16],\"o\":10},\"flag-pt\":{\"a\":\"Portugal Flag\",\"b\":\"1F1F5-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,12]},\"flag-pw\":{\"a\":\"Palau Flag\",\"b\":\"1F1F5-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,13]},\"small_red_triangle_down\":{\"a\":\"Down-Pointing Red Triangle\",\"b\":\"1F53B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"direction\",\"bottom\"],\"k\":[28,9]},\"umbrella\":{\"a\":\"Umbrella\",\"b\":\"2602-FE0F\",\"c\":\"2602\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"rainy\",\"weather\",\"spring\"],\"k\":[47,18],\"o\":1},\"male_genie\":{\"obsoletes\":\"1F9DE\",\"a\":\"Male Genie\",\"b\":\"1F9DE-200D-2642-FE0F\",\"c\":\"1F9DE-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,17],\"o\":10},\"zombie\":{\"obsoleted_by\":\"1F9DF-200D-2642-FE0F\",\"a\":\"Zombie\",\"b\":\"1F9DF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,21],\"o\":10},\"flag-py\":{\"a\":\"Paraguay Flag\",\"b\":\"1F1F5-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,14]},\"diamond_shape_with_a_dot_inside\":{\"a\":\"Diamond Shape with a Dot Inside\",\"b\":\"1F4A0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"jewel\",\"blue\",\"gem\",\"crystal\",\"fancy\"],\"k\":[25,6]},\"umbrella_with_rain_drops\":{\"a\":\"Umbrella with Rain Drops\",\"b\":\"2614\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[47,23],\"o\":4},\"radio_button\":{\"a\":\"Radio Button\",\"b\":\"1F518\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"input\",\"old\",\"music\",\"circle\"],\"k\":[27,26]},\"female_zombie\":{\"a\":\"Female Zombie\",\"b\":\"1F9DF-200D-2640-FE0F\",\"c\":\"1F9DF-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,19],\"o\":10},\"flag-qa\":{\"a\":\"Qatar Flag\",\"b\":\"1F1F6-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,15]},\"umbrella_on_ground\":{\"a\":\"Umbrella on Ground\",\"b\":\"26F1-FE0F\",\"c\":\"26F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[48,39],\"o\":5},\"black_square_button\":{\"a\":\"Black Square Button\",\"b\":\"1F532\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"input\",\"frame\"],\"k\":[28,0]},\"zap\":{\"a\":\"High Voltage Sign\",\"b\":\"26A1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"thunder\",\"weather\",\"lightning bolt\",\"fast\"],\"k\":[48,21],\"o\":4},\"male_zombie\":{\"obsoletes\":\"1F9DF\",\"a\":\"Male Zombie\",\"b\":\"1F9DF-200D-2642-FE0F\",\"c\":\"1F9DF-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,20],\"o\":10},\"flag-re\":{\"a\":\"Réunion Flag\",\"b\":\"1F1F7-1F1EA\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,16]},\"flag-ro\":{\"a\":\"Romania Flag\",\"b\":\"1F1F7-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,17]},\"snowflake\":{\"a\":\"Snowflake\",\"b\":\"2744-FE0F\",\"c\":\"2744\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\"],\"k\":[49,51],\"o\":1},\"white_square_button\":{\"a\":\"White Square Button\",\"b\":\"1F533\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"input\"],\"k\":[28,1]},\"person_frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB\",\"non_qualified\":null,\"image\":\"1f64d-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F64D-1F3FC\",\"non_qualified\":null,\"image\":\"1f64d-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F64D-1F3FD\",\"non_qualified\":null,\"image\":\"1f64d-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F64D-1F3FE\",\"non_qualified\":null,\"image\":\"1f64d-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F64D-1F3FF\",\"non_qualified\":null,\"image\":\"1f64d-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F64D-200D-2640-FE0F\",\"a\":\"Person Frowning\",\"b\":\"1F64D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[33,30]},\"flag-rs\":{\"a\":\"Serbia Flag\",\"b\":\"1F1F7-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,18]},\"man-frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FB-200D-2642\",\"image\":\"1f64d-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64D-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FC-200D-2642\",\"image\":\"1f64d-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64D-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FD-200D-2642\",\"image\":\"1f64d-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64D-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FE-200D-2642\",\"image\":\"1f64d-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64D-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FF-200D-2642\",\"image\":\"1f64d-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Frowning\",\"b\":\"1F64D-200D-2642-FE0F\",\"c\":\"1F64D-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[33,24]},\"white_circle\":{\"a\":\"Medium White Circle\",\"b\":\"26AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"round\"],\"k\":[48,22],\"o\":4},\"snowman\":{\"a\":\"Snowman\",\"b\":\"2603-FE0F\",\"c\":\"2603\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\",\"frozen\",\"without_snow\"],\"k\":[47,19],\"o\":1},\"snowman_without_snow\":{\"a\":\"Snowman Without Snow\",\"b\":\"26C4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[48,28],\"o\":5},\"ru\":{\"a\":\"Russia Flag\",\"b\":\"1F1F7-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"russian\",\"federation\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[4,19],\"n\":[\"flag-ru\"]},\"black_circle\":{\"a\":\"Medium Black Circle\",\"b\":\"26AB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"button\",\"round\"],\"k\":[48,23],\"o\":4},\"woman-frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FB-200D-2640\",\"image\":\"1f64d-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64D-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FC-200D-2640\",\"image\":\"1f64d-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64D-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FD-200D-2640\",\"image\":\"1f64d-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64D-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FE-200D-2640\",\"image\":\"1f64d-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64D-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FF-200D-2640\",\"image\":\"1f64d-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F64D\",\"a\":\"Woman Frowning\",\"b\":\"1F64D-200D-2640-FE0F\",\"c\":\"1F64D-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[33,18]},\"flag-rw\":{\"a\":\"Rwanda Flag\",\"b\":\"1F1F7-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,20]},\"comet\":{\"a\":\"Comet\",\"b\":\"2604-FE0F\",\"c\":\"2604\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"space\"],\"k\":[47,20],\"o\":1},\"person_with_pouting_face\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB\",\"non_qualified\":null,\"image\":\"1f64e-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F64E-1F3FC\",\"non_qualified\":null,\"image\":\"1f64e-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F64E-1F3FD\",\"non_qualified\":null,\"image\":\"1f64e-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F64E-1F3FE\",\"non_qualified\":null,\"image\":\"1f64e-1f3fe.png\",\"sheet_x\":34,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F64E-1F3FF\",\"non_qualified\":null,\"image\":\"1f64e-1f3ff.png\",\"sheet_x\":34,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F64E-200D-2640-FE0F\",\"a\":\"Person with Pouting Face\",\"b\":\"1F64E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[33,48]},\"red_circle\":{\"a\":\"Large Red Circle\",\"b\":\"1F534\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"error\",\"danger\"],\"k\":[28,2]},\"large_blue_circle\":{\"a\":\"Large Blue Circle\",\"b\":\"1F535\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shape\",\"icon\",\"button\"],\"k\":[28,3]},\"man-pouting\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FB-200D-2642\",\"image\":\"1f64e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FC-200D-2642\",\"image\":\"1f64e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FD-200D-2642\",\"image\":\"1f64e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FE-200D-2642\",\"image\":\"1f64e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FF-200D-2642\",\"image\":\"1f64e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Pouting\",\"b\":\"1F64E-200D-2642-FE0F\",\"c\":\"1F64E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[33,42]},\"flag-sa\":{\"a\":\"Saudi Arabia Flag\",\"b\":\"1F1F8-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,21]},\"fire\":{\"a\":\"Fire\",\"b\":\"1F525\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hot\",\"cook\",\"flame\"],\"k\":[27,39]},\"woman-pouting\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FB-200D-2640\",\"image\":\"1f64e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FC-200D-2640\",\"image\":\"1f64e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FD-200D-2640\",\"image\":\"1f64e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FE-200D-2640\",\"image\":\"1f64e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FF-200D-2640\",\"image\":\"1f64e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F64E\",\"a\":\"Woman Pouting\",\"b\":\"1F64E-200D-2640-FE0F\",\"c\":\"1F64E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[33,36]},\"flag-sb\":{\"a\":\"Solomon Islands Flag\",\"b\":\"1F1F8-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,22]},\"droplet\":{\"a\":\"Droplet\",\"b\":\"1F4A7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"water\",\"drip\",\"faucet\",\"spring\"],\"k\":[25,13]},\"no_good\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB\",\"non_qualified\":null,\"image\":\"1f645-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F645-1F3FC\",\"non_qualified\":null,\"image\":\"1f645-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F645-1F3FD\",\"non_qualified\":null,\"image\":\"1f645-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F645-1F3FE\",\"non_qualified\":null,\"image\":\"1f645-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F645-1F3FF\",\"non_qualified\":null,\"image\":\"1f645-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F645-200D-2640-FE0F\",\"a\":\"Face with No Good Gesture\",\"b\":\"1F645\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[32,1]},\"flag-sc\":{\"a\":\"Seychelles Flag\",\"b\":\"1F1F8-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,23]},\"ocean\":{\"a\":\"Water Wave\",\"b\":\"1F30A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sea\",\"water\",\"wave\",\"nature\",\"tsunami\",\"disaster\"],\"k\":[6,2]},\"man-gesturing-no\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FB-200D-2642\",\"image\":\"1f645-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F645-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FC-200D-2642\",\"image\":\"1f645-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F645-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FD-200D-2642\",\"image\":\"1f645-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F645-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FE-200D-2642\",\"image\":\"1f645-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F645-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FF-200D-2642\",\"image\":\"1f645-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Gesturing No\",\"b\":\"1F645-200D-2642-FE0F\",\"c\":\"1F645-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[31,47]},\"flag-sd\":{\"a\":\"Sudan Flag\",\"b\":\"1F1F8-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,24]},\"woman-gesturing-no\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FB-200D-2640\",\"image\":\"1f645-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F645-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FC-200D-2640\",\"image\":\"1f645-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F645-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FD-200D-2640\",\"image\":\"1f645-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F645-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FE-200D-2640\",\"image\":\"1f645-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F645-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FF-200D-2640\",\"image\":\"1f645-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F645\",\"a\":\"Woman Gesturing No\",\"b\":\"1F645-200D-2640-FE0F\",\"c\":\"1F645-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[31,41]},\"flag-se\":{\"a\":\"Sweden Flag\",\"b\":\"1F1F8-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,25]},\"flag-sg\":{\"a\":\"Singapore Flag\",\"b\":\"1F1F8-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,26]},\"ok_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB\",\"non_qualified\":null,\"image\":\"1f646-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F646-1F3FC\",\"non_qualified\":null,\"image\":\"1f646-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F646-1F3FD\",\"non_qualified\":null,\"image\":\"1f646-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F646-1F3FE\",\"non_qualified\":null,\"image\":\"1f646-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F646-1F3FF\",\"non_qualified\":null,\"image\":\"1f646-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F646-200D-2640-FE0F\",\"a\":\"Face with Ok Gesture\",\"b\":\"1F646\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"j\":[\"women\",\"girl\",\"female\",\"pink\",\"human\",\"woman\"],\"k\":[32,19]},\"flag-sh\":{\"a\":\"St. Helena Flag\",\"b\":\"1F1F8-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,27]},\"man-gesturing-ok\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FB-200D-2642\",\"image\":\"1f646-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F646-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FC-200D-2642\",\"image\":\"1f646-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F646-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FD-200D-2642\",\"image\":\"1f646-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F646-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FE-200D-2642\",\"image\":\"1f646-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F646-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FF-200D-2642\",\"image\":\"1f646-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Gesturing Ok\",\"b\":\"1F646-200D-2642-FE0F\",\"c\":\"1F646-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[32,13]},\"flag-si\":{\"a\":\"Slovenia Flag\",\"b\":\"1F1F8-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,28]},\"woman-gesturing-ok\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FB-200D-2640\",\"image\":\"1f646-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F646-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FC-200D-2640\",\"image\":\"1f646-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F646-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FD-200D-2640\",\"image\":\"1f646-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F646-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FE-200D-2640\",\"image\":\"1f646-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F646-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FF-200D-2640\",\"image\":\"1f646-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F646\",\"a\":\"Woman Gesturing Ok\",\"b\":\"1F646-200D-2640-FE0F\",\"c\":\"1F646-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[32,7]},\"information_desk_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB\",\"non_qualified\":null,\"image\":\"1f481-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F481-1F3FC\",\"non_qualified\":null,\"image\":\"1f481-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F481-1F3FD\",\"non_qualified\":null,\"image\":\"1f481-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F481-1F3FE\",\"non_qualified\":null,\"image\":\"1f481-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F481-1F3FF\",\"non_qualified\":null,\"image\":\"1f481-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F481-200D-2640-FE0F\",\"a\":\"Information Desk Person\",\"b\":\"1F481\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[23,13]},\"flag-sj\":{\"a\":\"Svalbard & Jan Mayen Flag\",\"b\":\"1F1F8-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,29]},\"man-tipping-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FB-200D-2642\",\"image\":\"1f481-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F481-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FC-200D-2642\",\"image\":\"1f481-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F481-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FD-200D-2642\",\"image\":\"1f481-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F481-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FE-200D-2642\",\"image\":\"1f481-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F481-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FF-200D-2642\",\"image\":\"1f481-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Tipping Hand\",\"b\":\"1F481-200D-2642-FE0F\",\"c\":\"1F481-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[23,7]},\"flag-sk\":{\"a\":\"Slovakia Flag\",\"b\":\"1F1F8-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,30]},\"flag-sl\":{\"a\":\"Sierra Leone Flag\",\"b\":\"1F1F8-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,31]},\"woman-tipping-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FB-200D-2640\",\"image\":\"1f481-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F481-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FC-200D-2640\",\"image\":\"1f481-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F481-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FD-200D-2640\",\"image\":\"1f481-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F481-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FE-200D-2640\",\"image\":\"1f481-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F481-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FF-200D-2640\",\"image\":\"1f481-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F481\",\"a\":\"Woman Tipping Hand\",\"b\":\"1F481-200D-2640-FE0F\",\"c\":\"1F481-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[23,1]},\"flag-sm\":{\"a\":\"San Marino Flag\",\"b\":\"1F1F8-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,32]},\"raising_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB\",\"non_qualified\":null,\"image\":\"1f64b-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F64B-1F3FC\",\"non_qualified\":null,\"image\":\"1f64b-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F64B-1F3FD\",\"non_qualified\":null,\"image\":\"1f64b-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F64B-1F3FE\",\"non_qualified\":null,\"image\":\"1f64b-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F64B-1F3FF\",\"non_qualified\":null,\"image\":\"1f64b-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F64B-200D-2640-FE0F\",\"a\":\"Happy Person Raising One Hand\",\"b\":\"1F64B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[33,6]},\"flag-sn\":{\"a\":\"Senegal Flag\",\"b\":\"1F1F8-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,33]},\"man-raising-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FB-200D-2642\",\"image\":\"1f64b-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64B-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FC-200D-2642\",\"image\":\"1f64b-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64B-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FD-200D-2642\",\"image\":\"1f64b-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64B-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FE-200D-2642\",\"image\":\"1f64b-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64B-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FF-200D-2642\",\"image\":\"1f64b-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Raising Hand\",\"b\":\"1F64B-200D-2642-FE0F\",\"c\":\"1F64B-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[33,0]},\"flag-so\":{\"a\":\"Somalia Flag\",\"b\":\"1F1F8-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,34]},\"woman-raising-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FB-200D-2640\",\"image\":\"1f64b-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F64B-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FC-200D-2640\",\"image\":\"1f64b-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F64B-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FD-200D-2640\",\"image\":\"1f64b-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F64B-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FE-200D-2640\",\"image\":\"1f64b-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F64B-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FF-200D-2640\",\"image\":\"1f64b-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F64B\",\"a\":\"Woman Raising Hand\",\"b\":\"1F64B-200D-2640-FE0F\",\"c\":\"1F64B-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[32,46]},\"flag-sr\":{\"a\":\"Suriname Flag\",\"b\":\"1F1F8-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,35]},\"bow\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB\",\"non_qualified\":null,\"image\":\"1f647-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F647-1F3FC\",\"non_qualified\":null,\"image\":\"1f647-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F647-1F3FD\",\"non_qualified\":null,\"image\":\"1f647-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F647-1F3FE\",\"non_qualified\":null,\"image\":\"1f647-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F647-1F3FF\",\"non_qualified\":null,\"image\":\"1f647-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F647-200D-2642-FE0F\",\"a\":\"Person Bowing Deeply\",\"b\":\"1F647\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[32,37]},\"man-bowing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FB-200D-2642\",\"image\":\"1f647-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F647-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FC-200D-2642\",\"image\":\"1f647-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F647-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FD-200D-2642\",\"image\":\"1f647-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F647-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FE-200D-2642\",\"image\":\"1f647-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F647-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FF-200D-2642\",\"image\":\"1f647-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F647\",\"a\":\"Man Bowing\",\"b\":\"1F647-200D-2642-FE0F\",\"c\":\"1F647-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[32,31]},\"flag-ss\":{\"a\":\"South Sudan Flag\",\"b\":\"1F1F8-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,36]},\"woman-bowing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FB-200D-2640\",\"image\":\"1f647-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F647-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FC-200D-2640\",\"image\":\"1f647-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F647-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FD-200D-2640\",\"image\":\"1f647-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F647-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FE-200D-2640\",\"image\":\"1f647-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F647-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FF-200D-2640\",\"image\":\"1f647-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Bowing\",\"b\":\"1F647-200D-2640-FE0F\",\"c\":\"1F647-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[32,25]},\"flag-st\":{\"a\":\"São Tomé & Príncipe Flag\",\"b\":\"1F1F8-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,37]},\"face_palm\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB\",\"non_qualified\":null,\"image\":\"1f926-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":42,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F926-1F3FC\",\"non_qualified\":null,\"image\":\"1f926-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":43,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F926-1F3FD\",\"non_qualified\":null,\"image\":\"1f926-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":44,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F926-1F3FE\",\"non_qualified\":null,\"image\":\"1f926-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":45,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F926-1F3FF\",\"non_qualified\":null,\"image\":\"1f926-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":46,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Face Palm\",\"b\":\"1F926\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[38,41],\"o\":9},\"flag-sv\":{\"a\":\"El Salvador Flag\",\"b\":\"1F1F8-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,38]},\"man-facepalming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FB-200D-2642\",\"image\":\"1f926-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":36,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F926-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FC-200D-2642\",\"image\":\"1f926-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":37,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F926-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FD-200D-2642\",\"image\":\"1f926-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":38,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F926-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FE-200D-2642\",\"image\":\"1f926-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":39,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F926-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FF-200D-2642\",\"image\":\"1f926-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":40,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Facepalming\",\"b\":\"1F926-200D-2642-FE0F\",\"c\":\"1F926-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,35],\"o\":9},\"flag-sx\":{\"a\":\"Sint Maarten Flag\",\"b\":\"1F1F8-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,39]},\"flag-sy\":{\"a\":\"Syria Flag\",\"b\":\"1F1F8-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,40]},\"woman-facepalming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FB-200D-2640\",\"image\":\"1f926-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":30,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F926-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FC-200D-2640\",\"image\":\"1f926-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":31,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F926-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FD-200D-2640\",\"image\":\"1f926-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":32,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F926-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FE-200D-2640\",\"image\":\"1f926-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":33,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F926-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FF-200D-2640\",\"image\":\"1f926-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":34,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Facepalming\",\"b\":\"1F926-200D-2640-FE0F\",\"c\":\"1F926-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,29],\"o\":9},\"shrug\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB\",\"non_qualified\":null,\"image\":\"1f937-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":7,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F937-1F3FC\",\"non_qualified\":null,\"image\":\"1f937-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":8,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F937-1F3FD\",\"non_qualified\":null,\"image\":\"1f937-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":9,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F937-1F3FE\",\"non_qualified\":null,\"image\":\"1f937-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":10,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F937-1F3FF\",\"non_qualified\":null,\"image\":\"1f937-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":11,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Shrug\",\"b\":\"1F937\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[40,6],\"o\":9},\"flag-sz\":{\"a\":\"Swaziland Flag\",\"b\":\"1F1F8-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,41]},\"flag-ta\":{\"a\":\"Tristan Da Cunha Flag\",\"b\":\"1F1F9-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,42]},\"man-shrugging\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FB-200D-2642\",\"image\":\"1f937-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":1,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F937-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FC-200D-2642\",\"image\":\"1f937-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":2,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F937-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FD-200D-2642\",\"image\":\"1f937-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":3,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F937-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FE-200D-2642\",\"image\":\"1f937-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":4,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F937-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FF-200D-2642\",\"image\":\"1f937-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":5,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Shrugging\",\"b\":\"1F937-200D-2642-FE0F\",\"c\":\"1F937-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,0],\"o\":9},\"woman-shrugging\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FB-200D-2640\",\"image\":\"1f937-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":47,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F937-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FC-200D-2640\",\"image\":\"1f937-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":48,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F937-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FD-200D-2640\",\"image\":\"1f937-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":49,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F937-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FE-200D-2640\",\"image\":\"1f937-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":50,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F937-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FF-200D-2640\",\"image\":\"1f937-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":51,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Shrugging\",\"b\":\"1F937-200D-2640-FE0F\",\"c\":\"1F937-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,46],\"o\":9},\"flag-tc\":{\"a\":\"Turks & Caicos Islands Flag\",\"b\":\"1F1F9-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,43]},\"massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB\",\"non_qualified\":null,\"image\":\"1f486-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F486-1F3FC\",\"non_qualified\":null,\"image\":\"1f486-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F486-1F3FD\",\"non_qualified\":null,\"image\":\"1f486-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F486-1F3FE\",\"non_qualified\":null,\"image\":\"1f486-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F486-1F3FF\",\"non_qualified\":null,\"image\":\"1f486-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F486-200D-2640-FE0F\",\"a\":\"Face Massage\",\"b\":\"1F486\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[24,10]},\"flag-td\":{\"a\":\"Chad Flag\",\"b\":\"1F1F9-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,44]},\"man-getting-massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FB-200D-2642\",\"image\":\"1f486-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F486-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FC-200D-2642\",\"image\":\"1f486-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F486-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FD-200D-2642\",\"image\":\"1f486-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F486-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FE-200D-2642\",\"image\":\"1f486-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F486-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FF-200D-2642\",\"image\":\"1f486-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Getting Massage\",\"b\":\"1F486-200D-2642-FE0F\",\"c\":\"1F486-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[24,4]},\"flag-tf\":{\"a\":\"French Southern Territories Flag\",\"b\":\"1F1F9-1F1EB\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,45]},\"woman-getting-massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FB-200D-2640\",\"image\":\"1f486-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F486-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FC-200D-2640\",\"image\":\"1f486-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F486-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FD-200D-2640\",\"image\":\"1f486-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F486-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FE-200D-2640\",\"image\":\"1f486-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F486-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FF-200D-2640\",\"image\":\"1f486-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F486\",\"a\":\"Woman Getting Massage\",\"b\":\"1F486-200D-2640-FE0F\",\"c\":\"1F486-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[23,50]},\"flag-tg\":{\"a\":\"Togo Flag\",\"b\":\"1F1F9-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,46]},\"haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB\",\"non_qualified\":null,\"image\":\"1f487-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F487-1F3FC\",\"non_qualified\":null,\"image\":\"1f487-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F487-1F3FD\",\"non_qualified\":null,\"image\":\"1f487-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F487-1F3FE\",\"non_qualified\":null,\"image\":\"1f487-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F487-1F3FF\",\"non_qualified\":null,\"image\":\"1f487-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F487-200D-2640-FE0F\",\"a\":\"Haircut\",\"b\":\"1F487\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[24,28]},\"flag-th\":{\"a\":\"Thailand Flag\",\"b\":\"1F1F9-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,47]},\"man-getting-haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FB-200D-2642\",\"image\":\"1f487-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F487-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FC-200D-2642\",\"image\":\"1f487-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F487-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FD-200D-2642\",\"image\":\"1f487-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F487-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FE-200D-2642\",\"image\":\"1f487-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F487-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FF-200D-2642\",\"image\":\"1f487-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Getting Haircut\",\"b\":\"1F487-200D-2642-FE0F\",\"c\":\"1F487-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[24,22]},\"flag-tj\":{\"a\":\"Tajikistan Flag\",\"b\":\"1F1F9-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,48]},\"flag-tk\":{\"a\":\"Tokelau Flag\",\"b\":\"1F1F9-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,49]},\"woman-getting-haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FB-200D-2640\",\"image\":\"1f487-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F487-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FC-200D-2640\",\"image\":\"1f487-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F487-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FD-200D-2640\",\"image\":\"1f487-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F487-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FE-200D-2640\",\"image\":\"1f487-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F487-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FF-200D-2640\",\"image\":\"1f487-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F487\",\"a\":\"Woman Getting Haircut\",\"b\":\"1F487-200D-2640-FE0F\",\"c\":\"1F487-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[24,16]},\"walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b6-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F6B6-200D-2642-FE0F\",\"a\":\"Pedestrian\",\"b\":\"1F6B6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[36,21]},\"flag-tl\":{\"a\":\"Timor-Leste Flag\",\"b\":\"1F1F9-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,50]},\"man-walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FB-200D-2642\",\"image\":\"1f6b6-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FC-200D-2642\",\"image\":\"1f6b6-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FD-200D-2642\",\"image\":\"1f6b6-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FE-200D-2642\",\"image\":\"1f6b6-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FF-200D-2642\",\"image\":\"1f6b6-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F6B6\",\"a\":\"Man Walking\",\"b\":\"1F6B6-200D-2642-FE0F\",\"c\":\"1F6B6-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[36,15]},\"flag-tm\":{\"a\":\"Turkmenistan Flag\",\"b\":\"1F1F9-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[4,51]},\"woman-walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FB-200D-2640\",\"image\":\"1f6b6-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":36,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FC-200D-2640\",\"image\":\"1f6b6-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":36,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FD-200D-2640\",\"image\":\"1f6b6-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":36,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FE-200D-2640\",\"image\":\"1f6b6-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":36,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FF-200D-2640\",\"image\":\"1f6b6-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":36,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Walking\",\"b\":\"1F6B6-200D-2640-FE0F\",\"c\":\"1F6B6-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[36,9]},\"flag-tn\":{\"a\":\"Tunisia Flag\",\"b\":\"1F1F9-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,0]},\"runner\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c3-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F3C3-200D-2642-FE0F\",\"a\":\"Runner\",\"b\":\"1F3C3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[9,46],\"n\":[\"running\"]},\"flag-to\":{\"a\":\"Tonga Flag\",\"b\":\"1F1F9-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,1]},\"man-running\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FB-200D-2642\",\"image\":\"1f3c3-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FC-200D-2642\",\"image\":\"1f3c3-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FD-200D-2642\",\"image\":\"1f3c3-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FE-200D-2642\",\"image\":\"1f3c3-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FF-200D-2642\",\"image\":\"1f3c3-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F3C3\",\"a\":\"Man Running\",\"b\":\"1F3C3-200D-2642-FE0F\",\"c\":\"1F3C3-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[9,40]},\"flag-tr\":{\"a\":\"Turkey Flag\",\"b\":\"1F1F9-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,2]},\"flag-tt\":{\"a\":\"Trinidad & Tobago Flag\",\"b\":\"1F1F9-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,3]},\"woman-running\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FB-200D-2640\",\"image\":\"1f3c3-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FC-200D-2640\",\"image\":\"1f3c3-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FD-200D-2640\",\"image\":\"1f3c3-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FE-200D-2640\",\"image\":\"1f3c3-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FF-200D-2640\",\"image\":\"1f3c3-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Running\",\"b\":\"1F3C3-200D-2640-FE0F\",\"c\":\"1F3C3-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[9,34]},\"flag-tv\":{\"a\":\"Tuvalu Flag\",\"b\":\"1F1F9-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,4]},\"dancer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F483-1F3FB\",\"non_qualified\":null,\"image\":\"1f483-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F483-1F3FC\",\"non_qualified\":null,\"image\":\"1f483-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F483-1F3FD\",\"non_qualified\":null,\"image\":\"1f483-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F483-1F3FE\",\"non_qualified\":null,\"image\":\"1f483-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F483-1F3FF\",\"non_qualified\":null,\"image\":\"1f483-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Dancer\",\"b\":\"1F483\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"female\",\"girl\",\"woman\",\"fun\"],\"k\":[23,37]},\"flag-tw\":{\"a\":\"Taiwan Flag\",\"b\":\"1F1F9-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,5]},\"man_dancing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F57A-1F3FB\",\"non_qualified\":null,\"image\":\"1f57a-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":22,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F57A-1F3FC\",\"non_qualified\":null,\"image\":\"1f57a-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":23,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F57A-1F3FD\",\"non_qualified\":null,\"image\":\"1f57a-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":24,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F57A-1F3FE\",\"non_qualified\":null,\"image\":\"1f57a-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":25,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F57A-1F3FF\",\"non_qualified\":null,\"image\":\"1f57a-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":26,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Man Dancing\",\"b\":\"1F57A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"male\",\"boy\",\"fun\",\"dancer\"],\"k\":[29,21],\"o\":9},\"dancers\":{\"obsoleted_by\":\"1F46F-200D-2640-FE0F\",\"a\":\"Woman with Bunny Ears\",\"b\":\"1F46F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[21,1]},\"flag-tz\":{\"a\":\"Tanzania Flag\",\"b\":\"1F1F9-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,6]},\"flag-ua\":{\"a\":\"Ukraine Flag\",\"b\":\"1F1FA-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,7]},\"man-with-bunny-ears-partying\":{\"a\":\"Man with Bunny Ears Partying\",\"b\":\"1F46F-200D-2642-FE0F\",\"c\":\"1F46F-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[21,0]},\"woman-with-bunny-ears-partying\":{\"obsoletes\":\"1F46F\",\"a\":\"Woman with Bunny Ears Partying\",\"b\":\"1F46F-200D-2640-FE0F\",\"c\":\"1F46F-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,51]},\"flag-ug\":{\"a\":\"Uganda Flag\",\"b\":\"1F1FA-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,8]},\"flag-um\":{\"a\":\"U.s. Outlying Islands Flag\",\"b\":\"1F1FA-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,9]},\"person_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":41,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D6-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":42,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D6-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":43,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D6-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":44,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D6-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d6-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":45,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D6-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9D6-200D-2642-FE0F\",\"a\":\"Person in Steamy Room\",\"b\":\"1F9D6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,40],\"o\":10},\"woman_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FB-200D-2640\",\"image\":\"1f9d6-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":29,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FC-200D-2640\",\"image\":\"1f9d6-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":30,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FD-200D-2640\",\"image\":\"1f9d6-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":31,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FE-200D-2640\",\"image\":\"1f9d6-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":32,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FF-200D-2640\",\"image\":\"1f9d6-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":33,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman in Steamy Room\",\"b\":\"1F9D6-200D-2640-FE0F\",\"c\":\"1F9D6-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,28],\"o\":10},\"flag-un\":{\"a\":\"United Nations Flag\",\"b\":\"1F1FA-1F1F3\",\"d\":false,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[5,10]},\"us\":{\"a\":\"United States Flag\",\"b\":\"1F1FA-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"united\",\"states\",\"america\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[5,11],\"n\":[\"flag-us\"]},\"man_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FB-200D-2642\",\"image\":\"1f9d6-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":35,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D6-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FC-200D-2642\",\"image\":\"1f9d6-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":36,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D6-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FD-200D-2642\",\"image\":\"1f9d6-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":37,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D6-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FE-200D-2642\",\"image\":\"1f9d6-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":38,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D6-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FF-200D-2642\",\"image\":\"1f9d6-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":39,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D6-1F3FF\"}},\"obsoletes\":\"1F9D6\",\"a\":\"Man in Steamy Room\",\"b\":\"1F9D6-200D-2642-FE0F\",\"c\":\"1F9D6-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,34],\"o\":10},\"person_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fb.png\",\"sheet_x\":44,\"sheet_y\":7,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D7-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":8,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D7-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":9,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D7-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":10,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D7-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d7-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":11,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D7-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D7-200D-2640-FE0F\",\"a\":\"Person Climbing\",\"b\":\"1F9D7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,6],\"o\":10},\"flag-uy\":{\"a\":\"Uruguay Flag\",\"b\":\"1F1FA-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,12]},\"woman_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FB-200D-2640\",\"image\":\"1f9d7-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":47,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D7-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FC-200D-2640\",\"image\":\"1f9d7-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":48,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D7-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FD-200D-2640\",\"image\":\"1f9d7-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":49,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D7-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FE-200D-2640\",\"image\":\"1f9d7-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":50,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D7-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FF-200D-2640\",\"image\":\"1f9d7-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":51,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D7-1F3FF\"}},\"obsoletes\":\"1F9D7\",\"a\":\"Woman Climbing\",\"b\":\"1F9D7-200D-2640-FE0F\",\"c\":\"1F9D7-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[43,46],\"o\":10},\"flag-uz\":{\"a\":\"Uzbekistan Flag\",\"b\":\"1F1FA-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,13]},\"man_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FB-200D-2642\",\"image\":\"1f9d7-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":1,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FC-200D-2642\",\"image\":\"1f9d7-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":2,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FD-200D-2642\",\"image\":\"1f9d7-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":3,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FE-200D-2642\",\"image\":\"1f9d7-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":4,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FF-200D-2642\",\"image\":\"1f9d7-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":5,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Climbing\",\"b\":\"1F9D7-200D-2642-FE0F\",\"c\":\"1F9D7-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,0],\"o\":10},\"flag-va\":{\"a\":\"Vatican City Flag\",\"b\":\"1F1FB-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,14]},\"person_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fb.png\",\"sheet_x\":44,\"sheet_y\":25,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D8-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":26,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D8-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":27,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D8-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":28,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D8-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d8-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":29,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false,\"obsoleted_by\":\"1F9D8-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D8-200D-2640-FE0F\",\"a\":\"Person in Lotus Position\",\"b\":\"1F9D8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,24],\"o\":10},\"flag-vc\":{\"a\":\"St. Vincent & Grenadines Flag\",\"b\":\"1F1FB-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,15]},\"flag-ve\":{\"a\":\"Venezuela Flag\",\"b\":\"1F1FB-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,16]},\"woman_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FB-200D-2640\",\"image\":\"1f9d8-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":13,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D8-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FC-200D-2640\",\"image\":\"1f9d8-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":14,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D8-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FD-200D-2640\",\"image\":\"1f9d8-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":15,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D8-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FE-200D-2640\",\"image\":\"1f9d8-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":16,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D8-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FF-200D-2640\",\"image\":\"1f9d8-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":17,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false,\"obsoletes\":\"1F9D8-1F3FF\"}},\"obsoletes\":\"1F9D8\",\"a\":\"Woman in Lotus Position\",\"b\":\"1F9D8-200D-2640-FE0F\",\"c\":\"1F9D8-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,12],\"o\":10},\"man_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FB-200D-2642\",\"image\":\"1f9d8-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":19,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FC-200D-2642\",\"image\":\"1f9d8-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":20,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FD-200D-2642\",\"image\":\"1f9d8-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":21,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FE-200D-2642\",\"image\":\"1f9d8-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":22,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FF-200D-2642\",\"image\":\"1f9d8-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":23,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man in Lotus Position\",\"b\":\"1F9D8-200D-2642-FE0F\",\"c\":\"1F9D8-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[44,18],\"o\":10},\"flag-vg\":{\"a\":\"British Virgin Islands Flag\",\"b\":\"1F1FB-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,17]},\"flag-vi\":{\"a\":\"U.s. Virgin Islands Flag\",\"b\":\"1F1FB-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,18]},\"bath\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6C0-1F3FB\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F6C0-1F3FC\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F6C0-1F3FD\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F6C0-1F3FE\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F6C0-1F3FF\",\"non_qualified\":null,\"image\":\"1f6c0-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Bath\",\"b\":\"1F6C0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"clean\",\"shower\",\"bathroom\"],\"k\":[36,36]},\"sleeping_accommodation\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6CC-1F3FB\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6CC-1F3FC\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6CC-1F3FD\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6CC-1F3FE\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6CC-1F3FF\",\"non_qualified\":null,\"image\":\"1f6cc-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Sleeping Accommodation\",\"b\":\"1F6CC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[36,48],\"o\":7},\"flag-vn\":{\"a\":\"Vietnam Flag\",\"b\":\"1F1FB-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,19]},\"man_in_business_suit_levitating\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F574-1F3FB\",\"non_qualified\":null,\"image\":\"1f574-1f3fb.png\",\"sheet_x\":28,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F574-1F3FC\",\"non_qualified\":null,\"image\":\"1f574-1f3fc.png\",\"sheet_x\":28,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F574-1F3FD\",\"non_qualified\":null,\"image\":\"1f574-1f3fd.png\",\"sheet_x\":28,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F574-1F3FE\",\"non_qualified\":null,\"image\":\"1f574-1f3fe.png\",\"sheet_x\":28,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F574-1F3FF\",\"non_qualified\":null,\"image\":\"1f574-1f3ff.png\",\"sheet_x\":28,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Man in Business Suit Levitating\",\"b\":\"1F574-FE0F\",\"c\":\"1F574\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[28,45],\"o\":7},\"flag-vu\":{\"a\":\"Vanuatu Flag\",\"b\":\"1F1FB-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,20]},\"flag-wf\":{\"a\":\"Wallis & Futuna Flag\",\"b\":\"1F1FC-1F1EB\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,21]},\"speaking_head_in_silhouette\":{\"a\":\"Speaking Head in Silhouette\",\"b\":\"1F5E3-FE0F\",\"c\":\"1F5E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[30,14],\"o\":7},\"bust_in_silhouette\":{\"a\":\"Bust in Silhouette\",\"b\":\"1F464\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"user\",\"person\",\"human\"],\"k\":[15,40]},\"flag-ws\":{\"a\":\"Samoa Flag\",\"b\":\"1F1FC-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,22]},\"busts_in_silhouette\":{\"a\":\"Busts in Silhouette\",\"b\":\"1F465\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"user\",\"person\",\"human\",\"group\",\"team\"],\"k\":[15,41]},\"flag-xk\":{\"a\":\"Kosovo Flag\",\"b\":\"1F1FD-1F1F0\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,23]},\"fencer\":{\"a\":\"Fencer\",\"b\":\"1F93A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,48],\"o\":9},\"flag-ye\":{\"a\":\"Yemen Flag\",\"b\":\"1F1FE-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,24]},\"flag-yt\":{\"a\":\"Mayotte Flag\",\"b\":\"1F1FE-1F1F9\",\"d\":true,\"e\":false,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,25]},\"horse_racing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C7-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fb.png\",\"sheet_x\":10,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F3C7-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fc.png\",\"sheet_x\":10,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F3C7-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fd.png\",\"sheet_x\":10,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F3C7-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fe.png\",\"sheet_x\":10,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F3C7-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c7-1f3ff.png\",\"sheet_x\":10,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Horse Racing\",\"b\":\"1F3C7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"animal\",\"betting\",\"competition\",\"gambling\",\"luck\"],\"k\":[10,20]},\"flag-za\":{\"a\":\"South Africa Flag\",\"b\":\"1F1FF-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,26]},\"skier\":{\"a\":\"Skier\",\"b\":\"26F7-FE0F\",\"c\":\"26F7\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\",\"winter\",\"snow\"],\"k\":[48,44],\"o\":5},\"flag-zm\":{\"a\":\"Zambia Flag\",\"b\":\"1F1FF-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,27]},\"snowboarder\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C2-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F3C2-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F3C2-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F3C2-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F3C2-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c2-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Snowboarder\",\"b\":\"1F3C2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sports\",\"winter\"],\"k\":[9,28]},\"golfer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fb.png\",\"sheet_x\":11,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fc.png\",\"sheet_x\":11,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fd.png\",\"sheet_x\":11,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fe.png\",\"sheet_x\":11,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF\",\"non_qualified\":null,\"image\":\"1f3cc-1f3ff.png\",\"sheet_x\":11,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoleted_by\":\"1F3CC-FE0F-200D-2642-FE0F\",\"a\":\"Golfer\",\"b\":\"1F3CC-FE0F\",\"c\":\"1F3CC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[11,24],\"o\":7},\"flag-zw\":{\"a\":\"Zimbabwe Flag\",\"b\":\"1F1FF-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[5,28]},\"man-golfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FB-200D-2642\",\"image\":\"1f3cc-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FC-200D-2642\",\"image\":\"1f3cc-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FD-200D-2642\",\"image\":\"1f3cc-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FE-200D-2642\",\"image\":\"1f3cc-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FF-200D-2642\",\"image\":\"1f3cc-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F3CC-FE0F\",\"a\":\"Man Golfing\",\"b\":\"1F3CC-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[11,18],\"o\":7},\"flag-england\":{\"a\":\"England Flag\",\"b\":\"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,16],\"o\":7},\"woman-golfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FB-200D-2640\",\"image\":\"1f3cc-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":11,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FC-200D-2640\",\"image\":\"1f3cc-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":11,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FD-200D-2640\",\"image\":\"1f3cc-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":11,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FE-200D-2640\",\"image\":\"1f3cc-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":11,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FF-200D-2640\",\"image\":\"1f3cc-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":11,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Golfing\",\"b\":\"1F3CC-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[11,12],\"o\":7},\"flag-scotland\":{\"a\":\"Scotland Flag\",\"b\":\"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,17],\"o\":7},\"flag-wales\":{\"a\":\"Wales Flag\",\"b\":\"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[12,18],\"o\":7},\"surfer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fb.png\",\"sheet_x\":10,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fc.png\",\"sheet_x\":10,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fd.png\",\"sheet_x\":10,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fe.png\",\"sheet_x\":10,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c4-1f3ff.png\",\"sheet_x\":10,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F3C4-200D-2642-FE0F\",\"a\":\"Surfer\",\"b\":\"1F3C4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[10,12]},\"man-surfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FB-200D-2642\",\"image\":\"1f3c4-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FC-200D-2642\",\"image\":\"1f3c4-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FD-200D-2642\",\"image\":\"1f3c4-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FE-200D-2642\",\"image\":\"1f3c4-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FF-200D-2642\",\"image\":\"1f3c4-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F3C4\",\"a\":\"Man Surfing\",\"b\":\"1F3C4-200D-2642-FE0F\",\"c\":\"1F3C4-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[10,6]},\"woman-surfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FB-200D-2640\",\"image\":\"1f3c4-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FC-200D-2640\",\"image\":\"1f3c4-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FD-200D-2640\",\"image\":\"1f3c4-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FE-200D-2640\",\"image\":\"1f3c4-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FF-200D-2640\",\"image\":\"1f3c4-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Surfing\",\"b\":\"1F3C4-200D-2640-FE0F\",\"c\":\"1F3C4-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[10,0]},\"rowboat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fb.png\",\"sheet_x\":35,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fc.png\",\"sheet_x\":35,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fd.png\",\"sheet_x\":35,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fe.png\",\"sheet_x\":35,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF\",\"non_qualified\":null,\"image\":\"1f6a3-1f3ff.png\",\"sheet_x\":35,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoleted_by\":\"1F6A3-200D-2642-FE0F\",\"a\":\"Rowboat\",\"b\":\"1F6A3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[35,3]},\"man-rowing-boat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FB-200D-2642\",\"image\":\"1f6a3-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FC-200D-2642\",\"image\":\"1f6a3-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FD-200D-2642\",\"image\":\"1f6a3-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FE-200D-2642\",\"image\":\"1f6a3-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FF-200D-2642\",\"image\":\"1f6a3-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F6A3\",\"a\":\"Man Rowing Boat\",\"b\":\"1F6A3-200D-2642-FE0F\",\"c\":\"1F6A3-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[34,49]},\"woman-rowing-boat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FB-200D-2640\",\"image\":\"1f6a3-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FC-200D-2640\",\"image\":\"1f6a3-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FD-200D-2640\",\"image\":\"1f6a3-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FE-200D-2640\",\"image\":\"1f6a3-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FF-200D-2640\",\"image\":\"1f6a3-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Rowing Boat\",\"b\":\"1F6A3-200D-2640-FE0F\",\"c\":\"1F6A3-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[34,43]},\"swimmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fb.png\",\"sheet_x\":10,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fc.png\",\"sheet_x\":10,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fd.png\",\"sheet_x\":10,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fe.png\",\"sheet_x\":10,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF\",\"non_qualified\":null,\"image\":\"1f3ca-1f3ff.png\",\"sheet_x\":10,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F3CA-200D-2642-FE0F\",\"a\":\"Swimmer\",\"b\":\"1F3CA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[10,40]},\"man-swimming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FB-200D-2642\",\"image\":\"1f3ca-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FC-200D-2642\",\"image\":\"1f3ca-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FD-200D-2642\",\"image\":\"1f3ca-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FE-200D-2642\",\"image\":\"1f3ca-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FF-200D-2642\",\"image\":\"1f3ca-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F3CA\",\"a\":\"Man Swimming\",\"b\":\"1F3CA-200D-2642-FE0F\",\"c\":\"1F3CA-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[10,34]},\"woman-swimming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FB-200D-2640\",\"image\":\"1f3ca-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FC-200D-2640\",\"image\":\"1f3ca-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FD-200D-2640\",\"image\":\"1f3ca-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FE-200D-2640\",\"image\":\"1f3ca-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FF-200D-2640\",\"image\":\"1f3ca-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Swimming\",\"b\":\"1F3CA-200D-2640-FE0F\",\"c\":\"1F3CA-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[10,28]},\"person_with_ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB\",\"non_qualified\":null,\"image\":\"26f9-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"26F9-1F3FC\",\"non_qualified\":null,\"image\":\"26f9-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"26F9-1F3FD\",\"non_qualified\":null,\"image\":\"26f9-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"26F9-1F3FE\",\"non_qualified\":null,\"image\":\"26f9-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"26F9-1F3FF\",\"non_qualified\":null,\"image\":\"26f9-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoleted_by\":\"26F9-FE0F-200D-2642-FE0F\",\"a\":\"Person with Ball\",\"b\":\"26F9-FE0F\",\"c\":\"26F9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[49,6],\"o\":5},\"man-bouncing-ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FB-200D-2642\",\"image\":\"26f9-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"26F9-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FC-200D-2642\",\"image\":\"26f9-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"26F9-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FD-200D-2642\",\"image\":\"26f9-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"26F9-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FE-200D-2642\",\"image\":\"26f9-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"26F9-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FF-200D-2642\",\"image\":\"26f9-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"26F9-FE0F\",\"a\":\"Man Bouncing Ball\",\"b\":\"26F9-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[49,0],\"o\":5},\"woman-bouncing-ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FB-200D-2640\",\"image\":\"26f9-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"26F9-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FC-200D-2640\",\"image\":\"26f9-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"26F9-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FD-200D-2640\",\"image\":\"26f9-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"26F9-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FE-200D-2640\",\"image\":\"26f9-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"26F9-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FF-200D-2640\",\"image\":\"26f9-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Bouncing Ball\",\"b\":\"26F9-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[48,46],\"o\":5},\"weight_lifter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fb.png\",\"sheet_x\":11,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fc.png\",\"sheet_x\":11,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fd.png\",\"sheet_x\":11,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fe.png\",\"sheet_x\":11,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF\",\"non_qualified\":null,\"image\":\"1f3cb-1f3ff.png\",\"sheet_x\":11,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoleted_by\":\"1F3CB-FE0F-200D-2642-FE0F\",\"a\":\"Weight Lifter\",\"b\":\"1F3CB-FE0F\",\"c\":\"1F3CB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[11,6],\"o\":7},\"man-lifting-weights\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FB-200D-2642\",\"image\":\"1f3cb-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FC-200D-2642\",\"image\":\"1f3cb-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FD-200D-2642\",\"image\":\"1f3cb-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FE-200D-2642\",\"image\":\"1f3cb-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FF-200D-2642\",\"image\":\"1f3cb-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":11,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F3CB-FE0F\",\"a\":\"Man Lifting Weights\",\"b\":\"1F3CB-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[11,0],\"o\":7},\"woman-lifting-weights\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FB-200D-2640\",\"image\":\"1f3cb-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FC-200D-2640\",\"image\":\"1f3cb-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FD-200D-2640\",\"image\":\"1f3cb-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FE-200D-2640\",\"image\":\"1f3cb-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FF-200D-2640\",\"image\":\"1f3cb-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Lifting Weights\",\"b\":\"1F3CB-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[10,46],\"o\":7},\"bicyclist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fb.png\",\"sheet_x\":35,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fc.png\",\"sheet_x\":35,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fd.png\",\"sheet_x\":35,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fe.png\",\"sheet_x\":35,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b4-1f3ff.png\",\"sheet_x\":35,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F6B4-200D-2642-FE0F\",\"a\":\"Bicyclist\",\"b\":\"1F6B4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[35,37]},\"man-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FB-200D-2642\",\"image\":\"1f6b4-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FC-200D-2642\",\"image\":\"1f6b4-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FD-200D-2642\",\"image\":\"1f6b4-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FE-200D-2642\",\"image\":\"1f6b4-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FF-200D-2642\",\"image\":\"1f6b4-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F6B4\",\"a\":\"Man Biking\",\"b\":\"1F6B4-200D-2642-FE0F\",\"c\":\"1F6B4-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[35,31]},\"woman-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FB-200D-2640\",\"image\":\"1f6b4-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FC-200D-2640\",\"image\":\"1f6b4-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FD-200D-2640\",\"image\":\"1f6b4-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FE-200D-2640\",\"image\":\"1f6b4-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FF-200D-2640\",\"image\":\"1f6b4-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Biking\",\"b\":\"1F6B4-200D-2640-FE0F\",\"c\":\"1F6B4-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[35,25]},\"mountain_bicyclist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b5-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":true}},\"obsoleted_by\":\"1F6B5-200D-2642-FE0F\",\"a\":\"Mountain Bicyclist\",\"b\":\"1F6B5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[36,3]},\"man-mountain-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FB-200D-2642\",\"image\":\"1f6b5-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FC-200D-2642\",\"image\":\"1f6b5-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FD-200D-2642\",\"image\":\"1f6b5-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FE-200D-2642\",\"image\":\"1f6b5-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FF-200D-2642\",\"image\":\"1f6b5-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"obsoletes\":\"1F6B5\",\"a\":\"Man Mountain Biking\",\"b\":\"1F6B5-200D-2642-FE0F\",\"c\":\"1F6B5-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[35,49]},\"woman-mountain-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FB-200D-2640\",\"image\":\"1f6b5-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FC-200D-2640\",\"image\":\"1f6b5-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FD-200D-2640\",\"image\":\"1f6b5-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FE-200D-2640\",\"image\":\"1f6b5-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FF-200D-2640\",\"image\":\"1f6b5-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Mountain Biking\",\"b\":\"1F6B5-200D-2640-FE0F\",\"c\":\"1F6B5-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[35,43]},\"racing_car\":{\"a\":\"Racing Car\",\"b\":\"1F3CE-FE0F\",\"c\":\"1F3CE\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"sports\",\"race\",\"fast\",\"formula\",\"f1\"],\"k\":[11,31],\"o\":7},\"racing_motorcycle\":{\"a\":\"Racing Motorcycle\",\"b\":\"1F3CD-FE0F\",\"c\":\"1F3CD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[11,30],\"o\":7},\"person_doing_cartwheel\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB\",\"non_qualified\":null,\"image\":\"1f938-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":25,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F938-1F3FC\",\"non_qualified\":null,\"image\":\"1f938-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":26,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F938-1F3FD\",\"non_qualified\":null,\"image\":\"1f938-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":27,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F938-1F3FE\",\"non_qualified\":null,\"image\":\"1f938-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":28,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F938-1F3FF\",\"non_qualified\":null,\"image\":\"1f938-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":29,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Person Doing Cartwheel\",\"b\":\"1F938\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[40,24],\"o\":9},\"man-cartwheeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FB-200D-2642\",\"image\":\"1f938-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":19,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F938-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FC-200D-2642\",\"image\":\"1f938-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":20,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F938-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FD-200D-2642\",\"image\":\"1f938-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":21,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F938-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FE-200D-2642\",\"image\":\"1f938-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":22,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F938-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FF-200D-2642\",\"image\":\"1f938-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":23,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Cartwheeling\",\"b\":\"1F938-200D-2642-FE0F\",\"c\":\"1F938-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,18],\"o\":9},\"woman-cartwheeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FB-200D-2640\",\"image\":\"1f938-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":13,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F938-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FC-200D-2640\",\"image\":\"1f938-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":14,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F938-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FD-200D-2640\",\"image\":\"1f938-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":15,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F938-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FE-200D-2640\",\"image\":\"1f938-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":16,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F938-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FF-200D-2640\",\"image\":\"1f938-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":17,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Cartwheeling\",\"b\":\"1F938-200D-2640-FE0F\",\"c\":\"1F938-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,12],\"o\":9},\"wrestlers\":{\"a\":\"Wrestlers\",\"b\":\"1F93C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[40,51],\"o\":9},\"man-wrestling\":{\"a\":\"Man Wrestling\",\"b\":\"1F93C-200D-2642-FE0F\",\"c\":\"1F93C-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,50],\"o\":9},\"woman-wrestling\":{\"a\":\"Woman Wrestling\",\"b\":\"1F93C-200D-2640-FE0F\",\"c\":\"1F93C-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,49],\"o\":9},\"water_polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB\",\"non_qualified\":null,\"image\":\"1f93d-1f3fb.png\",\"sheet_x\":41,\"sheet_y\":13,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93D-1F3FC\",\"non_qualified\":null,\"image\":\"1f93d-1f3fc.png\",\"sheet_x\":41,\"sheet_y\":14,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93D-1F3FD\",\"non_qualified\":null,\"image\":\"1f93d-1f3fd.png\",\"sheet_x\":41,\"sheet_y\":15,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93D-1F3FE\",\"non_qualified\":null,\"image\":\"1f93d-1f3fe.png\",\"sheet_x\":41,\"sheet_y\":16,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93D-1F3FF\",\"non_qualified\":null,\"image\":\"1f93d-1f3ff.png\",\"sheet_x\":41,\"sheet_y\":17,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Water Polo\",\"b\":\"1F93D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[41,12],\"o\":9},\"man-playing-water-polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FB-200D-2642\",\"image\":\"1f93d-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":7,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93D-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FC-200D-2642\",\"image\":\"1f93d-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":8,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93D-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FD-200D-2642\",\"image\":\"1f93d-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":9,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93D-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FE-200D-2642\",\"image\":\"1f93d-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":10,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93D-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FF-200D-2642\",\"image\":\"1f93d-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":11,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Playing Water Polo\",\"b\":\"1F93D-200D-2642-FE0F\",\"c\":\"1F93D-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,6],\"o\":9},\"woman-playing-water-polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FB-200D-2640\",\"image\":\"1f93d-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":1,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93D-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FC-200D-2640\",\"image\":\"1f93d-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":2,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93D-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FD-200D-2640\",\"image\":\"1f93d-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":3,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93D-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FE-200D-2640\",\"image\":\"1f93d-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":4,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93D-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FF-200D-2640\",\"image\":\"1f93d-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":5,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Playing Water Polo\",\"b\":\"1F93D-200D-2640-FE0F\",\"c\":\"1F93D-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,0],\"o\":9},\"handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB\",\"non_qualified\":null,\"image\":\"1f93e-1f3fb.png\",\"sheet_x\":41,\"sheet_y\":31,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93E-1F3FC\",\"non_qualified\":null,\"image\":\"1f93e-1f3fc.png\",\"sheet_x\":41,\"sheet_y\":32,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93E-1F3FD\",\"non_qualified\":null,\"image\":\"1f93e-1f3fd.png\",\"sheet_x\":41,\"sheet_y\":33,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93E-1F3FE\",\"non_qualified\":null,\"image\":\"1f93e-1f3fe.png\",\"sheet_x\":41,\"sheet_y\":34,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93E-1F3FF\",\"non_qualified\":null,\"image\":\"1f93e-1f3ff.png\",\"sheet_x\":41,\"sheet_y\":35,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Handball\",\"b\":\"1F93E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[41,30],\"o\":9},\"man-playing-handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FB-200D-2642\",\"image\":\"1f93e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":25,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FC-200D-2642\",\"image\":\"1f93e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":26,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FD-200D-2642\",\"image\":\"1f93e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":27,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FE-200D-2642\",\"image\":\"1f93e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":28,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FF-200D-2642\",\"image\":\"1f93e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":29,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Playing Handball\",\"b\":\"1F93E-200D-2642-FE0F\",\"c\":\"1F93E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,24],\"o\":9},\"woman-playing-handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FB-200D-2640\",\"image\":\"1f93e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":19,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F93E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FC-200D-2640\",\"image\":\"1f93e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":20,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F93E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FD-200D-2640\",\"image\":\"1f93e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":21,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F93E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FE-200D-2640\",\"image\":\"1f93e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":22,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F93E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FF-200D-2640\",\"image\":\"1f93e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":23,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Playing Handball\",\"b\":\"1F93E-200D-2640-FE0F\",\"c\":\"1F93E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[41,18],\"o\":9},\"juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB\",\"non_qualified\":null,\"image\":\"1f939-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":43,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F939-1F3FC\",\"non_qualified\":null,\"image\":\"1f939-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":44,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F939-1F3FD\",\"non_qualified\":null,\"image\":\"1f939-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":45,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F939-1F3FE\",\"non_qualified\":null,\"image\":\"1f939-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":46,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F939-1F3FF\",\"non_qualified\":null,\"image\":\"1f939-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":47,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Juggling\",\"b\":\"1F939\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[40,42],\"o\":9},\"man-juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FB-200D-2642\",\"image\":\"1f939-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":37,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F939-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FC-200D-2642\",\"image\":\"1f939-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":38,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F939-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FD-200D-2642\",\"image\":\"1f939-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":39,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F939-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FE-200D-2642\",\"image\":\"1f939-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":40,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F939-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FF-200D-2642\",\"image\":\"1f939-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":41,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Man Juggling\",\"b\":\"1F939-200D-2642-FE0F\",\"c\":\"1F939-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[40,36],\"o\":9},\"woman-juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FB-200D-2640\",\"image\":\"1f939-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":31,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F939-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FC-200D-2640\",\"image\":\"1f939-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":32,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F939-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FD-200D-2640\",\"image\":\"1f939-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":33,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F939-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FE-200D-2640\",\"image\":\"1f939-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":34,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F939-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FF-200D-2640\",\"image\":\"1f939-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":35,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":false,\"has_img_messenger\":false}},\"a\":\"Woman Juggling\",\"b\":\"1F939-200D-2640-FE0F\",\"c\":\"1F939-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":false,\"k\":[40,30],\"o\":9},\"couple\":{\"a\":\"Man and Woman Holding Hands\",\"b\":\"1F46B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"pair\",\"people\",\"human\",\"love\",\"date\",\"dating\",\"like\",\"affection\",\"valentines\",\"marriage\"],\"k\":[20,30],\"n\":[\"man_and_woman_holding_hands\"]},\"two_men_holding_hands\":{\"a\":\"Two Men Holding Hands\",\"b\":\"1F46C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"pair\",\"couple\",\"love\",\"like\",\"bromance\",\"friendship\",\"people\",\"human\"],\"k\":[20,31]},\"two_women_holding_hands\":{\"a\":\"Two Women Holding Hands\",\"b\":\"1F46D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"pair\",\"friendship\",\"couple\",\"love\",\"like\",\"female\",\"people\",\"human\"],\"k\":[20,32]},\"couplekiss\":{\"obsoleted_by\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"a\":\"Kiss\",\"b\":\"1F48F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[24,41]},\"woman-kiss-man\":{\"obsoletes\":\"1F48F\",\"a\":\"Woman Kiss Man\",\"b\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"c\":\"1F469-200D-2764-200D-1F48B-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,21]},\"man-kiss-man\":{\"a\":\"Man Kiss Man\",\"b\":\"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"c\":\"1F468-200D-2764-200D-1F48B-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[18,10]},\"woman-kiss-woman\":{\"a\":\"Woman Kiss Woman\",\"b\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469\",\"c\":\"1F469-200D-2764-200D-1F48B-200D-1F469\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[20,22]},\"couple_with_heart\":{\"obsoleted_by\":\"1F469-200D-2764-FE0F-200D-1F468\",\"a\":\"Couple with Heart\",\"b\":\"1F491\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[24,43]},\"woman-heart-man\":{\"obsoletes\":\"1F491\",\"a\":\"Woman Heart Man\",\"b\":\"1F469-200D-2764-FE0F-200D-1F468\",\"c\":\"1F469-200D-2764-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[20,19]},\"man-heart-man\":{\"a\":\"Man Heart Man\",\"b\":\"1F468-200D-2764-FE0F-200D-1F468\",\"c\":\"1F468-200D-2764-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[18,9]},\"woman-heart-woman\":{\"a\":\"Woman Heart Woman\",\"b\":\"1F469-200D-2764-FE0F-200D-1F469\",\"c\":\"1F469-200D-2764-200D-1F469\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[20,20]},\"family\":{\"obsoleted_by\":\"1F468-200D-1F469-200D-1F466\",\"a\":\"Family\",\"b\":\"1F46A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":false,\"i\":true,\"k\":[20,29],\"n\":[\"man-woman-boy\"]},\"man-woman-boy\":{\"obsoletes\":\"1F46A\",\"a\":\"Man Woman Boy\",\"b\":\"1F468-200D-1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,2],\"n\":[\"family\"]},\"man-woman-girl\":{\"a\":\"Man Woman Girl\",\"b\":\"1F468-200D-1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,4]},\"man-woman-girl-boy\":{\"a\":\"Man Woman Girl Boy\",\"b\":\"1F468-200D-1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,5]},\"man-woman-boy-boy\":{\"a\":\"Man Woman Boy Boy\",\"b\":\"1F468-200D-1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,3]},\"man-woman-girl-girl\":{\"a\":\"Man Woman Girl Girl\",\"b\":\"1F468-200D-1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,6]},\"man-man-boy\":{\"a\":\"Man Man Boy\",\"b\":\"1F468-200D-1F468-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[16,49]},\"man-man-girl\":{\"a\":\"Man Man Girl\",\"b\":\"1F468-200D-1F468-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[16,51]},\"man-man-girl-boy\":{\"a\":\"Man Man Girl Boy\",\"b\":\"1F468-200D-1F468-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,0]},\"man-man-boy-boy\":{\"a\":\"Man Man Boy Boy\",\"b\":\"1F468-200D-1F468-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[16,50]},\"man-man-girl-girl\":{\"a\":\"Man Man Girl Girl\",\"b\":\"1F468-200D-1F468-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[17,1]},\"woman-woman-boy\":{\"a\":\"Woman Woman Boy\",\"b\":\"1F469-200D-1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[19,12]},\"woman-woman-girl\":{\"a\":\"Woman Woman Girl\",\"b\":\"1F469-200D-1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[19,14]},\"woman-woman-girl-boy\":{\"a\":\"Woman Woman Girl Boy\",\"b\":\"1F469-200D-1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[19,15]},\"woman-woman-boy-boy\":{\"a\":\"Woman Woman Boy Boy\",\"b\":\"1F469-200D-1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[19,13]},\"woman-woman-girl-girl\":{\"a\":\"Woman Woman Girl Girl\",\"b\":\"1F469-200D-1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[19,16]},\"man-boy\":{\"a\":\"Man Boy\",\"b\":\"1F468-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,45]},\"man-boy-boy\":{\"a\":\"Man Boy Boy\",\"b\":\"1F468-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,44]},\"man-girl\":{\"a\":\"Man Girl\",\"b\":\"1F468-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,48]},\"man-girl-boy\":{\"a\":\"Man Girl Boy\",\"b\":\"1F468-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,46]},\"man-girl-girl\":{\"a\":\"Man Girl Girl\",\"b\":\"1F468-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[16,47]},\"woman-boy\":{\"a\":\"Woman Boy\",\"b\":\"1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,8]},\"woman-boy-boy\":{\"a\":\"Woman Boy Boy\",\"b\":\"1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,7]},\"woman-girl\":{\"a\":\"Woman Girl\",\"b\":\"1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,11]},\"woman-girl-boy\":{\"a\":\"Woman Girl Boy\",\"b\":\"1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,9]},\"woman-girl-girl\":{\"a\":\"Woman Girl Girl\",\"b\":\"1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[19,10]},\"selfie\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F933-1F3FB\",\"non_qualified\":null,\"image\":\"1f933-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":23,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F933-1F3FC\",\"non_qualified\":null,\"image\":\"1f933-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":24,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F933-1F3FD\",\"non_qualified\":null,\"image\":\"1f933-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":25,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F933-1F3FE\",\"non_qualified\":null,\"image\":\"1f933-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":26,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F933-1F3FF\",\"non_qualified\":null,\"image\":\"1f933-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":27,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Selfie\",\"b\":\"1F933\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"camera\",\"phone\"],\"k\":[39,22],\"o\":9},\"muscle\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F4AA-1F3FB\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fb.png\",\"sheet_x\":25,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F4AA-1F3FC\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fc.png\",\"sheet_x\":25,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F4AA-1F3FD\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fd.png\",\"sheet_x\":25,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F4AA-1F3FE\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fe.png\",\"sheet_x\":25,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F4AA-1F3FF\",\"non_qualified\":null,\"image\":\"1f4aa-1f3ff.png\",\"sheet_x\":25,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Flexed Biceps\",\"b\":\"1F4AA\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"arm\",\"flex\",\"hand\",\"summer\",\"strong\",\"biceps\"],\"k\":[25,16]},\"point_left\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F448-1F3FB\",\"non_qualified\":null,\"image\":\"1f448-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F448-1F3FC\",\"non_qualified\":null,\"image\":\"1f448-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F448-1F3FD\",\"non_qualified\":null,\"image\":\"1f448-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F448-1F3FE\",\"non_qualified\":null,\"image\":\"1f448-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F448-1F3FF\",\"non_qualified\":null,\"image\":\"1f448-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":24,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"White Left Pointing Backhand Index\",\"b\":\"1F448\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"direction\",\"fingers\",\"hand\",\"left\"],\"k\":[14,19]},\"point_right\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F449-1F3FB\",\"non_qualified\":null,\"image\":\"1f449-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F449-1F3FC\",\"non_qualified\":null,\"image\":\"1f449-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F449-1F3FD\",\"non_qualified\":null,\"image\":\"1f449-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F449-1F3FE\",\"non_qualified\":null,\"image\":\"1f449-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F449-1F3FF\",\"non_qualified\":null,\"image\":\"1f449-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"White Right Pointing Backhand Index\",\"b\":\"1F449\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"right\"],\"k\":[14,25]},\"point_up\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"261D-1F3FB\",\"non_qualified\":null,\"image\":\"261d-1f3fb.png\",\"sheet_x\":47,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"261D-1F3FC\",\"non_qualified\":null,\"image\":\"261d-1f3fc.png\",\"sheet_x\":47,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"261D-1F3FD\",\"non_qualified\":null,\"image\":\"261d-1f3fd.png\",\"sheet_x\":47,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"261D-1F3FE\",\"non_qualified\":null,\"image\":\"261d-1f3fe.png\",\"sheet_x\":47,\"sheet_y\":30,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"261D-1F3FF\",\"non_qualified\":null,\"image\":\"261d-1f3ff.png\",\"sheet_x\":47,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"White Up Pointing Index\",\"b\":\"261D-FE0F\",\"c\":\"261D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hand\",\"fingers\",\"direction\",\"up\"],\"k\":[47,26],\"o\":1},\"point_up_2\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F446-1F3FB\",\"non_qualified\":null,\"image\":\"1f446-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F446-1F3FC\",\"non_qualified\":null,\"image\":\"1f446-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":9,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F446-1F3FD\",\"non_qualified\":null,\"image\":\"1f446-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F446-1F3FE\",\"non_qualified\":null,\"image\":\"1f446-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F446-1F3FF\",\"non_qualified\":null,\"image\":\"1f446-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"White Up Pointing Backhand Index\",\"b\":\"1F446\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"up\"],\"k\":[14,7]},\"middle_finger\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F595-1F3FB\",\"non_qualified\":null,\"image\":\"1f595-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F595-1F3FC\",\"non_qualified\":null,\"image\":\"1f595-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F595-1F3FD\",\"non_qualified\":null,\"image\":\"1f595-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F595-1F3FE\",\"non_qualified\":null,\"image\":\"1f595-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F595-1F3FF\",\"non_qualified\":null,\"image\":\"1f595-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":43,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Reversed Hand with Middle Finger Extended\",\"b\":\"1F595\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,38],\"n\":[\"reversed_hand_with_middle_finger_extended\"],\"o\":7},\"point_down\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F447-1F3FB\",\"non_qualified\":null,\"image\":\"1f447-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F447-1F3FC\",\"non_qualified\":null,\"image\":\"1f447-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F447-1F3FD\",\"non_qualified\":null,\"image\":\"1f447-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F447-1F3FE\",\"non_qualified\":null,\"image\":\"1f447-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F447-1F3FF\",\"non_qualified\":null,\"image\":\"1f447-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"White Down Pointing Backhand Index\",\"b\":\"1F447\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"down\"],\"k\":[14,13]},\"v\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270C-1F3FB\",\"non_qualified\":null,\"image\":\"270c-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":31,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"270C-1F3FC\",\"non_qualified\":null,\"image\":\"270c-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"270C-1F3FD\",\"non_qualified\":null,\"image\":\"270c-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"270C-1F3FE\",\"non_qualified\":null,\"image\":\"270c-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"270C-1F3FF\",\"non_qualified\":null,\"image\":\"270c-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Victory Hand\",\"b\":\"270C-FE0F\",\"c\":\"270C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"ohyeah\",\"hand\",\"peace\",\"victory\",\"two\"],\"k\":[49,30],\"o\":1},\"crossed_fingers\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91E-1F3FB\",\"non_qualified\":null,\"image\":\"1f91e-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":12,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F91E-1F3FC\",\"non_qualified\":null,\"image\":\"1f91e-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":13,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F91E-1F3FD\",\"non_qualified\":null,\"image\":\"1f91e-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":14,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F91E-1F3FE\",\"non_qualified\":null,\"image\":\"1f91e-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":15,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F91E-1F3FF\",\"non_qualified\":null,\"image\":\"1f91e-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":16,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Hand with Index and Middle Fingers Crossed\",\"b\":\"1F91E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"good\",\"lucky\"],\"k\":[38,11],\"n\":[\"hand_with_index_and_middle_fingers_crossed\"],\"o\":9},\"spock-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F596-1F3FB\",\"non_qualified\":null,\"image\":\"1f596-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F596-1F3FC\",\"non_qualified\":null,\"image\":\"1f596-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F596-1F3FD\",\"non_qualified\":null,\"image\":\"1f596-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F596-1F3FE\",\"non_qualified\":null,\"image\":\"1f596-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F596-1F3FF\",\"non_qualified\":null,\"image\":\"1f596-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Raised Hand with Part Between Middle and Ring Fingers\",\"b\":\"1F596\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[29,44],\"o\":7},\"the_horns\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F918-1F3FB\",\"non_qualified\":null,\"image\":\"1f918-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F918-1F3FC\",\"non_qualified\":null,\"image\":\"1f918-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F918-1F3FD\",\"non_qualified\":null,\"image\":\"1f918-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F918-1F3FE\",\"non_qualified\":null,\"image\":\"1f918-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F918-1F3FF\",\"non_qualified\":null,\"image\":\"1f918-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Sign of the Horns\",\"b\":\"1F918\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,32],\"n\":[\"sign_of_the_horns\"],\"o\":8},\"call_me_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F919-1F3FB\",\"non_qualified\":null,\"image\":\"1f919-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":39,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F919-1F3FC\",\"non_qualified\":null,\"image\":\"1f919-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":40,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F919-1F3FD\",\"non_qualified\":null,\"image\":\"1f919-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":41,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F919-1F3FE\",\"non_qualified\":null,\"image\":\"1f919-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":42,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F919-1F3FF\",\"non_qualified\":null,\"image\":\"1f919-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":43,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Call Me Hand\",\"b\":\"1F919\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"hands\",\"gesture\"],\"k\":[37,38],\"o\":9},\"raised_hand_with_fingers_splayed\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F590-1F3FB\",\"non_qualified\":null,\"image\":\"1f590-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F590-1F3FC\",\"non_qualified\":null,\"image\":\"1f590-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F590-1F3FD\",\"non_qualified\":null,\"image\":\"1f590-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F590-1F3FE\",\"non_qualified\":null,\"image\":\"1f590-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F590-1F3FF\",\"non_qualified\":null,\"image\":\"1f590-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Raised Hand with Fingers Splayed\",\"b\":\"1F590-FE0F\",\"c\":\"1F590\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"hand\",\"fingers\",\"palm\"],\"k\":[29,32],\"o\":7},\"hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270B-1F3FB\",\"non_qualified\":null,\"image\":\"270b-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":25,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"270B-1F3FC\",\"non_qualified\":null,\"image\":\"270b-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":26,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"270B-1F3FD\",\"non_qualified\":null,\"image\":\"270b-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":27,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"270B-1F3FE\",\"non_qualified\":null,\"image\":\"270b-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":28,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"270B-1F3FF\",\"non_qualified\":null,\"image\":\"270b-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":29,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Raised Hand\",\"b\":\"270B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[49,24],\"n\":[\"raised_hand\"]},\"ok_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44C-1F3FB\",\"non_qualified\":null,\"image\":\"1f44c-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":44,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44C-1F3FC\",\"non_qualified\":null,\"image\":\"1f44c-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44C-1F3FD\",\"non_qualified\":null,\"image\":\"1f44c-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44C-1F3FE\",\"non_qualified\":null,\"image\":\"1f44c-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44C-1F3FF\",\"non_qualified\":null,\"image\":\"1f44c-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Ok Hand Sign\",\"b\":\"1F44C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"limbs\",\"perfect\",\"ok\",\"okay\"],\"k\":[14,43]},\"+1\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44D-1F3FB\",\"non_qualified\":null,\"image\":\"1f44d-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44D-1F3FC\",\"non_qualified\":null,\"image\":\"1f44d-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":51,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44D-1F3FD\",\"non_qualified\":null,\"image\":\"1f44d-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44D-1F3FE\",\"non_qualified\":null,\"image\":\"1f44d-1f3fe.png\",\"sheet_x\":15,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44D-1F3FF\",\"non_qualified\":null,\"image\":\"1f44d-1f3ff.png\",\"sheet_x\":15,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Thumbs Up Sign\",\"b\":\"1F44D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"thumbsup\",\"yes\",\"awesome\",\"good\",\"agree\",\"accept\",\"cool\",\"hand\",\"like\"],\"k\":[14,49],\"n\":[\"thumbsup\"]},\"-1\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44E-1F3FB\",\"non_qualified\":null,\"image\":\"1f44e-1f3fb.png\",\"sheet_x\":15,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44E-1F3FC\",\"non_qualified\":null,\"image\":\"1f44e-1f3fc.png\",\"sheet_x\":15,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44E-1F3FD\",\"non_qualified\":null,\"image\":\"1f44e-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44E-1F3FE\",\"non_qualified\":null,\"image\":\"1f44e-1f3fe.png\",\"sheet_x\":15,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44E-1F3FF\",\"non_qualified\":null,\"image\":\"1f44e-1f3ff.png\",\"sheet_x\":15,\"sheet_y\":8,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Thumbs Down Sign\",\"b\":\"1F44E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"thumbsdown\",\"no\",\"dislike\",\"hand\"],\"k\":[15,3],\"n\":[\"thumbsdown\"]},\"fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270A-1F3FB\",\"non_qualified\":null,\"image\":\"270a-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"270A-1F3FC\",\"non_qualified\":null,\"image\":\"270a-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"270A-1F3FD\",\"non_qualified\":null,\"image\":\"270a-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":21,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"270A-1F3FE\",\"non_qualified\":null,\"image\":\"270a-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":22,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"270A-1F3FF\",\"non_qualified\":null,\"image\":\"270a-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":23,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Raised Fist\",\"b\":\"270A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"hand\",\"grasp\"],\"k\":[49,18]},\"facepunch\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44A-1F3FB\",\"non_qualified\":null,\"image\":\"1f44a-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":32,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44A-1F3FC\",\"non_qualified\":null,\"image\":\"1f44a-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":33,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44A-1F3FD\",\"non_qualified\":null,\"image\":\"1f44a-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":34,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44A-1F3FE\",\"non_qualified\":null,\"image\":\"1f44a-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":35,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44A-1F3FF\",\"non_qualified\":null,\"image\":\"1f44a-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":36,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Fisted Hand Sign\",\"b\":\"1F44A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"angry\",\"violence\",\"fist\",\"hit\",\"attack\",\"hand\"],\"k\":[14,31],\"n\":[\"punch\"]},\"left-facing_fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91B-1F3FB\",\"non_qualified\":null,\"image\":\"1f91b-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":51,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F91B-1F3FC\",\"non_qualified\":null,\"image\":\"1f91b-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":0,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F91B-1F3FD\",\"non_qualified\":null,\"image\":\"1f91b-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":1,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F91B-1F3FE\",\"non_qualified\":null,\"image\":\"1f91b-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":2,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F91B-1F3FF\",\"non_qualified\":null,\"image\":\"1f91b-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":3,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Left-Facing Fist\",\"b\":\"1F91B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,50],\"o\":9},\"right-facing_fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91C-1F3FB\",\"non_qualified\":null,\"image\":\"1f91c-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":5,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F91C-1F3FC\",\"non_qualified\":null,\"image\":\"1f91c-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":6,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F91C-1F3FD\",\"non_qualified\":null,\"image\":\"1f91c-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":7,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F91C-1F3FE\",\"non_qualified\":null,\"image\":\"1f91c-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":8,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F91C-1F3FF\",\"non_qualified\":null,\"image\":\"1f91c-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":9,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Right-Facing Fist\",\"b\":\"1F91C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,4],\"o\":9},\"raised_back_of_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91A-1F3FB\",\"non_qualified\":null,\"image\":\"1f91a-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":45,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F91A-1F3FC\",\"non_qualified\":null,\"image\":\"1f91a-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":46,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F91A-1F3FD\",\"non_qualified\":null,\"image\":\"1f91a-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":47,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F91A-1F3FE\",\"non_qualified\":null,\"image\":\"1f91a-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":48,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F91A-1F3FF\",\"non_qualified\":null,\"image\":\"1f91a-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":49,\"added_in\":\"9.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Raised Back of Hand\",\"b\":\"1F91A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"fingers\",\"raised\",\"backhand\"],\"k\":[37,44],\"o\":9},\"wave\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44B-1F3FB\",\"non_qualified\":null,\"image\":\"1f44b-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44B-1F3FC\",\"non_qualified\":null,\"image\":\"1f44b-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44B-1F3FD\",\"non_qualified\":null,\"image\":\"1f44b-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44B-1F3FE\",\"non_qualified\":null,\"image\":\"1f44b-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44B-1F3FF\",\"non_qualified\":null,\"image\":\"1f44b-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":42,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Waving Hand Sign\",\"b\":\"1F44B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hands\",\"gesture\",\"goodbye\",\"solong\",\"farewell\",\"hello\",\"hi\",\"palm\"],\"k\":[14,37]},\"i_love_you_hand_sign\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91F-1F3FB\",\"non_qualified\":null,\"image\":\"1f91f-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":18,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F91F-1F3FC\",\"non_qualified\":null,\"image\":\"1f91f-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":19,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F91F-1F3FD\",\"non_qualified\":null,\"image\":\"1f91f-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":20,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F91F-1F3FE\",\"non_qualified\":null,\"image\":\"1f91f-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":21,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F91F-1F3FF\",\"non_qualified\":null,\"image\":\"1f91f-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":22,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"I Love You Hand Sign\",\"b\":\"1F91F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[38,17],\"o\":10},\"writing_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270D-1F3FB\",\"non_qualified\":null,\"image\":\"270d-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":37,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"270D-1F3FC\",\"non_qualified\":null,\"image\":\"270d-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":38,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"270D-1F3FD\",\"non_qualified\":null,\"image\":\"270d-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":39,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"270D-1F3FE\",\"non_qualified\":null,\"image\":\"270d-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":40,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"270D-1F3FF\",\"non_qualified\":null,\"image\":\"270d-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":41,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Writing Hand\",\"b\":\"270D-FE0F\",\"c\":\"270D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"lower_left_ballpoint_pen\",\"stationery\",\"write\",\"compose\"],\"k\":[49,36],\"o\":1},\"clap\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44F-1F3FB\",\"non_qualified\":null,\"image\":\"1f44f-1f3fb.png\",\"sheet_x\":15,\"sheet_y\":10,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F44F-1F3FC\",\"non_qualified\":null,\"image\":\"1f44f-1f3fc.png\",\"sheet_x\":15,\"sheet_y\":11,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F44F-1F3FD\",\"non_qualified\":null,\"image\":\"1f44f-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":12,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F44F-1F3FE\",\"non_qualified\":null,\"image\":\"1f44f-1f3fe.png\",\"sheet_x\":15,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F44F-1F3FF\",\"non_qualified\":null,\"image\":\"1f44f-1f3ff.png\",\"sheet_x\":15,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Clapping Hands Sign\",\"b\":\"1F44F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"hands\",\"praise\",\"applause\",\"congrats\",\"yay\"],\"k\":[15,9]},\"open_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F450-1F3FB\",\"non_qualified\":null,\"image\":\"1f450-1f3fb.png\",\"sheet_x\":15,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F450-1F3FC\",\"non_qualified\":null,\"image\":\"1f450-1f3fc.png\",\"sheet_x\":15,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F450-1F3FD\",\"non_qualified\":null,\"image\":\"1f450-1f3fd.png\",\"sheet_x\":15,\"sheet_y\":18,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F450-1F3FE\",\"non_qualified\":null,\"image\":\"1f450-1f3fe.png\",\"sheet_x\":15,\"sheet_y\":19,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F450-1F3FF\",\"non_qualified\":null,\"image\":\"1f450-1f3ff.png\",\"sheet_x\":15,\"sheet_y\":20,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Open Hands Sign\",\"b\":\"1F450\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fingers\",\"butterfly\",\"hands\",\"open\"],\"k\":[15,15]},\"raised_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64C-1F3FB\",\"non_qualified\":null,\"image\":\"1f64c-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":13,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F64C-1F3FC\",\"non_qualified\":null,\"image\":\"1f64c-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":14,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F64C-1F3FD\",\"non_qualified\":null,\"image\":\"1f64c-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":15,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F64C-1F3FE\",\"non_qualified\":null,\"image\":\"1f64c-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":16,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F64C-1F3FF\",\"non_qualified\":null,\"image\":\"1f64c-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":17,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Person Raising Both Hands in Celebration\",\"b\":\"1F64C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"gesture\",\"hooray\",\"yea\",\"celebration\",\"hands\"],\"k\":[33,12]},\"palms_up_together\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F932-1F3FB\",\"non_qualified\":null,\"image\":\"1f932-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":17,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FC\":{\"unified\":\"1F932-1F3FC\",\"non_qualified\":null,\"image\":\"1f932-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":18,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FD\":{\"unified\":\"1F932-1F3FD\",\"non_qualified\":null,\"image\":\"1f932-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":19,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FE\":{\"unified\":\"1F932-1F3FE\",\"non_qualified\":null,\"image\":\"1f932-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":20,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false},\"1F3FF\":{\"unified\":\"1F932-1F3FF\",\"non_qualified\":null,\"image\":\"1f932-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":21,\"added_in\":\"10.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":false}},\"a\":\"Palms Up Together\",\"b\":\"1F932\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[39,16],\"o\":10},\"pray\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64F-1F3FB\",\"non_qualified\":null,\"image\":\"1f64f-1f3fb.png\",\"sheet_x\":34,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F64F-1F3FC\",\"non_qualified\":null,\"image\":\"1f64f-1f3fc.png\",\"sheet_x\":34,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F64F-1F3FD\",\"non_qualified\":null,\"image\":\"1f64f-1f3fd.png\",\"sheet_x\":34,\"sheet_y\":5,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F64F-1F3FE\",\"non_qualified\":null,\"image\":\"1f64f-1f3fe.png\",\"sheet_x\":34,\"sheet_y\":6,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F64F-1F3FF\",\"non_qualified\":null,\"image\":\"1f64f-1f3ff.png\",\"sheet_x\":34,\"sheet_y\":7,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Person with Folded Hands\",\"b\":\"1F64F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"please\",\"hope\",\"wish\",\"namaste\",\"highfive\"],\"k\":[34,2]},\"handshake\":{\"a\":\"Handshake\",\"b\":\"1F91D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"agreement\",\"shake\"],\"k\":[38,10],\"o\":9},\"nail_care\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F485-1F3FB\",\"non_qualified\":null,\"image\":\"1f485-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":45,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F485-1F3FC\",\"non_qualified\":null,\"image\":\"1f485-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F485-1F3FD\",\"non_qualified\":null,\"image\":\"1f485-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F485-1F3FE\",\"non_qualified\":null,\"image\":\"1f485-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F485-1F3FF\",\"non_qualified\":null,\"image\":\"1f485-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Nail Polish\",\"b\":\"1F485\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"beauty\",\"manicure\",\"finger\",\"fashion\",\"nail\"],\"k\":[23,44]},\"ear\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F442-1F3FB\",\"non_qualified\":null,\"image\":\"1f442-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":46,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F442-1F3FC\",\"non_qualified\":null,\"image\":\"1f442-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":47,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F442-1F3FD\",\"non_qualified\":null,\"image\":\"1f442-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":48,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F442-1F3FE\",\"non_qualified\":null,\"image\":\"1f442-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":49,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F442-1F3FF\",\"non_qualified\":null,\"image\":\"1f442-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":50,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Ear\",\"b\":\"1F442\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"hear\",\"sound\",\"listen\"],\"k\":[13,45]},\"nose\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F443-1F3FB\",\"non_qualified\":null,\"image\":\"1f443-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":0,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FC\":{\"unified\":\"1F443-1F3FC\",\"non_qualified\":null,\"image\":\"1f443-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":1,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FD\":{\"unified\":\"1F443-1F3FD\",\"non_qualified\":null,\"image\":\"1f443-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":2,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FE\":{\"unified\":\"1F443-1F3FE\",\"non_qualified\":null,\"image\":\"1f443-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":3,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true},\"1F3FF\":{\"unified\":\"1F443-1F3FF\",\"non_qualified\":null,\"image\":\"1f443-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":4,\"added_in\":\"8.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_emojione\":true,\"has_img_facebook\":true,\"has_img_messenger\":true}},\"a\":\"Nose\",\"b\":\"1F443\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"smell\",\"sniff\"],\"k\":[13,51]},\"footprints\":{\"a\":\"Footprints\",\"b\":\"1F463\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"feet\",\"tracking\",\"walking\",\"beach\"],\"k\":[15,39]},\"eyes\":{\"a\":\"Eyes\",\"b\":\"1F440\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"look\",\"watch\",\"stalk\",\"peek\",\"see\"],\"k\":[13,42]},\"eye\":{\"a\":\"Eye\",\"b\":\"1F441-FE0F\",\"c\":\"1F441\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"look\",\"see\",\"watch\",\"stare\"],\"k\":[13,44],\"o\":7},\"eye-in-speech-bubble\":{\"a\":\"Eye in Speech Bubble\",\"b\":\"1F441-FE0F-200D-1F5E8-FE0F\",\"d\":true,\"e\":true,\"f\":false,\"g\":true,\"h\":false,\"i\":false,\"k\":[13,43],\"o\":7},\"brain\":{\"a\":\"Brain\",\"b\":\"1F9E0\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,22],\"o\":10},\"tongue\":{\"a\":\"Tongue\",\"b\":\"1F445\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mouth\",\"playful\"],\"k\":[14,6]},\"lips\":{\"a\":\"Mouth\",\"b\":\"1F444\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"mouth\",\"kiss\"],\"k\":[14,5]},\"kiss\":{\"a\":\"Kiss Mark\",\"b\":\"1F48B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"face\",\"lips\",\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[24,37]},\"cupid\":{\"a\":\"Heart with Arrow\",\"b\":\"1F498\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"heart\",\"affection\",\"valentines\"],\"k\":[24,50]},\"heart\":{\"a\":\"Heavy Black Heart\",\"b\":\"2764-FE0F\",\"c\":\"2764\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"valentines\"],\"k\":[50,8],\"l\":[\"<3\"],\"m\":\"<3\",\"o\":1},\"heartbeat\":{\"a\":\"Beating Heart\",\"b\":\"1F493\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\",\"pink\",\"heart\"],\"k\":[24,45]},\"broken_heart\":{\"a\":\"Broken Heart\",\"b\":\"1F494\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sad\",\"sorry\",\"break\",\"heart\",\"heartbreak\"],\"k\":[24,46],\"l\":[\"</3\"],\"m\":\"</3\"},\"two_hearts\":{\"a\":\"Two Hearts\",\"b\":\"1F495\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\",\"heart\"],\"k\":[24,47]},\"sparkling_heart\":{\"a\":\"Sparkling Heart\",\"b\":\"1F496\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[24,48]},\"heartpulse\":{\"a\":\"Growing Heart\",\"b\":\"1F497\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"like\",\"love\",\"affection\",\"valentines\",\"pink\"],\"k\":[24,49]},\"blue_heart\":{\"a\":\"Blue Heart\",\"b\":\"1F499\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[24,51],\"m\":\"<3\"},\"green_heart\":{\"a\":\"Green Heart\",\"b\":\"1F49A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,0],\"m\":\"<3\"},\"yellow_heart\":{\"a\":\"Yellow Heart\",\"b\":\"1F49B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,1],\"m\":\"<3\"},\"orange_heart\":{\"a\":\"Orange Heart\",\"b\":\"1F9E1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,23],\"o\":10},\"purple_heart\":{\"a\":\"Purple Heart\",\"b\":\"1F49C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,2],\"m\":\"<3\"},\"black_heart\":{\"a\":\"Black Heart\",\"b\":\"1F5A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"evil\"],\"k\":[29,50],\"o\":9},\"gift_heart\":{\"a\":\"Heart with Ribbon\",\"b\":\"1F49D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"valentines\"],\"k\":[25,3]},\"revolving_hearts\":{\"a\":\"Revolving Hearts\",\"b\":\"1F49E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,4]},\"heart_decoration\":{\"a\":\"Heart Decoration\",\"b\":\"1F49F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"purple-square\",\"love\",\"like\"],\"k\":[25,5]},\"heavy_heart_exclamation_mark_ornament\":{\"a\":\"Heavy Heart Exclamation Mark Ornament\",\"b\":\"2763-FE0F\",\"c\":\"2763\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[50,7],\"o\":1},\"love_letter\":{\"a\":\"Love Letter\",\"b\":\"1F48C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"email\",\"like\",\"affection\",\"envelope\",\"valentines\"],\"k\":[24,38]},\"zzz\":{\"a\":\"Sleeping Symbol\",\"b\":\"1F4A4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"sleepy\",\"tired\",\"dream\"],\"k\":[25,10]},\"anger\":{\"a\":\"Anger Symbol\",\"b\":\"1F4A2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"angry\",\"mad\"],\"k\":[25,8]},\"bomb\":{\"a\":\"Bomb\",\"b\":\"1F4A3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"boom\",\"explode\",\"explosion\",\"terrorism\"],\"k\":[25,9]},\"boom\":{\"a\":\"Collision Symbol\",\"b\":\"1F4A5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bomb\",\"explode\",\"explosion\",\"collision\",\"blown\"],\"k\":[25,11],\"n\":[\"collision\"]},\"sweat_drops\":{\"a\":\"Splashing Sweat Symbol\",\"b\":\"1F4A6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"water\",\"drip\",\"oops\"],\"k\":[25,12]},\"dash\":{\"a\":\"Dash Symbol\",\"b\":\"1F4A8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"wind\",\"air\",\"fast\",\"shoo\",\"fart\",\"smoke\",\"puff\"],\"k\":[25,14]},\"dizzy\":{\"a\":\"Dizzy Symbol\",\"b\":\"1F4AB\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"star\",\"sparkle\",\"shoot\",\"magic\"],\"k\":[25,22]},\"speech_balloon\":{\"a\":\"Speech Balloon\",\"b\":\"1F4AC\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bubble\",\"words\",\"message\",\"talk\",\"chatting\"],\"k\":[25,23]},\"left_speech_bubble\":{\"a\":\"Left Speech Bubble\",\"b\":\"1F5E8-FE0F\",\"c\":\"1F5E8\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"words\",\"message\",\"talk\",\"chatting\"],\"k\":[30,15],\"o\":7},\"right_anger_bubble\":{\"a\":\"Right Anger Bubble\",\"b\":\"1F5EF-FE0F\",\"c\":\"1F5EF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"caption\",\"speech\",\"thinking\",\"mad\"],\"k\":[30,16],\"o\":7},\"thought_balloon\":{\"a\":\"Thought Balloon\",\"b\":\"1F4AD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bubble\",\"cloud\",\"speech\",\"thinking\",\"dream\"],\"k\":[25,24]},\"hole\":{\"a\":\"Hole\",\"b\":\"1F573-FE0F\",\"c\":\"1F573\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"embarrassing\"],\"k\":[28,44],\"o\":7},\"eyeglasses\":{\"a\":\"Eyeglasses\",\"b\":\"1F453\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"accessories\",\"eyesight\",\"nerdy\",\"dork\",\"geek\"],\"k\":[15,23]},\"dark_sunglasses\":{\"a\":\"Dark Sunglasses\",\"b\":\"1F576-FE0F\",\"c\":\"1F576\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"face\",\"cool\",\"accessories\"],\"k\":[29,17],\"o\":7},\"necktie\":{\"a\":\"Necktie\",\"b\":\"1F454\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shirt\",\"suitup\",\"formal\",\"fashion\",\"cloth\",\"business\"],\"k\":[15,24]},\"shirt\":{\"a\":\"T-Shirt\",\"b\":\"1F455\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"k\":[15,25],\"n\":[\"tshirt\"]},\"jeans\":{\"a\":\"Jeans\",\"b\":\"1F456\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"shopping\"],\"k\":[15,26]},\"scarf\":{\"a\":\"Scarf\",\"b\":\"1F9E3\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,25],\"o\":10},\"gloves\":{\"a\":\"Gloves\",\"b\":\"1F9E4\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,26],\"o\":10},\"coat\":{\"a\":\"Coat\",\"b\":\"1F9E5\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,27],\"o\":10},\"socks\":{\"a\":\"Socks\",\"b\":\"1F9E6\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,28],\"o\":10},\"dress\":{\"a\":\"Dress\",\"b\":\"1F457\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"clothes\",\"fashion\",\"shopping\"],\"k\":[15,27]},\"kimono\":{\"a\":\"Kimono\",\"b\":\"1F458\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"dress\",\"fashion\",\"women\",\"female\",\"japanese\"],\"k\":[15,28]},\"bikini\":{\"a\":\"Bikini\",\"b\":\"1F459\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"swimming\",\"female\",\"woman\",\"girl\",\"fashion\",\"beach\",\"summer\"],\"k\":[15,29]},\"womans_clothes\":{\"a\":\"Womans Clothes\",\"b\":\"1F45A\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"shopping_bags\",\"female\"],\"k\":[15,30]},\"purse\":{\"a\":\"Purse\",\"b\":\"1F45B\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"accessories\",\"money\",\"sales\",\"shopping\"],\"k\":[15,31]},\"handbag\":{\"a\":\"Handbag\",\"b\":\"1F45C\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"accessory\",\"accessories\",\"shopping\"],\"k\":[15,32]},\"pouch\":{\"a\":\"Pouch\",\"b\":\"1F45D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"bag\",\"accessories\",\"shopping\"],\"k\":[15,33]},\"shopping_bags\":{\"a\":\"Shopping Bags\",\"b\":\"1F6CD-FE0F\",\"c\":\"1F6CD\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[37,2],\"o\":7},\"school_satchel\":{\"a\":\"School Satchel\",\"b\":\"1F392\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"student\",\"education\",\"bag\",\"backpack\"],\"k\":[8,37]},\"mans_shoe\":{\"a\":\"Mans Shoe\",\"b\":\"1F45E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"male\"],\"k\":[15,34],\"n\":[\"shoe\"]},\"athletic_shoe\":{\"a\":\"Athletic Shoe\",\"b\":\"1F45F\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shoes\",\"sports\",\"sneakers\"],\"k\":[15,35]},\"high_heel\":{\"a\":\"High-Heeled Shoe\",\"b\":\"1F460\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"shoes\",\"female\",\"pumps\",\"stiletto\"],\"k\":[15,36]},\"sandal\":{\"a\":\"Womans Sandal\",\"b\":\"1F461\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shoes\",\"fashion\",\"flip flops\"],\"k\":[15,37]},\"boot\":{\"a\":\"Womans Boots\",\"b\":\"1F462\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"shoes\",\"fashion\"],\"k\":[15,38]},\"crown\":{\"a\":\"Crown\",\"b\":\"1F451\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"king\",\"kod\",\"leader\",\"royalty\",\"lord\"],\"k\":[15,21]},\"womans_hat\":{\"a\":\"Womans Hat\",\"b\":\"1F452\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"fashion\",\"accessories\",\"female\",\"lady\",\"spring\"],\"k\":[15,22]},\"tophat\":{\"a\":\"Top Hat\",\"b\":\"1F3A9\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"magic\",\"gentleman\",\"classy\",\"circus\"],\"k\":[9,3]},\"mortar_board\":{\"a\":\"Graduation Cap\",\"b\":\"1F393\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"school\",\"college\",\"degree\",\"university\",\"graduation\",\"cap\",\"hat\",\"legal\",\"learn\",\"education\"],\"k\":[8,38]},\"billed_cap\":{\"a\":\"Billed Cap\",\"b\":\"1F9E2\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[46,24],\"o\":10},\"helmet_with_white_cross\":{\"a\":\"Helmet with White Cross\",\"b\":\"26D1-FE0F\",\"c\":\"26D1\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"k\":[48,33],\"o\":5},\"prayer_beads\":{\"a\":\"Prayer Beads\",\"b\":\"1F4FF\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":false,\"j\":[\"dhikr\",\"religious\"],\"k\":[27,1],\"o\":8},\"lipstick\":{\"a\":\"Lipstick\",\"b\":\"1F484\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"female\",\"girl\",\"fashion\",\"woman\"],\"k\":[23,43]},\"ring\":{\"a\":\"Ring\",\"b\":\"1F48D\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"wedding\",\"propose\",\"marriage\",\"valentines\",\"diamond\",\"fashion\",\"jewelry\",\"gem\",\"engagement\"],\"k\":[24,39]},\"gem\":{\"a\":\"Gem Stone\",\"b\":\"1F48E\",\"d\":true,\"e\":true,\"f\":true,\"g\":true,\"h\":true,\"i\":true,\"j\":[\"blue\",\"ruby\",\"diamond\",\"jewelry\"],\"k\":[24,40]}},\"aliases\":{\"satisfied\":\"laughing\",\"grinning_face_with_star_eyes\":\"star-struck\",\"face_with_one_eyebrow_raised\":\"face_with_raised_eyebrow\",\"telephone\":\"phone\",\"cooking\":\"fried_egg\",\"paw_prints\":\"feet\",\"flag-cn\":\"cn\",\"lantern\":\"izakaya_lantern\",\"shocked_face_with_exploding_head\":\"exploding_head\",\"open_book\":\"book\",\"flag-de\":\"de\",\"grinning_face_with_one_large_and_one_small_eye\":\"zany_face\",\"serious_face_with_symbols_covering_mouth\":\"face_with_symbols_on_mouth\",\"flipper\":\"dolphin\",\"face_with_open_mouth_vomiting\":\"face_vomiting\",\"flag-es\":\"es\",\"face_with_finger_covering_closed_lips\":\"shushing_face\",\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\":\"face_with_hand_over_mouth\",\"flag-fr\":\"fr\",\"honeybee\":\"bee\",\"red_car\":\"car\",\"envelope\":\"email\",\"uk\":\"gb\",\"flag-gb\":\"gb\",\"poop\":\"hankey\",\"shit\":\"hankey\",\"staff_of_aesculapius\":\"medical_symbol\",\"knife\":\"hocho\",\"sailboat\":\"boat\",\"pencil\":\"memo\",\"flag-it\":\"it\",\"flag-jp\":\"jp\",\"heavy_exclamation_mark\":\"exclamation\",\"flag-kr\":\"kr\",\"waxing_gibbous_moon\":\"moon\",\"mother_christmas\":\"mrs_claus\",\"sun_small_cloud\":\"mostly_sunny\",\"sun_behind_cloud\":\"barely_sunny\",\"sun_behind_rain_cloud\":\"partly_sunny_rain\",\"lightning_cloud\":\"lightning\",\"tornado_cloud\":\"tornado\",\"flag-ru\":\"ru\",\"running\":\"runner\",\"flag-us\":\"us\",\"man_and_woman_holding_hands\":\"couple\",\"man-woman-boy\":\"family\",\"family\":\"man-woman-boy\",\"reversed_hand_with_middle_finger_extended\":\"middle_finger\",\"hand_with_index_and_middle_fingers_crossed\":\"crossed_fingers\",\"sign_of_the_horns\":\"the_horns\",\"raised_hand\":\"hand\",\"thumbsup\":\"+1\",\"thumbsdown\":\"-1\",\"punch\":\"facepunch\",\"collision\":\"boom\",\"tshirt\":\"shirt\",\"shoe\":\"mans_shoe\"}}");

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/anchors.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/anchors.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var Anchors = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Anchors, _React$PureComponent);

  function Anchors(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Anchors);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (Anchors.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Anchors)).call(this, props));

    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];

    _this.state = {
      selected: defaultCategory.name
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Anchors, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _props = this.props;
      var categories = _props.categories;
      var onAnchorClick = _props.onAnchorClick;


      onAnchorClick(categories[index], index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var categories = _props2.categories;
      var color = _props2.color;
      var i18n = _props2.i18n;
      var icons = _props2.icons;
      var selected = this.state.selected;


      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'emoji-mart-anchors' },
        categories.map(function (category, i) {
          var id = category.id;
          var name = category.name;
          var anchor = category.anchor;
          var isSelected = name == selected;

          if (anchor === false) {
            return null;
          }

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'span',
            {
              key: id,
              title: i18n.categories[id],
              'data-index': i,
              onClick: _this2.handleClick,
              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
              style: { color: isSelected ? color : null }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'div',
              { className: 'emoji-mart-anchor-icon' },
              icons.categories[id]()
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', {
              className: 'emoji-mart-anchor-bar',
              style: { backgroundColor: color }
            })
          );
        })
      );
    }
  }]);

  return Anchors;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Anchors);


Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {},
  icons: {}
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/anchors.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/anchors.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/category.js":
/*!****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/category.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found */ "./node_modules/emoji-mart/dist-es/components/not-found.js");














var Category = function (_React$Component) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Category, _React$Component);

  function Category(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Category);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (Category.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Category)).call(this, props));

    _this.data = props.data;
    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.setLabelRef = _this.setLabelRef.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Category, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.parent = this.container.parentNode;

      this.margin = 0;
      this.minMargin = 0;

      this.memoizeSize();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props = this.props;
      var name = _props.name;
      var perLine = _props.perLine;
      var native = _props.native;
      var hasStickyPosition = _props.hasStickyPosition;
      var emojis = _props.emojis;
      var emojiProps = _props.emojiProps;
      var skin = emojiProps.skin;
      var size = emojiProps.size;
      var set = emojiProps.set;
      var nextPerLine = nextProps.perLine;
      var nextNative = nextProps.native;
      var nextHasStickyPosition = nextProps.hasStickyPosition;
      var nextEmojis = nextProps.emojis;
      var nextEmojiProps = nextProps.emojiProps;
      var nextSkin = nextEmojiProps.skin;
      var nextSize = nextEmojiProps.size;
      var nextSet = nextEmojiProps.set;
      var shouldUpdate = false;

      if (name == 'Recent' && perLine != nextPerLine) {
        shouldUpdate = true;
      }

      if (name == 'Search') {
        shouldUpdate = !(emojis == nextEmojis);
      }

      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
        shouldUpdate = true;
      }

      return shouldUpdate;
    }
  }, {
    key: 'memoizeSize',
    value: function memoizeSize() {
      var _container$getBoundin = this.container.getBoundingClientRect();

      var top = _container$getBoundin.top;
      var height = _container$getBoundin.height;

      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

      var parentTop = _parent$getBoundingCl.top;

      var _label$getBoundingCli = this.label.getBoundingClientRect();

      var labelHeight = _label$getBoundingCli.height;


      this.top = top - parentTop + this.parent.scrollTop;

      if (height == 0) {
        this.maxMargin = 0;
      } else {
        this.maxMargin = height - labelHeight;
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(scrollTop) {
      var margin = scrollTop - this.top;
      margin = margin < this.minMargin ? this.minMargin : margin;
      margin = margin > this.maxMargin ? this.maxMargin : margin;

      if (margin == this.margin) return;

      if (!this.props.hasStickyPosition) {
        this.label.style.top = margin + 'px';
      }

      this.margin = margin;
      return true;
    }
  }, {
    key: 'getEmojis',
    value: function getEmojis() {
      var _this2 = this;

      var _props2 = this.props;
      var name = _props2.name;
      var emojis = _props2.emojis;
      var recent = _props2.recent;
      var perLine = _props2.perLine;


      if (name == 'Recent') {
        var custom = this.props.custom;

        var frequentlyUsed = recent || _utils_frequently__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].get(perLine);

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map(function (id) {
            var emoji = custom.filter(function (e) {
              return e.id === id;
            })[0];
            if (emoji) {
              return emoji;
            }

            return id;
          }).filter(function (id) {
            return !!Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getData */ "b"])(id, null, null, _this2.data);
          });
        }

        if (emojis.length === 0 && frequentlyUsed.length > 0) {
          return null;
        }
      }

      if (emojis) {
        emojis = emojis.slice(0);
      }

      return emojis;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay(display) {
      var emojis = this.getEmojis();

      if (!emojis) {
        return;
      }

      this.container.style.display = display;
    }
  }, {
    key: 'setContainerRef',
    value: function setContainerRef(c) {
      this.container = c;
    }
  }, {
    key: 'setLabelRef',
    value: function setLabelRef(c) {
      this.label = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props;
      var id = _props3.id;
      var name = _props3.name;
      var hasStickyPosition = _props3.hasStickyPosition;
      var emojiProps = _props3.emojiProps;
      var i18n = _props3.i18n;
      var notFound = _props3.notFound;
      var notFoundEmoji = _props3.notFoundEmoji;
      var emojis = this.getEmojis();
      var labelStyles = {};
      var labelSpanStyles = {};
      var containerStyles = {};

      if (!emojis) {
        containerStyles = {
          display: 'none'
        };
      }

      if (!hasStickyPosition) {
        labelStyles = {
          height: 28
        };

        labelSpanStyles = {
          position: 'absolute'
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        {
          ref: this.setContainerRef,
          className: 'emoji-mart-category',
          style: containerStyles
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          {
            style: labelStyles,
            'data-name': name,
            className: 'emoji-mart-category-label'
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'span',
            { style: labelSpanStyles, ref: this.setLabelRef },
            i18n.categories[id]
          )
        ),
        emojis && emojis.map(function (emoji) {
          return Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({ emoji: emoji, data: _this3.data }, emojiProps));
        }),
        emojis && !emojis.length && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_not_found__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          i18n: i18n,
          notFound: notFound,
          notFoundEmoji: notFoundEmoji,
          data: this.data,
          emojiProps: emojiProps
        })
      );
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Category);


Category.defaultProps = {
  emojis: [],
  hasStickyPosition: true
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/category.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/category.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/emoji.js":
/*!*******************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/emoji/emoji.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");








var Emoji = function Emoji(props) {
  for (var k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k];
    }
  }

  return Object(_nimble_emoji__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props));
};

Emoji.propTypes = _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__[/* EmojiPropTypes */ "b"];
Emoji.defaultProps = Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__[/* EmojiDefaultProps */ "a"], { data: _data_all_json__WEBPACK_IMPORTED_MODULE_2__ });

/* harmony default export */ __webpack_exports__["a"] = (Emoji);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/emoji/emoji.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/emoji/emoji.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");








var _getData = function _getData(props) {
  var emoji = props.emoji;
  var skin = props.skin;
  var set = props.set;
  var data = props.data;

  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getData */ "b"])(emoji, skin, set, data);
};

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props);

  var sheet_x = _getData2.sheet_x;
  var sheet_y = _getData2.sheet_y;
  var multiplyX = 100 / (props.sheetColumns - 1);
  var multiplyY = 100 / (props.sheetRows - 1);

  return multiplyX * sheet_x + '% ' + multiplyY * sheet_y + '%';
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji;
  var skin = props.skin;
  var set = props.set;
  var data = props.data;

  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getSanitizedData */ "c"])(emoji, skin, set, data);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }
  var onClick = props.onClick;
  var emoji = _getSanitizedData(props);

  onClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }
  var onOver = props.onOver;
  var emoji = _getSanitizedData(props);

  onOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }
  var onLeave = props.onLeave;
  var emoji = _getSanitizedData(props);

  onLeave(emoji, e);
};

var _isNumeric = function _isNumeric(value) {
  return !isNaN(value - parseFloat(value));
};

var _convertStyleToCSS = function _convertStyleToCSS(style) {
  var div = document.createElement('div');

  for (var key in style) {
    var value = style[key];

    if (_isNumeric(value)) {
      value += 'px';
    }

    div.style[key] = value;
  }

  return div.getAttribute('style');
};

var NimbleEmoji = function NimbleEmoji(props) {
  if (props.data.compressed) {
    Object(_utils_data__WEBPACK_IMPORTED_MODULE_4__[/* uncompress */ "b"])(props.data);
  }

  for (var k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }

  var data = _getData(props);
  if (!data) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }

  var unified = data.unified;
  var custom = data.custom;
  var short_names = data.short_names;
  var imageUrl = data.imageUrl;
  var style = {};
  var children = props.children;
  var className = 'emoji-mart-emoji';
  var title = null;

  if (!unified && !custom) {
    if (props.fallback) {
      return props.fallback(data, props);
    } else {
      return null;
    }
  }

  if (props.tooltip) {
    title = short_names[0];
  }

  if (props.native && unified) {
    className += ' emoji-mart-emoji-native';
    style = { fontSize: props.size };
    children = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* unifiedToNative */ "f"])(unified);

    if (props.forceSize) {
      style.display = 'inline-block';
      style.width = props.size;
      style.height = props.size;
    }
  } else if (custom) {
    className += ' emoji-mart-emoji-custom';
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block'
    };
    if (data.spriteUrl) {
      style = Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, {
        backgroundImage: 'url(' + data.spriteUrl + ')',
        backgroundSize: 100 * props.sheetColumns + '% ' + 100 * props.sheetRows + '%',
        backgroundPosition: _getPosition(props)
      });
    } else {
      style = Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, {
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'contain'
      });
    }
  } else {
    var setHasEmoji = data['has_img_' + props.set] == undefined || data['has_img_' + props.set];

    if (!setHasEmoji) {
      if (props.fallback) {
        return props.fallback(data, props);
      } else {
        return null;
      }
    } else {
      style = {
        width: props.size,
        height: props.size,
        display: 'inline-block',
        backgroundImage: 'url(' + props.backgroundImageFn(props.set, props.sheetSize) + ')',
        backgroundSize: 100 * props.sheetColumns + '% ' + 100 * props.sheetRows + '%',
        backgroundPosition: _getPosition(props)
      };
    }
  }

  if (props.html) {
    style = _convertStyleToCSS(style);
    return '<span style=\'' + style + '\' ' + (title ? 'title=\'' + title + '\'' : '') + ' class=\'' + className + '\'>' + (children || '') + '</span>';
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'span',
      {
        key: props.emoji.id || props.emoji,
        onClick: function onClick(e) {
          return _handleClick(e, props);
        },
        onMouseEnter: function onMouseEnter(e) {
          return _handleOver(e, props);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _handleLeave(e, props);
        },
        title: title,
        className: className
      },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'span',
        { style: style },
        children
      )
    );
  }
};

NimbleEmoji.defaultProps = _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__[/* EmojiDefaultProps */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (NimbleEmoji);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/not-found.js":
/*!*****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/not-found.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");











var NotFound = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NotFound, _React$PureComponent);

  function NotFound() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NotFound);

    return Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (NotFound.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NotFound)).apply(this, arguments));
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NotFound, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var emojiProps = _props.emojiProps;
      var i18n = _props.i18n;
      var notFound = _props.notFound;
      var notFoundEmoji = _props.notFoundEmoji;


      var component = notFound && notFound() || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        { className: 'emoji-mart-no-results' },
        Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          data: data
        }, emojiProps, {
          size: 38,
          emoji: notFoundEmoji,
          onOver: null,
          onLeave: null,
          onClick: null
        })),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: 'emoji-mart-no-results-label' },
          i18n.notfound
        )
      );

      return component;
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (NotFound);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/not-found.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/not-found.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js":
/*!****************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vendor/raf-polyfill */ "./node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../svgs */ "./node_modules/emoji-mart/dist-es/svgs/index.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/store */ "./node_modules/emoji-mart/dist-es/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../anchors */ "./node_modules/emoji-mart/dist-es/components/anchors.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../category */ "./node_modules/emoji-mart/dist-es/components/category.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../preview */ "./node_modules/emoji-mart/dist-es/components/preview.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../search */ "./node_modules/emoji-mart/dist-es/components/search.js");























var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  skintext: 'Choose your default skin tone',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};

var NimblePicker = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NimblePicker, _React$PureComponent);

  function NimblePicker(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NimblePicker);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (NimblePicker.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NimblePicker)).call(this, props));

    _this.RECENT_CATEGORY = { id: 'recent', name: 'Recent', emojis: null };
    _this.CUSTOM_CATEGORY = { id: 'custom', name: 'Custom', emojis: [] };
    _this.SEARCH_CATEGORY = {
      id: 'search',
      name: 'Search',
      emojis: null,
      anchor: false
    };

    if (props.data.compressed) {
      Object(_utils_data__WEBPACK_IMPORTED_MODULE_13__[/* uncompress */ "b"])(props.data);
    }

    _this.data = props.data;
    _this.i18n = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* deepMerge */ "a"])(I18N, props.i18n);
    _this.icons = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* deepMerge */ "a"])(_svgs__WEBPACK_IMPORTED_MODULE_9__, props.icons);
    _this.state = {
      skin: props.skin || _utils_store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].get('skin') || props.defaultSkin,
      firstRender: true
    };

    _this.categories = [];
    var allCategories = [].concat(_this.data.categories);

    if (props.custom.length > 0) {
      _this.CUSTOM_CATEGORY.emojis = props.custom.map(function (emoji) {
        return Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, emoji, {
          // `<Category />` expects emoji to have an `id`.
          id: emoji.short_names[0],
          custom: true
        });
      });

      allCategories.push(_this.CUSTOM_CATEGORY);
    }

    _this.hideRecent = true;

    if (props.include != undefined) {
      allCategories.sort(function (a, b) {
        if (props.include.indexOf(a.id) > props.include.indexOf(b.id)) {
          return 1;
        }

        return -1;
      });
    }

    for (var categoryIndex = 0; categoryIndex < allCategories.length; categoryIndex++) {
      var category = allCategories[categoryIndex];
      var isIncluded = props.include && props.include.length ? props.include.indexOf(category.id) > -1 : true;
      var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.id) > -1 : false;
      if (!isIncluded || isExcluded) {
        continue;
      }

      if (props.emojisToShowFilter) {
        var newEmojis = [];

        var emojis = category.emojis;

        for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
          var emoji = emojis[emojiIndex];
          if (props.emojisToShowFilter(_this.data.emojis[emoji] || emoji)) {
            newEmojis.push(emoji);
          }
        }

        if (newEmojis.length) {
          var newCategory = {
            emojis: newEmojis,
            name: category.name,
            id: category.id
          };

          _this.categories.push(newCategory);
        }
      } else {
        _this.categories.push(category);
      }
    }

    var includeRecent = props.include && props.include.length ? props.include.indexOf(_this.RECENT_CATEGORY.id) > -1 : true;
    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf(_this.RECENT_CATEGORY.id) > -1 : false;
    if (includeRecent && !excludeRecent) {
      _this.hideRecent = false;
      _this.categories.unshift(_this.RECENT_CATEGORY);
    }

    if (_this.categories[0]) {
      _this.categories[0].first = true;
    }

    _this.categories.unshift(_this.SEARCH_CATEGORY);

    _this.setAnchorsRef = _this.setAnchorsRef.bind(_this);
    _this.handleAnchorClick = _this.handleAnchorClick.bind(_this);
    _this.setSearchRef = _this.setSearchRef.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.setScrollRef = _this.setScrollRef.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleScrollPaint = _this.handleScrollPaint.bind(_this);
    _this.handleEmojiOver = _this.handleEmojiOver.bind(_this);
    _this.handleEmojiLeave = _this.handleEmojiLeave.bind(_this);
    _this.handleEmojiClick = _this.handleEmojiClick.bind(_this);
    _this.handleEmojiSelect = _this.handleEmojiSelect.bind(_this);
    _this.setPreviewRef = _this.setPreviewRef.bind(_this);
    _this.handleSkinChange = _this.handleSkinChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NimblePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.skin) {
        this.setState({ skin: props.skin });
      } else if (props.defaultSkin && !_utils_store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].get('skin')) {
        this.setState({ skin: props.defaultSkin });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.firstRender) {
        this.testStickyPosition();
        this.firstRenderTimeout = setTimeout(function () {
          _this2.setState({ firstRender: false });
        }, 60);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateCategoriesSize();
      this.handleScroll();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.SEARCH_CATEGORY.emojis = null;

      clearTimeout(this.leaveTimeout);
      clearTimeout(this.firstRenderTimeout);
    }
  }, {
    key: 'testStickyPosition',
    value: function testStickyPosition() {
      var stickyTestElement = document.createElement('div');

      var prefixes = ['', '-webkit-', '-ms-', '-moz-', '-o-'];

      prefixes.forEach(function (prefix) {
        return stickyTestElement.style.position = prefix + 'sticky';
      });

      this.hasStickyPosition = !!stickyTestElement.style.position.length;
    }
  }, {
    key: 'handleEmojiOver',
    value: function handleEmojiOver(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      // Use Array.prototype.find() when it is more widely supported.
      var emojiData = this.CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
        return customEmoji.id === emoji.id;
      })[0];
      for (var key in emojiData) {
        if (emojiData.hasOwnProperty(key)) {
          emoji[key] = emojiData[key];
        }
      }

      preview.setState({ emoji: emoji });
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'handleEmojiLeave',
    value: function handleEmojiLeave(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      this.leaveTimeout = setTimeout(function () {
        preview.setState({ emoji: null });
      }, 16);
    }
  }, {
    key: 'handleEmojiClick',
    value: function handleEmojiClick(emoji, e) {
      this.props.onClick(emoji, e);
      this.handleEmojiSelect(emoji);
    }
  }, {
    key: 'handleEmojiSelect',
    value: function handleEmojiSelect(emoji) {
      var _this3 = this;

      this.props.onSelect(emoji);
      if (!this.hideRecent && !this.props.recent) _utils_frequently__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].add(emoji);

      var component = this.categoryRefs['category-1'];
      if (component) {
        var maxMargin = component.maxMargin;
        component.forceUpdate();

        window.requestAnimationFrame(function () {
          if (!_this3.scroll) return;
          component.memoizeSize();
          if (maxMargin == component.maxMargin) return;

          _this3.updateCategoriesSize();
          _this3.handleScrollPaint();

          if (_this3.SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none');
          }
        });
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.handleScrollPaint);
      }
    }
  }, {
    key: 'handleScrollPaint',
    value: function handleScrollPaint() {
      this.waitingForPaint = false;

      if (!this.scroll) {
        return;
      }

      var activeCategory = null;

      if (this.SEARCH_CATEGORY.emojis) {
        activeCategory = this.SEARCH_CATEGORY;
      } else {
        var target = this.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0;

        for (var i = 0, l = this.categories.length; i < l; i++) {
          var ii = scrollingDown ? this.categories.length - 1 - i : i,
              category = this.categories[ii],
              component = this.categoryRefs['category-' + ii];

          if (component) {
            var active = component.handleScroll(scrollTop);

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top;
              }
            }

            if (active && !activeCategory) {
              activeCategory = category;
            }
          }
        }

        if (scrollTop < minTop) {
          activeCategory = this.categories.filter(function (category) {
            return !(category.anchor === false);
          })[0];
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1];
        }
      }

      if (activeCategory) {
        var anchors = this.anchors;
        var _activeCategory = activeCategory;
        var categoryName = _activeCategory.name;


        if (anchors.state.selected != categoryName) {
          anchors.setState({ selected: categoryName });
        }
      }

      this.scrollTop = scrollTop;
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(emojis) {
      this.SEARCH_CATEGORY.emojis = emojis;

      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs['category-' + i];

        if (component && component.props.name != 'Search') {
          var display = emojis ? 'none' : 'inherit';
          component.updateDisplay(display);
        }
      }

      this.forceUpdate();
      this.scroll.scrollTop = 0;
      this.handleScroll();
    }
  }, {
    key: 'handleAnchorClick',
    value: function handleAnchorClick(category, i) {
      var component = this.categoryRefs['category-' + i];
      var scroll = this.scroll;
      var anchors = this.anchors;
      var scrollToComponent = null;

      scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.top;


          if (category.first) {
            top = 0;
          } else {
            top += 1;
          }

          scroll.scrollTop = top;
        }
      };

      if (this.SEARCH_CATEGORY.emojis) {
        this.handleSearch(null);
        this.search.clear();

        window.requestAnimationFrame(scrollToComponent);
      } else {
        scrollToComponent();
      }
    }
  }, {
    key: 'handleSkinChange',
    value: function handleSkinChange(skin) {
      var newState = { skin: skin };
      var onSkinChange = this.props.onSkinChange;


      this.setState(newState);
      _utils_store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].update(newState);

      onSkinChange(skin);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var handled = false;

      switch (e.keyCode) {
        case 13:
          var emoji = void 0;

          if (this.SEARCH_CATEGORY.emojis && (emoji = this.SEARCH_CATEGORY.emojis[0])) {
            this.handleEmojiSelect(emoji);
          }

          handled = true;
          break;
      }

      if (handled) {
        e.preventDefault();
      }
    }
  }, {
    key: 'updateCategoriesSize',
    value: function updateCategoriesSize() {
      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs['category-' + i];
        if (component) component.memoizeSize();
      }

      if (this.scroll) {
        var target = this.scroll;
        this.scrollHeight = target.scrollHeight;
        this.clientHeight = target.clientHeight;
      }
    }
  }, {
    key: 'getCategories',
    value: function getCategories() {
      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
    }
  }, {
    key: 'setAnchorsRef',
    value: function setAnchorsRef(c) {
      this.anchors = c;
    }
  }, {
    key: 'setSearchRef',
    value: function setSearchRef(c) {
      this.search = c;
    }
  }, {
    key: 'setPreviewRef',
    value: function setPreviewRef(c) {
      this.preview = c;
    }
  }, {
    key: 'setScrollRef',
    value: function setScrollRef(c) {
      this.scroll = c;
    }
  }, {
    key: 'setCategoryRef',
    value: function setCategoryRef(name, c) {
      if (!this.categoryRefs) {
        this.categoryRefs = {};
      }

      this.categoryRefs[name] = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props;
      var perLine = _props.perLine;
      var emojiSize = _props.emojiSize;
      var set = _props.set;
      var sheetSize = _props.sheetSize;
      var sheetColumns = _props.sheetColumns;
      var sheetRows = _props.sheetRows;
      var style = _props.style;
      var title = _props.title;
      var emoji = _props.emoji;
      var color = _props.color;
      var native = _props.native;
      var backgroundImageFn = _props.backgroundImageFn;
      var emojisToShowFilter = _props.emojisToShowFilter;
      var showPreview = _props.showPreview;
      var showSkinTones = _props.showSkinTones;
      var emojiTooltip = _props.emojiTooltip;
      var include = _props.include;
      var exclude = _props.exclude;
      var recent = _props.recent;
      var autoFocus = _props.autoFocus;
      var skinEmoji = _props.skinEmoji;
      var notFound = _props.notFound;
      var notFoundEmoji = _props.notFoundEmoji;
      var skin = this.state.skin;
      var width = perLine * (emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* measureScrollbar */ "e"])();

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        {
          style: Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({ width: width }, style),
          className: 'emoji-mart',
          onKeyDown: this.handleKeyDown
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'emoji-mart-bar' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_anchors__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
            ref: this.setAnchorsRef,
            data: this.data,
            i18n: this.i18n,
            color: color,
            categories: this.categories,
            onAnchorClick: this.handleAnchorClick,
            icons: this.icons
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
          ref: this.setSearchRef,
          onSearch: this.handleSearch,
          data: this.data,
          i18n: this.i18n,
          emojisToShowFilter: emojisToShowFilter,
          include: include,
          exclude: exclude,
          custom: this.CUSTOM_CATEGORY.emojis,
          autoFocus: autoFocus
        }),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          {
            ref: this.setScrollRef,
            className: 'emoji-mart-scroll',
            onScroll: this.handleScroll
          },
          this.getCategories().map(function (category, i) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_category__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
              ref: _this4.setCategoryRef.bind(_this4, 'category-' + i),
              key: category.name,
              id: category.id,
              name: category.name,
              emojis: category.emojis,
              perLine: perLine,
              native: native,
              hasStickyPosition: _this4.hasStickyPosition,
              data: _this4.data,
              i18n: _this4.i18n,
              recent: category.id == _this4.RECENT_CATEGORY.id ? recent : undefined,
              custom: category.id == _this4.RECENT_CATEGORY.id ? _this4.CUSTOM_CATEGORY.emojis : undefined,
              emojiProps: {
                native: native,
                skin: skin,
                size: emojiSize,
                set: set,
                sheetSize: sheetSize,
                sheetColumns: sheetColumns,
                sheetRows: sheetRows,
                forceSize: native,
                tooltip: emojiTooltip,
                backgroundImageFn: backgroundImageFn,
                onOver: _this4.handleEmojiOver,
                onLeave: _this4.handleEmojiLeave,
                onClick: _this4.handleEmojiClick
              },
              notFound: notFound,
              notFoundEmoji: notFoundEmoji
            });
          })
        ),
        showPreview && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'emoji-mart-bar' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_preview__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
            ref: this.setPreviewRef,
            data: this.data,
            title: title,
            emoji: emoji,
            showSkinTones: showSkinTones,
            emojiProps: {
              native: native,
              size: 38,
              skin: skin,
              set: set,
              sheetSize: sheetSize,
              sheetColumns: sheetColumns,
              sheetRows: sheetRows,
              backgroundImageFn: backgroundImageFn
            },
            skinsProps: {
              skin: skin,
              onChange: this.handleSkinChange,
              skinEmoji: skinEmoji
            },
            i18n: this.i18n
          })
        )
      );
    }
  }]);

  return NimblePicker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (NimblePicker);

NimblePicker.defaultProps = Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_14__[/* PickerDefaultProps */ "c"]);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/picker/picker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/picker/picker.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nimble-picker */ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");













var Picker = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Picker, _React$PureComponent);

  function Picker() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Picker);

    return Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (Picker.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Picker)).apply(this, arguments));
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Picker, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_nimble_picker__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.props, this.state));
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Picker);

Picker.defaultProps = Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_9__[/* PickerDefaultProps */ "c"], { data: _data_all_json__WEBPACK_IMPORTED_MODULE_7__ });
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/picker/picker.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/picker/picker.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/preview.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/preview.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/extends */ "./node_modules/emoji-mart/dist-es/polyfills/extends.js");
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _skins_emoji__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skins-emoji */ "./node_modules/emoji-mart/dist-es/components/skins-emoji.js");
/* harmony import */ var _skins_dot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skins-dot */ "./node_modules/emoji-mart/dist-es/components/skins-dot.js");














var Preview = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Preview, _React$PureComponent);

  function Preview(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Preview);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (Preview.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Preview)).call(this, props));

    _this.data = props.data;
    _this.state = { emoji: null };
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Preview, [{
    key: 'render',
    value: function render() {
      var emoji = this.state.emoji;
      var _props = this.props;
      var emojiProps = _props.emojiProps;
      var skinsProps = _props.skinsProps;
      var showSkinTones = _props.showSkinTones;
      var title = _props.title;
      var idleEmoji = _props.emoji;
      var i18n = _props.i18n;


      if (emoji) {
        var emojiData = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* getData */ "b"])(emoji, null, null, this.data);
        var _emojiData$emoticons = emojiData.emoticons;
        var emoticons = _emojiData$emoticons === undefined ? [] : _emojiData$emoticons;
        var knownEmoticons = [];
        var listedEmoticons = [];

        emoticons.forEach(function (emoticon) {
          if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
            return;
          }

          knownEmoticons.push(emoticon.toLowerCase());
          listedEmoticons.push(emoticon);
        });

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: 'emoji-mart-preview' },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            { className: 'emoji-mart-preview-emoji' },
            Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
              key: emoji.id,
              emoji: emoji,
              data: this.data
            }, emojiProps))
          ),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            { className: 'emoji-mart-preview-data' },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'emoji-mart-preview-name' },
              emoji.name
            ),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'emoji-mart-preview-shortnames' },
              emojiData.short_names.map(function (short_name) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'span',
                  { key: short_name, className: 'emoji-mart-preview-shortname' },
                  ':',
                  short_name,
                  ':'
                );
              })
            ),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'emoji-mart-preview-emoticons' },
              listedEmoticons.map(function (emoticon) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  'span',
                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
                  emoticon
                );
              })
            )
          )
        );
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: 'emoji-mart-preview' },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            { className: 'emoji-mart-preview-emoji' },
            idleEmoji && idleEmoji.length && Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_polyfills_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({ emoji: idleEmoji, data: this.data }, emojiProps))
          ),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            { className: 'emoji-mart-preview-data' },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'span',
              { className: 'emoji-mart-title-label' },
              title
            )
          ),
          showSkinTones && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'div',
            {
              className: 'emoji-mart-preview-skins' + (skinsProps.skinEmoji ? ' custom' : '')
            },
            skinsProps.skinEmoji ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_skins_emoji__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
              skin: skinsProps.skin,
              emojiProps: emojiProps,
              data: this.data,
              skinEmoji: skinsProps.skinEmoji,
              i18n: i18n,
              onChange: skinsProps.onChange
            }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_skins_dot__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
              skin: skinsProps.skin,
              i18n: i18n,
              onChange: skinsProps.onChange
            })
          )
        );
      }
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Preview);


Preview.defaultProps = {
  showSkinTones: true,
  onChange: function onChange() {}
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/preview.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/preview.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/search.js":
/*!**************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/search.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../svgs */ "./node_modules/emoji-mart/dist-es/svgs/index.js");
/* harmony import */ var _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/emoji-index/nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");











var Search = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Search, _React$PureComponent);

  function Search(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Search);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (Search.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Search)).call(this, props));

    _this.state = {
      icon: _svgs__WEBPACK_IMPORTED_MODULE_7__["search"].search,
      isSearching: false
    };

    _this.data = props.data;
    _this.emojiIndex = new _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](_this.data);
    _this.setRef = _this.setRef.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Search, [{
    key: 'search',
    value: function search(value) {
      if (value == '') this.setState({
        icon: _svgs__WEBPACK_IMPORTED_MODULE_7__["search"].search,
        isSearching: false
      });else this.setState({
        icon: _svgs__WEBPACK_IMPORTED_MODULE_7__["search"].delete,
        isSearching: true
      });

      this.props.onSearch(this.emojiIndex.search(value, {
        emojisToShowFilter: this.props.emojisToShowFilter,
        maxResults: this.props.maxResults,
        include: this.props.include,
        exclude: this.props.exclude,
        custom: this.props.custom
      }));
    }
  }, {
    key: 'clear',
    value: function clear() {
      if (this.input.value == '') return;
      this.input.value = '';
      this.search('');
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.search(this.input.value);
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.clear();
      }
    }
  }, {
    key: 'setRef',
    value: function setRef(c) {
      this.input = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var i18n = _props.i18n;
      var autoFocus = _props.autoFocus;
      var _state = this.state;
      var icon = _state.icon;
      var isSearching = _state.isSearching;


      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'emoji-mart-search' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
          ref: this.setRef,
          type: 'text',
          onChange: this.handleChange,
          placeholder: i18n.search,
          autoFocus: autoFocus
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'button',
          {
            className: 'emoji-mart-search-icon',
            onClick: this.clear,
            onKeyUp: this.handleKeyUp,
            disabled: !isSearching
          },
          icon()
        )
      );
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Search);


Search.defaultProps = {
  onSearch: function onSearch() {},
  maxResults: 75,
  emojisToShowFilter: null,
  autoFocus: false
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/search.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/search.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins-dot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins-dot.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skins */ "./node_modules/emoji-mart/dist-es/components/skins.js");










var SkinsDot = function (_Skins) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SkinsDot, _Skins);

  function SkinsDot(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SkinsDot);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (SkinsDot.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(SkinsDot)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SkinsDot, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var skin = _props.skin;
      var i18n = _props.i18n;
      var opened = this.state.opened;

      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        skinToneNodes.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            key: 'skin-tone-' + skinTone,
            className: 'emoji-mart-skin-swatch' + (selected ? ' selected' : '')
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', {
            onClick: this.handleClick,
            'data-skin': skinTone,
            className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone
          })
        ));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'emoji-mart-skin-swatches' + (opened ? ' opened' : '') },
        skinToneNodes
      );
    }
  }]);

  return SkinsDot;
}(_skins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (SkinsDot);


SkinsDot.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

SkinsDot.defaultProps = {
  onChange: function onChange() {}
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins-dot.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins-dot.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins-emoji.js":
/*!*******************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins-emoji.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skins */ "./node_modules/emoji-mart/dist-es/components/skins.js");











var SkinsEmoji = function (_Skins) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SkinsEmoji, _Skins);

  function SkinsEmoji(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SkinsEmoji);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (SkinsEmoji.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(SkinsEmoji)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(SkinsEmoji, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var skin = _props.skin;
      var emojiProps = _props.emojiProps;
      var data = _props.data;
      var skinEmoji = _props.skinEmoji;
      var i18n = _props.i18n;
      var opened = this.state.opened;

      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        skinToneNodes.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            key: 'skin-tone-' + skinTone,
            className: 'emoji-mart-skin-swatch custom' + (selected ? ' selected' : '')
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'span',
            {
              onClick: this.handleClick,
              'data-skin': skinTone,
              className: 'emoji-mart-skin-tone-' + skinTone
            },
            Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({
              emoji: skinEmoji,
              data: data,
              skin: skinTone,
              backgroundImageFn: emojiProps.backgroundImageFn,
              native: emojiProps.native,
              set: emojiProps.set,
              sheetSize: emojiProps.sheetSize,
              size: 23
            })
          )
        ));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          className: 'emoji-mart-skin-swatches custom' + (opened ? ' opened' : '')
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'emoji-mart-skin-text' + (opened ? ' opened' : '') },
          i18n.skintext
        ),
        skinToneNodes
      );
    }
  }]);

  return SkinsEmoji;
}(_skins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (SkinsEmoji);


SkinsEmoji.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  emojiProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  skinTone: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  skinEmoji: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

SkinsEmoji.defaultProps = {
  onChange: function onChange() {},
  skinTone: null
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins-emoji.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins-emoji.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins.js":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectGetPrototypeOf */ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var _polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/possibleConstructorReturn */ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js");
/* harmony import */ var _polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/inherits */ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");










var Skins = function (_React$PureComponent) {
  Object(_polyfills_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Skins, _React$PureComponent);

  function Skins(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Skins);

    var _this = Object(_polyfills_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (Skins.__proto__ || Object(_polyfills_objectGetPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Skins)).call(this, props));

    _this.state = {
      opened: false
    };
    return _this;
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Skins, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var skin = parseInt(e.currentTarget.getAttribute('data-skin'));
      var onChange = this.props.onChange;


      if (!this.state.opened) {
        this.setState({ opened: true });
      } else {
        this.setState({ opened: false });
        if (skin != this.props.skin) {
          onChange(skin);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Skins;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Skins);


Skins.defaultProps = {
  onChange: function onChange() {}
};
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/components/skins.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/index.js ***!
  \**************************************************/
/*! exports provided: emojiIndex, NimbleEmojiIndex, store, frequently, Picker, NimblePicker, Emoji, NimbleEmoji, Category */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_index_emoji_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/emoji-index/emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emojiIndex", function() { return _utils_emoji_index_emoji_index__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/emoji-index/nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmojiIndex", function() { return _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/store */ "./node_modules/emoji-mart/dist-es/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _components_picker_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/picker/picker */ "./node_modules/emoji-mart/dist-es/components/picker/picker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components_picker_picker__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _components_picker_nimble_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/picker/nimble-picker */ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimblePicker", function() { return _components_picker_nimble_picker__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _components_emoji_emoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/emoji/emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/emoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components_emoji_emoji__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _components_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmoji", function() { return _components_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category */ "./node_modules/emoji-mart/dist-es/components/category.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _components_category__WEBPACK_IMPORTED_MODULE_8__["a"]; });











 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/index.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js":
/*!******************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/createClass.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _Object = Object;

/* harmony default export */ __webpack_exports__["a"] = ((function createClass() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      _Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})());
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/createClass.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/createClass.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/extends.js":
/*!**************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/extends.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _Object = Object;

/* harmony default export */ __webpack_exports__["a"] = (_Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
});
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/extends.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/extends.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/inherits.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inherits; });
var _Object = Object;

function inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }

  subClass.prototype = _Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    _Object.setPrototypeOf ? _Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
}
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/inherits.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/inherits.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _Object = Object;

/* harmony default export */ __webpack_exports__["a"] = (_Object.getPrototypeOf || function (O) {
  O = Object(O);

  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? Object.prototype : null;
});
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return possibleConstructorReturn; });
function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _String = String;

/* harmony default export */ __webpack_exports__["a"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;
  if (!length) {
    return '';
  }
  var result = '';
  while (++index < length) {
    var codePoint = Number(arguments[index]);
    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
});
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/svgs/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/svgs/index.js ***!
  \*******************************************************/
/*! exports provided: categories, search */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var categories = {
  activity: function activity() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113" })
    );
  },

  custom: function custom() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        { transform: "translate(2.000000, 1.000000)" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { id: "Rectangle", x: "8", y: "0", width: "3", height: "21", rx: "1.5" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
          id: "Rectangle",
          transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ",
          x: "8.343",
          y: "0.049",
          width: "3",
          height: "21",
          rx: "1.5"
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
          id: "Rectangle",
          transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ",
          x: "8.343",
          y: "0.049",
          width: "3",
          height: "21",
          rx: "1.5"
        })
      )
    );
  },

  flags: function flags() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z" })
    );
  },

  foods: function foods() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9" })
    );
  },

  nature: function nature() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235" })
    );
  },

  objects: function objects() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789" })
    );
  },

  people: function people() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0" })
    );
  },

  places: function places() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z" })
    );
  },

  recent: function recent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" })
    );
  },

  symbols: function symbols() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76" })
    );
  }
};

var search = {
  search: function search() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "13",
        height: "13",
        viewBox: "0 0 20 20",
        opacity: "0.5"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" })
    );
  },

  delete: function _delete() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "13",
        height: "13",
        viewBox: "0 0 20 20",
        opacity: "0.5"
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })
    );
  }
};


 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/svgs/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/svgs/index.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/data.js":
/*!*******************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/data.js ***!
  \*******************************************************/
/*! exports provided: buildSearch, compress, uncompress */
/*! exports used: buildSearch, uncompress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildSearch; });
/* unused harmony export compress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uncompress; });
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_emojione: 'g',
  has_img_facebook: 'h',
  has_img_messenger: 'i',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;(Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;(split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);

  return search.join(',');
};

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;

  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;

  emoji.added_in = parseInt(emoji.added_in);
  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

var uncompress = function uncompress(data) {
  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);

    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;

    if (!emoji.text) emoji.text = '';

    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);

    emoji.search = buildSearch(emoji);
  }
};


 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/data.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/data.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");



var emojiIndex = new _nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_data_all_json__WEBPACK_IMPORTED_MODULE_0__);
var emojis = emojiIndex.emojis;
var emoticons = emojiIndex.emoticons;


function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}

/* harmony default export */ __webpack_exports__["a"] = ({ search: search, emojis: emojis, emoticons: emoticons });
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/createClass */ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./node_modules/emoji-mart/dist-es/utils/data.js");





var NimbleEmojiIndex = function () {
  function NimbleEmojiIndex(data) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NimbleEmojiIndex);

    if (data.compressed) {
      Object(_data__WEBPACK_IMPORTED_MODULE_3__[/* uncompress */ "b"])(data);
    }

    this.data = data || {};
    this.originalPool = {};
    this.index = {};
    this.emojis = {};
    this.emoticons = {};
    this.customEmojisList = [];

    this.buildIndex();
  }

  Object(_polyfills_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NimbleEmojiIndex, [{
    key: 'buildIndex',
    value: function buildIndex() {
      var _this = this;

      var _loop = function _loop(emoji) {
        var emojiData = _this.data.emojis[emoji];
        var short_names = emojiData.short_names;
        var emoticons = emojiData.emoticons;
        var id = short_names[0];

        if (emoticons) {
          emoticons.forEach(function (emoticon) {
            if (_this.emoticons[emoticon]) {
              return;
            }

            _this.emoticons[emoticon] = id;
          });
        }

        _this.emojis[id] = Object(___WEBPACK_IMPORTED_MODULE_2__[/* getSanitizedData */ "c"])(id, null, null, _this.data);
        _this.originalPool[id] = emojiData;
      };

      for (var emoji in this.data.emojis) {
        _loop(emoji);
      }
    }
  }, {
    key: 'clearCustomEmojis',
    value: function clearCustomEmojis(pool) {
      var _this2 = this;

      this.customEmojisList.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];

        delete pool[emojiId];
        delete _this2.emojis[emojiId];
      });
    }
  }, {
    key: 'addCustomToPool',
    value: function addCustomToPool(custom, pool) {
      var _this3 = this;

      if (this.customEmojisList.length) this.clearCustomEmojis(pool);

      custom.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];

        if (emojiId && !pool[emojiId]) {
          pool[emojiId] = Object(___WEBPACK_IMPORTED_MODULE_2__[/* getData */ "b"])(emoji, null, null, _this3.data);
          _this3.emojis[emojiId] = Object(___WEBPACK_IMPORTED_MODULE_2__[/* getSanitizedData */ "c"])(emoji, null, null, _this3.data);
        }
      });

      this.customEmojisList = custom;
      this.index = {};
    }
  }, {
    key: 'search',
    value: function search(value) {
      var _this4 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var emojisToShowFilter = _ref.emojisToShowFilter;
      var maxResults = _ref.maxResults;
      var include = _ref.include;
      var exclude = _ref.exclude;
      var _ref$custom = _ref.custom;
      var custom = _ref$custom === undefined ? [] : _ref$custom;

      if (this.customEmojisList != custom) this.addCustomToPool(custom, this.originalPool);

      maxResults || (maxResults = 75);
      include || (include = []);
      exclude || (exclude = []);

      var results = null,
          pool = this.originalPool;

      if (value.length) {
        if (value == '-' || value == '-1') {
          return [this.emojis['-1']];
        }

        var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
            allResults = [];

        if (values.length > 2) {
          values = [values[0], values[1]];
        }

        if (include.length || exclude.length) {
          pool = {};

          this.data.categories.forEach(function (category) {
            var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
            var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;
            if (!isIncluded || isExcluded) {
              return;
            }

            category.emojis.forEach(function (emojiId) {
              return pool[emojiId] = _this4.data.emojis[emojiId];
            });
          });

          if (custom.length) {
            var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
            var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
            if (customIsIncluded && !customIsExcluded) {
              this.addCustomToPool(custom, pool);
            }
          }
        }

        allResults = values.map(function (value) {
          var aPool = pool,
              aIndex = _this4.index,
              length = 0;

          for (var charIndex = 0; charIndex < value.length; charIndex++) {
            var char = value[charIndex];
            length++;

            aIndex[char] || (aIndex[char] = {});
            aIndex = aIndex[char];

            if (!aIndex.results) {
              (function () {
                var scores = {};

                aIndex.results = [];
                aIndex.pool = {};

                for (var _id in aPool) {
                  var emoji = aPool[_id];
                  var search = emoji.search;
                  var sub = value.substr(0, length);
                  var subIndex = search.indexOf(sub);

                  if (subIndex != -1) {
                    var score = subIndex + 1;
                    if (sub == _id) score = 0;

                    aIndex.results.push(_this4.emojis[_id]);
                    aIndex.pool[_id] = emoji;

                    scores[_id] = score;
                  }
                }

                aIndex.results.sort(function (a, b) {
                  var aScore = scores[a.id],
                      bScore = scores[b.id];

                  return aScore - bScore;
                });
              })();
            }

            aPool = aIndex.pool;
          }

          return aIndex.results;
        }).filter(function (a) {
          return a;
        });

        if (allResults.length > 1) {
          results = ___WEBPACK_IMPORTED_MODULE_2__[/* intersect */ "d"].apply(null, allResults);
        } else if (allResults.length) {
          results = allResults[0];
        } else {
          results = [];
        }
      }

      if (results) {
        if (emojisToShowFilter) {
          results = results.filter(function (result) {
            return emojisToShowFilter(pool[result.id]);
          });
        }

        if (results && results.length > maxResults) {
          results = results.slice(0, maxResults);
        }
      }

      return results;
    }
  }]);

  return NimbleEmojiIndex;
}();

/* harmony default export */ __webpack_exports__["a"] = (NimbleEmojiIndex);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/frequently.js":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/frequently.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/emoji-mart/dist-es/utils/store.js");


var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

var frequently = void 0,
    initialized = void 0;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;


  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;

  _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set('frequently', frequently);
}

function get(perLine) {
  if (!initialized) init();
  if (!frequently) {
    defaults = {};

    var result = [];

    for (var i = 0; i < perLine; i++) {
      defaults[DEFAULTS[i]] = perLine - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = perLine * 4;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);

  var last = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["a"] = ({ add: add, get: get });
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/frequently.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/frequently.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/index.js ***!
  \********************************************************/
/*! exports provided: getData, getSanitizedData, uniq, intersect, deepMerge, unifiedToNative, measureScrollbar */
/*! exports used: deepMerge, getData, getSanitizedData, intersect, measureScrollbar, unifiedToNative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSanitizedData; });
/* unused harmony export uniq */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return measureScrollbar; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js");




var _JSON = JSON;

var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return '0x' + u;
  });

  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].apply(null, codePoints);
}

function sanitize(emoji) {
  var name = emoji.name;
  var short_names = emoji.short_names;
  var skin_tone = emoji.skin_tone;
  var skin_variations = emoji.skin_variations;
  var emoticons = emoji.emoticons;
  var unified = emoji.unified;
  var custom = emoji.custom;
  var imageUrl = emoji.imageUrl;
  var id = emoji.id || short_names[0];
  var colons = ':' + id + ':';

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ':skin-tone-' + skin_tone + ':';
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: unifiedToNative(unified)
  };
}

function getSanitizedData() {
  return sanitize(getData.apply(undefined, arguments));
}

function getData(emoji, skin, set, data) {
  var emojiData = {};

  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2], 10);
      }
    }

    if (data.aliases.hasOwnProperty(emoji)) {
      emoji = data.aliases[emoji];
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (data.aliases.hasOwnProperty(emoji.id)) {
      emoji.id = data.aliases[emoji.id];
    }

    if (data.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  if (!babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(emojiData).length) {
    emojiData = emoji;
    emojiData.custom = true;

    if (!emojiData.search) {
      emojiData.search = Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* buildSearch */ "a"])(emoji);
    }
  }

  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);

  if (emojiData.skin_variations && skin > 1 && set) {
    emojiData = JSON.parse(_JSON.stringify(emojiData));

    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey];

    if (!variationData.variations && emojiData.variations) {
      delete emojiData.variations;
    }

    if (variationData['has_img_' + set] == undefined || variationData['has_img_' + set]) {
      emojiData.skin_tone = skin;

      for (var k in variationData) {
        var v = variationData[k];
        emojiData[k] = v;
      }
    }
  }

  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(_JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }

  return emojiData;
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);

  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (typeof value === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
}

// https://github.com/sonicdoe/measure-scrollbar
function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');

  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return scrollbarWidth;
}


 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/index.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/shared-props.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/shared-props.js ***!
  \***************************************************************/
/*! exports provided: EmojiPropTypes, EmojiDefaultProps, PickerPropTypes, PickerDefaultProps */
/*! exports used: EmojiDefaultProps, EmojiPropTypes, PickerDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmojiPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiDefaultProps; });
/* unused harmony export PickerPropTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PickerDefaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var EmojiPropTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  onOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  backgroundImageFn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  native: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  forceSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([16, 20, 32, 64]),
  sheetColumns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  sheetRows: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  set: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired
};

var EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 52,
  sheetRows: 52,
  native: false,
  forceSize: false,
  tooltip: false,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return 'https://unpkg.com/emoji-datasource-' + set + '@' + '4.0.4' + '/img/' + set + '/sheets-256/' + sheetSize + '.png';
  },
  onOver: function onOver() {},
  onLeave: function onLeave() {},
  onClick: function onClick() {}
};

var PickerPropTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSkinChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  perLine: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  emojiSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  native: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showPreview: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showSkinTones: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  include: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  exclude: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  recent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  custom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    short_names: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
    emoticons: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    keywords: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  })),
  skinEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  notFound: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  notFoundEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

var PickerDefaultProps = {
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onSkinChange: function onSkinChange() {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  custom: [],
  skinEmoji: '',
  notFound: function notFound() {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {}
};


 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/shared-props.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/shared-props.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/store.js":
/*!********************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/store.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var NAMESPACE = 'emoji-mart';

var _JSON = JSON;

var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

var getter = void 0;
var setter = void 0;

function setHandlers(handlers) {
  handlers || (handlers = {});

  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      window.localStorage[NAMESPACE + '.' + key] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      var value = window.localStorage[NAMESPACE + '.' + key];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({ update: update, set: set, get: get, setNamespace: setNamespace, setHandlers: setHandlers });
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/utils/store.js"); } }(); 

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js":
/*!****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

var isWindowAvailable = typeof window !== 'undefined';

isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);

    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js"); } }(); 

/***/ }),

/***/ "./node_modules/linkify-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/linkify-it/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(/*! ./lib/re */ "./node_modules/linkify-it/lib/re.js")(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/linkify-it/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/linkify-it/index.js"); } }(); 

/***/ }),

/***/ "./node_modules/linkify-it/lib/re.js":
/*!*******************************************!*\
  !*** ./node_modules/linkify-it/lib/re.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(/*! uc.micro/properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js").source;
  re.src_Cc  = __webpack_require__(/*! uc.micro/categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js").source;
  re.src_Z   = __webpack_require__(/*! uc.micro/categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js").source;
  re.src_P   = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js").source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +      // allow `,,,` in paths
          '\\!(?!' + re.src_ZCc + '|[!]).|' +
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  re.src_email_name =

    '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/linkify-it/lib/re.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/linkify-it/lib/re.js"); } }(); 

/***/ }),

/***/ "./node_modules/qiniu-js/dist/qiniu.min.js":
/*!*************************************************!*\
  !*** ./node_modules/qiniu-js/dist/qiniu.min.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=58)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(30)("wks"),o=n(22),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(1),i=n(19),a=n(5),s=n(9),u=function(t,e,n){var c,f,l,p=t&u.F,h=t&u.G,d=t&u.S,g=t&u.P,m=t&u.B,v=t&u.W,y=h?o:o[e]||(o[e]={}),b=y.prototype,w=h?r:d?r[e]:(r[e]||{}).prototype;for(c in h&&(n=e),n)(f=!p&&w&&void 0!==w[c])&&s(y,c)||(l=f?w[c]:n[c],y[c]=h&&"function"!=typeof w[c]?n[c]:m&&f?i(l,r):v&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):g&&"function"==typeof l?i(Function.call,l):l,g&&((y.virtual||(y.virtual={}))[c]=l,t&u.R&&b&&!b[c]&&a(b,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(6),o=n(21);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3),o=n(43),i=n(28),a=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(47),o=n(26);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t+864e5;return(new Date).getTime()>e}function i(t){return(0,m.default)(t).filter(function(t){return t.startsWith("x:")}).map(function(e){return[e,t[e].toString()]})}function a(t){return"qiniu_js_sdk_upload_file_"+t.name+"_size_"+t.size}function s(t){try{return JSON.parse(localStorage.getItem(a(t)))||[]}catch(t){return window.console&&window.console.warn&&console.warn("getLocalFileInfo failed"),[]}}function u(t){return{Authorization:"UpToken "+t}}function c(){return window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")}function f(t){return new h.default(function(e,n){var r=new FileReader;r.readAsArrayBuffer(t),r.onload=function(t){var n=t.target.result;e(n)},r.onerror=function(){n(new Error("fileReader 读取错误"))}})}function l(t,e){return new h.default(function(n,r){var o=c();o.open(e.method,t),e.onCreate&&e.onCreate(o),e.headers&&(0,m.default)(e.headers).forEach(function(t){return o.setRequestHeader(t,e.headers[t])}),o.upload.addEventListener("progress",function(t){t.lengthComputable&&e.onProgress&&e.onProgress({loaded:t.loaded,total:t.total})}),o.onreadystatechange=function(){var t=o.responseText;if(4===o.readyState){var e=o.getResponseHeader("x-reqId")||"";if(200!==o.status){var i="xhr request failed, code: "+o.status+";";return t&&(i=i+" response: "+t),void r({code:o.status,message:i,reqId:e,isRequestError:!0})}try{n({data:JSON.parse(t),reqId:e})}catch(t){r(t)}}},o.send(e.body)})}function p(){return"http:"===window.location.protocol?"http:":"https:"}e.__esModule=!0;var h=r(n(18)),d=r(n(34)),g=r(n(86)),m=r(n(36));e.isChunkExpired=o,e.getChunks=function(t,e){for(var n=[],r=Math.ceil(t.size/e),o=0;o<r;o++){var i=t.slice(e*o,o===r-1?t.size:e*(o+1));n.push(i)}return n},e.filterParams=i,e.sum=function(t){return t.reduce(function(t,e){return t+e},0)},e.setLocalFileInfo=function(t,e){try{localStorage.setItem(a(t),(0,g.default)(e))}catch(t){window.console&&window.console.warn&&console.warn("setLocalFileInfo failed")}},e.removeLocalFileInfo=function(t){try{localStorage.removeItem(a(t))}catch(t){window.console&&window.console.warn&&console.warn("removeLocalFileInfo failed")}},e.getLocalFileInfo=s,e.getResumeUploadedSize=function(t){return s(t).filter(function(t){return t&&!o(t.time)}).reduce(function(t,e){return t+e.size},0)},e.createMkFileUrl=function(t,e,n,r){var o=t+"/mkfile/"+e;null!=n&&(o+="/key/"+(0,v.urlSafeBase64Encode)(n)),r.mimeType&&(o+="/mimeType/"+(0,v.urlSafeBase64Encode)(r.mimeType));var a=r.fname;return a&&(o+="/fname/"+(0,v.urlSafeBase64Encode)(a)),r.params&&i(r.params).forEach(function(t){return o+="/"+encodeURIComponent(t[0])+"/"+(0,v.urlSafeBase64Encode)(t[1])}),o},e.getHeadersForChunkUpload=function(t){var e=u(t);return(0,d.default)({"content-type":"application/octet-stream"},e)},e.getHeadersForMkFile=function(t){var e=u(t);return(0,d.default)({"content-type":"text/plain"},e)},e.createXHR=c,e.computeMd5=function(t){return f(t).then(function(t){var e=new b.default.ArrayBuffer;return e.append(t),e.end()})},e.readAsArrayBuffer=f,e.request=l,e.getPortFromUrl=function(t){if(t&&t.match){var e=t.match(/(^https?)/);if(!e)return"";var n=e[1];return(e=t.match(/^https?:\/\/([^:^\/]*):(\d*)/))?e[2]:"http"===n?"80":"443"}return""},e.getDomainFromUrl=function(t){if(t&&t.match){var e=t.match(/^https?:\/\/([^:^\/]*)/);return e?e[1]:""}return""},e.getUploadUrl=function(t,e){var n=p();if(null!=t.uphost)return h.default.resolve(n+"//"+t.uphost);if(null!=t.region){var r=y.regionUphostMap[t.region],o=t.useCdnDomain?r.cdnUphost:r.srcUphost;return h.default.resolve(n+"//"+o)}return function(t){try{var e=function(t){var e=t.split(":"),n=e[0],r=JSON.parse((0,v.urlSafeBase64Decode)(e[2]));return r.ak=n,r.bucket=r.scope.split(":")[0],r}(t);return l(p()+"//api.qiniu.com/v2/query?ak="+e.ak+"&bucket="+e.bucket,{method:"GET"})}catch(t){return h.default.reject(t)}}(e).then(function(t){var e=t.data.up.acc.main;return n+"//"+e[0]})},e.isContainFileMimeType=function(t,e){return e.indexOf(t)>-1},e.createObjectURL=function(t){return(window.URL||window.webkitURL||window.mozURL).createObjectURL(t)},e.getTransform=function(t,e){var n=t.width,r=t.height;switch(e){case 1:return{width:n,height:r,matrix:[1,0,0,1,0,0]};case 2:return{width:n,height:r,matrix:[-1,0,0,1,n,0]};case 3:return{width:n,height:r,matrix:[-1,0,0,-1,n,r]};case 4:return{width:n,height:r,matrix:[1,0,0,-1,0,r]};case 5:return{width:r,height:n,matrix:[0,1,1,0,0,0]};case 6:return{width:r,height:n,matrix:[0,1,-1,0,r,0]};case 7:return{width:r,height:n,matrix:[0,-1,-1,0,r,n]};case 8:return{width:r,height:n,matrix:[0,-1,1,0,0,n]}}};var v=n(56),y=n(39),b=r(n(91))},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(46),o=n(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){t.exports={default:n(59),__esModule:!0}},function(t,e,n){var r=n(20);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(6).f,o=n(9),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(7),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(30)("keys"),o=n(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(13)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(26);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(20);t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){t.exports={default:n(88),__esModule:!0}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(0),o=n(1),i=n(13),a=n(37),s=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){"use strict";e.__esModule=!0,e.regionUphostMap={z0:{srcUphost:"up.qiniup.com",cdnUphost:"upload.qiniup.com"},z1:{srcUphost:"up-z1.qiniup.com",cdnUphost:"upload-z1.qiniup.com"},z2:{srcUphost:"up-z2.qiniup.com",cdnUphost:"upload-z2.qiniup.com"},na0:{srcUphost:"up-na0.qiniup.com",cdnUphost:"upload-na0.qiniup.com"},as0:{srcUphost:"up-as0.qiniup.com",cdnUphost:"upload-as0.qiniup.com"}},e.region={z0:"z0",z1:"z1",z2:"z2",na0:"na0",as0:"as0"}},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(42)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(13),o=n(4),i=n(44),a=n(5),s=n(14),u=n(61),c=n(23),f=n(65),l=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,g,m,v){u(n,e,d);var y,b,w,x=function(t){if(!p&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",_="values"==g,P=!1,C=t.prototype,U=C[l]||C["@@iterator"]||g&&C[g],F=U||x(g),I=g?_?x("entries"):F:void 0,k="Array"==e&&C.entries||U;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(c(w,S,!0),r||"function"==typeof w[l]||a(w,l,h)),_&&U&&"values"!==U.name&&(P=!0,F=function(){return U.call(this)}),r&&!v||!p&&!P&&C[l]||a(C,l,F),s[e]=F,s[S]=h,g)if(y={values:_?F:x("values"),keys:m?F:x("keys"),entries:I},v)for(b in y)b in C||i(C,b,y[b]);else o(o.P+o.F*(p||P),e,y);return y}},function(t,e,n){t.exports=!n(8)&&!n(10)(function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=n(5)},function(t,e,n){var r=n(3),o=n(62),i=n(31),a=n(29)("IE_PROTO"),s=function(){},u=function(){var t,e=n(27)("iframe"),r=i.length;for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(9),o=n(11),i=n(63)(!1),a=n(29)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){n(66);for(var r=n(0),o=n(5),i=n(14),a=n(2)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=r[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},function(t,e,n){var r=n(16),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(3),o=n(20),i=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},function(t,e,n){var r,o,i,a=n(19),s=n(75),u=n(49),c=n(27),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,g=f.Dispatch,m=0,v={},y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},b=function(t){y.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return v[++m]=function(){s("function"==typeof t?t:Function(t),e)},r(m),m},h=function(t){delete v[t]},"process"==n(16)(l)?r=function(t){l.nextTick(a(y,t,1))}:g&&g.now?r=function(t){g.now(a(y,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(7),i=n(33);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";e.__esModule=!0,e.urlSafeBase64Encode=function(t){return(t=function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=void 0,r=void 0,o=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0,f=0,l=0,p="",h=[];if(!t)return t;t=function(t){if(null===t||void 0===t)return"";var e=t+"",n="",r=void 0,o=void 0,i=0;r=o=0,i=e.length;for(var a=0;a<i;a++){var s=e.charCodeAt(a),u=null;if(s<128)o++;else if(s>127&&s<2048)u=String.fromCharCode(s>>6|192,63&s|128);else if(63488&s^!0)u=String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128);else{if(64512&s^!0)throw new RangeError("Unmatched trail surrogate at "+a);var c=e.charCodeAt(++a);if(64512&c^!0)throw new RangeError("Unmatched lead surrogate at "+(a-1));s=((1023&s)<<10)+(1023&c)+65536,u=String.fromCharCode(s>>18|240,s>>12&63|128,s>>6&63|128,63&s|128)}null!==u&&(o>r&&(n+=e.slice(r,o)),n+=u,r=o=a+1)}return o>r&&(n+=e.slice(r,i)),n}(t+"");do{n=t.charCodeAt(f++),r=t.charCodeAt(f++),o=t.charCodeAt(f++),i=(c=n<<16|r<<8|o)>>18&63,a=c>>12&63,s=c>>6&63,u=63&c,h[l++]=e.charAt(i)+e.charAt(a)+e.charAt(s)+e.charAt(u)}while(f<t.length);switch(p=h.join(""),t.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p}(t)).replace(/\//g,"_").replace(/\+/g,"-")},e.urlSafeBase64Decode=function(t){return function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=void 0,r=void 0,o=void 0,i=void 0,a=void 0,s=void 0,u=void 0,c=void 0,f=0,l=0,p=[];if(!t)return t;t+="";do{i=e.indexOf(t.charAt(f++)),a=e.indexOf(t.charAt(f++)),s=e.indexOf(t.charAt(f++)),u=e.indexOf(t.charAt(f++)),n=(c=i<<18|a<<12|s<<6|u)>>16&255,r=c>>8&255,o=255&c,p[l++]=64===s?String.fromCharCode(n):64===u?String.fromCharCode(n,r):String.fromCharCode(n,r,o)}while(f<t.length);return p.join("")}(t=t.replace(/_/g,"/").replace(/-/g,"+"))}},function(t,e,n){var r=n(46),o=n(31).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";e.__esModule=!0,e.pipeline=e.compressImage=e.exif=e.imageInfo=e.watermark=e.imageMogr2=e.getUploadUrl=e.filterParams=e.getHeadersForMkFile=e.getResumeUploadedSize=e.getHeadersForChunkUpload=e.createMkFileUrl=e.region=e.upload=void 0;var r=n(39),o=n(12),i=n(92),a=n(94),s=n(95),u=n(109),c=function(t){return t&&t.__esModule?t:{default:t}}(n(110)),f=new u.StatisticsLogger;e.upload=function(t,e,n,r,o){var a={file:t,key:e,token:n,putExtra:r,config:o};return new s.Observable(function(t){var e=new i.UploadManager(a,{onData:function(e){return t.next(e)},onError:function(e){return t.error(e)},onComplete:function(e){return t.complete(e)}},f);return e.putFile(),e.stop.bind(e)})},e.region=r.region,e.createMkFileUrl=o.createMkFileUrl,e.getHeadersForChunkUpload=o.getHeadersForChunkUpload,e.getResumeUploadedSize=o.getResumeUploadedSize,e.getHeadersForMkFile=o.getHeadersForMkFile,e.filterParams=o.filterParams,e.getUploadUrl=o.getUploadUrl,e.imageMogr2=a.imageMogr2,e.watermark=a.watermark,e.imageInfo=a.imageInfo,e.exif=a.exif,e.compressImage=c.default,e.pipeline=a.pipeline},function(t,e,n){n(40),n(41),n(50),n(69),n(81),n(82),t.exports=n(1).Promise},function(t,e,n){var r=n(25),o=n(26);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(45),o=n(21),i=n(23),a={};n(5)(a,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(6),o=n(3),i=n(15);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(11),o=n(48),i=n(64);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=o(u.length),f=i(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(9),o=n(32),i=n(29)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var r=n(67),o=n(68),i=n(14),a=n(11);t.exports=n(42)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,a,s=n(13),u=n(0),c=n(19),f=n(51),l=n(4),p=n(7),h=n(20),d=n(70),g=n(71),m=n(52),v=n(53).set,y=n(76)(),b=n(33),w=n(54),x=n(77),S=n(55),_=u.TypeError,P=u.process,C=P&&P.versions,U=C&&C.v8||"",F=u.Promise,I="process"==f(P),k=function(){},E=o=b.f,M=!!function(){try{var t=F.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(k,k)};return(I||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e&&0!==U.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),O=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,a,s=o?e.ok:e.fail,u=e.resolve,c=e.reject,f=e.domain;try{s?(o||(2==t._h&&L(t),t._h=1),!0===s?n=r:(f&&f.enter(),n=s(r),f&&(f.exit(),a=!0)),n===e.promise?c(_("Promise-chain cycle")):(i=O(n))?i.call(n,u,c):u(n)):c(r)}catch(t){f&&!a&&f.exit(),c(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){v.call(u,function(){var e,n,r,o=t._v,i=A(t);if(i&&(e=w(function(){I?P.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=I||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){v.call(u,function(){var e;I?P.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _("Promise can't be resolved itself");(e=O(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,c(j,r,1),c(D,r,1))}catch(t){D.call(r,t)}}):(n._v=t,n._s=1,T(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};M||(F=function(t){d(this,F,"Promise","_h"),h(t),r.call(this);try{t(c(j,this,1),c(D,this,1))}catch(t){D.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(78)(F.prototype,{then:function(t,e){var n=E(m(this,F));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=I?P.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&T(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(j,t,1),this.reject=c(D,t,1)},b.f=E=function(t){return t===F||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:F}),n(23)(F,"Promise"),n(79)("Promise"),a=n(1).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!M),"Promise",{resolve:function(t){return S(s&&this===a?F:this,t)}}),l(l.S+l.F*!(M&&n(80)(function(t){F.all(t).catch(k)})),"Promise",{all:function(t){var e=this,n=E(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,a=1;g(t,!1,function(t){var s=i++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=E(e),r=n.reject,o=w(function(){g(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(19),o=n(72),i=n(73),a=n(3),s=n(48),u=n(74),c={},f={};(e=t.exports=function(t,e,n,l,p){var h,d,g,m,v=p?function(){return t}:u(t),y=r(n,l,e?2:1),b=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(i(v)){for(h=s(t.length);h>b;b++)if((m=e?y(a(d=t[b])[0],d[1]):y(t[b]))===c||m===f)return m}else for(g=v.call(t);!(d=g.next()).done;)if((m=o(g,y,d.value,e))===c||m===f)return m}).BREAK=c,e.RETURN=f},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(14),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(51),o=n(2)("iterator"),i=n(14);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(53).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,u="process"==n(16)(a);t.exports=function(){var t,e,n,c=function(){var r,o;for(u&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);n=function(){f.then(c)}}else n=function(){o.call(r,c)};else{var l=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(6),a=n(8),s=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(1),i=n(0),a=n(52),s=n(55);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(33),i=n(54);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(84),t.exports=n(1).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(85)})},function(t,e,n){"use strict";var r=n(15),o=n(35),i=n(24),a=n(32),s=n(47),u=Object.assign;t.exports=!u||n(10)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,f=o.f,l=i.f;u>c;)for(var p,h=s(arguments[c++]),d=f?r(h).concat(f(h)):r(h),g=d.length,m=0;g>m;)l.call(h,p=d[m++])&&(n[p]=h[p]);return n}:u},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(89),t.exports=n(1).Object.keys},function(t,e,n){var r=n(32),o=n(15);n(90)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(4),o=n(1),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){!function(e){t.exports=function(t){"use strict";function e(t,e){var n=t[0],r=t[1],o=t[2],i=t[3];r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&o)+e[1]-389564586|0)<<12|i>>>20)+n|0)&n|~i&r)+e[2]+606105819|0)<<17|o>>>15)+i|0)&i|~o&n)+e[3]-1044525330|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&o)+e[5]+1200080426|0)<<12|i>>>20)+n|0)&n|~i&r)+e[6]-1473231341|0)<<17|o>>>15)+i|0)&i|~o&n)+e[7]-45705983|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&o)+e[9]-1958414417|0)<<12|i>>>20)+n|0)&n|~i&r)+e[10]-42063|0)<<17|o>>>15)+i|0)&i|~o&n)+e[11]-1990404162|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+e[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&o)+e[13]-40341101|0)<<12|i>>>20)+n|0)&n|~i&r)+e[14]-1502002290|0)<<17|o>>>15)+i|0)&i|~o&n)+e[15]+1236535329|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[1]-165796510|0)<<5|n>>>27)+r|0)&o|r&~o)+e[6]-1069501632|0)<<9|i>>>23)+n|0)&r|n&~r)+e[11]+643717713|0)<<14|o>>>18)+i|0)&n|i&~n)+e[0]-373897302|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[5]-701558691|0)<<5|n>>>27)+r|0)&o|r&~o)+e[10]+38016083|0)<<9|i>>>23)+n|0)&r|n&~r)+e[15]-660478335|0)<<14|o>>>18)+i|0)&n|i&~n)+e[4]-405537848|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[9]+568446438|0)<<5|n>>>27)+r|0)&o|r&~o)+e[14]-1019803690|0)<<9|i>>>23)+n|0)&r|n&~r)+e[3]-187363961|0)<<14|o>>>18)+i|0)&n|i&~n)+e[8]+1163531501|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+e[13]-1444681467|0)<<5|n>>>27)+r|0)&o|r&~o)+e[2]-51403784|0)<<9|i>>>23)+n|0)&r|n&~r)+e[7]+1735328473|0)<<14|o>>>18)+i|0)&n|i&~n)+e[12]-1926607734|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[5]-378558|0)<<4|n>>>28)+r|0)^r^o)+e[8]-2022574463|0)<<11|i>>>21)+n|0)^n^r)+e[11]+1839030562|0)<<16|o>>>16)+i|0)^i^n)+e[14]-35309556|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[1]-1530992060|0)<<4|n>>>28)+r|0)^r^o)+e[4]+1272893353|0)<<11|i>>>21)+n|0)^n^r)+e[7]-155497632|0)<<16|o>>>16)+i|0)^i^n)+e[10]-1094730640|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[13]+681279174|0)<<4|n>>>28)+r|0)^r^o)+e[0]-358537222|0)<<11|i>>>21)+n|0)^n^r)+e[3]-722521979|0)<<16|o>>>16)+i|0)^i^n)+e[6]+76029189|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+e[9]-640364487|0)<<4|n>>>28)+r|0)^r^o)+e[12]-421815835|0)<<11|i>>>21)+n|0)^n^r)+e[15]+530742520|0)<<16|o>>>16)+i|0)^i^n)+e[2]-995338651|0)<<23|r>>>9)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[0]-198630844|0)<<6|n>>>26)+r|0)|~o))+e[7]+1126891415|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[14]-1416354905|0)<<15|o>>>17)+i|0)|~n))+e[5]-57434055|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[12]+1700485571|0)<<6|n>>>26)+r|0)|~o))+e[3]-1894986606|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[10]-1051523|0)<<15|o>>>17)+i|0)|~n))+e[1]-2054922799|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[8]+1873313359|0)<<6|n>>>26)+r|0)|~o))+e[15]-30611744|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[6]-1560198380|0)<<15|o>>>17)+i|0)|~n))+e[13]+1309151649|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+e[4]-145523070|0)<<6|n>>>26)+r|0)|~o))+e[11]-1120210379|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+e[2]+718787259|0)<<15|o>>>17)+i|0)|~n))+e[9]-343485551|0)<<21|r>>>11)+o|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=o+t[2]|0,t[3]=i+t[3]|0}function n(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function r(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function o(t){var r,o,i,a,s,u,c=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=c;r+=64)e(f,n(t.substring(r-64,r)));for(o=(t=t.substring(r-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<o;r+=1)i[r>>2]|=t.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(e(f,i),r=0;r<16;r+=1)i[r]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,e(f,i),f}function i(t){var e,n="";for(e=0;e<4;e+=1)n+=f[t>>8*e+4&15]+f[t>>8*e&15];return n}function a(t){var e;for(e=0;e<t.length;e+=1)t[e]=i(t[e]);return t.join("")}function s(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function u(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function c(){this.reset()}var f=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return a(o("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,u=this.byteLength,c=e(n,u),f=u;return r!==t&&(f=e(r,u)),c>f?new ArrayBuffer(0):(o=f-c,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,c,o),a.set(s),i)}}(),c.prototype.append=function(t){return this.appendBinary(s(t)),this},c.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var r,o=this._buff.length;for(r=64;r<=o;r+=64)e(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},c.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(i,o),n=a(this._hash),t&&(n=u(n)),this.reset(),n},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},c.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(t,n){var r,o,i,a=n;if(t[a>>2]|=128<<(a%4<<3),a>55)for(e(this._hash,t),a=0;a<16;a+=1)t[a]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,t[14]=o,t[15]=i,e(this._hash,t)},c.hash=function(t,e){return c.hashBinary(s(t),e)},c.hashBinary=function(t,e){var n=a(o(t));return e?u(n):n},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(t){var n,o=function(t,e,n){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t)),r.set(new Uint8Array(e),t.byteLength),r}(this._buff.buffer,t),i=o.length;for(this._length+=t.byteLength,n=64;n<=i;n+=64)e(this._hash,r(o.subarray(n-64,n)));return this._buff=n-64<i?new Uint8Array(o.buffer.slice(n-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r[e]<<(e%4<<3);return this._finish(i,o),n=a(this._hash),t&&(n=u(n)),this.reset(),n},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var t=c.prototype.getState.call(this);return t.buff=function(t){return String.fromCharCode.apply(null,new Uint8Array(t))}(t.buff),t},c.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var n,r=t.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=t.charCodeAt(n);return i}(t.buff),c.prototype.setState.call(this,t)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(t,n){var o=a(function(t){var n,o,i,a,s,u,c=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)e(f,r(t.subarray(n-64,n)));for(o=(t=n-64<c?t.subarray(n-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<o;n+=1)i[n>>2]|=t[n]<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(e(f,i),n=0;n<16;n+=1)i[n]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,e(f,i),f}(new Uint8Array(t)));return n?u(o):o},c}()}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.UploadManager=void 0;var o=r(n(18)),i=r(n(34)),a=r(n(17)),s=n(12),u=n(93);e.UploadManager=function(){function t(e,n,r){var o=this;(0,a.default)(this,t),this.config=(0,i.default)({useCdnDomain:!0,disableStatisticsReport:!1,retryCount:3,checkByMD5:!1,uphost:null,forceDirect:!1,concurrentRequestLimit:3,region:null},e.config),this.putExtra=(0,i.default)({fname:"",params:{},mimeType:null},e.putExtra),this.statisticsLogger=r,this.progress=null,this.xhrList=[],this.xhrHandler=function(t){return o.xhrList.push(t)},this.aborted=!1,this.file=e.file,this.key=e.key,this.token=e.token,this.onData=function(){},this.onError=function(){},this.onComplete=function(){},this.retryCount=0,(0,i.default)(this,n)}return t.prototype.putFile=function(){var t=this;if(this.aborted=!1,this.putExtra.fname||(this.putExtra.fname=this.file.name),!this.putExtra.mimeType||!this.putExtra.mimeType.length||(0,s.isContainFileMimeType)(this.file.type,this.putExtra.mimeType)){var e=(0,s.getUploadUrl)(this.config,this.token).then(function(e){return t.uploadUrl=e,t.uploadAt=(new Date).getTime(),t.config.forceDirect?t.directUpload():t.file.size>4194304?t.resumeUpload():t.directUpload()});return e.then(function(e){t.onComplete(e.data),t.config.disableStatisticsReport||t.sendLog(e.reqId,200)},function(e){if(t.clear(),e.isRequestError&&!t.config.disableStatisticsReport){var n=t.aborted?"":e.reqId,r=t.aborted?-2:e.code;t.sendLog(n,r)}var o=e.isRequestError&&0===e.code&&!t.aborted,i=++t.retryCount<=t.config.retryCount;o&&i?t.putFile():t.onError(e)}),e}var n=new Error("file type doesn't match with what you specify");this.onError(n)},t.prototype.clear=function(){this.xhrList.forEach(function(t){return t.abort()}),this.xhrList=[]},t.prototype.stop=function(){this.clear(),this.aborted=!0},t.prototype.sendLog=function(t,e){this.statisticsLogger.log({code:e,reqId:t,host:(0,s.getDomainFromUrl)(this.uploadUrl),remoteIp:"",port:(0,s.getPortFromUrl)(this.uploadUrl),duration:((new Date).getTime()-this.uploadAt)/1e3,time:Math.floor(this.uploadAt/1e3),bytesSent:this.progress?this.progress.total.loaded:0,upType:"jssdk-h5",size:this.file.size},this.token)},t.prototype.directUpload=function(){var t=this,e=new FormData;return e.append("file",this.file),e.append("token",this.token),null!=this.key&&e.append("key",this.key),e.append("fname",this.putExtra.fname),(0,s.filterParams)(this.putExtra.params).forEach(function(t){return e.append(t[0],t[1])}),(0,s.request)(this.uploadUrl,{method:"POST",body:e,onProgress:function(e){t.updateDirectProgress(e.loaded,e.total)},onCreate:this.xhrHandler}).then(function(e){return t.finishDirectProgress(),e})},t.prototype.resumeUpload=function(){var t=this;this.loaded={mkFileProgress:0,chunks:null},this.ctxList=[],this.localInfo=(0,s.getLocalFileInfo)(this.file),this.chunks=(0,s.getChunks)(this.file,4194304),this.initChunksProgress();var e=new u.Pool(function(e){return t.uploadChunk(e)},this.config.concurrentRequestLimit),n=this.chunks.map(function(t,n){return e.enqueue({chunk:t,index:n})}),r=o.default.all(n).then(function(){return t.mkFileReq()});return r.then(function(e){(0,s.removeLocalFileInfo)(t.file)},function(e){701!==e.code?(0,s.setLocalFileInfo)(t.file,t.ctxList):(0,s.removeLocalFileInfo)(t.file)}),r},t.prototype.uploadChunk=function(t){var e=this,n=t.index,r=t.chunk,i=this.localInfo[n],a=this.uploadUrl+"/mkblk/"+r.size,u=i&&!(0,s.isChunkExpired)(i.time),c=this.config.checkByMD5,f=function(){return e.updateChunkProgress(r.size,n),e.ctxList[n]={ctx:i.ctx,size:i.size,time:i.time,md5:i.md5},o.default.resolve(null)};return u&&!c?f():(0,s.computeMd5)(r).then(function(t){if(u&&t===i.md5)return f();var o=(0,s.getHeadersForChunkUpload)(e.token),c=e.xhrHandler;return(0,s.request)(a,{method:"POST",headers:o,body:r,onProgress:function(t){e.updateChunkProgress(t.loaded,n)},onCreate:c}).then(function(o){e.ctxList[n]={time:(new Date).getTime(),ctx:o.data.ctx,size:r.size,md5:t}})})},t.prototype.mkFileReq=function(){var t=this,e=(0,i.default)({mimeType:"application/octet-stream"},this.putExtra),n=(0,s.createMkFileUrl)(this.uploadUrl,this.file.size,this.key,e),r=this.ctxList.map(function(t){return t.ctx}).join(","),a=(0,s.getHeadersForMkFile)(this.token),u=this.xhrHandler;return(0,s.request)(n,{method:"POST",body:r,headers:a,onCreate:u}).then(function(e){return t.updateMkFileProgress(1),o.default.resolve(e)})},t.prototype.updateDirectProgress=function(t,e){this.progress={total:this.getProgressInfoItem(t,e+1)},this.onData(this.progress)},t.prototype.finishDirectProgress=function(){var t=this.progress.total;this.progress.total=this.getProgressInfoItem(t.loaded+1,t.size),this.onData(this.progress)},t.prototype.initChunksProgress=function(){this.loaded.chunks=this.chunks.map(function(t){return 0}),this.notifyResumeProgress()},t.prototype.updateChunkProgress=function(t,e){this.loaded.chunks[e]=t,this.notifyResumeProgress()},t.prototype.updateMkFileProgress=function(t){this.loaded.mkFileProgress=t,this.notifyResumeProgress()},t.prototype.notifyResumeProgress=function(){var t=this;this.progress={total:this.getProgressInfoItem((0,s.sum)(this.loaded.chunks)+this.loaded.mkFileProgress,this.file.size+1),chunks:this.chunks.map(function(e,n){return t.getProgressInfoItem(t.loaded.chunks[n],e.size)})},this.onData(this.progress)},t.prototype.getProgressInfoItem=function(t,e){return{loaded:t,size:e,percent:t/e*100}},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Pool=void 0;var o=r(n(18)),i=r(n(17));e.Pool=function(){function t(e,n){(0,i.default)(this,t),this.runTask=e,this.queue=[],this.processing=[],this.limit=n}return t.prototype.enqueue=function(t){var e=this;return new o.default(function(n,r){e.queue.push({task:t,resolve:n,reject:r}),e.check()})},t.prototype.run=function(t){var e=this;this.queue=this.queue.filter(function(e){return e!==t}),this.processing.push(t),this.runTask(t.task).then(function(){e.processing=e.processing.filter(function(e){return e!==t}),t.resolve(),e.check()},function(e){return t.reject(e)})},t.prototype.check=function(){var t=this,e=this.processing.length,n=this.limit-e;this.queue.slice(0,n).forEach(function(e,n){t.run(e)})},t}()},function(t,e,n){"use strict";function r(t,e){return t=encodeURIComponent(t),"/"!==e.slice(e.length-1)&&(e+="/"),e+t}function o(t,e,n){if(!/^\d$/.test(t.mode))throw"mode should be number in imageView2";var o=t.mode,i=t.w,a=t.h,s=t.q,u=t.format;if(!i&&!a)throw"param w and h is empty in imageView2";var c="imageView2/"+encodeURIComponent(o);return c+=i?"/w/"+encodeURIComponent(i):"",c+=a?"/h/"+encodeURIComponent(a):"",c+=s?"/q/"+encodeURIComponent(s):"",c+=u?"/format/"+encodeURIComponent(u):"",e&&(c=r(e,n)+"?"+c),c}function i(t,e,n){var o=t["auto-orient"],i=t.thumbnail,a=t.strip,s=t.gravity,u=t.crop,c=t.quality,f=t.rotate,l=t.format,p=t.blur,h="imageMogr2";return h+=o?"/auto-orient":"",h+=i?"/thumbnail/"+encodeURIComponent(i):"",h+=a?"/strip":"",h+=s?"/gravity/"+encodeURIComponent(s):"",h+=c?"/quality/"+encodeURIComponent(c):"",h+=u?"/crop/"+encodeURIComponent(u):"",h+=f?"/rotate/"+encodeURIComponent(f):"",h+=l?"/format/"+encodeURIComponent(l):"",h+=p?"/blur/"+encodeURIComponent(p):"",e&&(h=r(e,n)+"?"+h),h}function a(t,e,n){var o=t.mode;if(!o)throw"mode can't be empty in watermark";var i="watermark/"+o;if(1!==o&&2!==o)throw"mode is wrong";if(1===o){var a=t.image;if(!a)throw"image can't be empty in watermark";i+=a?"/image/"+(0,u.urlSafeBase64Encode)(a):""}if(2===o){var s=t.text,c=t.font,f=t.fontsize,l=t.fill;if(!s)throw"text can't be empty in watermark";i+=s?"/text/"+(0,u.urlSafeBase64Encode)(s):"",i+=c?"/font/"+(0,u.urlSafeBase64Encode)(c):"",i+=f?"/fontsize/"+f:"",i+=l?"/fill/"+(0,u.urlSafeBase64Encode)(l):""}var p=t.dissolve,h=t.gravity,d=t.dx,g=t.dy;return i+=p?"/dissolve/"+encodeURIComponent(p):"",i+=h?"/gravity/"+encodeURIComponent(h):"",i+=d?"/dx/"+encodeURIComponent(d):"",i+=g?"/dy/"+encodeURIComponent(g):"",e&&(i=r(e,n)+"?"+i),i}e.__esModule=!0,e.imageView2=o,e.imageMogr2=i,e.watermark=a,e.imageInfo=function(t,e){var n=r(t,e)+"?imageInfo";return(0,s.request)(n,{method:"GET"})},e.exif=function(t,e){var n=r(t,e)+"?exif";return(0,s.request)(n,{method:"GET"})},e.pipeline=function(t,e,n){var s=void 0,u=void 0,c="";if("[object Array]"===Object.prototype.toString.call(t)){for(var f=0,l=t.length;f<l;f++){if(!(s=t[f]).fop)throw"fop can't be empty in pipeline";switch(s.fop){case"watermark":c+=a(s)+"|";break;case"imageView2":c+=o(s)+"|";break;case"imageMogr2":c+=i(s)+"|";break;default:u=!0}if(u)throw"fop is wrong in pipeline"}if(e){var p=(c=r(e,n)+"?"+c).length;"|"===c.slice(p-1)&&(c=c.slice(0,p-1))}return c}throw"pipeline's first param should be array"};var s=n(12),u=n(56)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Observable=void 0;var o=r(n(96)),i=r(n(17));e.Observable=function(){function t(e){(0,i.default)(this,t),this.subscribeAction=e}return t.prototype.subscribe=function(t,e,n){var r=new a(t,e,n),o=this.subscribeAction(r);return new s(r,o)},t}();var a=function(){function t(e,n,r){(0,i.default)(this,t),this.isStopped=!1,"object"===(void 0===e?"undefined":(0,o.default)(e))?(this._onNext=e.next,this._onError=e.error,this._onCompleted=e.complete):(this._onNext=e,this._onError=n,this._onCompleted=r)}return t.prototype.next=function(t){!this.isStopped&&this._onNext&&this._onNext(t)},t.prototype.error=function(t){!this.isStopped&&this._onError&&(this.isStopped=!0,this._onError(t))},t.prototype.complete=function(t){!this.isStopped&&this._onCompleted&&(this.isStopped=!0,this._onCompleted(t))},t}(),s=function(){function t(e,n){(0,i.default)(this,t),this.observer=e,this.result=n}return t.prototype.unsubscribe=function(){this.observer.isStopped=!0,this.result()},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n(97)),i=r(n(99)),a="function"==typeof i.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};e.default="function"==typeof i.default&&"symbol"===a(o.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e,n){n(41),n(50),t.exports=n(37).f("iterator")},function(t,e,n){t.exports={default:n(100),__esModule:!0}},function(t,e,n){n(101),n(40),n(107),n(108),t.exports=n(1).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(9),i=n(8),a=n(4),s=n(44),u=n(102).KEY,c=n(10),f=n(30),l=n(23),p=n(22),h=n(2),d=n(37),g=n(38),m=n(103),v=n(104),y=n(3),b=n(7),w=n(11),x=n(28),S=n(21),_=n(45),P=n(105),C=n(106),U=n(6),F=n(15),I=C.f,k=U.f,E=P.f,M=r.Symbol,O=r.JSON,T=O&&O.stringify,R=h("_hidden"),A=h("toPrimitive"),L={}.propertyIsEnumerable,D=f("symbol-registry"),j=f("symbols"),B=f("op-symbols"),G=Object.prototype,q="function"==typeof M,N=r.QObject,z=!N||!N.prototype||!N.prototype.findChild,H=i&&c(function(){return 7!=_(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=I(G,e);r&&delete G[e],k(t,e,n),r&&t!==G&&k(G,e,r)}:k,V=function(t){var e=j[t]=_(M.prototype);return e._k=t,e},W=q&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},J=function(t,e,n){return t===G&&J(B,e,n),y(t),e=x(e,!0),y(n),o(j,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,R)||k(t,R,S(1,{})),t[R][e]=!0),H(t,e,n)):k(t,e,n)},X=function(t,e){y(t);for(var n,r=m(e=w(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},Y=function(t){var e=L.call(this,t=x(t,!0));return!(this===G&&o(j,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(j,t)||o(this,R)&&this[R][t])||e)},K=function(t,e){if(t=w(t),e=x(e,!0),t!==G||!o(j,e)||o(B,e)){var n=I(t,e);return!n||!o(j,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=E(w(t)),r=[],i=0;n.length>i;)o(j,e=n[i++])||e==R||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===G,r=E(n?B:w(t)),i=[],a=0;r.length>a;)!o(j,e=r[a++])||n&&!o(G,e)||i.push(j[e]);return i};q||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),H(this,t,S(1,n))};return i&&z&&H(G,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",function(){return this._k}),C.f=K,U.f=J,n(57).f=P.f=$,n(24).f=Y,n(35).f=Q,i&&!n(13)&&s(G,"propertyIsEnumerable",Y,!0),d.f=function(t){return V(h(t))}),a(a.G+a.W+a.F*!q,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=F(h.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!q,"Object",{create:function(t,e){return void 0===e?_(t):X(_(t),e)},defineProperty:J,defineProperties:X,getOwnPropertyDescriptor:K,getOwnPropertyNames:$,getOwnPropertySymbols:Q}),O&&a(a.S+a.F*(!q||c(function(){var t=M();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!W(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,T.apply(O,r)}}),M.prototype[A]||n(5)(M.prototype,A,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(22)("meta"),o=n(7),i=n(9),a=n(6).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(10)(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&u(t)&&!i(t,r)&&f(t),t}}},function(t,e,n){var r=n(15),o=n(35),i=n(24);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),u=i.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11),o=n(57).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(24),o=n(21),i=n(11),a=n(28),s=n(9),u=n(43),c=Object.getOwnPropertyDescriptor;e.f=n(8)?c:function(t,e){if(t=i(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){n(38)("asyncIterator")},function(t,e,n){n(38)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.StatisticsLogger=void 0;var o=r(n(36)),i=r(n(17)),a=n(12);e.StatisticsLogger=function(){function t(){(0,i.default)(this,t)}return t.prototype.log=function(t,e){var n="";(0,o.default)(t).forEach(function(e){return n+=t[e]+","}),this.send(n,e)},t.prototype.send=function(t,e){var n=(0,a.createXHR)(),r=0;n.open("POST","https://uplog.qbox.me/log/3"),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("Authorization","UpToken "+e),n.onreadystatechange=function(){4===n.readyState&&200!==n.status&&++r<=3&&n.send(t)},n.send(t)},t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n(18)),i=r(n(34)),a=r(n(17)),s=r(n(36)),u=n(111),c=n(12),f={PNG:"image/png",JPEG:"image/jpeg",WEBP:"image/webp",BMP:"image/bmp"},l=Math.log(2),p=(0,s.default)(f).map(function(t){return f[t]}),h=f.JPEG,d=function(){function t(e,n){(0,a.default)(this,t),this.config=(0,i.default)({quality:.92,noCompressIfLarger:!1},n),this.file=e}return t.prototype.process=function(){var t=this;this.outputType=this.file.type;var e={};return function(t){return p.includes(t)}(this.file.type)?this.getOriginImage().then(function(e){return t.getCanvas(e)}).then(function(n){var r=1;return t.config.maxWidth&&(r=Math.min(1,t.config.maxWidth/n.width)),t.config.maxHeight&&(r=Math.min(1,r,t.config.maxHeight/n.height)),e.width=n.width,e.height=n.height,t.doScale(n,r)}).then(function(n){var r=t.toBlob(n);return r.size>t.file.size&&t.config.noCompressIfLarger?{dist:t.file,width:e.width,height:e.height}:{dist:r,width:n.width,height:n.height}}):o.default.reject(new Error("unsupported file type: "+this.file.type))},t.prototype.clear=function(t,e,n){this.outputType===h?(t.fillStyle="#fff",t.fillRect(0,0,e,n)):t.clearRect(0,0,e,n)},t.prototype.getOriginImage=function(){var t=this;return new o.default(function(e,n){var r=(0,c.createObjectURL)(t.file),o=new Image;o.onload=function(){e(o)},o.onerror=function(){n("image load error")},o.src=r})},t.prototype.getCanvas=function(t){var e=this;return new o.default(function(n,r){u.EXIF.getData(t,function(){var r=u.EXIF.getTag(t,"Orientation")||1,o=(0,c.getTransform)(t,r),i=o.width,a=o.height,s=o.matrix,f=document.createElement("canvas"),l=f.getContext("2d");f.width=i,f.height=a,e.clear(l,i,a),l.transform.apply(l,s),l.drawImage(t,0,0),n(f)})})},t.prototype.doScale=function(t,e){if(1===e)return o.default.resolve(t);var n=t.getContext("2d"),r=Math.min(4,Math.ceil(1/e/l)),i=Math.pow(e,1/r),a=document.createElement("canvas"),s=a.getContext("2d"),u=t.width,c=t.height,f=u,p=c;a.width=u,a.height=c;for(var h=void 0,d=void 0,g=0;g<r;g++){var m=u*i|0,v=c*i|0;g===r-1&&(m=f*e,v=p*e),g%2==0?(h=t,d=s):(h=a,d=n),this.clear(d,u,c),d.drawImage(h,0,0,u,c,0,0,m,v),u=m,c=v}var y=h===t?a:t,b=d.getImageData(0,0,u,c);return y.width=u,y.height=c,d.putImageData(b,0,0),o.default.resolve(y)},t.prototype.toBlob=function(t){var e=t.toDataURL(this.outputType,this.config.quality),n=atob(e.split(",")[1]).split("").map(function(t){return t.charCodeAt(0)});return new Blob([new Uint8Array(n)],{type:this.outputType})},t}();e.default=function(t,e){return new d(t,e).process()}},function(t,e,r){var o;(function(){function r(t){return!!t.exifdata}function i(t,e){function n(n){var r=a(n);t.exifdata=r||{};var o=function(t){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n=2,r=t.byteLength;n<r;){if(function(t,e){return 56===t.getUint8(e)&&66===t.getUint8(e+1)&&73===t.getUint8(e+2)&&77===t.getUint8(e+3)&&4===t.getUint8(e+4)&&4===t.getUint8(e+5)}(e,n)){var o=e.getUint8(n+7);o%2!=0&&(o+=1),0===o&&(o=4);return s(t,n+8+o,e.getUint16(n+6+o))}n++}}(n);if(t.iptcdata=o||{},g.isXmpEnabled){var i=function(t){if("DOMParser"in self){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n=2,r=t.byteLength,o=new DOMParser;n<r-4;){if("http"==f(e,n,4)){var i=n-1,a=e.getUint16(n-2)-1,s=f(e,i,a),u=s.indexOf("xmpmeta>")+8,c=(s=s.substring(s.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;s=s.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+s.slice(c);return h(o.parseFromString(s,"text/xml"))}n++}}}(n);t.xmpdata=i||{}}e&&e.call(t)}if(t.src)if(/^data\:/i.test(t.src))n(function(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/im)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(t),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(t.src));else if(/^blob\:/i.test(t.src))(o=new FileReader).onload=function(t){n(t.target.result)},function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},n.send()}(t.src,function(t){o.readAsArrayBuffer(t)});else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(r.response),r=null},r.open("GET",t.src,!0),r.responseType="arraybuffer",r.send(null)}else if(self.FileReader&&(t instanceof self.Blob||t instanceof self.File)){var o;(o=new FileReader).onload=function(t){d&&console.log("Got file of length "+t.target.result.byteLength),n(t.target.result)},o.readAsArrayBuffer(t)}}function a(t){var e=new DataView(t);if(d&&console.log("Got file of length "+t.byteLength),255!=e.getUint8(0)||216!=e.getUint8(1))return d&&console.log("Not a valid JPEG"),!1;for(var n,r=2,o=t.byteLength;r<o;){if(255!=e.getUint8(r))return d&&console.log("Not a valid marker at offset "+r+", found: "+e.getUint8(r)),!1;if(n=e.getUint8(r+1),d&&console.log(n),225==n)return d&&console.log("Found 0xFFE1 marker"),l(e,r+4,e.getUint16(r+2));r+=2+e.getUint16(r+2)}}function s(t,e,n){for(var r,o,i,a,s=new DataView(t),u={},c=e;c<e+n;)28===s.getUint8(c)&&2===s.getUint8(c+1)&&(a=s.getUint8(c+2))in x&&(i=s.getInt16(c+3),o=x[a],r=f(s,c+5,i),u.hasOwnProperty(o)?u[o]instanceof Array?u[o].push(r):u[o]=[u[o],r]:u[o]=r),c++;return u}function u(t,e,n,r,o){var i,a,s,u=t.getUint16(n,!o),f={};for(s=0;s<u;s++)i=n+12*s+2,!(a=r[t.getUint16(i,!o)])&&d&&console.log("Unknown tag: "+t.getUint16(i,!o)),f[a]=c(t,i,e,n,o);return f}function c(t,e,n,r,o){var i,a,s,u,c,l,p=t.getUint16(e+2,!o),h=t.getUint32(e+4,!o),d=t.getUint32(e+8,!o)+n;switch(p){case 1:case 7:if(1==h)return t.getUint8(e+8,!o);for(i=h>4?d:e+8,a=[],u=0;u<h;u++)a[u]=t.getUint8(i+u);return a;case 2:return f(t,i=h>4?d:e+8,h-1);case 3:if(1==h)return t.getUint16(e+8,!o);for(i=h>2?d:e+8,a=[],u=0;u<h;u++)a[u]=t.getUint16(i+2*u,!o);return a;case 4:if(1==h)return t.getUint32(e+8,!o);for(a=[],u=0;u<h;u++)a[u]=t.getUint32(d+4*u,!o);return a;case 5:if(1==h)return c=t.getUint32(d,!o),l=t.getUint32(d+4,!o),(s=new Number(c/l)).numerator=c,s.denominator=l,s;for(a=[],u=0;u<h;u++)c=t.getUint32(d+8*u,!o),l=t.getUint32(d+4+8*u,!o),a[u]=new Number(c/l),a[u].numerator=c,a[u].denominator=l;return a;case 9:if(1==h)return t.getInt32(e+8,!o);for(a=[],u=0;u<h;u++)a[u]=t.getInt32(d+4*u,!o);return a;case 10:if(1==h)return t.getInt32(d,!o)/t.getInt32(d+4,!o);for(a=[],u=0;u<h;u++)a[u]=t.getInt32(d+8*u,!o)/t.getInt32(d+4+8*u,!o);return a}}function f(t,e,r){var o="";for(n=e;n<e+r;n++)o+=String.fromCharCode(t.getUint8(n));return o}function l(t,e){if("Exif"!=f(t,e,4))return d&&console.log("Not valid EXIF data! "+f(t,e,4)),!1;var n,r,o,i,a,s=e+6;if(18761==t.getUint16(s))n=!1;else{if(19789!=t.getUint16(s))return d&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=t.getUint16(s+2,!n))return d&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var c=t.getUint32(s+4,!n);if(c<8)return d&&console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(s+4,!n)),!1;if((r=u(t,s,s+c,v,n)).ExifIFDPointer)for(o in i=u(t,s,s+r.ExifIFDPointer,m,n)){switch(o){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":i[o]=w[o][i[o]];break;case"ExifVersion":case"FlashpixVersion":i[o]=String.fromCharCode(i[o][0],i[o][1],i[o][2],i[o][3]);break;case"ComponentsConfiguration":i[o]=w.Components[i[o][0]]+w.Components[i[o][1]]+w.Components[i[o][2]]+w.Components[i[o][3]]}r[o]=i[o]}if(r.GPSInfoIFDPointer)for(o in a=u(t,s,s+r.GPSInfoIFDPointer,y,n)){switch(o){case"GPSVersionID":a[o]=a[o][0]+"."+a[o][1]+"."+a[o][2]+"."+a[o][3]}r[o]=a[o]}return r.thumbnail=function(t,e,n,r){var o=function(t,e,n){var r=t.getUint16(e,!n);return t.getUint32(e+2+12*r,!n)}(t,e+n,r);if(!o)return{};if(o>t.byteLength)return{};var i=u(t,e,e+o,b,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=e+i.JpegIFOffset,s=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(t.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(t,s,c,n),r}function p(t){var e={};if(1==t.nodeType){if(t.attributes.length>0){e["@attributes"]={};for(var n=0;n<t.attributes.length;n++){var r=t.attributes.item(n);e["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==t.nodeType)return t.nodeValue;if(t.hasChildNodes())for(var o=0;o<t.childNodes.length;o++){var i=t.childNodes.item(o),a=i.nodeName;if(null==e[a])e[a]=p(i);else{if(null==e[a].push){var s=e[a];e[a]=[],e[a].push(s)}e[a].push(p(i))}}return e}function h(t){try{var e={};if(t.children.length>0)for(var n=0;n<t.children.length;n++){var r=t.children.item(n),o=r.attributes;for(var i in o){var a=o[i],s=a.nodeName,u=a.nodeValue;void 0!==s&&(e[s]=u)}var c=r.nodeName;if(void 0===e[c])e[c]=p(r);else{if(void 0===e[c].push){var f=e[c];e[c]=[],e[c].push(f)}e[c].push(p(r))}}else e=t.textContent;return e}catch(t){console.log(t.message)}}var d=!1,g=function(t){return t instanceof g?t:this instanceof g?void(this.EXIFwrapped=t):new g(t)};void 0!==t&&t.exports&&(e=t.exports=g),e.EXIF=g;var m=g.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=g.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=g.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=g.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},w=g.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},x={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};g.enableXmp=function(){g.isXmpEnabled=!0},g.disableXmp=function(){g.isXmpEnabled=!1},g.getData=function(t,e){return!((self.Image&&t instanceof self.Image||self.HTMLImageElement&&t instanceof self.HTMLImageElement)&&!t.complete||(r(t)?e&&e.call(t):i(t,e),0))},g.getTag=function(t,e){if(r(t))return t.exifdata[e]},g.getIptcTag=function(t,e){if(r(t))return t.iptcdata[e]},g.getAllTags=function(t){if(!r(t))return{};var e,n=t.exifdata,o={};for(e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o},g.getAllIptcTags=function(t){if(!r(t))return{};var e,n=t.iptcdata,o={};for(e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o},g.pretty=function(t){if(!r(t))return"";var e,n=t.exifdata,o="";for(e in n)n.hasOwnProperty(e)&&("object"==typeof n[e]?n[e]instanceof Number?o+=e+" : "+n[e]+" ["+n[e].numerator+"/"+n[e].denominator+"]\r\n":o+=e+" : ["+n[e].length+" values]\r\n":o+=e+" : "+n[e]+"\r\n");return o},g.readFromBinaryFile=function(t){return a(t)},void 0===(o=function(){return g}.apply(e,[]))||(t.exports=o)}).call(this)}])});
//# sourceMappingURL=qiniu.min.js.map
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/qiniu-js/dist/qiniu.min.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/qiniu-js/dist/qiniu.min.js"); } }(); 

/***/ }),

/***/ "./node_modules/text-emoji-parser/dist/lib.compiled.js":
/*!*************************************************************!*\
  !*** ./node_modules/text-emoji-parser/dist/lib.compiled.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t=window.webpackHotUpdatelibrary;window.webpackHotUpdatelibrary=function(e,r){!function(e,t){if(!w[e]||!g[e])return;for(var r in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0==--v&&0===m&&P()}(e,r),t&&t(e,r)};var r,n=!0,o="5b41c4f8320097e7d76f",i=1e4,c={},u=[],a=[];function l(e){var t=E[e];if(!t)return x;var n=function(n){return t.hot.active?(E[n]?E[n].parents.includes(e)||E[n].parents.push(e):(u=[e],r=n),t.children.includes(n)||t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),x(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&Object.defineProperty(n,i,o(i));return n.e=function(e){return"ready"===f&&p("prepare"),m++,x.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===f&&(b[e]||j(e),0===m&&0===v&&P())}},n}var s=[],f="idle";function p(e){f=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}var d,y,h,v=0,m=0,b={},g={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return n=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,i=x.p+""+o+".hot-update.json";n.open("GET",i,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;g={},b={},w=e.c,h=e.h,p("prepare");var t=new Promise(function(e,t){d={resolve:e,reject:t}});y={};return j(0),"prepare"===f&&0===m&&0===v&&P(),t});var t}function j(e){w[e]?(g[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=x.p+""+e+"."+o+".hot-update.js",t.appendChild(r)}(e)):b[e]=!0}function P(){p("ready");var e=d;if(d=null,e)if(n)Promise.resolve().then(function(){return k(n)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(_(r));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,i,a,l;function s(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),i=o.id,c=o.chain;if((a=E[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var l=a.parents[u],s=E[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};t.includes(l)||(s.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),d(r[l],[i])):(delete r[l],t.push(l),n.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.includes(n)||e.push(n)}}t=t||{};var v={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in y)if(Object.prototype.hasOwnProperty.call(y,O)){var j;l=_(O);var P=!1,k=!1,S=!1,A="";switch((j=y[O]?s(l):{type:"disposed",moduleId:O}).chain&&(A="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+j.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(P=new Error("Aborted because "+l+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(j),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),S=!0;break;default:throw new Error("Unexception type "+j.type)}if(P)return p("abort"),Promise.reject(P);if(k)for(l in b[l]=y[l],d(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(v[l]||(v[l]=[]),d(v[l],j.outdatedDependencies[l]));S&&(d(m,[j.moduleId]),b[l]=g)}var D,R=[];for(n=0;n<m.length;n++)l=m[n],E[l]&&E[l].hot._selfAccepted&&R.push({module:l,errorHandler:E[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var I,H,M=m.slice();M.length>0;)if(l=M.pop(),a=E[l]){var C={},U=a.hot._disposeHandlers;for(i=0;i<U.length;i++)(r=U[i])(C);for(c[l]=C,a.hot.active=!1,delete E[l],delete v[l],i=0;i<a.children.length;i++){var q=E[a.children[i]];q&&((D=q.parents.indexOf(l))>=0&&q.parents.splice(D,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=E[l]))for(H=v[l],i=0;i<H.length;i++)I=H[i],(D=a.children.indexOf(I))>=0&&a.children.splice(D,1);for(l in p("apply"),o=h,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var $=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=E[l])){H=v[l];var T=[];for(n=0;n<H.length;n++)if(I=H[n],r=a.hot._acceptedDependencies[I]){if(T.includes(r))continue;T.push(r)}for(n=0;n<T.length;n++){r=T[n];try{r(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:H[n],error:e}),t.ignoreErrored||$||($=e)}}}for(n=0;n<R.length;n++){var N=R[n];l=N.module,u=[l];try{x(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),t.ignoreErrored||$||($=r),$||($=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||$||($=e)}}return $?(p("fail"),Promise.reject($)):(p("idle"),new Promise(function(e){e(m)}))}var E={};function x(t){if(E[t])return E[t].exports;var n=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:O,apply:k,status:function(e){if(!e)return f;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:c[e]};return r=void 0,t}(t),parents:(a=u,u=[],a),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}return x.m=e,x.c=E,x.d=function(e,t,r){x.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},x.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="/",x.h=function(){return o},l(11)(x.s=11)}([function(e,t,r){"use strict";e.exports=r(12)},,,function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(u[l]=r[l]);if(n){c=n(r);for(var s=0;s<c.length;s++)i.call(r,c[s])&&(u[c[s]]=r[c[s]])}}return u}},,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleParser=t.MultiLineParser=void 0;var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};var c=function(e,t,r){var n=e.match(t)||[];return n=n.map(function(e,t){var n=r(e,t);return n=i.default.cloneElement(n,{key:t})}),e.split(t).reduce(function(e,t,r){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[t,n[r]])},[])};t.MultiLineParser=function(e,t,r){var n=t.SplitLinesTag,o=void 0===n?null:n,u=t.Rule;return e.split(/\n/gi).map(function(e,t){return i.default.createElement(o,{key:t}," ",c(e,u,r)," ")})},t.SimpleParser=c},function(e,t,r){"use strict";var n=r(5),o=r(4),i=r(3),c="function"==typeof Symbol&&Symbol.for,u=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.call"):60104,l=c?Symbol.for("react.return"):60105,s=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);throw(t=Error(r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function h(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||y}function v(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||y}function m(){}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var b=v.prototype=new m;function g(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||y}b.constructor=v,n(b,h.prototype),b.isPureReactComponent=!0;var w=g.prototype=new m;w.constructor=g,n(w,h.prototype),w.unstable_isAsyncReactComponent=!0,w.render=function(){return this.props.children};var _={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:_.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,x=[];function S(e,t,r,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function D(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case a:case l:case s:i=!0}}if(i)return r(n,e,""===t?"."+R(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=t+R(o=e[c],c);i+=D(o,f,r,n)}else if(null===e||void 0===e?f=null:f="function"==typeof(f=p&&e[p]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),c=0;!(o=e.next()).done;)i+=D(o=o.value,f=t+R(o,c++),r,n);else"object"===o&&d("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return i}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,i.thatReturnsArgument):null!=e&&(k(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function M(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(E,"$&/")+"/"),t=S(t,i,n,o),null==e||D(e,"",H,t),A(t)}var C={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=S(null,null,t,r),null==e||D(e,"",I,t),A(t)},count:function(e){return null==e?0:D(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,i.thatReturnsArgument),t},only:function(e){return k(e)||d("143"),e}},Component:h,PureComponent:v,unstable_AsyncComponent:g,Fragment:f,createElement:P,cloneElement:function(e,t,r){var o=n({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:a}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:n}},U=Object.freeze({default:C}),q=U&&C||U;e.exports=q.default?q.default:q}])});
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/text-emoji-parser/dist/lib.compiled.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/text-emoji-parser/dist/lib.compiled.js"); } }(); 

/***/ }),

/***/ "./node_modules/tlds/index.js":
/*!************************************!*\
  !*** ./node_modules/tlds/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = [
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "ac",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "active",
  "actor",
  "ad",
  "adac",
  "ads",
  "adult",
  "ae",
  "aeg",
  "aero",
  "aetna",
  "af",
  "afamilycompany",
  "afl",
  "africa",
  "ag",
  "agakhan",
  "agency",
  "ai",
  "aig",
  "aigo",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "al",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "am",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "ao",
  "aol",
  "apartments",
  "app",
  "apple",
  "aq",
  "aquarelle",
  "ar",
  "arab",
  "aramco",
  "archi",
  "army",
  "arpa",
  "art",
  "arte",
  "as",
  "asda",
  "asia",
  "associates",
  "at",
  "athleta",
  "attorney",
  "au",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aw",
  "aws",
  "ax",
  "axa",
  "az",
  "azure",
  "ba",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "bd",
  "be",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bf",
  "bg",
  "bh",
  "bharti",
  "bi",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "biz",
  "bj",
  "black",
  "blackfriday",
  "blanco",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bm",
  "bms",
  "bmw",
  "bn",
  "bnl",
  "bnpparibas",
  "bo",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "br",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bs",
  "bt",
  "budapest",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "cartier",
  "casa",
  "case",
  "caseih",
  "cash",
  "casino",
  "cat",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "cc",
  "cd",
  "ceb",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfa",
  "cfd",
  "cg",
  "ch",
  "chanel",
  "channel",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "chrysler",
  "church",
  "ci",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "coop",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cr",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "csc",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "de",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doctor",
  "dodge",
  "dog",
  "doha",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "duck",
  "dunlop",
  "duns",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "dz",
  "earth",
  "eat",
  "ec",
  "eco",
  "edeka",
  "edu",
  "education",
  "ee",
  "eg",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epost",
  "epson",
  "equipment",
  "er",
  "ericsson",
  "erni",
  "es",
  "esq",
  "estate",
  "esurance",
  "et",
  "etisalat",
  "eu",
  "eurovision",
  "eus",
  "events",
  "everbank",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fi",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "fm",
  "fo",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "fr",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fujixerox",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "ga",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gea",
  "gent",
  "genting",
  "george",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "giving",
  "gl",
  "glade",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "gn",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodhands",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "gov",
  "gp",
  "gq",
  "gr",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "gs",
  "gt",
  "gu",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hk",
  "hkt",
  "hm",
  "hn",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "honeywell",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hr",
  "hsbc",
  "ht",
  "hu",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "id",
  "ie",
  "ieee",
  "ifm",
  "ikano",
  "il",
  "im",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "in",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "int",
  "intel",
  "international",
  "intuit",
  "investments",
  "io",
  "ipiranga",
  "iq",
  "ir",
  "irish",
  "is",
  "iselect",
  "ismaili",
  "ist",
  "istanbul",
  "it",
  "itau",
  "itv",
  "iveco",
  "iwc",
  "jaguar",
  "java",
  "jcb",
  "jcp",
  "je",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jlc",
  "jll",
  "jm",
  "jmp",
  "jnj",
  "jo",
  "jobs",
  "joburg",
  "jot",
  "joy",
  "jp",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "ke",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kg",
  "kh",
  "ki",
  "kia",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kosher",
  "kp",
  "kpmg",
  "kpn",
  "kr",
  "krd",
  "kred",
  "kuokgroup",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "ladbrokes",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "lancome",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "li",
  "liaison",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "lixil",
  "lk",
  "llc",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "lr",
  "ls",
  "lt",
  "ltd",
  "ltda",
  "lu",
  "lundbeck",
  "lupin",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mc",
  "mckinsey",
  "md",
  "me",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "meo",
  "merckmsd",
  "metlife",
  "mg",
  "mh",
  "miami",
  "microsoft",
  "mil",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mk",
  "ml",
  "mlb",
  "mls",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "mobile",
  "mobily",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mopar",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "movistar",
  "mp",
  "mq",
  "mr",
  "ms",
  "msd",
  "mt",
  "mtn",
  "mtr",
  "mu",
  "museum",
  "mutual",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nab",
  "nadex",
  "nagoya",
  "name",
  "nationwide",
  "natura",
  "navy",
  "nba",
  "nc",
  "ne",
  "nec",
  "net",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "newholland",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nf",
  "nfl",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nl",
  "no",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "obi",
  "observer",
  "off",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "om",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "onyourside",
  "ooo",
  "open",
  "oracle",
  "orange",
  "org",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "pa",
  "page",
  "panasonic",
  "panerai",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pe",
  "pet",
  "pf",
  "pfizer",
  "pg",
  "ph",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "piaget",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "pk",
  "pl",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "post",
  "pr",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "pro",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "ps",
  "pt",
  "pub",
  "pw",
  "pwc",
  "py",
  "qa",
  "qpon",
  "quebec",
  "quest",
  "qvc",
  "racing",
  "radio",
  "raid",
  "re",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "rightathome",
  "ril",
  "rio",
  "rip",
  "rmit",
  "ro",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rs",
  "rsvp",
  "ru",
  "rugby",
  "ruhr",
  "run",
  "rw",
  "rwe",
  "ryukyu",
  "sa",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sapo",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sb",
  "sbi",
  "sbs",
  "sc",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scjohnson",
  "scor",
  "scot",
  "sd",
  "se",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "sg",
  "sh",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "shriram",
  "si",
  "silk",
  "sina",
  "singles",
  "site",
  "sj",
  "sk",
  "ski",
  "skin",
  "sky",
  "skype",
  "sl",
  "sling",
  "sm",
  "smart",
  "smile",
  "sn",
  "sncf",
  "so",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "space",
  "spiegel",
  "sport",
  "spot",
  "spreadbetting",
  "sr",
  "srl",
  "srt",
  "st",
  "stada",
  "staples",
  "star",
  "starhub",
  "statebank",
  "statefarm",
  "statoil",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "swatch",
  "swiftcover",
  "swiss",
  "sx",
  "sy",
  "sydney",
  "symantec",
  "systems",
  "sz",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tc",
  "tci",
  "td",
  "tdk",
  "team",
  "tech",
  "technology",
  "tel",
  "telecity",
  "telefonica",
  "temasek",
  "tennis",
  "teva",
  "tf",
  "tg",
  "th",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tjmaxx",
  "tjx",
  "tk",
  "tkmaxx",
  "tl",
  "tm",
  "tmall",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tt",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tv",
  "tvs",
  "tw",
  "tz",
  "ua",
  "ubank",
  "ubs",
  "uconnect",
  "ug",
  "uk",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vana",
  "vanguard",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "vista",
  "vistaprint",
  "viva",
  "vivo",
  "vlaanderen",
  "vn",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "warman",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wed",
  "wedding",
  "weibo",
  "weir",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "ws",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम", // xn--11b4c3d
  "セール", // xn--1ck2e1b
  "佛山", // xn--1qqw23a
  "ಭಾರತ", // xn--2scrj9c
  "慈善", // xn--30rr7y
  "集团", // xn--3bst00m
  "在线", // xn--3ds443g
  "한국", // xn--3e0b707e
  "ଭାରତ", // xn--3hcrj9c
  "大众汽车", // xn--3oq18vl8pn36a
  "点看", // xn--3pxu8k
  "คอม", // xn--42c2d9a
  "ভাৰত", // xn--45br5cyl
  "ভারত", // xn--45brj9c
  "八卦", // xn--45q11c
  "موقع", // xn--4gbrim
  "বাংলা", // xn--54b7fta0cc
  "公益", // xn--55qw42g
  "公司", // xn--55qx5d
  "香格里拉", // xn--5su34j936bgsg
  "网站", // xn--5tzm5g
  "移动", // xn--6frz82g
  "我爱你", // xn--6qq986b3xl
  "москва", // xn--80adxhks
  "қаз", // xn--80ao21a
  "католик", // xn--80aqecdr1a
  "онлайн", // xn--80asehdb
  "сайт", // xn--80aswg
  "联通", // xn--8y0a063a
  "срб", // xn--90a3ac
  "бг", // xn--90ae
  "бел", // xn--90ais
  "קום", // xn--9dbq2a
  "时尚", // xn--9et52u
  "微博", // xn--9krt00a
  "淡马锡", // xn--b4w605ferd
  "ファッション", // xn--bck1b9a5dre4c
  "орг", // xn--c1avg
  "नेट", // xn--c2br7g
  "ストア", // xn--cck2b3b
  "삼성", // xn--cg4bki
  "சிங்கப்பூர்", // xn--clchc0ea0b2g2a9gcd
  "商标", // xn--czr694b
  "商店", // xn--czrs0t
  "商城", // xn--czru2d
  "дети", // xn--d1acj3b
  "мкд", // xn--d1alf
  "ею", // xn--e1a4c
  "ポイント", // xn--eckvdtc9d
  "新闻", // xn--efvy88h
  "工行", // xn--estv75g
  "家電", // xn--fct429k
  "كوم", // xn--fhbei
  "中文网", // xn--fiq228c5hs
  "中信", // xn--fiq64b
  "中国", // xn--fiqs8s
  "中國", // xn--fiqz9s
  "娱乐", // xn--fjq720a
  "谷歌", // xn--flw351e
  "భారత్", // xn--fpcrj9c3d
  "ලංකා", // xn--fzc2c9e2c
  "電訊盈科", // xn--fzys8d69uvgm
  "购物", // xn--g2xx48c
  "クラウド", // xn--gckr3f0f
  "ભારત", // xn--gecrj9c
  "通販", // xn--gk3at1e
  "भारतम्", // xn--h2breg3eve
  "भारत", // xn--h2brj9c
  "भारोत", // xn--h2brj9c8c
  "网店", // xn--hxt814e
  "संगठन", // xn--i1b6b1a6a2e
  "餐厅", // xn--imr513n
  "网络", // xn--io0a7i
  "ком", // xn--j1aef
  "укр", // xn--j1amh
  "香港", // xn--j6w193g
  "诺基亚", // xn--jlq61u9w7b
  "食品", // xn--jvr189m
  "飞利浦", // xn--kcrx77d1x4a
  "台湾", // xn--kprw13d
  "台灣", // xn--kpry57d
  "手表", // xn--kpu716f
  "手机", // xn--kput3i
  "мон", // xn--l1acc
  "الجزائر", // xn--lgbbat1ad8j
  "عمان", // xn--mgb9awbf
  "ارامكو", // xn--mgba3a3ejt
  "ایران", // xn--mgba3a4f16a
  "العليان", // xn--mgba7c0bbn0a
  "اتصالات", // xn--mgbaakc7dvf
  "امارات", // xn--mgbaam7a8h
  "بازار", // xn--mgbab2bd
  "پاکستان", // xn--mgbai9azgqp6j
  "الاردن", // xn--mgbayh7gpa
  "موبايلي", // xn--mgbb9fbpob
  "بارت", // xn--mgbbh1a
  "بھارت", // xn--mgbbh1a71e
  "المغرب", // xn--mgbc0a9azcg
  "ابوظبي", // xn--mgbca7dzdo
  "السعودية", // xn--mgberp4a5d4ar
  "ڀارت", // xn--mgbgu82a
  "كاثوليك", // xn--mgbi4ecexp
  "سودان", // xn--mgbpl2fh
  "همراه", // xn--mgbt3dhd
  "عراق", // xn--mgbtx2b
  "مليسيا", // xn--mgbx4cd0ab
  "澳門", // xn--mix891f
  "닷컴", // xn--mk1bu44c
  "政府", // xn--mxtq1m
  "شبكة", // xn--ngbc5azd
  "بيتك", // xn--ngbe9e0a
  "عرب", // xn--ngbrx
  "გე", // xn--node
  "机构", // xn--nqv7f
  "组织机构", // xn--nqv7fs00ema
  "健康", // xn--nyqy26a
  "ไทย", // xn--o3cw4h
  "سورية", // xn--ogbpf8fl
  "招聘", // xn--otu796d
  "рус", // xn--p1acf
  "рф", // xn--p1ai
  "珠宝", // xn--pbt977c
  "تونس", // xn--pgbs0dh
  "大拿", // xn--pssy2u
  "みんな", // xn--q9jyb4c
  "グーグル", // xn--qcka1pmc
  "ελ", // xn--qxam
  "世界", // xn--rhqv96g
  "書籍", // xn--rovu88b
  "ഭാരതം", // xn--rvc1e0am3e
  "ਭਾਰਤ", // xn--s9brj9c
  "网址", // xn--ses554g
  "닷넷", // xn--t60b56a
  "コム", // xn--tckwe
  "天主教", // xn--tiq49xqyj
  "游戏", // xn--unup4y
  "vermögensberater", // xn--vermgensberater-ctb
  "vermögensberatung", // xn--vermgensberatung-pwb
  "企业", // xn--vhquv
  "信息", // xn--vuq861b
  "嘉里大酒店", // xn--w4r85el8fhu5dnra
  "嘉里", // xn--w4rs40l
  "مصر", // xn--wgbh1c
  "قطر", // xn--wgbl6a
  "广东", // xn--xhq521b
  "இலங்கை", // xn--xkc2al3hye2a
  "இந்தியா", // xn--xkc2dl3a5ee0h
  "հայ", // xn--y9a3aq
  "新加坡", // xn--yfro4i67o
  "فلسطين", // xn--ygbi2ammx
  "政务", // xn--zfr164b
  "xperia",
  "xxx",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yt",
  "yun",
  "za",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zippo",
  "zm",
  "zone",
  "zuerich",
  "zw"
];

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/tlds/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/tlds/index.js"); } }(); 

/***/ }),

/***/ "./node_modules/uc.micro/categories/Cc/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cc/regex.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/Cc/regex.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/Cc/regex.js"); } }(); 

/***/ }),

/***/ "./node_modules/uc.micro/categories/P/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/P/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/P/regex.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/P/regex.js"); } }(); 

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/Z/regex.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/categories/Z/regex.js"); } }(); 

/***/ }),

/***/ "./node_modules/uc.micro/properties/Any/regex.js":
/*!*******************************************************!*\
  !*** ./node_modules/uc.micro/properties/Any/regex.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/properties/Any/regex.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/uc.micro/properties/Any/regex.js"); } }(); 

/***/ })

}]);