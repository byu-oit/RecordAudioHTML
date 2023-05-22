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
                    })
                        .then(function (stream) {
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
                            /* Update audioFileUrl attribute with the Blob URL */
                            /*
                                                        if (this.props.fileUrl) {
                                                            this.props.fileUrl(audioUrl);
                                                        }
                            */
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
                var mediaRecorder = _this.state.mediaRecorder;
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
            //const microFlowName = this.props.microflowString!;
            //const entityName = this.props.entityString!;
            var actionFlow = _this.props.actionEntity;
            var counter = _this.saveCounter;
            mx.data.create({
                entity: "System.FileDocument",
                callback: function (obj) {
                    obj.set("Name", "recording.weba");
                    mx.data.saveDocument(obj.toString(), "new_audio" + counter + ".weba", {}, audioBlob, function () {
                        mx.data.commit({
                            mxobj: obj,
                            callback: function () {
                                if (actionFlow === null || actionFlow === void 0 ? void 0 : actionFlow.canExecute)
                                    actionFlow.execute();
                            },
                            error: function (error) {
                                mx.ui.error("Error attempting to save audio.\nContact app support\n\n Error type: (2) " + error);
                            }
                        });
                        /*
                                                if (actionFlow?.canExecute) {
                                                    actionFlow?.execute()
                                                } else {
                                                    mx.ui.error('Error calling action to handle new audio entity.\nContact app support\n\n Error type: (1)')
                                                }
                        */
                        /*
                                                mx.data.action({
                                                    params: {
                                                        applyto: "selection",
                                                        actionname: microFlowName,
                                                        guids: [obj.toString()]
                                                    },
                                                    callback: function (){},    // Success
                        
                                                    error: function(error) {
                                                        /!* Error in microflow call
                                                        Likely an incorrect Microflow name listed in widget options, check microflowName variable *!/
                                                        alert(`Error attempting to save audio.\nContact app support.\n\n (1) ${error}`)
                                                        mx.data.remove({
                                                            guid: obj.toString(),
                                                            callback: function () {},   // Success
                                                            error: function () {}       // Error deleting object
                                                        })
                        
                                                    }
                                                });
                        */
                    }, function (error) {
                        // Error in save document call
                        mx.ui.error("Error attempting to save audio.\nContact app support\n\n Error type: (2) " + error);
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () { },
                            error: function () { } // Error deleting object
                        });
                    });
                },
                error: function (error) {
                    // Error in create entity call
                    // Likely an incorrect entity name listed in widget options, check entityName variable
                    mx.ui.error("Error creating audio file.\nContact app support.\n\n Error type: (3) " + error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1JlY29yZEF1ZGlvSFRNTC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVjb3JkQXVkaW9IVE1MLmVkaXRvclByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY29yZEF1ZGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUmVjb3JkQXVkaW9IVE1MLmNzcz9lMTk5Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxj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Ozs7O0FDN0J4QixxQkFBcUIsbUJBQU8sQ0FBQyw4TkFBOEc7O0FBRTNJO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsa0MiLCJmaWxlIjoid2lkZ2V0cy9SZWNvcmRBdWRpb0hUTUwuZWRpdG9yUHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1JlY29yZEF1ZGlvSFRNTC5lZGl0b3JQcmV2aWV3LnRzeFwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblBsYWNlIHlvdXIgY3VzdG9tIENTUyBoZXJlXFxuKi9cXG4ubm90LXN1cHBvcnRlZCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ub3V0ZXItY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSENvIFJpbmdzaWRlIE5hcnJvdyBTU21cXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi53aWRnZXQtcmVjb3JkLWF1ZGlvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLypib3JkZXI6IDFweCBzb2xpZCBtZWRpdW1zZWFncmVlbjsqL1xcbn1cXG5cXG4ud2lkZ2V0LXBsYXktYXVkaW8tc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcbn1cXG5cXG4ud2lkZ2V0LXBsYXktYXVkaW8taGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcbn1cXG5cXG4uYnRuLWFsbCB7XFxuICBtYXJnaW46IDEycHggMTJweCAwIDA7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbn1cXG5cXG4uYnRuLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5idG4tZG93bmxvYWQge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5idG4taGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLWVuYWJsZWQ6aG92ZXIsIC5idG4tZW5hYmxlZDpmb2N1cywgLmJ0bi1kb3dubG9hZDpob3ZlciwgLmJ0bi1kb3dubG9hZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xcbn1cXG5cXG4uYnRuLWRpc2FibGVkOmhvdmVyLCAuYnRuLWRpc2FibGVkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XFxufVxcblxcbi5idG4tcmVjb3JkLWNpcmNsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbjogLTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ0bi1yZWNvcmQtY2lyY2xlLWRpc2FibGVkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ0bi1yZWNvcmQtY2lyY2xlLXNtYWxsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYnRuLXJlY29yZCB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmJ0bi1wYXVzZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbG9yLXJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbG9yLWJsYWNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1zdG9wIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1wbGF5IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1jb2xvci1ncmV5IHtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbn1cXG5cXG4uYXVkaW8tcGxheWVyIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcbn1cXG5cXG4vKiBDdXN0b21pemUgdGhlIGxvb2sgb2YgdGhlIDxhdWRpbz4gdGFnIHdpZGdldCBpbiBDaHJvbWl1bSBicm93c2Vycy4gKi9cXG4vKi53aWRnZXQtcGxheS1hdWRpby1zaG93IGF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsLCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgZmxleC1kaXJlY3Rpb246IHJvdzsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKiAgICAhKiBXZSB1c2UgZmxleC1zdGFydCBoZXJlIHRvIGVuc3VyZSB0aGF0IHRoZSBwbGF5IGJ1dHRvbiBpcyB2aXNpYmxlIGV2ZW4qL1xcbi8qICAgICAqIGlmIHdlIGFyZSB0b28gc21hbGwgdG8gc2hvdyBhbGwgY29udHJvbHMuKi9cXG4vKiAgICAgKiEqL1xcbi8qICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsqL1xcbi8qICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cXG4vKiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cXG4vKiAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgIHotaW5kZXg6IDA7Ki9cXG4vKiAgICBvdmVyZmxvdzogaGlkZGVuOyovXFxuLyogICAgdGV4dC1hbGlnbjogcmlnaHQ7Ki9cXG4vKiAgICBib3R0b206IGF1dG87Ki9cXG4vKiAgICBoZWlnaHQ6IDMwcHg7Ki9cXG4vKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuOCk7Ki9cXG4vKiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAwcHg7Ki9cXG4vKiAgICAhKiBUaGUgZHVyYXRpb24gaXMgYWxzbyBzcGVjaWZpZWQgaW4gTWVkaWFDb250cm9sRWxlbWVudHMuY3BwIGFuZCBMYXlvdXRUZXN0cy9tZWRpYS9tZWRpYS1jb250cm9scy5qcyAqISovXFxuLyogICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzOyovXFxuLyp9Ki9cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgSGVsbG9Xb3JsZFNhbXBsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZFNhbXBsZVwiO1xyXG5pbXBvcnQgeyBSZWNvcmRBdWRpb0hUTUxQcmV2aWV3UHJvcHMgfSBmcm9tIFwiLi4vdHlwaW5ncy9SZWNvcmRBdWRpb0hUTUxQcm9wc1wiO1xyXG5pbXBvcnQge1JlY29yZEF1ZGlvfSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY29yZEF1ZGlvXCI7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIHJlcXVpcmUobmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIHByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQ8UmVjb3JkQXVkaW9IVE1MUHJldmlld1Byb3BzPiB7XHJcbiAgICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgICAgICAvLyByZXR1cm4gPEhlbGxvV29ybGRTYW1wbGUgc2FtcGxlVGV4dD17dGhpcy5wcm9wcy5zYW1wbGVUZXh0fSAvPjtcclxuICAgICAgICAvLyBjb25zdCBpblRleHQgPSBgWyR7dGhpcy5wcm9wcy5pblRleHR9XWA7XHJcbiAgICAgICAgLy8gcmV0dXJuIDxSZWNvcmRBdWRpbyBpblRleHQ9e2luVGV4dH0vPjtcclxuICAgICAgICAvLyBjb25zdCBmaWxlID0gYFske3RoaXMucHJvcHMuZmlsZX1dYDtcclxuICAgICAgICAvLyByZXR1cm4gPFJlY29yZEF1ZGlvIGZpbGU9e2ZpbGV9Lz47XHJcbiAgICAgICAgLy8gY29uc3QgZmlsZVVybCA9IGBbJHt0aGlzLnByb3BzLmF1ZGlvRmlsZVVybH1gO1xyXG4gICAgICAgIHJldHVybiA8UmVjb3JkQXVkaW8vPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9SZWNvcmRBdWRpb0hUTUwuY3NzXCIpO1xyXG59XHJcbiIsImltcG9ydCB7IENTU1Byb3BlcnRpZXMsIENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QWN0aW9uVmFsdWUsIEVkaXRhYmxlVmFsdWUsIExpc3RWYWx1ZX0gZnJvbSBcIm1lbmRpeFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRBdWRpb1Byb3BzIHtcclxuICAgIC8vIGZpbGVVcmw/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG4gICAgdGFiSW5kZXg/OiBudW1iZXI7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGhhc0Vycm9yPzogYm9vbGVhbjtcclxuICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIG1pY3JvZmxvd1N0cmluZz86IHN0cmluZztcclxuICAgIGVudGl0eVN0cmluZz86IHN0cmluZztcclxuICAgIGFjdGlvbkVudGl0eT86IEFjdGlvblZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZEF1ZGlvU3RhdGUge1xyXG4gICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZ1N0YXJ0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzUGF1c2VkOiBib29sZWFuO1xyXG4gICAgaXNEb25lOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRCdXR0b25zRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG1lZGlhUmVjb3JkZXI/OiBNZWRpYVJlY29yZGVyO1xyXG4gICAgYXVkaW9Vcmw/OiBzdHJpbmc7XHJcbiAgICBhdWRpb0Jsb2I/OiBCbG9iO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb3JkQXVkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UmVjb3JkQXVkaW9Qcm9wcywgUmVjb3JkQXVkaW9TdGF0ZT4ge1xyXG5cclxuICAgIHN0YXRpYyBtaW1lVHlwZTogc3RyaW5nID0gJ2F1ZGlvL3dlYm07Y29kZWNzPW9wdXMnO1xyXG4gICAgc2F2ZUNvdW50ZXI6IG51bWJlciA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgYnJvd3NlciBzdXBwb3J0cyBnZXRVc2VyTWVkaWEgZm9yIHJlY29yZGluZyBiZWZvcmUgZG9pbmcgYW55dGhpbmcgZWxzZS5cclxuICAgICAqIElmIG5vdCBzdXBwb3J0ZWQsIHRoZSByZW5kZXIgZnVuY3Rpb24gd2lsbCBkaXNhYmxlIGJ1dHRvbnMuXHJcbiAgICAgKiBAcGFyYW0gcHJvcHNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlY29yZEF1ZGlvUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IGlzUmVjb3JkaW5nU3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xyXG4gICAgICAgICAgICBpZiAoTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQoUmVjb3JkQXVkaW8ubWltZVR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZ1N1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvKiBMaXN0IHRoZSByZWNvcmRpbmcgZGV2aWNlcyB0byBsZXQgdGhlIHVzZXIgY2hvb3NlLiBSZXR1cm5zIGFuIGFycmF5IG9mIElucHV0RGV2aWNlSW5mbyAqL1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlTGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldmljZUxpc3QgPSBkZXZpY2VMaXN0LmZpbHRlcigoZGV2aWNlSW5mbykgPT4gZGV2aWNlSW5mby5raW5kID09PSAnYXVkaW9pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXZpY2VzID0gJyArIGRldmljZUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZ1N1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZ1N1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzUmVjb3JkaW5nU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCByZWNvcmRpbmcgd2l0aCBnZXRVc2VyTWVkaWEuIFRyeSBhIGRpZmZlcmVudCBicm93c2VyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBTZXQgZGVmYXVsdHMgZm9yIHN0YXRlIHZhcmlhYmxlcyAqL1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nU3VwcG9ydGVkOiBpc1JlY29yZGluZ1N1cHBvcnRlZCxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmdTdGFydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1JlY29yZGluZ1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBSZXN1bWUgcmVjb3JkaW5nIGFmdGVyIHBhdXNlLiAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1JlY29yZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNSZWNvcmRpbmdTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgYXVkaW8gbmVlZGVkIGZvciB0aGlzIGFwcFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3RyZWFtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogSW5pdGlhbGl6ZSBhIG5ldyBNZWRpYVJlY29yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBSZWNvcmRBdWRpby5taW1lVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtLCBtZWRpYU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ2h1bmtzOiBhbnkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIG5ldyBkYXRhIGlzIGF2YWlsYWJsZSBmcm9tIHJlY29yZGluZyBkZXZpY2UuICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFhdmFpbGFibGVcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9DaHVua3MucHVzaChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgaXNSZWNvcmRpbmdTdGFydGVkOiB0cnVlLCBpc1JlY29yZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEV2ZW50IGxpc3RlbmVyIGZvciBcInN0b3BcIiBldmVudC4qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBDb2xsZWN0IGF1ZGlvIGNodW5rcyBpbnRvIGEgQmxvYiwgY3JlYXRlIFVSTCBmb3IgaXQsIHVwZGF0ZSBzdGF0ZS4gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzLCB7J3R5cGUnIDogUmVjb3JkQXVkaW8ubWltZVR5cGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBhdWRpb1VybDogYXVkaW9VcmwsIGF1ZGlvQmxvYjogYXVkaW9CbG9iLCBpc1JlY29yZGluZzogZmFsc2UsIGlzRG9uZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBVcGRhdGUgYXVkaW9GaWxlVXJsIGF0dHJpYnV0ZSB3aXRoIHRoZSBCbG9iIFVSTCAqL1xyXG4vKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsZVVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsZVVybChhdWRpb1VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaCggdHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IG1lZGlhUmVjb3JkZXI6IG1lZGlhUmVjb3JkZXJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBhdXNlUmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZWRpYVJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1JlY29yZGluZzogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVkaWFSZWNvcmRlciA9IHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7IC8vIHRlc3Rpbmcgb25seVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2F2ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSB0aGlzLnN0YXRlLmF1ZGlvQmxvYjtcclxuICAgICAgICAvL2NvbnN0IG1pY3JvRmxvd05hbWUgPSB0aGlzLnByb3BzLm1pY3JvZmxvd1N0cmluZyE7XHJcbiAgICAgICAgLy9jb25zdCBlbnRpdHlOYW1lID0gdGhpcy5wcm9wcy5lbnRpdHlTdHJpbmchO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbkZsb3cgPSB0aGlzLnByb3BzLmFjdGlvbkVudGl0eVxyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnNhdmVDb3VudGVyO1xyXG5cclxuICAgICAgICBteC5kYXRhLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGVudGl0eTogXCJTeXN0ZW0uRmlsZURvY3VtZW50XCIsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrIDogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgb2JqLnNldChcIk5hbWVcIiwgXCJyZWNvcmRpbmcud2ViYVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBteC5kYXRhLnNhdmVEb2N1bWVudChcclxuICAgICAgICAgICAgICAgICAgICBvYmoudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5ld19hdWRpb1wiICsgY291bnRlciArIFwiLndlYmFcIixcclxuICAgICAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2IgYXMgQmxvYixcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXguZGF0YS5jb21taXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXhvYmo6IG9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkZsb3c/LmNhbkV4ZWN1dGUpIGFjdGlvbkZsb3cuZXhlY3V0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gRXJyb3IgdHlwZTogKDIpICR7ZXJyb3J9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkZsb3c/LmNhbkV4ZWN1dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkZsb3c/LmV4ZWN1dGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXgudWkuZXJyb3IoJ0Vycm9yIGNhbGxpbmcgYWN0aW9uIHRvIGhhbmRsZSBuZXcgYXVkaW8gZW50aXR5LlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gRXJyb3IgdHlwZTogKDEpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4qL1xyXG4vKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteC5kYXRhLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseXRvOiBcInNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbm5hbWU6IG1pY3JvRmxvd05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZHM6IFtvYmoudG9TdHJpbmcoKV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCl7fSwgICAgLy8gU3VjY2Vzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8hKiBFcnJvciBpbiBtaWNyb2Zsb3cgY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpa2VseSBhbiBpbmNvcnJlY3QgTWljcm9mbG93IG5hbWUgbGlzdGVkIGluIHdpZGdldCBvcHRpb25zLCBjaGVjayBtaWNyb2Zsb3dOYW1lIHZhcmlhYmxlICohL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBFcnJvciBhdHRlbXB0aW5nIHRvIHNhdmUgYXVkaW8uXFxuQ29udGFjdCBhcHAgc3VwcG9ydC5cXG5cXG4gKDEpICR7ZXJyb3J9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteC5kYXRhLnJlbW92ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWQ6IG9iai50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge30sICAgLy8gU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge30gICAgICAgLy8gRXJyb3IgZGVsZXRpbmcgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4qL1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGluIHNhdmUgZG9jdW1lbnQgY2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteC51aS5lcnJvcihgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnRcXG5cXG4gRXJyb3IgdHlwZTogKDIpICR7ZXJyb3J9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXguZGF0YS5yZW1vdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZDogb2JqLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge30sICAgICAgIC8vIFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7fSAgICAgICAgICAgLy8gRXJyb3IgZGVsZXRpbmcgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3IgaW4gY3JlYXRlIGVudGl0eSBjYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBMaWtlbHkgYW4gaW5jb3JyZWN0IGVudGl0eSBuYW1lIGxpc3RlZCBpbiB3aWRnZXQgb3B0aW9ucywgY2hlY2sgZW50aXR5TmFtZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbXgudWkuZXJyb3IoYEVycm9yIGNyZWF0aW5nIGF1ZGlvIGZpbGUuXFxuQ29udGFjdCBhcHAgc3VwcG9ydC5cXG5cXG4gRXJyb3IgdHlwZTogKDMpICR7ZXJyb3J9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zYXZlQ291bnRlcisrXHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hdWRpb1VybCkge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3RhdGUuYXVkaW9VcmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZ1N0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRCdXR0b25zRW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb25kaXRpb25hbC1yZW5kZXJpbmcuaHRtbCB0byBzZXQgc3RhdGUgYW5kIHJlbmRlciBidXR0b24ocylcclxuICAgICAgICAvLyBhbmQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDEwOTI2NzcvdGVybmFyeS1vcGVyYXRvci1vbi1zdHlsZS13aXRoLXJlYWN0LWpzLWVzLTZcclxuICAgICAgICAvLyA8QnV0dG9uUmVjb3JkIGlzUmVjb3JkaW5nPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nfSByZWNvcmRIYW5kbGVyPXt0aGlzLnN0YXJ0UmVjb3JkaW5nfS8+XHJcbiAgICAgICAgLy8gPEJ1dHRvblBhdXNlIGlzUmVjb3JkaW5nPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nfSBwYXVzZUhhbmRsZXI9e3RoaXMucGF1c2VSZWNvcmRpbmd9Lz5cclxuXHJcbiAgICAgICAgY29uc3QgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSB0aGlzLnN0YXRlLmlzUmVjb3JkaW5nU3VwcG9ydGVkO1xyXG4gICAgICAgIGNvbnN0IGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQgPSB0aGlzLnN0YXRlLmlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgaXNSZWNvcmRpbmcgPSB0aGlzLnN0YXRlLmlzUmVjb3JkaW5nO1xyXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IHRoaXMuc3RhdGUuaXNEb25lO1xyXG4gICAgICAgIHJldHVybiAhaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPyA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1zdXBwb3J0ZWRcIj5SZWNvcmRpbmcgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuPC9kaXY+IDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXJlY29yZC1hdWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyBpc1JlY29yZGluZyA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUmVjb3JkQnV0dG9uc0VuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc1JlY29yZEJ1dHRvbnNFbmFibGVkID8gXCJidG4tcmVjb3JkIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLXJlY29yZCBidG4tYWxsIGJ0bi1pY29uXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGFydFJlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLXJlY29yZC1jaXJjbGVcIiA6IFwiYnRuLXJlY29yZC1jaXJjbGUtZGlzYWJsZWRcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsgaXNSZWNvcmRpbmcgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJ30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUmVjb3JkQnV0dG9uc0VuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc1JlY29yZEJ1dHRvbnNFbmFibGVkID8gXCJidG4tY29sb3ItcmVkIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLWNvbG9yLWdyZXkgYnRuLWFsbCBidG4taWNvblwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucGF1c2VSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBhdXNlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUmVjb3JkQnV0dG9uc0VuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc1JlY29yZEJ1dHRvbnNFbmFibGVkID8gXCJidG4tY29sb3ItYmxhY2sgYnRuLWFsbCBidG4taWNvbiBidG4tZW5hYmxlZFwiIDogXCJidG4tY29sb3ItZ3JleSBidG4tYWxsIGJ0bi1pY29uXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdG9wUmVjb3JkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdG9wXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaXNEb25lID8gXCJ3aWRnZXQtcGxheS1hdWRpby1zaG93XCIgOiBcIndpZGdldC1wbGF5LWF1ZGlvLWhpZGVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY2xhc3NOYW1lPXtcImF1ZGlvLXBsYXllclwifSBjb250cm9scyBzcmM9e3RoaXMuc3RhdGUuYXVkaW9Vcmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIDxjb2RlPmF1ZGlvPC9jb2RlPiBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyB7IFwibWFyZ2luXCIgOiBcIjBweCAwcHggMHB4IDE1cHhcIn0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc0RvbmUgPyBcImJ0bi1jb2xvci1ibGFjayBidG4tYWxsIGJ0bi1pY29uIGJ0bi1lbmFibGVkXCIgOiBcImJ0bi1oaWRlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZVJlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCIgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0RvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNEb25lID8gXCJidG4tY29sb3ItYmxhY2sgYnRuLWFsbCBidG4taWNvbiBidG4tZW5hYmxlZFwiIDogXCJidG4taGlkZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZVJlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcbiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVjb3JkQXVkaW9IVE1MLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==