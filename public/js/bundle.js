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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tiny-date-picker/dist/date-range-picker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-date-picker/dist/date-range-picker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  /**
   * @file A generic set of mutation-free date functions.
   */

  /**
   * now returns the current date without any time values
   *
   * @returns {Date}
   */
  function now() {
    var dt = new Date();
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  /**
   * dateEq compares two dates
   *
   * @param {Date} date1 the first date
   * @param {Date} date2 the second date
   * @returns {boolean}
   */
  function datesEq(date1, date2) {
    return (date1 && date1.toDateString()) === (date2 && date2.toDateString());
  }

  /**
   * shiftDay shifts the specified date by n days
   *
   * @param {Date} dt
   * @param {number} n
   * @returns {Date}
   */
  function shiftDay(dt, n) {
    dt = new Date(dt);
    dt.setDate(dt.getDate() + n);
    return dt;
  }

  /**
   * shiftMonth shifts the specified date by a specified number of months
   *
   * @param {Date} dt
   * @param {number} n
   * @param {boolean} wrap optional, if true, does not change year
   *                       value, defaults to false
   * @returns {Date}
   */
  function shiftMonth(dt, n, wrap) {
    dt = new Date(dt);

    var dayOfMonth = dt.getDate();
    var month = dt.getMonth() + n;

    dt.setDate(1);
    dt.setMonth(wrap ? (12 + month) % 12 : month);
    dt.setDate(dayOfMonth);

    // If dayOfMonth = 31, but the target month only has 30 or 29 or whatever...
    // head back to the max of the target month
    if (dt.getDate() < dayOfMonth) {
      dt.setDate(0);
    }

    return dt;
  }

  /**
   * shiftYear shifts the specified date by n years
   *
   * @param {Date} dt
   * @param {number} n
   * @returns {Date}
   */
  function shiftYear(dt, n) {
    dt = new Date(dt);
    dt.setFullYear(dt.getFullYear() + n);
    return dt;
  }

  /**
   * setYear changes the specified date to the specified year
   *
   * @param {Date} dt
   * @param {number} year
   */
  function setYear(dt, year) {
    dt = new Date(dt);
    dt.setFullYear(year);
    return dt;
  }

  /**
   * setMonth changes the specified date to the specified month
   *
   * @param {Date} dt
   * @param {number} month
   */
  function setMonth(dt, month) {
    return shiftMonth(dt, month - dt.getMonth());
  }

  /**
   * dateOrParse creates a function which, given a date or string, returns a date
   *
   * @param {function} parse the function used to parse strings
   * @returns {function}
   */
  function dateOrParse(parse) {
    return function (dt) {
      return dropTime(typeof dt === 'string' ? parse(dt) : dt);
    };
  }

  /**
   * constrainDate returns dt or min/max depending on whether dt is out of bounds (inclusive)
   *
   * @export
   * @param {Date} dt
   * @param {Date} min
   * @param {Date} max
   * @returns {Date}
   */
  function constrainDate(dt, min, max) {
    return (dt < min) ? min :
           (dt > max) ? max :
           dt;
  }

  function dropTime(dt) {
    dt = new Date(dt);
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  /**
   * @file Utility functions for function manipulation.
   */

  /**
   * bufferFn buffers calls to fn so they only happen every ms milliseconds
   *
   * @param {number} ms number of milliseconds
   * @param {function} fn the function to be buffered
   * @returns {function}
   */
  function bufferFn(ms, fn) {
    var timeout = undefined;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(fn, ms);
    };
  }

  /**
   * noop is a function which does nothing at all.
   */
  function noop() { }

  /**
   * copy properties from object o2 to object o1.
   *
   * @params {Object} o1
   * @params {Object} o2
   * @returns {Object}
   */
  function cp() {
    var args = arguments;
    var o1 = args[0];
    for (var i = 1; i < args.length; ++i) {
      var o2 = args[i] || {};
      for (var key in o2) {
        o1[key] = o2[key];
      }
    }
    return o1;
  }

  /**
   * @file Responsible for sanitizing and creating date picker options.
   */

  var english = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    today: 'Today',
    clear: 'Clear',
    close: 'Close',
  };

  /**
   * DatePickerOptions constructs a new date picker options object, overriding
   * default values with any values specified in opts.
   *
   * @param {DatePickerOptions} opts
   * @returns {DatePickerOptions}
   */
  function DatePickerOptions(opts) {
    opts = opts || {};
    opts = cp(defaults(), opts);
    var parse = dateOrParse(opts.parse);
    opts.lang = cp(english, opts.lang);
    opts.parse = parse;
    opts.inRange = makeInRangeFn(opts);
    opts.min = parse(opts.min || shiftYear(now(), -100));
    opts.max = parse(opts.max || shiftYear(now(), 100));
    opts.hilightedDate = opts.parse(opts.hilightedDate);

    return opts;
  }

  function defaults() {
    return {
      lang: english,

      // Possible values: dp-modal, dp-below, dp-permanent
      mode: 'dp-modal',

      // The date to hilight initially if the date picker has no
      // initial value.
      hilightedDate: now(),

      format: function (dt) {
        return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear();
      },

      parse: function (str) {
        var date = new Date(str);
        return isNaN(date) ? now() : date;
      },

      dateClass: function () { },

      inRange: function () {
        return true;
      }
    };
  }

  function makeInRangeFn(opts) {
    var inRange = opts.inRange; // Cache this version, and return a variant

    return function (dt, dp) {
      return inRange(dt, dp) && opts.min <= dt && opts.max >= dt;
    };
  }

  /**
   * @file Helper functions for dealing with dom elements.
   */

  var Key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    enter: 13,
    esc: 27,
  };

  /**
   * on attaches an event handler to the specified element, and returns an
   * off function which can be used to remove the handler.
   *
   * @param {string} evt the name of the event to handle
   * @param {HTMLElement} el the element to attach to
   * @param {function} handler the event handler
   * @returns {function} the off function
   */
  function on(evt, el, handler) {
    el.addEventListener(evt, handler, true);

    return function () {
      el.removeEventListener(evt, handler, true);
    };
  }

  var CustomEvent = shimCustomEvent();

  function shimCustomEvent() {
    var CustomEvent = window.CustomEvent;

    if (typeof CustomEvent !== 'function') {
      CustomEvent = function (event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };

      CustomEvent.prototype = window.Event.prototype;
    }

    return CustomEvent;
  }

  /**
   * @file Manages the calendar / day-picker view.
   */

  var dayPicker = {
    onKeyDown: keyDown,
    onClick: {
      'dp-day': selectDay,
      'dp-next': gotoNextMonth,
      'dp-prev': gotoPrevMonth,
      'dp-today': selectToday,
      'dp-clear': clear,
      'dp-close': close,
      'dp-cal-month': showMonthPicker,
      'dp-cal-year': showYearPicker,
    },
    render: render
  };

  /**
   * view renders the calendar (day picker) as an HTML string.
   *
   * @param {DatePickerContext} context the date picker being rendered
   * @returns {string}
   */
  function render(dp) {
    var opts = dp.opts;
    var lang = opts.lang;
    var state = dp.state;
    var dayNames = lang.days;
    var dayOffset = opts.dayOffset || 0;
    var selectedDate = state.selectedDate;
    var hilightedDate = state.hilightedDate;
    var hilightedMonth = hilightedDate.getMonth();
    var today = now().getTime();

    return (
      '<div class="dp-cal">' +
        '<header class="dp-cal-header">' +
          '<button tabindex="-1" type="button" class="dp-prev">Prev</button>' +
          '<button tabindex="-1" type="button" class="dp-cal-month">' +
            lang.months[hilightedMonth] +
          '</button>' +
          '<button tabindex="-1" type="button" class="dp-cal-year">' +
            hilightedDate.getFullYear() +
          '</button>' +
          '<button tabindex="-1" type="button" class="dp-next">Next</button>' +
        '</header>' +
        '<div class="dp-days">' +
          dayNames.map(function (name, i) {
            return (
              '<span class="dp-col-header">' + dayNames[(i + dayOffset) % dayNames.length] + '</span>'
            );
          }).join('') +
          mapDays(hilightedDate, dayOffset, function (date) {
            var isNotInMonth = date.getMonth() !== hilightedMonth;
            var isDisabled = !opts.inRange(date);
            var isToday = date.getTime() === today;
            var className = 'dp-day';
            className += (isNotInMonth ? ' dp-edge-day' : '');
            className += (datesEq(date, hilightedDate) ? ' dp-current' : '');
            className += (datesEq(date, selectedDate) ? ' dp-selected' : '');
            className += (isDisabled ? ' dp-day-disabled' : '');
            className += (isToday ? ' dp-day-today' : '');
            className += ' ' + opts.dateClass(date, dp);

            return (
              '<button tabindex="-1" type="button" class="' + className + '" data-date="' + date.getTime() + '">' +
                date.getDate() +
              '</button>'
            );
          }) +
        '</div>' +
        '<footer class="dp-cal-footer">' +
          '<button tabindex="-1" type="button" class="dp-today">' + lang.today + '</button>' +
          '<button tabindex="-1" type="button" class="dp-clear">' + lang.clear + '</button>' +
          '<button tabindex="-1" type="button" class="dp-close">' + lang.close + '</button>' +
        '</footer>' +
      '</div>'
    );
  }

  /**
   * keyDown handles the key down event for the day-picker
   *
   * @param {Event} e
   * @param {DatePickerContext} dp
   */
  function keyDown(e, dp) {
    var key = e.keyCode;
    var shiftBy =
      (key === Key.left) ? -1 :
      (key === Key.right) ? 1 :
      (key === Key.up) ? -7 :
      (key === Key.down) ? 7 :
      0;

    if (key === Key.esc) {
      dp.close();
    } else if (shiftBy) {
      e.preventDefault();
      dp.setState({
        hilightedDate: shiftDay(dp.state.hilightedDate, shiftBy)
      });
    }
  }

  function selectToday(e, dp) {
    dp.setState({
      selectedDate: now(),
    });
  }

  function clear(e, dp) {
    dp.setState({
      selectedDate: null,
    });
  }

  function close(e, dp) {
    dp.close();
  }

  function showMonthPicker(e, dp) {
    dp.setState({
      view: 'month'
    });
  }

  function showYearPicker(e, dp) {
    dp.setState({
      view: 'year'
    });
  }

  function gotoNextMonth(e, dp) {
    var hilightedDate = dp.state.hilightedDate;
    dp.setState({
      hilightedDate: shiftMonth(hilightedDate, 1)
    });
  }

  function gotoPrevMonth(e, dp) {
    var hilightedDate = dp.state.hilightedDate;
    dp.setState({
      hilightedDate: shiftMonth(hilightedDate, -1)
    });
  }

  function selectDay(e, dp) {
    dp.setState({
      selectedDate: new Date(parseInt(e.target.getAttribute('data-date'))),
    });
  }

  function mapDays(currentDate, dayOffset, fn) {
    var result = '';
    var iter = new Date(currentDate);
    iter.setDate(1);
    iter.setDate(1 - iter.getDay() + dayOffset);

    // If we are showing monday as the 1st of the week,
    // and the monday is the 2nd of the month, the sunday won't
    // show, so we need to shift backwards
    if (dayOffset && iter.getDate() === dayOffset + 1) {
      iter.setDate(dayOffset - 6);
    }

    // We are going to have 6 weeks always displayed to keep a consistent
    // calendar size
    for (var day = 0; day < (6 * 7); ++day) {
      result += fn(iter);
      iter.setDate(iter.getDate() + 1);
    }

    return result;
  }

  /**
   * @file Manages the month-picker view.
   */

  var monthPicker = {
    onKeyDown: keyDown$1,
    onClick: {
      'dp-month': onChooseMonth
    },
    render: render$1
  };

  function onChooseMonth(e, dp) {
    dp.setState({
      hilightedDate: setMonth(dp.state.hilightedDate, parseInt(e.target.getAttribute('data-month'))),
      view: 'day',
    });
  }

  /**
   * render renders the month picker as an HTML string
   *
   * @param {DatePickerContext} dp the date picker context
   * @returns {string}
   */
  function render$1(dp) {
    var opts = dp.opts;
    var lang = opts.lang;
    var months = lang.months;
    var currentDate = dp.state.hilightedDate;
    var currentMonth = currentDate.getMonth();

    return (
      '<div class="dp-months">' +
        months.map(function (month, i) {
          var className = 'dp-month';
          className += (currentMonth === i ? ' dp-current' : '');

          return (
            '<button tabindex="-1" type="button" class="' + className + '" data-month="' + i + '">' +
              month +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  /**
   * keyDown handles keydown events that occur in the month picker
   *
   * @param {Event} e
  * @param {DatePickerContext} dp
   */
  function keyDown$1(e, dp) {
    var key = e.keyCode;
    var shiftBy =
      (key === Key.left) ? -1 :
      (key === Key.right) ? 1 :
      (key === Key.up) ? -3 :
      (key === Key.down) ? 3 :
      0;

    if (key === Key.esc) {
      dp.setState({
        view: 'day',
      });
    } else if (shiftBy) {
      e.preventDefault();
      dp.setState({
        hilightedDate: shiftMonth(dp.state.hilightedDate, shiftBy, true)
      });
    }
  }

  /**
   * @file Manages the year-picker view.
   */

  var yearPicker = {
    render: render$2,
    onKeyDown: keyDown$2,
    onClick: {
      'dp-year': onChooseYear
    },
  };

  /**
   * view renders the year picker as an HTML string.
   *
   * @param {DatePickerContext} dp the date picker context
   * @returns {string}
   */
  function render$2(dp) {
    var state = dp.state;
    var currentYear = state.hilightedDate.getFullYear();
    var selectedYear = state.selectedDate.getFullYear();

    return (
      '<div class="dp-years">' +
        mapYears(dp, function (year) {
          var className = 'dp-year';
          className += (year === currentYear ? ' dp-current' : '');
          className += (year === selectedYear ? ' dp-selected' : '');

          return (
            '<button tabindex="-1" type="button" class="' + className + '" data-year="' + year + '">' +
              year +
            '</button>'
          );
        }) +
      '</div>'
    );
  }

  function onChooseYear(e, dp) {
    dp.setState({
      hilightedDate: setYear(dp.state.hilightedDate, parseInt(e.target.getAttribute('data-year'))),
      view: 'day',
    });
  }

  function keyDown$2(e, dp) {
    var key = e.keyCode;
    var opts = dp.opts;
    var shiftBy =
      (key === Key.left || key === Key.up) ? 1 :
      (key === Key.right || key === Key.down) ? -1 :
      0;

    if (key === Key.esc) {
      dp.setState({
        view: 'day',
      });
    } else if (shiftBy) {
      e.preventDefault();
      var shiftedYear = shiftYear(dp.state.hilightedDate, shiftBy);

      dp.setState({
        hilightedDate: constrainDate(shiftedYear, opts.min, opts.max),
      });
    }
  }

  function mapYears(dp, fn) {
    var result = '';
    var max = dp.opts.max.getFullYear();

    for (var i = max; i >= dp.opts.min.getFullYear(); --i) {
      result += fn(i);
    }

    return result;
  }

  /**
   * @file Defines the base date picker behavior, overridden by various modes.
   */

  var views = {
    day: dayPicker,
    year: yearPicker,
    month: monthPicker
  };

  function BaseMode(input, emit, opts) {
    var detatchInputEvents; // A function that detaches all events from the input
    var closing = false; // A hack to prevent calendar from re-opening when closing.
    var selectedDate; // The currently selected date
    var dp = {
      // The root DOM element for the date picker, initialized on first open.
      el: undefined,
      opts: opts,
      shouldFocusOnBlur: true,
      shouldFocusOnRender: true,
      state: initialState(),
      adjustPosition: noop,
      containerHTML: '<div class="dp"></div>',

      attachToDom: function () {
        document.body.appendChild(dp.el);
      },

      updateInput: function (selectedDate) {
        var e = new CustomEvent('change', {bubbles: true});
        e.simulated = true;
        input.value = selectedDate ? opts.format(selectedDate) : '';
        input.dispatchEvent(e);
      },

      computeSelectedDate: function () {
        return opts.parse(input.value);
      },

      currentView: function() {
        return views[dp.state.view];
      },

      open: function () {
        if (closing) {
          return;
        }

        if (!dp.el) {
          dp.el = createContainerElement(opts, dp.containerHTML);
          attachContainerEvents(dp);
        }

        selectedDate = constrainDate(dp.computeSelectedDate(), opts.min, opts.max);
        dp.state.hilightedDate = selectedDate || opts.hilightedDate;
        dp.state.view = 'day';

        dp.attachToDom();
        dp.render();

        emit('open');
      },

      isVisible: function () {
        return !!dp.el && !!dp.el.parentNode;
      },

      hasFocus: function () {
        var focused = document.activeElement;
        return dp.el &&
          dp.el.contains(focused) &&
          focused.className.indexOf('dp-focuser') < 0;
      },

      shouldHide: function () {
        return dp.isVisible();
      },

      close: function (becauseOfBlur) {
        var el = dp.el;

        if (!dp.isVisible()) {
          return;
        }

        if (el) {
          var parent = el.parentNode;
          parent && parent.removeChild(el);
        }

        closing = true;

        if (becauseOfBlur && dp.shouldFocusOnBlur) {
          focusInput(input);
        }

        // When we close, the input often gains refocus, which
        // can then launch the date picker again, so we buffer
        // a bit and don't show the date picker within N ms of closing
        setTimeout(function() {
          closing = false;
        }, 100);

        emit('close');
      },

      destroy: function () {
        dp.close();
        detatchInputEvents();
      },

      render: function () {
        if (!dp.el) {
          return;
        }

        var hadFocus = dp.hasFocus();
        var html = dp.currentView().render(dp);
        html && (dp.el.firstChild.innerHTML = html);

        dp.adjustPosition();

        if (hadFocus || dp.shouldFocusOnRender) {
          focusCurrent(dp);
        }
      },

      // Conceptually similar to setState in React, updates
      // the view state and re-renders.
      setState: function (state) {
        for (var key in state) {
          dp.state[key] = state[key];
        }

        emit('statechange');
        dp.render();
      },
    };

    detatchInputEvents = attachInputEvents(input, dp);

    // Builds the initial view state
    // selectedDate is a special case and causes changes to hilightedDate
    // hilightedDate is set on open, so remains undefined initially
    // view is the current view (day, month, year)
    function initialState() {
      return {
        get selectedDate() {
          return selectedDate;
        },
        set selectedDate(dt) {
          if (dt && !opts.inRange(dt)) {
            return;
          }

          if (dt) {
            selectedDate = new Date(dt);
            dp.state.hilightedDate = selectedDate;
          } else {
            selectedDate = dt;
          }

          dp.updateInput(selectedDate);
          emit('select');
          dp.close();
        },
        view: 'day',
      };
    }

    return dp;
  }

  function createContainerElement(opts, containerHTML) {
    var el = document.createElement('div');

    el.className = opts.mode;
    el.innerHTML = containerHTML;

    return el;
  }

  function attachInputEvents(input, dp) {
    var bufferShow = bufferFn(5, function () {
      if (dp.shouldHide()) {
        dp.close();
      } else {
        dp.open();
      }
    });

    var off = [
      on('blur', input, bufferFn(150, function () {
        if (!dp.hasFocus()) {
          dp.close(true);
        }
      })),

      on('mousedown', input, function () {
        if (input === document.activeElement) {
          bufferShow();
        }
      }),

      on('focus', input, bufferShow),

      on('input', input, function (e) {
        var date = dp.opts.parse(e.target.value);
        isNaN(date) || dp.setState({
          hilightedDate: date
        });
      }),
    ];

    // Unregister all events that were registered above.
    return function() {
      off.forEach(function (f) {
        f();
      });
    };
  }

  function focusCurrent(dp) {
    var current = dp.el.querySelector('.dp-current');
    return current && current.focus();
  }

  function attachContainerEvents(dp) {
    var el = dp.el;
    var calEl = el.querySelector('.dp');

    // Hack to get iOS to show active CSS states
    el.ontouchstart = noop;

    function onClick(e) {
      e.target.className.split(' ').forEach(function(evt) {
        var handler = dp.currentView().onClick[evt];
        handler && handler(e, dp);
      });
    }

    // The calender fires a blur event *every* time we redraw
    // this means we need to buffer the blur event to see if
    // it still has no focus after redrawing, and only then
    // do we return focus to the input. A possible other approach
    // would be to set context.redrawing = true on redraw and
    // set it to false in the blur event.
    on('blur', calEl, bufferFn(150, function () {
      if (!dp.hasFocus()) {
        dp.close(true);
      }
    }));

    on('keydown', el, function (e) {
      if (e.keyCode === Key.enter) {
        onClick(e);
      } else {
        dp.currentView().onKeyDown(e, dp);
      }
    });

    // If the user clicks in non-focusable space, but
    // still within the date picker, we don't want to
    // hide, so we need to hack some things...
    on('mousedown', calEl, function (e) {
      e.target.focus && e.target.focus(); // IE hack
      if (document.activeElement !== e.target) {
        e.preventDefault();
        focusCurrent(dp);
      }
    });

    on('click', el, onClick);
  }

  function focusInput(input) {
    // When the modal closes, we need to focus the original input so the
    // user can continue tabbing from where they left off.
    input.focus();

    // iOS zonks out if we don't blur the input, so...
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      input.blur();
    }
  }

  /**
   * @file Defines the modal date picker behavior.
   */

  function ModalMode(input, emit, opts) {
    var dp = BaseMode(input, emit, opts);

    // In modal mode, users really shouldn't be able to type in
    // the input, as all input is done via the calendar.
    input.readonly = true;

    // In modal mode, we need to know when the user has tabbed
    // off the end of the calendar, and set focus to the original
    // input. To do this, we add a special element to the DOM.
    // When the user tabs off the bottom of the calendar, they
    // will tab onto this element.
    dp.containerHTML += '<a href="#" class="dp-focuser">.</a>';

    return dp;
  }

  /**
   * @file Defines the dropdown date picker behavior.
   */

  function DropdownMode(input, emit, opts) {
    var dp = BaseMode(input, emit, opts);

    dp.shouldFocusOnBlur = false;

    Object.defineProperty(dp, 'shouldFocusOnRender', {
      get: function() {
        return input !== document.activeElement;
      }
    });

    dp.adjustPosition = function () {
      autoPosition(input, dp);
    };

    return dp;
  }

  function autoPosition(input, dp) {
    var inputPos = input.getBoundingClientRect();
    var win = window;

    adjustCalY(dp, inputPos, win);
    adjustCalX(dp, inputPos, win);

    dp.el.style.visibility = '';
  }

  function adjustCalX(dp, inputPos, win) {
    var cal = dp.el;
    var scrollLeft = win.pageXOffset;
    var inputLeft = inputPos.left + scrollLeft;
    var maxRight = win.innerWidth + scrollLeft;
    var offsetWidth = cal.offsetWidth;
    var calRight = inputLeft + offsetWidth;
    var shiftedLeft = maxRight - offsetWidth;
    var left = calRight > maxRight && shiftedLeft > 0 ? shiftedLeft : inputLeft;

    cal.style.left = left + 'px';
  }

  function adjustCalY(dp, inputPos, win) {
    var cal = dp.el;
    var scrollTop = win.pageYOffset;
    var inputTop = scrollTop + inputPos.top;
    var calHeight = cal.offsetHeight;
    var belowTop = inputTop + inputPos.height + 8;
    var aboveTop = inputTop - calHeight - 8;
    var isAbove = (aboveTop > 0 && belowTop + calHeight > scrollTop + win.innerHeight);
    var top = isAbove ? aboveTop : belowTop;

    if (cal.classList) {
      cal.classList.toggle('dp-is-above', isAbove);
      cal.classList.toggle('dp-is-below', !isAbove);
    }
    cal.style.top = top + 'px';
  }

  /**
   * @file Defines the permanent date picker behavior.
   */

  function PermanentMode(root, emit, opts) {
    var dp = BaseMode(root, emit, opts);

    dp.close = noop;
    dp.destroy = noop;
    dp.updateInput = noop;
    dp.shouldFocusOnRender = opts.shouldFocusOnRender;

    dp.computeSelectedDate = function () {
      return opts.hilightedDate;
    };

    dp.attachToDom = function () {
      root.appendChild(dp.el);
    };

    dp.open();

    return dp;
  }

  /**
   * @file Defines the various date picker modes (modal, dropdown, permanent)
   */

  function Mode(input, emit, opts) {
    input = input && input.tagName ? input : document.querySelector(input);

    if (opts.mode === 'dp-modal') {
      return ModalMode(input, emit, opts);
    }

    if (opts.mode === 'dp-below') {
      return DropdownMode(input, emit, opts);
    }

    if (opts.mode === 'dp-permanent') {
      return PermanentMode(input, emit, opts);
    }
  }

  /**
   * @file Defines simple event emitter behavior.
   */

  /**
   * Emitter constructs a new emitter object which has on/off methods.
   *
   * @returns {EventEmitter}
   */
  function Emitter() {
    var handlers = {};

    function onOne(name, handler) {
      (handlers[name] = (handlers[name] || [])).push(handler);
    }

    function onMany(fns) {
      for (var name in fns) {
        onOne(name, fns[name]);
      }
    }

    return {
      on: function (name, handler) {
        if (handler) {
          onOne(name, handler);
        } else {
          onMany(name);
        }

        return this;
      },

      emit: function (name, arg) {
        (handlers[name] || []).forEach(function (handler) {
          handler(name, arg);
        });
      },

      off: function (name, handler) {
        if (!name) {
          handlers = {};
        } else if (!handler) {
          handlers[name] = [];
        } else {
          handlers[name] = (handlers[name] || []).filter(function (h) {
            return h !== handler;
          });
        }

        return this;
      }
    };
  }

  /**
   * @file The root date picker file, defines public exports for the library.
   */

  /**
  * The date picker language configuration
  * @typedef {Object} LangOptions
  * @property {Array.<string>} [days] - Days of the week
  * @property {Array.<string>} [months] - Months of the year
  * @property {string} today - The label for the 'today' button
  * @property {string} close - The label for the 'close' button
  * @property {string} clear - The label for the 'clear' button
  */

  /**
  * The configuration options for a date picker.
  *
  * @typedef {Object} DatePickerOptions
  * @property {LangOptions} [lang] - Configures the label text, defaults to English
  * @property {('dp-modal'|'dp-below'|'dp-permanent')} [mode] - The date picker mode, defaults to 'dp-modal'
  * @property {(string|Date)} [hilightedDate] - The date to hilight if no date is selected
  * @property {function(string|Date):Date} [parse] - Parses a date, the complement of the "format" function
  * @property {function(Date):string} [format] - Formats a date for displaying to user
  * @property {function(Date):string} [dateClass] - Associates a custom CSS class with a date
  * @property {function(Date):boolean} [inRange] - Indicates whether or not a date is selectable
  * @property {(string|Date)} [min] - The minimum selectable date (inclusive, default 100 years ago)
  * @property {(string|Date)} [max] - The maximum selectable date (inclusive, default 100 years from now)
  */

  /**
  * The state values for the date picker
  *
  * @typedef {Object} DatePickerState
  * @property {string} view - The current view 'day' | 'month' | 'year'
  * @property {Date} selectedDate - The date which has been selected by the user
  * @property {Date} hilightedDate - The date which is currently hilighted / active
  */

  /**
  * An instance of TinyDatePicker
  *
  * @typedef {Object} DatePicker
  * @property {DatePickerState} state - The values currently displayed.
  * @property {function} on - Adds an event handler
  * @property {function} off - Removes an event handler
  * @property {function} setState - Changes the current state of the date picker
  * @property {function} open - Opens the date picker
  * @property {function} close - Closes the date picker
  * @property {function} destroy - Destroys the date picker (removing all handlers from the input, too)
  */

  /**
   * TinyDatePicker constructs a new date picker for the specified input
   *
   * @param {HTMLElement | string} input The input or CSS selector associated with the datepicker
   * @param {DatePickerOptions} opts The options for initializing the date picker
   * @returns {DatePicker}
   */
  function TinyDatePicker(input, opts) {
    var emitter = Emitter();
    var options = DatePickerOptions(opts);
    var mode = Mode(input, emit, options);
    var me = {
      get state() {
        return mode.state;
      },
      on: emitter.on,
      off: emitter.off,
      setState: mode.setState,
      open: mode.open,
      close: mode.close,
      destroy: mode.destroy,
    };

    function emit(evt) {
      emitter.emit(evt, me);
    }

    return me;
  }

  // A date range picker built on top of TinyDatePicker;

  var TinyDatePicker$1 = TinyDatePicker;

  /**
  * The state values for the date range picker
  *
  * @typedef {Object} DateRangeState
  * @property {Date} start - The start date (can be null)
  * @property {Date} end - The end date (can be null)
  */

  /**
  * An instance of TinyDatePicker
  *
  * @typedef {Object} DateRangePickerInst
  * @property {DateRangeState} state - The start / end dates
  * @property {function} on - Adds an event handler
  * @property {function} off - Removes an event handler
  * @property {function} setState - Changes the current state of the date picker
  */

  /**
   * TinyDatePicker constructs a new date picker for the specified input
   *
   * @param {HTMLElement} input The input associated with the datepicker
   * @returns {DateRangePickerInst}
   */
  function DateRangePicker(container, opts) {
    opts = opts || {};
    var emitter = Emitter();
    var root = renderInto(container);
    var hoverDate;
    var state = {
      start: undefined,
      end: undefined,
    };
    var start = TinyDatePicker(root.querySelector('.dr-cal-start'), cp({}, opts.startOpts, {
      mode: 'dp-permanent',
      dateClass: dateClass,
    }));
    var end = TinyDatePicker(root.querySelector('.dr-cal-end'), cp({}, opts.endOpts, {
      mode: 'dp-permanent',
      hilightedDate: shiftMonth(start.state.hilightedDate, 1),
      dateClass: dateClass,
    }));
    var handlers = {
      'statechange': onStateChange,
      'select': dateSelected,
    };
    var me = {
      state: state,
      setState: setState,
      on: emitter.on,
      off: emitter.off,
    };

    start.on(handlers);
    end.on(handlers);

    function onStateChange(_, dp) {
      var d1 = start.state.hilightedDate;
      var d2 = end.state.hilightedDate;
      var diff = diffMonths(d1, d2);

      if (diff === 1) {
        return;
      }

      if (dp === start) {
        end.setState({
          hilightedDate: shiftMonth(dp.state.hilightedDate, 1),
        });
      } else {
        start.setState({
          hilightedDate: shiftMonth(dp.state.hilightedDate, -1),
        });
      }
    }

    function dateSelected(_, dp) {
      var dt = dp.state.selectedDate;

      if (!state.start || state.end) {
        setState({
          start: dt,
          end: undefined,
        });
      } else {
        setState({
          start: dt > state.start ? state.start : dt,
          end: dt > state.start ? dt : state.start,
        });
      }
    }
    function setState(newState) {
      for (var key in newState) {
        state[key] = newState[key];
      }

      emitter.emit('statechange', me);
      rerender();
    }

    function rerender() {
      start.setState({});
      end.setState({});
    }

    // Hack to avoid a situation where iOS requires double-clicking to select
    if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      root.addEventListener('mouseover', function mouseOverDate(e) {
        if (e.target.classList.contains('dp-day')) {
          var dt = new Date(parseInt(e.target.dataset.date));
          var changed = !datesEq(dt, hoverDate);
    
          if (changed) {
            hoverDate = dt;
            rerender();
          }
        }
      });
    }

    function dateClass(dt) {
      var rangeClass = (state.end || hoverDate) &&
                       state.start &&
                       inRange(dt, state.end || hoverDate, state.start);
      var selectedClass = datesEq(dt, state.start) || datesEq(dt, state.end);

      return (rangeClass ? 'dr-in-range ' : '') +
             (selectedClass ? 'dr-selected ' : '');
    }

    return me;
  }

  function renderInto(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }

    container.innerHTML = '<div class="dr-cals">' +
      '<div class="dr-cal-start"></div>' +
      '<div class="dr-cal-end"></div>' +
      '</div>';

    return container.querySelector('.dr-cals');
  }

  function toMonths(dt) {
    return (dt.getYear() * 12) + dt.getMonth();
  }

  function diffMonths(d1, d2) {
    return toMonths(d2) - toMonths(d1);
  }

  function inRange(dt, start, end) {
    return (dt < end && dt >= start) || (dt <= start && dt > end);
  }

  exports.TinyDatePicker = TinyDatePicker$1;
  exports.DateRangePicker = DateRangePicker;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);

    var self = this;
    this.closeModalBtn = document.querySelector('[data-hook=close-modal]');
    this.openModalBtn = document.querySelector('[data-hook=form-field-check-in-out]');
    this.modal = document.getElementsByClassName('modal-wrapper')[0];
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.closeModalBtn ? this.closeModalBtn.addEventListener('click', this.close) : null;
    this.openModalBtn ? this.openModalBtn.addEventListener('click', this.open) : null;
    window.addEventListener('click', function (e) {
      if (e.target == self.modal) {
        self.close();
      }
    });
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.modal.style.display = 'block';
    }
  }, {
    key: "close",
    value: function close() {
      this.modal.style.display = 'none';
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateManager_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateManager/store */ "./src/stateManager/store.js");
/* harmony import */ var tiny_date_picker_dist_date_range_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-date-picker/dist/date-range-picker */ "./node_modules/tiny-date-picker/dist/date-range-picker.js");
/* harmony import */ var tiny_date_picker_dist_date_range_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_date_picker_dist_date_range_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/Modal.js");



var datePicker,
    modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"](),
    reservationForm = document.querySelector('[data-hook=reservation-form]'),
    searchField = reservationForm.querySelector('[ data-hook=form-field-search]'),
    occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]'),
    occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy'),
    destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');
/*******************************/

/* Functions That Changes DOM */

/*******************************/

function updateDestination() {
  searchField.value = _stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().form.destinition;
}

function showDestinationList() {
  if (_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'destination-list') {
    destinitionList.classList.add('visibile');
  }
}

function hideDestinationList() {
  if (_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown !== 'destination-list') {
    destinitionList.classList.remove('visibile');
  }
}

function showDatePicker() {
  if (_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'date-picker-modal') {
    modal.open();
    datePicker = Object(tiny_date_picker_dist_date_range_picker__WEBPACK_IMPORTED_MODULE_1__["DateRangePicker"])(document.querySelector('.modal-body'));
  }
}

function updateOccopancy() {
  var state = _stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().form.occupancy;
  occupancyDropDown.innerHTML = "\n\t\t<button data-hook=\"occupancy-add-room\" class=\"occupancy__add-room\">add room</button>\n\t";
  state.forEach(function (room, idx) {
    occupancyDropDown.innerHTML += "\n\t\t\t<div class=\"occupancy__room\">\n\t\t\t\t<span class=\"occupancy__room__label\">Room ".concat(idx + 1, "</span>\n\t\t\t\t<select name=\"occupancy__room-").concat(idx, "-adults\">\n\t\t\t\t\t<option selected=\"selected\" value=\"").concat(room.adults, "\">").concat(room.adults, "</option>\n\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t");
  });
}

function showOccupancyDropDown() {
  if (_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'occupancy-dropDown') {
    occupancyDropDown.classList.add('visibile');
  }
}

function hideOccupancyDropDown() {
  if (_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown !== 'occupancy-dropDown') {
    occupancyDropDown.classList.remove('visibile');
  }
}
/* ************************** */

/* Subscribe To Store Changes */

/* ************************** */


_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(updateDestination);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(updateOccopancy);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(showDestinationList);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(hideDestinationList);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(showDatePicker);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(showOccupancyDropDown);
_stateManager_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(hideOccupancyDropDown);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateManager_stateEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateManager/stateEvents */ "./src/stateManager/stateEvents.js");
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");
/*********************************************************
 * NOTE :
 * only change dom using in contained functions that are invoked on state changes
 *********************************************************/



/***/ }),

/***/ "./src/sass/_base.sass":
/*!*****************************!*\
  !*** ./src/sass/_base.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/stateManager/actions.js":
/*!*************************************!*\
  !*** ./src/stateManager/actions.js ***!
  \*************************************/
/*! exports provided: actionTypes, updateDestination, updateCheckInOut, updateOccopancy, showDestinitionList, hideDropDown, showDatePickerModal, showOccupancyDropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDestination", function() { return updateDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCheckInOut", function() { return updateCheckInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOccopancy", function() { return updateOccopancy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDestinitionList", function() { return showDestinitionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDropDown", function() { return hideDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDatePickerModal", function() { return showDatePickerModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOccupancyDropDown", function() { return showOccupancyDropDown; });
var actionTypes = {
  UPDATE_DESTINATION: 'UPDATE_DESTINATION',
  UPDATE_CHECK_IN_OUT: 'UPDATE_CHECK_IN_OUT',
  UPDATE_OCCUPANCY: 'UPDATE_OCCUPANCY',
  UPDATE_VISIBLE_DROPDOWN: 'UPDATE_VISIBLE_DROPDOWN'
};
/* FORM ACTIONS */

/* ************ */

var updateDestination = function updateDestination(value) {
  return {
    type: actionTypes.UPDATE_DESTINATION,
    value: value
  };
};
var updateCheckInOut = function updateCheckInOut(value) {
  return {
    type: actionTypes.UPDATE_CHECK_IN_OUT,
    value: value
  };
};
var updateOccopancy = function updateOccopancy(value) {
  return {
    type: actionTypes.UPDATE_OCCUPANCY,
    value: value
  };
};
/* UI ACTIONS */

/* ********** */

var showDestinitionList = function showDestinitionList() {
  return {
    type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
    value: 'destination-list'
  };
};
var hideDropDown = function hideDropDown() {
  return {
    type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
    value: ''
  };
};
var showDatePickerModal = function showDatePickerModal() {
  return {
    type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
    value: 'date-picker-modal'
  };
};
var showOccupancyDropDown = function showOccupancyDropDown() {
  return {
    type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
    value: 'occupancy-dropDown'
  };
};

/***/ }),

/***/ "./src/stateManager/rootReducer.js":
/*!*****************************************!*\
  !*** ./src/stateManager/rootReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/stateManager/actions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var formInitialState = {
  destinition: '',
  checkInOut: {
    start: '1',
    end: '2'
  },
  occupancy: [{
    adults: 1,
    children: 0
  }]
};

function formReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : formInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_DESTINATION:
      return _objectSpread({}, state, {
        destinition: action.value
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_CHECK_IN_OUT:
      return _objectSpread({}, state, {
        checkInOut: _objectSpread({}, state.checkInOut, action.value)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_OCCUPANCY:
      return _objectSpread({}, state, {
        occupancy: _toConsumableArray(state.occupancy).concat([action.value])
      });

    default:
      return state;
  }
}

var uiInitialState = {
  visibleDropdown: ''
};

function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : uiInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_VISIBLE_DROPDOWN:
      return _objectSpread({}, state, {
        visibleDropdown: action.value
      });

    default:
      return state;
  }
}

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    form: formReducer(state.form, action),
    ui: uiReducer(state.ui, action)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/stateManager/stateEvents.js":
/*!*****************************************!*\
  !*** ./src/stateManager/stateEvents.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/stateManager/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/stateManager/actions.js");


var reservationForm = document.querySelector('[data-hook=reservation-form]'),
    checkInOutField = reservationForm.querySelector('[data-hook=form-field-check-in-out]'),
    occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]'),
    occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy'),
    searchField = reservationForm.querySelector('[ data-hook=form-field-search]'),
    destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');
/*******************************/

/* Functions That Changes State */

/*******************************/

/* field: destinition */
// update Destination from event value

searchField.addEventListener('input', function (e) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["updateDestination"](e.target.value));
});
/* field: destinition */
// update Destination from li

destinitionList.addEventListener('click', function (e) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["updateDestination"](e.target.innerHTML));
});
/* field: destinition */
// show destination list

searchField.addEventListener('focus', function (e) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["showDestinitionList"]());
});
/* field: destinition */
// hide destination list

document.addEventListener('click', function (e) {
  if (e.target !== searchField && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'destination-list') {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["hideDropDown"]());
  }
});
/* field: checkInOut */
// show DatePicker Modal

checkInOutField.addEventListener('click', function (e) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["showDatePickerModal"]());
});
/* field: occupancy */

/* toggle occupancy-dropDown */

occupancyField.addEventListener('click', function (e) {
  e.stopPropagation();

  if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'occupancy-dropDown') {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["hideDropDown"]());
    return;
  }

  if (e.target === e.currentTarget || e.target === occupancyField.querySelector('.form-field__icon') || e.target === occupancyField.querySelector('.form-field__value-box')) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["showOccupancyDropDown"]());
  }
});
/* field: occupancy */

/* hide occupancy-dropDown */

document.addEventListener('click', function (e) {
  if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().ui.visibleDropdown === 'occupancy-dropDown' && e.target !== occupancyDropDown) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["hideDropDown"]());
  }
});

/***/ }),

/***/ "./src/stateManager/store.js":
/*!***********************************!*\
  !*** ./src/stateManager/store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer */ "./src/stateManager/rootReducer.js");


var creatStore = function creatStore(reducer) {
  var listeners = [];
  var state = reducer(undefined, {
    type: ''
  });

  var getState = function getState() {
    return state;
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
    return function () {
      return listeners.filter(function (currentListener) {
        return currentListener !== listener;
      });
    };
  };

  var dispatch = function dispatch(action) {
    console.log('action fired: ', action.type, action);
    state = reducer(state, action);
    listeners.map(function (cb) {
      return cb();
    });
  };

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  };
};

var store = creatStore(_rootReducer__WEBPACK_IMPORTED_MODULE_0__["default"]); // FOR DEBUGGING

window.store = store;
store.subscribe(function () {
  return console.log(store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/_base.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/_base.sass */"./src/sass/_base.sass");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map