/*!
 * datastructures-js
 * queue
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

 'use strict';

 module.exports = function() {

    var queue = function() {
        
        var self = {
            elements: []
        };
        
        self.isEmpty = function() {
            return this.elements.length > 0 ? false : true;
        };

        self.length = function() {
            return this.elements.length;
        };

        self.enqueue = function(el) {
            this.elements.push(el);
        };

        self.dequeue = function() {
            if (!this.isEmpty()) {
                var first = this.elements[0];
                this.elements = this.elements.slice(1);
                return first;
            }
            return null;
        };

        self.front = function() {
            return !this.isEmpty() ? this.elements[0] : null;
        };

        self.back = function() {
            return !this.isEmpty() ? this.elements[this.elements.length - 1] : null;
        };

        // export the queue api
        self.export = function() {
            var that = this;
            return {
                isEmpty: that.isEmpty.bind(that),
                length: that.length.bind(that),
                enqueue: that.enqueue.bind(that),
                dequeue: that.dequeue.bind(that),
                front: that.front.bind(that),
                back: that.back.bind(that),
            };
        };

        return self;
    };

    return queue;

 };