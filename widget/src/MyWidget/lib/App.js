"use strict";

var app = {
    /**
     * Version of application
     * @type {Number}
     * @const
     */
    version: 0.1,
    /**
     * @param {(Error|*)} err
     * @returns {app}
     */
    logErr : function(err) {
        err && console.error(err);
        return this;
    },
    /**
     * Checks what is param a function
     * @param fun
     * @returns {boolean}
     */
    isFun : function(fun) {
        return typeof fun === "function";
    },
    /**
     * Merge properties of objects from and to
     * @param from
     * @param to
     * @returns {*}
     */
    merge : function(from, to) {
        if (!from || !to)
            return;
        for(var key in from) {
            if (from.hasOwnProperty(key)) {
                to[key] = from[key];
                if (app.isFun(from[key]))
                    to[key] = from[key].bind(to);
            }
        }
        return to;
    }
};


var layers = {};
layers.merge = app.merge;

/**
 * @interface
 */
layers.BaseLayer = function(){
    /**
     * Insert this layer into own.
     * @param {HTMLElement|d3.selection} own
     * @returns {layers.BaseLayer}
     */
    this.addTo = function(own) {
        return this;
    };
};
