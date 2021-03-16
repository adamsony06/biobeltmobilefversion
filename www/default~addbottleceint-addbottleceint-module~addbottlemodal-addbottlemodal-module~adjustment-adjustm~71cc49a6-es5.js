(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addbottleceint-addbottleceint-module~addbottlemodal-addbottlemodal-module~adjustment-adjustm~71cc49a6"],{

/***/ "./src/app/model/upcv3/modbus.ts":
/*!***************************************!*\
  !*** ./src/app/model/upcv3/modbus.ts ***!
  \***************************************/
/*! exports provided: Events, StateMachine, MODBUS_CONSTS, ModbusRequest, ReadCoilsRequest, ReadHoldingRegistersRequest, ReadInputRegistersRequest, WriteSingleCoilRequest, WriteSingleRegisterRequest, WriteMultipleRegistersRequest, ModbusRequestManager, ModbusClient, UPCDiffCo2Program, UPCDiffCo2Sun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachine", function() { return StateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODBUS_CONSTS", function() { return MODBUS_CONSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModbusRequest", function() { return ModbusRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadCoilsRequest", function() { return ReadCoilsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadHoldingRegistersRequest", function() { return ReadHoldingRegistersRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadInputRegistersRequest", function() { return ReadInputRegistersRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteSingleCoilRequest", function() { return WriteSingleCoilRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteSingleRegisterRequest", function() { return WriteSingleRegisterRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteMultipleRegistersRequest", function() { return WriteMultipleRegistersRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModbusRequestManager", function() { return ModbusRequestManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModbusClient", function() { return ModbusClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCDiffCo2Program", function() { return UPCDiffCo2Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCDiffCo2Sun", function() { return UPCDiffCo2Sun; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var Events = /** @class */ (function () {
    function Events() {
        this.cbList = {};
    }
    Events.prototype.fire = function (name, args) {
        if (!this.cbList[name])
            return;
        for (var i in this.cbList[name])
            this.cbList[name][i].apply(this, args);
        return this;
    };
    Events.prototype.fireLater = function (name, args) {
        if (args === undefined)
            args = [];
        return function () {
            var aA = Array.prototype.slice.call(arguments, 0), a = args.concat(aA);
            this.fire(name, a.length > 0 ? a : undefined);
        }.bind(this);
    };
    Events.prototype.on = function (name, func) {
        if (!this.cbList.hasOwnProperty(name))
            this.cbList[name] = [];
        this.cbList[name].push(func);
        return {
            name: name,
            index: this.cbList[name].length - 1
        };
    };
    Events.prototype.off = function (id) {
        this.cbList[id.name].splice(id.index);
        return this;
    };
    return Events;
}());

var StateMachine = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StateMachine, _super);
    function StateMachine(initState) {
        var _this = _super.call(this) || this;
        _this.state = null;
        _this.state = initState;
        return _this;
    }
    StateMachine.prototype.inState = function (newState) {
        return this.state === newState;
    };
    StateMachine.prototype.setState = function (newState) {
        var oldState = this.state;
        this.state = newState;
        this.fire('state_changed', [oldState, newState]);
        return this;
    };
    StateMachine.ctorParameters = function () { return [
        null
    ]; };
    return StateMachine;
}(Events));

var MODBUS_CONSTS = {
    MBAP_TID: 0,
    MBAP_PID: 2,
    MBAP_LEN: 4,
    MBAP_UID: 6,
    BODY_FC: 0,
    BODY_START: 1,
    BODY_COUNT: 3,
    READ_COILS: 1,
    READ_HOLDING_REGISTERS: 3,
    READ_INPUT_REGISTERS: 4,
    WRITE_SINGLE_COIL: 5,
    WRITE_SINGLE_REGISTER: 6,
    WRITE_MULTIPLE_REGISTERS: 16
};
var ModbusRequest = /** @class */ (function () {
    function ModbusRequest(id, length) {
        this.timeout = null;
        this.id = id;
        this.length = length;
        this.deferred = jquery__WEBPACK_IMPORTED_MODULE_1__["Deferred"]();
        this.packet = new ArrayBuffer(length);
        this.header = new DataView(this.packet, 0, 7);
        // Init
        this.header.setUint16(MODBUS_CONSTS.MBAP_TID, this.id);
        this.header.setUint16(MODBUS_CONSTS.MBAP_PID, 0);
        this.header.setUint16(MODBUS_CONSTS.MBAP_LEN, this.length - 6);
        this.header.setUint8(MODBUS_CONSTS.MBAP_UID, 1);
    }
    ModbusRequest.prototype.getPromise = function () {
        return this.deferred.promise();
    };
    ModbusRequest.prototype.reject = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.deferred.reject.apply(null, args);
        return this;
    };
    ModbusRequest.prototype.resolve = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.deferred.resolve.apply(null, args);
        return this;
    };
    ModbusRequest.prototype.setTimeout = function (to) {
        this.timeout = to;
        return this;
    };
    ModbusRequest.ctorParameters = function () { return [
        null,
        null
    ]; };
    return ModbusRequest;
}());

var ReadCoilsRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReadCoilsRequest, _super);
    function ReadCoilsRequest(id, start, count) {
        var _this = _super.call(this, id, 12) || this;
        _this.start = start;
        _this.count = count;
        // Init
        _this.body = new DataView(_this.packet, 7, 5);
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.READ_COILS);
        _this.body.setUint16(MODBUS_CONSTS.BODY_START, _this.start);
        _this.body.setUint16(MODBUS_CONSTS.BODY_COUNT, _this.count);
        return _this;
    }
    ReadCoilsRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 2), fc = pdu.getUint8(0), byte_count = pdu.getUint8(1);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        var dv = new DataView(data, offset + 9, byte_count), fc_data = [], i, t, j, mask, c = this.count;
        for (i = 0; i < this.count; i += 1) {
            t = dv.getUint8(i);
            for (j = 0; j < 7; j += 1) {
                mask = 1 << j;
                if (mask !== 0)
                    fc_data.push(t & mask);
                c -= 1;
                if (c === 0)
                    break;
            }
        }
        this.resolve(fc_data, this);
        return byte_count + 2;
    };
    ReadCoilsRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return ReadCoilsRequest;
}(ModbusRequest));

var ReadHoldingRegistersRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReadHoldingRegistersRequest, _super);
    function ReadHoldingRegistersRequest(id, start, count) {
        var _this = _super.call(this, id, 12) || this;
        _this.start = start;
        _this.count = count;
        // Init
        _this.body = new DataView(_this.packet, 7, 5);
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.READ_HOLDING_REGISTERS);
        _this.body.setUint16(MODBUS_CONSTS.BODY_START, _this.start);
        _this.body.setUint16(MODBUS_CONSTS.BODY_COUNT, _this.count);
        return _this;
    }
    ReadHoldingRegistersRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 2), fc = pdu.getUint8(0), byte_count = pdu.getUint8(1);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        var dv = new DataView(data, offset + 7 + 2, byte_count), fc_data = [];
        for (var i = 0; i < byte_count / 2; i += 1) {
            fc_data.push(dv.getUint16(i * 2));
        }
        this.resolve(fc_data, this);
        return byte_count + 2;
    };
    ReadHoldingRegistersRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return ReadHoldingRegistersRequest;
}(ModbusRequest));

var ReadInputRegistersRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReadInputRegistersRequest, _super);
    function ReadInputRegistersRequest(id, start, count) {
        var _this = _super.call(this, id, 12) || this;
        _this.start = start;
        _this.count = count;
        // Init
        _this.body = new DataView(_this.packet, 7, 5);
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.READ_INPUT_REGISTERS);
        _this.body.setUint16(MODBUS_CONSTS.BODY_START, _this.start);
        _this.body.setUint16(MODBUS_CONSTS.BODY_COUNT, _this.count);
        return _this;
    }
    ReadInputRegistersRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 2), fc = pdu.getUint8(0), byte_count = pdu.getUint8(1);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        var dv = new DataView(data, offset + 7 + 2, byte_count), fc_data = [];
        for (var i = 0; i < byte_count / 2; i += 1) {
            fc_data.push(dv.getUint16(i * 2));
        }
        this.resolve(fc_data, this);
        return byte_count + 2;
    };
    ReadInputRegistersRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return ReadInputRegistersRequest;
}(ModbusRequest));

var WriteSingleCoilRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WriteSingleCoilRequest, _super);
    function WriteSingleCoilRequest(id, address, value) {
        var _this = _super.call(this, id, 12) || this;
        _this.address = address;
        _this.value = value;
        // Init
        _this.body = new DataView(_this.packet, 7, 5);
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.WRITE_SINGLE_COIL);
        _this.body.setUint16(MODBUS_CONSTS.BODY_START, _this.address);
        _this.body.setUint16(MODBUS_CONSTS.BODY_COUNT, _this.value ? 65280 : 0);
        return _this;
    }
    WriteSingleCoilRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 5), fc = pdu.getUint8(0), start = pdu.getUint8(1), value = pdu.getUint16(3);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        this.resolve(this);
        return 5;
    };
    WriteSingleCoilRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return WriteSingleCoilRequest;
}(ModbusRequest));

var WriteSingleRegisterRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WriteSingleRegisterRequest, _super);
    function WriteSingleRegisterRequest(id, address, value) {
        var _this = _super.call(this, id, 12) || this;
        _this.address = address;
        _this.value = value;
        // Init
        _this.body = new DataView(_this.packet, 7, 5);
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.WRITE_SINGLE_REGISTER);
        _this.body.setUint16(MODBUS_CONSTS.BODY_START, _this.address);
        _this.body.setUint16(MODBUS_CONSTS.BODY_COUNT, _this.value);
        return _this;
    }
    WriteSingleRegisterRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 5), fc = pdu.getUint8(0), start = pdu.getUint16(1), value = pdu.getUint16(3);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        this.resolve(this);
        return 5;
    };
    WriteSingleRegisterRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return WriteSingleRegisterRequest;
}(ModbusRequest));

var WriteMultipleRegistersRequest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WriteMultipleRegistersRequest, _super);
    function WriteMultipleRegistersRequest(id, address, values) {
        var _this = _super.call(this, id, 7 + 6 + (values.length * 2)) || this;
        _this.address = address;
        _this.values = values;
        // Init
        _this.body = new DataView(_this.packet, 7, 6 + (_this.values.length * 2));
        _this.body.setUint8(MODBUS_CONSTS.BODY_FC, MODBUS_CONSTS.WRITE_MULTIPLE_REGISTERS);
        _this.body.setUint16(1, _this.address);
        _this.body.setUint16(3, _this.values.length);
        _this.body.setUint8(5, 2 * _this.values.length);
        _this.values.forEach(function (v, i) {
            this.body.setUint16(6 + (i * 2), v);
        }.bind(_this));
        return _this;
    }
    WriteMultipleRegistersRequest.prototype.handleResponse = function (data, offset) {
        var mbap = new DataView(data, offset, 7), pdu = new DataView(data, offset + 7, 5), fc = pdu.getUint8(0), start = pdu.getUint16(1), quant = pdu.getUint16(3);
        if (fc > 0x80) {
            this.reject({ errCode: 'serverError' });
            return 2;
        }
        this.resolve(this);
        return 5;
    };
    WriteMultipleRegistersRequest.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return WriteMultipleRegistersRequest;
}(ModbusRequest));

var ModbusRequestManager = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModbusRequestManager, _super);
    function ModbusRequestManager(verbose) {
        if (verbose === void 0) { verbose = false; }
        var _this = _super.call(this, 'ready') || this;
        _this.queue = [];
        _this.socketId = 0;
        _this.receiveBuffer = [];
        _this.verbose = false;
        _this.currentRequest = null;
        _this.socketId = null;
        _this.verbose = verbose;
        // Init
        window['chrome'].sockets.tcp.onReceive.addListener(_this.receiveListener.bind(_this));
        _this.on('state_changed', function onStateChanged(oldState, newState) {
            if (newState === 'ready')
                this.send();
        }.bind(_this));
        return _this;
    }
    ModbusRequestManager.prototype.receiveListener = function (info) {
        if (info.socketId !== this.socketId)
            return;
        if (this.inState('waiting')) {
            this.receiveBuffer.push(info);
            this.handleResponse();
        }
        else
            throw new Error('ModbusRequestManager - Received Packet while in state "waiting".');
    };
    ModbusRequestManager.prototype.handleResponse = function () {
        if (this.verbose)
            console.log('ModbusRequestManager', 'Trying to handle response.');
        if (this.receiveBuffer.length === null)
            return;
        var response = this.receiveBuffer.shift(), data = response.data;
        if (data.byteLength < 7) {
            if (this.verbose)
                console.log('ModbusRequestManager', 'Wrong packet size.', (data.byteLength));
            return;
        }
        // read the header
        var mbap = new DataView(data, 0, 7), tid = mbap.getUint16(0);
        if (!this.currentRequest) {
            if (this.verbose)
                console.error('ModbusRequestManager', 'No current request, strange!!', this.currentRequest);
            return;
        }
        if (this.currentRequest.id !== tid) {
            if (this.verbose)
                console.error('ModbusRequestManager', 'CurrentRequest tid !== received tid', this.currentRequest.id, tid);
            return;
        }
        if (this.verbose)
            console.log('ModbusRequestManager', 'Request handled fine.');
        // cleartimeout
        clearTimeout(this.currentRequest.timeout);
        // handle fc response
        this.currentRequest.handleResponse(data, 0);
        this.setState('ready');
    };
    ModbusRequestManager.prototype.send = function () {
        if (this.queue.length === 0) {
            if (this.verbose)
                console.log('ModbusRequestManager', 'Nothing in Queue.');
            return;
        }
        this.setState('sending');
        if (this.verbose)
            console.log('ModbusRequestManager', 'Trying to send packet.');
        this.currentRequest = this.queue.shift();
        // Before sending set the timeout for this request
        var timeout_no = setTimeout(function () {
            if (this.verbose)
                console.log('ModbusRequestManager', 'Timeout occured.');
            this.currentRequest.reject({ errCode: 'timeout' });
            this.fire('error', [{ errCode: 'timeout' }]);
        }.bind(this), 5000);
        this.currentRequest.setTimeout(timeout_no);
        if (this.verbose)
            console.log('ModbusRequestManager', 'Sending packet...');
        window['chrome'].sockets.tcp.send(this.socketId, this.currentRequest.packet, function (sendInfo) {
            if (sendInfo.resultCode < 0) {
                if (this.verbose)
                    console.log('ModbusRequestManager', 'A error occured while sending packet.', sendInfo.resultCode);
                this.currentRequest.reject({ errCode: 'sendError' });
                this.setState('ready');
                return;
            }
            if (this.verbose)
                console.log('ModbusRequestManager', 'Packet send! Waiting for response.');
            this.setState('waiting');
        }.bind(this));
    };
    ModbusRequestManager.prototype.setSocketId = function (id) {
        this.socketId = id;
        return this;
    };
    ModbusRequestManager.prototype.sendPacket = function (packet) {
        if (this.verbose)
            console.log('ModbusRequestManager', 'Queing a new packet.');
        this.queue.push(packet);
        if (this.socketId === null) {
            throw new Error('ModbusRequestManager - No socketId provided.');
        }
        if (!this.inState('ready')) {
            return;
        }
        this.send();
        return this;
    };
    ModbusRequestManager.prototype.clear = function () {
        while (this.queue.length > 0) {
            this.queue.pop().reject({ 'errCode': 'clientOffline' });
        }
        this.setState('ready');
    };
    ModbusRequestManager.prototype.flush = function () {
        if (this.verbose)
            console.log('ModbusRequestManager', 'Flush');
        if (this.socketId === null)
            return;
        this.send();
        return this;
    };
    ModbusRequestManager.ctorParameters = function () { return [
        { type: Boolean }
    ]; };
    return ModbusRequestManager;
}(StateMachine));

var ModbusClient = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModbusClient, _super);
    function ModbusClient(timeout, autoreconnect, verbose) {
        if (timeout === void 0) { timeout = 15000; }
        if (autoreconnect === void 0) { autoreconnect = false; }
        if (verbose === void 0) { verbose = true; }
        var _this = _super.call(this, 'init') || this;
        _this.host = 'localhost';
        _this.port = 502;
        _this.id = 0;
        _this.isWaiting = false;
        _this.isReconnecting = false;
        _this.socketId = 0;
        _this.timeout = 15000;
        _this.autoreconnect = false;
        _this.verbose = true;
        _this.timeout = timeout;
        _this.autoreconnect = autoreconnect;
        _this.verbose = verbose;
        _this.requestManager = new ModbusRequestManager(verbose);
        // Init
        _this.requestManager.on('error', function (err) {
            if (this.inState('offline'))
                return;
            this.fire('error', [err]);
            if (this.autoreconnect)
                this.reconnect();
            else
                this.disconnect();
        }.bind(_this));
        // flush everything when going from error to online again
        _this.on('state_changed', function (oldState, newState) {
            if (this.verbose)
                console.log('state changed', oldState, newState);
            this.fire(newState);
            if (oldState === 'error' && newState === 'online')
                this.requestManager.flush();
        }.bind(_this));
        _this.on('offline', function () {
            this.requestManager.clear();
        }.bind(_this));
        _this.on('online', function () {
            this.isReconnecting = false;
        }.bind(_this));
        _this.on('error', function () {
            this.isReconnecting = false;
        }.bind(_this));
        _this.createSocket();
        return _this;
    }
    ModbusClient.prototype.onReceiveError = function (info) {
        if (this.verbose)
            console.log('ModbusClient', 'Receive Error occured.', info, this.socketId);
        if (info.socketId !== this.socketId)
            return;
        this.setState('offline');
        this.fire('error', [{ errCode: 'ServerError', args: arguments }]);
        if (this.autoreconnect) {
            if (this.verbose)
                console.log('ModbusClient', 'AutoReconnect enabled, reconnecting.');
            this.reconnect();
            return;
        }
        if (this.verbose)
            console.log('ModbusClient', 'Disconnecting client.');
        this.close();
    };
    ModbusClient.prototype.createSocket = function () {
        if (this.verbose)
            console.log('ModbusClient', 'Creating socket.');
        window['chrome'].sockets.tcp.onReceiveError.addListener(this.onReceiveError.bind(this));
        window['chrome'].sockets.tcp.create({}, function (createInfo) {
            if (this.verbose)
                console.log('ModbusClient', 'Socket created.', createInfo);
            this.socketId = createInfo.socketId;
            this.requestManager.setSocketId(this.socketId);
            this.setState('offline');
            this.fire('ready');
        }.bind(this));
    };
    ModbusClient.prototype.createNewId = function () {
        this.id = (this.id + 1) % 10000;
        return this.id;
    };
    ModbusClient.prototype.sendPacket = function (req) {
        // invalid states for sending packages
        if (!this.inState('online'))
            return;
        this.requestManager.sendPacket(req);
    };
    ModbusClient.prototype.isOnline = function () {
        return this.inState('online');
    };
    ModbusClient.prototype.readCoils = function (start, count) {
        var request = new ReadCoilsRequest(this.createNewId(), start, count);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.readHoldingRegisters = function (start, count) {
        var request = new ReadHoldingRegistersRequest(this.createNewId(), start, count);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.readInputRegisters = function (start, count) {
        var request = new ReadInputRegistersRequest(this.createNewId(), start, count);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.writeSingleCoil = function (address, value) {
        var request = new WriteSingleCoilRequest(this.createNewId(), address, value);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.writeSingleRegister = function (address, value) {
        var request = new WriteSingleRegisterRequest(this.createNewId(), address, value);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.writeMultipleRegisters = function (address, values) {
        var request = new WriteMultipleRegistersRequest(this.createNewId(), address, values);
        if (!this.inState('online')) {
            request.reject({ errCode: 'offline' });
            return request.getPromise();
        }
        this.sendPacket(request);
        return request.getPromise();
    };
    ModbusClient.prototype.connect = function () {
        if (this.inState('connecting') || this.inState('online'))
            return;
        this.setState('connecting');
        this.fire('busy', null);
        if (this.verbose)
            console.log('ModbusClient', 'Establishing connection.', this.socketId, this.host, this.port);
        window['chrome'].sockets.tcp.connect(this.socketId, this.host, this.port, function (result) {
            //38 error 0 successful
            if (this.verbose)
                console.log('ModbusClient', 'Connect returned', arguments);
            if (result !== 0) {
                if (this.verbose)
                    console.log('ModbusClient', 'Connection failed.', result);
                this.fire('error', [{
                        errCode: 'connectionError',
                        result: result
                    }]);
                if (this.autoreconnect) {
                    if (this.verbose)
                        console.log('ModbusClient', 'Auto Reconnect enabled, trying to reconnect.');
                    this.reconnect(5000);
                }
                return;
            }
            if (this.verbose)
                console.log('ModbusClient', 'Connection successfull.');
            this.setState('online');
        }.bind(this));
        return this;
    };
    ModbusClient.prototype.setHost = function (h) {
        this.host = h;
        return this;
    };
    ModbusClient.prototype.setPort = function (p) {
        this.port = p;
        return this;
    };
    ModbusClient.prototype.getHost = function () {
        return this.host;
    };
    ModbusClient.prototype.getPort = function () {
        return this.port;
    };
    ModbusClient.prototype.disconnect = function (cb) {
        if (cb === void 0) { cb = null; }
        if (this.inState('disconnecting'))
            return;
        this.setState('disconnecting');
        this.fire('busy', null);
        if (this.verbose)
            console.log('ModbusClient', 'Disconnecting client.');
        window['chrome'].sockets.tcp.disconnect(this.socketId, function () {
            if (this.verbose)
                console.log('ModbusClient', 'Client disconnected.');
            this.setState('offline');
            if (!cb)
                return;
            cb();
        }.bind(this));
        return this;
    };
    ModbusClient.prototype.close = function (cb) {
        if (cb === void 0) { cb = null; }
        this.disconnect(function () {
            if (this.verbose)
                console.log('ModbusClient', 'Close socket.');
            window['chrome'].sockets.tcp.close(this.socketId, function () {
                if (this.verbose)
                    console.log('ModbusClient', 'Client closed.');
                this.setState('init');
                this.socketId = null;
                if (!cb)
                    return;
            }.bind(this));
        }.bind(this));
    };
    ModbusClient.prototype.reconnect = function (wait) {
        if (wait === void 0) { wait = null; }
        if (this.isReconnecting)
            return;
        this.isReconnecting = true;
        this.fire('reconnecting', null);
        setTimeout(function () {
            if (this.inState('offline')) {
                if (this.verbose)
                    console.log('ModbusClient', 'Client already disconnected.');
                this.connect();
                return;
            }
            window['chrome'].sockets.tcp.disconnect(this.socketId, function () {
                if (this.verbose)
                    console.log('ModbusClient', 'Client disconnected.', arguments);
                this.setState('offline');
                this.connect();
            }.bind(this));
        }.bind(this), wait ? wait : 0);
    };
    /**
     * Extras
     */
    /* Float */
    ModbusClient.prototype.getFloatFromHoldingRegister = function (start) {
        return this.readHoldingRegisters(start, 2).then(function (data) {
            return this.registerToFloat(data);
        }.bind(this));
    };
    ModbusClient.prototype.setFloatInHoldingRegister = function (start, value) {
        var data = this.floatToRegister(value);
        return this.writeMultipleRegisters(start, data);
    };
    ModbusClient.prototype.registerToFloat = function (registers) {
        var highRegister = registers[1], lowRegister = registers[0], highRegisterBytes, lowRegisterBytes, floatBytes, buffer, view;
        // Get bytes from high register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint16(0, highRegister);
        highRegisterBytes = [view.getUint8(1), view.getUint8(0)];
        // Get bytes from low register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint16(0, lowRegister);
        lowRegisterBytes = [view.getUint8(1), view.getUint8(0)];
        // Get bytes from float
        floatBytes = [highRegisterBytes[1], highRegisterBytes[0], lowRegisterBytes[1], lowRegisterBytes[0]];
        buffer = new ArrayBuffer(4);
        view = new DataView(buffer);
        for (var i = 0; i < floatBytes.length; i++) {
            view.setUint8(i, floatBytes[i]);
        }
        return view.getFloat32(0);
    };
    ModbusClient.prototype.floatToRegister = function (value) {
        var buffer = new ArrayBuffer(4), view = new DataView(buffer), highRegisterBytes, lowRegisterBytes, highRegister, lowRegister;
        // Get data from float
        view.setFloat32(0, value);
        highRegisterBytes = [view.getUint8(0), view.getUint8(1)];
        lowRegisterBytes = [view.getUint8(2), view.getUint8(3)];
        // Get data from high register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint8(0, highRegisterBytes[0]);
        view.setUint8(1, highRegisterBytes[1]);
        highRegister = view.getUint16(0);
        // Get data from low register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint8(0, lowRegisterBytes[0]);
        view.setUint8(1, lowRegisterBytes[1]);
        lowRegister = view.getUint16(0);
        return [lowRegister, highRegister];
    };
    /* Integer */
    ModbusClient.prototype.getIntFromHoldingRegister = function (start, count) {
        switch (count) {
            case 2:
                return this.readHoldingRegisters(start, 2).then(function (data) {
                    return this.registerToUint32(data);
                }.bind(this));
            case 1:
                return this.readHoldingRegisters(start, 1).then(function (data) {
                    return data[0];
                }.bind(this));
        }
    };
    ModbusClient.prototype.setIntInHoldingRegister = function (start, count, value) {
        switch (count) {
            case 2:
                var data = this.uint32ToRegister(value);
                return this.writeMultipleRegisters(start, data);
            case 1:
                return this.writeMultipleRegisters(start, [value]);
        }
    };
    ModbusClient.prototype.registerToUint32 = function (registers) {
        var highRegister = registers[1], lowRegister = registers[0], highRegisterBytes, lowRegisterBytes, intBytes, buffer, view;
        // Get bytes from high register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint16(0, highRegister);
        highRegisterBytes = [view.getUint8(1), view.getUint8(0)];
        // Get bytes from low register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint16(0, lowRegister);
        lowRegisterBytes = [view.getUint8(1), view.getUint8(0)];
        // Get bytes from int
        intBytes = [highRegisterBytes[1], highRegisterBytes[0], lowRegisterBytes[1], lowRegisterBytes[0]];
        buffer = new ArrayBuffer(4);
        view = new DataView(buffer);
        for (var i = 0; i < intBytes.length; i++) {
            view.setUint8(i, intBytes[i]);
        }
        return view.getInt32(0);
    };
    ModbusClient.prototype.uint32ToRegister = function (value) {
        var buffer = new ArrayBuffer(4), view = new DataView(buffer), highRegisterBytes, lowRegisterBytes, highRegister, lowRegister;
        // Get data from int
        view.setInt32(0, value);
        highRegisterBytes = [view.getUint8(0), view.getUint8(1)];
        lowRegisterBytes = [view.getUint8(2), view.getUint8(3)];
        // Get data from high register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint8(0, highRegisterBytes[0]);
        view.setUint8(1, highRegisterBytes[1]);
        highRegister = view.getUint16(0);
        // Get data from low register
        buffer = new ArrayBuffer(2);
        view = new DataView(buffer);
        view.setUint8(0, lowRegisterBytes[0]);
        view.setUint8(1, lowRegisterBytes[1]);
        lowRegister = view.getUint16(0);
        return [lowRegister, highRegister];
    };
    /* String */
    ModbusClient.prototype.getStringFromHoldingRegister = function (start, count) {
        return this.readHoldingRegisters(start, count).then(function (data) {
            var string = this.registerToString(data);
            if (string.indexOf('\u0004') != -1)
                string = string.substr(0, string.indexOf('\u0004'));
            if (string.indexOf('\0') != -1)
                string = string.substr(0, string.indexOf('\0'));
            return string;
        }.bind(this));
    };
    ModbusClient.prototype.setStringInHoldingRegister = function (start, value) {
        return this.writeMultipleRegisters(start, this.stringToRegister(value));
    };
    ModbusClient.prototype.registerToString = function (registers) {
        var hexValue = '';
        for (var i = 0; i < registers.length; i++) {
            if (i > 0 && registers[i - 1] == 101)
                break;
            if (registers[i].toString(16).length == 4)
                hexValue += registers[i].toString(16).substr(2, 2) + registers[i].toString(16).substr(0, 2);
            else
                hexValue += registers[i].toString(16);
        }
        var s = this.hex2a(hexValue);
        return s;
    };
    ModbusClient.prototype.stringToRegister = function (string) {
        var array = string.split('').map(function (s) { return s.charCodeAt(0); });
        var returnarray = [];
        for (var i = 0; i < string.length / 2 + string.length % 2; i++)
            returnarray.push(0);
        for (var i = 0; i < returnarray.length; i++) {
            returnarray[i] = array[i * 2];
            if (i * 2 + 1 < array.length) {
                returnarray[i] = (returnarray[i] | (array[i * 2 + 1] << 8));
            }
        }
        return returnarray;
    };
    /* Date */
    ModbusClient.prototype.getDateFromHoldingRegister = function (start) {
        return this.readHoldingRegisters(start, 2).then(function (data) {
            var startDate = new Date(1970, 0, 1, 0, 0, 0), highRegister = data[1], lowRegister = data[0], highRegisterBytes = this.toByteArray(highRegister), lowRegisterBytes = this.toByteArray(lowRegister), intBytes = [highRegisterBytes[1], highRegisterBytes[0], lowRegisterBytes[1], lowRegisterBytes[0]], buf = new ArrayBuffer(4), view = new DataView(buf);
            for (var i = 0; i < intBytes.length; i++) {
                view.setUint8(i, intBytes[i]);
            }
            return new Date(startDate.getTime() + (view.getInt32(0) * 1000));
        });
    };
    /* Diffusion program */
    ModbusClient.prototype.getDiffusionProgramFromHoldingRegister = function (start) {
        return this.readHoldingRegisters(start, 6).then(function (data) {
            return new UPCDiffCo2Program(this.registerToUint32([data[0], data[1]]), // Start
            this.registerToUint32([data[2], data[3]]), // Stop
            data[4], // Mode
            data[5] // Intensity
            );
        }.bind(this));
    };
    ModbusClient.prototype.setDiffusionProgramInHoldingRegister = function (start, value) {
        var startTimeData = this.uint32ToRegister(value.start), endTimeData = this.uint32ToRegister(value.stop), data = [
            startTimeData[0], startTimeData[1],
            endTimeData[0], endTimeData[1],
            value.mode,
            value.intensity
        ];
        return this.writeMultipleRegisters(start, data);
    };
    ModbusClient.prototype.getDiffusionSunFromHoldingRegister = function (start) {
        return this.readHoldingRegisters(start, 6).then(function (data) {
            return new UPCDiffCo2Sun(this.registerToUint32([data[0], data[1]]), // Offset
            this.registerToUint32([data[2], data[3]]), // Duration
            data[5], // Intensity
            data[4] // Mode
            );
        }.bind(this));
    };
    ModbusClient.prototype.setDiffusionSunInHoldingRegister = function (start, value) {
        var startTimeData = this.uint32ToRegister(value.offset), endTimeData = this.uint32ToRegister(value.duration), data = [
            startTimeData[0], startTimeData[1],
            endTimeData[0], endTimeData[1],
            value.mode,
            value.intensity
        ];
        return this.writeMultipleRegisters(start, data);
    };
    ModbusClient.prototype.hex2a = function (hexx) {
        var hex = hexx.toString();
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    };
    ModbusClient.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: Boolean }
    ]; };
    return ModbusClient;
}(StateMachine));

var UPCDiffCo2Program = /** @class */ (function () {
    function UPCDiffCo2Program(start, stop, mode, intensity) {
        if (start === void 0) { start = 0; }
        if (stop === void 0) { stop = 0; }
        if (mode === void 0) { mode = 0; }
        if (intensity === void 0) { intensity = 0; }
        this.start = 0;
        this.stop = 0;
        this.mode = 0;
        this.intensity = 0;
        this.start = start;
        this.stop = stop;
        this.mode = mode;
        this.intensity = intensity;
    }
    UPCDiffCo2Program.prototype.getDailyConsumption = function (beltRefConsumption) {
        return Math.round((beltRefConsumption * ((this.stop - this.start) / 3600) * this.intensity / 10) * 100) / 100;
    };
    UPCDiffCo2Program.prototype.getMonthlyConsumption = function (beltRefConsumption) {
        if (this.mode >= 0 && this.mode <= 6)
            return this.getDailyConsumption(beltRefConsumption) * 4;
        else if (this.mode == 7)
            return this.getDailyConsumption(beltRefConsumption) * 7 * 4;
        else if (this.mode == 8)
            return this.getDailyConsumption(beltRefConsumption) * 2 * 4;
        else if (this.mode == 8)
            return this.getDailyConsumption(beltRefConsumption) * 5 * 4;
    };
    UPCDiffCo2Program.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return UPCDiffCo2Program;
}());

var UPCDiffCo2Sun = /** @class */ (function () {
    function UPCDiffCo2Sun(offset, duration, intensity, mode) {
        if (offset === void 0) { offset = 0; }
        if (duration === void 0) { duration = 0; }
        if (intensity === void 0) { intensity = 0; }
        if (mode === void 0) { mode = 0; }
        this.offset = 0;
        this.duration = 0;
        this.intensity = 0;
        this.mode = 0;
        this.offset = offset;
        this.duration = duration;
        this.intensity = intensity;
        this.mode = mode;
    }
    UPCDiffCo2Sun.prototype.getDailyConsumption = function (beltRefConsumption) {
        return Math.round((beltRefConsumption * (this.duration / 3600) * this.intensity / 10) * 100) / 100;
    };
    UPCDiffCo2Sun.prototype.getMonthlyConsumption = function (beltRefConsumption) {
        return this.getDailyConsumption(beltRefConsumption) * 7 * 4;
    };
    UPCDiffCo2Sun.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return UPCDiffCo2Sun;
}());



/***/ }),

/***/ "./src/app/model/upcv3/upcmodbus.ts":
/*!******************************************!*\
  !*** ./src/app/model/upcv3/upcmodbus.ts ***!
  \******************************************/
/*! exports provided: UPCModbus, UPCState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCModbus", function() { return UPCModbus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCState", function() { return UPCState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modbus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modbus */ "./src/app/model/upcv3/modbus.ts");
/* harmony import */ var _generalParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalParameters */ "./src/app/model/upcv3/generalParameters.ts");
/* harmony import */ var _diffusionParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diffusionParameters */ "./src/app/model/upcv3/diffusionParameters.ts");




var UPCModbus = /** @class */ (function () {
    /**
     * Constructor
     */
    function UPCModbus(stateChangeCallback) {
        // Attributes
        this.host = '10.1.1.1';
        this.port = 502;
        this.stateChangeCallback = null;
        this.state = UPCState.NULL;
        this.client = null;
        this.nameId = '';
        this.mode = 0;
        this.status = 0;
        this.trapNum = 0;
        this.general = new _generalParameters__WEBPACK_IMPORTED_MODULE_2__["GeneralParameters"]();
        this.diffusions = new _diffusionParameters__WEBPACK_IMPORTED_MODULE_3__["DiffusionParameters"]();
        this.co2FlowRefTrap = 0;
        this.co2Res1ActVol = 0;
        this.co2Res2ActVol = 0;
        this.diffHourSunrise = 0;
        this.diffHourSunset = 0;
        this.diffCo2Program = [
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"](),
            new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Program"]()
        ];
        this.diffCo2Sunrise = new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Sun"]();
        this.diffCo2Sunset = new _modbus__WEBPACK_IMPORTED_MODULE_1__["UPCDiffCo2Sun"]();
        this.stateChangeCallback = stateChangeCallback;
        this.init();
    }
    UPCModbus.prototype.readGeneralParameters = function () {
        var _this = this;
        this.client.getIntFromHoldingRegister(40015, 1).then(function (res) {
            alert(res);
            _this.general.upcTrapNum = res;
        });
        this.client.getStringFromHoldingRegister(40441, 8).then(function (res) {
            //alert(res);
            _this.general.upcMcuUid = res;
        });
        this.client.getFloatFromHoldingRegister(40016).then(function (res) {
            //alert(res);
            _this.general.co2FlowRefTrap = res;
        });
        this.client.getFloatFromHoldingRegister(40020).then(function (res) {
            //alert(res)
            _this.general.co2FlowRefNom = res;
        });
        this.client.getFloatFromHoldingRegister(40271).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef1 = res;
        });
        this.client.getFloatFromHoldingRegister(40273).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef2 = res;
        });
        this.client.getFloatFromHoldingRegister(40275).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef3 = res;
        });
        this.client.getFloatFromHoldingRegister(40277).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef4 = res;
        });
        this.client.getFloatFromHoldingRegister(40279).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef5 = res;
        });
        this.client.getFloatFromHoldingRegister(40281).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef6 = res;
        });
        this.client.getFloatFromHoldingRegister(40283).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef7 = res;
        });
        this.client.getFloatFromHoldingRegister(40285).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef8 = res;
        });
        this.client.getFloatFromHoldingRegister(40287).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef9 = res;
        });
        this.client.getFloatFromHoldingRegister(40289).then(function (res) {
            //alert(res);
            _this.general.co2PresOutRef10 = res;
        });
        this.client.getFloatFromHoldingRegister(40461).then(function (res) {
            //alert(res);
            _this.general.co2PressOutTemp = res;
        });
        this.client.getIntFromHoldingRegister(40401, 2).then(function (res) {
            //alert(res);
            _this.general.upcTimeZone = res;
        });
        this.client.getIntFromHoldingRegister(40376, 1).then(function (res) {
            //alert(res);
            _this.general.upcStatus = res;
        });
        this.client.getIntFromHoldingRegister(40011, 1).then(function (res) {
            //alert(res);
            _this.general.upcMode = res;
        });
        this.client.getIntFromHoldingRegister(40168, 1).then(function (res) {
            //alert(res);
            _this.general.upcFwVer = res;
        });
        this.general.co2FlowRefAdj;
        this.client.getIntFromHoldingRegister(40012, 2).then(function (res) {
            //alert(res);
            _this.general.upcClock = res;
        });
        this.client.getFloatFromHoldingRegister(40018).then(function (res) {
            //alert(res);
            _this.general.co2FlowRefAdj = res;
        });
    };
    UPCModbus.prototype.init = function () {
        // Init Client
        this.client = new _modbus__WEBPACK_IMPORTED_MODULE_1__["ModbusClient"](15000, false);
        this.client.on('reconnecting', function () {
            this.state = UPCState.RECONNECTING;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('offline', function () {
            this.state = UPCState.OFFLINE;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('online', function () {
            this.state = UPCState.ONLINE;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('error', function () {
            this.state = UPCState.ERROR;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.setHost(this.host);
        this.client.setPort(this.port);
        this.client.connect();
        this.client.reconnect();
    };
    UPCModbus.prototype.disconnect = function () {
        // Modbus client
        this.client.disconnect();
    };
    UPCModbus.prototype.reconnect = function () {
        // Modbus client
        this.client.disconnect();
        this.init();
    };
    UPCModbus.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    /**
     * Methods
     */
    UPCModbus.prototype.flashFW = function (file, loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lines, i, l, length, load;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lines = file.split('\n');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < lines.length)) return [3 /*break*/, 6];
                        l = lines[i].trim() + '\0';
                        length = l.length;
                        if (length % 2 != 0) {
                            l = l + '\0';
                            length++;
                        }
                        return [4 /*yield*/, this.client.setStringInHoldingRegister(41000, l)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.create({
                                duration: 2000,
                                message: 'Updating firmware : ' + (i / lines.length * 100).toFixed(1) + ' %'
                            })];
                    case 3:
                        load = _a.sent();
                        return [4 /*yield*/, load.present()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UPCModbus.prototype.editTrapNum = function (nbpieges, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.setIntInHoldingRegister(40015, 1, this.client.getIntFromHoldingRegister(nbpieges, 1)).then(function (data) {
                            alert(JSON.stringify(data));
                        }).catch(function (err) {
                            alert(JSON.stringify(err));
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.setFloatInHoldingRegister(40018, this.client.getFloatFromHoldingRegister(value)).then(function (data) {
                                alert(JSON.stringify(data));
                            }).catch(function (err) {
                                alert(JSON.stringify(err));
                            })];
                    case 2:
                        _a.sent();
                        ;
                        return [4 /*yield*/, this.client.setFloatInHoldingRegister(40020, this.client.getFloatFromHoldingRegister(value)).then(function (data) {
                                alert(JSON.stringify(data));
                            }).catch(function (err) {
                                alert(JSON.stringify(err));
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.client.setFloatInHoldingRegister(40016, 0.17).then(function (data) {
                                alert(JSON.stringify(data));
                            }).catch(function (err) {
                                alert(JSON.stringify(err));
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UPCModbus.prototype.getAllVars = function () {
        // TODO
        return Promise.all([
            // General parameters
            this.client.getStringFromHoldingRegister(40441, 8),
            this.client.getIntFromHoldingRegister(40168, 1),
            this.client.getStringFromHoldingRegister(40001, 10),
            this.client.getIntFromHoldingRegister(40011, 1),
            this.client.getIntFromHoldingRegister(40376, 1),
            this.client.getIntFromHoldingRegister(40012, 2),
            this.client.getIntFromHoldingRegister(40401, 2),
            this.client.getIntFromHoldingRegister(40014, 1),
            this.client.getIntFromHoldingRegister(40044, 1),
            this.client.getIntFromHoldingRegister(40015, 1),
            this.client.getFloatFromHoldingRegister(40016),
            this.client.getFloatFromHoldingRegister(40020),
            this.client.getFloatFromHoldingRegister(40018),
            this.client.getFloatFromHoldingRegister(40271),
            this.client.getFloatFromHoldingRegister(40273),
            this.client.getFloatFromHoldingRegister(40275),
            this.client.getFloatFromHoldingRegister(40277),
            this.client.getFloatFromHoldingRegister(40279),
            this.client.getFloatFromHoldingRegister(40281),
            this.client.getFloatFromHoldingRegister(40283),
            this.client.getFloatFromHoldingRegister(40285),
            this.client.getFloatFromHoldingRegister(40287),
            this.client.getFloatFromHoldingRegister(40289),
            this.client.getFloatFromHoldingRegister(40461),
            // Comunication
            this.client.getStringFromHoldingRegister(40024, 10),
            this.client.getStringFromHoldingRegister(40034, 10),
            this.client.getIntFromHoldingRegister(40022, 2),
            this.client.getIntFromHoldingRegister(40414, 1),
            this.client.getIntFromHoldingRegister(40415, 1),
            this.client.getStringFromHoldingRegister(40045, 10),
            this.client.getStringFromHoldingRegister(40055, 10),
            this.client.getIntFromHoldingRegister(40340, 1),
            // CO2 diffusion
            this.client.getIntFromHoldingRegister(40068, 2),
            this.client.getIntFromHoldingRegister(40070, 2),
            this.client.getDiffusionProgramFromHoldingRegister(40072),
            this.client.getDiffusionProgramFromHoldingRegister(40078),
            this.client.getDiffusionProgramFromHoldingRegister(40084),
            this.client.getDiffusionProgramFromHoldingRegister(40090),
            this.client.getDiffusionProgramFromHoldingRegister(40096),
            this.client.getDiffusionProgramFromHoldingRegister(40102),
            this.client.getDiffusionProgramFromHoldingRegister(40108),
            this.client.getDiffusionProgramFromHoldingRegister(40114),
            this.client.getDiffusionProgramFromHoldingRegister(40120),
            this.client.getDiffusionProgramFromHoldingRegister(40126),
            this.client.getDiffusionSunFromHoldingRegister(40132),
            this.client.getDiffusionSunFromHoldingRegister(40138),
            this.client.getFloatFromHoldingRegister(40427),
            this.client.getFloatFromHoldingRegister(40429),
            this.client.getFloatFromHoldingRegister(40431),
            this.client.getFloatFromHoldingRegister(40433),
            this.client.getFloatFromHoldingRegister(40435),
            this.client.getFloatFromHoldingRegister(40455),
            this.client.getFloatFromHoldingRegister(40437),
            this.client.getFloatFromHoldingRegister(40457),
            this.client.getFloatFromHoldingRegister(40463),
            this.client.getFloatFromHoldingRegister(40439),
            this.client.getFloatFromHoldingRegister(40459),
            this.client.getFloatFromHoldingRegister(40390),
            this.client.getIntFromHoldingRegister(40416, 1),
            this.client.getIntFromHoldingRegister(40065, 1),
            this.client.getFloatFromHoldingRegister(40451),
            // CO2 reserves
            this.client.getIntFromHoldingRegister(40151, 1),
            this.client.getIntFromHoldingRegister(40150, 1),
            this.client.getIntFromHoldingRegister(40417, 2),
            this.client.getIntFromHoldingRegister(40419, 2),
            this.client.getIntFromHoldingRegister(40382, 1),
            this.client.getIntFromHoldingRegister(40381, 1),
            this.client.getFloatFromHoldingRegister(40384),
            this.client.getFloatFromHoldingRegister(40153),
            this.client.getIntFromHoldingRegister(40155, 2),
            this.client.getFloatFromHoldingRegister(40157),
            this.client.getIntFromHoldingRegister(40159, 1),
            this.client.getFloatFromHoldingRegister(40421),
            this.client.getFloatFromHoldingRegister(40347),
            this.client.getIntFromHoldingRegister(40383, 1),
            this.client.getFloatFromHoldingRegister(40386),
            this.client.getFloatFromHoldingRegister(40161),
            this.client.getIntFromHoldingRegister(40163, 2),
            this.client.getFloatFromHoldingRegister(40165),
            this.client.getIntFromHoldingRegister(40167, 1),
            this.client.getFloatFromHoldingRegister(40449),
            this.client.getFloatFromHoldingRegister(40354),
            // Alarms setup
            this.client.getIntFromHoldingRegister(40388, 2),
            this.client.getIntFromHoldingRegister(40066, 1),
            this.client.getIntFromHoldingRegister(40169, 1),
            this.client.getIntFromHoldingRegister(40170, 1),
            this.client.getIntFromHoldingRegister(40171, 1),
            this.client.getIntFromHoldingRegister(40172, 1),
            this.client.getIntFromHoldingRegister(40173, 1),
            this.client.getIntFromHoldingRegister(40174, 1),
            this.client.getStringFromHoldingRegister(40175, 10),
            this.client.getStringFromHoldingRegister(40185, 10),
            this.client.getStringFromHoldingRegister(40195, 10),
            this.client.getStringFromHoldingRegister(40205, 10),
            this.client.getStringFromHoldingRegister(40215, 10),
            this.client.getFloatFromHoldingRegister(40227),
            this.client.getFloatFromHoldingRegister(40225),
            this.client.getFloatFromHoldingRegister(40269),
            this.client.getFloatFromHoldingRegister(40291),
            this.client.getFloatFromHoldingRegister(40293),
            this.client.getFloatFromHoldingRegister(40229),
            this.client.getFloatFromHoldingRegister(40231),
            this.client.getFloatFromHoldingRegister(40233),
            this.client.getFloatFromHoldingRegister(40235),
            this.client.getFloatFromHoldingRegister(40237),
            this.client.getFloatFromHoldingRegister(40239),
            this.client.getFloatFromHoldingRegister(40241),
            this.client.getFloatFromHoldingRegister(40243),
            this.client.getFloatFromHoldingRegister(40245),
            this.client.getFloatFromHoldingRegister(40247),
            this.client.getFloatFromHoldingRegister(40249),
            this.client.getFloatFromHoldingRegister(40251),
            this.client.getFloatFromHoldingRegister(40253),
            this.client.getFloatFromHoldingRegister(40255),
            this.client.getFloatFromHoldingRegister(40257),
            this.client.getFloatFromHoldingRegister(40259),
            this.client.getFloatFromHoldingRegister(40261),
            this.client.getFloatFromHoldingRegister(40263),
            this.client.getFloatFromHoldingRegister(40265),
            this.client.getFloatFromHoldingRegister(40267),
            this.client.getFloatFromHoldingRegister(40356),
            this.client.getFloatFromHoldingRegister(40358),
            this.client.getFloatFromHoldingRegister(40360),
            this.client.getFloatFromHoldingRegister(40362),
            this.client.getFloatFromHoldingRegister(40364),
            this.client.getFloatFromHoldingRegister(40366),
            this.client.getFloatFromHoldingRegister(40368),
            this.client.getFloatFromHoldingRegister(40370),
            this.client.getFloatFromHoldingRegister(40372),
            this.client.getFloatFromHoldingRegister(40374),
            this.client.getFloatFromHoldingRegister(40465),
            // Auxiliary parameters
            this.client.getStringFromHoldingRegister(40295, 15),
            this.client.getStringFromHoldingRegister(40310, 10),
            this.client.getStringFromHoldingRegister(40320, 10),
            this.client.getStringFromHoldingRegister(40330, 10),
            this.client.getFloatFromHoldingRegister(40453),
            this.client.getFloatFromHoldingRegister(40377),
            this.client.getFloatFromHoldingRegister(40379),
            this.client.getFloatFromHoldingRegister(40423),
            this.client.getFloatFromHoldingRegister(40425) // upcBattTemp
        ]).then(function (results) {
            return {
                // General parameters
                general: {
                    upcMcuUid: results[0], upcFwVer: results[1], upcNameId: results[2], upcMode: results[3], upcStatus: results[4], upcClock: results[5], upcTimeZone: results[6],
                    upcLanguage: results[7], upcEventNum: results[8], upcTrapNum: results[9], co2FlowRefTrap: results[10], co2FlowRefNom: results[11], co2FlowRefAdj: results[12],
                    co2PressOutRef: [results[13], results[14], results[15], results[16], results[17], results[18], results[19], results[20], results[21], results[22]],
                    co2PressOutTemp: results[23]
                },
                // Comunication
                comunication: {
                    comMdmName: results[24], comMdmPass: results[25], comMdmIpAdr: results[26], comMdmMode: results[27],
                    comMdmLevel: results[28], comWifiSsid: results[29], comWifiPass: results[30], comWifiApCh: results[31]
                },
                // CO2 diffusion
                co2Diffusion: {
                    diffHourSunRise: results[32], diffHourSunSet: results[33],
                    diffCo2Program: [results[34], results[35], results[36], results[37], results[38], results[39], results[40], results[41], results[42], results[43]],
                    diffCo2Sunrise: results[44], diffCo2Sunset: results[45], co2PressInpMeas1: results[46], co2PressInpMeas2: results[47], co2PressOutMeas: results[48],
                    co2FlowMeas: results[49], co2PressInpAvg: results[50], co2PressInpOffs: results[51], co2PressOutAvg: results[52], co2PressoutOffs: results[53],
                    co2PressOutComp: results[54], co2FlowAvg: results[55], co2FlowOffs: results[56], co2FlowGain: results[57], upcCo2DiffLvl: results[58],
                    upcDiffLvlAdj: results[59], co2TempAvg: results[60]
                },
                // CO2 reserves
                co2Reserves: {
                    co2ResActive: results[61], co2ResActAdj: results[62], co2ResActPrev: results[63], co2ResInactPrev: results[64], co2ResType: results[65],
                    co2Res1Status: results[66], co2Res1FillNew: results[67], co2Res1FillVol: results[68], co2Res1FillTime: results[69], co2Res1ActVol: results[70],
                    co2Res1ActDur: results[71], co2Res1StartVol: results[72], co2Res1AuxVol: results[73], co2Res2Status: results[74], co2Res2FillNew: results[75],
                    co2Res2FillVol: results[76], co2Res2FillTime: results[77], co2Res2ActVol: results[78], co2Res2ActDur: results[79], co2Res2StartVol: results[80],
                    co2Res2AuxVol: results[81]
                },
                // Alarms setup
                alarms: {
                    alrResEmptyTest: results[82], alrResLowEn: results[83], alrResEmptyEn: results[84], alrPressInpEn: results[85], alrPressOutEn: results[86], alrFlowAvgEn: results[87],
                    alrPowDownEn: results[88], alrPowBackEn: results[89], alrSmsNum: [results[90], results[91], results[92], results[93], results[94]], alrResLowLevel: results[95],
                    alrResEmptyFlow: results[96], alrPressInpTol: results[97], alrPressOutTol: results[98], alrFlowSetTol: results[99],
                    alrPressInpSet1: [results[100], results[101], results[102], results[103], results[104], results[105], results[106], results[107], results[108], results[109]],
                    alrPressInpSet2: [results[110], results[111], results[112], results[113], results[114], results[115], results[116], results[117], results[118], results[119]],
                    alrPressOutSet: [results[120], results[121], results[122], results[123], results[124], results[125], results[126], results[127], results[128], results[129]],
                    alrPressSetTemp: results[130]
                },
                // Auxiliary parameters
                auxiliary: {
                    comWebSrvUrl: results[131], comMdmApnId: results[132], comMdmApnUser: results[133], comMdmApnPass: results[134], upcCo2PidProp: results[135],
                    upcCo2PidInteg: results[136], upcCo2PidDiff: results[137], upcBattChrg: results[138], upcBattTemp: results[139]
                }
            };
        });
    };
    UPCModbus.prototype.reset = function () {
        return Promise.all([this.client.setIntInHoldingRegister(40011, 1, 0xffff)]);
    };
    UPCModbus.prototype.wipe = function () {
        return Promise.all([this.client.setIntInHoldingRegister(40011, 1, 0xeeee)]);
    };
    UPCModbus.litterToKilograms = 0.001974;
    UPCModbus.ctorParameters = function () { return [
        null
    ]; };
    return UPCModbus;
}());

var UPCState;
(function (UPCState) {
    UPCState[UPCState["RECONNECTING"] = 0] = "RECONNECTING";
    UPCState[UPCState["ONLINE"] = 1] = "ONLINE";
    UPCState[UPCState["OFFLINE"] = 2] = "OFFLINE";
    UPCState[UPCState["ERROR"] = 3] = "ERROR";
    UPCState[UPCState["NULL"] = 4] = "NULL";
})(UPCState || (UPCState = {}));


/***/ })

}]);
//# sourceMappingURL=default~addbottleceint-addbottleceint-module~addbottlemodal-addbottlemodal-module~adjustment-adjustm~71cc49a6-es5.js.map