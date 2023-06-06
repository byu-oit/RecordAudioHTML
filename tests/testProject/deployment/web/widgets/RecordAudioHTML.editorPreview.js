(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RecordAudioHTML.editorPreview.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioHTML.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioHTML.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\nPlace your custom CSS here\n*/\n.not-supported {\n  color: red;\n  font-style: italic;\n}\n\n.outer-container {\n  font-family: \"HCo Ringside Narrow SSm\", Arial, sans-serif;\n}\n\n.instructions {\n  margin-top: 20px;\n  padding: 10px 0px 10px 0px;\n  border: 1px solid #cccccc;\n  background-color: lightyellow;\n}\n\n.instructions li {\n  padding-top: 10px;\n}\n\n.widget-record-audio {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  /*border: 1px solid mediumseagreen;*/\n}\n\n.widget-play-audio-show {\n  display: flex;\n  margin: 12px 0 0 0;\n}\n\n.widget-play-audio-hide {\n  display: none;\n  margin: 12px 0 0 0;\n}\n\n.btn-all {\n  margin: 12px 12px 0 0;\n  padding-top: 4px;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #cccccc;\n}\n\n.btn-icon {\n  width: 30px;\n}\n\n.btn-download {\n  margin-left: 12px;\n  padding: 5px 7px;\n  background-color: #efefef;\n  cursor: pointer;\n  display: flex;\n}\n\n.btn-hide {\n  display: none;\n}\n\n.btn-enabled:hover, .btn-enabled:focus, .btn-download:hover, .btn-download:focus {\n  background-color: #d7d7d7;\n}\n\n.btn-disabled:hover, .btn-disabled:focus {\n  background-color: #aaaaaa;\n}\n\n.btn-record-circle {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin: -2px;\n  background-color: red;\n  border-radius: 50%;\n}\n\n.btn-record-circle-disabled {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin: -2px;\n  background-color: #aaaaaa;\n  border-radius: 50%;\n}\n\n.btn-record-circle-small {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin: -2px;\n  background-color: red;\n  border-radius: 50%;\n}\n\n.btn-record {\n  width: 30px;\n}\n\n.btn-pause {\n  color: red;\n}\n\n.btn-color-red {\n  color: red;\n}\n\n.btn-color-black {\n  color: black;\n}\n\n.btn-stop {\n  color: black;\n}\n\n.btn-play {\n  color: black;\n}\n\n.btn-color-grey {\n  color: #aaaaaa;\n}\n\n.audio-player {\n  height: 32px;\n  border: 1px solid #cccccc;\n  border-radius: 16px;\n}\n\n.tooltip {\n  position: relative;\n  border-bottom: 1px dashed black;\n}\n\n/* Customize the look of the <audio> tag widget in Chromium browsers. */\n/*.widget-play-audio-show audio::-webkit-media-controls-panel, video::-webkit-media-controls-panel {*/\n/*    display: flex;*/\n/*    flex-direction: row;*/\n/*    align-items: center;*/\n/*    !* We use flex-start here to ensure that the play button is visible even*/\n/*     * if we are too small to show all controls.*/\n/*     *!*/\n/*    justify-content: flex-start;*/\n/*    -webkit-user-select: none;*/\n/*    position: relative;*/\n/*    width: 100%;*/\n/*    z-index: 0;*/\n/*    overflow: hidden;*/\n/*    text-align: right;*/\n/*    bottom: auto;*/\n/*    height: 30px;*/\n/*    background-color: rgba(239, 239, 239, 0.8);*/\n/*    border: 1px solid rgb(204, 204, 204);*/\n/*    border-radius: 0px;*/\n/*    !* The duration is also specified in MediaControlElements.cpp and LayoutTests/media/media-controls.js *!*/\n/*    transition: opacity 0.3s;*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/RecordAudioHTML.editorPreview.tsx":
/*!***********************************************!*\
  !*** ./src/RecordAudioHTML.editorPreview.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviewCss = exports.preview = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var RecordAudio_1 = __webpack_require__(/*! ./components/RecordAudio */ "./src/components/RecordAudio.tsx");
var preview = /** @class */ (function (_super) {
    __extends(preview, _super);
    function preview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    preview.prototype.render = function () {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        // const inText = `[${this.props.inText}]`;
        // return <RecordAudio inText={inText}/>;
        // const file = `[${this.props.file}]`;
        // return <RecordAudio file={file}/>;
        // const fileUrl = `[${this.props.audioFileUrl}`;
        return react_1.createElement(RecordAudio_1.RecordAudio, null);
    };
    return preview;
}(react_1.Component));
exports.preview = preview;
function getPreviewCss() {
    return __webpack_require__(/*! ./ui/RecordAudioHTML.css */ "./src/ui/RecordAudioHTML.css");
}
exports.getPreviewCss = getPreviewCss;


/***/ }),

/***/ "./src/components/RecordAudio.tsx":
/*!****************************************!*\
  !*** ./src/components/RecordAudio.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordAudio = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var RecordAudio = /** @class */ (function (_super) {
    __extends(RecordAudio, _super);
    /**
     * Check to see if browser supports getUserMedia for recording before doing anything else.
     * If not supported, the render function will disable buttons.
     * @param props
     */
    function RecordAudio(props) {
        var _this = _super.call(this, props) || this;
        _this.saveCounter = 1;
        _this.startRecording = function () {
            if (_this.state.isRecordingStarted) {
                if (!_this.state.isRecording) {
                    /* Resume recording after pause. */
                    if (_this.state.mediaRecorder) {
                        _this.state.mediaRecorder.resume();
                    }
                    _this.setState({ isRecording: true });
                }
            }
            else {
                if (_this.state.isRecordingSupported) {
                    navigator.mediaDevices.getUserMedia(
                    // only audio needed for this app
                    {
                        audio: true
                    }).then(function (stream) {
                        /* Initialize a new MediaRecorder */
                        var mediaOptions = {
                            mimeType: RecordAudio.mimeType
                        };
                        var mediaRecorder = new MediaRecorder(stream, mediaOptions);
                        mediaRecorder.start();
                        var audioChunks = [];
                        /* Event listener for when new data is available from recording device. */
                        mediaRecorder.addEventListener("dataavailable", function (event) {
                            audioChunks.push(event.data);
                        });
                        _this.setState({ isRecordingStarted: true, isRecording: true });
                        /* Event listener for "stop" event.*/
                        mediaRecorder.addEventListener("stop", function () {
                            /* Collect audio chunks into a Blob, create URL for it, update state. */
                            var audioBlob = new Blob(audioChunks, { 'type': RecordAudio.mimeType });
                            var audioUrl = URL.createObjectURL(audioBlob);
                            _this.setState({ audioUrl: audioUrl, audioBlob: audioBlob, isRecording: false, isDone: true });
                            stream.getAudioTracks().forEach(function (track) { return track.stop(); });
                        });
                        _this.setState({ mediaRecorder: mediaRecorder });
                    });
                }
            }
        };
        _this.pauseRecording = function () {
            if (_this.state.mediaRecorder) {
                _this.state.mediaRecorder.pause();
            }
            _this.setState({ isRecording: false });
        };
        _this.stopRecording = function () {
            if (_this.state.isRecording) {
                if (_this.state.mediaRecorder) {
                    _this.state.mediaRecorder.stop();
                }
                _this.setState({
                    isDone: true,
                    isRecording: false,
                    isRecordButtonsEnabled: false
                });
                console.log("done"); // testing only
            }
        };
        _this.saveRecording = function () {
            var audioBlob = _this.state.audioBlob;
            var actionItem = _this.props.actionItem;
            var counter = _this.saveCounter;
            mx.data.create({
                entity: "System.FileDocument",
                callback: function (obj) {
                    obj.set("Name", "recording.weba");
                    mx.data.saveDocument(obj.toString(), "new_audio" + counter + ".weba", {}, audioBlob, function () {
                        mx.data.commit({
                            mxobj: obj,
                            callback: function () {
                                if (actionItem === null || actionItem === void 0 ? void 0 : actionItem.canExecute)
                                    actionItem.execute();
                            },
                            error: function (error) {
                                mx.ui.error("Error attempting to save audio.\nContact app support\n\n 1: " + error);
                            }
                        });
                    }, function (error) {
                        // Error in save document call
                        mx.ui.error("Error attempting to save audio.\nContact app support\n\n 2: " + error);
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () { },
                            error: function () {
                                mx.ui.error("Error attempting to save audio.\nContact app support\n\n 3: " + error);
                            } // Error deleting object
                        });
                    });
                },
                error: function (error) {
                    // Error in create entity call
                    // Likely an incorrect entity name listed in widget options, check entityName variable
                    mx.ui.error("Error creating audio file.\nContact app support.\n\n 4: " + error);
                }
            });
            _this.saveCounter++;
        };
        _this.deleteRecording = function () {
            if (_this.state.audioUrl) {
                URL.revokeObjectURL(_this.state.audioUrl);
                _this.setState({
                    isDone: false,
                    isRecording: false,
                    isRecordingStarted: false,
                    isRecordButtonsEnabled: true
                });
            }
        };
        var isRecordingSupported = true;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (MediaRecorder.isTypeSupported(RecordAudio.mimeType)) {
                isRecordingSupported = true;
                /* List the recording devices to let the user choose. Returns an array of InputDeviceInfo */
                navigator.mediaDevices.enumerateDevices().then(function (deviceList) {
                    deviceList = deviceList.filter(function (deviceInfo) { return deviceInfo.kind === 'audioinput'; });
                    console.log('Devices = ' + deviceList);
                });
            }
            else {
                isRecordingSupported = false;
            }
        }
        else {
            isRecordingSupported = false;
        }
        if (!isRecordingSupported) {
            alert('Your browser does not support recording with getUserMedia. Try a different browser.');
        }
        /* Set defaults for state variables */
        _this.state = {
            isRecordingSupported: isRecordingSupported,
            isRecordingStarted: false,
            isRecording: false,
            isPaused: false,
            isDone: false,
            isRecordButtonsEnabled: true,
        };
        return _this;
    }
    RecordAudio.prototype.render = function () {
        // const className = classNames(this.props.className);
        // See https://reactjs.org/docs/conditional-rendering.html to set state and render button(s)
        // and https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6
        // <ButtonRecord isRecording={this.state.isRecording} recordHandler={this.startRecording}/>
        // <ButtonPause isRecording={this.state.isRecording} pauseHandler={this.pauseRecording}/>
        var isRecordingSupported = this.state.isRecordingSupported;
        var isRecordButtonsEnabled = this.state.isRecordButtonsEnabled;
        var isRecording = this.state.isRecording;
        var isDone = this.state.isDone;
        return !isRecordingSupported ? react_1.createElement("div", { className: "not-supported" }, "Recording not supported in this browser.") :
            react_1.createElement("div", { className: "outer-container" },
                react_1.createElement("div", { className: "widget-record-audio" },
                    react_1.createElement("button", { style: isRecording ? { display: 'none' } : { display: 'inline-block' }, type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-record btn-all btn-icon btn-enabled" : "btn-record btn-all btn-icon", onClick: this.startRecording },
                        react_1.createElement("div", { className: isRecordButtonsEnabled ? "btn-record-circle" : "btn-record-circle-disabled" })),
                    react_1.createElement("button", { style: isRecording ? { display: 'inline-block' } : { display: 'none' }, type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-color-red btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon", onClick: this.pauseRecording },
                        react_1.createElement("span", { className: "glyphicon glyphicon-pause" })),
                    react_1.createElement("button", { type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon", onClick: this.stopRecording },
                        react_1.createElement("span", { className: "glyphicon glyphicon-stop" })),
                    react_1.createElement("div", { className: isDone ? "widget-play-audio-show" : "widget-play-audio-hide" },
                        react_1.createElement("audio", { className: "audio-player", controls: true, src: this.state.audioUrl },
                            "Your browser does not support the ",
                            react_1.createElement("code", null, "audio"),
                            " element.")),
                    react_1.createElement("div", { style: { "margin": "0px 0px 0px 15px" } },
                        react_1.createElement("button", { type: "button", disabled: !isDone, className: isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide", onClick: this.saveRecording },
                            react_1.createElement("span", { className: "glyphicon glyphicon-plus" })),
                        react_1.createElement("button", { type: "button", disabled: !isDone, className: isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide", onClick: this.deleteRecording },
                            react_1.createElement("span", { className: "glyphicon glyphicon-remove" })))));
    };
    RecordAudio.mimeType = 'audio/webm;codecs=opus';
    return RecordAudio;
}(react_1.Component));
exports.RecordAudio = RecordAudio;


/***/ }),

/***/ "./src/ui/RecordAudioHTML.css":
/*!************************************!*\
  !*** ./src/ui/RecordAudioHTML.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./RecordAudioHTML.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioHTML.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1JlY29yZEF1ZGlvSFRNTC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVjb3JkQXVkaW9IVE1MLmVkaXRvclByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY29yZEF1ZGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUmVjb3JkQXVkaW9IVE1MLmNzcz9lMTk5Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdURBQXVELGVBQWUsdUJBQXVCLEdBQUcsc0JBQXNCLGdFQUFnRSxHQUFHLG1CQUFtQixxQkFBcUIsK0JBQStCLDhCQUE4QixrQ0FBa0MsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsMEJBQTBCLGdCQUFnQixrQkFBa0Isd0JBQXdCLGdDQUFnQyx3QkFBd0IsdUNBQXVDLEtBQUssNkJBQTZCLGtCQUFrQix1QkFBdUIsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixHQUFHLGNBQWMsMEJBQTBCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLDhCQUE4QixHQUFHLGVBQWUsZ0JBQWdCLEdBQUcsbUJBQW1CLHNCQUFzQixxQkFBcUIsOEJBQThCLG9CQUFvQixrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQixHQUFHLHNGQUFzRiw4QkFBOEIsR0FBRyw4Q0FBOEMsOEJBQThCLEdBQUcsd0JBQXdCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGlCQUFpQiwwQkFBMEIsdUJBQXVCLEdBQUcsaUNBQWlDLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGlCQUFpQiw4QkFBOEIsdUJBQXVCLEdBQUcsOEJBQThCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGlCQUFpQiwwQkFBMEIsdUJBQXVCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLGdCQUFnQixlQUFlLEdBQUcsb0JBQW9CLGVBQWUsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyxlQUFlLGlCQUFpQixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxtQkFBbUIsaUJBQWlCLDhCQUE4Qix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixvQ0FBb0MsR0FBRyxrTEFBa0wsd0JBQXdCLDhCQUE4Qiw4QkFBOEIsMkxBQTJMLG9DQUFvQyw2QkFBNkIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qix1QkFBdUIscURBQXFELCtDQUErQyw2QkFBNkIscUpBQXFKLE9BQU87QUFDN2hHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBLHdEQUE0RDtBQUc1RCw0R0FBcUQ7QUFJckQ7SUFBNkIsMkJBQXNDO0lBQW5FOztJQVVBLENBQUM7SUFURyx3QkFBTSxHQUFOO1FBQ0ksa0VBQWtFO1FBQ2xFLDJDQUEyQztRQUMzQyx5Q0FBeUM7UUFDekMsdUNBQXVDO1FBQ3ZDLHFDQUFxQztRQUNyQyxpREFBaUQ7UUFDakQsT0FBTyxzQkFBQyx5QkFBVyxPQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBVjRCLGlCQUFTLEdBVXJDO0FBVlksMEJBQU87QUFZcEIsU0FBZ0IsYUFBYTtJQUN6QixPQUFPLG1CQUFPLENBQUMsOERBQTBCLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsc0NBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJELHdEQUEyRTtBQXlCM0U7SUFBaUMsK0JBQTZDO0lBSzFFOzs7O09BSUc7SUFDSCxxQkFBWSxLQUF1QjtRQUFuQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQThCZjtRQXRDRCxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQXdDeEIsb0JBQWMsR0FBRztZQUNiLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6QixtQ0FBbUM7b0JBQ25DLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7d0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNyQztvQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0o7aUJBQ0k7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO29CQUNqQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVk7b0JBQy9CLGlDQUFpQztvQkFDakM7d0JBQ0ksS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FDSixDQUFDLElBQUksQ0FBQyxnQkFBTTt3QkFDVCxvQ0FBb0M7d0JBQ3BDLElBQU0sWUFBWSxHQUFHOzRCQUNqQixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7eUJBQ2pDLENBQUM7d0JBQ0YsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUM5RCxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3RCLElBQU0sV0FBVyxHQUFRLEVBQUUsQ0FBQzt3QkFFNUIsMEVBQTBFO3dCQUMxRSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGVBQUs7NEJBQ2pELFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsQ0FBQzt3QkFDSCxLQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUVoRSxxQ0FBcUM7d0JBQ3JDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7NEJBRW5DLHdFQUF3RTs0QkFDeEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDOzRCQUN6RSxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUNoRCxLQUFJLENBQUMsUUFBUSxDQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7NEJBQy9GLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUUsZUFBSyxJQUFJLFlBQUssQ0FBQyxJQUFJLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQzt3QkFDNUQsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO29CQUNwRCxDQUFDLENBQUM7aUJBQ0w7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUVGLG9CQUFjLEdBQUc7WUFDYixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUMxQixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNwQztZQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7UUFFRixtQkFBYSxHQUFHO1lBQ1osSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtvQkFDMUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ25DO2dCQUNELEtBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsTUFBTSxFQUFFLElBQUk7b0JBQ1osV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLHNCQUFzQixFQUFFLEtBQUs7aUJBQ2hDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTthQUN2QztRQUNMLENBQUMsQ0FBQztRQUVGLG1CQUFhLEdBQUc7WUFDWixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDeEMsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztZQUVqQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDWCxNQUFNLEVBQUUscUJBQXFCO2dCQUM3QixRQUFRLEVBQUcsVUFBVSxHQUFHO29CQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUVsQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FDaEIsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUNkLFdBQVcsR0FBRyxPQUFPLEdBQUcsT0FBTyxFQUMvQixFQUFFLEVBQ0YsU0FBaUIsRUFDakI7d0JBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7NEJBQ1gsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsUUFBUSxFQUFFO2dDQUNOLElBQUksVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFVBQVU7b0NBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRTs0QkFDcEQsQ0FBQzs0QkFDRCxLQUFLLEVBQUUsVUFBVSxLQUFLO2dDQUNwQixFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxpRUFBK0QsS0FBTyxDQUFDOzRCQUNyRixDQUFDO3lCQUNKLENBQUM7b0JBQ04sQ0FBQyxFQUNELFVBQVUsS0FBSzt3QkFDWCw4QkFBOEI7d0JBQzlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGlFQUErRCxLQUFPLENBQUM7d0JBQ25GLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzRCQUNYLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFOzRCQUNwQixRQUFRLEVBQUUsY0FBYSxDQUFDOzRCQUN4QixLQUFLLEVBQUU7Z0NBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUVBQStELEtBQU8sQ0FBQzs0QkFDdkYsQ0FBQyxDQUFXLHdCQUF3Qjt5QkFDdkMsQ0FBQztvQkFDTixDQUFDLENBQ0o7Z0JBQ0wsQ0FBQztnQkFDRCxLQUFLLEVBQUUsVUFBVSxLQUFLO29CQUNsQiw4QkFBOEI7b0JBQzlCLHNGQUFzRjtvQkFDdEYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkRBQTJELEtBQU8sQ0FBQztnQkFDbkYsQ0FBQzthQUNKLENBQUM7WUFDRixLQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3RCLENBQUMsQ0FBQztRQUVGLHFCQUFlLEdBQUc7WUFDZCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNyQixHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLGtCQUFrQixFQUFFLEtBQUs7b0JBQ3pCLHNCQUFzQixFQUFFLElBQUk7aUJBQy9CLENBQUM7YUFDTDtRQUNMLENBQUMsQ0FBQztRQTdKRSxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLFNBQVMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDL0QsSUFBSSxhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2dCQUM1Qiw0RkFBNEY7Z0JBQzVGLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFVO29CQUN0RCxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQVUsSUFBSyxpQkFBVSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztvQkFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQ0k7Z0JBQ0Qsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2FBQ2hDO1NBQ0o7YUFDSTtZQUNELG9CQUFvQixHQUFHLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN2QixLQUFLLENBQUMscUZBQXFGLENBQUMsQ0FBQztTQUNoRztRQUNELHNDQUFzQztRQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1Qsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzFDLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLHNCQUFzQixFQUFFLElBQUk7U0FDL0IsQ0FBQzs7SUFDTixDQUFDO0lBa0lELDRCQUFNLEdBQU47UUFDSSxzREFBc0Q7UUFDdEQsNEZBQTRGO1FBQzVGLGdHQUFnRztRQUNoRywyRkFBMkY7UUFDM0YseUZBQXlGO1FBRXpGLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RCxJQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7UUFDakUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQywrQkFBSyxTQUFTLEVBQUMsZUFBZSwrQ0FBK0MsQ0FBQyxDQUFDO1lBQzFHLCtCQUFLLFNBQVMsRUFBQyxpQkFBaUI7Z0JBQzVCLCtCQUFLLFNBQVMsRUFBQyxxQkFBcUI7b0JBQ2hDLGtDQUFRLEtBQUssRUFBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFDdkUsSUFBSSxFQUFDLFFBQVEsRUFDYixRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsRUFDakMsU0FBUyxFQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQzlHLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYzt3QkFFaEMsK0JBQUssU0FBUyxFQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLEdBQ3RGLENBQ0Q7b0JBQ1Qsa0NBQVEsS0FBSyxFQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxFQUN0RSxJQUFJLEVBQUMsUUFBUSxFQUNiLFFBQVEsRUFBRSxDQUFDLHNCQUFzQixFQUNqQyxTQUFTLEVBQUcsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUMsRUFDckgsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjO3dCQUVoQyxnQ0FBTSxTQUFTLEVBQUMsMkJBQTJCLEdBQVEsQ0FDOUM7b0JBQ1Qsa0NBQVEsSUFBSSxFQUFDLFFBQVEsRUFDYixRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsRUFDakMsU0FBUyxFQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUMsaUNBQWlDLEVBQ3ZILE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTt3QkFFL0IsZ0NBQU0sU0FBUyxFQUFDLDBCQUEwQixHQUFRLENBQzdDO29CQUNULCtCQUFLLFNBQVMsRUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7d0JBQ3pFLGlDQUFPLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxRQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7OzRCQUM3Qiw0Q0FBa0I7d0NBQ2hELENBQ047b0JBQ04sK0JBQUssS0FBSyxFQUFHLEVBQUUsUUFBUSxFQUFHLGtCQUFrQixFQUFDO3dCQUN6QyxrQ0FBUSxJQUFJLEVBQUMsUUFBUSxFQUNiLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFDakIsU0FBUyxFQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFDaEYsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhOzRCQUUvQixnQ0FBTSxTQUFTLEVBQUMsMEJBQTBCLEdBQVMsQ0FDOUM7d0JBQ1Qsa0NBQVEsSUFBSSxFQUFDLFFBQVEsRUFDYixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQ2pCLFNBQVMsRUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQ2hGLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTs0QkFFakMsZ0NBQU0sU0FBUyxFQUFDLDRCQUE0QixHQUFRLENBQy9DLENBQ1AsQ0FDSixDQUNKO0lBQ2QsQ0FBQztJQXRPTSxvQkFBUSxHQUFXLHdCQUF3QixDQUFDO0lBdU92RCxrQkFBQztDQUFBLENBek9nQyxpQkFBUyxHQXlPekM7QUF6T1ksa0NBQVc7Ozs7Ozs7Ozs7Ozs7QUN4QnhCLHFCQUFxQixtQkFBTyxDQUFDLDhOQUE4Rzs7QUFFM0k7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxrQyIsImZpbGUiOiJ3aWRnZXRzL1JlY29yZEF1ZGlvSFRNTC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvUmVjb3JkQXVkaW9IVE1MLmVkaXRvclByZXZpZXcudHN4XCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuUGxhY2UgeW91ciBjdXN0b20gQ1NTIGhlcmVcXG4qL1xcbi5ub3Qtc3VwcG9ydGVkIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5vdXRlci1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIQ28gUmluZ3NpZGUgTmFycm93IFNTbVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG59XFxuXFxuLmluc3RydWN0aW9ucyBsaSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLndpZGdldC1yZWNvcmQtYXVkaW8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKmJvcmRlcjogMXB4IHNvbGlkIG1lZGl1bXNlYWdyZWVuOyovXFxufVxcblxcbi53aWRnZXQtcGxheS1hdWRpby1zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEycHggMCAwIDA7XFxufVxcblxcbi53aWRnZXQtcGxheS1hdWRpby1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW46IDEycHggMCAwIDA7XFxufVxcblxcbi5idG4tYWxsIHtcXG4gIG1hcmdpbjogMTJweCAxMnB4IDAgMDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxufVxcblxcbi5idG4taWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmJ0bi1kb3dubG9hZCB7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0bi1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4tZW5hYmxlZDpob3ZlciwgLmJ0bi1lbmFibGVkOmZvY3VzLCAuYnRuLWRvd25sb2FkOmhvdmVyLCAuYnRuLWRvd25sb2FkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XFxufVxcblxcbi5idG4tZGlzYWJsZWQ6aG92ZXIsIC5idG4tZGlzYWJsZWQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG59XFxuXFxuLmJ0bi1yZWNvcmQtY2lyY2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYnRuLXJlY29yZC1jaXJjbGUtZGlzYWJsZWQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBtYXJnaW46IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYnRuLXJlY29yZC1jaXJjbGUtc21hbGwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW46IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5idG4tcmVjb3JkIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYnRuLXBhdXNlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5idG4tY29sb3ItcmVkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5idG4tY29sb3ItYmxhY2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuLXN0b3Age1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuLXBsYXkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuLWNvbG9yLWdyZXkge1xcbiAgY29sb3I6ICNhYWFhYWE7XFxufVxcblxcbi5hdWRpby1wbGF5ZXIge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcbi8qIEN1c3RvbWl6ZSB0aGUgbG9vayBvZiB0aGUgPGF1ZGlvPiB0YWcgd2lkZ2V0IGluIENocm9taXVtIGJyb3dzZXJzLiAqL1xcbi8qLndpZGdldC1wbGF5LWF1ZGlvLXNob3cgYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGFuZWwsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsIHsqL1xcbi8qICAgIGRpc3BsYXk6IGZsZXg7Ki9cXG4vKiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyovXFxuLyogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbi8qICAgICEqIFdlIHVzZSBmbGV4LXN0YXJ0IGhlcmUgdG8gZW5zdXJlIHRoYXQgdGhlIHBsYXkgYnV0dG9uIGlzIHZpc2libGUgZXZlbiovXFxuLyogICAgICogaWYgd2UgYXJlIHRvbyBzbWFsbCB0byBzaG93IGFsbCBjb250cm9scy4qL1xcbi8qICAgICAqISovXFxuLyogICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyovXFxuLyogICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsqL1xcbi8qICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xcbi8qICAgIHdpZHRoOiAxMDAlOyovXFxuLyogICAgei1pbmRleDogMDsqL1xcbi8qICAgIG92ZXJmbG93OiBoaWRkZW47Ki9cXG4vKiAgICB0ZXh0LWFsaWduOiByaWdodDsqL1xcbi8qICAgIGJvdHRvbTogYXV0bzsqL1xcbi8qICAgIGhlaWdodDogMzBweDsqL1xcbi8qICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC44KTsqL1xcbi8qICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTsqL1xcbi8qICAgIGJvcmRlci1yYWRpdXM6IDBweDsqL1xcbi8qICAgICEqIFRoZSBkdXJhdGlvbiBpcyBhbHNvIHNwZWNpZmllZCBpbiBNZWRpYUNvbnRyb2xFbGVtZW50cy5jcHAgYW5kIExheW91dFRlc3RzL21lZGlhL21lZGlhLWNvbnRyb2xzLmpzICohKi9cXG4vKiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7Ki9cXG4vKn0qL1wiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBIZWxsb1dvcmxkU2FtcGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb1dvcmxkU2FtcGxlXCI7XHJcbmltcG9ydCB7IFJlY29yZEF1ZGlvSFRNTFByZXZpZXdQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL1JlY29yZEF1ZGlvSFRNTFByb3BzXCI7XHJcbmltcG9ydCB7UmVjb3JkQXVkaW99IGZyb20gXCIuL2NvbXBvbmVudHMvUmVjb3JkQXVkaW9cIjtcclxuXHJcbmRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgY2xhc3MgcHJldmlldyBleHRlbmRzIENvbXBvbmVudDxSZWNvcmRBdWRpb0hUTUxQcmV2aWV3UHJvcHM+IHtcclxuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgICAgIC8vIHJldHVybiA8SGVsbG9Xb3JsZFNhbXBsZSBzYW1wbGVUZXh0PXt0aGlzLnByb3BzLnNhbXBsZVRleHR9IC8+O1xyXG4gICAgICAgIC8vIGNvbnN0IGluVGV4dCA9IGBbJHt0aGlzLnByb3BzLmluVGV4dH1dYDtcclxuICAgICAgICAvLyByZXR1cm4gPFJlY29yZEF1ZGlvIGluVGV4dD17aW5UZXh0fS8+O1xyXG4gICAgICAgIC8vIGNvbnN0IGZpbGUgPSBgWyR7dGhpcy5wcm9wcy5maWxlfV1gO1xyXG4gICAgICAgIC8vIHJldHVybiA8UmVjb3JkQXVkaW8gZmlsZT17ZmlsZX0vPjtcclxuICAgICAgICAvLyBjb25zdCBmaWxlVXJsID0gYFske3RoaXMucHJvcHMuYXVkaW9GaWxlVXJsfWA7XHJcbiAgICAgICAgcmV0dXJuIDxSZWNvcmRBdWRpby8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1JlY29yZEF1ZGlvSFRNTC5jc3NcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgQ29tcG9uZW50LCBSZWFjdE5vZGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBY3Rpb25WYWx1ZX0gZnJvbSBcIm1lbmRpeFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRBdWRpb1Byb3BzIHtcclxuICAgIC8vIGZpbGVVcmw/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG4gICAgdGFiSW5kZXg/OiBudW1iZXI7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGFjdGlvbkl0ZW0/OiBBY3Rpb25WYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRBdWRpb1N0YXRlIHtcclxuICAgIGlzUmVjb3JkaW5nU3VwcG9ydGVkOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRpbmdTdGFydGVkOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XHJcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcclxuICAgIGlzRG9uZTogYm9vbGVhbjtcclxuICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtZWRpYVJlY29yZGVyPzogTWVkaWFSZWNvcmRlcjtcclxuICAgIGF1ZGlvVXJsPzogc3RyaW5nO1xyXG4gICAgYXVkaW9CbG9iPzogQmxvYjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29yZEF1ZGlvIGV4dGVuZHMgQ29tcG9uZW50PFJlY29yZEF1ZGlvUHJvcHMsIFJlY29yZEF1ZGlvU3RhdGU+IHtcclxuXHJcbiAgICBzdGF0aWMgbWltZVR5cGU6IHN0cmluZyA9ICdhdWRpby93ZWJtO2NvZGVjcz1vcHVzJztcclxuICAgIHNhdmVDb3VudGVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIGJyb3dzZXIgc3VwcG9ydHMgZ2V0VXNlck1lZGlhIGZvciByZWNvcmRpbmcgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXHJcbiAgICAgKiBJZiBub3Qgc3VwcG9ydGVkLCB0aGUgcmVuZGVyIGZ1bmN0aW9uIHdpbGwgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICogQHBhcmFtIHByb3BzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBSZWNvcmRBdWRpb1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBpc1JlY29yZGluZ1N1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgaWYgKE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKFJlY29yZEF1ZGlvLm1pbWVUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLyogTGlzdCB0aGUgcmVjb3JkaW5nIGRldmljZXMgdG8gbGV0IHRoZSB1c2VyIGNob29zZS4gUmV0dXJucyBhbiBhcnJheSBvZiBJbnB1dERldmljZUluZm8gKi9cclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpLnRoZW4oKGRldmljZUxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VMaXN0ID0gZGV2aWNlTGlzdC5maWx0ZXIoKGRldmljZUluZm8pID0+IGRldmljZUluZm8ua2luZCA9PT0gJ2F1ZGlvaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGV2aWNlcyA9ICcgKyBkZXZpY2VMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1JlY29yZGluZ1N1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgcmVjb3JkaW5nIHdpdGggZ2V0VXNlck1lZGlhLiBUcnkgYSBkaWZmZXJlbnQgYnJvd3Nlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU2V0IGRlZmF1bHRzIGZvciBzdGF0ZSB2YXJpYWJsZXMgKi9cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZ1N1cHBvcnRlZDogaXNSZWNvcmRpbmdTdXBwb3J0ZWQsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nU3RhcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1JlY29yZEJ1dHRvbnNFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNSZWNvcmRpbmdTdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICAgICAgLyogUmVzdW1lIHJlY29yZGluZyBhZnRlciBwYXVzZS4gKi9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZWNvcmRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUmVjb3JkaW5nU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGF1ZGlvIG5lZWRlZCBmb3IgdGhpcyBhcHBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKS50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSW5pdGlhbGl6ZSBhIG5ldyBNZWRpYVJlY29yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWFPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogUmVjb3JkQXVkaW8ubWltZVR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIG1lZGlhT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ2h1bmtzOiBhbnkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogRXZlbnQgbGlzdGVuZXIgZm9yIHdoZW4gbmV3IGRhdGEgaXMgYXZhaWxhYmxlIGZyb20gcmVjb3JkaW5nIGRldmljZS4gKi9cclxuICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9DaHVua3MucHVzaChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGlzUmVjb3JkaW5nU3RhcnRlZDogdHJ1ZSwgaXNSZWNvcmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIEV2ZW50IGxpc3RlbmVyIGZvciBcInN0b3BcIiBldmVudC4qL1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3BcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogQ29sbGVjdCBhdWRpbyBjaHVua3MgaW50byBhIEJsb2IsIGNyZWF0ZSBVUkwgZm9yIGl0LCB1cGRhdGUgc3RhdGUuICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzLCB7J3R5cGUnIDogUmVjb3JkQXVkaW8ubWltZVR5cGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgYXVkaW9Vcmw6IGF1ZGlvVXJsLCBhdWRpb0Jsb2I6IGF1ZGlvQmxvYiwgaXNSZWNvcmRpbmc6IGZhbHNlLCBpc0RvbmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goIHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBtZWRpYVJlY29yZGVyOiBtZWRpYVJlY29yZGVyfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwYXVzZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZWNvcmRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZEJ1dHRvbnNFbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpOyAvLyB0ZXN0aW5nIG9ubHlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNhdmVSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gdGhpcy5zdGF0ZS5hdWRpb0Jsb2I7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uSXRlbSA9IHRoaXMucHJvcHMuYWN0aW9uSXRlbVxyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnNhdmVDb3VudGVyO1xyXG5cclxuICAgICAgICBteC5kYXRhLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGVudGl0eTogXCJTeXN0ZW0uRmlsZURvY3VtZW50XCIsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrIDogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgb2JqLnNldChcIk5hbWVcIiwgXCJyZWNvcmRpbmcud2ViYVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBteC5kYXRhLnNhdmVEb2N1bWVudChcclxuICAgICAgICAgICAgICAgICAgICBvYmoudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5ld19hdWRpb1wiICsgY291bnRlciArIFwiLndlYmFcIixcclxuICAgICAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2IgYXMgQmxvYixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXguZGF0YS5jb21taXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXhvYmo6IG9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkl0ZW0/LmNhbkV4ZWN1dGUpIGFjdGlvbkl0ZW0uZXhlY3V0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gMTogJHtlcnJvcn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGluIHNhdmUgZG9jdW1lbnQgY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gMjogJHtlcnJvcn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteC5kYXRhLnJlbW92ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkOiBvYmoudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7fSwgICAgICAgLy8gU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gMzogJHtlcnJvcn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgLy8gRXJyb3IgZGVsZXRpbmcgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvciBpbiBjcmVhdGUgZW50aXR5IGNhbGxcclxuICAgICAgICAgICAgICAgIC8vIExpa2VseSBhbiBpbmNvcnJlY3QgZW50aXR5IG5hbWUgbGlzdGVkIGluIHdpZGdldCBvcHRpb25zLCBjaGVjayBlbnRpdHlOYW1lIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgY3JlYXRpbmcgYXVkaW8gZmlsZS5cXG5Db250YWN0IGFwcCBzdXBwb3J0LlxcblxcbiA0OiAke2Vycm9yfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2F2ZUNvdW50ZXIrK1xyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGVSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXVkaW9VcmwpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnN0YXRlLmF1ZGlvVXJsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmdTdGFydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29uZGl0aW9uYWwtcmVuZGVyaW5nLmh0bWwgdG8gc2V0IHN0YXRlIGFuZCByZW5kZXIgYnV0dG9uKHMpXHJcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMDkyNjc3L3Rlcm5hcnktb3BlcmF0b3Itb24tc3R5bGUtd2l0aC1yZWFjdC1qcy1lcy02XHJcbiAgICAgICAgLy8gPEJ1dHRvblJlY29yZCBpc1JlY29yZGluZz17dGhpcy5zdGF0ZS5pc1JlY29yZGluZ30gcmVjb3JkSGFuZGxlcj17dGhpcy5zdGFydFJlY29yZGluZ30vPlxyXG4gICAgICAgIC8vIDxCdXR0b25QYXVzZSBpc1JlY29yZGluZz17dGhpcy5zdGF0ZS5pc1JlY29yZGluZ30gcGF1c2VIYW5kbGVyPXt0aGlzLnBhdXNlUmVjb3JkaW5nfS8+XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUmVjb3JkaW5nU3VwcG9ydGVkID0gdGhpcy5zdGF0ZS5pc1JlY29yZGluZ1N1cHBvcnRlZDtcclxuICAgICAgICBjb25zdCBpc1JlY29yZEJ1dHRvbnNFbmFibGVkID0gdGhpcy5zdGF0ZS5pc1JlY29yZEJ1dHRvbnNFbmFibGVkO1xyXG4gICAgICAgIGNvbnN0IGlzUmVjb3JkaW5nID0gdGhpcy5zdGF0ZS5pc1JlY29yZGluZztcclxuICAgICAgICBjb25zdCBpc0RvbmUgPSB0aGlzLnN0YXRlLmlzRG9uZTtcclxuICAgICAgICByZXR1cm4gIWlzUmVjb3JkaW5nU3VwcG9ydGVkID8gPGRpdiBjbGFzc05hbWU9XCJub3Qtc3VwcG9ydGVkXCI+UmVjb3JkaW5nIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLjwvZGl2PiA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1yZWNvcmQtYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsgaXNSZWNvcmRpbmcgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLXJlY29yZCBidG4tYWxsIGJ0bi1pY29uIGJ0bi1lbmFibGVkXCIgOiBcImJ0bi1yZWNvcmQgYnRuLWFsbCBidG4taWNvblwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhcnRSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQgPyBcImJ0bi1yZWNvcmQtY2lyY2xlXCIgOiBcImJ0bi1yZWNvcmQtY2lyY2xlLWRpc2FibGVkXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17IGlzUmVjb3JkaW5nID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZSd9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLWNvbG9yLXJlZCBidG4tYWxsIGJ0bi1pY29uIGJ0bi1lbmFibGVkXCIgOiBcImJ0bi1jb2xvci1ncmV5IGJ0bi1hbGwgYnRuLWljb25cIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBhdXNlUmVjb3JkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wYXVzZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLWNvbG9yLWJsYWNrIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLWNvbG9yLWdyZXkgYnRuLWFsbCBidG4taWNvblwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RvcFJlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGlzRG9uZSA/IFwid2lkZ2V0LXBsYXktYXVkaW8tc2hvd1wiIDogXCJ3aWRnZXQtcGxheS1hdWRpby1oaWRlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNsYXNzTmFtZT17XCJhdWRpby1wbGF5ZXJcIn0gY29udHJvbHMgc3JjPXt0aGlzLnN0YXRlLmF1ZGlvVXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSA8Y29kZT5hdWRpbzwvY29kZT4gZWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgeyBcIm1hcmdpblwiIDogXCIwcHggMHB4IDBweCAxNXB4XCJ9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0RvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNEb25lID8gXCJidG4tY29sb3ItYmxhY2sgYnRuLWFsbCBidG4taWNvbiBidG4tZW5hYmxlZFwiIDogXCJidG4taGlkZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNEb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGlzRG9uZSA/IFwiYnRuLWNvbG9yLWJsYWNrIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLWhpZGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG4iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlY29yZEF1ZGlvSFRNTC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=