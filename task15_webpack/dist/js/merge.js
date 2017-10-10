/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var carouse = __webpack_require__(1),
    gotop = __webpack_require__(2)
var carouse1 = new carouse($('#carousel'))
carouse1.autoPlay()
var gotop1 = new gotop($('.main'))



/***/ }),
/* 1 */
/***/ (function(module, exports) {

//commonjs定义模块
    function ActiveCarousel($mainBox){
        this.mainBox = $mainBox;
        this.container = this.mainBox.find($('.container'));
        this.picItems = this.container.children($('li'))
        this.nextBtn = this.mainBox.find($('.next'));
        this.preBtn = this.mainBox.find($('.pre'));
        this.pageIndex = 0;
        this.imgCount = this.container.find($('li')).length;
        this.imgWidth = $(window).width();
        this.step = -this.imgWidth;
        this.bulletItems = this.mainBox.find($('.bullet li'));

        this.init();
        this.bind();
        this.selectMove()
    }
    ActiveCarousel.prototype = {
        init: function(){
            this.container.append(this.picItems.first().clone())
            this.container.prepend(this.picItems.last().clone())
            this.container.width((this.imgCount + 2)*this.imgWidth)
            this.picItems = this.container.children($('li'));
            this.picItems.width(this.imgWidth)
            this.container.css({left: -this.imgWidth})
        },
        playNext: function(n){
            if(this.pageIndex >= 3){
                this.container.css({left: '0'})
                this.pageIndex = -1;
                this.step = 0;
            }
            this.step += -this.imgWidth*n;
            this.pageIndex += n;
            this.container.animate({
                left: this.step
            },500)
            console.log(this.pageIndex)
        },
        playPre: function(n){
            if(this.pageIndex <= 0){
                this.container.css({left: -this.imgWidth*4})
                this.pageIndex = 4;
                this.step = -this.imgWidth*4;
            }
            this.step += this.imgWidth*n;
            this.pageIndex -= n;
            this.container.animate({
                left: this.step
            },500)
            console.log(this.pageIndex)
        },
        bind: function(){
            var _this = this;
            this.nextBtn.on('click',function(){
                _this.playNext(1);
                _this.bulletMove();
            })
            this.preBtn.on('click',function(){
                _this.playPre(1);
                _this.bulletMove();
            })
        },
        bulletMove: function(){
            this.bulletItems.removeClass('active')
            this.bulletItems.eq(this.pageIndex).addClass('active')
        },
        selectMove: function(){
            var _this = this;
            this.mainBox.find($('.bullet')).on('click','li',function() {
                var index = $(this).index();
                var n = index - _this.pageIndex;
                if (n > 0) {
                    _this.playNext(n)
                } else {
                    _this.playPre(-n)
                }
                _this.bulletMove()
            })
        },
        autoPlay: function(){
            var _this = this;
            setInterval(function(){
                _this.playNext(1);
                _this.bulletMove();
            },3000)
        }
    }
    module.exports = ActiveCarousel;

// var carsousel = new ActiveCarousel($('.carousel-box').eq(0))
// var carsouse2 = new ActiveCarousel($('.carousel-box').eq(1))
// carsousel.autoPlay();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

 function GoTop($container) {
        this.$container = $container;
        this.init();
        this.bind();
    }
    GoTop.prototype = {
        init: function(){
            this.$gotopButton = $('<a></a>');//创建用标签，选择用tagname
            console.log(this.$gotopButton)
            this.$gotopButton.attr('class','gotop');
            this.$container.append(this.$gotopButton);
            this.$gotopButton.css({top: $(window).height()-60, left: $(window).width()-80});
        },
        bind: function(){
            this.$gotopButton.on('click',()=>{
                $(window).scrollTop(0);
            })
        }
    };
    module.exports = GoTop;



/***/ })
/******/ ]);