exports.dom = require('dojo/dom');
exports.on = require('dojo/on');
exports.declare = require("dojo/_base/declare");
exports.Memory = require("dstore/Memory");
exports.RequestMemory = require('dstore/RequestMemory');
exports.OnDemandGrid = require('dgrid/OnDemandGrid');
exports.Pagination = require("dgrid/extensions/Pagination");
exports.Keyboard = require("dgrid/Keyboard");
exports.Selection = require("dgrid/Selection");
exports.Grid = exports.declare([exports.OnDemandGrid, exports.Keyboard, exports.Selection]);
exports.PagingGrid = exports.declare([exports.OnDemandGrid, exports.Keyboard, exports.Selection, exports.Pagination]);
exports.PagingGrid.prototype.i18nPagination = {
    status: '${start} - ${end} of ${total} results',
    gotoFirst: 'Go to first page',
    gotoNext: 'Go to next page',
    gotoPrev: 'Go to previous page',
    gotoLast: 'Go to last page',
    gotoPage: 'Go to page',
    jumpPage: 'Jump to page',
    rowsPerPage: 'Number of rows per page'
};

require("dgrid/extensions/nls/pagination");
require("dgrid/css/dgrid.css");
