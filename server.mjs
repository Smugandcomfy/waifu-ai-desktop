import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  try {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  } catch (e) {
    throw mod2 = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// node_modules/hash-wasm/dist/index.umd.js
var require_index_umd = __commonJS({
  "node_modules/hash-wasm/dist/index.umd.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.hashwasm = {}));
    })(exports, (function(exports2) {
      "use strict";
      var name$l = "adler32";
      var data$l = "AGFzbQEAAAABDANgAAF/YAAAYAF/AAMHBgABAgEAAgUEAQECAgYOAn8BQYCJBQt/AEGACAsHcAgGbWVtb3J5AgAOSGFzaF9HZXRCdWZmZXIAAAlIYXNoX0luaXQAAQtIYXNoX1VwZGF0ZQACCkhhc2hfRmluYWwAAw1IYXNoX0dldFN0YXRlAAQOSGFzaF9DYWxjdWxhdGUABQpTVEFURV9TSVpFAwEK6wkGBQBBgAkLCgBBAEEBNgKECAvjCAEHf0EAKAKECCIBQf//A3EhAiABQRB2IQMCQAJAIABBAUcNACACQQAtAIAJaiIBQY+AfGogASABQfD/A0sbIgEgA2oiBEEQdCIFQYCAPGogBSAEQfD/A0sbIAFyIQEMAQsCQAJAAkACQAJAIABBEEkNAEGACSEGIABBsCtJDQFBgAkhBgNAQQAhBQNAIAYgBWoiASgCACIEQf8BcSACaiICIANqIAIgBEEIdkH/AXFqIgJqIAIgBEEQdkH/AXFqIgJqIAIgBEEYdmoiAmogAiABQQRqKAIAIgRB/wFxaiICaiACIARBCHZB/wFxaiICaiACIARBEHZB/wFxaiICaiACIARBGHZqIgJqIAIgAUEIaigCACIEQf8BcWoiAmogAiAEQQh2Qf8BcWoiAmogAiAEQRB2Qf8BcWoiAmogAiAEQRh2aiIEaiAEIAFBDGooAgAiAUH/AXFqIgRqIAQgAUEIdkH/AXFqIgRqIAQgAUEQdkH/AXFqIgRqIAQgAUEYdmoiAmohAyAFQRBqIgVBsCtHDQALIANB8f8DcCEDIAJB8f8DcCECIAZBsCtqIQYgAEHQVGoiAEGvK0sNAAsgAEUNBCAAQQ9LDQEMAgsCQCAARQ0AAkACQCAAQQNxIgUNAEGACSEBIAAhBAwBCyAAQXxxIQRBACEBA0AgAiABQYAJai0AAGoiAiADaiEDIAUgAUEBaiIBRw0ACyAFQYAJaiEBCyAAQQRJDQADQCACIAEtAABqIgUgAS0AAWoiBiABLQACaiIAIAFBA2otAABqIgIgACAGIAUgA2pqamohAyABQQRqIQEgBEF8aiIEDQALCyACQY+AfGogAiACQfD/A0sbIANB8f8DcEEQdHIhAQwECwNAIAYoAgAiAUH/AXEgAmoiBCADaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgRqIAQgBkEEaigCACIBQf8BcWoiBGogBCABQQh2Qf8BcWoiBGogBCABQRB2Qf8BcWoiBGogBCABQRh2aiIEaiAEIAZBCGooAgAiAUH/AXFqIgRqIAQgAUEIdkH/AXFqIgRqIAQgAUEQdkH/AXFqIgRqIAQgAUEYdmoiBGogBCAGQQxqKAIAIgFB/wFxaiIEaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgJqIQMgBkEQaiEGIABBcGoiAEEPSw0ACyAARQ0BCyAAQX9qIQcCQCAAQQNxIgVFDQAgAEF8cSEAIAUhBCAGIQEDQCACIAEtAABqIgIgA2ohAyABQQFqIQEgBEF/aiIEDQALIAYgBWohBgsgB0EDSQ0AA0AgAiAGLQAAaiIBIAYtAAFqIgQgBi0AAmoiBSAGQQNqLQAAaiICIAUgBCABIANqampqIQMgBkEEaiEGIABBfGoiAA0ACwsgA0Hx/wNwIQMgAkHx/wNwIQILIAIgA0EQdHIhAQtBACABNgKECAsxAQF/QQBBACgChAgiAEEYdCAAQYD+A3FBCHRyIABBCHZBgP4DcSAAQRh2cnI2AoAJCwUAQYQICzsAQQBBATYChAggABACQQBBACgChAgiAEEYdCAAQYD+A3FBCHRyIABBCHZBgP4DcSAAQRh2cnI2AoAJCwsVAgBBgAgLBAQAAAAAQYQICwQBAAAA";
      var hash$l = "02ddbd17";
      var wasmJson$l = {
        name: name$l,
        data: data$l,
        hash: hash$l
      };
      function __awaiter(thisArg, _arguments, P3, generator) {
        function adopt(value) {
          return value instanceof P3 ? value : new P3(function(resolve) {
            resolve(value);
          });
        }
        return new (P3 || (P3 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }
      typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      class Mutex {
        constructor() {
          this.mutex = Promise.resolve();
        }
        lock() {
          let begin = () => {
          };
          this.mutex = this.mutex.then(() => new Promise(begin));
          return new Promise((res) => {
            begin = res;
          });
        }
        dispatch(fn) {
          return __awaiter(this, void 0, void 0, function* () {
            const unlock = yield this.lock();
            try {
              return yield Promise.resolve(fn());
            } finally {
              unlock();
            }
          });
        }
      }
      var _a;
      function getGlobal() {
        if (typeof globalThis !== "undefined")
          return globalThis;
        if (typeof self !== "undefined")
          return self;
        if (typeof window !== "undefined")
          return window;
        return global;
      }
      const globalObject = getGlobal();
      const nodeBuffer = (_a = globalObject.Buffer) !== null && _a !== void 0 ? _a : null;
      const textEncoder = globalObject.TextEncoder ? new globalObject.TextEncoder() : null;
      function intArrayToString(arr, len) {
        return String.fromCharCode(...arr.subarray(0, len));
      }
      function hexCharCodesToInt(a2, b2) {
        return (a2 & 15) + (a2 >> 6 | a2 >> 3 & 8) << 4 | (b2 & 15) + (b2 >> 6 | b2 >> 3 & 8);
      }
      function writeHexToUInt8(buf, str2) {
        const size = str2.length >> 1;
        for (let i = 0; i < size; i++) {
          const index = i << 1;
          buf[i] = hexCharCodesToInt(str2.charCodeAt(index), str2.charCodeAt(index + 1));
        }
      }
      function hexStringEqualsUInt8(str2, buf) {
        if (str2.length !== buf.length * 2) {
          return false;
        }
        for (let i = 0; i < buf.length; i++) {
          const strIndex = i << 1;
          if (buf[i] !== hexCharCodesToInt(str2.charCodeAt(strIndex), str2.charCodeAt(strIndex + 1))) {
            return false;
          }
        }
        return true;
      }
      const alpha = "a".charCodeAt(0) - 10;
      const digit = "0".charCodeAt(0);
      function getDigestHex(tmpBuffer, input, hashLength) {
        let p2 = 0;
        for (let i = 0; i < hashLength; i++) {
          let nibble = input[i] >>> 4;
          tmpBuffer[p2++] = nibble > 9 ? nibble + alpha : nibble + digit;
          nibble = input[i] & 15;
          tmpBuffer[p2++] = nibble > 9 ? nibble + alpha : nibble + digit;
        }
        return String.fromCharCode.apply(null, tmpBuffer);
      }
      const getUInt8Buffer = nodeBuffer !== null ? (data2) => {
        if (typeof data2 === "string") {
          const buf = nodeBuffer.from(data2, "utf8");
          return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
        }
        if (nodeBuffer.isBuffer(data2)) {
          return new Uint8Array(data2.buffer, data2.byteOffset, data2.length);
        }
        if (ArrayBuffer.isView(data2)) {
          return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength);
        }
        throw new Error("Invalid data type!");
      } : (data2) => {
        if (typeof data2 === "string") {
          return textEncoder.encode(data2);
        }
        if (ArrayBuffer.isView(data2)) {
          return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength);
        }
        throw new Error("Invalid data type!");
      };
      const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      const base64Lookup = new Uint8Array(256);
      for (let i = 0; i < base64Chars.length; i++) {
        base64Lookup[base64Chars.charCodeAt(i)] = i;
      }
      function encodeBase64(data2, pad = true) {
        const len = data2.length;
        const extraBytes = len % 3;
        const parts = [];
        const len2 = len - extraBytes;
        for (let i = 0; i < len2; i += 3) {
          const tmp = (data2[i] << 16 & 16711680) + (data2[i + 1] << 8 & 65280) + (data2[i + 2] & 255);
          const triplet = base64Chars.charAt(tmp >> 18 & 63) + base64Chars.charAt(tmp >> 12 & 63) + base64Chars.charAt(tmp >> 6 & 63) + base64Chars.charAt(tmp & 63);
          parts.push(triplet);
        }
        if (extraBytes === 1) {
          const tmp = data2[len - 1];
          const a2 = base64Chars.charAt(tmp >> 2);
          const b2 = base64Chars.charAt(tmp << 4 & 63);
          parts.push(`${a2}${b2}`);
          if (pad) {
            parts.push("==");
          }
        } else if (extraBytes === 2) {
          const tmp = (data2[len - 2] << 8) + data2[len - 1];
          const a2 = base64Chars.charAt(tmp >> 10);
          const b2 = base64Chars.charAt(tmp >> 4 & 63);
          const c2 = base64Chars.charAt(tmp << 2 & 63);
          parts.push(`${a2}${b2}${c2}`);
          if (pad) {
            parts.push("=");
          }
        }
        return parts.join("");
      }
      function getDecodeBase64Length(data2) {
        let bufferLength = Math.floor(data2.length * 0.75);
        const len = data2.length;
        if (data2[len - 1] === "=") {
          bufferLength -= 1;
          if (data2[len - 2] === "=") {
            bufferLength -= 1;
          }
        }
        return bufferLength;
      }
      function decodeBase64(data2) {
        const bufferLength = getDecodeBase64Length(data2);
        const len = data2.length;
        const bytes = new Uint8Array(bufferLength);
        let p2 = 0;
        for (let i = 0; i < len; i += 4) {
          const encoded1 = base64Lookup[data2.charCodeAt(i)];
          const encoded2 = base64Lookup[data2.charCodeAt(i + 1)];
          const encoded3 = base64Lookup[data2.charCodeAt(i + 2)];
          const encoded4 = base64Lookup[data2.charCodeAt(i + 3)];
          bytes[p2] = encoded1 << 2 | encoded2 >> 4;
          p2 += 1;
          bytes[p2] = (encoded2 & 15) << 4 | encoded3 >> 2;
          p2 += 1;
          bytes[p2] = (encoded3 & 3) << 6 | encoded4 & 63;
          p2 += 1;
        }
        return bytes;
      }
      const MAX_HEAP = 16 * 1024;
      const WASM_FUNC_HASH_LENGTH = 4;
      const wasmMutex = new Mutex();
      const wasmModuleCache = /* @__PURE__ */ new Map();
      function WASMInterface(binary, hashLength) {
        return __awaiter(this, void 0, void 0, function* () {
          let wasmInstance = null;
          let memoryView = null;
          let initialized = false;
          if (typeof WebAssembly === "undefined") {
            throw new Error("WebAssembly is not supported in this environment!");
          }
          const writeMemory = (data2, offset = 0) => {
            memoryView.set(data2, offset);
          };
          const getMemory = () => memoryView;
          const getExports = () => wasmInstance.exports;
          const setMemorySize = (totalSize) => {
            wasmInstance.exports.Hash_SetMemorySize(totalSize);
            const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
            const memoryBuffer = wasmInstance.exports.memory.buffer;
            memoryView = new Uint8Array(memoryBuffer, arrayOffset, totalSize);
          };
          const getStateSize = () => {
            const view = new DataView(wasmInstance.exports.memory.buffer);
            const stateSize = view.getUint32(wasmInstance.exports.STATE_SIZE, true);
            return stateSize;
          };
          const loadWASMPromise = wasmMutex.dispatch(() => __awaiter(this, void 0, void 0, function* () {
            if (!wasmModuleCache.has(binary.name)) {
              const asm = decodeBase64(binary.data);
              const promise = WebAssembly.compile(asm);
              wasmModuleCache.set(binary.name, promise);
            }
            const module2 = yield wasmModuleCache.get(binary.name);
            wasmInstance = yield WebAssembly.instantiate(module2, {
              // env: {
              //   emscripten_memcpy_big: (dest, src, num) => {
              //     const memoryBuffer = wasmInstance.exports.memory.buffer;
              //     const memView = new Uint8Array(memoryBuffer, 0);
              //     memView.set(memView.subarray(src, src + num), dest);
              //   },
              //   print_memory: (offset, len) => {
              //     const memoryBuffer = wasmInstance.exports.memory.buffer;
              //     const memView = new Uint8Array(memoryBuffer, 0);
              //     console.log('print_int32', memView.subarray(offset, offset + len));
              //   },
              // },
            });
          }));
          const setupInterface = () => __awaiter(this, void 0, void 0, function* () {
            if (!wasmInstance) {
              yield loadWASMPromise;
            }
            const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
            const memoryBuffer = wasmInstance.exports.memory.buffer;
            memoryView = new Uint8Array(memoryBuffer, arrayOffset, MAX_HEAP);
          });
          const init = (bits = null) => {
            initialized = true;
            wasmInstance.exports.Hash_Init(bits);
          };
          const updateUInt8Array = (data2) => {
            let read = 0;
            while (read < data2.length) {
              const chunk = data2.subarray(read, read + MAX_HEAP);
              read += chunk.length;
              memoryView.set(chunk);
              wasmInstance.exports.Hash_Update(chunk.length);
            }
          };
          const update = (data2) => {
            if (!initialized) {
              throw new Error("update() called before init()");
            }
            const Uint8Buffer = getUInt8Buffer(data2);
            updateUInt8Array(Uint8Buffer);
          };
          const digestChars = new Uint8Array(hashLength * 2);
          const digest = (outputType, padding = null) => {
            if (!initialized) {
              throw new Error("digest() called before init()");
            }
            initialized = false;
            wasmInstance.exports.Hash_Final(padding);
            if (outputType === "binary") {
              return memoryView.slice(0, hashLength);
            }
            return getDigestHex(digestChars, memoryView, hashLength);
          };
          const save = () => {
            if (!initialized) {
              throw new Error("save() can only be called after init() and before digest()");
            }
            const stateOffset = wasmInstance.exports.Hash_GetState();
            const stateLength = getStateSize();
            const memoryBuffer = wasmInstance.exports.memory.buffer;
            const internalState = new Uint8Array(memoryBuffer, stateOffset, stateLength);
            const prefixedState = new Uint8Array(WASM_FUNC_HASH_LENGTH + stateLength);
            writeHexToUInt8(prefixedState, binary.hash);
            prefixedState.set(internalState, WASM_FUNC_HASH_LENGTH);
            return prefixedState;
          };
          const load = (state) => {
            if (!(state instanceof Uint8Array)) {
              throw new Error("load() expects an Uint8Array generated by save()");
            }
            const stateOffset = wasmInstance.exports.Hash_GetState();
            const stateLength = getStateSize();
            const overallLength = WASM_FUNC_HASH_LENGTH + stateLength;
            const memoryBuffer = wasmInstance.exports.memory.buffer;
            if (state.length !== overallLength) {
              throw new Error(`Bad state length (expected ${overallLength} bytes, got ${state.length})`);
            }
            if (!hexStringEqualsUInt8(binary.hash, state.subarray(0, WASM_FUNC_HASH_LENGTH))) {
              throw new Error("This state was written by an incompatible hash implementation");
            }
            const internalState = state.subarray(WASM_FUNC_HASH_LENGTH);
            new Uint8Array(memoryBuffer, stateOffset, stateLength).set(internalState);
            initialized = true;
          };
          const isDataShort = (data2) => {
            if (typeof data2 === "string") {
              return data2.length < MAX_HEAP / 4;
            }
            return data2.byteLength < MAX_HEAP;
          };
          let canSimplify = isDataShort;
          switch (binary.name) {
            case "argon2":
            case "scrypt":
              canSimplify = () => true;
              break;
            case "blake2b":
            case "blake2s":
              canSimplify = (data2, initParam) => initParam <= 512 && isDataShort(data2);
              break;
            case "blake3":
              canSimplify = (data2, initParam) => initParam === 0 && isDataShort(data2);
              break;
            case "xxhash64":
            // cannot simplify
            case "xxhash3":
            case "xxhash128":
            case "crc64":
              canSimplify = () => false;
              break;
          }
          const calculate = (data2, initParam = null, digestParam = null) => {
            if (!canSimplify(data2, initParam)) {
              init(initParam);
              update(data2);
              return digest("hex", digestParam);
            }
            const buffer = getUInt8Buffer(data2);
            memoryView.set(buffer);
            wasmInstance.exports.Hash_Calculate(buffer.length, initParam, digestParam);
            return getDigestHex(digestChars, memoryView, hashLength);
          };
          yield setupInterface();
          return {
            getMemory,
            writeMemory,
            getExports,
            setMemorySize,
            init,
            update,
            digest,
            save,
            load,
            calculate,
            hashLength
          };
        });
      }
      function lockedCreate(mutex2, binary, hashLength) {
        return __awaiter(this, void 0, void 0, function* () {
          const unlock = yield mutex2.lock();
          const wasm = yield WASMInterface(binary, hashLength);
          unlock();
          return wasm;
        });
      }
      const mutex$l = new Mutex();
      let wasmCache$l = null;
      function adler32(data2) {
        if (wasmCache$l === null) {
          return lockedCreate(mutex$l, wasmJson$l, 4).then((wasm) => {
            wasmCache$l = wasm;
            return wasmCache$l.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$l.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createAdler32() {
        return WASMInterface(wasmJson$l, 4).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 4,
            digestSize: 4
          };
          return obj;
        });
      }
      var name$k = "argon2";
      var data$k = "AGFzbQEAAAABKQVgAX8Bf2AAAX9gEH9/f39/f39/f39/f39/f38AYAR/f39/AGACf38AAwYFAAECAwQFBgEBAoCAAgYIAX8BQZCoBAsHQQQGbWVtb3J5AgASSGFzaF9TZXRNZW1vcnlTaXplAAAOSGFzaF9HZXRCdWZmZXIAAQ5IYXNoX0NhbGN1bGF0ZQAECvEyBVgBAn9BACEBAkAgAEEAKAKICCICRg0AAkAgACACayIAQRB2IABBgIB8cSAASWoiAEAAQX9HDQBB/wHADwtBACEBQQBBACkDiAggAEEQdK18NwOICAsgAcALcAECfwJAQQAoAoAIIgANAEEAPwBBEHQiADYCgAhBACgCiAgiAUGAgCBGDQACQEGAgCAgAWsiAEEQdiAAQYCAfHEgAElqIgBAAEF/Rw0AQQAPC0EAQQApA4gIIABBEHStfDcDiAhBACgCgAghAAsgAAvcDgECfiAAIAQpAwAiECAAKQMAIhF8IBFCAYZC/v///x+DIBBC/////w+DfnwiEDcDACAMIBAgDCkDAIVCIIkiEDcDACAIIBAgCCkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgBCAQIAQpAwCFQiiJIhA3AwAgACAQIAApAwAiEXwgEEL/////D4MgEUIBhkL+////H4N+fCIQNwMAIAwgECAMKQMAhUIwiSIQNwMAIAggECAIKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACAEIBAgBCkDAIVCAYk3AwAgASAFKQMAIhAgASkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDSAQIA0pAwCFQiCJIhA3AwAgCSAQIAkpAwAiEXwgEUIBhkL+////H4MgEEL/////D4N+fCIQNwMAIAUgECAFKQMAhUIoiSIQNwMAIAEgECABKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACANIBAgDSkDAIVCMIkiEDcDACAJIBAgCSkDACIRfCAQQv////8PgyARQgGGQv7///8fg358IhA3AwAgBSAQIAUpAwCFQgGJNwMAIAIgBikDACIQIAIpAwAiEXwgEUIBhkL+////H4MgEEL/////D4N+fCIQNwMAIA4gECAOKQMAhUIgiSIQNwMAIAogECAKKQMAIhF8IBFCAYZC/v///x+DIBBC/////w+DfnwiEDcDACAGIBAgBikDAIVCKIkiEDcDACACIBAgAikDACIRfCAQQv////8PgyARQgGGQv7///8fg358IhA3AwAgDiAQIA4pAwCFQjCJIhA3AwAgCiAQIAopAwAiEXwgEEL/////D4MgEUIBhkL+////H4N+fCIQNwMAIAYgECAGKQMAhUIBiTcDACADIAcpAwAiECADKQMAIhF8IBFCAYZC/v///x+DIBBC/////w+DfnwiEDcDACAPIBAgDykDAIVCIIkiEDcDACALIBAgCykDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgByAQIAcpAwCFQiiJIhA3AwAgAyAQIAMpAwAiEXwgEEL/////D4MgEUIBhkL+////H4N+fCIQNwMAIA8gECAPKQMAhUIwiSIQNwMAIAsgECALKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACAHIBAgBykDAIVCAYk3AwAgACAFKQMAIhAgACkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDyAQIA8pAwCFQiCJIhA3AwAgCiAQIAopAwAiEXwgEUIBhkL+////H4MgEEL/////D4N+fCIQNwMAIAUgECAFKQMAhUIoiSIQNwMAIAAgECAAKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACAPIBAgDykDAIVCMIkiEDcDACAKIBAgCikDACIRfCAQQv////8PgyARQgGGQv7///8fg358IhA3AwAgBSAQIAUpAwCFQgGJNwMAIAEgBikDACIQIAEpAwAiEXwgEUIBhkL+////H4MgEEL/////D4N+fCIQNwMAIAwgECAMKQMAhUIgiSIQNwMAIAsgECALKQMAIhF8IBFCAYZC/v///x+DIBBC/////w+DfnwiEDcDACAGIBAgBikDAIVCKIkiEDcDACABIBAgASkDACIRfCAQQv////8PgyARQgGGQv7///8fg358IhA3AwAgDCAQIAwpAwCFQjCJIhA3AwAgCyAQIAspAwAiEXwgEEL/////D4MgEUIBhkL+////H4N+fCIQNwMAIAYgECAGKQMAhUIBiTcDACACIAcpAwAiECACKQMAIhF8IBFCAYZC/v///x+DIBBC/////w+DfnwiEDcDACANIBAgDSkDAIVCIIkiEDcDACAIIBAgCCkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgByAQIAcpAwCFQiiJIhA3AwAgAiAQIAIpAwAiEXwgEEL/////D4MgEUIBhkL+////H4N+fCIQNwMAIA0gECANKQMAhUIwiSIQNwMAIAggECAIKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACAHIBAgBykDAIVCAYk3AwAgAyAEKQMAIhAgAykDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDiAQIA4pAwCFQiCJIhA3AwAgCSAQIAkpAwAiEXwgEUIBhkL+////H4MgEEL/////D4N+fCIQNwMAIAQgECAEKQMAhUIoiSIQNwMAIAMgECADKQMAIhF8IBBC/////w+DIBFCAYZC/v///x+DfnwiEDcDACAOIBAgDikDAIVCMIkiEDcDACAJIBAgCSkDACIRfCAQQv////8PgyARQgGGQv7///8fg358IhA3AwAgBCAQIAQpAwCFQgGJNwMAC98aAQN/QQAhBEEAIAIpAwAgASkDAIU3A5AIQQAgAikDCCABKQMIhTcDmAhBACACKQMQIAEpAxCFNwOgCEEAIAIpAxggASkDGIU3A6gIQQAgAikDICABKQMghTcDsAhBACACKQMoIAEpAyiFNwO4CEEAIAIpAzAgASkDMIU3A8AIQQAgAikDOCABKQM4hTcDyAhBACACKQNAIAEpA0CFNwPQCEEAIAIpA0ggASkDSIU3A9gIQQAgAikDUCABKQNQhTcD4AhBACACKQNYIAEpA1iFNwPoCEEAIAIpA2AgASkDYIU3A/AIQQAgAikDaCABKQNohTcD+AhBACACKQNwIAEpA3CFNwOACUEAIAIpA3ggASkDeIU3A4gJQQAgAikDgAEgASkDgAGFNwOQCUEAIAIpA4gBIAEpA4gBhTcDmAlBACACKQOQASABKQOQAYU3A6AJQQAgAikDmAEgASkDmAGFNwOoCUEAIAIpA6ABIAEpA6ABhTcDsAlBACACKQOoASABKQOoAYU3A7gJQQAgAikDsAEgASkDsAGFNwPACUEAIAIpA7gBIAEpA7gBhTcDyAlBACACKQPAASABKQPAAYU3A9AJQQAgAikDyAEgASkD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";
      var hash$k = "e4cdc523";
      var wasmJson$k = {
        name: name$k,
        data: data$k,
        hash: hash$k
      };
      var name$j = "blake2b";
      var data$j = "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";
      var hash$j = "c6f286e6";
      var wasmJson$j = {
        name: name$j,
        data: data$j,
        hash: hash$j
      };
      const mutex$k = new Mutex();
      let wasmCache$k = null;
      function validateBits$4(bits) {
        if (!Number.isInteger(bits) || bits < 8 || bits > 512 || bits % 8 !== 0) {
          return new Error("Invalid variant! Valid values: 8, 16, ..., 512");
        }
        return null;
      }
      function getInitParam$1(outputBits, keyBits) {
        return outputBits | keyBits << 16;
      }
      function blake2b(data2, bits = 512, key = null) {
        if (validateBits$4(bits)) {
          return Promise.reject(validateBits$4(bits));
        }
        let keyBuffer = null;
        let initParam = bits;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length > 64) {
            return Promise.reject(new Error("Max key length is 64 bytes"));
          }
          initParam = getInitParam$1(bits, keyBuffer.length);
        }
        const hashLength = bits / 8;
        if (wasmCache$k === null || wasmCache$k.hashLength !== hashLength) {
          return lockedCreate(mutex$k, wasmJson$j, hashLength).then((wasm) => {
            wasmCache$k = wasm;
            if (initParam > 512) {
              wasmCache$k.writeMemory(keyBuffer);
            }
            return wasmCache$k.calculate(data2, initParam);
          });
        }
        try {
          if (initParam > 512) {
            wasmCache$k.writeMemory(keyBuffer);
          }
          const hash2 = wasmCache$k.calculate(data2, initParam);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createBLAKE2b(bits = 512, key = null) {
        if (validateBits$4(bits)) {
          return Promise.reject(validateBits$4(bits));
        }
        let keyBuffer = null;
        let initParam = bits;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length > 64) {
            return Promise.reject(new Error("Max key length is 64 bytes"));
          }
          initParam = getInitParam$1(bits, keyBuffer.length);
        }
        const outputSize = bits / 8;
        return WASMInterface(wasmJson$j, outputSize).then((wasm) => {
          if (initParam > 512) {
            wasm.writeMemory(keyBuffer);
          }
          wasm.init(initParam);
          const obj = {
            init: initParam > 512 ? () => {
              wasm.writeMemory(keyBuffer);
              wasm.init(initParam);
              return obj;
            } : () => {
              wasm.init(initParam);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 128,
            digestSize: outputSize
          };
          return obj;
        });
      }
      function encodeResult(salt, options, res) {
        const parameters = [
          `m=${options.memorySize}`,
          `t=${options.iterations}`,
          `p=${options.parallelism}`
        ].join(",");
        return `$argon2${options.hashType}$v=19$${parameters}$${encodeBase64(salt, false)}$${encodeBase64(res, false)}`;
      }
      const uint32View = new DataView(new ArrayBuffer(4));
      function int32LE(x2) {
        uint32View.setInt32(0, x2, true);
        return new Uint8Array(uint32View.buffer);
      }
      function hashFunc(blake512, buf, len) {
        return __awaiter(this, void 0, void 0, function* () {
          if (len <= 64) {
            const blake = yield createBLAKE2b(len * 8);
            blake.update(int32LE(len));
            blake.update(buf);
            return blake.digest("binary");
          }
          const r2 = Math.ceil(len / 32) - 2;
          const ret = new Uint8Array(len);
          blake512.init();
          blake512.update(int32LE(len));
          blake512.update(buf);
          let vp = blake512.digest("binary");
          ret.set(vp.subarray(0, 32), 0);
          for (let i = 1; i < r2; i++) {
            blake512.init();
            blake512.update(vp);
            vp = blake512.digest("binary");
            ret.set(vp.subarray(0, 32), i * 32);
          }
          const partialBytesNeeded = len - 32 * r2;
          let blakeSmall;
          if (partialBytesNeeded === 64) {
            blakeSmall = blake512;
            blakeSmall.init();
          } else {
            blakeSmall = yield createBLAKE2b(partialBytesNeeded * 8);
          }
          blakeSmall.update(vp);
          vp = blakeSmall.digest("binary");
          ret.set(vp.subarray(0, partialBytesNeeded), r2 * 32);
          return ret;
        });
      }
      function getHashType(type) {
        switch (type) {
          case "d":
            return 0;
          case "i":
            return 1;
          default:
            return 2;
        }
      }
      function argon2Internal(options) {
        return __awaiter(this, void 0, void 0, function* () {
          var _a2;
          const { parallelism, iterations, hashLength } = options;
          const password = getUInt8Buffer(options.password);
          const salt = getUInt8Buffer(options.salt);
          const version = 19;
          const hashType = getHashType(options.hashType);
          const { memorySize } = options;
          const secret = getUInt8Buffer((_a2 = options.secret) !== null && _a2 !== void 0 ? _a2 : "");
          const [argon2Interface, blake512] = yield Promise.all([
            WASMInterface(wasmJson$k, 1024),
            createBLAKE2b(512)
          ]);
          argon2Interface.setMemorySize(memorySize * 1024 + 1024);
          const initVector = new Uint8Array(24);
          const initVectorView = new DataView(initVector.buffer);
          initVectorView.setInt32(0, parallelism, true);
          initVectorView.setInt32(4, hashLength, true);
          initVectorView.setInt32(8, memorySize, true);
          initVectorView.setInt32(12, iterations, true);
          initVectorView.setInt32(16, version, true);
          initVectorView.setInt32(20, hashType, true);
          argon2Interface.writeMemory(initVector, memorySize * 1024);
          blake512.init();
          blake512.update(initVector);
          blake512.update(int32LE(password.length));
          blake512.update(password);
          blake512.update(int32LE(salt.length));
          blake512.update(salt);
          blake512.update(int32LE(secret.length));
          blake512.update(secret);
          blake512.update(int32LE(0));
          const segments = Math.floor(memorySize / (parallelism * 4));
          const lanes = segments * 4;
          const param = new Uint8Array(72);
          const H0 = blake512.digest("binary");
          param.set(H0);
          for (let lane = 0; lane < parallelism; lane++) {
            param.set(int32LE(0), 64);
            param.set(int32LE(lane), 68);
            let position = lane * lanes;
            let chunk = yield hashFunc(blake512, param, 1024);
            argon2Interface.writeMemory(chunk, position * 1024);
            position += 1;
            param.set(int32LE(1), 64);
            chunk = yield hashFunc(blake512, param, 1024);
            argon2Interface.writeMemory(chunk, position * 1024);
          }
          const C2 = new Uint8Array(1024);
          writeHexToUInt8(C2, argon2Interface.calculate(new Uint8Array([]), memorySize));
          const res = yield hashFunc(blake512, C2, hashLength);
          if (options.outputType === "hex") {
            const digestChars = new Uint8Array(hashLength * 2);
            return getDigestHex(digestChars, res, hashLength);
          }
          if (options.outputType === "encoded") {
            return encodeResult(salt, options, res);
          }
          return res;
        });
      }
      const validateOptions$3 = (options) => {
        var _a2;
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (!options.password) {
          throw new Error("Password must be specified");
        }
        options.password = getUInt8Buffer(options.password);
        if (options.password.length < 1) {
          throw new Error("Password must be specified");
        }
        if (!options.salt) {
          throw new Error("Salt must be specified");
        }
        options.salt = getUInt8Buffer(options.salt);
        if (options.salt.length < 8) {
          throw new Error("Salt should be at least 8 bytes long");
        }
        options.secret = getUInt8Buffer((_a2 = options.secret) !== null && _a2 !== void 0 ? _a2 : "");
        if (!Number.isInteger(options.iterations) || options.iterations < 1) {
          throw new Error("Iterations should be a positive number");
        }
        if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
          throw new Error("Parallelism should be a positive number");
        }
        if (!Number.isInteger(options.hashLength) || options.hashLength < 4) {
          throw new Error("Hash length should be at least 4 bytes.");
        }
        if (!Number.isInteger(options.memorySize)) {
          throw new Error("Memory size should be specified.");
        }
        if (options.memorySize < 8 * options.parallelism) {
          throw new Error("Memory size should be at least 8 * parallelism.");
        }
        if (options.outputType === void 0) {
          options.outputType = "hex";
        }
        if (!["hex", "binary", "encoded"].includes(options.outputType)) {
          throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`);
        }
      };
      function argon2i(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions$3(options);
          return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "i" }));
        });
      }
      function argon2id2(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions$3(options);
          return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "id" }));
        });
      }
      function argon2d(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions$3(options);
          return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "d" }));
        });
      }
      const getHashParameters = (password, encoded, secret) => {
        const regex = /^\$argon2(id|i|d)\$v=([0-9]+)\$((?:[mtp]=[0-9]+,){2}[mtp]=[0-9]+)\$([A-Za-z0-9+/]+)\$([A-Za-z0-9+/]+)$/;
        const match = encoded.match(regex);
        if (!match) {
          throw new Error("Invalid hash");
        }
        const [, hashType, version, parameters, salt, hash2] = match;
        if (version !== "19") {
          throw new Error(`Unsupported version: ${version}`);
        }
        const parsedParameters = {};
        const paramMap = { m: "memorySize", p: "parallelism", t: "iterations" };
        for (const x2 of parameters.split(",")) {
          const [n, v2] = x2.split("=");
          parsedParameters[paramMap[n]] = Number(v2);
        }
        return Object.assign(Object.assign({}, parsedParameters), {
          password,
          secret,
          hashType,
          salt: decodeBase64(salt),
          hashLength: getDecodeBase64Length(hash2),
          outputType: "encoded"
        });
      };
      const validateVerifyOptions$1 = (options) => {
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (options.hash === void 0 || typeof options.hash !== "string") {
          throw new Error("Hash should be specified");
        }
      };
      function argon2Verify(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateVerifyOptions$1(options);
          const params = getHashParameters(options.password, options.hash, options.secret);
          validateOptions$3(params);
          const hashStart = options.hash.lastIndexOf("$") + 1;
          const result = yield argon2Internal(params);
          return result.substring(hashStart) === options.hash.substring(hashStart);
        });
      }
      var name$i = "blake2s";
      var data$i = "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";
      var hash$i = "5c0ff166";
      var wasmJson$i = {
        name: name$i,
        data: data$i,
        hash: hash$i
      };
      const mutex$j = new Mutex();
      let wasmCache$j = null;
      function validateBits$3(bits) {
        if (!Number.isInteger(bits) || bits < 8 || bits > 256 || bits % 8 !== 0) {
          return new Error("Invalid variant! Valid values: 8, 16, ..., 256");
        }
        return null;
      }
      function getInitParam(outputBits, keyBits) {
        return outputBits | keyBits << 16;
      }
      function blake2s(data2, bits = 256, key = null) {
        if (validateBits$3(bits)) {
          return Promise.reject(validateBits$3(bits));
        }
        let keyBuffer = null;
        let initParam = bits;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length > 32) {
            return Promise.reject(new Error("Max key length is 32 bytes"));
          }
          initParam = getInitParam(bits, keyBuffer.length);
        }
        const hashLength = bits / 8;
        if (wasmCache$j === null || wasmCache$j.hashLength !== hashLength) {
          return lockedCreate(mutex$j, wasmJson$i, hashLength).then((wasm) => {
            wasmCache$j = wasm;
            if (initParam > 512) {
              wasmCache$j.writeMemory(keyBuffer);
            }
            return wasmCache$j.calculate(data2, initParam);
          });
        }
        try {
          if (initParam > 512) {
            wasmCache$j.writeMemory(keyBuffer);
          }
          const hash2 = wasmCache$j.calculate(data2, initParam);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createBLAKE2s(bits = 256, key = null) {
        if (validateBits$3(bits)) {
          return Promise.reject(validateBits$3(bits));
        }
        let keyBuffer = null;
        let initParam = bits;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length > 32) {
            return Promise.reject(new Error("Max key length is 32 bytes"));
          }
          initParam = getInitParam(bits, keyBuffer.length);
        }
        const outputSize = bits / 8;
        return WASMInterface(wasmJson$i, outputSize).then((wasm) => {
          if (initParam > 512) {
            wasm.writeMemory(keyBuffer);
          }
          wasm.init(initParam);
          const obj = {
            init: initParam > 512 ? () => {
              wasm.writeMemory(keyBuffer);
              wasm.init(initParam);
              return obj;
            } : () => {
              wasm.init(initParam);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: outputSize
          };
          return obj;
        });
      }
      var name$h = "blake3";
      var data$h = "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IQEgAkFAaiICQcAASw0ACwsCQEHAACAHQf8BcSIGayIFIAIgBSACSRsiCUUNACAJQQNxIQtBACEFAkAgCUEESQ0AIAAgBmohByAJQfwAcSEIQQAhBQNAIAcgBWoiAkEoaiABIAVqIgotAAA6AAAgAkEpaiAKQQFqLQAAOgAAIAJBKmogCkECai0AADoAACACQStqIApBA2otAAA6AAAgCCAFQQRqIgVHDQALCwJAIAtFDQAgASAFaiEBIAUgBmogAGpBKGohBQNAIAUgAS0AADoAACABQQFqIQEgBUEBaiEFIAtBf2oiCw0ACwsgAC0AaCEHCyAAIAcgCWo6AGggA0HAAGokAAveAwQFfwN+BX8GfiMAQdABayIBJAACQCAAe6ciAkEALQCQigEiA08NAEEALQCKigFBBHIhBCABQShqIQVBACkDmIkBIQBBACkDkIkBIQZBACkDiIkBIQdBACkDgIkBIQggAyEJA0AgASAANwMYIAEgBjcDECABIAc3AwggASAINwMAIAEgA0EFdCIDQdGJAWoiCikDADcDKCABIANB2YkBaiILKQMANwMwIAEgA0HhiQFqIgwpAwA3AzggASADQemJAWoiDSkDADcDQCABIANB8YkBaikDADcDSCABIANB+YkBaikDADcDUCABIANBgYoBaikDADcDWCADQYmKAWopAwAhDiABQcAAOgBoIAEgDjcDYCABQgA3AyAgASAEOgBpIAEgADcDiAEgASAGNwOAASABIAc3A3ggASAINwNwIAFBkAFqIAFB8ABqIAVBwABCACAEQf8BcRACIAEpA7ABIQ4gASkDkAEhDyABKQO4ASEQIAEpA5gBIREgASkDwAEhEiABKQOgASETIA0gASkDyAEgASkDqAGFNwMAIAwgEiAThTcDACALIBAgEYU3AwAgCiAOIA+FNwMAIAlBf2oiCUH/AXEiAyACSw0AC0EAIAk6AJCKAQsgAUHQAWokAAvHCQIKfwV+IwBB4AJrIgUkAAJAAkAgAUGACEsNACAFIAA2AvwBIAVB/AFqIAFBgAhGIgZBECACQQEgA0EBQQIgBBABIAZBCnQiByABTw0BIAVB4ABqIgZCADcDACAFQdgAaiIIQgA3AwAgBUHQAGoiCUIANwMAIAVByABqIgpCADcDACAFQcAAaiILQgA3AwAgBUE4aiIMQgA3AwAgBUEwaiINQgA3AwAgBSADOgBqIAVCADcDKCAFQQA7AWggBUEAKQOAiQE3AwAgBUEAKQOIiQE3AwggBUEAKQOQiQE3AxAgBUEAKQOYiQE3AxggBSABQYAIRiIOrSACfDcDICAFIAAgB2pBACABIA4bEAQgBUGIAWpBMGogDSkDADcDACAFQYgBakE4aiAMKQMANwMAIAUgBSkDACIPNwOIASAFIAUpAwgiEDcDkAEgBSAFKQMQIhE3A5gBIAUgBSkDGCISNwOgASAFIAUpAyg3A7ABIAUtAGohACAFLQBpIQcgBSkDICECIAUtAGghASAFQYgBakHAAGogCykDADcDACAFQYgBakHIAGogCikDADcDACAFQYgBakHQAGogCSkDADcDACAFQYgBakHYAGogCCkDADcDACAFQYgBakHgAGogBikDADcDACAFIAE6APABIAUgAjcDqAEgBSAAIAdFckECciIAOgDxASAFIBI3A5gCIAUgETcDkAIgBSAQNwOIAiAFIA83A4ACIAVBoAJqIAVBgAJqIAVBsAFqIAEgAiAAQf8BcRACIAUpA8ACIQIgBSkDoAIhDyAFKQPIAiEQIAUpA6gCIREgBSkD0AIhEiAFKQOwAiETIAQgDkEFdGoiASAFKQPYAiAFKQO4AoU3AxggASASIBOFNwMQIAEgECARhTcDCCABIAIgD4U3AwBBAkEBIA4bIQYMAQsgAEIBIAFBf2pBCnZBAXKteUI/hYYiD6dBCnQiDiACIAMgBRAGIQcgACAOaiABIA5rIA9C////AYMgAnwgAyAFQcAAQSAgDkGACEsbahAGIQECQCAHQQFHDQAgBCAFKQMANwMAIAQgBSkDCDcDCCAEIAUpAxA3AxAgBCAFKQMYNwMYIAQgBSkDIDcDICAEIAUpAyg3AyggBCAFKQMwNwMwIAQgBSkDODcDOEECIQYMAQtBACEGQQAhAAJAIAEgB2oiCUECSQ0AIAlBfmoiCkEBdkEBaiIGQQNxIQ5BACEHAkAgCkEGSQ0AIAZB/P///wdxIQhBACEHIAVBiAFqIQEgBSEAA0AgASAANgIAIAFBDGogAEHAAWo2AgAgAUEIaiAAQYABajYCACABQQRqIABBwABqNgIAIABBgAJqIQAgAUEQaiEBIAggB0EEaiIHRw0ACwsgCkF+cSEIAkAgDkUNACAFIAdBBnRqIQEgBUGIAWogB0ECdGohAANAIAAgATYCACABQcAAaiEBIABBBGohACAOQX9qIg4NAAsLIAhBAmohAAsgBUGIAWogBkEBQgBBACADQQRyQQBBACAEEAEgACAJTw0AIAQgBkEFdGoiASAFIAZBBnRqIgApAwA3AwAgASAAKQMINwMIIAEgACkDEDcDECABIAApAxg3AxggBkEBaiEGCyAFQeACaiQAIAYLrRAIAn8EfgF/AX4EfwR+BH8EfiMAQfABayIBJAACQCAARQ0AAkBBAC0AkIoBIgINACABQTBqQQApA9CJATcDACABQThqQQApA9iJATcDACABQQApA6CJASIDNwMAIAFBACkDqIkBIgQ3AwggAUEAKQOwiQEiBTcDECABQQApA7iJASIGNwMYIAFBACkDyIkBNwMoQQAtAIqKASECQQAtAImKASEHQQApA8CJASEIQQAtAIiKASEJIAFBwABqQQApA+CJATcDACABQcgAakEAKQPoiQE3AwAgAUHQAGpBACkD8IkBNwMAIAFB2ABqQQApA/iJATcDACABQeAAakEAKQOAigE3AwAgASAJOgBoIAEgCDcDICABIAIgB0VyIgJBAnI6AGkgAUEoaiEKQgAhCEGACSELIAJBCnJB/wFxIQwDQCABQbABaiABIAogCUH/AXEgCCAMEAIgASABKQPQASINIAEpA7ABhTcDcCABIAEpA9gBIg4gASkDuAGFNwN4IAEgASkD4AEiDyABKQPAAYU3A4ABIAEgASkD6AEiECAGhTcDqAEgASAPIAWFNwOgASABIA4gBIU3A5gBIAEgDSADhTcDkAEgASAQIAEpA8gBhTcDiAEgAEHAACAAQcAASRsiEUF/aiESAkACQCARQQdxIhMNACABQfAAaiECIAshByARIRQMAQsgEUH4AHEhFCABQfAAaiECIAshBwNAIAcgAi0AADoAACAHQQFqIQcgAkEBaiECIBNBf2oiEw0ACwsCQCASQQdJDQADQCAHIAIpAAA3AAAgB0EIaiEHIAJBCGohAiAUQXhqIhQNAAsLIAhCAXwhCCALIBFqIQsgACARayIADQAMAgsLAkACQAJAQQAtAImKASIHQQZ0QQBBAC0AiIoBIhFrRg0AIAEgEToAaCABQQApA4CKATcDYCABQQApA/iJATcDWCABQQApA/CJATcDUCABQQApA+iJATcDSCABQQApA+CJATcDQCABQQApA9iJATcDOCABQQApA9CJATcDMCABQQApA8iJATcDKCABQQApA8CJASIINwMgIAFBACkDuIkBIgM3AxggAUEAKQOwiQEiBDcDECABQQApA6iJASIFNwMIIAFBACkDoIkBIgY3AwAgAUEALQCKigEiEyAHRXJBAnIiCzoAaSATQQRyIRNBACkDmIkBIQ1BACkDkIkBIQ5BACkDiIkBIQ9BACkDgIkBIRAMAQtBwAAhESABQcAAOgBoQgAhCCABQgA3AyAgAUEAKQOYiQEiDTcDGCABQQApA5CJASIONwMQIAFBACkDiIkBIg83AwggAUEAKQOAiQEiEDcDACABQQAtAIqKAUEEciITOgBpIAEgAkF+aiICQQV0IgdByYoBaikDADcDYCABIAdBwYoBaikDADcDWCABIAdBuYoBaikDADcDUCABIAdBsYoBaikDADcDSCABIAdBqYoBaikDADcDQCABIAdBoYoBaikDADcDOCABIAdBmYoBaikDADcDMCABIAdBkYoBaikDADcDKCATIQsgECEGIA8hBSAOIQQgDSEDIAJFDQELIAJBf2oiB0EFdCIUQZGKAWopAwAhFSAUQZmKAWopAwAhFiAUQaGKAWopAwAhFyAUQamKAWopAwAhGCABIAM3A4gBIAEgBDcDgAEgASAFNwN4IAEgBjcDcCABQbABaiABQfAAaiABQShqIhQgESAIIAtB/wFxEAIgASATOgBpIAFBwAA6AGggASAYNwNAIAEgFzcDOCABIBY3AzAgASAVNwMoIAFCADcDICABIA03AxggASAONwMQIAEgDzcDCCABIBA3AwAgASABKQPoASABKQPIAYU3A2AgASABKQPgASABKQPAAYU3A1ggASABKQPYASABKQO4AYU3A1AgASABKQPQASABKQOwAYU3A0ggB0UNACACQQV0QemJAWohAiATQf8BcSERA0AgAkFoaikDACEIIAJBcGopAwAhAyACQXhqKQMAIQQgAikDACEFIAEgDTcDiAEgASAONwOAASABIA83A3ggASAQNwNwIAFBsAFqIAFB8ABqIBRBwABCACAREAIgASATOgBpIAFBwAA6AGggASAFNwNAIAEgBDcDOCABIAM3AzAgASAINwMoIAFCADcDICABIA03AxggASAONwMQIAEgDzcDCCABIBA3AwAgASABKQPoASABKQPIAYU3A2AgASABKQPgASABKQPAAYU3A1ggASABKQPYASABKQO4AYU3A1AgASABKQPQASABKQOwAYU3A0ggAkFgaiECIAdBf2oiBw0ACwsgAUEoaiEJQgAhCEGACSELIBNBCHJB/wFxIQoDQCABQbABaiABIAlBwAAgCCAKEAIgASABKQPQASIDIAEpA7ABhTcDcCABIAEpA9gBIgQgASkDuAGFNwN4IAEgASkD4AEiBSABKQPAAYU3A4ABIAEgDSABKQPoASIGhTcDqAEgASAOIAWFNwOgASABIA8gBIU3A5gBIAEgECADhTcDkAEgASAGIAEpA8gBhTcDiAEgAEHAACAAQcAASRsiEUF/aiESAkACQCARQQdxIhMNACABQfAAaiECIAshByARIRQMAQsgEUH4AHEhFCABQfAAaiECIAshBwNAIAcgAi0AADoAACAHQQFqIQcgAkEBaiECIBNBf2oiEw0ACwsCQCASQQdJDQADQCAHIAIpAAA3AAAgB0EIaiEHIAJBCGohAiAUQXhqIhQNAAsLIAhCAXwhCCALIBFqIQsgACARayIADQALCyABQfABaiQAC6MCAQR+AkACQCAAQSBGDQBCq7OP/JGjs/DbACEBQv+kuYjFkdqCm38hAkLy5rvjo6f9p6V/IQNC58yn0NbQ67O7fyEEQQAhAAwBC0EAKQOYCSEBQQApA5AJIQJBACkDiAkhA0EAKQOACSEEQRAhAAtBACAAOgCKigFBAEIANwOAigFBAEIANwP4iQFBAEIANwPwiQFBAEIANwPoiQFBAEIANwPgiQFBAEIANwPYiQFBAEIANwPQiQFBAEIANwPIiQFBAEIANwPAiQFBACABNwO4iQFBACACNwOwiQFBACADNwOoiQFBACAENwOgiQFBACABNwOYiQFBACACNwOQiQFBACADNwOIiQFBACAENwOAiQFBAEEAOgCQigFBAEEAOwGIigELBgAgABADCwYAIAAQBwsGAEGAiQELqwIBBH4CQAJAIAFBIEYNAEKrs4/8kaOz8NsAIQNC/6S5iMWR2oKbfyEEQvLmu+Ojp/2npX8hBULnzKfQ1tDrs7t/IQZBACEBDAELQQApA5gJIQNBACkDkAkhBEEAKQOICSEFQQApA4AJIQZBECEBC0EAIAE6AIqKAUEAQgA3A4CKAUEAQgA3A/iJAUEAQgA3A/CJAUEAQgA3A+iJAUEAQgA3A+CJAUEAQgA3A9iJAUEAQgA3A9CJAUEAQgA3A8iJAUEAQgA3A8CJAUEAIAM3A7iJAUEAIAQ3A7CJAUEAIAU3A6iJAUEAIAY3A6CJAUEAIAM3A5iJAUEAIAQ3A5CJAUEAIAU3A4iJAUEAIAY3A4CJAUEAQQA6AJCKAUEAQQA7AYiKASAAEAMgAhAHCwsLAQBBgAgLBHgHAAA=";
      var hash$h = "215d875f";
      var wasmJson$h = {
        name: name$h,
        data: data$h,
        hash: hash$h
      };
      const mutex$i = new Mutex();
      let wasmCache$i = null;
      function validateBits$2(bits) {
        if (!Number.isInteger(bits) || bits < 8 || bits % 8 !== 0) {
          return new Error("Invalid variant! Valid values: 8, 16, ...");
        }
        return null;
      }
      function blake3(data2, bits = 256, key = null) {
        if (validateBits$2(bits)) {
          return Promise.reject(validateBits$2(bits));
        }
        let keyBuffer = null;
        let initParam = 0;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length !== 32) {
            return Promise.reject(new Error("Key length must be exactly 32 bytes"));
          }
          initParam = 32;
        }
        const hashLength = bits / 8;
        const digestParam = hashLength;
        if (wasmCache$i === null || wasmCache$i.hashLength !== hashLength) {
          return lockedCreate(mutex$i, wasmJson$h, hashLength).then((wasm) => {
            wasmCache$i = wasm;
            if (initParam === 32) {
              wasmCache$i.writeMemory(keyBuffer);
            }
            return wasmCache$i.calculate(data2, initParam, digestParam);
          });
        }
        try {
          if (initParam === 32) {
            wasmCache$i.writeMemory(keyBuffer);
          }
          const hash2 = wasmCache$i.calculate(data2, initParam, digestParam);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createBLAKE3(bits = 256, key = null) {
        if (validateBits$2(bits)) {
          return Promise.reject(validateBits$2(bits));
        }
        let keyBuffer = null;
        let initParam = 0;
        if (key !== null) {
          keyBuffer = getUInt8Buffer(key);
          if (keyBuffer.length !== 32) {
            return Promise.reject(new Error("Key length must be exactly 32 bytes"));
          }
          initParam = 32;
        }
        const outputSize = bits / 8;
        const digestParam = outputSize;
        return WASMInterface(wasmJson$h, outputSize).then((wasm) => {
          if (initParam === 32) {
            wasm.writeMemory(keyBuffer);
          }
          wasm.init(initParam);
          const obj = {
            init: initParam === 32 ? () => {
              wasm.writeMemory(keyBuffer);
              wasm.init(initParam);
              return obj;
            } : () => {
              wasm.init(initParam);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType, digestParam),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: outputSize
          };
          return obj;
        });
      }
      var name$g = "crc32";
      var data$g = "AGFzbQEAAAABEQRgAAF/YAF/AGAAAGACf38AAwgHAAEBAQIAAwUEAQECAgYOAn8BQZDJBQt/AEGACAsHcAgGbWVtb3J5AgAOSGFzaF9HZXRCdWZmZXIAAAlIYXNoX0luaXQAAgtIYXNoX1VwZGF0ZQADCkhhc2hfRmluYWwABA1IYXNoX0dldFN0YXRlAAUOSGFzaF9DYWxjdWxhdGUABgpTVEFURV9TSVpFAwEKkggHBQBBgAkLwwMBA39BgIkBIQFBACECA0AgAUEAQQBBAEEAQQBBAEEAQQAgAkEBcWsgAHEgAkEBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnMiA0EBcWsgAHEgA0EBdnM2AgAgAUEEaiEBIAJBAWoiAkGAAkcNAAtBACEAA0AgAEGEkQFqIABBhIkBaigCACICQf8BcUECdEGAiQFqKAIAIAJBCHZzIgI2AgAgAEGEmQFqIAJB/wFxQQJ0QYCJAWooAgAgAkEIdnMiAjYCACAAQYShAWogAkH/AXFBAnRBgIkBaigCACACQQh2cyICNgIAIABBhKkBaiACQf8BcUECdEGAiQFqKAIAIAJBCHZzIgI2AgAgAEGEsQFqIAJB/wFxQQJ0QYCJAWooAgAgAkEIdnMiAjYCACAAQYS5AWogAkH/AXFBAnRBgIkBaigCACACQQh2cyICNgIAIABBhMEBaiACQf8BcUECdEGAiQFqKAIAIAJBCHZzNgIAIABBBGoiAEH8B0cNAAsLJwACQEEAKAKAyQEgAEYNACAAEAFBACAANgKAyQELQQBBADYChMkBC4gDAQN/QQAoAoTJAUF/cyEBQYAJIQICQCAAQQhJDQBBgAkhAgNAIAJBBGooAgAiA0EOdkH8B3FBgJEBaigCACADQRZ2QfwHcUGAiQFqKAIAcyADQQZ2QfwHcUGAmQFqKAIAcyADQf8BcUECdEGAoQFqKAIAcyACKAIAIAFzIgFBFnZB/AdxQYCpAWooAgBzIAFBDnZB/AdxQYCxAWooAgBzIAFBBnZB/AdxQYC5AWooAgBzIAFB/wFxQQJ0QYDBAWooAgBzIQEgAkEIaiECIABBeGoiAEEHSw0ACwsCQCAARQ0AAkACQCAAQQFxDQAgACEDDAELIAFB/wFxIAItAABzQQJ0QYCJAWooAgAgAUEIdnMhASACQQFqIQIgAEF/aiEDCyAAQQFGDQADQCABQf8BcSACLQAAc0ECdEGAiQFqKAIAIAFBCHZzIgFB/wFxIAJBAWotAABzQQJ0QYCJAWooAgAgAUEIdnMhASACQQJqIQIgA0F+aiIDDQALC0EAIAFBf3M2AoTJAQsyAQF/QQBBACgChMkBIgBBGHQgAEGA/gNxQQh0ciAAQQh2QYD+A3EgAEEYdnJyNgKACQsGAEGEyQELWQACQEEAKAKAyQEgAUYNACABEAFBACABNgKAyQELQQBBADYChMkBIAAQA0EAQQAoAoTJASIBQRh0IAFBgP4DcUEIdHIgAUEIdkGA/gNxIAFBGHZycjYCgAkLCwsBAEGACAsEBAAAAA==";
      var hash$g = "d2eba587";
      var wasmJson$g = {
        name: name$g,
        data: data$g,
        hash: hash$g
      };
      const mutex$h = new Mutex();
      let wasmCache$h = null;
      function validatePoly(poly) {
        if (!Number.isInteger(poly) || poly < 0 || poly > 4294967295) {
          return new Error("Polynomial must be a valid 32-bit long unsigned integer");
        }
        return null;
      }
      function crc32(data2, polynomial = 3988292384) {
        if (validatePoly(polynomial)) {
          return Promise.reject(validatePoly(polynomial));
        }
        if (wasmCache$h === null) {
          return lockedCreate(mutex$h, wasmJson$g, 4).then((wasm) => {
            wasmCache$h = wasm;
            return wasmCache$h.calculate(data2, polynomial);
          });
        }
        try {
          const hash2 = wasmCache$h.calculate(data2, polynomial);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createCRC32(polynomial = 3988292384) {
        if (validatePoly(polynomial)) {
          return Promise.reject(validatePoly(polynomial));
        }
        return WASMInterface(wasmJson$g, 4).then((wasm) => {
          wasm.init(polynomial);
          const obj = {
            init: () => {
              wasm.init(polynomial);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 4,
            digestSize: 4
          };
          return obj;
        });
      }
      var name$f = "crc64";
      var data$f = "AGFzbQEAAAABDANgAAF/YAAAYAF/AAMHBgABAgEAAQUEAQECAgYOAn8BQZCJBgt/AEGACAsHcAgGbWVtb3J5AgAOSGFzaF9HZXRCdWZmZXIAAAlIYXNoX0luaXQAAQtIYXNoX1VwZGF0ZQACCkhhc2hfRmluYWwAAw1IYXNoX0dldFN0YXRlAAQOSGFzaF9DYWxjdWxhdGUABQpTVEFURV9TSVpFAwEKgwgGBQBBgAkL9QMDAX4BfwJ+AkBBACkDgIkCQQApA4AJIgBRDQBBgIkBIQFCACECA0AgAUIAQgBCAEIAQgBCAEIAQgAgAkIBg30gAIMgAkIBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIUiA0IBg30gAIMgA0IBiIU3AwAgAUEIaiEBIAJCAXwiAkKAAlINAAtBACEBA0AgAUGImQFqIAFBiIkBaikDACICp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiKkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiLkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiMkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiNkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiOkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhSICNwMAIAFBiPkBaiACp0H/AXFBA3RBgIkBaikDACACQgiIhTcDACABQQhqIgFB+A9HDQALQQAgADcDgIkCC0EAQgA3A4iJAguUAwIBfgJ/QQApA4iJAkJ/hSEBQYAJIQICQCAAQQhJDQBBgAkhAgNAIAIpAwAgAYUiAUIwiKdB/wFxQQN0QYCZAWopAwAgAUI4iKdBA3RBgIkBaikDAIUgAUIoiKdB/wFxQQN0QYCpAWopAwCFIAFCIIinQf8BcUEDdEGAuQFqKQMAhSABpyIDQRV2QfgPcUGAyQFqKQMAhSADQQ12QfgPcUGA2QFqKQMAhSADQQV2QfgPcUGA6QFqKQMAhSADQf8BcUEDdEGA+QFqKQMAhSEBIAJBCGohAiAAQXhqIgBBB0sNAAsLAkAgAEUNAAJAAkAgAEEBcQ0AIAAhAwwBCyABQv8BgyACMQAAhadBA3RBgIkBaikDACABQgiIhSEBIAJBAWohAiAAQX9qIQMLIABBAUYNAANAIAFC/wGDIAIxAACFp0EDdEGAiQFqKQMAIAFCCIiFIgFC/wGDIAJBAWoxAACFp0EDdEGAiQFqKQMAIAFCCIiFIQEgAkECaiECIANBfmoiAw0ACwtBACABQn+FNwOIiQILZAEBfkEAQQApA4iJAiIAQjiGIABCgP4Dg0IohoQgAEKAgPwHg0IYhiAAQoCAgPgPg0IIhoSEIABCCIhCgICA+A+DIABCGIhCgID8B4OEIABCKIhCgP4DgyAAQjiIhISENwOACQsGAEGIiQILAgALCwsBAEGACAsECAAAAA==";
      var hash$f = "c5ac6c16";
      var wasmJson$f = {
        name: name$f,
        data: data$f,
        hash: hash$f
      };
      const mutex$g = new Mutex();
      let wasmCache$g = null;
      const polyBuffer = new Uint8Array(8);
      function parsePoly(poly) {
        const errText = "Polynomial must be provided as a 16 char long hex string";
        if (typeof poly !== "string" || poly.length !== 16) {
          return { hi: 0, lo: 0, err: new Error(errText) };
        }
        const hi = Number(`0x${poly.slice(0, 8)}`);
        const lo = Number(`0x${poly.slice(8)}`);
        if (Number.isNaN(hi) || Number.isNaN(lo)) {
          return { hi, lo, err: new Error(errText) };
        }
        return { hi, lo, err: null };
      }
      function writePoly(arr, lo, hi) {
        const buffer = new DataView(arr);
        buffer.setUint32(0, lo, true);
        buffer.setUint32(4, hi, true);
      }
      function crc64(data2, polynomial = "c96c5795d7870f42") {
        const { hi, lo, err } = parsePoly(polynomial);
        if (err !== null) {
          return Promise.reject(err);
        }
        if (wasmCache$g === null) {
          return lockedCreate(mutex$g, wasmJson$f, 8).then((wasm) => {
            wasmCache$g = wasm;
            writePoly(polyBuffer.buffer, lo, hi);
            wasmCache$g.writeMemory(polyBuffer);
            return wasmCache$g.calculate(data2);
          });
        }
        try {
          writePoly(polyBuffer.buffer, lo, hi);
          wasmCache$g.writeMemory(polyBuffer);
          const hash2 = wasmCache$g.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err2) {
          return Promise.reject(err2);
        }
      }
      function createCRC64(polynomial = "c96c5795d7870f42") {
        const { hi, lo, err } = parsePoly(polynomial);
        if (err !== null) {
          return Promise.reject(err);
        }
        return WASMInterface(wasmJson$f, 8).then((wasm) => {
          const instanceBuffer = new Uint8Array(8);
          writePoly(instanceBuffer.buffer, lo, hi);
          wasm.writeMemory(instanceBuffer);
          wasm.init();
          const obj = {
            init: () => {
              wasm.writeMemory(instanceBuffer);
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 8,
            digestSize: 8
          };
          return obj;
        });
      }
      var name$e = "md4";
      var data$e = "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";
      var hash$e = "bd8ce7c7";
      var wasmJson$e = {
        name: name$e,
        data: data$e,
        hash: hash$e
      };
      const mutex$f = new Mutex();
      let wasmCache$f = null;
      function md4(data2) {
        if (wasmCache$f === null) {
          return lockedCreate(mutex$f, wasmJson$e, 16).then((wasm) => {
            wasmCache$f = wasm;
            return wasmCache$f.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$f.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createMD4() {
        return WASMInterface(wasmJson$e, 16).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 16
          };
          return obj;
        });
      }
      var name$d = "md5";
      var data$d = "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";
      var hash$d = "e6508e4b";
      var wasmJson$d = {
        name: name$d,
        data: data$d,
        hash: hash$d
      };
      const mutex$e = new Mutex();
      let wasmCache$e = null;
      function md5(data2) {
        if (wasmCache$e === null) {
          return lockedCreate(mutex$e, wasmJson$d, 16).then((wasm) => {
            wasmCache$e = wasm;
            return wasmCache$e.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$e.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createMD5() {
        return WASMInterface(wasmJson$d, 16).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 16
          };
          return obj;
        });
      }
      var name$c = "sha1";
      var data$c = "AGFzbQEAAAABEQRgAAF/YAF/AGAAAGACf38AAwkIAAECAwECAAEFBAEBAgIGDgJ/AUHgiQULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAILSGFzaF9VcGRhdGUABApIYXNoX0ZpbmFsAAUNSGFzaF9HZXRTdGF0ZQAGDkhhc2hfQ2FsY3VsYXRlAAcKU1RBVEVfU0laRQMBCpoqCAUAQYAJC68iCgF+An8BfgF/AX4DfwF+AX8Bfkd/QQAgACkDECIBQiCIpyICQRh0IAJBgP4DcUEIdHIgAUIoiKdBgP4DcSABQjiIp3JyIgMgACkDCCIEQiCIpyICQRh0IAJBgP4DcUEIdHIgBEIoiKdBgP4DcSAEQjiIp3JyIgVzIAApAygiBkIgiKciAkEYdCACQYD+A3FBCHRyIAZCKIinQYD+A3EgBkI4iKdyciIHcyAEpyICQRh0IAJBgP4DcUEIdHIgAkEIdkGA/gNxIAJBGHZyciIIIAApAwAiBKciAkEYdCACQYD+A3FBCHRyIAJBCHZBgP4DcSACQRh2cnIiCXMgACkDICIKpyICQRh0IAJBgP4DcUEIdHIgAkEIdkGA/gNxIAJBGHZyciILcyAAKQMwIgxCIIinIgJBGHQgAkGA/gNxQQh0ciAMQiiIp0GA/gNxIAxCOIincnIiAnNBAXciDXNBAXciDiAFIARCIIinIg9BGHQgD0GA/gNxQQh0ciAEQiiIp0GA/gNxIARCOIincnIiEHMgCkIgiKciD0EYdCAPQYD+A3FBCHRyIApCKIinQYD+A3EgCkI4iKdyciIRcyAAKQM4IgSnIg9BGHQgD0GA/gNxQQh0ciAPQQh2QYD+A3EgD0EYdnJyIg9zQQF3IhJzIAcgEXMgEnMgCyAAKQMYIgqnIgBBGHQgAEGA/gNxQQh0ciAAQQh2QYD+A3EgAEEYdnJyIhNzIA9zIA5zQQF3IgBzQQF3IhRzIA0gD3MgAHMgAiAHcyAOcyAGpyIVQRh0IBVBgP4DcUEIdHIgFUEIdkGA/gNxIBVBGHZyciIWIAtzIA1zIApCIIinIhVBGHQgFUGA/gNxQQh0ciAKQiiIp0GA/gNxIApCOIincnIiFyADcyACcyABpyIVQRh0IBVBgP4DcUEIdHIgFUEIdkGA/gNxIBVBGHZyciIYIAhzIBZzIARCIIinIhVBGHQgFUGA/gNxQQh0ciAEQiiIp0GA/gNxIARCOIincnIiFXNBAXciGXNBAXciGnNBAXciG3NBAXciHHNBAXciHXNBAXciHiASIBVzIBEgF3MgFXMgEyAYcyAMpyIfQRh0IB9BgP4DcUEIdHIgH0EIdkGA/gNxIB9BGHZyciIgcyASc0EBdyIfc0EBdyIhcyAPICBzIB9zIBRzQQF3IiJzQQF3IiNzIBQgIXMgI3MgACAfcyAicyAec0EBdyIkc0EBdyIlcyAdICJzICRzIBwgFHMgHnMgGyAAcyAdcyAaIA5zIBxzIBkgDXMgG3MgFSACcyAacyAgIBZzIBlzICFzQQF3IiZzQQF3IidzQQF3IihzQQF3IilzQQF3IipzQQF3IitzQQF3IixzQQF3Ii0gIyAncyAhIBpzICdzIB8gGXMgJnMgI3NBAXciLnNBAXciL3MgIiAmcyAucyAlc0EBdyIwc0EBdyIxcyAlIC9zIDFzICQgLnMgMHMgLXNBAXciMnNBAXciM3MgLCAwcyAycyArICVzIC1zICogJHMgLHMgKSAecyArcyAoIB1zICpzICcgHHMgKXMgJiAbcyAocyAvc0EBdyI0c0EBdyI1c0EBdyI2c0EBdyI3c0EBdyI4c0EBdyI5c0EBdyI6c0EBdyI7IDEgNXMgLyApcyA1cyAuIChzIDRzIDFzQQF3IjxzQQF3Ij1zIDAgNHMgPHMgM3NBAXciPnNBAXciP3MgMyA9cyA/cyAyIDxzID5zIDtzQQF3IkBzQQF3IkFzIDogPnMgQHMgOSAzcyA7cyA4IDJzIDpzIDcgLXMgOXMgNiAscyA4cyA1ICtzIDdzIDQgKnMgNnMgPXNBAXciQnNBAXciQ3NBAXciRHNBAXciRXNBAXciRnNBAXciR3NBAXciSHNBAXciSSA+IEJzIDwgNnMgQnMgP3NBAXciSnMgQXNBAXciSyA9IDdzIENzIEpzQQF3IkwgRCA5IDIgMSA0ICkgHSAUIB8gFSAWQQAoAoCJASJNQQV3QQAoApCJASJOaiAJakEAKAKMiQEiT0EAKAKIiQEiCXNBACgChIkBIlBxIE9zakGZ84nUBWoiUUEedyJSIANqIFBBHnciAyAFaiBPIAMgCXMgTXEgCXNqIBBqIFFBBXdqQZnzidQFaiIQIFIgTUEedyIFc3EgBXNqIAkgCGogUSADIAVzcSADc2ogEEEFd2pBmfOJ1AVqIlFBBXdqQZnzidQFaiJTIFFBHnciAyAQQR53IghzcSAIc2ogBSAYaiBRIAggUnNxIFJzaiBTQQV3akGZ84nUBWoiBUEFd2pBmfOJ1AVqIhhBHnciUmogU0EedyIWIAtqIAggE2ogBSAWIANzcSADc2ogGEEFd2pBmfOJ1AVqIgggUiAFQR53IgtzcSALc2ogAyAXaiAYIAsgFnNxIBZzaiAIQQV3akGZ84nUBWoiBUEFd2pBmfOJ1AVqIhMgBUEedyIWIAhBHnciA3NxIANzaiALIBFqIAUgAyBSc3EgUnNqIBNBBXdqQZnzidQFaiIRQQV3akGZ84nUBWoiUkEedyILaiACIBNBHnciFWogByADaiARIBUgFnNxIBZzaiBSQQV3akGZ84nUBWoiByALIBFBHnciAnNxIAJzaiAgIBZqIFIgAiAVc3EgFXNqIAdBBXdqQZnzidQFaiIRQQV3akGZ84nUBWoiFiARQR53IhUgB0EedyIHc3EgB3NqIA8gAmogESAHIAtzcSALc2ogFkEFd2pBmfOJ1AVqIgtBBXdqQZnzidQFaiIRQR53IgJqIBIgFWogESALQR53Ig8gFkEedyISc3EgEnNqIA0gB2ogCyASIBVzcSAVc2ogEUEFd2pBmfOJ1AVqIg1BBXdqQZnzidQFaiIVQR53Ih8gDUEedyIHcyAZIBJqIA0gAiAPc3EgD3NqIBVBBXdqQZnzidQFaiINc2ogDiAPaiAVIAcgAnNxIAJzaiANQQV3akGZ84nUBWoiAkEFd2pBodfn9gZqIg5BHnciD2ogACAfaiACQR53IgAgDUEedyINcyAOc2ogGiAHaiANIB9zIAJzaiAOQQV3akGh1+f2BmoiAkEFd2pBodfn9gZqIg5BHnciEiACQR53IhRzICEgDWogDyAAcyACc2ogDkEFd2pBodfn9gZqIgJzaiAbIABqIBQgD3MgDnNqIAJBBXdqQaHX5/YGaiIAQQV3akGh1+f2BmoiDUEedyIOaiAcIBJqIABBHnciDyACQR53IgJzIA1zaiAmIBRqIAIgEnMgAHNqIA1BBXdqQaHX5/YGaiIAQQV3akGh1+f2BmoiDUEedyISIABBHnciFHMgIiACaiAOIA9zIABzaiANQQV3akGh1+f2BmoiAHNqICcgD2ogFCAOcyANc2ogAEEFd2pBodfn9gZqIgJBBXdqQaHX5/YGaiINQR53Ig5qICggEmogAkEedyIPIABBHnciAHMgDXNqICMgFGogACAScyACc2ogDUEFd2pBodfn9gZqIgJBBXdqQaHX5/YGaiINQR53IhIgAkEedyIUcyAeIABqIA4gD3MgAnNqIA1BBXdqQaHX5/YGaiIAc2ogLiAPaiAUIA5zIA1zaiAAQQV3akGh1+f2BmoiAkEFd2pBodfn9gZqIg1BHnciDmogKiAAQR53IgBqIA4gAkEedyIPcyAkIBRqIAAgEnMgAnNqIA1BBXdqQaHX5/YGaiIUc2ogLyASaiAPIABzIA1zaiAUQQV3akGh1+f2BmoiDUEFd2pBodfn9gZqIgAgDUEedyICciAUQR53IhJxIAAgAnFyaiAlIA9qIBIgDnMgDXNqIABBBXdqQaHX5/YGaiINQQV3akHc+e74eGoiDkEedyIPaiA1IABBHnciAGogKyASaiANIAByIAJxIA0gAHFyaiAOQQV3akHc+e74eGoiEiAPciANQR53Ig1xIBIgD3FyaiAwIAJqIA4gDXIgAHEgDiANcXJqIBJBBXdqQdz57vh4aiIAQQV3akHc+e74eGoiAiAAQR53Ig5yIBJBHnciEnEgAiAOcXJqICwgDWogACASciAPcSAAIBJxcmogAkEFd2pB3Pnu+HhqIgBBBXdqQdz57vh4aiINQR53Ig9qIDwgAkEedyICaiA2IBJqIAAgAnIgDnEgACACcXJqIA1BBXdqQdz57vh4aiISIA9yIABBHnciAHEgEiAPcXJqIC0gDmogDSAAciACcSANIABxcmogEkEFd2pB3Pnu+HhqIgJBBXdqQdz57vh4aiINIAJBHnciDnIgEkEedyIScSANIA5xcmogNyAAaiACIBJyIA9xIAIgEnFyaiANQQV3akHc+e74eGoiAEEFd2pB3Pnu+HhqIgJBHnciD2ogMyANQR53Ig1qID0gEmogACANciAOcSAAIA1xcmogAkEFd2pB3Pnu+HhqIhIgD3IgAEEedyIAcSASIA9xcmogOCAOaiACIAByIA1xIAIgAHFyaiASQQV3akHc+e74eGoiAkEFd2pB3Pnu+HhqIg0gAkEedyIOciASQR53IhJxIA0gDnFyaiBCIABqIAIgEnIgD3EgAiAScXJqIA1BBXdqQdz57vh4aiIAQQV3akHc+e74eGoiAkEedyIPaiBDIA5qIAIgAEEedyIUciANQR53Ig1xIAIgFHFyaiA+IBJqIAAgDXIgDnEgACANcXJqIAJBBXdqQdz57vh4aiIAQQV3akHc+e74eGoiAkEedyISIABBHnciDnMgOiANaiAAIA9yIBRxIAAgD3FyaiACQQV3akHc+e74eGoiAHNqID8gFGogAiAOciAPcSACIA5xcmogAEEFd2pB3Pnu+HhqIgJBBXdqQdaDi9N8aiINQR53Ig9qIEogEmogAkEedyIUIABBHnciAHMgDXNqIDsgDmogACAScyACc2ogDUEFd2pB1oOL03xqIgJBBXdqQdaDi9N8aiINQR53Ig4gAkEedyIScyBFIABqIA8gFHMgAnNqIA1BBXdqQdaDi9N8aiIAc2ogQCAUaiASIA9zIA1zaiAAQQV3akHWg4vTfGoiAkEFd2pB1oOL03xqIg1BHnciD2ogQSAOaiACQR53IhQgAEEedyIAcyANc2ogRiASaiAAIA5zIAJzaiANQQV3akHWg4vTfGoiAkEFd2pB1oOL03xqIg1BHnciDiACQR53IhJzIEIgOHMgRHMgTHNBAXciFSAAaiAPIBRzIAJzaiANQQV3akHWg4vTfGoiAHNqIEcgFGogEiAPcyANc2ogAEEFd2pB1oOL03xqIgJBBXdqQdaDi9N8aiINQR53Ig9qIEggDmogAkEedyIUIABBHnciAHMgDXNqIEMgOXMgRXMgFXNBAXciGSASaiAAIA5zIAJzaiANQQV3akHWg4vTfGoiAkEFd2pB1oOL03xqIg1BHnciDiACQR53IhJzID8gQ3MgTHMgS3NBAXciGiAAaiAPIBRzIAJzaiANQQV3akHWg4vTfGoiAHNqIEQgOnMgRnMgGXNBAXciGyAUaiASIA9zIA1zaiAAQQV3akHWg4vTfGoiAkEFd2pB1oOL03xqIg1BHnciDyBOajYCkIkBQQAgTyBKIERzIBVzIBpzQQF3IhQgEmogAEEedyIAIA5zIAJzaiANQQV3akHWg4vTfGoiEkEedyIVajYCjIkBQQAgCSBFIDtzIEdzIBtzQQF3IA5qIAJBHnciAiAAcyANc2ogEkEFd2pB1oOL03xqIg1BHndqNgKIiQFBACBQIEAgSnMgS3MgSXNBAXcgAGogDyACcyASc2ogDUEFd2pB1oOL03xqIgBqNgKEiQFBACBNIEwgRXMgGXMgFHNBAXdqIAJqIBUgD3MgDXNqIABBBXdqQdaDi9N8ajYCgIkBCzoAQQBC/rnrxemOlZkQNwKIiQFBAEKBxpS6lvHq5m83AoCJAUEAQvDDy54MNwKQiQFBAEEANgKYiQELqAMBCH9BACECQQBBACgClIkBIgMgAUEDdGoiBDYClIkBQQBBACgCmIkBIAQgA0lqIAFBHXZqNgKYiQECQCADQQN2QT9xIgUgAWpBwABJDQBBwAAgBWsiAkEDcSEGQQAhAwJAIAVBP3NBA0kNACAFQYCJAWohByACQfwAcSEIQQAhAwNAIAcgA2oiBEEcaiAAIANqIgktAAA6AAAgBEEdaiAJQQFqLQAAOgAAIARBHmogCUECai0AADoAACAEQR9qIAlBA2otAAA6AAAgCCADQQRqIgNHDQALCwJAIAZFDQAgACADaiEEIAMgBWpBnIkBaiEDA0AgAyAELQAAOgAAIARBAWohBCADQQFqIQMgBkF/aiIGDQALC0GciQEQASAFQf8AcyEDQQAhBSADIAFPDQADQCAAIAJqEAEgAkH/AGohAyACQcAAaiIEIQIgAyABSQ0ACyAEIQILAkAgASACRg0AIAEgAmshCSAAIAJqIQIgBUGciQFqIQNBACEEA0AgAyACLQAAOgAAIAJBAWohAiADQQFqIQMgCSAEQQFqIgRB/wFxSw0ACwsLCQBBgAkgABADC6YDAQJ/IwBBEGsiACQAIABBgAE6AAcgAEEAKAKYiQEiAUEYdCABQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnI2AAggAEEAKAKUiQEiAUEYdCABQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnI2AAwgAEEHakEBEAMCQEEAKAKUiQFB+ANxQcADRg0AA0AgAEEAOgAHIABBB2pBARADQQAoApSJAUH4A3FBwANHDQALCyAAQQhqQQgQA0EAQQAoAoCJASIBQRh0IAFBgP4DcUEIdHIgAUEIdkGA/gNxIAFBGHZycjYCgAlBAEEAKAKEiQEiAUEYdCABQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnI2AoQJQQBBACgCiIkBIgFBGHQgAUGA/gNxQQh0ciABQQh2QYD+A3EgAUEYdnJyNgKICUEAQQAoAoyJASIBQRh0IAFBgP4DcUEIdHIgAUEIdkGA/gNxIAFBGHZycjYCjAlBAEEAKAKQiQEiAUEYdCABQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnI2ApAJIABBEGokAAsGAEGAiQELQwBBAEL+uevF6Y6VmRA3AoiJAUEAQoHGlLqW8ermbzcCgIkBQQBC8MPLngw3ApCJAUEAQQA2ApiJAUGACSAAEAMQBQsLCwEAQYAICwRcAAAA";
      var hash$c = "6b530c24";
      var wasmJson$c = {
        name: name$c,
        data: data$c,
        hash: hash$c
      };
      const mutex$d = new Mutex();
      let wasmCache$d = null;
      function sha1(data2) {
        if (wasmCache$d === null) {
          return lockedCreate(mutex$d, wasmJson$c, 20).then((wasm) => {
            wasmCache$d = wasm;
            return wasmCache$d.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$d.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA1() {
        return WASMInterface(wasmJson$c, 20).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 20
          };
          return obj;
        });
      }
      var name$b = "sha3";
      var data$b = "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";
      var hash$b = "fb24e536";
      var wasmJson$b = {
        name: name$b,
        data: data$b,
        hash: hash$b
      };
      const mutex$c = new Mutex();
      let wasmCache$c = null;
      function validateBits$1(bits) {
        if (![224, 256, 384, 512].includes(bits)) {
          return new Error("Invalid variant! Valid values: 224, 256, 384, 512");
        }
        return null;
      }
      function sha3(data2, bits = 512) {
        if (validateBits$1(bits)) {
          return Promise.reject(validateBits$1(bits));
        }
        const hashLength = bits / 8;
        if (wasmCache$c === null || wasmCache$c.hashLength !== hashLength) {
          return lockedCreate(mutex$c, wasmJson$b, hashLength).then((wasm) => {
            wasmCache$c = wasm;
            return wasmCache$c.calculate(data2, bits, 6);
          });
        }
        try {
          const hash2 = wasmCache$c.calculate(data2, bits, 6);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA3(bits = 512) {
        if (validateBits$1(bits)) {
          return Promise.reject(validateBits$1(bits));
        }
        const outputSize = bits / 8;
        return WASMInterface(wasmJson$b, outputSize).then((wasm) => {
          wasm.init(bits);
          const obj = {
            init: () => {
              wasm.init(bits);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType, 6),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 200 - 2 * outputSize,
            digestSize: outputSize
          };
          return obj;
        });
      }
      const mutex$b = new Mutex();
      let wasmCache$b = null;
      function validateBits(bits) {
        if (![224, 256, 384, 512].includes(bits)) {
          return new Error("Invalid variant! Valid values: 224, 256, 384, 512");
        }
        return null;
      }
      function keccak(data2, bits = 512) {
        if (validateBits(bits)) {
          return Promise.reject(validateBits(bits));
        }
        const hashLength = bits / 8;
        if (wasmCache$b === null || wasmCache$b.hashLength !== hashLength) {
          return lockedCreate(mutex$b, wasmJson$b, hashLength).then((wasm) => {
            wasmCache$b = wasm;
            return wasmCache$b.calculate(data2, bits, 1);
          });
        }
        try {
          const hash2 = wasmCache$b.calculate(data2, bits, 1);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createKeccak(bits = 512) {
        if (validateBits(bits)) {
          return Promise.reject(validateBits(bits));
        }
        const outputSize = bits / 8;
        return WASMInterface(wasmJson$b, outputSize).then((wasm) => {
          wasm.init(bits);
          const obj = {
            init: () => {
              wasm.init(bits);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType, 1),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 200 - 2 * outputSize,
            digestSize: outputSize
          };
          return obj;
        });
      }
      var name$a = "sha256";
      var data$a = "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c2pBx6KerX1qIhkgASADcyACcSABIANxcyABQR53IAFBE3dzIAFBCndzaiAaaiICaiIJIBMgEnNxIBJzaiAJQRp3IAlBFXdzIAlBB3dzakHRxqk2aiIaIAIgAXMgA3EgAiABcXMgAkEedyACQRN3cyACQQp3c2ogGGoiA2oiESAJIBNzcSATc2ogEUEadyARQRV3cyARQQd3c2pB59KkoQFqIhggAyACcyABcSADIAJxcyADQR53IANBE3dzIANBCndzaiAUaiIBaiISIBEgCXNxIAlzaiASQRp3IBJBFXdzIBJBB3dzakGFldy9AmoiFCABIANzIAJxIAEgA3FzIAFBHncgAUETd3MgAUEKd3NqIBdqIgJqIhMgI2ogJiASaiAiIBFqICUgCWogEyASIBFzcSARc2ogE0EadyATQRV3cyATQQd3c2pBuMLs8AJqIhcgAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAZaiIDaiIJIBMgEnNxIBJzaiAJQRp3IAlBFXdzIAlBB3dzakH827HpBGoiGSADIAJzIAFxIAMgAnFzIANBHncgA0ETd3MgA0EKd3NqIBpqIgFqIhEgCSATc3EgE3NqIBFBGncgEUEVd3MgEUEHd3NqQZOa4JkFaiIaIAEgA3MgAnEgASADcXMgAUEedyABQRN3cyABQQp3c2ogGGoiAmoiEiARIAlzcSAJc2ogEkEadyASQRV3cyASQQd3c2pB1OapqAZqIhggAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAUaiIDaiITaiAoIBJqICQgEWogJyAJaiATIBIgEXNxIBFzaiATQRp3IBNBFXdzIBNBB3dzakG7laizB2oiFCADIAJzIAFxIAMgAnFzIANBHncgA0ETd3MgA0EKd3NqIBdqIgFqIgkgEyASc3EgEnNqIAlBGncgCUEVd3MgCUEHd3NqQa6Si454aiIXIAEgA3MgAnEgASADcXMgAUEedyABQRN3cyABQQp3c2ogGWoiAmoiESAJIBNzcSATc2ogEUEadyARQRV3cyARQQd3c2pBhdnIk3lqIhkgAiABcyADcSACIAFxcyACQR53IAJBE3dzIAJBCndzaiAaaiIDaiISIBEgCXNxIAlzaiASQRp3IBJBFXdzIBJBB3dzakGh0f+VemoiGiADIAJz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";
      var hash$a = "8c18dd94";
      var wasmJson$a = {
        name: name$a,
        data: data$a,
        hash: hash$a
      };
      const mutex$a = new Mutex();
      let wasmCache$a = null;
      function sha2242(data2) {
        if (wasmCache$a === null) {
          return lockedCreate(mutex$a, wasmJson$a, 28).then((wasm) => {
            wasmCache$a = wasm;
            return wasmCache$a.calculate(data2, 224);
          });
        }
        try {
          const hash2 = wasmCache$a.calculate(data2, 224);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA224() {
        return WASMInterface(wasmJson$a, 28).then((wasm) => {
          wasm.init(224);
          const obj = {
            init: () => {
              wasm.init(224);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 28
          };
          return obj;
        });
      }
      const mutex$9 = new Mutex();
      let wasmCache$9 = null;
      function sha2562(data2) {
        if (wasmCache$9 === null) {
          return lockedCreate(mutex$9, wasmJson$a, 32).then((wasm) => {
            wasmCache$9 = wasm;
            return wasmCache$9.calculate(data2, 256);
          });
        }
        try {
          const hash2 = wasmCache$9.calculate(data2, 256);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA256() {
        return WASMInterface(wasmJson$a, 32).then((wasm) => {
          wasm.init(256);
          const obj = {
            init: () => {
              wasm.init(256);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 32
          };
          return obj;
        });
      }
      var name$9 = "sha512";
      var data$9 = "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";
      var hash$9 = "f2e40eb1";
      var wasmJson$9 = {
        name: name$9,
        data: data$9,
        hash: hash$9
      };
      const mutex$8 = new Mutex();
      let wasmCache$8 = null;
      function sha384(data2) {
        if (wasmCache$8 === null) {
          return lockedCreate(mutex$8, wasmJson$9, 48).then((wasm) => {
            wasmCache$8 = wasm;
            return wasmCache$8.calculate(data2, 384);
          });
        }
        try {
          const hash2 = wasmCache$8.calculate(data2, 384);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA384() {
        return WASMInterface(wasmJson$9, 48).then((wasm) => {
          wasm.init(384);
          const obj = {
            init: () => {
              wasm.init(384);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 128,
            digestSize: 48
          };
          return obj;
        });
      }
      const mutex$7 = new Mutex();
      let wasmCache$7 = null;
      function sha5122(data2) {
        if (wasmCache$7 === null) {
          return lockedCreate(mutex$7, wasmJson$9, 64).then((wasm) => {
            wasmCache$7 = wasm;
            return wasmCache$7.calculate(data2, 512);
          });
        }
        try {
          const hash2 = wasmCache$7.calculate(data2, 512);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSHA512() {
        return WASMInterface(wasmJson$9, 64).then((wasm) => {
          wasm.init(512);
          const obj = {
            init: () => {
              wasm.init(512);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 128,
            digestSize: 64
          };
          return obj;
        });
      }
      var name$8 = "xxhash32";
      var data$8 = "AGFzbQEAAAABEQRgAAF/YAF/AGAAAGACf38AAwcGAAEBAgADBQQBAQICBg4CfwFBsIkFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAABC0hhc2hfVXBkYXRlAAIKSGFzaF9GaW5hbAADDUhhc2hfR2V0U3RhdGUABA5IYXNoX0NhbGN1bGF0ZQAFClNUQVRFX1NJWkUDAQrvEQYFAEGACQtNAEEAQgA3A6iJAUEAIAA2AoiJAUEAIABBz4yijgZqNgKMiQFBACAAQfeUr694ajYChIkBQQAgAEGoiI2hAmo2AoCJAUEAQQA2AqCJAQu4CAEHfwJAIABFDQBBAEEAKQOoiQEgAK18NwOoiQECQEEAKAKgiQEiASAAakEPSw0AAkACQCAAQQNxIgINAEGACSEDIAAhBAwBCyAAQXxxIQRBgAkhAwNAQQBBACgCoIkBIgVBAWo2AqCJASAFQZCJAWogAy0AADoAACADQQFqIQMgAkF/aiICDQALCyAAQQRJDQEDQEEAQQAoAqCJASICQQFqNgKgiQEgAkGQiQFqIAMtAAA6AAAgA0EBai0AACECQQBBACgCoIkBIgVBAWo2AqCJASAFQZCJAWogAjoAACADQQJqLQAAIQJBAEEAKAKgiQEiBUEBajYCoIkBIAVBkIkBaiACOgAAIANBA2otAAAhAkEAQQAoAqCJASIFQQFqNgKgiQEgBUGQiQFqIAI6AAAgA0EEaiEDIARBfGoiBA0ADAILCyAAQfAIaiEGAkACQCABDQBBACgCjIkBIQJBACgCiIkBIQVBACgChIkBIQRBACgCgIkBIQFBgAkhAwwBC0GACSEDAkAgAUEPSw0AQYAJIQMCQAJAQQAgAWtBA3EiBA0AIAEhBQwBCyABIQIDQEEAIAJBAWoiBTYCoIkBIAJBkIkBaiADLQAAOgAAIANBAWohAyAFIQIgBEF/aiIEDQALCyABQXNqQQNJDQBBACEEA0AgAyAEaiIBLQAAIQdBACAFIARqIgJBAWo2AqCJASACQZCJAWogBzoAACABQQFqLQAAIQdBACACQQJqNgKgiQEgAkGRiQFqIAc6AAAgAUECai0AACEHQQAgAkEDajYCoIkBIAJBkokBaiAHOgAAIAFBA2otAAAhAUEAIAJBBGo2AqCJASACQZOJAWogAToAACAFIARBBGoiBGpBEEcNAAsgAyAEaiEDC0EAQQAoApCJAUH3lK+veGxBACgCgIkBakENd0Gx893xeWwiATYCgIkBQQBBACgClIkBQfeUr694bEEAKAKEiQFqQQ13QbHz3fF5bCIENgKEiQFBAEEAKAKYiQFB95Svr3hsQQAoAoiJAWpBDXdBsfPd8XlsIgU2AoiJAUEAQQAoApyJAUH3lK+veGxBACgCjIkBakENd0Gx893xeWwiAjYCjIkBCyAAQYAJaiEAAkAgAyAGSw0AA0AgAygCAEH3lK+veGwgAWpBDXdBsfPd8XlsIQEgA0EMaigCAEH3lK+veGwgAmpBDXdBsfPd8XlsIQIgA0EIaigCAEH3lK+veGwgBWpBDXdBsfPd8XlsIQUgA0EEaigCAEH3lK+veGwgBGpBDXdBsfPd8XlsIQQgA0EQaiIDIAZNDQALC0EAIAI2AoyJAUEAIAU2AoiJAUEAIAQ2AoSJAUEAIAE2AoCJAUEAIAAgA2s2AqCJASAAIANGDQBBACECA0AgAkGQiQFqIAMgAmotAAA6AAAgAkEBaiICQQAoAqCJAUkNAAsLC4MEAgF+Bn9BACkDqIkBIgCnIQECQAJAIABCEFQNAEEAKAKEiQFBB3dBACgCgIkBQQF3akEAKAKIiQFBDHdqQQAoAoyJAUESd2ohAgwBC0EAKAKIiQFBsc/ZsgFqIQILIAIgAWohAkGQiQEhA0GUiQEhAQJAQQAoAqCJASIEQZCJAWoiBUGUiQFJDQBBkIkBIQMCQCAEQXxqIgZBBHENAEEAKAKQiQFBvdzKlXxsIAJqQRF3Qa/W074CbCECQZiJASEBQZSJASEDIAZBBEkNAQsDQCABKAIAQb3cypV8bCADKAIAQb3cypV8bCACakERd0Gv1tO+AmxqQRF3Qa/W074CbCECIAFBBGohAyABQQhqIgEgBU0NAAsgAUF8aiEDCwJAIAMgBUYNACAEQY+JAWohBgJAAkAgBCADa0EBcQ0AIAMhAQwBCyADQQFqIQEgAy0AAEGxz9myAWwgAmpBC3dBsfPd8XlsIQILIAYgA0YNAANAIAFBAWotAABBsc/ZsgFsIAEtAABBsc/ZsgFsIAJqQQt3QbHz3fF5bGpBC3dBsfPd8XlsIQIgAUECaiIBIAVHDQALC0EAIAJBD3YgAnNB95Svr3hsIgFBDXYgAXNBvdzKlXxsIgFBEHYgAXMiAkEYdCACQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnKtNwOACQsGAEGAiQEL0gQCAX4Ef0EAQgA3A6iJAUEAIAE2AoiJAUEAIAFBz4yijgZqNgKMiQFBACABQfeUr694ajYChIkBQQAgAUGoiI2hAmo2AoCJAUEAQQA2AqCJASAAEAJBACkDqIkBIgKnIQECQAJAIAJCEFQNAEEAKAKEiQFBB3dBACgCgIkBQQF3akEAKAKIiQFBDHdqQQAoAoyJAUESd2ohAAwBC0EAKAKIiQFBsc/ZsgFqIQALIAAgAWohAEGQiQEhA0GUiQEhAQJAQQAoAqCJASIEQZCJAWoiBUGUiQFJDQBBkIkBIQMCQCAEQXxqIgZBBHENAEEAKAKQiQFBvdzKlXxsIABqQRF3Qa/W074CbCEAQZiJASEBQZSJASEDIAZBBEkNAQsDQCABKAIAQb3cypV8bCADKAIAQb3cypV8bCAAakERd0Gv1tO+AmxqQRF3Qa/W074CbCEAIAFBBGohAyABQQhqIgEgBU0NAAsgAUF8aiEDCwJAIAMgBUYNACAEQY+JAWohBgJAAkAgBCADa0EBcQ0AIAMhAQwBCyADQQFqIQEgAy0AAEGxz9myAWwgAGpBC3dBsfPd8XlsIQALIAYgA0YNAANAIAFBAWotAABBsc/ZsgFsIAEtAABBsc/ZsgFsIABqQQt3QbHz3fF5bGpBC3dBsfPd8XlsIQAgAUECaiIBIAVHDQALC0EAIABBD3YgAHNB95Svr3hsIgFBDXYgAXNBvdzKlXxsIgFBEHYgAXMiAEEYdCAAQYD+A3FBCHRyIAFBCHZBgP4DcSABQRh2cnKtNwOACQsLCwEAQYAICwQwAAAA";
      var hash$8 = "4bb12485";
      var wasmJson$8 = {
        name: name$8,
        data: data$8,
        hash: hash$8
      };
      const mutex$6 = new Mutex();
      let wasmCache$6 = null;
      function validateSeed$3(seed) {
        if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
          return new Error("Seed must be a valid 32-bit long unsigned integer.");
        }
        return null;
      }
      function xxhash32(data2, seed = 0) {
        if (validateSeed$3(seed)) {
          return Promise.reject(validateSeed$3(seed));
        }
        if (wasmCache$6 === null) {
          return lockedCreate(mutex$6, wasmJson$8, 4).then((wasm) => {
            wasmCache$6 = wasm;
            return wasmCache$6.calculate(data2, seed);
          });
        }
        try {
          const hash2 = wasmCache$6.calculate(data2, seed);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createXXHash32(seed = 0) {
        if (validateSeed$3(seed)) {
          return Promise.reject(validateSeed$3(seed));
        }
        return WASMInterface(wasmJson$8, 4).then((wasm) => {
          wasm.init(seed);
          const obj = {
            init: () => {
              wasm.init(seed);
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 16,
            digestSize: 4
          };
          return obj;
        });
      }
      var name$7 = "xxhash64";
      var data$7 = "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";
      var hash$7 = "177fbfa3";
      var wasmJson$7 = {
        name: name$7,
        data: data$7,
        hash: hash$7
      };
      const mutex$5 = new Mutex();
      let wasmCache$5 = null;
      const seedBuffer$2 = new Uint8Array(8);
      function validateSeed$2(seed) {
        if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
          return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
        }
        return null;
      }
      function writeSeed$2(arr, low, high) {
        const buffer = new DataView(arr);
        buffer.setUint32(0, low, true);
        buffer.setUint32(4, high, true);
      }
      function xxhash64(data2, seedLow = 0, seedHigh = 0) {
        if (validateSeed$2(seedLow)) {
          return Promise.reject(validateSeed$2(seedLow));
        }
        if (validateSeed$2(seedHigh)) {
          return Promise.reject(validateSeed$2(seedHigh));
        }
        if (wasmCache$5 === null) {
          return lockedCreate(mutex$5, wasmJson$7, 8).then((wasm) => {
            wasmCache$5 = wasm;
            writeSeed$2(seedBuffer$2.buffer, seedLow, seedHigh);
            wasmCache$5.writeMemory(seedBuffer$2);
            return wasmCache$5.calculate(data2);
          });
        }
        try {
          writeSeed$2(seedBuffer$2.buffer, seedLow, seedHigh);
          wasmCache$5.writeMemory(seedBuffer$2);
          const hash2 = wasmCache$5.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createXXHash64(seedLow = 0, seedHigh = 0) {
        if (validateSeed$2(seedLow)) {
          return Promise.reject(validateSeed$2(seedLow));
        }
        if (validateSeed$2(seedHigh)) {
          return Promise.reject(validateSeed$2(seedHigh));
        }
        return WASMInterface(wasmJson$7, 8).then((wasm) => {
          const instanceBuffer = new Uint8Array(8);
          writeSeed$2(instanceBuffer.buffer, seedLow, seedHigh);
          wasm.writeMemory(instanceBuffer);
          wasm.init();
          const obj = {
            init: () => {
              wasm.writeMemory(instanceBuffer);
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 32,
            digestSize: 8
          };
          return obj;
        });
      }
      var name$6 = "xxhash3";
      var data$6 = "AGFzbQEAAAABNAhgAAF/YAR/f39/AGAHf39/f39/fwBgBH9+fn4BfmAEf39/fgF+YAN/f34BfmAAAGABfwADDg0AAQIDBAUFBQYHBgAGBQQBAQICBg4CfwFBwI4FC38AQcAJCwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAAIC0hhc2hfVXBkYXRlAAkKSGFzaF9GaW5hbAAKDUhhc2hfR2V0U3RhdGUACw5IYXNoX0NhbGN1bGF0ZQAMClNUQVRFX1NJWkUDAQr6QQ0FAEGACgvkAwMPfgF/AX4CQCADRQ0AIAApAzAhBCAAKQM4IQUgACkDICEGIAApAyghByAAKQMQIQggACkDGCEJIAApAwAhCiAAKQMIIQsDQCAFIAFBMGopAwAiDHwgAkE4aikDACABQThqKQMAIg2FIgVCIIggBUL/////D4N+fCEFIAcgAUEgaikDACIOfCACQShqKQMAIAFBKGopAwAiD4UiB0IgiCAHQv////8Pg358IQcgCSABQRBqKQMAIhB8IAJBGGopAwAgAUEYaikDACIRhSIJQiCIIAlC/////w+DfnwhCSALIAEpAwAiEnwgAkEIaiITKQMAIAFBCGopAwAiFIUiC0IgiCALQv////8Pg358IQsgAkEwaikDACAMhSIMQiCIIAxC/////w+DfiAEfCANfCEEIAJBIGopAwAgDoUiDEIgiCAMQv////8Pg34gBnwgD3whBiACQRBqKQMAIBCFIgxCIIggDEL/////D4N+IAh8IBF8IQggAikDACAShSIMQiCIIAxC/////w+DfiAKfCAUfCEKIAFBwABqIQEgEyECIANBf2oiAw0ACyAAIAk3AxggACAKNwMAIAAgCzcDCCAAIAc3AyggACAINwMQIAAgBTcDOCAAIAY3AyAgACAENwMwCwveAgIBfwF+AkAgBCACIAEoAgAiB2siAkkNACAAIAMgBSAHQQN0aiACEAEgACAFIAZqIgcpAwAgACkDACIIQi+IhSAIhUKx893xCX43AwAgACAHKQMIIAApAwgiCEIviIUgCIVCsfPd8Ql+NwMIIAAgBykDECAAKQMQIghCL4iFIAiFQrHz3fEJfjcDECAAIAcpAxggACkDGCIIQi+IhSAIhUKx893xCX43AxggACAHKQMgIAApAyAiCEIviIUgCIVCsfPd8Ql+NwMgIAAgBykDKCAAKQMoIghCL4iFIAiFQrHz3fEJfjcDKCAAIAcpAzAgACkDMCIIQi+IhSAIhUKx893xCX43AzAgACAHKQM4IAApAzgiCEIviIUgCIVCsfPd8Ql+NwM4IAAgAyACQQZ0aiAFIAQgAmsiBxABIAEgBzYCAA8LIAAgAyAFIAdBA3RqIAQQASABIAcgBGo2AgALhQEBAX8gAiABhSADpyIEQRh0IARBgP4DcUEIdHIgBEEIdkGA/gNxIARBGHZycq1CIIYgA4V9QQA1AoCMAUIghiAAQfyLAWo1AgCEhSIDQjGJIANCGImFIAOFQqW+4/TRjIfZn39+IgNCI4ggAK18IAOFQqW+4/TRjIfZn39+IgNCHIggA4ULZwAgAiABc60gA3wiA0IhiEEALQCAjAFBEHQgAEEIdHIgAEEBdkGAjAFqLQAAQRh0ciAAQf+LAWotAAByrYUgA4VCz9bTvtLHq9lCfiIDQh2IIAOFQvnz3fGZ9pmrFn4iA0IgiCADhQuJAwEEfgJAIABBCUkNAEEAKQOAjAEgASkDICABKQMYhSACfIUiA0I4hiADQoD+A4NCKIaEIANCgID8B4NCGIYgA0KAgID4D4NCCIaEhCADQgiIQoCAgPgPgyADQhiIQoCA/AeDhCADQiiIQoD+A4MgA0I4iISEhCAArXwgAEH4iwFqKQMAIAEpAzAgASkDKIUgAn2FIgJ8IAJC/////w+DIgQgA0IgiCIFfiIGQv////8PgyACQiCIIgIgA0L/////D4MiA358IAQgA34iA0IgiHwiBEIghiADQv////8Pg4QgBkIgiCACIAV+fCAEQiCIfIV8IgNCJYggA4VC+fPd8ZnymasWfiIDQiCIIAOFDwsCQCAAQQRJDQAgACABQQhqKQMAIAFBEGopAwAgAhADDwsCQCAARQ0AIAAgASgCACABQQRqKAIAIAIQBA8LIAEpAzggASkDQIUgAoUiA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC94IAQZ+IACtQoeVr6+Ytt6bnn9+IQMCQCAAQSFJDQACQCAAQcEASQ0AAkAgAEHhAEkNACABKQNoIAJ9QQApA7iMAYUiBEL/////D4MiBSABKQNgIAJ8QQApA7CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDeCACfSAAQciLAWopAwCFIgNC/////w+DIgQgASkDcCACfCAAQcCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQNIIAJ9QQApA6iMAYUiBEL/////D4MiBSABKQNAIAJ8QQApA6CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDWCACfSAAQdiLAWopAwCFIgNC/////w+DIgQgASkDUCACfCAAQdCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQMoIAJ9QQApA5iMAYUiBEL/////D4MiBSABKQMgIAJ8QQApA5CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDOCACfSAAQeiLAWopAwCFIgNC/////w+DIgQgASkDMCACfCAAQeCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQMIIAJ9QQApA4iMAYUiBEL/////D4MiBSABKQMAIAJ8QQApA4CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDGCACfSAAQfiLAWopAwCFIgNC/////w+DIgQgASkDECACfCAAQfCLAWopAwCFIgJCIIgiBX4iBkL/////D4MgA0IgiCIDIAJC/////w+DIgJ+fCAEIAJ+IgJCIIh8IgRCIIYgAkL/////D4OEIAZCIIggAyAFfnwgBEIgiHyFfCICQiWIIAKFQvnz3fGZ8pmrFn4iAkIgiCAChQv8CgQBfwV+An8BfkEAIQMgASkDeCACfUEAKQP4jAGFIgRC/////w+DIgUgASkDcCACfEEAKQPwjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpA2ggAn1BACkD6IwBhSIEQv////8PgyIFIAEpA2AgAnxBACkD4IwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSABKQNYIAJ9QQApA9iMAYUiBEL/////D4MiBSABKQNQIAJ8QQApA9CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgASkDSCACfUEAKQPIjAGFIgRC/////w+DIgUgASkDQCACfEEAKQPAjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpAzggAn1BACkDuIwBhSIEQv////8PgyIFIAEpAzAgAnxBACkDsIwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSABKQMoIAJ9QQApA6iMAYUiBEL/////D4MiBSABKQMgIAJ8QQApA6CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgASkDGCACfUEAKQOYjAGFIgRC/////w+DIgUgASkDECACfEEAKQOQjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpAwggAn1BACkDiIwBhSIEQv////8PgyIFIAEpAwAgAnxBACkDgIwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSAArUKHla+vmLbem55/fnx8fHx8fHx8IgRCJYggBIVC+fPd8ZnymasWfiIEQiCIIASFIQQCQCAAQZABSA0AIABBBHZBeGohCQNAIAEgA2oiCkELaikDACACfSADQYiNAWopAwCFIgVC/////w+DIgYgCkEDaikDACACfCADQYCNAWopAwCFIgdCIIgiCH4iC0L/////D4MgBUIgiCIFIAdC/////w+DIgd+fCAGIAd+IgZCIIh8IgdCIIYgBkL/////D4OEIAtCIIggBSAIfnwgB0IgiHyFIAR8IQQgA0EQaiEDIAlBf2oiCQ0ACwsgASkDfyACfSAAQfiLAWopAwCFIgVC/////w+DIgYgASkDdyACfCAAQfCLAWopAwCFIgJCIIgiB34iCEL/////D4MgBUIgiCIFIAJC/////w+DIgJ+fCAGIAJ+IgJCIIh8IgZCIIYgAkL/////D4OEIAhCIIggBSAHfnwgBkIgiHyFIAR8IgJCJYggAoVC+fPd8ZnymasWfiICQiCIIAKFC98FAgF+AX8CQAJAQQApA4AKIgBQRQ0AQYAIIQFCACEADAELAkBBACkDoI4BIABSDQBBACEBDAELQQAhAUEAQq+v79e895Kg/gAgAH03A/iLAUEAIABCxZbr+djShYIofDcD8IsBQQBCj/Hjja2P9JhOIAB9NwPoiwFBACAAQqus+MXV79HQfHw3A+CLAUEAQtOt1LKShbW0nn8gAH03A9iLAUEAIABCl5r0jvWWvO3JAHw3A9CLAUEAQsWDgv2v/8SxayAAfTcDyIsBQQAgAELqi7OdyOb09UN8NwPAiwFBAELIv/rLnJveueQAIAB9NwO4iwFBACAAQoqjgd/Ume2sMXw3A7CLAUEAQvm57738+MKnHSAA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QQApA4CKATcDACACQQApA4iKATcDCCACQQApA5CKATcDECACQQApA5iKATcDGCACQQApA6CKATcDICACQQApA6iKATcDKCACQQApA7CKASIFNwMwIAJBACkDuIoBIgY3AzgCQAJAQQAoAoCOASIHQcAASQ0AIAJBACgCiI4BNgJAIAIgAkHAAGpBACgCmI4BQYCMASAHQX9qQQZ2IANBACgCnI4BIgAQAiADIABqIgBBeWopAwAhCCAAKQMJIQkgACkDGSEKIAApAykhCyAHQcCLAWopAwAhBSAAKQMBIQwgB0HIiwFqKQMAIQYgB0HQiwFqKQMAIQ0gACkDESEOIAdB2IsBaikDACEPIAdB4IsBaikDACEQIAApAyEhESAHQeiLAWopAwAhEiACKQMAIRMgAikDECEUIAIpAyAhFSACKQMwIRYgAikDCCEXIAIpAxghGCACKQMoIRkgAiACKQM4IAdB8IsBaikDACIafCAAKQMxIAdB+IsBaikDACIbhSIcQiCIIBxC/////w+Dfnw3AzggGSAQfCARIBKFIhFCIIggEUL/////D4N+fCERIBggDXwgDiAPhSIOQiCIIA5C/////w+DfnwhDiAXIAV8IAwgBoUiDEIgiCAMQv////8Pg358IQwgGyAWIAsgGoUiC0IgiCALQv////8Pg358fCELIBIgFSAKIBCFIhBCIIggEEL/////D4N+fHwhECAPIBQgCSANhSINQiCIIA1C/////w+Dfnx8IRIgBiATIAggBYUiBUIgiCAFQv////8Pg358fCEIDAELIAdBwI0BaiEdQcAAIAdrIR4gAkHAAGohAAJAAkACQCAHQThNDQAgHiEfDAELAkACQEE4IAdrQQN2QQFqQQdxIh8NACACQcAAaiEAIB4hHwwBCyACQcAAaiEAIB9BA3QiICEfA0AgACAdKQMANwMAIABBCGohACAdQQhqIR0gH0F4aiIfDQALQcAAIAcgIGprIR8LAkAgBw0AA0AgACAdKQMANwMAIABBCGogHUEIaikDADcDACAAQRBqIB1BEGopAwA3AwAgAEEYaiAdQRhqKQMANwMAIABBIGogHUEgaikDADcDACAAQShqIB1BKGopAwA3AwAgAEEwaiAdQTBqKQMANwMAIABBOGogHUE4aikDADcDACAAQcAAaiEAIB1BwABqIR0gH0FAaiIfQQdLDQALCyAfRQ0BCyAfQX9qISECQCAfQQdxIiBFDQAgH0F4cSEfA0AgACAdLQAAOgAAIABBAWohACAdQQFqIR0gIEF/aiIgDQALCyAhQQdJDQADQCAAIB0pAAA3AAAgAEEIaiEAIB1BCGohHSAfQXhqIh8NAAsLIAJBwABqIB5qIR1BgIwBIQACQAJAAkAgB0EISQ0AAkAgB0E4akEDdkEBakEHcSIfDQAMAgsgH0EDdCEgQYCMASEAA0AgHSAAKQMANwMAIB1BCGohHSAAQQhqIQAgH0F/aiIfDQALIAcgIGshBwsgB0UNAQJAAkAgB0EHcSIgDQAgByEfDAELIAdBeHEhHwNAIB0gAC0AADoAACAdQQFqIR0gAEEBaiEAICBBf2oiIA0ACwsgB0EISQ0BCwNAIB0gACkAADcAACAdQQhqIR0gAEEIaiEAIB9BeGoiHw0ACwsgA0EAKAKcjgFqIgBBeWopAwAhCiAAKQMJIRMgACkDGSEUIAApAykhCyAAKQMBIQwgACkDESEOIAApAyEhESACKQMAIRUgAikDECEWIAIpAyAhFyACKQMIIRggAikDQCENIAIpA0ghDyACKQMYIRkgAikDUCESIAIpA1ghCCACKQMoIRogAikDYCEQIAIpA2ghCSACIAYgAikDcCIbfCAAKQMxIAIpA3giBoUiHEIgiCAcQv////8Pg358NwM4IBogEHwgESAJhSIRQiCIIBFC/////w+DfnwhESAZIBJ8IA4gCIUiDkIgiCAOQv////8Pg358IQ4gGCANfCAMIA+FIgxCIIggDEL/////D4N+fCEMIAYgCyAbhSILQiCIIAtC/////w+DfiAFfHwhCyAJIBcgFCAQhSIFQiCIIAVC/////w+Dfnx8IRAgCCAWIBMgEoUiBUIgiCAFQv////8Pg358fCESIA8gFSAKIA2FIgVCIIggBUL/////D4N+fHwhCAsgAykDQyACKQM4hSIFQv////8PgyIGIAMpAzsgC4UiC0IgiCINfiIPQv////8PgyAFQiCIIgUgC0L/////D4MiC358IAYgC34iBkIgiHwiC0IghiAGQv////8Pg4QgD0IgiCAFIA1+fCALQiCIfIUgAykDMyARhSIFQv////8PgyIGIAMpAysgEIUiC0IgiCINfiIPQv////8PgyAFQiCIIgUgC0L/////D4MiC358IAYgC34iBkIgiHwiC0IghiAGQv////8Pg4QgD0IgiCAFIA1+fCALQiCIfIUgAykDIyAOhSIFQv////8PgyIGIAMpAxsgEoUiC0IgiCINfiIPQv////8PgyAFQiCIIgUgC0L/////D4MiC358IAYgC34iBkIgiHwiC0IghiAGQv////8Pg4QgD0IgiCAFIA1+fCALQiCIfIUgAykDEyAMhSIFQv////8PgyIGIAMpAwsgCIUiC0IgiCINfiIPQv////8PgyAFQiCIIgUgC0L/////D4MiC358IAYgC34iBkIgiHwiC0IghiAGQv////8Pg4QgD0IgiCAFIA1+fCALQiCIfIUgBEKHla+vmLbem55/fnx8fHwiBEIliCAEhUL5893xmfKZqxZ+IgRCIIggBIUhBAwBCyAEpyEAAkBBACkDoI4BIgRQDQACQCAAQRBLDQAgAEGACCAEEAUhBAwCCwJAIABBgAFLDQAgAEGACCAEEAYhBAwCCyAAQYAIIAQQByEEDAELAkAgAEEQSw0AIAAgA0IAEAUhBAwBCwJAIABBgAFLDQAgACADQgAQBiEEDAELIAAgA0IAEAchBAtBACAEQjiGIARCgP4Dg0IohoQgBEKAgPwHg0IYhiAEQoCAgPgPg0IIhoSEIARCCIhCgICA+A+DIARCGIhCgID8B4OEIARCKIhCgP4DgyAEQjiIhISENwOACiABJAALBgBBgIoBCwIACwvMAQEAQYAIC8QBuP5sOSOkS758AYEs9yGtHN7UbemDkJfbckCkpLezZx/LeeZOzMDleIJa0H3M/3IhuAhGdPdDJI7gNZDmgTomTDwoUruRwwDLiNBlixtTLqNxZEiXog35TjgZ70ap3qzYqPp2P+OcND/53LvHxwtPHYpR4EvNtFkxyJ9+ydl4c2TqxayDNNPrw8WBoP/6E2PrFw3dUbfw2knTFlUmKdRonisWvlh9R6H8j/i40XrQMc5FyzqPlRYEKK/X+8q7S0B+QAIAAA==";
      var hash$6 = "5a2fbdbb";
      var wasmJson$6 = {
        name: name$6,
        data: data$6,
        hash: hash$6
      };
      const mutex$4 = new Mutex();
      let wasmCache$4 = null;
      const seedBuffer$1 = new Uint8Array(8);
      function validateSeed$1(seed) {
        if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
          return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
        }
        return null;
      }
      function writeSeed$1(arr, low, high) {
        const buffer = new DataView(arr);
        buffer.setUint32(0, low, true);
        buffer.setUint32(4, high, true);
      }
      function xxhash3(data2, seedLow = 0, seedHigh = 0) {
        if (validateSeed$1(seedLow)) {
          return Promise.reject(validateSeed$1(seedLow));
        }
        if (validateSeed$1(seedHigh)) {
          return Promise.reject(validateSeed$1(seedHigh));
        }
        if (wasmCache$4 === null) {
          return lockedCreate(mutex$4, wasmJson$6, 8).then((wasm) => {
            wasmCache$4 = wasm;
            writeSeed$1(seedBuffer$1.buffer, seedLow, seedHigh);
            wasmCache$4.writeMemory(seedBuffer$1);
            return wasmCache$4.calculate(data2);
          });
        }
        try {
          writeSeed$1(seedBuffer$1.buffer, seedLow, seedHigh);
          wasmCache$4.writeMemory(seedBuffer$1);
          const hash2 = wasmCache$4.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createXXHash3(seedLow = 0, seedHigh = 0) {
        if (validateSeed$1(seedLow)) {
          return Promise.reject(validateSeed$1(seedLow));
        }
        if (validateSeed$1(seedHigh)) {
          return Promise.reject(validateSeed$1(seedHigh));
        }
        return WASMInterface(wasmJson$6, 8).then((wasm) => {
          const instanceBuffer = new Uint8Array(8);
          writeSeed$1(instanceBuffer.buffer, seedLow, seedHigh);
          wasm.writeMemory(instanceBuffer);
          wasm.init();
          const obj = {
            init: () => {
              wasm.writeMemory(instanceBuffer);
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 512,
            digestSize: 8
          };
          return obj;
        });
      }
      var name$5 = "xxhash128";
      var data$5 = "AGFzbQEAAAABKwdgAAF/YAR/f39/AGAHf39/f39/fwBgA39/fgF+YAR/f39+AGAAAGABfwADDQwAAQIDBAQEBQYFAAUFBAEBAgIGDgJ/AUHAjgULfwBBwAkLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAcLSGFzaF9VcGRhdGUACApIYXNoX0ZpbmFsAAkNSGFzaF9HZXRTdGF0ZQAKDkhhc2hfQ2FsY3VsYXRlAAsKU1RBVEVfU0laRQMBCqBNDAUAQYAKC+QDAw9+AX8BfgJAIANFDQAgACkDMCEEIAApAzghBSAAKQMgIQYgACkDKCEHIAApAxAhCCAAKQMYIQkgACkDACEKIAApAwghCwNAIAUgAUEwaikDACIMfCACQThqKQMAIAFBOGopAwAiDYUiBUIgiCAFQv////8Pg358IQUgByABQSBqKQMAIg58IAJBKGopAwAgAUEoaikDACIPhSIHQiCIIAdC/////w+DfnwhByAJIAFBEGopAwAiEHwgAkEYaikDACABQRhqKQMAIhGFIglCIIggCUL/////D4N+fCEJIAsgASkDACISfCACQQhqIhMpAwAgAUEIaikDACIUhSILQiCIIAtC/////w+DfnwhCyACQTBqKQMAIAyFIgxCIIggDEL/////D4N+IAR8IA18IQQgAkEgaikDACAOhSIMQiCIIAxC/////w+DfiAGfCAPfCEGIAJBEGopAwAgEIUiDEIgiCAMQv////8Pg34gCHwgEXwhCCACKQMAIBKFIgxCIIggDEL/////D4N+IAp8IBR8IQogAUHAAGohASATIQIgA0F/aiIDDQALIAAgCTcDGCAAIAo3AwAgACALNwMIIAAgBzcDKCAAIAg3AxAgACAFNwM4IAAgBjcDICAAIAQ3AzALC94CAgF/AX4CQCAEIAIgASgCACIHayICSQ0AIAAgAyAFIAdBA3RqIAIQASAAIAUgBmoiBykDACAAKQMAIghCL4iFIAiFQrHz3fEJfjcDACAAIAcpAwggACkDCCIIQi+IhSAIhUKx893xCX43AwggACAHKQMQIAApAxAiCEIviIUgCIVCsfPd8Ql+NwMQIAAgBykDGCAAKQMYIghCL4iFIAiFQrHz3fEJfjcDGCAAIAcpAyAgACkDICIIQi+IhSAIhUKx893xCX43AyAgACAHKQMoIAApAygiCEIviIUgCIVCsfPd8Ql+NwMoIAAgBykDMCAAKQMwIghCL4iFIAiFQrHz3fEJfjcDMCAAIAcpAzggACkDOCIIQi+IhSAIhUKx893xCX43AzggACADIAJBBnRqIAUgBCACayIHEAEgASAHNgIADwsgACADIAUgB0EDdGogBBABIAEgByAEajYCAAvtAwEFfiABKQM4IAApAziFIgNC/////w+DIgQgASkDMCAAKQMwhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMoIAApAyiFIgNC/////w+DIgQgASkDICAAKQMghSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMYIAApAxiFIgNC/////w+DIgQgASkDECAAKQMQhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMIIAApAwiFIgNC/////w+DIgQgASkDACAAKQMAhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSACfHx8fCICQiWIIAKFQvnz3fGZ8pmrFn4iAkIgiCAChQu6CAIFfgN/AkAgAUEJSQ0AIAAgAUH4iwFqKQMAIgQgAikDOCACKQMwhSADfIUiBUL/////D4NC95Svrwh+IAVCgICAgHCDfEEAKQOAjAEgAikDKCACKQMghSADfYUgBIUiA0IgiCIEQrHz3fEJfnwgBEKHla+vCH4iBEIgiHwgBEL/////D4MgA0L/////D4MiA0Kx893xCX58IANCh5Wvrwh+IgRCIIh8IgVCIIh8IgNCOIYgA0KA/gODQiiGhCADQoCA/AeDQhiGIANCgICA+A+DQgiGhIQgA0IIiEKAgID4D4MgA0IYiEKAgPwHg4QgA0IoiEKA/gODIANCOIiEhIQgBEL/////D4MgAUF/aq1CNoaEIAVCIIZ8hSIEQiCIIgVCz9bTvgJ+IgZC/////w+DIARC/////w+DIgRCvdzKlQx+fCAEQs/W074CfiIEQiCIfCIHQiCGIghCJYggCCAEQv////8Pg4SFQvnz3fGZ8pmrFn4iBEIgiCAEhTcDACAAIAVCvdzKlQx+IANCz9bTvtLHq9lCfnwgBkIgiHwgB0IgiHwiA0IliCADhUL5893xmfKZqxZ+IgNCIIggA4U3AwgPCwJAIAFBBEkNACAAIAIpAxggAikDEIUgA6ciAkEYdCACQYD+A3FBCHRyIAJBCHZBgP4DcSACQRh2cnKtQiCGIAOFfCABQfyLAWo1AgBCIIZBADUCgIwBhIUiA0IgiCIEIAFBAnRBh5Wvr3hqrSIFfiIGQiCIIARCsfPd8Ql+fCAGQv////8PgyADQv////8PgyIDQrHz3fEJfnwgAyAFfiIDQiCIfCIEQiCIfCAEQiCGIANC/////w+DhCIEQgGGfCIDQiWIIAOFQvnz3fGZ8pmrFn4iBUIgiCAFhTcDCCAAIANCA4ggBIUiA0IjiCADhUKlvuP00YyH2Z9/fiIDQhyIIAOFNwMADwsCQCABRQ0AIAAgAigCBCACKAIAc60gA3wiBEIhiEEALQCAjAFBEHQgAUEIdHIiCSABQQF2QYCMAWotAABBGHRyIgogAUH/iwFqLQAAIgFyIguthSAEhULP1tO+0ser2UJ+IgRCHYggBIVC+fPd8Zn2masWfiIEQiCIIASFNwMAIAAgAigCDCACKAIIc60gA30iA0IhiCABQRh0IAtBgP4DcUEIdHIgCUEIdkGA/gNxIApBGHZyckENd62FIAOFQs/W077Sx6vZQn4iA0IdiCADhUL5893xmfaZqxZ+IgNCIIggA4U3AwgPCyAAIAIpA1AgAikDWIUgA4UiBEIhiCAEhULP1tO+0ser2UJ+IgRCHYggBIVC+fPd8Zn2masWfiIEQiCIIASFNwMIIAAgAikDQCACKQNIhSADhSIDQiGIIAOFQs/W077Sx6vZQn4iA0IdiCADhUL5893xmfaZqxZ+IgNCIIggA4U3AwALwwoBCn4gAa0iBEKHla+vmLbem55/fiEFAkACQCABQSFPDQBCACEGDAELQgAhBwJAIAFBwQBJDQBCACEHAkAgAUHhAEkNACACQfgAaikDACADfSABQciLAWopAwAiCIUiB0L/////D4MiCSACKQNwIAN8IAFBwIsBaikDACIKhSILQiCIIgx+Ig1CIIggB0IgiCIHIAx+fCANQv////8PgyAHIAtC/////w+DIgt+fCAJIAt+IgdCIIh8IglCIIh8QQApA7iMASILQQApA7CMASIMfIUgCUIghiAHQv////8Pg4SFIQcgAkHoAGopAwAgA30gC4UiCUL/////D4MiCyACKQNgIAN8IAyFIgxCIIgiDX4iBkL/////D4MgCUIgiCIJIAxC/////w+DIgx+fCALIAx+IgtCIIh8IgxCIIYgC0L/////D4OEIAZCIIggCSANfnwgDEIgiHyFIAV8IAggCnyFIQULIAJB2ABqKQMAIAN9IAFB2IsBaikDACIIhSIJQv////8PgyIKIAIpA1AgA3wgAUHQiwFqKQMAIguFIgxCIIgiDX4iBkL/////D4MgCUIgiCIJIAxC/////w+DIgx+fCAKIAx+IgpCIIh8IgxCIIYgCkL/////D4OEIAZCIIggCSANfnwgDEIgiHyFIAd8QQApA6iMASIJQQApA6CMASIKfIUhByACQcgAaikDACADfSAJhSIJQv////8PgyIMIAIpA0AgA3wgCoUiCkIgiCINfiIGQv////8PgyAJQiCIIgkgCkL/////D4MiCn58IAwgCn4iCkIgiHwiDEIghiAKQv////8Pg4QgBkIgiCAJIA1+fCAMQiCIfIUgBXwgCCALfIUhBQsgAkE4aikDACADfSABQeiLAWopAwAiCIUiCUL/////D4MiCiACKQMwIAN8IAFB4IsBaikDACILhSIMQiCIIg1+IgZC/////w+DIAlCIIgiCSAMQv////8PgyIMfnwgCiAMfiIKQiCIfCIMQiCGIApC/////w+DhCAGQiCIIAkgDX58IAxCIIh8hSAHfEEAKQOYjAEiB0EAKQOQjAEiCXyFIQYgAkEoaikDACADfSAHhSIHQv////8PgyIKIAIpAyAgA3wgCYUiCUIgiCIMfiINQv////8PgyAHQiCIIgcgCUL/////D4MiCX58IAogCX4iCUIgiHwiCkIghiAJQv////8Pg4QgDUIgiCAHIAx+fCAKQiCIfIUgBXwgCCALfIUhBQsgACACQRhqKQMAIAN9IAFB+IsBaikDACIHhSIIQv////8PgyIJIAIpAxAgA3wgAUHwiwFqKQMAIgqFIgtCIIgiDH4iDUL/////D4MgCEIgiCIIIAtC/////w+DIgt+fCAJIAt+IglCIIh8IgtCIIYgCUL/////D4OEIA1CIIggCCAMfnwgC0IgiHyFIAZ8QQApA4iMASIIQQApA4CMASIJfIUiCyACQQhqKQMAIAN9IAiFIghC/////w+DIgwgAikDACADfCAJhSIJQiCIIg1+IgZC/////w+DIAhCIIgiCCAJQv////8PgyIJfnwgDCAJfiIJQiCIfCIMQiCGIAlC/////w+DhCAGQiCIIAggDX58IAxCIIh8hSAFfCAHIAp8hSIFfCIHQiWIIAeFQvnz3fGZ8pmrFn4iB0IgiCAHhTcDACAAQgAgBUKHla+vmLbem55/fiAEIAN9Qs/W077Sx6vZQn58IAtC49zKlfzO8vWFf358IgNCJYggA4VC+fPd8ZnymasWfiIDQiCIIAOFfTcDCAuhDwMBfxR+An9BACEEIAJB+ABqKQMAIAN9QQApA/iMASIFhSIGQv////8PgyIHIAIpA3AgA3xBACkD8IwBIgiFIglCIIgiCn4iC0L/////D4MgBkIgiCIGIAlC/////w+DIgl+fCAHIAl+IgdCIIh8IglCIIYgB0L/////D4OEIAtCIIggBiAKfnwgCUIgiHyFIAJB2ABqKQMAIAN9QQApA9iMASIHhSIGQv////8PgyIJIAIpA1AgA3xBACkD0IwBIgqFIgtCIIgiDH4iDUL/////D4MgBkIgiCIGIAtC/////w+DIgt+fCAJIAt+IglCIIh8IgtCIIYgCUL/////D4OEIA1CIIggBiAMfnwgC0IgiHyFIAJBOGopAwAgA31BACkDuIwBIgmFIgZC/////w+DIgsgAikDMCADfEEAKQOwjAEiDIUiDUIgiCIOfiIPQv////8PgyAGQiCIIgYgDUL/////D4MiDX58IAsgDX4iC0IgiHwiDUIghiALQv////8Pg4QgD0IgiCAGIA5+fCANQiCIfIUgAkEYaikDACADfUEAKQOYjAEiC4UiBkL/////D4MiDSACKQMQIAN8QQApA5CMASIOhSIPQiCIIhB+IhFC/////w+DIAZCIIgiBiAPQv////8PgyIPfnwgDSAPfiINQiCIfCIPQiCGIA1C/////w+DhCARQiCIIAYgEH58IA9CIIh8hUEAKQOIjAEiDUEAKQOAjAEiD3yFfEEAKQOojAEiEEEAKQOgjAEiEXyFfEEAKQPIjAEiEkEAKQPAjAEiE3yFfEEAKQPojAEiFEEAKQPgjAEiFXyFIgZCJYggBoVC+fPd8ZnymasWfiIGQiCIIAaFIQYgAkHoAGopAwAgA30gFIUiFEL/////D4MiFiACKQNgIAN8IBWFIhVCIIgiF34iGEL/////D4MgFEIgiCIUIBVC/////w+DIhV+fCAWIBV+IhVCIIh8IhZCIIYgFUL/////D4OEIBhCIIggFCAXfnwgFkIgiHyFIAJByABqKQMAIAN9IBKFIhJC/////w+DIhQgAikDQCADfCAThSITQiCIIhV+IhZC/////w+DIBJCIIgiEiATQv////8PgyITfnwgFCATfiITQiCIfCIUQiCGIBNC/////w+DhCAWQiCIIBIgFX58IBRCIIh8hSACQShqKQMAIAN9IBCFIhBC/////w+DIhIgAikDICADfCARhSIRQiCIIhN+IhRC/////w+DIBBCIIgiECARQv////8PgyIRfnwgEiARfiIRQiCIfCISQiCGIBFC/////w+DhCAUQiCIIBAgE358IBJCIIh8hSACQQhqKQMAIAN9IA2FIg1C/////w+DIhAgAikDACADfCAPhSIPQiCIIhF+IhJC/////w+DIA1CIIgiDSAPQv////8PgyIPfnwgECAPfiIPQiCIfCIQQiCGIA9C/////w+DhCASQiCIIA0gEX58IBBCIIh8hSABrSIPQoeVr6+Ytt6bnn9+fCALIA58hXwgCSAMfIV8IAcgCnyFfCAFIAh8hSIFQiWIIAWFQvnz3fGZ8pmrFn4iBUIgiCAFhSEFAkAgAUGgAUgNACABQQV2QXxqIRkDQCACIARqIhpBG2opAwAgA30gBEGYjQFqKQMAIgeFIghC/////w+DIgkgGkETaikDACADfCAEQZCNAWopAwAiCoUiC0IgiCIMfiINQv////8PgyAIQiCIIgggC0L/////D4MiC358IAkgC34iCUIgiHwiC0IghiAJQv////8Pg4QgDUIgiCAIIAx+fCALQiCIfIUgBnwgBEGIjQFqKQMAIgggBEGAjQFqKQMAIgl8hSEGIBpBC2opAwAgA30gCIUiCEL/////D4MiCyAaQQNqKQMAIAN8IAmFIglCIIgiDH4iDUL/////D4MgCEIgiCIIIAlC/////w+DIgl+fCALIAl+IglCIIh8IgtCIIYgCUL/////D4OEIA1CIIggCCAMfnwgC0IgiHyFIAV8IAcgCnyFIQUgBEEgaiEEIBlBf2oiGQ0ACwsgACACQf8AaikDACADfCABQeiLAWopAwAiB4UiCEL/////D4MiCSACKQN3IAN9IAFB4IsBaikDACIKhSILQiCIIgx+Ig1C/////w+DIAhCIIgiCCALQv////8PgyILfnwgCSALfiIJQiCIfCILQiCGIAlC/////w+DhCANQiCIIAggDH58IAtCIIh8hSAGfCABQfiLAWopAwAiBiABQfCLAWopAwAiCHyFIgkgAkHvAGopAwAgA3wgBoUiBkL/////D4MiCyACKQNnIAN9IAiFIghCIIgiDH4iDUL/////D4MgBkIgiCIGIAhC/////w+DIgh+fCALIAh+IghCIIh8IgtCIIYgCEL/////D4OEIA1CIIggBiAMfnwgC0IgiHyFIAV8IAcgCnyFIgZ8IgVCJYggBYVC+fPd8ZnymasWfiIFQiCIIAWFNwMAIABCACAGQoeVr6+Ytt6bnn9+IA8gA31Cz9bTvtLHq9lCfnwgCULj3MqV/M7y9YV/fnwiA0IliCADhUL5893xmfKZqxZ+IgNCIIggA4V9NwMIC98FAgF+AX8CQAJAQQApA4AKIgBQRQ0AQYAIIQFCACEADAELAkBBACkDoI4BIABSDQBBACEBDAELQQAhAUEAQq+v79e895Kg/gAgAH03A/iLAUEAIABCxZbr+djShYIofDcD8IsBQQBCj/Hjja2P9JhOIAB9NwPoiwFBACAAQqus+MXV79HQfHw3A+CLAUEAQtOt1LKShbW0nn8gAH03A9iLAUEAIABCl5r0jvWWvO3JAHw3A9CLAUEAQsWDgv2v/8SxayAAfTcDyIsBQQAgAELqi7OdyOb09UN8NwPAiwFBAELIv/rLnJveueQAIAB9NwO4iwFBACAAQoqjgd/Ume2sMXw3A7CLAUEAQvm57738+MKnHSAAfTcDqIsBQQAgAEKo9dv7s5ynmj98NwOgiwFBAEK4sry3lNW31lggAH03A5iLAUEAIABC8cihuqm0w/zOAHw3A5CLAUEAQoihl9u445SXo38gAH03A4iL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AkHAAGogDGohC0GAjAEhAAJAAkACQCAHQQhJDQACQCAHQThqQQN2QQFqQQdxIg0NAAwCCyANQQN0IQ5BgIwBIQADQCALIAApAwA3AwAgC0EIaiELIABBCGohACANQX9qIg0NAAsgByAOayEHCyAHRQ0BAkACQCAHQQdxIg4NACAHIQ0MAQsgB0F4cSENA0AgCyAALQAAOgAAIAtBAWohCyAAQQFqIQAgDkF/aiIODQALCyAHQQhJDQELA0AgCyAAKQAANwAAIAtBCGohCyAAQQhqIQAgDUF4aiINDQALCyACIAIpAwggAikDQCIIfCADQQAoApyOAWoiACkDASACKQNIIgmFIgpCIIggCkL/////D4N+fDcDCCACIAIpAxggAikDUCIKfCAAKQMRIAIpA1giEIUiEUIgiCARQv////8Pg358NwMYIAIgECAKIAApAwmFIgpCIIggCkL/////D4N+IAIpAxB8fDcDECACIAkgCCAAQXlqKQMAhSIIQiCIIAhC/////w+DfiACKQMAfHw3AwAgACkDGSEIIAIpAyAhCSACIAIpAyggAikDYCIKfCAAKQMhIAIpA2giEIUiEUIgiCARQv////8Pg358NwMoIAIgECAJIAggCoUiCEIgiCAIQv////8Pg358fDcDICACIAYgAikDcCIIfCAAKQMxIAIpA3giBoUiCUIgiCAJQv////8Pg358NwM4IAIgBiAIIAApAymFIghCIIggCEL/////D4N+IAV8fDcDMAsgAiACIANBC2ogBEKHla+vmLbem55/fhADNwNAIAIgAiADQQAoApyOAWpBdWogBELP1tO+0ser2UJ+Qn+FEAM3A0gMAQsgBKchAAJAQQApA6COASIEUA0AAkAgAEEQSw0AIAJBwABqIABBgAggBBAEDAILAkAgAEGAAUsNACACQcAAaiAAQYAIIAQQBQwCCyACQcAAaiAAQYAIIAQQBgwBCwJAIABBEEsNACACQcAAaiAAIANCABAEDAELAkAgAEGAAUsNACACQcAAaiAAIANCABAFDAELIAJBwABqIAAgA0IAEAYLQQAgAikDcDcDuApBACACKQNgNwOoCkEAIAIpA1A3A5gKQQAgAkH4AGopAwA3A8AKQQAgAkHoAGopAwA3A7AKQQAgAkHYAGopAwA3A6AKQQAgAikDSCIEQjiGIARCgP4Dg0IohoQgBEKAgPwHg0IYhiAEQoCAgPgPg0IIhoSEIARCCIhCgICA+A+DIARCGIhCgID8B4OEIARCKIhCgP4DgyAEQjiIhISEIgQ3A4AKQQAgBDcDkApBACACKQNAIgRCOIYgBEKA/gODQiiGhCAEQoCA/AeDQhiGIARCgICA+A+DQgiGhIQgBEIIiEKAgID4D4MgBEIYiEKAgPwHg4QgBEIoiEKA/gODIARCOIiEhIQ3A4gKIAEkAAsGAEGAigELAgALC8wBAQBBgAgLxAG4/mw5I6RLvnwBgSz3Ia0c3tRt6YOQl9tyQKSkt7NnH8t55k7MwOV4glrQfcz/ciG4CEZ090MkjuA1kOaBOiZMPChSu5HDAMuI0GWLG1Muo3FkSJeiDflOOBnvRqnerNio+nY/45w0P/ncu8fHC08dilHgS820WTHIn37J2XhzZOrFrIM00+vDxYGg//oTY+sXDd1Rt/DaSdMWVSYp1GieKxa+WH1HofyP+LjRetAxzkXLOo+VFgQor9f7yrtLQH5AAgAA";
      var hash$5 = "b9ab74e2";
      var wasmJson$5 = {
        name: name$5,
        data: data$5,
        hash: hash$5
      };
      const mutex$3 = new Mutex();
      let wasmCache$3 = null;
      const seedBuffer = new Uint8Array(8);
      function validateSeed(seed) {
        if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
          return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
        }
        return null;
      }
      function writeSeed(arr, low, high) {
        const buffer = new DataView(arr);
        buffer.setUint32(0, low, true);
        buffer.setUint32(4, high, true);
      }
      function xxhash128(data2, seedLow = 0, seedHigh = 0) {
        if (validateSeed(seedLow)) {
          return Promise.reject(validateSeed(seedLow));
        }
        if (validateSeed(seedHigh)) {
          return Promise.reject(validateSeed(seedHigh));
        }
        if (wasmCache$3 === null) {
          return lockedCreate(mutex$3, wasmJson$5, 16).then((wasm) => {
            wasmCache$3 = wasm;
            writeSeed(seedBuffer.buffer, seedLow, seedHigh);
            wasmCache$3.writeMemory(seedBuffer);
            return wasmCache$3.calculate(data2);
          });
        }
        try {
          writeSeed(seedBuffer.buffer, seedLow, seedHigh);
          wasmCache$3.writeMemory(seedBuffer);
          const hash2 = wasmCache$3.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createXXHash128(seedLow = 0, seedHigh = 0) {
        if (validateSeed(seedLow)) {
          return Promise.reject(validateSeed(seedLow));
        }
        if (validateSeed(seedHigh)) {
          return Promise.reject(validateSeed(seedHigh));
        }
        return WASMInterface(wasmJson$5, 16).then((wasm) => {
          const instanceBuffer = new Uint8Array(8);
          writeSeed(instanceBuffer.buffer, seedLow, seedHigh);
          wasm.writeMemory(instanceBuffer);
          wasm.init();
          const obj = {
            init: () => {
              wasm.writeMemory(instanceBuffer);
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 512,
            digestSize: 16
          };
          return obj;
        });
      }
      var name$4 = "ripemd160";
      var data$4 = "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";
      var hash$4 = "6abbce74";
      var wasmJson$4 = {
        name: name$4,
        data: data$4,
        hash: hash$4
      };
      const mutex$2 = new Mutex();
      let wasmCache$2 = null;
      function ripemd160(data2) {
        if (wasmCache$2 === null) {
          return lockedCreate(mutex$2, wasmJson$4, 20).then((wasm) => {
            wasmCache$2 = wasm;
            return wasmCache$2.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$2.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createRIPEMD160() {
        return WASMInterface(wasmJson$4, 20).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 20
          };
          return obj;
        });
      }
      function calculateKeyBuffer(hasher, key) {
        const { blockSize } = hasher;
        const buf = getUInt8Buffer(key);
        if (buf.length > blockSize) {
          hasher.update(buf);
          const uintArr = hasher.digest("binary");
          hasher.init();
          return uintArr;
        }
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      }
      function calculateHmac(hasher, key) {
        hasher.init();
        const { blockSize } = hasher;
        const keyBuf = calculateKeyBuffer(hasher, key);
        const keyBuffer = new Uint8Array(blockSize);
        keyBuffer.set(keyBuf);
        const opad = new Uint8Array(blockSize);
        for (let i = 0; i < blockSize; i++) {
          const v2 = keyBuffer[i];
          opad[i] = v2 ^ 92;
          keyBuffer[i] = v2 ^ 54;
        }
        hasher.update(keyBuffer);
        const obj = {
          init: () => {
            hasher.init();
            hasher.update(keyBuffer);
            return obj;
          },
          update: (data2) => {
            hasher.update(data2);
            return obj;
          },
          digest: ((outputType) => {
            const uintArr = hasher.digest("binary");
            hasher.init();
            hasher.update(opad);
            hasher.update(uintArr);
            return hasher.digest(outputType);
          }),
          save: () => {
            throw new Error("save() not supported");
          },
          load: () => {
            throw new Error("load() not supported");
          },
          blockSize: hasher.blockSize,
          digestSize: hasher.digestSize
        };
        return obj;
      }
      function createHMAC(hash2, key) {
        if (!hash2 || !hash2.then) {
          throw new Error('Invalid hash function is provided! Usage: createHMAC(createMD5(), "key").');
        }
        return hash2.then((hasher) => calculateHmac(hasher, key));
      }
      function calculatePBKDF2(digest, salt, iterations, hashLength, outputType) {
        return __awaiter(this, void 0, void 0, function* () {
          const DK = new Uint8Array(hashLength);
          const block1 = new Uint8Array(salt.length + 4);
          const block1View = new DataView(block1.buffer);
          const saltBuffer = getUInt8Buffer(salt);
          const saltUIntBuffer = new Uint8Array(saltBuffer.buffer, saltBuffer.byteOffset, saltBuffer.length);
          block1.set(saltUIntBuffer);
          let destPos = 0;
          const hLen = digest.digestSize;
          const l2 = Math.ceil(hashLength / hLen);
          let T2 = null;
          let U2 = null;
          for (let i = 1; i <= l2; i++) {
            block1View.setUint32(salt.length, i);
            digest.init();
            digest.update(block1);
            T2 = digest.digest("binary");
            U2 = T2.slice();
            for (let j2 = 1; j2 < iterations; j2++) {
              digest.init();
              digest.update(U2);
              U2 = digest.digest("binary");
              for (let k2 = 0; k2 < hLen; k2++) {
                T2[k2] ^= U2[k2];
              }
            }
            DK.set(T2.subarray(0, hashLength - destPos), destPos);
            destPos += hLen;
          }
          if (outputType === "binary") {
            return DK;
          }
          const digestChars = new Uint8Array(hashLength * 2);
          return getDigestHex(digestChars, DK, hashLength);
        });
      }
      const validateOptions$2 = (options) => {
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (!options.hashFunction || !options.hashFunction.then) {
          throw new Error('Invalid hash function is provided! Usage: pbkdf2("password", "salt", 1000, 32, createSHA1()).');
        }
        if (!Number.isInteger(options.iterations) || options.iterations < 1) {
          throw new Error("Iterations should be a positive number");
        }
        if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
          throw new Error("Hash length should be a positive number");
        }
        if (options.outputType === void 0) {
          options.outputType = "hex";
        }
        if (!["hex", "binary"].includes(options.outputType)) {
          throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary']`);
        }
      };
      function pbkdf2(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions$2(options);
          const hmac = yield createHMAC(options.hashFunction, options.password);
          return calculatePBKDF2(hmac, options.salt, options.iterations, options.hashLength, options.outputType);
        });
      }
      var name$3 = "scrypt";
      var data$3 = "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cyICajYCOCAAIAAoAjwgAiAKakESdyAGc2o2AjwLvxIDFX8Bfg5/AkAgAkUNACAAQQd0IgNBQGoiBEEAKAKACCIFIAMgAmwiBmogAyABbGoiByADaiIIaiEJIAAgAkEHdCIKIAFBB3RqIgtsIQwgACALQYABamwhDSAAQQV0IgtBASALQQFLGyILQWBxIQ4gC0EBcSEPIAdBeGohECAHQXBqIREgB0FoaiESIAdBYGohEyAHQVhqIRQgB0FQaiEVIAdBSGohFiAHQUBqIRcgAa1Cf3whGCAEIAdqIRkgByAAQQh0IhpqIRsgACAKQYABamwhHCALQQRJIR1BACEeQQAhHwNAQQAoAoAIIiAgAyAfbGohIQJAIABFDQBBACEiAkAgHQ0AICAgHmohI0EAIQtBACEiA0AgByALaiIEICMgC2oiJCgCADYCACAEQQRqICRBBGooAgA2AgAgBEEIaiAkQQhqKAIANgIAIARBDGogJEEMaigCADYCACALQRBqIQsgDiAiQQRqIiJHDQALCyAPRQ0AIAcgIkECdCILaiAhIAtqKAIANgIACwJAIAFFDQBBACElIBwhIyAGISYDQCAFISQgACEiAkACQCAADQAgGyAXKQMANwMAIBsgFikDADcDCCAbIBUpAwA3AxAgGyAUKQMANwMYIBsgEykDADcDICAbIBIpAwA3AyggGyARKQMANwMwIBsgECkDADcDOAwBCwNAICQgJmoiCyAkIAxqIgQpAwA3AwAgC0EIaiAEQQhqKQMANwMAIAtBEGogBEEQaikDADcDACALQRhqIARBGGopAwA3AwAgC0EgaiAEQSBqKQMANwMAIAtBKGogBEEoaikDADcDACALQTBqIARBMGopAwA3AwAgC0E4aiAEQThqKQMANwMAIAtBwABqIARBwABqKQMANwMAIAtByABqIARByABqKQMANwMAIAtB0ABqIARB0ABqKQMANwMAIAtB2ABqIARB2ABqKQMANwMAIAtB4ABqIARB4ABqKQMANwMAIAtB6ABqIARB6ABqKQMANwMAIAtB8ABqIARB8ABqKQMANwMAIAtB+ABqIARB+ABqKQMANwMAICRBgAFqISQgIkF/aiIiDQALIAcgCCAbIAAQAiAFISQgACEiA0AgJCAjaiILICQgDWoiBCkDADcDACALQQhqIARBCGopAwA3AwAgC0EQaiAEQRBqKQMANwMAIAtBGGogBEEYaikDADcDACALQSBqIARBIGopAwA3AwAgC0EoaiAEQShqKQMANwMAIAtBMGogBEEwaikDADcDACALQThqIARBOGopAwA3AwAgC0HAAGogBEHAAGopAwA3AwAgC0HIAGogBEHIAGopAwA3AwAgC0HQAGogBEHQAGopAwA3AwAgC0HYAGogBEHYAGopAwA3AwAgC0HgAGogBEHgAGopAwA3AwAgC0HoAGogBEHoAGopAwA3AwAgC0HwAGogBEHwAGopAwA3AwAgC0H4AGogBEH4AGopAwA3AwAgJEGAAWohJCAiQX9qIiINAAsLIAggByAbIAAQAiAjIBpqISMgJiAaaiEmICVBAmoiJSABSQ0AC0EAISUDQAJAAkAgAA0AIBsgFykDADcDACAbIBYpAwA3AwggGyAVKQMANwMQIBsgFCkDADcDGCAbIBMpAwA3AyAgGyASKQMANwMoIBsgESkDADcDMCAbIBApAwA3AzgMAQsgACAKIBkpAgAgGIOnQQd0amwhJiAFISQgACEiA0AgJCAMaiILIAspAwAgJCAmaiIEKQMAhTcDACALQQhqIiMgIykDACAEQQhqKQMAhTcDACALQRBqIiMgIykDACAEQRBqKQMAhTcDACALQRhqIiMgIykDACAEQRhqKQMAhTcDACALQSBqIiMgIykDACAEQSBqKQMAhTcDACALQShqIiMgIykDACAEQShqKQMAhTcDACALQTBqIiMgIykDACAEQTBqKQMAhTcDACALQThqIiMgIykDACAEQThqKQMAhTcDACALQcAAaiIjICMpAwAgBEHAAGopAwCFNwMAIAtByABqIiMgIykDACAEQcgAaikDAIU3AwAgC0HQAGoiIyAjKQMAIARB0ABqKQMAhTcDACALQdgAaiIjICMpAwAgBEHYAGopAwCFNwMAIAtB4ABqIiMgIykDACAEQeAAaikDAIU3AwAgC0HoAGoiIyAjKQMAIARB6ABqKQMAhTcDACALQfAAaiIjICMpAwAgBEHwAGopAwCFNwMAIAtB+ABqIgsgCykDACAEQfgAaikDAIU3AwAgJEGAAWohJCAiQX9qIiINAAsgByAIIBsgABACIAAgCiAJKQIAIBiDp0EHdGpsISYgBSEkIAAhIgNAICQgDWoiCyALKQMAICQgJmoiBCkDAIU3AwAgC0EIaiIjICMpAwAgBEEIaikDAIU3AwAgC0EQaiIjICMpAwAgBEEQaikDAIU3AwAgC0EYaiIjICMpAwAgBEEYaikDAIU3AwAgC0EgaiIjICMpAwAgBEEgaikDAIU3AwAgC0EoaiIjICMpAwAgBEEoaikDAIU3AwAgC0EwaiIjICMpAwAgBEEwaikDAIU3AwAgC0E4aiIjICMpAwAgBEE4aikDAIU3AwAgC0HAAGoiIyAjKQMAIARBwABqKQMAhTcDACALQcgAaiIjICMpAwAgBEHIAGopAwCFNwMAIAtB0ABqIiMgIykDACAEQdAAaikDAIU3AwAgC0HYAGoiIyAjKQMAIARB2ABqKQMAhTcDACALQeAAaiIjICMpAwAgBEHgAGopAwCFNwMAIAtB6ABqIiMgIykDACAEQegAaikDAIU3AwAgC0HwAGoiIyAjKQMAIARB8ABqKQMAhTcDACALQfgAaiILIAspAwAgBEH4AGopAwCFNwMAICRBgAFqISQgIkF/aiIiDQALCyAIIAcgGyAAEAIgJUECaiIlIAFJDQALCwJAIABFDQBBACEiAkAgHQ0AICAgHmohI0EAIQtBACEiA0AgIyALaiIEIAcgC2oiJCgCADYCACAEQQRqICRBBGooAgA2AgAgBEEIaiAkQQhqKAIANgIAIARBDGogJEEMaigCADYCACALQRBqIQsgDiAiQQRqIiJHDQALCyAPRQ0AICEgIkECdCILaiAHIAtqKAIANgIACyAeIANqIR4gH0EBaiIfIAJHDQALCws=";
      var hash$3 = "b32721f8";
      var wasmJson$3 = {
        name: name$3,
        data: data$3,
        hash: hash$3
      };
      function scryptInternal(options) {
        return __awaiter(this, void 0, void 0, function* () {
          const { costFactor, blockSize, parallelism, hashLength } = options;
          const SHA256Hasher = createSHA256();
          const blockData = yield pbkdf2({
            password: options.password,
            salt: options.salt,
            iterations: 1,
            hashLength: 128 * blockSize * parallelism,
            hashFunction: SHA256Hasher,
            outputType: "binary"
          });
          const scryptInterface = yield WASMInterface(wasmJson$3, 0);
          const VSize = 128 * blockSize * costFactor;
          const XYSize = 256 * blockSize;
          scryptInterface.setMemorySize(blockData.length + VSize + XYSize);
          scryptInterface.writeMemory(blockData, 0);
          scryptInterface.getExports().scrypt(blockSize, costFactor, parallelism);
          const expensiveSalt = scryptInterface.getMemory().subarray(0, 128 * blockSize * parallelism);
          const outputData = yield pbkdf2({
            password: options.password,
            salt: expensiveSalt,
            iterations: 1,
            hashLength,
            hashFunction: SHA256Hasher,
            outputType: "binary"
          });
          if (options.outputType === "hex") {
            const digestChars = new Uint8Array(hashLength * 2);
            return getDigestHex(digestChars, outputData, hashLength);
          }
          return outputData;
        });
      }
      const isPowerOfTwo = (v2) => v2 && !(v2 & v2 - 1);
      const validateOptions$1 = (options) => {
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (!Number.isInteger(options.blockSize) || options.blockSize < 1) {
          throw new Error("Block size should be a positive number");
        }
        if (!Number.isInteger(options.costFactor) || options.costFactor < 2 || !isPowerOfTwo(options.costFactor)) {
          throw new Error("Cost factor should be a power of 2, greater than 1");
        }
        if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
          throw new Error("Parallelism should be a positive number");
        }
        if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
          throw new Error("Hash length should be a positive number.");
        }
        if (options.outputType === void 0) {
          options.outputType = "hex";
        }
        if (!["hex", "binary"].includes(options.outputType)) {
          throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary']`);
        }
      };
      function scrypt(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions$1(options);
          return scryptInternal(options);
        });
      }
      var name$2 = "bcrypt";
      var data$2 = "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";
      var hash$2 = "8bd8822d";
      var wasmJson$2 = {
        name: name$2,
        data: data$2,
        hash: hash$2
      };
      function bcryptInternal(options) {
        return __awaiter(this, void 0, void 0, function* () {
          const { costFactor, password, salt } = options;
          const bcryptInterface = yield WASMInterface(wasmJson$2, 0);
          bcryptInterface.writeMemory(getUInt8Buffer(salt), 0);
          const passwordBuffer = getUInt8Buffer(password);
          bcryptInterface.writeMemory(passwordBuffer, 16);
          const shouldEncode = options.outputType === "encoded" ? 1 : 0;
          bcryptInterface.getExports().bcrypt(passwordBuffer.length, costFactor, shouldEncode);
          const memory = bcryptInterface.getMemory();
          if (options.outputType === "encoded") {
            return intArrayToString(memory, 60);
          }
          if (options.outputType === "hex") {
            const digestChars = new Uint8Array(24 * 2);
            return getDigestHex(digestChars, memory, 24);
          }
          return memory.slice(0, 24);
        });
      }
      const validateOptions = (options) => {
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (!Number.isInteger(options.costFactor) || options.costFactor < 4 || options.costFactor > 31) {
          throw new Error("Cost factor should be a number between 4 and 31");
        }
        options.password = getUInt8Buffer(options.password);
        if (options.password.length < 1) {
          throw new Error("Password should be at least 1 byte long");
        }
        if (options.password.length > 72) {
          throw new Error("Password should be at most 72 bytes long");
        }
        options.salt = getUInt8Buffer(options.salt);
        if (options.salt.length !== 16) {
          throw new Error("Salt should be 16 bytes long");
        }
        if (options.outputType === void 0) {
          options.outputType = "encoded";
        }
        if (!["hex", "binary", "encoded"].includes(options.outputType)) {
          throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`);
        }
      };
      function bcrypt(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateOptions(options);
          return bcryptInternal(options);
        });
      }
      const validateHashCharacters = (hash2) => {
        if (!/^\$2[axyb]\$[0-3][0-9]\$[./A-Za-z0-9]{53}$/.test(hash2)) {
          return false;
        }
        if (hash2[4] === "0" && Number(hash2[5]) < 4) {
          return false;
        }
        if (hash2[4] === "3" && Number(hash2[5]) > 1) {
          return false;
        }
        return true;
      };
      const validateVerifyOptions = (options) => {
        if (!options || typeof options !== "object") {
          throw new Error("Invalid options parameter. It requires an object.");
        }
        if (options.hash === void 0 || typeof options.hash !== "string") {
          throw new Error("Hash should be specified");
        }
        if (options.hash.length !== 60) {
          throw new Error("Hash should be 60 bytes long");
        }
        if (!validateHashCharacters(options.hash)) {
          throw new Error("Invalid hash");
        }
        options.password = getUInt8Buffer(options.password);
        if (options.password.length < 1) {
          throw new Error("Password should be at least 1 byte long");
        }
        if (options.password.length > 72) {
          throw new Error("Password should be at most 72 bytes long");
        }
      };
      function bcryptVerify(options) {
        return __awaiter(this, void 0, void 0, function* () {
          validateVerifyOptions(options);
          const { hash: hash2, password } = options;
          const bcryptInterface = yield WASMInterface(wasmJson$2, 0);
          bcryptInterface.writeMemory(getUInt8Buffer(hash2), 0);
          const passwordBuffer = getUInt8Buffer(password);
          bcryptInterface.writeMemory(passwordBuffer, 60);
          return !!bcryptInterface.getExports().bcrypt_verify(passwordBuffer.length);
        });
      }
      var name$1 = "whirlpool";
      var data$1 = "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";
      var hash$1 = "8d8f6035";
      var wasmJson$1 = {
        name: name$1,
        data: data$1,
        hash: hash$1
      };
      const mutex$1 = new Mutex();
      let wasmCache$1 = null;
      function whirlpool(data2) {
        if (wasmCache$1 === null) {
          return lockedCreate(mutex$1, wasmJson$1, 64).then((wasm) => {
            wasmCache$1 = wasm;
            return wasmCache$1.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache$1.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createWhirlpool() {
        return WASMInterface(wasmJson$1, 64).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 64
          };
          return obj;
        });
      }
      var name = "sm3";
      var data = "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";
      var hash = "b6fb4b8e";
      var wasmJson = {
        name,
        data,
        hash
      };
      const mutex = new Mutex();
      let wasmCache = null;
      function sm3(data2) {
        if (wasmCache === null) {
          return lockedCreate(mutex, wasmJson, 32).then((wasm) => {
            wasmCache = wasm;
            return wasmCache.calculate(data2);
          });
        }
        try {
          const hash2 = wasmCache.calculate(data2);
          return Promise.resolve(hash2);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      function createSM3() {
        return WASMInterface(wasmJson, 32).then((wasm) => {
          wasm.init();
          const obj = {
            init: () => {
              wasm.init();
              return obj;
            },
            update: (data2) => {
              wasm.update(data2);
              return obj;
            },
            // biome-ignore lint/suspicious/noExplicitAny: Conflict with IHasher type
            digest: (outputType) => wasm.digest(outputType),
            save: () => wasm.save(),
            load: (data2) => {
              wasm.load(data2);
              return obj;
            },
            blockSize: 64,
            digestSize: 32
          };
          return obj;
        });
      }
      exports2.adler32 = adler32;
      exports2.argon2Verify = argon2Verify;
      exports2.argon2d = argon2d;
      exports2.argon2i = argon2i;
      exports2.argon2id = argon2id2;
      exports2.bcrypt = bcrypt;
      exports2.bcryptVerify = bcryptVerify;
      exports2.blake2b = blake2b;
      exports2.blake2s = blake2s;
      exports2.blake3 = blake3;
      exports2.crc32 = crc32;
      exports2.crc64 = crc64;
      exports2.createAdler32 = createAdler32;
      exports2.createBLAKE2b = createBLAKE2b;
      exports2.createBLAKE2s = createBLAKE2s;
      exports2.createBLAKE3 = createBLAKE3;
      exports2.createCRC32 = createCRC32;
      exports2.createCRC64 = createCRC64;
      exports2.createHMAC = createHMAC;
      exports2.createKeccak = createKeccak;
      exports2.createMD4 = createMD4;
      exports2.createMD5 = createMD5;
      exports2.createRIPEMD160 = createRIPEMD160;
      exports2.createSHA1 = createSHA1;
      exports2.createSHA224 = createSHA224;
      exports2.createSHA256 = createSHA256;
      exports2.createSHA3 = createSHA3;
      exports2.createSHA384 = createSHA384;
      exports2.createSHA512 = createSHA512;
      exports2.createSM3 = createSM3;
      exports2.createWhirlpool = createWhirlpool;
      exports2.createXXHash128 = createXXHash128;
      exports2.createXXHash3 = createXXHash3;
      exports2.createXXHash32 = createXXHash32;
      exports2.createXXHash64 = createXXHash64;
      exports2.keccak = keccak;
      exports2.md4 = md4;
      exports2.md5 = md5;
      exports2.pbkdf2 = pbkdf2;
      exports2.ripemd160 = ripemd160;
      exports2.scrypt = scrypt;
      exports2.sha1 = sha1;
      exports2.sha224 = sha2242;
      exports2.sha256 = sha2562;
      exports2.sha3 = sha3;
      exports2.sha384 = sha384;
      exports2.sha512 = sha5122;
      exports2.sm3 = sm3;
      exports2.whirlpool = whirlpool;
      exports2.xxhash128 = xxhash128;
      exports2.xxhash3 = xxhash3;
      exports2.xxhash32 = xxhash32;
      exports2.xxhash64 = xxhash64;
    }));
  }
});

// src/server/main.ts
import { spawn } from "node:child_process";
import { appendFile, mkdir as mkdir2, rm as rm2 } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join as join4 } from "node:path";
import { fileURLToPath } from "node:url";
import { request as request3 } from "node:http";

// src/core/networks.ts
var IC_HOST = "https://icp-api.io";
var SNEED_SMS = {
  staging: "v33jy-4qaaa-aaaad-absna-cai",
  production: "zelpl-7yaaa-aaaad-abtcq-cai"
};
var IWEP_CONDUIT_CANISTER = "ej6iq-qiaaa-aaaap-quzvq-cai";
var IWEP_ACCOUNTS_CANISTER = "e4zz5-raaaa-aaaap-quzwa-cai";
var II_AUTHORIZE_URL = "https://id.ai/authorize";
var HELPER_PORT = 47227;
var CODIE_SUBJECT_PREFIX = "[Codie] ";
function isLocalHost(host) {
  try {
    const h2 = new URL(host).hostname;
    return h2 === "localhost" || h2 === "127.0.0.1" || h2 === "::1" || h2 === "[::1]" || h2.endsWith(".localhost");
  } catch {
    return false;
  }
}

// src/server/guard.ts
import { timingSafeEqual, randomBytes } from "node:crypto";
function newToken() {
  return randomBytes(32).toString("base64url");
}
function allowedHosts(port2) {
  return [`localhost:${port2}`, `127.0.0.1:${port2}`];
}
function hostAllowed(host, port2) {
  if (!host) return false;
  return allowedHosts(port2).includes(host.toLowerCase());
}
function originAllowed(origin, port2) {
  if (origin === void 0) return true;
  return allowedHosts(port2).some((h2) => origin.toLowerCase() === `http://${h2}`);
}
function tokenMatches(given, expected) {
  if (typeof given !== "string") return false;
  const a2 = Buffer.from(given);
  const b2 = Buffer.from(expected);
  return a2.length === b2.length && timingSafeEqual(a2, b2);
}
function hostPortMatches(host, port2) {
  if (!host) return false;
  const i = host.lastIndexOf(":");
  return i > 0 && host.slice(i + 1) === String(port2);
}
function isPrivateAddr(addr) {
  if (!addr) return false;
  let a2 = addr.trim().toLowerCase();
  if (a2.startsWith("::ffff:")) a2 = a2.slice(7);
  if (a2 === "::1" || a2 === "127.0.0.1" || a2.startsWith("127.")) return true;
  if (a2.startsWith("fc") || a2.startsWith("fd") || a2.startsWith("fe80:")) return true;
  const m2 = /^(\d+)\.(\d+)\.(\d+)\.\d+$/.exec(a2);
  if (!m2) return false;
  const o1 = Number(m2[1]), o2 = Number(m2[2]);
  return o1 === 10 || o1 === 192 && o2 === 168 || o1 === 172 && o2 >= 16 && o2 <= 31 || o1 === 169 && o2 === 254;
}
function checkToolRequest(host, origin, port2, lanOn, remoteAddr) {
  const hostOk = lanOn ? hostAllowed(host, port2) || hostPortMatches(host, port2) : hostAllowed(host, port2);
  if (!hostOk) return { ok: false, status: 421, reason: "bad host" };
  if (lanOn && !isPrivateAddr(remoteAddr)) return { ok: false, status: 403, reason: "non-local client" };
  if (!originAllowed(origin, port2)) return { ok: false, status: 403, reason: "bad origin" };
  return { ok: true };
}
function checkRequest(req, expectedToken, port2) {
  if (!hostAllowed(req.host, port2)) return { ok: false, status: 421, reason: "bad host" };
  if (!req.isApi) return { ok: true };
  if (!originAllowed(req.origin, port2)) return { ok: false, status: 403, reason: "bad origin" };
  if (req.fetchSite && req.fetchSite !== "same-origin" && req.fetchSite !== "none")
    return { ok: false, status: 403, reason: "cross-site" };
  if (!tokenMatches(req.token, expectedToken)) return { ok: false, status: 401, reason: "bad token" };
  return { ok: true };
}

// src/server/http.ts
import { createServer } from "node:http";
import { readFile as readFile2 } from "node:fs/promises";
import { extname, join as join3, normalize, sep } from "node:path";

// src/server/mcp.ts
async function handleMcp(svc, identityId, version, msg) {
  const id = msg.id ?? null;
  const ok = (result) => ({ jsonrpc: "2.0", id, result });
  const fail = (code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });
  const method = msg.method ?? "";
  if (method.startsWith("notifications/")) return void 0;
  const writes = svc.mcpWritesAllowed(identityId);
  switch (method) {
    case "initialize": {
      const pv = typeof msg.params?.protocolVersion === "string" ? msg.params.protocolVersion : "2025-06-18";
      return ok({ protocolVersion: pv, capabilities: { tools: { listChanged: false } }, serverInfo: { name: "waifu-ai", version } });
    }
    case "ping":
      return ok({});
    case "tools/list":
      return ok({ tools: svc.mcpTools(writes) });
    case "tools/call": {
      const p2 = msg.params ?? {};
      const name = typeof p2.name === "string" ? p2.name : "";
      const args2 = p2.arguments && typeof p2.arguments === "object" && !Array.isArray(p2.arguments) ? p2.arguments : {};
      if (!name) return fail(-32602, "tools/call requires a tool name");
      const r2 = await svc.mcpInvoke(identityId, name, args2, writes);
      return ok({ content: [{ type: "text", text: r2.text }], isError: !!r2.isError });
    }
    default:
      return fail(-32601, `Method not found: ${method}`);
  }
}

// node_modules/@icp-sdk/core/lib/esm/principal/utils/base32.js
var alphabet = "abcdefghijklmnopqrstuvwxyz234567";
var lookupTable = /* @__PURE__ */ Object.create(null);
for (let i = 0; i < alphabet.length; i++) {
  lookupTable[alphabet[i]] = i;
}
lookupTable["0"] = lookupTable.o;
lookupTable["1"] = lookupTable.i;
function base32Encode(input) {
  let skip = 0;
  let bits = 0;
  let output = "";
  function encodeByte(byte) {
    if (skip < 0) {
      bits |= byte >> -skip;
    } else {
      bits = byte << skip & 248;
    }
    if (skip > 3) {
      skip -= 8;
      return 1;
    }
    if (skip < 4) {
      output += alphabet[bits >> 3];
      skip += 5;
    }
    return 0;
  }
  for (let i = 0; i < input.length; ) {
    i += encodeByte(input[i]);
  }
  return output + (skip < 0 ? alphabet[bits >> 3] : "");
}
function base32Decode(input) {
  let skip = 0;
  let byte = 0;
  const output = new Uint8Array(input.length * 4 / 3 | 0);
  let o = 0;
  function decodeChar(char) {
    let val = lookupTable[char.toLowerCase()];
    if (val === void 0) {
      throw new Error(`Invalid character: ${JSON.stringify(char)}`);
    }
    val <<= 3;
    byte |= val >>> skip;
    skip += 5;
    if (skip >= 8) {
      output[o++] = byte;
      skip -= 8;
      if (skip > 0) {
        byte = val << 5 - skip & 255;
      } else {
        byte = 0;
      }
    }
  }
  for (const c2 of input) {
    decodeChar(c2);
  }
  return output.slice(0, o);
}

// node_modules/@icp-sdk/core/lib/esm/principal/utils/getCrc.js
var lookUpTable = new Uint32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function getCrc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    const byte = buf[i];
    const t = (byte ^ crc) & 255;
    crc = lookUpTable[t] ^ crc >>> 8;
  }
  return (crc ^ -1) >>> 0;
}

// node_modules/@noble/hashes/_u64.js
var U32_MASK64 = /* @__PURE__ */ (() => BigInt(2 ** 32 - 1))();
var _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    const { h: h2, l: l2 } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h2, l2];
  }
  return [Ah, Al];
}
var fromNumH = (n) => n / 2 ** 32 | 0;
var fromNumL = (n) => n >>> 0;
function setU64FromNum(view, byteOffset, n, isLE) {
  const h2 = fromNumH(n);
  const l2 = fromNumL(n);
  view.setUint32(byteOffset, isLE ? l2 : h2, isLE);
  view.setUint32(byteOffset + 4, isLE ? h2 : l2, isLE);
}
var shrSH = (h2, _l, s) => h2 >>> s;
var shrSL = (h2, l2, s) => h2 << 32 - s | l2 >>> s;
var rotrSH = (h2, l2, s) => h2 >>> s | l2 << 32 - s;
var rotrSL = (h2, l2, s) => h2 << 32 - s | l2 >>> s;
var rotrBH = (h2, l2, s) => h2 << 64 - s | l2 >>> s - 32;
var rotrBL = (h2, l2, s) => h2 >>> s - 32 | l2 << 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;

// node_modules/@noble/hashes/utils.js
function isBytes(a2) {
  return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a2 && a2.BYTES_PER_ELEMENT === 1;
}
var atitle = (title) => title ? `"${title}" ` : "";
function anumber(n, title = "") {
  if (typeof n !== "number")
    throw new TypeError(atitle(title) + "expected number, got " + typeof n);
  if (!Number.isSafeInteger(n) || n < 0)
    throw new RangeError(atitle(title) + "expected integer >= 0, got " + n);
  return n;
}
function abytes(value, length, title = "") {
  if (isBytes(value) && (length === void 0 || value.length === length))
    return value;
  if (length !== void 0)
    anumber(length, "length");
  const bytes = isBytes(value);
  const ofLen = length !== void 0 ? ` of length ${length}` : "";
  const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
  const message = atitle(title) + "expected Uint8Array" + ofLen + ", got " + got;
  if (!bytes)
    throw new TypeError(message);
  throw new RangeError(message);
}
var aobject = (value, label) => {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError((label === "object" ? "" : `"${label}" `) + "expected object, got type=" + typeof value);
};
var aopts = (value, label) => {
  aobject(value, label);
  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null)
    throw new TypeError(`"${label}" expected plain object`);
  if (Object.hasOwn(value, "__proto__"))
    throw new TypeError(`"${label}.__proto__" is not allowed`);
};
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("hash was destroyed");
  if (checkFinished && instance.finished)
    throw new Error("digest() was already called");
}
function aoutput(out, instance) {
  abytes(out, void 0, "output");
  const min = instance.outputLen;
  if (!(out.length >= min)) {
    throw new RangeError('"output" expected length >= ' + min);
  }
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
var hasHexBuiltin = /* @__PURE__ */ (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += hexes[bytes[i]];
  }
  return hex;
}
function asciiToBase16(ch) {
  return ch >= 48 && ch <= 57 ? ch - 48 : ch >= 65 && ch <= 70 ? ch - (65 - 10) : ch >= 97 && ch <= 102 ? ch - (97 - 10) : void 0;
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new TypeError("hex string expected, got " + typeof hex);
  if (hasHexBuiltin) {
    try {
      return Uint8Array.fromHex(hex);
    } catch (error) {
      if (error instanceof SyntaxError)
        throw new RangeError(error.message);
      throw error;
    }
  }
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new RangeError("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function utf8ToBytes(str2) {
  if (typeof str2 !== "string")
    throw new TypeError("string expected");
  const encoded = new TextEncoder().encode(str2);
  try {
    return new Uint8Array(encoded);
  } finally {
    clean(encoded);
  }
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a2 = arrays[i];
    abytes(a2);
    sum += a2.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a2 = arrays[i];
    res.set(a2, pad);
    pad += a2.length;
  }
  return res;
}
function checkOpts(defaults, opts, title = "opts") {
  aopts(defaults, "defaults");
  if (opts !== void 0)
    aopts(opts, title);
  const merged = Object.assign(/* @__PURE__ */ Object.create(null), defaults, opts);
  return merged;
}
function createHasher(hashCons, info = {}) {
  if (typeof hashCons !== "function")
    throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
  info = checkOpts({}, info, "info");
  const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
  const tmp = hashCons(void 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.canXOF = tmp.canXOF;
  hashC.create = (opts) => hashCons(opts);
  Object.assign(hashC, info);
  return Object.freeze(hashC);
}
function randomBytes2(bytesLength = 32) {
  anumber(bytesLength, "bytesLength");
  const cr = typeof globalThis === "object" ? globalThis.crypto : null;
  if (typeof cr?.getRandomValues !== "function")
    throw new Error("crypto.getRandomValues must be defined");
  if (bytesLength > 65536)
    throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
  return cr.getRandomValues(new Uint8Array(bytesLength));
}
var oidNist = (suffix) => ({
  // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
  // Larger suffix values would need base-128 OID encoding and a different length byte.
  oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
});

// node_modules/@noble/hashes/_md.js
function Chi(a2, b2, c2) {
  return a2 & b2 ^ ~a2 & c2;
}
function Maj(a2, b2, c2) {
  return a2 & b2 ^ a2 & c2 ^ b2 & c2;
}
var HashMD = class {
  blockLen;
  outputLen;
  canXOF = false;
  padOffset;
  isLE;
  // For partial updates less than block size
  buffer;
  view;
  finished = false;
  length = 0;
  pos = 0;
  destroyed = false;
  constructor(blockLen, outputLen, padOffset, isLE) {
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    abytes(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    let processed = false;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        processed = true;
        continue;
      }
      buffer.set(pos === 0 && take === len ? data : data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
        processed = true;
      }
    }
    this.length += data.length;
    if (processed)
      this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    buffer.fill(0, pos);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      buffer.fill(0);
    }
    setU64FromNum(view, blockLen - 8, this.length * 8, isLE);
    this.process(view, 0);
    this.roundClean();
    const oview = out === buffer ? view : createView(out);
    const len = this.outputLen;
    const outLen = len / 4;
    const state = this.get();
    if (len % 4 || outLen > state.length)
      throw new Error("invalid outputLen");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneIntoMeta(to) {
    const { buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (pos)
      to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
};
var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA224_IV = /* @__PURE__ */ Uint32Array.from([
  3238371032,
  914150663,
  812702999,
  4144912697,
  4290775857,
  1750603025,
  1694076839,
  3204075428
]);
var SHA512_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]);

// node_modules/@noble/hashes/sha2.js
var SHA256_K = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA2_32B = class extends HashMD {
  // We cannot use array here since array allows indexing by variable
  // which means optimizer/compiler cannot use registers.
  // Numeric initializers matter: starting the fields as `undefined` changes
  // V8's field representation and makes sha256 3x slower (measured).
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  E = 0;
  F = 0;
  G = 0;
  H = 0;
  constructor(outputLen, IV) {
    super(64, outputLen, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A, B: B2, C: C2, D, E: E2, F: F2, G: G2, H: H2 } = this;
    return [A, B2, C2, D, E2, F2, G2, H2];
  }
  // prettier-ignore
  set(A, B2, C2, D, E2, F2, G2, H2) {
    this.A = A | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D | 0;
    this.E = E2 | 0;
    this.F = F2 | 0;
    this.G = G2 | 0;
    this.H = H2 | 0;
  }
  _cloneInto(to) {
    (to ||= new this.constructor()).set(...this.get());
    return this._cloneIntoMeta(to);
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B: B2, C: C2, D, E: E2, F: F2, G: G2, H: H2 } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
      const T1 = H2 + sigma1 + Chi(E2, F2, G2) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B2, C2) | 0;
      H2 = G2;
      G2 = F2;
      F2 = E2;
      E2 = D + T1 | 0;
      D = C2;
      C2 = B2;
      B2 = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D = D + this.D | 0;
    E2 = E2 + this.E | 0;
    F2 = F2 + this.F | 0;
    G2 = G2 + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A, B2, C2, D, E2, F2, G2, H2);
  }
  roundClean() {
    clean(SHA256_W);
  }
  destroy() {
    this.destroyed = true;
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean(this.buffer);
  }
};
var _SHA256 = class extends SHA2_32B {
  constructor() {
    super(32, SHA256_IV);
  }
};
var _SHA224 = class extends SHA2_32B {
  constructor() {
    super(28, SHA224_IV);
  }
};
var K512 = /* @__PURE__ */ (() => split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
var SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
var SHA2_64B = class extends HashMD {
  // We cannot use array here since array allows indexing by variable
  // which means optimizer/compiler cannot use registers.
  // h -- high 32 bits, l -- low 32 bits
  // Numeric initializers matter: starting the fields as `undefined` changes
  // V8's field representation and slows hashing down (measured on sha256).
  Ah = 0;
  Al = 0;
  Bh = 0;
  Bl = 0;
  Ch = 0;
  Cl = 0;
  Dh = 0;
  Dl = 0;
  Eh = 0;
  El = 0;
  Fh = 0;
  Fl = 0;
  Gh = 0;
  Gl = 0;
  Hh = 0;
  Hl = 0;
  constructor(outputLen, IV) {
    super(128, outputLen, 16, false);
    this.Ah = IV[0] | 0;
    this.Al = IV[1] | 0;
    this.Bh = IV[2] | 0;
    this.Bl = IV[3] | 0;
    this.Ch = IV[4] | 0;
    this.Cl = IV[5] | 0;
    this.Dh = IV[6] | 0;
    this.Dl = IV[7] | 0;
    this.Eh = IV[8] | 0;
    this.El = IV[9] | 0;
    this.Fh = IV[10] | 0;
    this.Fl = IV[11] | 0;
    this.Gh = IV[12] | 0;
    this.Gl = IV[13] | 0;
    this.Hh = IV[14] | 0;
    this.Hl = IV[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  _cloneInto(to) {
    (to ||= new this.constructor()).set(...this.get());
    return this._cloneIntoMeta(to);
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
      const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
      const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
      const SUMl = add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
      const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
      const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = add3L(T1l, sigma0l, MAJl);
      Ah = add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    clean(SHA512_W_H, SHA512_W_L);
  }
  destroy() {
    this.destroyed = true;
    clean(this.buffer);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var _SHA512 = class extends SHA2_64B {
  constructor() {
    super(64, SHA512_IV);
  }
};
var sha256 = /* @__PURE__ */ createHasher(
  () => new _SHA256(),
  /* @__PURE__ */ oidNist(1)
);
var sha224 = /* @__PURE__ */ createHasher(
  () => new _SHA224(),
  /* @__PURE__ */ oidNist(4)
);
var sha512 = /* @__PURE__ */ createHasher(
  () => new _SHA512(),
  /* @__PURE__ */ oidNist(3)
);

// node_modules/@icp-sdk/core/lib/esm/principal/principal.js
var JSON_KEY_PRINCIPAL = "__principal__";
var SELF_AUTHENTICATING_SUFFIX = 2;
var ANONYMOUS_SUFFIX = 4;
var MANAGEMENT_CANISTER_PRINCIPAL_TEXT_STR = "aaaaa-aa";
var Principal = class _Principal {
  static anonymous() {
    return new this(new Uint8Array([ANONYMOUS_SUFFIX]));
  }
  /**
   * Utility method, returning the principal representing the management canister, decoded from the hex string `'aaaaa-aa'`
   * @returns {Principal} principal of the management canister
   */
  static managementCanister() {
    return this.fromText(MANAGEMENT_CANISTER_PRINCIPAL_TEXT_STR);
  }
  static selfAuthenticating(publicKey) {
    const sha = sha224(publicKey);
    return new this(new Uint8Array([...sha, SELF_AUTHENTICATING_SUFFIX]));
  }
  static from(other) {
    if (typeof other === "string") {
      return _Principal.fromText(other);
    }
    if (Object.getPrototypeOf(other) === Uint8Array.prototype) {
      return new _Principal(other);
    }
    if (_Principal.isPrincipal(other)) {
      return new _Principal(other._arr);
    }
    throw new Error(`Impossible to convert ${JSON.stringify(other)} to Principal.`);
  }
  static fromHex(hex) {
    return new this(hexToBytes(hex));
  }
  static fromText(text) {
    let maybePrincipal = text;
    if (text.includes(JSON_KEY_PRINCIPAL)) {
      const obj = JSON.parse(text);
      if (JSON_KEY_PRINCIPAL in obj) {
        maybePrincipal = obj[JSON_KEY_PRINCIPAL];
      }
    }
    const canisterIdNoDash = maybePrincipal.toLowerCase().replace(/-/g, "");
    let arr = base32Decode(canisterIdNoDash);
    arr = arr.slice(4, arr.length);
    const principal = new this(arr);
    if (principal.toText() !== maybePrincipal) {
      throw new Error(`Principal "${principal.toText()}" does not have a valid checksum (original value "${maybePrincipal}" may not be a valid Principal ID).`);
    }
    return principal;
  }
  static fromUint8Array(arr) {
    return new this(arr);
  }
  static isPrincipal(other) {
    return other instanceof _Principal || typeof other === "object" && other !== null && "_isPrincipal" in other && other["_isPrincipal"] === true && "_arr" in other && other["_arr"] instanceof Uint8Array;
  }
  constructor(_arr) {
    this._arr = _arr;
    this._isPrincipal = true;
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === ANONYMOUS_SUFFIX;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return bytesToHex(this._arr).toUpperCase();
  }
  toText() {
    const checksumArrayBuf = new ArrayBuffer(4);
    const view = new DataView(checksumArrayBuf);
    view.setUint32(0, getCrc32(this._arr));
    const checksum = new Uint8Array(checksumArrayBuf);
    const array = new Uint8Array([...checksum, ...this._arr]);
    const result = base32Encode(array);
    const matches = result.match(/.{1,5}/g);
    if (!matches) {
      throw new Error();
    }
    return matches.join("-");
  }
  toString() {
    return this.toText();
  }
  /**
   * Serializes to JSON
   * @returns {JsonnablePrincipal} a JSON object with a single key, {@link JSON_KEY_PRINCIPAL}, whose value is the principal as a string
   */
  toJSON() {
    return { [JSON_KEY_PRINCIPAL]: this.toText() };
  }
  /**
   * Utility method taking a Principal to compare against. Used for determining canister ranges in certificate verification
   * @param {Principal} other - a {@link Principal} to compare
   * @returns {'lt' | 'eq' | 'gt'} `'lt' | 'eq' | 'gt'` a string, representing less than, equal to, or greater than
   */
  compareTo(other) {
    for (let i = 0; i < Math.min(this._arr.length, other._arr.length); i++) {
      if (this._arr[i] < other._arr[i]) {
        return "lt";
      }
      if (this._arr[i] > other._arr[i]) {
        return "gt";
      }
    }
    if (this._arr.length < other._arr.length) {
      return "lt";
    }
    if (this._arr.length > other._arr.length) {
      return "gt";
    }
    return "eq";
  }
  /**
   * Utility method checking whether a provided Principal is less than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  ltEq(other) {
    const cmp = this.compareTo(other);
    return cmp == "lt" || cmp == "eq";
  }
  /**
   * Utility method checking whether a provided Principal is greater than or equal to the current one using the {@link Principal.compareTo} method
   * @param other a {@link Principal} to compare
   * @returns {boolean} boolean
   */
  gtEq(other) {
    const cmp = this.compareTo(other);
    return cmp == "gt" || cmp == "eq";
  }
};

// src/server/service.ts
import { join as join2 } from "node:path";

// node_modules/@dfinity/cbor/dist/cbor.mjs
var w = class extends Error {
  constructor(e) {
    super(e), this.name = "DecodingError";
  }
};
var L = 55799;
var R = /* @__PURE__ */ Symbol("CBOR_STOP_CODE");
var u = /* @__PURE__ */ ((t) => (t[t.False = 20] = "False", t[t.True = 21] = "True", t[t.Null = 22] = "Null", t[t.Undefined = 23] = "Undefined", t[t.Break = 31] = "Break", t))(u || {});
var c = /* @__PURE__ */ ((t) => (t[t.UnsignedInteger = 0] = "UnsignedInteger", t[t.NegativeInteger = 1] = "NegativeInteger", t[t.ByteString = 2] = "ByteString", t[t.TextString = 3] = "TextString", t[t.Array = 4] = "Array", t[t.Map = 5] = "Map", t[t.Tag = 6] = "Tag", t[t.Simple = 7] = "Simple", t))(c || {});
var Y = 23;
var G = 255;
var P = 65535;
var H = 4294967295;
var W = BigInt("0xffffffffffffffff");
var f = /* @__PURE__ */ ((t) => (t[t.Value = 23] = "Value", t[t.OneByte = 24] = "OneByte", t[t.TwoBytes = 25] = "TwoBytes", t[t.FourBytes = 26] = "FourBytes", t[t.EightBytes = 27] = "EightBytes", t[t.Indefinite = 31] = "Indefinite", t))(f || {});
var l = false;
function K(t) {
  return t == null;
}
function Z(t, e) {
  const n = new Uint8Array(e);
  return n.set(t), n;
}
var q = new TextDecoder();
function J(t) {
  return (t & 224) >> 5;
}
function Q(t) {
  return t & 31;
}
var S = new Uint8Array();
var U;
var d = 0;
function ut(t, e) {
  S = t, d = 0;
  const n = B(e);
  return e?.(n) ?? n;
}
function B(t) {
  const [e, n] = N();
  switch (e) {
    case c.UnsignedInteger:
      return h(n);
    case c.NegativeInteger:
      return M(n);
    case c.ByteString:
      return $(n);
    case c.TextString:
      return F(n);
    case c.Array:
      return p(n, t);
    case c.Map:
      return j(n, t);
    case c.Tag:
      return v(n, t);
    case c.Simple:
      return b(n);
  }
  throw new w(`Unsupported major type: ${e}`);
}
function N() {
  const t = S.at(d);
  if (K(t))
    throw new w("Provided CBOR data is empty");
  const e = J(t), n = Q(t);
  return d++, [e, n];
}
function p(t, e) {
  const n = h(t);
  if (n === 1 / 0) {
    const o = [];
    let i = B(e);
    for (; i !== R; )
      o.push(e?.(i) ?? i), i = B(e);
    return o;
  }
  const s = new Array(n);
  for (let o = 0; o < n; o++) {
    const i = B(e);
    s[o] = e?.(i) ?? i;
  }
  return s;
}
function b(t) {
  switch (t) {
    case u.False:
      return false;
    case u.True:
      return true;
    case u.Null:
      return null;
    case u.Undefined:
      return;
    case u.Break:
      return R;
  }
  throw new w(`Unrecognized simple type: ${t.toString(2)}`);
}
function j(t, e) {
  const n = h(t), s = {};
  if (n === 1 / 0) {
    let [o, i] = N();
    for (; o !== c.Simple && i !== u.Break; ) {
      const A = F(i), I = B(e);
      s[A] = e?.(I, A) ?? I, [o, i] = N();
    }
    return s;
  }
  for (let o = 0; o < n; o++) {
    const [i, A] = N();
    if (i !== c.TextString)
      throw new w("Map keys must be text strings");
    const I = F(A), D = B(e);
    s[I] = e?.(D, I) ?? D;
  }
  return s;
}
function h(t) {
  if (t <= f.Value)
    return t;
  switch (U = new DataView(S.buffer, S.byteOffset + d), t) {
    case f.OneByte:
      return d++, U.getUint8(0);
    case f.TwoBytes:
      return d += 2, U.getUint16(0, l);
    case f.FourBytes:
      return d += 4, U.getUint32(0, l);
    case f.EightBytes:
      return d += 8, U.getBigUint64(0, l);
    case f.Indefinite:
      return 1 / 0;
    default:
      throw new w(`Unsupported integer info: ${t.toString(2)}`);
  }
}
function M(t) {
  const e = h(t);
  return typeof e == "number" ? -1 - e : -1n - e;
}
function $(t) {
  const e = h(t);
  if (e > Number.MAX_SAFE_INTEGER)
    throw new w("Byte length is too large");
  const n = Number(e);
  return d += n, S.slice(d - n, d);
}
function F(t) {
  const e = $(t);
  return q.decode(e);
}
function v(t, e) {
  const n = h(t);
  if (n === L)
    return B(e);
  throw new w(`Unsupported tag: ${n}.`);
}
var x = class extends Error {
  constructor(e) {
    super(e), this.name = "SerializationError";
  }
};
var C = 2 * 1024;
var V = 100;
var tt = new TextEncoder();
function y(t) {
  return t << 5;
}
var a = new Uint8Array(C);
var g = new DataView(a.buffer);
var r = 0;
var O = [];
function gt(t, e) {
  r = 0;
  const n = e?.(t) ?? t;
  return ft(L, n, e), a.slice(0, r);
}
function k(t) {
  let e = a.length * 2;
  for (; e < t; )
    e *= 2;
  a = Z(a, e), g = new DataView(a.buffer);
}
function _(t, e) {
  if (t === false || t === true || t === null || t === void 0) {
    rt(t);
    return;
  }
  if (typeof t == "number" || typeof t == "bigint") {
    ot(t);
    return;
  }
  if (typeof t == "string") {
    z(t);
    return;
  }
  if (t instanceof Uint8Array) {
    m(t);
    return;
  }
  if (t instanceof ArrayBuffer) {
    m(new Uint8Array(t));
    return;
  }
  if (Array.isArray(t)) {
    et(t, e);
    return;
  }
  if (typeof t == "object") {
    nt(t, e);
    return;
  }
  throw new x(`Unsupported type: ${typeof t}`);
}
function et(t, e) {
  E(c.Array, t.length), t.forEach((n, s) => {
    _(e?.(n, s.toString()) ?? n, e);
  });
}
function nt(t, e) {
  O = Object.entries(t), E(c.Map, O.length), O.forEach(([n, s]) => {
    z(n), _(e?.(s, n) ?? s, e);
  });
}
function E(t, e) {
  if (r > a.length - V && k(r + V), e <= Y) {
    g.setUint8(
      r++,
      y(t) | Number(e)
    );
    return;
  }
  if (e <= G) {
    g.setUint8(
      r++,
      y(t) | f.OneByte
    ), g.setUint8(r, Number(e)), r += 1;
    return;
  }
  if (e <= P) {
    g.setUint8(
      r++,
      y(t) | f.TwoBytes
    ), g.setUint16(r, Number(e), l), r += 2;
    return;
  }
  if (e <= H) {
    g.setUint8(
      r++,
      y(t) | f.FourBytes
    ), g.setUint32(r, Number(e), l), r += 4;
    return;
  }
  if (e <= W) {
    g.setUint8(
      r++,
      y(t) | f.EightBytes
    ), g.setBigUint64(r, BigInt(e), l), r += 8;
    return;
  }
  throw new x(`Value too large to encode: ${e}`);
}
function rt(t) {
  E(c.Simple, ct(t));
}
function ct(t) {
  if (t === false)
    return u.False;
  if (t === true)
    return u.True;
  if (t === null)
    return u.Null;
  if (t === void 0)
    return u.Undefined;
  throw new x(`Unrecognized simple value: ${t.toString()}`);
}
function T(t, e) {
  E(t, e.length), r > a.length - e.length && k(r + e.length), a.set(e, r), r += e.length;
}
function X(t, e) {
  E(t, e);
}
function it(t) {
  X(c.UnsignedInteger, t);
}
function st(t) {
  X(
    c.NegativeInteger,
    typeof t == "bigint" ? -1n - t : -1 - t
  );
}
function ot(t) {
  t >= 0 ? it(t) : st(t);
}
function z(t) {
  T(c.TextString, tt.encode(t));
}
function m(t) {
  T(c.ByteString, t);
}
function ft(t, e, n) {
  E(c.Tag, t), _(e, n);
}

// node_modules/@icp-sdk/core/lib/esm/agent/errors.js
var ErrorKindEnum;
(function(ErrorKindEnum2) {
  ErrorKindEnum2["Trust"] = "Trust";
  ErrorKindEnum2["Protocol"] = "Protocol";
  ErrorKindEnum2["Reject"] = "Reject";
  ErrorKindEnum2["Transport"] = "Transport";
  ErrorKindEnum2["External"] = "External";
  ErrorKindEnum2["Limit"] = "Limit";
  ErrorKindEnum2["Input"] = "Input";
  ErrorKindEnum2["Unknown"] = "Unknown";
})(ErrorKindEnum || (ErrorKindEnum = {}));
var ErrorVerbosity;
(function(ErrorVerbosity2) {
  ErrorVerbosity2["Normal"] = "normal";
  ErrorVerbosity2["Verbose"] = "verbose";
})(ErrorVerbosity || (ErrorVerbosity = {}));
var VERBOSE_ONLY_KEYS = /* @__PURE__ */ new Set(["arg", "certificate", "nonce"]);
function bytesReplacer(verbosity) {
  return (key, value) => {
    if (value instanceof Uint8Array) {
      if (verbosity === ErrorVerbosity.Normal && VERBOSE_ONLY_KEYS.has(key)) {
        return `<${value.length} bytes, set ErrorCode.verbosity = ErrorVerbosity.Verbose to display>`;
      }
      return `hex(${value.length}):${bytesToHex(value)}`;
    }
    return value;
  };
}
var ErrorCode = class _ErrorCode {
  static {
    this.verbosity = ErrorVerbosity.Normal;
  }
  constructor(isCertified = false) {
    this.isCertified = isCertified;
  }
  toString() {
    let errorMessage = this.toErrorMessage();
    if (this.requestContext) {
      errorMessage += `
Request context:
  Request ID (hex): ${this.requestContext.requestId ? bytesToHex(this.requestContext.requestId) : "undefined"}
  Sender pubkey (hex): ${bytesToHex(this.requestContext.senderPubKey)}
  Sender signature (hex): ${bytesToHex(this.requestContext.senderSignature)}
  Ingress expiry: ${this.requestContext.ingressExpiry.toString()}`;
    }
    if (this.callContext) {
      errorMessage += `
Call context:
  Canister ID: ${this.callContext.canisterId.toText()}
  Method name: ${this.callContext.methodName}`;
      if ("subnetId" in this.callContext.effectiveTarget) {
        errorMessage += `
  Effective target subnet: ${this.callContext.effectiveTarget.subnetId.toText()}`;
      } else if (this.callContext.effectiveTarget.canisterId.toText() !== this.callContext.canisterId.toText()) {
        errorMessage += `
  Effective target canister: ${this.callContext.effectiveTarget.canisterId.toText()}`;
      }
      if ("httpDetails" in this.callContext) {
        errorMessage += `
  HTTP details: ${JSON.stringify(this.callContext.httpDetails, bytesReplacer(_ErrorCode.verbosity), 2)}`;
      }
    }
    return errorMessage;
  }
};
var AgentError = class _AgentError extends Error {
  get code() {
    return this.cause.code;
  }
  set code(code) {
    this.cause.code = code;
  }
  get kind() {
    return this.cause.kind;
  }
  set kind(kind) {
    this.cause.kind = kind;
  }
  /**
   * Reads the `isCertified` property of the underlying error code.
   * @returns `true` if the error is certified, `false` otherwise.
   */
  get isCertified() {
    return this.code.isCertified;
  }
  constructor(code, kind) {
    super(code.toString());
    this.name = "AgentError";
    this.cause = { code, kind };
    Object.setPrototypeOf(this, _AgentError.prototype);
  }
  hasCode(code) {
    return this.code instanceof code;
  }
  toString() {
    return `${this.name} (${this.kind}): ${this.message}`;
  }
};
var ErrorKind = class extends AgentError {
  static fromCode(code) {
    return new this(code);
  }
};
var TrustError = class _TrustError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Trust);
    this.name = "TrustError";
    Object.setPrototypeOf(this, _TrustError.prototype);
  }
};
var ProtocolError = class _ProtocolError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Protocol);
    this.name = "ProtocolError";
    Object.setPrototypeOf(this, _ProtocolError.prototype);
  }
};
var RejectError = class _RejectError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Reject);
    this.name = "RejectError";
    Object.setPrototypeOf(this, _RejectError.prototype);
  }
};
var TransportError = class _TransportError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Transport);
    this.name = "TransportError";
    Object.setPrototypeOf(this, _TransportError.prototype);
  }
};
var ExternalError = class _ExternalError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.External);
    this.name = "ExternalError";
    Object.setPrototypeOf(this, _ExternalError.prototype);
  }
};
var InputError = class _InputError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Input);
    this.name = "InputError";
    Object.setPrototypeOf(this, _InputError.prototype);
  }
};
var UnknownError = class _UnknownError extends ErrorKind {
  constructor(code) {
    super(code, ErrorKindEnum.Unknown);
    this.name = "UnknownError";
    Object.setPrototypeOf(this, _UnknownError.prototype);
  }
};
var CertificateVerificationErrorCode = class _CertificateVerificationErrorCode extends ErrorCode {
  constructor(reason, error) {
    super();
    this.reason = reason;
    this.error = error;
    this.name = "CertificateVerificationErrorCode";
    Object.setPrototypeOf(this, _CertificateVerificationErrorCode.prototype);
  }
  toErrorMessage() {
    let errorMessage = this.reason;
    if (this.error) {
      errorMessage += `: ${formatUnknownError(this.error)}`;
    }
    return `Certificate verification error: "${errorMessage}"`;
  }
};
var CertificateTimeErrorCode = class _CertificateTimeErrorCode extends ErrorCode {
  constructor(maxAgeInMinutes, certificateTime, currentTime, timeDiffMsecs, ageType) {
    super();
    this.maxAgeInMinutes = maxAgeInMinutes;
    this.certificateTime = certificateTime;
    this.currentTime = currentTime;
    this.timeDiffMsecs = timeDiffMsecs;
    this.ageType = ageType;
    this.name = "CertificateTimeErrorCode";
    Object.setPrototypeOf(this, _CertificateTimeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Certificate is signed more than ${this.maxAgeInMinutes} minutes in the ${this.ageType}. Certificate time: ${this.certificateTime.toISOString()} Current time: ${this.currentTime.toISOString()} Clock drift: ${this.timeDiffMsecs}ms`;
  }
};
var CertificateHasTooManyDelegationsErrorCode = class _CertificateHasTooManyDelegationsErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "CertificateHasTooManyDelegationsErrorCode";
    Object.setPrototypeOf(this, _CertificateHasTooManyDelegationsErrorCode.prototype);
  }
  toErrorMessage() {
    return "Certificate has too many delegations";
  }
};
var CertificateNotAuthorizedErrorCode = class _CertificateNotAuthorizedErrorCode extends ErrorCode {
  constructor(canisterId, subnetId) {
    super();
    this.canisterId = canisterId;
    this.subnetId = subnetId;
    this.name = "CertificateNotAuthorizedErrorCode";
    Object.setPrototypeOf(this, _CertificateNotAuthorizedErrorCode.prototype);
  }
  toErrorMessage() {
    return `The certificate contains a delegation that does not include the canister ${this.canisterId.toText()} in the canister_ranges field. Subnet ID: ${this.subnetId.toText()}`;
  }
};
var CertificateNotAuthorizedForSubnetErrorCode = class _CertificateNotAuthorizedForSubnetErrorCode extends ErrorCode {
  constructor(subnetId) {
    super();
    this.subnetId = subnetId;
    this.name = "CertificateNotAuthorizedForSubnetErrorCode";
    Object.setPrototypeOf(this, _CertificateNotAuthorizedForSubnetErrorCode.prototype);
  }
  toErrorMessage() {
    return `The certificate is not authorized for subnet ${this.subnetId.toText()}`;
  }
};
var LookupErrorCode = class _LookupErrorCode extends ErrorCode {
  constructor(message, lookupStatus) {
    super();
    this.message = message;
    this.lookupStatus = lookupStatus;
    this.name = "LookupErrorCode";
    Object.setPrototypeOf(this, _LookupErrorCode.prototype);
  }
  toErrorMessage() {
    return `${this.message}. Lookup status: ${this.lookupStatus}`;
  }
};
var MalformedLookupFoundValueErrorCode = class _MalformedLookupFoundValueErrorCode extends ErrorCode {
  constructor(message) {
    super();
    this.message = message;
    this.name = "MalformedLookupFoundValueErrorCode";
    Object.setPrototypeOf(this, _MalformedLookupFoundValueErrorCode.prototype);
  }
  toErrorMessage() {
    return this.message;
  }
};
var MissingLookupValueErrorCode = class _MissingLookupValueErrorCode extends ErrorCode {
  constructor(message) {
    super();
    this.message = message;
    this.name = "MissingLookupValueErrorCode";
    Object.setPrototypeOf(this, _MissingLookupValueErrorCode.prototype);
  }
  toErrorMessage() {
    return this.message;
  }
};
var DerKeyLengthMismatchErrorCode = class _DerKeyLengthMismatchErrorCode extends ErrorCode {
  constructor(expectedLength, actualLength) {
    super();
    this.expectedLength = expectedLength;
    this.actualLength = actualLength;
    this.name = "DerKeyLengthMismatchErrorCode";
    Object.setPrototypeOf(this, _DerKeyLengthMismatchErrorCode.prototype);
  }
  toErrorMessage() {
    return `BLS DER-encoded public key must be ${this.expectedLength} bytes long, but is ${this.actualLength} bytes long`;
  }
};
var DerPrefixMismatchErrorCode = class _DerPrefixMismatchErrorCode extends ErrorCode {
  constructor(expectedPrefix, actualPrefix) {
    super();
    this.expectedPrefix = expectedPrefix;
    this.actualPrefix = actualPrefix;
    this.name = "DerPrefixMismatchErrorCode";
    Object.setPrototypeOf(this, _DerPrefixMismatchErrorCode.prototype);
  }
  toErrorMessage() {
    return `BLS DER-encoded public key is invalid. Expected the following prefix: ${bytesToHex(this.expectedPrefix)}, but got ${bytesToHex(this.actualPrefix)}`;
  }
};
var DerDecodeLengthMismatchErrorCode = class _DerDecodeLengthMismatchErrorCode extends ErrorCode {
  constructor(expectedLength, actualLength) {
    super();
    this.expectedLength = expectedLength;
    this.actualLength = actualLength;
    this.name = "DerDecodeLengthMismatchErrorCode";
    Object.setPrototypeOf(this, _DerDecodeLengthMismatchErrorCode.prototype);
  }
  toErrorMessage() {
    return `DER payload mismatch: Expected length ${this.expectedLength}, actual length: ${this.actualLength}`;
  }
};
var DerDecodeErrorCode = class _DerDecodeErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "DerDecodeErrorCode";
    Object.setPrototypeOf(this, _DerDecodeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to decode DER: ${this.error}`;
  }
};
var DerEncodeErrorCode = class _DerEncodeErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "DerEncodeErrorCode";
    Object.setPrototypeOf(this, _DerEncodeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to encode DER: ${this.error}`;
  }
};
var CborDecodeErrorCode = class _CborDecodeErrorCode extends ErrorCode {
  constructor(error, input) {
    super();
    this.error = error;
    this.input = input;
    this.name = "CborDecodeErrorCode";
    Object.setPrototypeOf(this, _CborDecodeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to decode CBOR: ${formatUnknownError(this.error)}, input: ${bytesToHex(this.input)}`;
  }
};
var CborEncodeErrorCode = class _CborEncodeErrorCode extends ErrorCode {
  constructor(error, value) {
    super();
    this.error = error;
    this.value = value;
    this.name = "CborEncodeErrorCode";
    Object.setPrototypeOf(this, _CborEncodeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to encode CBOR: ${formatUnknownError(this.error)}, input: ${this.value}`;
  }
};
var TimeoutWaitingForResponseErrorCode = class _TimeoutWaitingForResponseErrorCode extends ErrorCode {
  constructor(message, requestId, status) {
    super();
    this.message = message;
    this.requestId = requestId;
    this.status = status;
    this.name = "TimeoutWaitingForResponseErrorCode";
    Object.setPrototypeOf(this, _TimeoutWaitingForResponseErrorCode.prototype);
  }
  toErrorMessage() {
    let errorMessage = `${this.message}
`;
    if (this.requestId) {
      errorMessage += `  Request ID: ${bytesToHex(this.requestId)}
`;
    }
    if (this.status) {
      errorMessage += `  Request status: ${this.status}
`;
    }
    return errorMessage;
  }
};
var CertificateOutdatedErrorCode = class _CertificateOutdatedErrorCode extends ErrorCode {
  constructor(maxIngressExpiryInMinutes, requestId, retryTimes) {
    super();
    this.maxIngressExpiryInMinutes = maxIngressExpiryInMinutes;
    this.requestId = requestId;
    this.retryTimes = retryTimes;
    this.name = "CertificateOutdatedErrorCode";
    Object.setPrototypeOf(this, _CertificateOutdatedErrorCode.prototype);
  }
  toErrorMessage() {
    let errorMessage = `Certificate is stale (over ${this.maxIngressExpiryInMinutes} minutes). Is the computer's clock synchronized?
  Request ID: ${bytesToHex(this.requestId)}
`;
    if (this.retryTimes !== void 0) {
      errorMessage += `  Retried ${this.retryTimes} times.`;
    }
    return errorMessage;
  }
};
var CertifiedRejectErrorCode = class _CertifiedRejectErrorCode extends ErrorCode {
  constructor(requestId, rejectCode, rejectMessage, rejectErrorCode) {
    super(true);
    this.requestId = requestId;
    this.rejectCode = rejectCode;
    this.rejectMessage = rejectMessage;
    this.rejectErrorCode = rejectErrorCode;
    this.name = "CertifiedRejectErrorCode";
    Object.setPrototypeOf(this, _CertifiedRejectErrorCode.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${bytesToHex(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
};
var UncertifiedRejectErrorCode = class _UncertifiedRejectErrorCode extends ErrorCode {
  constructor(requestId, rejectCode, rejectMessage, rejectErrorCode, signatures) {
    super();
    this.requestId = requestId;
    this.rejectCode = rejectCode;
    this.rejectMessage = rejectMessage;
    this.rejectErrorCode = rejectErrorCode;
    this.signatures = signatures;
    this.name = "UncertifiedRejectErrorCode";
    Object.setPrototypeOf(this, _UncertifiedRejectErrorCode.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${bytesToHex(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
};
var UncertifiedRejectUpdateErrorCode = class _UncertifiedRejectUpdateErrorCode extends ErrorCode {
  constructor(requestId, rejectCode, rejectMessage, rejectErrorCode) {
    super();
    this.requestId = requestId;
    this.rejectCode = rejectCode;
    this.rejectMessage = rejectMessage;
    this.rejectErrorCode = rejectErrorCode;
    this.name = "UncertifiedRejectUpdateErrorCode";
    Object.setPrototypeOf(this, _UncertifiedRejectUpdateErrorCode.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${bytesToHex(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
};
var RequestStatusDoneNoReplyErrorCode = class _RequestStatusDoneNoReplyErrorCode extends ErrorCode {
  constructor(requestId) {
    super();
    this.requestId = requestId;
    this.name = "RequestStatusDoneNoReplyErrorCode";
    Object.setPrototypeOf(this, _RequestStatusDoneNoReplyErrorCode.prototype);
  }
  toErrorMessage() {
    return `Call was marked as done but we never saw the reply:
  Request ID: ${bytesToHex(this.requestId)}
`;
  }
};
var MissingRootKeyErrorCode = class _MissingRootKeyErrorCode extends ErrorCode {
  constructor(shouldFetchRootKey) {
    super();
    this.shouldFetchRootKey = shouldFetchRootKey;
    this.name = "MissingRootKeyErrorCode";
    Object.setPrototypeOf(this, _MissingRootKeyErrorCode.prototype);
  }
  toErrorMessage() {
    if (this.shouldFetchRootKey === void 0) {
      return "Agent is missing root key";
    }
    return `Agent is missing root key and the shouldFetchRootKey value is set to ${this.shouldFetchRootKey}. The root key should only be unknown if you are in local development. Otherwise you should avoid fetching and use the default IC Root Key or the known root key of your environment.`;
  }
};
var HashValueErrorCode = class _HashValueErrorCode extends ErrorCode {
  constructor(value) {
    super();
    this.value = value;
    this.name = "HashValueErrorCode";
    Object.setPrototypeOf(this, _HashValueErrorCode.prototype);
  }
  toErrorMessage() {
    return `Attempt to hash a value of unsupported type: ${this.value}`;
  }
};
var IdentityInvalidErrorCode = class _IdentityInvalidErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "IdentityInvalidErrorCode";
    Object.setPrototypeOf(this, _IdentityInvalidErrorCode.prototype);
  }
  toErrorMessage() {
    return "This identity has expired due this application's security policy. Please refresh your authentication.";
  }
};
var IngressExpiryInvalidErrorCode = class _IngressExpiryInvalidErrorCode extends ErrorCode {
  constructor(message, providedIngressExpiryInMinutes) {
    super();
    this.message = message;
    this.providedIngressExpiryInMinutes = providedIngressExpiryInMinutes;
    this.name = "IngressExpiryInvalidErrorCode";
    Object.setPrototypeOf(this, _IngressExpiryInvalidErrorCode.prototype);
  }
  toErrorMessage() {
    return `${this.message}. Provided ingress expiry time is ${this.providedIngressExpiryInMinutes} minutes.`;
  }
};
var MissingFetchErrorCode = class _MissingFetchErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "MissingFetchErrorCode";
    Object.setPrototypeOf(this, _MissingFetchErrorCode.prototype);
  }
  toErrorMessage() {
    return "No fetch implementation available. Provide a `fetch` function in HttpAgentOptions or ensure `globalThis.fetch` is defined.";
  }
};
var CreateHttpAgentErrorCode = class _CreateHttpAgentErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "CreateHttpAgentErrorCode";
    Object.setPrototypeOf(this, _CreateHttpAgentErrorCode.prototype);
  }
  toErrorMessage() {
    return "Failed to create agent from provided agent";
  }
};
var ExcessiveSignaturesErrorCode = class _ExcessiveSignaturesErrorCode extends ErrorCode {
  constructor(signatureCount, maxExpected) {
    super();
    this.signatureCount = signatureCount;
    this.maxExpected = maxExpected;
    this.name = "ExcessiveSignaturesErrorCode";
    Object.setPrototypeOf(this, _ExcessiveSignaturesErrorCode.prototype);
  }
  toErrorMessage() {
    return `Query response contains ${this.signatureCount} signatures, which exceeds the subnet size of ${this.maxExpected}. This suggests a malformed or malicious response.`;
  }
};
var MalformedSignatureErrorCode = class _MalformedSignatureErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "MalformedSignatureErrorCode";
    Object.setPrototypeOf(this, _MalformedSignatureErrorCode.prototype);
  }
  toErrorMessage() {
    return `Query response contained a malformed signature: ${this.error}`;
  }
};
var MalformedPublicKeyErrorCode = class _MalformedPublicKeyErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "MalformedPublicKeyErrorCode";
    Object.setPrototypeOf(this, _MalformedPublicKeyErrorCode.prototype);
  }
  toErrorMessage() {
    return "Read state response contained a malformed public key";
  }
};
var QuerySignatureVerificationFailedErrorCode = class _QuerySignatureVerificationFailedErrorCode extends ErrorCode {
  constructor(nodeId) {
    super();
    this.nodeId = nodeId;
    this.name = "QuerySignatureVerificationFailedErrorCode";
    Object.setPrototypeOf(this, _QuerySignatureVerificationFailedErrorCode.prototype);
  }
  toErrorMessage() {
    return `Query signature verification failed. Node ID: ${this.nodeId}`;
  }
};
var UnexpectedErrorCode = class _UnexpectedErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "UnexpectedErrorCode";
    Object.setPrototypeOf(this, _UnexpectedErrorCode.prototype);
  }
  toErrorMessage() {
    return `Unexpected error: ${formatUnknownError(this.error)}`;
  }
};
var UnexpectedV4StatusErrorCode = class _UnexpectedV4StatusErrorCode extends ErrorCode {
  constructor(status, requestId, response, rawCertificate) {
    super();
    this.status = status;
    this.requestId = requestId;
    this.response = response;
    this.rawCertificate = rawCertificate;
    this.name = "UnexpectedV4StatusErrorCode";
    Object.setPrototypeOf(this, _UnexpectedV4StatusErrorCode.prototype);
  }
  toErrorMessage() {
    const replacer = (_k, v2) => v2 instanceof Uint8Array ? `hex(${v2.length}):${bytesToHex(v2)}` : v2;
    return `Unexpected request status in v4 sync response: "${this.status}"
  Request ID (hex): ${bytesToHex(this.requestId)}
  Response: ${JSON.stringify(this.response, replacer, 2)}`;
  }
};
var HashTreeDecodeErrorCode = class _HashTreeDecodeErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "HashTreeDecodeErrorCode";
    Object.setPrototypeOf(this, _HashTreeDecodeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to decode certificate: ${this.error}`;
  }
};
var HttpErrorCode = class _HttpErrorCode extends ErrorCode {
  constructor(status, statusText, headers, bodyText) {
    super();
    this.status = status;
    this.statusText = statusText;
    this.headers = headers;
    this.bodyText = bodyText;
    this.name = "HttpErrorCode";
    Object.setPrototypeOf(this, _HttpErrorCode.prototype);
  }
  toErrorMessage() {
    let errorMessage = `HTTP request failed:
  Status: ${this.status} (${this.statusText})
  Headers: ${JSON.stringify(this.headers, bytesReplacer(ErrorCode.verbosity))}
`;
    if (this.bodyText) {
      errorMessage += `  Body: ${this.bodyText}
`;
    }
    return errorMessage;
  }
};
var HttpV4ApiNotSupportedErrorCode = class _HttpV4ApiNotSupportedErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "HttpV4ApiNotSupportedErrorCode";
    Object.setPrototypeOf(this, _HttpV4ApiNotSupportedErrorCode.prototype);
  }
  toErrorMessage() {
    return "HTTP request failed: v4 API is not supported";
  }
};
var HttpFetchErrorCode = class _HttpFetchErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "HttpFetchErrorCode";
    Object.setPrototypeOf(this, _HttpFetchErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to fetch HTTP request: ${formatUnknownError(this.error)}`;
  }
};
var MissingCanisterIdErrorCode = class _MissingCanisterIdErrorCode extends ErrorCode {
  constructor(receivedCanisterId) {
    super();
    this.receivedCanisterId = receivedCanisterId;
    this.name = "MissingCanisterIdErrorCode";
    Object.setPrototypeOf(this, _MissingCanisterIdErrorCode.prototype);
  }
  toErrorMessage() {
    return `Canister ID is required, but received ${typeof this.receivedCanisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`;
  }
};
var InvalidReadStateRequestErrorCode = class _InvalidReadStateRequestErrorCode extends ErrorCode {
  constructor(request4) {
    super();
    this.request = request4;
    this.name = "InvalidReadStateRequestErrorCode";
    Object.setPrototypeOf(this, _InvalidReadStateRequestErrorCode.prototype);
  }
  toErrorMessage() {
    return `Invalid read state request: ${this.request}`;
  }
};
var ExpiryJsonDeserializeErrorCode = class _ExpiryJsonDeserializeErrorCode extends ErrorCode {
  constructor(error) {
    super();
    this.error = error;
    this.name = "ExpiryJsonDeserializeErrorCode";
    Object.setPrototypeOf(this, _ExpiryJsonDeserializeErrorCode.prototype);
  }
  toErrorMessage() {
    return `Failed to deserialize expiry: ${this.error}`;
  }
};
var EffectiveSubnetIdAsyncErrorCode = class _EffectiveSubnetIdAsyncErrorCode extends ErrorCode {
  constructor() {
    super();
    this.name = "EffectiveSubnetIdAsyncErrorCode";
    Object.setPrototypeOf(this, _EffectiveSubnetIdAsyncErrorCode.prototype);
  }
  toErrorMessage() {
    return "Setting `effectiveTarget` to a `subnetId` is not allowed in `callSync = false` calls";
  }
};
function formatUnknownError(error) {
  if (error instanceof Error) {
    return error.stack ?? error.message;
  }
  try {
    return JSON.stringify(error, bytesReplacer(ErrorCode.verbosity));
  } catch {
    return String(error);
  }
}
var UNREACHABLE_ERROR = new Error("unreachable");

// node_modules/@icp-sdk/core/lib/esm/candid/idl.js
var idl_exports = {};
__export(idl_exports, {
  Bool: () => Bool,
  BoolClass: () => BoolClass,
  CandidDecodeError: () => CandidDecodeError,
  ConstructType: () => ConstructType,
  Empty: () => Empty,
  EmptyClass: () => EmptyClass,
  FixedIntClass: () => FixedIntClass,
  FixedNatClass: () => FixedNatClass,
  Float32: () => Float32,
  Float64: () => Float64,
  FloatClass: () => FloatClass,
  Func: () => Func,
  FuncClass: () => FuncClass,
  Int: () => Int,
  Int16: () => Int16,
  Int32: () => Int32,
  Int64: () => Int64,
  Int8: () => Int8,
  IntClass: () => IntClass,
  Nat: () => Nat,
  Nat16: () => Nat16,
  Nat32: () => Nat32,
  Nat64: () => Nat64,
  Nat8: () => Nat8,
  NatClass: () => NatClass,
  Null: () => Null,
  NullClass: () => NullClass,
  Opt: () => Opt,
  OptClass: () => OptClass,
  PrimitiveType: () => PrimitiveType,
  Principal: () => Principal2,
  PrincipalClass: () => PrincipalClass,
  Rec: () => Rec,
  RecClass: () => RecClass,
  Record: () => Record,
  RecordClass: () => RecordClass,
  Reserved: () => Reserved,
  ReservedClass: () => ReservedClass,
  Service: () => Service,
  ServiceClass: () => ServiceClass,
  Text: () => Text,
  TextClass: () => TextClass,
  Tuple: () => Tuple,
  TupleClass: () => TupleClass,
  Type: () => Type,
  Unknown: () => Unknown,
  UnknownClass: () => UnknownClass,
  Variant: () => Variant,
  VariantClass: () => VariantClass,
  Vec: () => Vec,
  VecClass: () => VecClass,
  Visitor: () => Visitor,
  decode: () => decode,
  encode: () => encode,
  resetSubtypeCache: () => resetSubtypeCache,
  subtype: () => subtype
});

// node_modules/@icp-sdk/core/lib/esm/candid/utils/buffer.js
function concat(...uint8Arrays) {
  const result = new Uint8Array(uint8Arrays.reduce((acc, curr) => acc + curr.byteLength, 0));
  let index = 0;
  for (const b2 of uint8Arrays) {
    result.set(b2, index);
    index += b2.byteLength;
  }
  return result;
}
var PipeArrayBuffer = class {
  /**
   * Save a checkpoint of the reading view (for backtracking)
   */
  save() {
    return this._view;
  }
  /**
   * Restore a checkpoint of the reading view (for backtracking)
   * @param checkPoint a previously saved checkpoint
   */
  restore(checkPoint) {
    if (!(checkPoint instanceof Uint8Array)) {
      throw new Error("Checkpoint must be a Uint8Array");
    }
    this._view = checkPoint;
  }
  /**
   * Creates a new instance of a pipe
   * @param buffer an optional buffer to start with
   * @param length an optional amount of bytes to use for the length.
   */
  constructor(buffer, length = buffer?.byteLength || 0) {
    if (buffer && !(buffer instanceof Uint8Array)) {
      try {
        buffer = uint8FromBufLike(buffer);
      } catch {
        throw new Error("Buffer must be a Uint8Array");
      }
    }
    if (length < 0 || !Number.isInteger(length)) {
      throw new Error("Length must be a non-negative integer");
    }
    if (buffer && length > buffer.byteLength) {
      throw new Error("Length cannot exceed buffer length");
    }
    this._buffer = buffer || new Uint8Array(0);
    this._view = new Uint8Array(this._buffer.buffer, 0, length);
  }
  get buffer() {
    return this._view.slice();
  }
  get byteLength() {
    return this._view.byteLength;
  }
  /**
   * Read `num` number of bytes from the front of the pipe.
   * @param num The number of bytes to read.
   */
  read(num) {
    const result = this._view.subarray(0, num);
    this._view = this._view.subarray(num);
    return result.slice();
  }
  readUint8() {
    if (this._view.byteLength === 0) {
      return void 0;
    }
    const result = this._view[0];
    this._view = this._view.subarray(1);
    return result;
  }
  /**
   * Write a buffer to the end of the pipe.
   * @param buf The bytes to write.
   */
  write(buf) {
    if (!(buf instanceof Uint8Array)) {
      throw new Error("Buffer must be a Uint8Array");
    }
    const offset = this._view.byteLength;
    if (this._view.byteOffset + this._view.byteLength + buf.byteLength >= this._buffer.byteLength) {
      this.alloc(buf.byteLength);
    } else {
      this._view = new Uint8Array(this._buffer.buffer, this._view.byteOffset, this._view.byteLength + buf.byteLength);
    }
    this._view.set(buf, offset);
  }
  /**
   * Whether or not there is more data to read from the buffer
   */
  get end() {
    return this._view.byteLength === 0;
  }
  /**
   * Allocate a fixed amount of memory in the buffer. This does not affect the view.
   * @param amount A number of bytes to add to the buffer.
   */
  alloc(amount) {
    if (amount <= 0 || !Number.isInteger(amount)) {
      throw new Error("Amount must be a positive integer");
    }
    const b2 = new Uint8Array((this._buffer.byteLength + amount) * 1.2 | 0);
    const v2 = new Uint8Array(b2.buffer, 0, this._view.byteLength + amount);
    v2.set(this._view);
    this._buffer = b2;
    this._view = v2;
  }
};
function uint8FromBufLike(bufLike) {
  if (!bufLike) {
    throw new Error("Input cannot be null or undefined");
  }
  if (bufLike instanceof Uint8Array) {
    if (bufLike.buffer instanceof ArrayBuffer) {
      return bufLike;
    }
    return new Uint8Array(bufLike);
  }
  if (bufLike instanceof ArrayBuffer) {
    return new Uint8Array(bufLike);
  }
  if (Array.isArray(bufLike)) {
    return new Uint8Array(bufLike);
  }
  if ("buffer" in bufLike) {
    return uint8FromBufLike(bufLike.buffer);
  }
  return new Uint8Array(bufLike).slice();
}
function compare(u1, u2) {
  if (u1.byteLength !== u2.byteLength) {
    return u1.byteLength - u2.byteLength;
  }
  for (let i = 0; i < u1.length; i++) {
    if (u1[i] !== u2[i]) {
      return u1[i] - u2[i];
    }
  }
  return 0;
}
function uint8Equals(u1, u2) {
  return compare(u1, u2) === 0;
}
function uint8ToDataView(uint8) {
  if (!(uint8 instanceof Uint8Array)) {
    throw new Error("Input must be a Uint8Array");
  }
  return new DataView(uint8.buffer, uint8.byteOffset, uint8.byteLength);
}

// node_modules/@icp-sdk/core/lib/esm/candid/utils/hash.js
function idlHash(s) {
  const utf8encoder = new TextEncoder();
  const array = utf8encoder.encode(s);
  let h2 = 0;
  for (const c2 of array) {
    h2 = (h2 * 223 + c2) % 2 ** 32;
  }
  return h2;
}
function idlLabelToId(label) {
  if (/^_\d+_$/.test(label) || /^_0x[0-9a-fA-F]+_$/.test(label)) {
    const num = +label.slice(1, -1);
    if (Number.isSafeInteger(num) && num >= 0 && num < 2 ** 32) {
      return num;
    }
  }
  return idlHash(label);
}

// node_modules/@icp-sdk/core/lib/esm/candid/utils/bigint-math.js
function ilog2(n) {
  const nBig = BigInt(n);
  if (n <= 0) {
    throw new RangeError("Input must be positive");
  }
  return nBig.toString(2).length - 1;
}
function iexp2(n) {
  const nBig = BigInt(n);
  if (n < 0) {
    throw new RangeError("Input must be non-negative");
  }
  return BigInt(1) << nBig;
}

// node_modules/@icp-sdk/core/lib/esm/candid/utils/leb128.js
function eob() {
  throw new Error("unexpected end of buffer");
}
var MAX_LEB_BYTES = 8192;
function safeRead(pipe, num) {
  if (pipe.byteLength < num) {
    eob();
  }
  return pipe.read(num);
}
function safeReadUint8(pipe) {
  const byte = pipe.readUint8();
  if (byte === void 0) {
    eob();
  }
  return byte;
}
function lebEncode(value) {
  if (typeof value === "number") {
    value = BigInt(value);
  }
  if (value < BigInt(0)) {
    throw new Error("Cannot leb encode negative values.");
  }
  const byteLength = (value === BigInt(0) ? 0 : ilog2(value)) + 1;
  const pipe = new PipeArrayBuffer(new Uint8Array(byteLength), 0);
  while (true) {
    const i = Number(value & BigInt(127));
    value /= BigInt(128);
    if (value === BigInt(0)) {
      pipe.write(new Uint8Array([i]));
      break;
    } else {
      pipe.write(new Uint8Array([i | 128]));
    }
  }
  return pipe.buffer;
}
function lebDecode(pipe) {
  let weight = BigInt(1);
  let value = BigInt(0);
  let byte;
  let count = 0;
  do {
    if (count++ >= MAX_LEB_BYTES) {
      throw new Error(`LEB128 value exceeds maximum length of ${MAX_LEB_BYTES} bytes`);
    }
    byte = safeReadUint8(pipe);
    value += BigInt(byte & 127).valueOf() * weight;
    weight *= BigInt(128);
  } while (byte >= 128);
  return value;
}
function slebEncode(value) {
  if (typeof value === "number") {
    value = BigInt(value);
  }
  const isNeg = value < BigInt(0);
  if (isNeg) {
    value = -value - BigInt(1);
  }
  const byteLength = (value === BigInt(0) ? 0 : ilog2(value)) + 1;
  const pipe = new PipeArrayBuffer(new Uint8Array(byteLength), 0);
  while (true) {
    const i = getLowerBytes(value);
    value /= BigInt(128);
    if (isNeg && value === BigInt(0) && (i & 64) !== 0 || !isNeg && value === BigInt(0) && (i & 64) === 0) {
      pipe.write(new Uint8Array([i]));
      break;
    } else {
      pipe.write(new Uint8Array([i | 128]));
    }
  }
  function getLowerBytes(num) {
    const bytes = num % BigInt(128);
    if (isNeg) {
      return Number(BigInt(128) - bytes - BigInt(1));
    }
    return Number(bytes);
  }
  return pipe.buffer;
}
function slebDecode(pipe) {
  const pipeView = new Uint8Array(pipe.buffer);
  let len = 0;
  for (; len < pipeView.byteLength; len++) {
    if (len >= MAX_LEB_BYTES) {
      throw new Error(`LEB128 value exceeds maximum length of ${MAX_LEB_BYTES} bytes`);
    }
    if (pipeView[len] < 128) {
      if ((pipeView[len] & 64) === 0) {
        return lebDecode(pipe);
      }
      break;
    }
  }
  const bytes = new Uint8Array(safeRead(pipe, len + 1));
  let value = BigInt(0);
  for (let i = bytes.byteLength - 1; i >= 0; i--) {
    value = value * BigInt(128) + BigInt(128 - (bytes[i] & 127) - 1);
  }
  return -value - BigInt(1);
}
function writeUIntLE(value, byteLength) {
  if (BigInt(value) < BigInt(0)) {
    throw new Error("Cannot write negative values.");
  }
  return writeIntLE(value, byteLength);
}
function writeIntLE(value, byteLength) {
  value = BigInt(value);
  const pipe = new PipeArrayBuffer(new Uint8Array(Math.min(1, byteLength)), 0);
  let i = 0;
  let mul = BigInt(256);
  let sub = BigInt(0);
  let byte = Number(value % mul);
  pipe.write(new Uint8Array([byte]));
  while (++i < byteLength) {
    if (value < 0 && sub === BigInt(0) && byte !== 0) {
      sub = BigInt(1);
    }
    byte = Number((value / mul - sub) % BigInt(256));
    pipe.write(new Uint8Array([byte]));
    mul *= BigInt(256);
  }
  return pipe.buffer;
}
function readUIntLE(pipe, byteLength) {
  if (byteLength <= 0 || !Number.isInteger(byteLength)) {
    throw new Error("Byte length must be a positive integer");
  }
  let val = BigInt(safeReadUint8(pipe));
  let mul = BigInt(1);
  let i = 0;
  while (++i < byteLength) {
    mul *= BigInt(256);
    const byte = BigInt(safeReadUint8(pipe));
    val = val + mul * byte;
  }
  return val;
}
function readIntLE(pipe, byteLength) {
  if (byteLength <= 0 || !Number.isInteger(byteLength)) {
    throw new Error("Byte length must be a positive integer");
  }
  let val = readUIntLE(pipe, byteLength);
  const mul = BigInt(2) ** (BigInt(8) * BigInt(byteLength - 1) + BigInt(7));
  if (val >= mul) {
    val -= mul * BigInt(2);
  }
  return val;
}

// node_modules/@icp-sdk/core/lib/esm/candid/idl.js
var DECODE_ELEMENT_BUDGET_BASE = 65536;
var DECODE_ELEMENT_BUDGET_PER_BYTE = 4;
var decodeElementBudget = Number.MAX_SAFE_INTEGER;
function resetDecodeBudget(byteLength) {
  decodeElementBudget = DECODE_ELEMENT_BUDGET_BASE + DECODE_ELEMENT_BUDGET_PER_BYTE * byteLength;
}
function releaseDecodeBudget() {
  decodeElementBudget = Number.MAX_SAFE_INTEGER;
}
function chargeElements(n) {
  if (n > decodeElementBudget) {
    throw new CandidDecodeError(`Decoded value exceeds the allocation budget: tried to allocate ${n} elements with ${decodeElementBudget} remaining`);
  }
  decodeElementBudget -= n;
}
function readLen(b2) {
  const len = lebDecode(b2);
  if (len > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new CandidDecodeError(`Length out of range: ${len}`);
  }
  return Number(len);
}
var CandidDecodeError = class _CandidDecodeError extends Error {
  constructor(message) {
    super(message);
    this.name = "CandidDecodeError";
    Object.setPrototypeOf(this, _CandidDecodeError.prototype);
  }
};
var IDLTypeIds;
(function(IDLTypeIds2) {
  IDLTypeIds2[IDLTypeIds2["Null"] = -1] = "Null";
  IDLTypeIds2[IDLTypeIds2["Bool"] = -2] = "Bool";
  IDLTypeIds2[IDLTypeIds2["Nat"] = -3] = "Nat";
  IDLTypeIds2[IDLTypeIds2["Int"] = -4] = "Int";
  IDLTypeIds2[IDLTypeIds2["Float32"] = -13] = "Float32";
  IDLTypeIds2[IDLTypeIds2["Float64"] = -14] = "Float64";
  IDLTypeIds2[IDLTypeIds2["Text"] = -15] = "Text";
  IDLTypeIds2[IDLTypeIds2["Reserved"] = -16] = "Reserved";
  IDLTypeIds2[IDLTypeIds2["Empty"] = -17] = "Empty";
  IDLTypeIds2[IDLTypeIds2["Opt"] = -18] = "Opt";
  IDLTypeIds2[IDLTypeIds2["Vector"] = -19] = "Vector";
  IDLTypeIds2[IDLTypeIds2["Record"] = -20] = "Record";
  IDLTypeIds2[IDLTypeIds2["Variant"] = -21] = "Variant";
  IDLTypeIds2[IDLTypeIds2["Func"] = -22] = "Func";
  IDLTypeIds2[IDLTypeIds2["Service"] = -23] = "Service";
  IDLTypeIds2[IDLTypeIds2["Principal"] = -24] = "Principal";
})(IDLTypeIds || (IDLTypeIds = {}));
var magicNumber = "DIDL";
var magicNumberBytes = new TextEncoder().encode(magicNumber);
var toReadableString_max = 400;
function zipWith(xs, ys, f2) {
  return xs.map((x2, i) => f2(x2, ys[i]));
}
var TypeTable = class {
  constructor() {
    this._typs = [];
    this._idx = /* @__PURE__ */ new Map();
    this._idxRefCount = /* @__PURE__ */ new Map();
  }
  has(obj) {
    return this._idx.has(obj.name);
  }
  add(type, buf) {
    const idx = this._typs.length;
    this._idx.set(type.name, idx);
    this._idxRefCount.set(idx, 1);
    this._typs.push(buf);
  }
  merge(obj, knot) {
    const idx = this._idx.get(obj.name);
    const knotIdx = this._idx.get(knot);
    if (idx === void 0) {
      throw new Error(`Missing type index for ${obj}`);
    }
    if (knotIdx === void 0) {
      throw new Error(`Missing type index for ${knot}`);
    }
    this._typs[idx] = this._typs[knotIdx];
    const idxRefCount = this._getIdxRefCount(idx);
    const knotRefCount = this._getIdxRefCount(knotIdx);
    this._idxRefCount.set(idx, idxRefCount + knotRefCount);
    this._idx.set(knot, idx);
    this._idxRefCount.set(knotIdx, 0);
    this._compactFromEnd();
  }
  _getIdxRefCount(idx) {
    return this._idxRefCount.get(idx) || 0;
  }
  _compactFromEnd() {
    while (this._typs.length > 0) {
      const lastIndex = this._typs.length - 1;
      if (this._getIdxRefCount(lastIndex) > 0) {
        break;
      }
      this._typs.pop();
      this._idxRefCount.delete(lastIndex);
    }
  }
  encode() {
    const len = lebEncode(this._typs.length);
    const buf = concat(...this._typs);
    return concat(len, buf);
  }
  indexOf(typeName) {
    if (!this._idx.has(typeName)) {
      throw new Error(`Missing type index for ${typeName}`);
    }
    return slebEncode(this._idx.get(typeName) || 0);
  }
};
var Visitor = class {
  visitType(_t, _data) {
    throw new Error("Not implemented");
  }
  visitPrimitive(t, data) {
    return this.visitType(t, data);
  }
  visitEmpty(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitBool(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitNull(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitReserved(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitText(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitNumber(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitInt(t, data) {
    return this.visitNumber(t, data);
  }
  visitNat(t, data) {
    return this.visitNumber(t, data);
  }
  visitFloat(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitFixedInt(t, data) {
    return this.visitNumber(t, data);
  }
  visitFixedNat(t, data) {
    return this.visitNumber(t, data);
  }
  visitPrincipal(t, data) {
    return this.visitPrimitive(t, data);
  }
  visitConstruct(t, data) {
    return this.visitType(t, data);
  }
  visitVec(t, _ty, data) {
    return this.visitConstruct(t, data);
  }
  visitOpt(t, _ty, data) {
    return this.visitConstruct(t, data);
  }
  visitRecord(t, _fields, data) {
    return this.visitConstruct(t, data);
  }
  visitTuple(t, components, data) {
    const fields2 = components.map((ty, i) => [`_${i}_`, ty]);
    return this.visitRecord(t, fields2, data);
  }
  visitVariant(t, _fields, data) {
    return this.visitConstruct(t, data);
  }
  visitRec(_t, ty, data) {
    return this.visitConstruct(ty, data);
  }
  visitFunc(t, data) {
    return this.visitConstruct(t, data);
  }
  visitService(t, data) {
    return this.visitConstruct(t, data);
  }
};
var IdlTypeName;
(function(IdlTypeName2) {
  IdlTypeName2["EmptyClass"] = "__IDL_EmptyClass__";
  IdlTypeName2["UnknownClass"] = "__IDL_UnknownClass__";
  IdlTypeName2["BoolClass"] = "__IDL_BoolClass__";
  IdlTypeName2["NullClass"] = "__IDL_NullClass__";
  IdlTypeName2["ReservedClass"] = "__IDL_ReservedClass__";
  IdlTypeName2["TextClass"] = "__IDL_TextClass__";
  IdlTypeName2["IntClass"] = "__IDL_IntClass__";
  IdlTypeName2["NatClass"] = "__IDL_NatClass__";
  IdlTypeName2["FloatClass"] = "__IDL_FloatClass__";
  IdlTypeName2["FixedIntClass"] = "__IDL_FixedIntClass__";
  IdlTypeName2["FixedNatClass"] = "__IDL_FixedNatClass__";
  IdlTypeName2["VecClass"] = "__IDL_VecClass__";
  IdlTypeName2["OptClass"] = "__IDL_OptClass__";
  IdlTypeName2["RecordClass"] = "__IDL_RecordClass__";
  IdlTypeName2["TupleClass"] = "__IDL_TupleClass__";
  IdlTypeName2["VariantClass"] = "__IDL_VariantClass__";
  IdlTypeName2["RecClass"] = "__IDL_RecClass__";
  IdlTypeName2["PrincipalClass"] = "__IDL_PrincipalClass__";
  IdlTypeName2["FuncClass"] = "__IDL_FuncClass__";
  IdlTypeName2["ServiceClass"] = "__IDL_ServiceClass__";
})(IdlTypeName || (IdlTypeName = {}));
var Type = class {
  /* Display type name */
  display() {
    return this.name;
  }
  valueToString(x2) {
    return toReadableString(x2);
  }
  /* Implement `T` in the IDL spec, only needed for non-primitive types */
  buildTypeTable(typeTable) {
    if (!typeTable.has(this)) {
      this._buildTypeTableImpl(typeTable);
    }
  }
};
var PrimitiveType = class extends Type {
  checkType(t) {
    if (this.name !== t.name) {
      throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
    }
    return t;
  }
  _buildTypeTableImpl(_typeTable) {
  }
};
var ConstructType = class extends Type {
  checkType(t) {
    if (t instanceof RecClass) {
      const ty = t.getType();
      if (typeof ty === "undefined") {
        throw new CandidDecodeError("Type mismatch: cannot decode from uninitialized recursive type");
      }
      return ty;
    }
    throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
  }
  encodeType(typeTable) {
    return typeTable.indexOf(this.name);
  }
};
var EmptyClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.EmptyClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.EmptyClass;
  }
  accept(v2, d2) {
    return v2.visitEmpty(this, d2);
  }
  covariant(x2) {
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Empty);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
};
var UnknownClass = class extends Type {
  get typeName() {
    return IdlTypeName.UnknownClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.UnknownClass;
  }
  checkType(_t) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(v2, d2) {
    throw v2.visitType(this, d2);
  }
  covariant(x2) {
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue() {
    throw new Error("Unknown cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Unknown cannot appear as a value");
  }
  encodeType() {
    throw new Error("Unknown cannot be serialized");
  }
  decodeValue(b2, t) {
    let decodedValue = t.decodeValue(b2, t);
    if (Object(decodedValue) !== decodedValue) {
      decodedValue = Object(decodedValue);
    }
    let typeFunc;
    if (t instanceof RecClass) {
      typeFunc = () => t.getType();
    } else {
      typeFunc = () => t;
    }
    Object.defineProperty(decodedValue, "type", {
      value: typeFunc,
      writable: true,
      enumerable: false,
      configurable: true
    });
    return decodedValue;
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
};
var BoolClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.BoolClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.BoolClass;
  }
  accept(v2, d2) {
    return v2.visitBool(this, d2);
  }
  covariant(x2) {
    if (typeof x2 === "boolean") {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    return new Uint8Array([x2 ? 1 : 0]);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Bool);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    switch (safeReadUint8(b2)) {
      case 0:
        return false;
      case 1:
        return true;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
};
var NullClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.NullClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.NullClass;
  }
  accept(v2, d2) {
    return v2.visitNull(this, d2);
  }
  covariant(x2) {
    if (x2 === null) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Null);
  }
  decodeValue(_b, t) {
    this.checkType(t);
    return null;
  }
  get name() {
    return "null";
  }
};
var ReservedClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.ReservedClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.ReservedClass;
  }
  accept(v2, d2) {
    return v2.visitReserved(this, d2);
  }
  covariant(_x) {
    return true;
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Reserved);
  }
  decodeValue(b2, t) {
    if (t.name !== this.name) {
      t.decodeValue(b2, t);
    }
    return null;
  }
  get name() {
    return "reserved";
  }
};
var TextClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.TextClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.TextClass;
  }
  accept(v2, d2) {
    return v2.visitText(this, d2);
  }
  covariant(x2) {
    if (typeof x2 === "string") {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const buf = new TextEncoder().encode(x2);
    const len = lebEncode(buf.byteLength);
    return concat(len, buf);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Text);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    const len = lebDecode(b2);
    const buf = safeRead(b2, Number(len));
    const decoder = new TextDecoder("utf8", { fatal: true });
    return decoder.decode(buf);
  }
  get name() {
    return "text";
  }
  valueToString(x2) {
    return `"${x2}"`;
  }
};
var IntClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.IntClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.IntClass;
  }
  accept(v2, d2) {
    return v2.visitInt(this, d2);
  }
  covariant(x2) {
    if (typeof x2 === "bigint" || Number.isInteger(x2)) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    return slebEncode(x2);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Int);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    return slebDecode(b2);
  }
  get name() {
    return "int";
  }
  valueToString(x2) {
    return x2.toString();
  }
};
var NatClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.NatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.NatClass;
  }
  accept(v2, d2) {
    return v2.visitNat(this, d2);
  }
  covariant(x2) {
    if (typeof x2 === "bigint" && x2 >= BigInt(0) || Number.isInteger(x2) && x2 >= 0) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    return lebEncode(x2);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Nat);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    return lebDecode(b2);
  }
  get name() {
    return "nat";
  }
  valueToString(x2) {
    return x2.toString();
  }
};
var FloatClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FloatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FloatClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
    if (_bits !== 32 && _bits !== 64) {
      throw new Error("not a valid float type");
    }
  }
  accept(v2, d2) {
    return v2.visitFloat(this, d2);
  }
  covariant(x2) {
    if (typeof x2 === "number" || x2 instanceof Number) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const buf = new ArrayBuffer(this._bits / 8);
    const view = new DataView(buf);
    if (this._bits === 32) {
      view.setFloat32(0, x2, true);
    } else {
      view.setFloat64(0, x2, true);
    }
    return new Uint8Array(buf);
  }
  encodeType() {
    const opcode = this._bits === 32 ? IDLTypeIds.Float32 : IDLTypeIds.Float64;
    return slebEncode(opcode);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    const bytes = safeRead(b2, this._bits / 8);
    const view = uint8ToDataView(bytes);
    if (this._bits === 32) {
      return view.getFloat32(0, true);
    }
    return view.getFloat64(0, true);
  }
  get name() {
    return `float${this._bits}`;
  }
  valueToString(x2) {
    return x2.toString();
  }
};
var FixedIntClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FixedIntClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FixedIntClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
  }
  accept(v2, d2) {
    return v2.visitFixedInt(this, d2);
  }
  covariant(x2) {
    const min = iexp2(this._bits - 1) * BigInt(-1);
    const max = iexp2(this._bits - 1) - BigInt(1);
    if (typeof x2 === "bigint") {
      if (x2 >= min && x2 <= max) {
        return true;
      }
    } else if (Number.isInteger(x2)) {
      const v2 = BigInt(x2);
      if (v2 >= min && v2 <= max) {
        return true;
      }
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    return writeIntLE(x2, this._bits / 8);
  }
  encodeType() {
    const offset = Math.log2(this._bits) - 3;
    return slebEncode(-9 - offset);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    const num = readIntLE(b2, this._bits / 8);
    if (this._bits <= 32) {
      return Number(num);
    }
    return num;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(x2) {
    return x2.toString();
  }
};
var FixedNatClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FixedNatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FixedNatClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
  }
  accept(v2, d2) {
    return v2.visitFixedNat(this, d2);
  }
  covariant(x2) {
    const max = iexp2(this._bits);
    if (typeof x2 === "bigint" && x2 >= BigInt(0)) {
      if (x2 < max) {
        return true;
      }
    } else if (Number.isInteger(x2) && x2 >= 0) {
      const v2 = BigInt(x2);
      if (v2 < max) {
        return true;
      }
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    return writeUIntLE(x2, this._bits / 8);
  }
  encodeType() {
    const offset = Math.log2(this._bits) - 3;
    return slebEncode(-5 - offset);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    const num = readUIntLE(b2, this._bits / 8);
    if (this._bits <= 32) {
      return Number(num);
    }
    return num;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(x2) {
    return x2.toString();
  }
};
var VecClass = class _VecClass extends ConstructType {
  get typeName() {
    return IdlTypeName.VecClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.VecClass;
  }
  constructor(_type) {
    super();
    this._type = _type;
    this._blobOptimization = false;
    if (_type instanceof FixedNatClass && _type._bits === 8) {
      this._blobOptimization = true;
    }
  }
  accept(v2, d2) {
    return v2.visitVec(this, this._type, d2);
  }
  covariant(x2) {
    const bits = this._type instanceof FixedNatClass ? this._type._bits : this._type instanceof FixedIntClass ? this._type._bits : 0;
    if (ArrayBuffer.isView(x2) && bits == x2.BYTES_PER_ELEMENT * 8 || Array.isArray(x2) && x2.every((v2, idx) => {
      try {
        return this._type.covariant(v2);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${idx} -> ${e.message}`, { cause: e });
      }
    })) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const len = lebEncode(x2.length);
    if (this._blobOptimization) {
      return concat(len, new Uint8Array(x2));
    }
    if (ArrayBuffer.isView(x2)) {
      if (x2 instanceof Int16Array || x2 instanceof Uint16Array) {
        const buffer = new DataView(new ArrayBuffer(x2.length * 2));
        for (let i = 0; i < x2.length; i++) {
          if (x2 instanceof Int16Array) {
            buffer.setInt16(i * 2, x2[i], true);
          } else {
            buffer.setUint16(i * 2, x2[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      }
      if (x2 instanceof Int32Array || x2 instanceof Uint32Array) {
        const buffer = new DataView(new ArrayBuffer(x2.length * 4));
        for (let i = 0; i < x2.length; i++) {
          if (x2 instanceof Int32Array) {
            buffer.setInt32(i * 4, x2[i], true);
          } else {
            buffer.setUint32(i * 4, x2[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      }
      if (x2 instanceof BigInt64Array || x2 instanceof BigUint64Array) {
        const buffer = new DataView(new ArrayBuffer(x2.length * 8));
        for (let i = 0; i < x2.length; i++) {
          if (x2 instanceof BigInt64Array) {
            buffer.setBigInt64(i * 8, x2[i], true);
          } else {
            buffer.setBigUint64(i * 8, x2[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      }
      return concat(len, new Uint8Array(x2.buffer, x2.byteOffset, x2.byteLength));
    }
    const buf = new PipeArrayBuffer(new Uint8Array(len.byteLength + x2.length), 0);
    buf.write(len);
    for (const d2 of x2) {
      const encoded = this._type.encodeValue(d2);
      buf.write(new Uint8Array(encoded));
    }
    return buf.buffer;
  }
  _buildTypeTableImpl(typeTable) {
    this._type.buildTypeTable(typeTable);
    const opCode = slebEncode(IDLTypeIds.Vector);
    const buffer = this._type.encodeType(typeTable);
    typeTable.add(this, concat(opCode, buffer));
  }
  decodeValue(b2, t) {
    const vec = this.checkType(t);
    if (!(vec instanceof _VecClass)) {
      throw new CandidDecodeError(`Expected type '${this.display()}', but received non-vector type '${vec.display()}'`);
    }
    const len = readLen(b2);
    if (this._type instanceof FixedNatClass) {
      if (this._type._bits == 8) {
        return new Uint8Array(safeRead(b2, len));
      }
      if (this._type._bits == 16) {
        const bytes = safeRead(b2, len * 2);
        const u16 = new Uint16Array(bytes.buffer, bytes.byteOffset, len);
        return u16;
      }
      if (this._type._bits == 32) {
        const bytes = safeRead(b2, len * 4);
        const u32 = new Uint32Array(bytes.buffer, bytes.byteOffset, len);
        return u32;
      }
      if (this._type._bits == 64) {
        return new BigUint64Array(safeRead(b2, len * 8).buffer);
      }
    }
    if (this._type instanceof FixedIntClass) {
      if (this._type._bits == 8) {
        return new Int8Array(safeRead(b2, len));
      }
      if (this._type._bits == 16) {
        const bytes = safeRead(b2, len * 2);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new Int16Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getInt16(i * 2, true);
        }
        return result;
      }
      if (this._type._bits == 32) {
        const bytes = safeRead(b2, len * 4);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new Int32Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getInt32(i * 4, true);
        }
        return result;
      }
      if (this._type._bits == 64) {
        const bytes = safeRead(b2, len * 8);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new BigInt64Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getBigInt64(i * 8, true);
        }
        return result;
      }
    }
    chargeElements(len);
    const rets = [];
    for (let i = 0; i < len; i++) {
      rets.push(this._type.decodeValue(b2, vec._type));
    }
    return rets;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(x2) {
    const elements = x2.map((e) => this._type.valueToString(e));
    return `vec {${elements.join("; ")}}`;
  }
};
var OptClass = class _OptClass extends ConstructType {
  get typeName() {
    return IdlTypeName.OptClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.OptClass;
  }
  constructor(_type) {
    super();
    this._type = _type;
  }
  accept(v2, d2) {
    return v2.visitOpt(this, this._type, d2);
  }
  covariant(x2) {
    try {
      if (Array.isArray(x2) && (x2.length === 0 || x2.length === 1 && this._type.covariant(x2[0]))) {
        return true;
      }
    } catch (e) {
      throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)} 

-> ${e.message}`, { cause: e });
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    if (x2.length === 0) {
      return new Uint8Array([0]);
    }
    return concat(new Uint8Array([1]), this._type.encodeValue(x2[0]));
  }
  _buildTypeTableImpl(typeTable) {
    this._type.buildTypeTable(typeTable);
    const opCode = slebEncode(IDLTypeIds.Opt);
    const buffer = this._type.encodeType(typeTable);
    typeTable.add(this, concat(opCode, buffer));
  }
  decodeValue(b2, t) {
    if (t instanceof NullClass) {
      return [];
    }
    if (t instanceof ReservedClass) {
      return [];
    }
    let wireType = t;
    if (t instanceof RecClass) {
      const ty = t.getType();
      if (typeof ty === "undefined") {
        throw new CandidDecodeError("Type mismatch: cannot decode from uninitialized recursive type");
      } else {
        wireType = ty;
      }
    }
    if (wireType instanceof _OptClass) {
      switch (safeReadUint8(b2)) {
        case 0:
          return [];
        case 1: {
          const checkpoint = b2.save();
          try {
            const v2 = this._type.decodeValue(b2, wireType._type);
            return [v2];
          } catch (e) {
            b2.restore(checkpoint);
            wireType._type.decodeValue(b2, wireType._type);
            return [];
          }
        }
        default:
          throw new CandidDecodeError(`Invalid option value: expected 0 (None) or 1 (Some) for type '${this.display()}'`);
      }
    } else if (
      // this check corresponds to `not (null <: <t>)` in the spec
      this._type instanceof NullClass || this._type instanceof _OptClass || this._type instanceof ReservedClass
    ) {
      wireType.decodeValue(b2, wireType);
      return [];
    } else {
      const checkpoint = b2.save();
      try {
        const v2 = this._type.decodeValue(b2, t);
        return [v2];
      } catch (e) {
        b2.restore(checkpoint);
        wireType.decodeValue(b2, t);
        return [];
      }
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(x2) {
    if (x2.length === 0) {
      return "null";
    }
    return `opt ${this._type.valueToString(x2[0])}`;
  }
};
var RecordClass = class _RecordClass extends ConstructType {
  get typeName() {
    return IdlTypeName.RecordClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.RecordClass || instance.typeName === IdlTypeName.TupleClass;
  }
  constructor(fields2 = {}) {
    super();
    this._fields = Object.entries(fields2).sort((a2, b2) => idlLabelToId(a2[0]) - idlLabelToId(b2[0]));
  }
  accept(v2, d2) {
    return v2.visitRecord(this, this._fields, d2);
  }
  tryAsTuple() {
    const res = [];
    for (let i = 0; i < this._fields.length; i++) {
      const [key, type] = this._fields[i];
      if (key !== `_${i}_`) {
        return null;
      }
      res.push(type);
    }
    return res;
  }
  covariant(x2) {
    if (typeof x2 === "object" && this._fields.every(([k2, t]) => {
      if (!x2.hasOwnProperty(k2)) {
        throw new Error(`Record is missing key "${k2}".`);
      }
      try {
        return t.covariant(x2[k2]);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

field ${k2} -> ${e.message}`, {
          cause: e
        });
      }
    })) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const values = this._fields.map(([key]) => x2[key]);
    const bufs = zipWith(this._fields, values, ([, c2], d2) => c2.encodeValue(d2));
    return concat(...bufs);
  }
  _buildTypeTableImpl(T2) {
    this._fields.forEach(([_2, value]) => value.buildTypeTable(T2));
    const opCode = slebEncode(IDLTypeIds.Record);
    const len = lebEncode(this._fields.length);
    const fields2 = this._fields.map(([key, value]) => concat(lebEncode(idlLabelToId(key)), value.encodeType(T2)));
    T2.add(this, concat(opCode, len, concat(...fields2)));
  }
  decodeValue(b2, t) {
    const record = this.checkType(t);
    if (!(record instanceof _RecordClass)) {
      throw new CandidDecodeError(`Expected type '${this.display()}', but received non-record type '${record.display()}'`);
    }
    const x2 = {};
    chargeElements(record._fields.length);
    let expectedRecordIdx = 0;
    let actualRecordIdx = 0;
    while (actualRecordIdx < record._fields.length) {
      const [hash, type] = record._fields[actualRecordIdx];
      if (expectedRecordIdx >= this._fields.length) {
        type.decodeValue(b2, type);
        actualRecordIdx++;
        continue;
      }
      const [expectKey, expectType] = this._fields[expectedRecordIdx];
      const expectedId = idlLabelToId(this._fields[expectedRecordIdx][0]);
      const actualId = idlLabelToId(hash);
      if (expectedId === actualId) {
        x2[expectKey] = expectType.decodeValue(b2, type);
        expectedRecordIdx++;
        actualRecordIdx++;
      } else if (actualId > expectedId) {
        if (expectType instanceof OptClass || expectType instanceof ReservedClass) {
          x2[expectKey] = [];
          expectedRecordIdx++;
        } else {
          const expectedFields = this._fields.map(([name]) => name).join(", ");
          const receivedFields = record._fields.map(([name]) => name).join(", ");
          throw new CandidDecodeError(`Cannot find required field '${expectKey}' in record, expected fields: [${expectedFields}], received fields: [${receivedFields}]`);
        }
      } else {
        type.decodeValue(b2, type);
        actualRecordIdx++;
      }
    }
    for (const [expectKey, expectType] of this._fields.slice(expectedRecordIdx)) {
      if (expectType instanceof OptClass || expectType instanceof ReservedClass) {
        x2[expectKey] = [];
      } else {
        const expectedFields = this._fields.map(([name]) => name).join(", ");
        const receivedFields = record._fields.map(([name]) => name).join(", ");
        throw new CandidDecodeError(`Cannot find required field '${expectKey}' in record, expected fields: [${expectedFields}], received fields: [${receivedFields}]`);
      }
    }
    return x2;
  }
  get fieldsAsObject() {
    const fields2 = {};
    for (const [name, ty] of this._fields) {
      fields2[idlLabelToId(name)] = ty;
    }
    return fields2;
  }
  get name() {
    const fields2 = this._fields.map(([key, value]) => `${key}:${value.name}`);
    return `record {${fields2.join("; ")}}`;
  }
  display() {
    const fields2 = this._fields.map(([key, value]) => `${key}:${value.display()}`);
    return `record {${fields2.join("; ")}}`;
  }
  valueToString(x2) {
    const values = this._fields.map(([key]) => x2[key]);
    const fields2 = zipWith(this._fields, values, ([k2, c2], d2) => `${k2}=${c2.valueToString(d2)}`);
    return `record {${fields2.join("; ")}}`;
  }
};
var TupleClass = class _TupleClass extends RecordClass {
  get typeName() {
    return IdlTypeName.TupleClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.TupleClass;
  }
  constructor(_components) {
    const x2 = {};
    _components.forEach((e, i) => x2[`_${i}_`] = e);
    super(x2);
    this._components = _components;
  }
  accept(v2, d2) {
    return v2.visitTuple(this, this._components, d2);
  }
  covariant(x2) {
    if (Array.isArray(x2) && x2.length >= this._fields.length && this._components.every((t, i) => {
      try {
        return t.covariant(x2[i]);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${e.message}`, {
          cause: e
        });
      }
    })) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const bufs = zipWith(this._components, x2, (c2, d2) => c2.encodeValue(d2));
    return concat(...bufs);
  }
  decodeValue(b2, t) {
    const tuple = this.checkType(t);
    if (!(tuple instanceof _TupleClass)) {
      throw new CandidDecodeError(`Expected type '${this.display()}', but received non-tuple type '${tuple.display()}'`);
    }
    if (tuple._components.length < this._components.length) {
      throw new CandidDecodeError(`Tuple mismatch: expected ${this._components.length} components, but received ${tuple._components.length}`);
    }
    chargeElements(tuple._components.length);
    const res = [];
    for (const [i, wireType] of tuple._components.entries()) {
      if (i >= this._components.length) {
        wireType.decodeValue(b2, wireType);
      } else {
        res.push(this._components[i].decodeValue(b2, wireType));
      }
    }
    return res;
  }
  display() {
    const fields2 = this._components.map((value) => value.display());
    return `record {${fields2.join("; ")}}`;
  }
  valueToString(values) {
    const fields2 = zipWith(this._components, values, (c2, d2) => c2.valueToString(d2));
    return `record {${fields2.join("; ")}}`;
  }
};
var VariantClass = class _VariantClass extends ConstructType {
  get typeName() {
    return IdlTypeName.VariantClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.VariantClass;
  }
  constructor(fields2 = {}) {
    super();
    this._fields = Object.entries(fields2).sort((a2, b2) => idlLabelToId(a2[0]) - idlLabelToId(b2[0]));
  }
  accept(v2, d2) {
    return v2.visitVariant(this, this._fields, d2);
  }
  covariant(x2) {
    if (typeof x2 === "object" && Object.entries(x2).length === 1 && this._fields.every(([k2, v2]) => {
      try {
        return !x2.hasOwnProperty(k2) || v2.covariant(x2[k2]);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

variant ${k2} -> ${e.message}`, {
          cause: e
        });
      }
    })) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    for (let i = 0; i < this._fields.length; i++) {
      const [name, type] = this._fields[i];
      if (x2.hasOwnProperty(name)) {
        const idx = lebEncode(i);
        const buf = type.encodeValue(x2[name]);
        return concat(idx, buf);
      }
    }
    throw Error(`Variant has no data: ${x2}`);
  }
  _buildTypeTableImpl(typeTable) {
    this._fields.forEach(([, type]) => {
      type.buildTypeTable(typeTable);
    });
    const opCode = slebEncode(IDLTypeIds.Variant);
    const len = lebEncode(this._fields.length);
    const fields2 = this._fields.map(([key, value]) => concat(lebEncode(idlLabelToId(key)), value.encodeType(typeTable)));
    typeTable.add(this, concat(opCode, len, ...fields2));
  }
  decodeValue(b2, t) {
    const variant = this.checkType(t);
    if (!(variant instanceof _VariantClass)) {
      throw new CandidDecodeError(`Expected type '${this.display()}', but received non-variant type '${variant.display()}'`);
    }
    const idx = Number(lebDecode(b2));
    if (idx >= variant._fields.length) {
      throw Error(`Invalid variant index: ${idx}`);
    }
    const [wireHash, wireType] = variant._fields[idx];
    for (const [key, expectType] of this._fields) {
      if (idlLabelToId(wireHash) === idlLabelToId(key)) {
        const value = expectType.decodeValue(b2, wireType);
        return { [key]: value };
      }
    }
    const expectedFields = this._fields.map(([name]) => name).join(", ");
    throw new CandidDecodeError(`Cannot find field hash ${wireHash} in variant, expected fields: [${expectedFields}]`);
  }
  get name() {
    const fields2 = this._fields.map(([key, type]) => `${key}:${type.name}`);
    return `variant {${fields2.join("; ")}}`;
  }
  display() {
    const fields2 = this._fields.map(([key, type]) => key + (type.name === "null" ? "" : `:${type.display()}`));
    return `variant {${fields2.join("; ")}}`;
  }
  valueToString(x2) {
    for (const [name, type] of this._fields) {
      if (x2.hasOwnProperty(name)) {
        const value = type.valueToString(x2[name]);
        if (value === "null") {
          return `variant {${name}}`;
        }
        return `variant {${name}=${value}}`;
      }
    }
    throw new Error(`Variant has no data: ${x2}`);
  }
  get alternativesAsObject() {
    const alternatives = {};
    for (const [name, ty] of this._fields) {
      alternatives[idlLabelToId(name)] = ty;
    }
    return alternatives;
  }
};
var RecClass = class _RecClass extends ConstructType {
  constructor() {
    super(...arguments);
    this._id = _RecClass._counter++;
  }
  get typeName() {
    return IdlTypeName.RecClass;
  }
  static {
    this._counter = 0;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.RecClass;
  }
  accept(v2, d2) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return v2.visitRec(this, this._type, d2);
  }
  fill(t) {
    this._type = t;
  }
  getType() {
    return this._type;
  }
  covariant(x2) {
    if (this._type ? this._type.covariant(x2) : false) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.encodeValue(x2);
  }
  _buildTypeTableImpl(typeTable) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    typeTable.add(this, new Uint8Array([]));
    this._type.buildTypeTable(typeTable);
    typeTable.merge(this, this._type.name);
  }
  decodeValue(b2, t) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.decodeValue(b2, t);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return `\u03BC${this.name}.${this._type.name}`;
  }
  valueToString(x2) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.valueToString(x2);
  }
};
function decodePrincipalId(b2) {
  const x2 = safeReadUint8(b2);
  if (x2 !== 1) {
    throw new Error("Cannot decode principal");
  }
  const len = Number(lebDecode(b2));
  return Principal.fromUint8Array(new Uint8Array(safeRead(b2, len)));
}
var PrincipalClass = class extends PrimitiveType {
  get typeName() {
    return IdlTypeName.PrincipalClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.PrincipalClass;
  }
  accept(v2, d2) {
    return v2.visitPrincipal(this, d2);
  }
  covariant(x2) {
    if (x2 && x2._isPrincipal) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const buf = x2.toUint8Array();
    const len = lebEncode(buf.byteLength);
    return concat(new Uint8Array([1]), len, buf);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Principal);
  }
  decodeValue(b2, t) {
    this.checkType(t);
    return decodePrincipalId(b2);
  }
  get name() {
    return "principal";
  }
  valueToString(x2) {
    return `${this.name} "${x2.toText()}"`;
  }
};
var FuncClass = class extends ConstructType {
  get typeName() {
    return IdlTypeName.FuncClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FuncClass;
  }
  static argsToString(types, v2) {
    if (types.length !== v2.length) {
      throw new Error("arity mismatch");
    }
    return `(${types.map((t, i) => t.valueToString(v2[i])).join(", ")})`;
  }
  constructor(argTypes, retTypes, annotations = []) {
    super();
    this.argTypes = argTypes;
    this.retTypes = retTypes;
    this.annotations = annotations;
  }
  accept(v2, d2) {
    return v2.visitFunc(this, d2);
  }
  covariant(x2) {
    if (Array.isArray(x2) && x2.length === 2 && x2[0] && x2[0]._isPrincipal && typeof x2[1] === "string") {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue([principal, methodName]) {
    const buf = principal.toUint8Array();
    const len = lebEncode(buf.byteLength);
    const canister = concat(new Uint8Array([1]), len, buf);
    const method = new TextEncoder().encode(methodName);
    const methodLen = lebEncode(method.byteLength);
    return concat(new Uint8Array([1]), canister, methodLen, method);
  }
  _buildTypeTableImpl(T2) {
    this.argTypes.forEach((arg) => arg.buildTypeTable(T2));
    this.retTypes.forEach((arg) => arg.buildTypeTable(T2));
    const opCode = slebEncode(IDLTypeIds.Func);
    const argLen = lebEncode(this.argTypes.length);
    const args2 = concat(...this.argTypes.map((arg) => arg.encodeType(T2)));
    const retLen = lebEncode(this.retTypes.length);
    const rets = concat(...this.retTypes.map((arg) => arg.encodeType(T2)));
    const annLen = lebEncode(this.annotations.length);
    const anns = concat(...this.annotations.map((a2) => this.encodeAnnotation(a2)));
    T2.add(this, concat(opCode, argLen, args2, retLen, rets, annLen, anns));
  }
  decodeValue(b2, t) {
    const tt2 = t instanceof RecClass ? t.getType() ?? t : t;
    if (!subtype(tt2, this)) {
      throw new Error(`Cannot decode function reference at type ${this.display()} from wire type ${tt2.display()}`);
    }
    const x2 = safeReadUint8(b2);
    if (x2 !== 1) {
      throw new Error("Cannot decode function reference");
    }
    const canister = decodePrincipalId(b2);
    const mLen = Number(lebDecode(b2));
    const buf = safeRead(b2, mLen);
    const decoder = new TextDecoder("utf8", { fatal: true });
    const method = decoder.decode(buf);
    return [canister, method];
  }
  get name() {
    const args2 = this.argTypes.map((arg) => arg.name).join(", ");
    const rets = this.retTypes.map((arg) => arg.name).join(", ");
    const annon = ` ${this.annotations.join(" ")}`;
    return `(${args2}) -> (${rets})${annon}`;
  }
  valueToString([principal, str2]) {
    return `func "${principal.toText()}".${str2}`;
  }
  display() {
    const args2 = this.argTypes.map((arg) => arg.display()).join(", ");
    const rets = this.retTypes.map((arg) => arg.display()).join(", ");
    const annon = ` ${this.annotations.join(" ")}`;
    return `(${args2}) \u2192 (${rets})${annon}`;
  }
  encodeAnnotation(ann) {
    if (ann === "query") {
      return new Uint8Array([1]);
    }
    if (ann === "oneway") {
      return new Uint8Array([2]);
    }
    if (ann === "composite_query") {
      return new Uint8Array([3]);
    }
    throw new Error("Illegal function annotation");
  }
};
var ServiceClass = class extends ConstructType {
  get typeName() {
    return IdlTypeName.ServiceClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.ServiceClass;
  }
  constructor(fields2) {
    super();
    this._fields = Object.entries(fields2).sort((a2, b2) => {
      if (a2[0] < b2[0]) {
        return -1;
      }
      if (a2[0] > b2[0]) {
        return 1;
      }
      return 0;
    });
  }
  accept(v2, d2) {
    return v2.visitService(this, d2);
  }
  covariant(x2) {
    if (x2 && x2._isPrincipal) {
      return true;
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x2)}`);
  }
  encodeValue(x2) {
    const buf = x2.toUint8Array();
    const len = lebEncode(buf.length);
    return concat(new Uint8Array([1]), len, buf);
  }
  _buildTypeTableImpl(T2) {
    this._fields.forEach(([_2, func]) => func.buildTypeTable(T2));
    const opCode = slebEncode(IDLTypeIds.Service);
    const len = lebEncode(this._fields.length);
    const meths = this._fields.map(([label, func]) => {
      const labelBuf = new TextEncoder().encode(label);
      const labelLen = lebEncode(labelBuf.length);
      return concat(labelLen, labelBuf, func.encodeType(T2));
    });
    T2.add(this, concat(opCode, len, ...meths));
  }
  decodeValue(b2, t) {
    const tt2 = t instanceof RecClass ? t.getType() ?? t : t;
    if (!subtype(tt2, this)) {
      throw new Error(`Cannot decode service reference at type ${this.display()} from wire type ${tt2.display()}`);
    }
    return decodePrincipalId(b2);
  }
  get name() {
    const fields2 = this._fields.map(([key, value]) => `${key}:${value.name}`);
    return `service {${fields2.join("; ")}}`;
  }
  valueToString(x2) {
    return `service "${x2.toText()}"`;
  }
  fieldsAsObject() {
    const fields2 = {};
    for (const [name, ty] of this._fields) {
      fields2[name] = ty;
    }
    return fields2;
  }
};
function toReadableString(x2) {
  const str2 = JSON.stringify(x2, (_key, value) => typeof value === "bigint" ? `BigInt(${value})` : value);
  return str2 && str2.length > toReadableString_max ? `${str2.substring(0, toReadableString_max - 3)}...` : str2;
}
function encode(argTypes, args2) {
  if (args2.length < argTypes.length) {
    throw Error("Wrong number of message arguments");
  }
  const typeTable = new TypeTable();
  argTypes.forEach((t) => t.buildTypeTable(typeTable));
  const table = typeTable.encode();
  const len = lebEncode(args2.length);
  const typs = concat(...argTypes.map((t) => t.encodeType(typeTable)));
  const vals = concat(...zipWith(argTypes, args2, (t, x2) => {
    try {
      t.covariant(x2);
    } catch (e) {
      const err = new Error(`${e.message}

`);
      throw err;
    }
    return t.encodeValue(x2);
  }));
  return concat(magicNumberBytes, table, len, typs, vals);
}
function decode(retTypes, bytes) {
  const b2 = new PipeArrayBuffer(bytes);
  if (bytes.byteLength < magicNumber.length) {
    throw new Error("Message length smaller than magic number");
  }
  const magicBuffer = safeRead(b2, magicNumber.length);
  const magic = new TextDecoder().decode(magicBuffer);
  if (magic !== magicNumber) {
    throw new Error(`Wrong magic number: ${JSON.stringify(magic)}`);
  }
  function readTypeTable(pipe) {
    const typeTable = [];
    const len = Number(lebDecode(pipe));
    for (let i = 0; i < len; i++) {
      const ty = Number(slebDecode(pipe));
      switch (ty) {
        case IDLTypeIds.Opt:
        case IDLTypeIds.Vector: {
          const t = Number(slebDecode(pipe));
          typeTable.push([ty, t]);
          break;
        }
        case IDLTypeIds.Record:
        case IDLTypeIds.Variant: {
          const fields2 = [];
          let objectLength = Number(lebDecode(pipe));
          let prevHash;
          while (objectLength--) {
            const hash = Number(lebDecode(pipe));
            if (hash >= Math.pow(2, 32)) {
              throw new Error("field id out of 32-bit range");
            }
            if (typeof prevHash === "number" && prevHash >= hash) {
              throw new Error("field id collision or not sorted");
            }
            prevHash = hash;
            const t = Number(slebDecode(pipe));
            fields2.push([hash, t]);
          }
          typeTable.push([ty, fields2]);
          break;
        }
        case IDLTypeIds.Func: {
          const args2 = [];
          let argLength = Number(lebDecode(pipe));
          while (argLength--) {
            args2.push(Number(slebDecode(pipe)));
          }
          const returnValues = [];
          let returnValuesLength = Number(lebDecode(pipe));
          while (returnValuesLength--) {
            returnValues.push(Number(slebDecode(pipe)));
          }
          const annotations = [];
          let annotationLength = Number(lebDecode(pipe));
          while (annotationLength--) {
            const annotation = Number(lebDecode(pipe));
            switch (annotation) {
              case 1: {
                annotations.push("query");
                break;
              }
              case 2: {
                annotations.push("oneway");
                break;
              }
              case 3: {
                annotations.push("composite_query");
                break;
              }
              default:
                throw new Error("unknown annotation");
            }
          }
          typeTable.push([ty, [args2, returnValues, annotations]]);
          break;
        }
        case IDLTypeIds.Service: {
          let servLength = Number(lebDecode(pipe));
          const methods = [];
          while (servLength--) {
            const nameLength = Number(lebDecode(pipe));
            const funcName = new TextDecoder().decode(safeRead(pipe, nameLength));
            const funcType = slebDecode(pipe);
            methods.push([funcName, funcType]);
          }
          typeTable.push([ty, methods]);
          break;
        }
        default:
          throw new Error(`Illegal op_code: ${ty}`);
      }
    }
    const rawList = [];
    const length = Number(lebDecode(pipe));
    for (let i = 0; i < length; i++) {
      rawList.push(Number(slebDecode(pipe)));
    }
    return [typeTable, rawList];
  }
  const [rawTable, rawTypes] = readTypeTable(b2);
  if (rawTypes.length < retTypes.length) {
    throw new Error("Wrong number of return values");
  }
  const table = rawTable.map((_2) => Rec());
  function getType(t) {
    if (t < -24) {
      throw new Error("future value not supported");
    }
    if (t < 0) {
      switch (t) {
        case -1:
          return Null;
        case -2:
          return Bool;
        case -3:
          return Nat;
        case -4:
          return Int;
        case -5:
          return Nat8;
        case -6:
          return Nat16;
        case -7:
          return Nat32;
        case -8:
          return Nat64;
        case -9:
          return Int8;
        case -10:
          return Int16;
        case -11:
          return Int32;
        case -12:
          return Int64;
        case -13:
          return Float32;
        case -14:
          return Float64;
        case -15:
          return Text;
        case -16:
          return Reserved;
        case -17:
          return Empty;
        case -24:
          return Principal2;
        default:
          throw new Error(`Illegal op_code: ${t}`);
      }
    }
    if (t >= rawTable.length) {
      throw new Error("type index out of range");
    }
    return table[t];
  }
  function buildType(entry) {
    switch (entry[0]) {
      case IDLTypeIds.Vector: {
        const ty = getType(entry[1]);
        return Vec(ty);
      }
      case IDLTypeIds.Opt: {
        const ty = getType(entry[1]);
        return Opt(ty);
      }
      case IDLTypeIds.Record: {
        const fields2 = {};
        for (const [hash, ty] of entry[1]) {
          const name = `_${hash}_`;
          fields2[name] = getType(ty);
        }
        const record = Record(fields2);
        const tuple = record.tryAsTuple();
        if (Array.isArray(tuple)) {
          return Tuple(...tuple);
        }
        return record;
      }
      case IDLTypeIds.Variant: {
        const fields2 = {};
        for (const [hash, ty] of entry[1]) {
          const name = `_${hash}_`;
          fields2[name] = getType(ty);
        }
        return Variant(fields2);
      }
      case IDLTypeIds.Func: {
        const [args2, returnValues, annotations] = entry[1];
        return Func(args2.map((t) => getType(t)), returnValues.map((t) => getType(t)), annotations);
      }
      case IDLTypeIds.Service: {
        const rec = {};
        const methods = entry[1];
        for (const [name, typeRef] of methods) {
          let type = getType(typeRef);
          if (type instanceof RecClass) {
            type = type.getType();
          }
          if (!(type instanceof FuncClass)) {
            throw new Error("Illegal service definition: services can only contain functions");
          }
          rec[name] = type;
        }
        return Service(rec);
      }
      default:
        throw new Error(`Illegal op_code: ${entry[0]}`);
    }
  }
  rawTable.forEach((entry, i) => {
    if (entry[0] === IDLTypeIds.Func) {
      const t = buildType(entry);
      table[i].fill(t);
    }
  });
  rawTable.forEach((entry, i) => {
    if (entry[0] !== IDLTypeIds.Func) {
      const t = buildType(entry);
      table[i].fill(t);
    }
  });
  resetSubtypeCache();
  try {
    resetDecodeBudget(bytes.byteLength);
    const types = rawTypes.map((t) => getType(t));
    const output = retTypes.map((t, i) => {
      return t.decodeValue(b2, types[i]);
    });
    for (let ind = retTypes.length; ind < types.length; ind++) {
      types[ind].decodeValue(b2, types[ind]);
    }
    if (b2.byteLength > 0) {
      throw new Error("decode: Left-over bytes");
    }
    return output;
  } finally {
    resetSubtypeCache();
    releaseDecodeBudget();
  }
}
var Empty = new EmptyClass();
var Reserved = new ReservedClass();
var Unknown = new UnknownClass();
var Bool = new BoolClass();
var Null = new NullClass();
var Text = new TextClass();
var Int = new IntClass();
var Nat = new NatClass();
var Float32 = new FloatClass(32);
var Float64 = new FloatClass(64);
var Int8 = new FixedIntClass(8);
var Int16 = new FixedIntClass(16);
var Int32 = new FixedIntClass(32);
var Int64 = new FixedIntClass(64);
var Nat8 = new FixedNatClass(8);
var Nat16 = new FixedNatClass(16);
var Nat32 = new FixedNatClass(32);
var Nat64 = new FixedNatClass(64);
var Principal2 = new PrincipalClass();
function Tuple(...types) {
  return new TupleClass(types);
}
function Vec(t) {
  return new VecClass(t);
}
function Opt(t) {
  return new OptClass(t);
}
function Record(t) {
  return new RecordClass(t);
}
function Variant(fields2) {
  return new VariantClass(fields2);
}
function Rec() {
  return new RecClass();
}
function Func(args2, ret, annotations = []) {
  return new FuncClass(args2, ret, annotations);
}
function Service(t) {
  return new ServiceClass(t);
}
var Relations = class _Relations {
  constructor(relations = /* @__PURE__ */ new Map()) {
    this.rels = relations;
  }
  copy() {
    const copy = /* @__PURE__ */ new Map();
    for (const [key, value] of this.rels.entries()) {
      const valCopy = new Map(value);
      copy.set(key, valCopy);
    }
    return new _Relations(copy);
  }
  /// Returns whether we know for sure that a relation holds or doesn't (`true` or `false`), or
  /// if we don't know yet (`undefined`)
  known(t1, t2) {
    return this.rels.get(t1.name)?.get(t2.name);
  }
  addNegative(t1, t2) {
    this.addNames(t1.name, t2.name, false);
  }
  add(t1, t2) {
    this.addNames(t1.name, t2.name, true);
  }
  display() {
    let result = "";
    for (const [t1, v2] of this.rels) {
      for (const [t2, known] of v2) {
        const subty = known ? ":<" : "!<:";
        result += `${t1} ${subty} ${t2}
`;
      }
    }
    return result;
  }
  addNames(t1, t2, isSubtype) {
    const t1Map = this.rels.get(t1);
    if (t1Map == void 0) {
      const newMap = /* @__PURE__ */ new Map();
      newMap.set(t2, isSubtype);
      this.rels.set(t1, newMap);
    } else {
      t1Map.set(t2, isSubtype);
    }
  }
};
var subtypeCache = new Relations();
function resetSubtypeCache() {
  subtypeCache = new Relations();
}
function eqFunctionAnnotations(t1, t2) {
  const t1Annotations = new Set(t1.annotations);
  const t2Annotations = new Set(t2.annotations);
  if (t1Annotations.size !== t2Annotations.size) {
    return false;
  }
  for (const a2 of t1Annotations) {
    if (!t2Annotations.has(a2)) {
      return false;
    }
  }
  return true;
}
function canBeOmmitted(t) {
  return t instanceof OptClass || t instanceof NullClass || t instanceof ReservedClass;
}
function subtype(t1, t2) {
  const relations = subtypeCache.copy();
  const isSubtype = subtype_(relations, t1, t2);
  if (isSubtype) {
    subtypeCache.add(t1, t2);
  } else {
    subtypeCache.addNegative(t1, t2);
  }
  return isSubtype;
}
function subtype_(relations, t1, t2) {
  if (t1.name === t2.name) {
    return true;
  }
  const known = relations.known(t1, t2);
  if (known !== void 0) {
    return known;
  }
  relations.add(t1, t2);
  if (t2 instanceof ReservedClass) {
    return true;
  }
  if (t1 instanceof EmptyClass) {
    return true;
  }
  if (t1 instanceof NatClass && t2 instanceof IntClass) {
    return true;
  }
  if (t1 instanceof VecClass && t2 instanceof VecClass) {
    return subtype_(relations, t1._type, t2._type);
  }
  if (t2 instanceof OptClass) {
    return true;
  }
  if (t1 instanceof RecordClass && t2 instanceof RecordClass) {
    const t1Object = t1.fieldsAsObject;
    for (const [label, ty2] of t2._fields) {
      const ty1 = t1Object[idlLabelToId(label)];
      if (!ty1) {
        if (!canBeOmmitted(ty2)) {
          return false;
        }
      } else {
        if (!subtype_(relations, ty1, ty2)) {
          return false;
        }
      }
    }
    return true;
  }
  if (t1 instanceof FuncClass && t2 instanceof FuncClass) {
    if (!eqFunctionAnnotations(t1, t2)) {
      return false;
    }
    for (let i = 0; i < t1.argTypes.length; i++) {
      const argTy1 = t1.argTypes[i];
      if (i < t2.argTypes.length) {
        if (!subtype_(relations, t2.argTypes[i], argTy1)) {
          return false;
        }
      } else {
        if (!canBeOmmitted(argTy1)) {
          return false;
        }
      }
    }
    for (let i = 0; i < t2.retTypes.length; i++) {
      const retTy2 = t2.retTypes[i];
      if (i < t1.retTypes.length) {
        if (!subtype_(relations, t1.retTypes[i], retTy2)) {
          return false;
        }
      } else {
        if (!canBeOmmitted(retTy2)) {
          return false;
        }
      }
    }
    return true;
  }
  if (t1 instanceof VariantClass && t2 instanceof VariantClass) {
    const t2Object = t2.alternativesAsObject;
    for (const [label, ty1] of t1._fields) {
      const ty2 = t2Object[idlLabelToId(label)];
      if (!ty2) {
        return false;
      }
      if (!subtype_(relations, ty1, ty2)) {
        return false;
      }
    }
    return true;
  }
  if (t1 instanceof ServiceClass && t2 instanceof ServiceClass) {
    const t1Object = t1.fieldsAsObject();
    for (const [name, ty2] of t2._fields) {
      const ty1 = t1Object[name];
      if (!ty1) {
        return false;
      }
      if (!subtype_(relations, ty1, ty2)) {
        return false;
      }
    }
    return true;
  }
  if (t1 instanceof RecClass) {
    return subtype_(relations, t1.getType(), t2);
  }
  if (t2 instanceof RecClass) {
    return subtype_(relations, t1, t2.getType());
  }
  return false;
}

// node_modules/@icp-sdk/core/lib/esm/agent/agent/http/expiry.js
var JSON_KEY_EXPIRY = "__expiry__";
var SECONDS_TO_MILLISECONDS = BigInt(1e3);
var MILLISECONDS_TO_NANOSECONDS = BigInt(1e6);
var MINUTES_TO_SECONDS = BigInt(60);
var MINUTES_TO_MILLISECONDS = MINUTES_TO_SECONDS * SECONDS_TO_MILLISECONDS;
var EXPIRY_DELTA_THRESHOLD_MILLISECONDS = BigInt(1) * MINUTES_TO_MILLISECONDS;
function roundToSecond(millis) {
  return millis / SECONDS_TO_MILLISECONDS * SECONDS_TO_MILLISECONDS;
}
function roundToMinute(millis) {
  return millis / MINUTES_TO_MILLISECONDS * MINUTES_TO_MILLISECONDS;
}
var Expiry = class _Expiry {
  constructor(__expiry__) {
    this.__expiry__ = __expiry__;
    this._isExpiry = true;
  }
  /**
   * Creates an Expiry object from a delta in milliseconds.
   * The expiry is calculated as: current_time + delta + clock_drift
   * The resulting expiry is then rounded:
   * - If rounding down to the nearest minute still provides at least 60 seconds in the future, use minute precision
   * - Otherwise, use second precision
   * @param deltaInMs The milliseconds to add to the current time.
   * @param clockDriftInMs The milliseconds to add to the current time, typically the clock drift between IC network clock and the client's clock. Defaults to `0` if not provided.
   * @returns {Expiry} The constructed Expiry object.
   */
  static fromDeltaInMilliseconds(deltaInMs, clockDriftInMs = 0) {
    const correctedNowMs = BigInt(Date.now()) + BigInt(clockDriftInMs);
    const expiryMs = correctedNowMs + BigInt(deltaInMs);
    const roundedToMinute = roundToMinute(expiryMs);
    let roundedExpiryMs;
    if (roundedToMinute >= correctedNowMs + EXPIRY_DELTA_THRESHOLD_MILLISECONDS) {
      roundedExpiryMs = roundedToMinute;
    } else {
      const roundedToSecond = roundToSecond(expiryMs);
      roundedExpiryMs = roundedToSecond;
    }
    return new _Expiry(roundedExpiryMs * MILLISECONDS_TO_NANOSECONDS);
  }
  toBigInt() {
    return this.__expiry__;
  }
  toHash() {
    return lebEncode(this.__expiry__);
  }
  toString() {
    return this.__expiry__.toString();
  }
  /**
   * Serializes to JSON
   * @returns {JsonnableExpiry} a JSON object with a single key, {@link JSON_KEY_EXPIRY}, whose value is the expiry as a string
   */
  toJSON() {
    return { [JSON_KEY_EXPIRY]: this.toString() };
  }
  /**
   * Deserializes a {@link JsonnableExpiry} object from a JSON string.
   * @param input The JSON string to deserialize.
   * @returns {Expiry} The deserialized Expiry object.
   */
  static fromJSON(input) {
    const obj = JSON.parse(input);
    if (obj[JSON_KEY_EXPIRY]) {
      try {
        const expiry = BigInt(obj[JSON_KEY_EXPIRY]);
        return new _Expiry(expiry);
      } catch (error) {
        throw new InputError(new ExpiryJsonDeserializeErrorCode(`Not a valid BigInt: ${error}`));
      }
    }
    throw new InputError(new ExpiryJsonDeserializeErrorCode(`The input does not contain the key ${JSON_KEY_EXPIRY}`));
  }
  static isExpiry(other) {
    return other instanceof _Expiry || typeof other === "object" && other !== null && "_isExpiry" in other && other["_isExpiry"] === true && "__expiry__" in other && typeof other["__expiry__"] === "bigint";
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/cbor.js
function hasCborValueMethod(value) {
  return typeof value === "object" && value !== null && "toCborValue" in value;
}
function encode2(value) {
  try {
    const encoded = gt(value, (value2) => {
      if (Principal.isPrincipal(value2)) {
        return value2.toUint8Array();
      }
      if (Expiry.isExpiry(value2)) {
        return value2.toBigInt();
      }
      if (hasCborValueMethod(value2)) {
        return value2.toCborValue();
      }
      return value2;
    });
    return encoded.buffer instanceof ArrayBuffer ? encoded : encoded.slice();
  } catch (error) {
    throw InputError.fromCode(new CborEncodeErrorCode(error, value));
  }
}
function decode2(input) {
  try {
    return ut(input);
  } catch (error) {
    throw InputError.fromCode(new CborDecodeErrorCode(error, input));
  }
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/leb.js
var MILLISECOND_TO_NANOSECONDS = BigInt(1e6);
var decodeLeb128 = (buf) => {
  return lebDecode(new PipeArrayBuffer(buf));
};
var decodeTime = (buf) => {
  const timestampNs = decodeLeb128(buf);
  const timestampMs = timestampNs / MILLISECOND_TO_NANOSECONDS;
  return new Date(Number(timestampMs));
};

// node_modules/@noble/curves/utils.js
function aarray(item, title, inner = () => {
}) {
  if (!Array.isArray(item))
    throw new TypeError(`"${title}" expected array, got type=${typeof item}`);
  for (let i = 0; i < item.length; i++)
    inner(item[i], `${title}[${i}]`);
  return item;
}
var abytes2 = (value, length, title) => abytes(value, length, title);
var anumber2 = anumber;
function aobject2(value, title = "object") {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError(title === "object" ? "expected valid options object" : `"${title}" expected object, got type=${typeof value}`);
  return value;
}
function afunction(value, title) {
  if (typeof value !== "function")
    throw new TypeError(`"${title}" is invalid: expected function, got ${typeof value}`);
  return value;
}
var bytesToHex2 = bytesToHex;
var concatBytes2 = (...arrays) => concatBytes(...arrays);
var hexToBytes2 = (hex) => hexToBytes(hex);
var isBytes2 = isBytes;
var randomBytes3 = (bytesLength) => randomBytes2(bytesLength);
var _0n = /* @__PURE__ */ BigInt(0);
var _1n = /* @__PURE__ */ BigInt(1);
var atitle2 = (title) => title ? `"${title}" ` : "";
function abool(value, title = "") {
  if (typeof value !== "boolean")
    throw new TypeError(atitle2(title) + "expected boolean, got type=" + typeof value);
  return value;
}
function abignumber(n) {
  if (typeof n === "bigint") {
    if (!isPosBig(n))
      throw new RangeError("positive bigint expected, got " + n);
  } else
    anumber2(n);
  return n;
}
function asafenumber(value, title = "") {
  if (typeof value !== "number") {
    const prefix = title && `"${title}" `;
    throw new TypeError(prefix + "expected number, got type=" + typeof value);
  }
  if (!Number.isSafeInteger(value)) {
    const prefix = title && `"${title}" `;
    throw new RangeError(prefix + "expected safe integer, got " + value);
  }
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new TypeError("hex string expected, got " + typeof hex);
  return hex === "" ? _0n : BigInt("0x" + hex);
}
function bytesToNumberBE(bytes) {
  return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
  return hexToNumber(bytesToHex(copyBytes(abytes(bytes)).reverse()));
}
function numberToBytesBE(n, len) {
  anumber(len);
  if (len === 0)
    throw new Error("zero output length is invalid");
  n = abignumber(n);
  const expectedLen = len * 2;
  const hex = n.toString(16);
  if (hex.length > expectedLen)
    throw new RangeError("number is too large");
  return hexToBytes(hex.padStart(expectedLen, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function copyBytes(bytes) {
  return Uint8Array.from(abytes2(bytes));
}
function asciiToBytes(ascii) {
  if (typeof ascii !== "string")
    throw new TypeError("ascii string expected, got " + typeof ascii);
  return Uint8Array.from(ascii, (c2, i) => {
    const charCode = c2.charCodeAt(0);
    if (c2.length !== 1 || charCode > 127) {
      throw new RangeError(`string contains non-ASCII character "${ascii[i]}" with code ${charCode} at position ${i}`);
    }
    return charCode;
  });
}
function isPosBig(n) {
  return typeof n === "bigint" && _0n <= n;
}
function inRange(n, min, max) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
function aInRange(title, n, min, max) {
  if (!inRange(n, min, max))
    throw new RangeError("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
function bitLen(n) {
  if (n < _0n)
    throw new Error("expected non-negative bigint, got " + n);
  return n === _0n ? 0 : n.toString(2).length;
}
function bitGet(n, pos) {
  if (typeof n !== "bigint")
    throw new TypeError('"n" expected bigint, got type=' + typeof n);
  asafenumber(pos, "pos");
  return n >> BigInt(pos) & _1n;
}
var bitMask = (n) => {
  asafenumber(n, "n");
  return (_1n << BigInt(n)) - _1n;
};
function validateObject(object, fields2 = {}, optFields = {}, title = "object") {
  aobject2(object, title);
  aobject2(fields2, "fields");
  aobject2(optFields, "optFields");
  function checkField(fieldName, expectedType, isOpt) {
    const label = title === "object" ? `param "${String(fieldName)}"` : `"${title}.${String(fieldName)}"`;
    const val = object[fieldName];
    if (!Object.hasOwn(object, fieldName) && (isOpt ? val !== void 0 : expectedType !== "function")) {
      throw new TypeError(`${label} is invalid: expected own property`);
    }
    if (isOpt && val === void 0)
      return;
    const current = typeof val;
    if (current !== expectedType || val === null)
      throw new TypeError(`${label} is invalid: expected ${expectedType}, got ${current}`);
  }
  const iter = (f2, isOpt) => Object.entries(f2).forEach(([k2, v2]) => checkField(k2, v2, isOpt));
  iter(fields2, false);
  iter(optFields, true);
}
var notImplemented = () => {
  throw new Error("not implemented");
};

// node_modules/@noble/curves/abstract/modular.js
var _0n2 = /* @__PURE__ */ BigInt(0);
var _1n2 = /* @__PURE__ */ BigInt(1);
var _2n = /* @__PURE__ */ BigInt(2);
var _3n = /* @__PURE__ */ BigInt(3);
var _4n = /* @__PURE__ */ BigInt(4);
var _5n = /* @__PURE__ */ BigInt(5);
var _7n = /* @__PURE__ */ BigInt(7);
var _8n = /* @__PURE__ */ BigInt(8);
var _9n = /* @__PURE__ */ BigInt(9);
var _15n = /* @__PURE__ */ BigInt(15);
var _16n = /* @__PURE__ */ BigInt(16);
var POW_WINDOWED_MIN = /* @__PURE__ */ BigInt("0x10000000000000000");
function mod(a2, b2) {
  if (b2 <= _0n2)
    throw new Error("mod: expected positive modulus, got " + b2);
  const result = a2 % b2;
  return result >= _0n2 ? result : b2 + result;
}
function pow(num, power, modulo) {
  if (modulo <= _1n2)
    throw new Error("pow: expected modulus > 1, got " + modulo);
  if (typeof power !== "bigint")
    throw new TypeError("invalid exponent: expected bigint, got " + typeof power);
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return _1n2;
  if (power === _1n2)
    return num;
  let d2 = num % modulo;
  if (d2 < _0n2)
    d2 += modulo;
  if (power < POW_WINDOWED_MIN) {
    let p3 = _1n2;
    while (power > _0n2) {
      if (power & _1n2)
        p3 = p3 * d2 % modulo;
      d2 = d2 * d2 % modulo;
      power >>= _1n2;
    }
    return p3;
  }
  const digits = [];
  while (power > _0n2) {
    digits.push(Number(power & _15n));
    power >>= _4n;
  }
  const table = new Array(16);
  table[0] = _1n2;
  table[1] = d2;
  for (let i = 2; i < 16; i++)
    table[i] = table[i - 1] * d2 % modulo;
  let p2 = table[digits[digits.length - 1]];
  for (let w2 = digits.length - 2; w2 >= 0; w2--) {
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    p2 = p2 * p2 % modulo;
    const digit = digits[w2];
    if (digit !== 0)
      p2 = p2 * table[digit] % modulo;
  }
  return p2;
}
function pow2(x2, power, modulo) {
  if (modulo <= _1n2)
    throw new Error("pow2: expected modulus > 1, got " + modulo);
  if (power < _0n2)
    throw new Error("pow2: expected non-negative exponent, got " + power);
  let res = x2;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n2)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _1n2)
    throw new Error("invert: expected modulus > 1, got " + modulo);
  let a2 = mod(number, modulo);
  let b2 = modulo;
  let x2 = _0n2, u2 = _1n2;
  while (a2 !== _0n2) {
    const q2 = b2 / a2;
    const r2 = b2 - a2 * q2;
    const m2 = x2 - u2 * q2;
    b2 = a2, a2 = r2, x2 = u2, u2 = m2;
  }
  const gcd = b2;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function assertIsSquare(Fp4, root, n) {
  const F2 = Fp4;
  if (!F2.eql(F2.sqr(root), n))
    throw new Error("Cannot find square root");
}
function aoddModulus(order, fnName) {
  if ((order & _1n2) === _0n2)
    throw new Error(fnName + ": expected odd modulus, got " + order);
}
function sqrt3mod4(Fp4, n) {
  const F2 = Fp4;
  const p1div4 = (F2.ORDER + _1n2) / _4n;
  const root = F2.pow(n, p1div4);
  assertIsSquare(F2, root, n);
  return root;
}
function sqrt5mod8(Fp4, n) {
  const F2 = Fp4;
  const p5div8 = (F2.ORDER - _5n) / _8n;
  const n2 = F2.mul(n, _2n);
  const v2 = F2.pow(n2, p5div8);
  const nv = F2.mul(n, v2);
  const i = F2.mul(F2.mul(nv, _2n), v2);
  const root = F2.mul(nv, F2.sub(i, F2.ONE));
  assertIsSquare(F2, root, n);
  return root;
}
function sqrt9mod16(P3) {
  const Fp_ = Field(P3);
  const tn = tonelliShanks(P3);
  const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
  const c2 = tn(Fp_, c1);
  const c3 = tn(Fp_, Fp_.neg(c1));
  const c4 = (P3 + _7n) / _16n;
  return ((Fp4, n) => {
    const F2 = Fp4;
    let tv1 = F2.pow(n, c4);
    let tv2 = F2.mul(tv1, c1);
    const tv3 = F2.mul(tv1, c2);
    const tv4 = F2.mul(tv1, c3);
    const e1 = F2.eql(F2.sqr(tv2), n);
    const e2 = F2.eql(F2.sqr(tv3), n);
    tv1 = F2.cmov(tv1, tv2, e1);
    tv2 = F2.cmov(tv4, tv3, e2);
    const e3 = F2.eql(F2.sqr(tv2), n);
    const root = F2.cmov(tv1, tv2, e3);
    assertIsSquare(F2, root, n);
    return root;
  });
}
function tonelliShanks(P3) {
  if (P3 < _3n)
    throw new Error("sqrt is not defined for small field");
  aoddModulus(P3, "tonelliShanks");
  let Q2 = P3 - _1n2;
  let S2 = 0;
  while (Q2 % _2n === _0n2) {
    Q2 /= _2n;
    S2++;
  }
  let Z2 = _2n;
  const _Fp = Field(P3);
  while (FpLegendre(_Fp, Z2) === 1) {
    if (Z2++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S2 === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z2, Q2);
  const Q1div2 = (Q2 + _1n2) / _2n;
  return function tonelliSlow(Fp4, n) {
    const F2 = Fp4;
    if (F2.is0(n))
      return n;
    if (FpLegendre(F2, n) !== 1)
      throw new Error("Cannot find square root");
    let M2 = S2;
    let c2 = F2.mul(F2.ONE, cc);
    let t = F2.pow(n, Q2);
    let R2 = F2.pow(n, Q1div2);
    while (!F2.eql(t, F2.ONE)) {
      if (F2.is0(t))
        throw new Error("Cannot find square root: probably non-prime P");
      let i = 1;
      let t_tmp = F2.sqr(t);
      while (!F2.eql(t_tmp, F2.ONE)) {
        i++;
        t_tmp = F2.sqr(t_tmp);
        if (i === M2)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n2 << BigInt(M2 - i - 1);
      const b2 = F2.pow(c2, exponent);
      M2 = i;
      c2 = F2.sqr(b2);
      t = F2.mul(t, c2);
      R2 = F2.mul(R2, b2);
    }
    return R2;
  };
}
function FpSqrt(P3) {
  aoddModulus(P3, "Fp.sqrt");
  if (P3 % _4n === _3n)
    return sqrt3mod4;
  if (P3 % _8n === _5n)
    return sqrt5mod8;
  if (P3 % _16n === _9n)
    return sqrt9mod16(P3);
  return tonelliShanks(P3);
}
var isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n2) === _1n2;
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  aobject2(field, "field");
  if (typeof field.ORDER !== "bigint")
    throw new TypeError('param "ORDER" is invalid: expected bigint, got ' + typeof field.ORDER);
  asafenumber(field.BYTES, "BYTES");
  asafenumber(field.BITS, "BITS");
  for (const name of FIELD_FIELDS)
    afunction(field[name], "field." + name);
  if (field.BYTES < 1 || field.BITS < 1)
    throw new Error("invalid field: expected BYTES/BITS > 0");
  if (field.ORDER <= _1n2)
    throw new Error("invalid field: expected ORDER > 1, got " + field.ORDER);
  return field;
}
function FpPow(Fp4, num, power) {
  validateField(Fp4);
  const F2 = Fp4;
  if (typeof power !== "bigint")
    throw new TypeError("invalid exponent: expected bigint, got " + typeof power);
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return F2.ONE;
  if (power === _1n2)
    return num;
  if (power < POW_WINDOWED_MIN) {
    let p3 = F2.ONE;
    let d2 = num;
    while (power > _0n2) {
      if (power & _1n2)
        p3 = F2.mul(p3, d2);
      d2 = F2.sqr(d2);
      power >>= _1n2;
    }
    return p3;
  }
  const digits = [];
  while (power > _0n2) {
    digits.push(Number(power & _15n));
    power >>= _4n;
  }
  const table = new Array(16);
  table[0] = F2.ONE;
  table[1] = num;
  for (let i = 2; i < 16; i++)
    table[i] = F2.mul(table[i - 1], num);
  let p2 = table[digits[digits.length - 1]];
  for (let w2 = digits.length - 2; w2 >= 0; w2--) {
    p2 = F2.sqr(F2.sqr(F2.sqr(F2.sqr(p2))));
    const digit = digits[w2];
    if (digit !== 0)
      p2 = F2.mul(p2, table[digit]);
  }
  return p2;
}
function FpInvertBatch(Fp4, nums, passZero = false) {
  validateField(Fp4);
  aarray(nums, "nums");
  abool(passZero, "passZero");
  const F2 = Fp4;
  const inverted = new Array(nums.length).fill(passZero ? F2.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num, i) => {
    if (F2.is0(num))
      return acc;
    inverted[i] = acc;
    return F2.mul(acc, num);
  }, F2.ONE);
  const invertedAcc = F2.inv(multipliedAcc);
  nums.reduceRight((acc, num, i) => {
    if (F2.is0(num))
      return acc;
    inverted[i] = F2.mul(acc, inverted[i]);
    return F2.mul(acc, num);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp4, n) {
  validateField(Fp4);
  const F2 = Fp4;
  aoddModulus(F2.ORDER, "FpLegendre");
  const p1mod2 = (F2.ORDER - _1n2) / _2n;
  const powered = F2.pow(n, p1mod2);
  const yes = F2.eql(powered, F2.ONE);
  const zero = F2.eql(powered, F2.ZERO);
  const no = F2.eql(powered, F2.neg(F2.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function FpIsSquare(Fp4, n) {
  const l2 = FpLegendre(Fp4, n);
  return l2 !== -1;
}
function nLength(n, nBitLength) {
  if (nBitLength !== void 0)
    anumber2(nBitLength);
  if (n <= _0n2)
    throw new Error("invalid n length: expected positive n, got " + n);
  if (nBitLength !== void 0 && nBitLength < 1)
    throw new Error("invalid n length: expected positive bit length, got " + nBitLength);
  const bits = bitLen(n);
  if (nBitLength !== void 0 && nBitLength < bits)
    throw new Error(`invalid n length: expected nBitLength (${nBitLength}) >= bitLen(n) (${bits})`);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : bits;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
var FIELD_SQRT = /* @__PURE__ */ new WeakMap();
var _Field = class {
  ORDER;
  BITS;
  BYTES;
  isLE;
  ZERO = _0n2;
  ONE = _1n2;
  _lengths;
  _mod;
  constructor(ORDER, opts = {}) {
    if (ORDER <= _1n2)
      throw new Error("invalid field: expected ORDER > 1, got " + ORDER);
    let _nbitLength = void 0;
    this.isLE = false;
    if (opts != null && typeof opts === "object") {
      if (typeof opts.BITS === "number")
        _nbitLength = opts.BITS;
      if (typeof opts.sqrt === "function")
        Object.defineProperty(this, "sqrt", { value: opts.sqrt, enumerable: true });
      if (typeof opts.isLE === "boolean")
        this.isLE = opts.isLE;
      if (opts.allowedLengths)
        this._lengths = Object.freeze(opts.allowedLengths.slice());
      if (typeof opts.modFromBytes === "boolean")
        this._mod = opts.modFromBytes;
    }
    const { nBitLength, nByteLength } = nLength(ORDER, _nbitLength);
    if (nByteLength > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    this.ORDER = ORDER;
    this.BITS = nBitLength;
    this.BYTES = nByteLength;
    Object.freeze(this);
  }
  create(num) {
    return mod(num, this.ORDER);
  }
  isValid(num) {
    if (typeof num !== "bigint")
      throw new TypeError("invalid field element: expected bigint, got " + typeof num);
    return _0n2 <= num && num < this.ORDER;
  }
  is0(num) {
    return num === _0n2;
  }
  // is valid and invertible
  isValidNot0(num) {
    return !this.is0(num) && this.isValid(num);
  }
  isOdd(num) {
    return (num & _1n2) === _1n2;
  }
  neg(num) {
    return mod(-num, this.ORDER);
  }
  eql(lhs, rhs) {
    return lhs === rhs;
  }
  sqr(num) {
    return mod(num * num, this.ORDER);
  }
  add(lhs, rhs) {
    return mod(lhs + rhs, this.ORDER);
  }
  sub(lhs, rhs) {
    return mod(lhs - rhs, this.ORDER);
  }
  mul(lhs, rhs) {
    return mod(lhs * rhs, this.ORDER);
  }
  pow(num, power) {
    return pow(num, power, this.ORDER);
  }
  div(lhs, rhs) {
    return mod(lhs * invert(rhs, this.ORDER), this.ORDER);
  }
  // Same as above, but doesn't normalize
  sqrN(num) {
    return num * num;
  }
  addN(lhs, rhs) {
    return lhs + rhs;
  }
  subN(lhs, rhs) {
    return lhs - rhs;
  }
  mulN(lhs, rhs) {
    return lhs * rhs;
  }
  inv(num) {
    return invert(num, this.ORDER);
  }
  sqrt(num) {
    let sqrt = FIELD_SQRT.get(this);
    if (!sqrt)
      FIELD_SQRT.set(this, sqrt = FpSqrt(this.ORDER));
    return sqrt(this, num);
  }
  toBytes(num) {
    return this.isLE ? numberToBytesLE(num, this.BYTES) : numberToBytesBE(num, this.BYTES);
  }
  fromBytes(bytes, skipValidation = false) {
    abytes2(bytes);
    const { _lengths: allowedLengths, BYTES, isLE, ORDER, _mod: modFromBytes } = this;
    if (allowedLengths) {
      if (bytes.length < 1 || !allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
        throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
      }
      const padded = new Uint8Array(BYTES);
      padded.set(bytes, isLE ? 0 : padded.length - bytes.length);
      bytes = padded;
    }
    if (bytes.length !== BYTES)
      throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
    let scalar = isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    if (modFromBytes)
      scalar = mod(scalar, ORDER);
    if (!skipValidation) {
      if (!this.isValid(scalar))
        throw new Error("invalid field element: outside of range 0..ORDER");
    }
    return scalar;
  }
  // TODO: we don't need it here, move out to separate fn
  invertBatch(lst) {
    return FpInvertBatch(this, lst, true);
  }
  // We can't move this out because Fp6, Fp12 implement it
  // and it's unclear what to return in there.
  cmov(a2, b2, condition) {
    abool(condition, "condition");
    return condition ? b2 : a2;
  }
};
function Field(ORDER, opts = {}) {
  Object.freeze(_Field.prototype);
  return new _Field(ORDER, opts);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  if (fieldOrder <= _1n2)
    throw new Error("field order must be greater than 1");
  const bitLength = bitLen(fieldOrder - _1n2);
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
  abytes2(key);
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = Math.max(getMinHashLength(fieldOrder), 16);
  if (len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num = isLE ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num, fieldOrder - _1n2) + _1n2;
  return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/@noble/curves/abstract/curve.js
var _0n3 = /* @__PURE__ */ BigInt(0);
var _1n3 = /* @__PURE__ */ BigInt(1);
var _4n2 = /* @__PURE__ */ BigInt(4);
var BLIND_BYTES = 16;
var BLIND_BITS = 128;
var FW_WINDOW = 5;
var TABLE_BYTES_MAX = /* @__PURE__ */ (() => 2 ** 31)();
function validatePointCons(Point) {
  const pc = Point;
  if (typeof pc !== "function")
    throw new TypeError('"Point" expected constructor, got type=' + typeof Point);
  afunction(pc.fromAffine, "Point.fromAffine");
  afunction(pc.fromBytes, "Point.fromBytes");
  afunction(pc.fromHex, "Point.fromHex");
  aobject2(pc.BASE, "Point.BASE");
  aobject2(pc.ZERO, "Point.ZERO");
  validateField(pc.Fp);
  validateField(pc.Fn);
}
function normalizeZ(c2, points) {
  validatePointCons(c2);
  validateMSMPoints(points, c2);
  const invertedZs = FpInvertBatch(c2.Fp, points.map((p2) => p2.Z));
  return points.map((p2, i) => c2.fromAffine(p2.toAffine(invertedZs[i])));
}
function validateW(W2, bits, min = 1) {
  if (!Number.isSafeInteger(W2) || W2 < min || W2 > bits)
    throw new Error("invalid window size, expected [" + min + ".." + bits + "], got W=" + W2);
}
function validateTableBytes(numPoints, fpBytes) {
  const bytes = numPoints * (4 * fpBytes + 128);
  if (bytes > TABLE_BYTES_MAX)
    throw new Error("invalid window size: table would need ~" + Math.ceil(bytes / 2 ** 20) + " MiB, max " + TABLE_BYTES_MAX / 2 ** 20 + " MiB");
}
function probeRandomBytes(randomBytes6, length) {
  if (randomBytes6 === void 0)
    return void 0;
  afunction(randomBytes6, "randomBytes");
  try {
    const probe = randomBytes6(length);
    if (!isBytes2(probe) || probe.length !== length)
      return void 0;
  } catch {
    return void 0;
  }
  return randomBytes6;
}
function validateMSMPoints(points, c2) {
  aarray(points, "points");
  points.forEach((p2, i) => {
    if (!(p2 instanceof c2))
      throw new Error("invalid point at index " + i);
  });
}
function validateMSMScalars(scalars, field, maxScalar) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    const ok = maxScalar === void 0 ? field.isValid(s) : isPosBig(s) && s < maxScalar;
    if (!ok)
      throw new Error("invalid scalar at index " + i);
  });
}
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getWindowSize(P3) {
  return pointWindowSizes.get(P3) || 1;
}
function oddMultiples(p2, size) {
  const dbl = p2.double();
  const t = [p2];
  for (let j2 = 1; j2 < size; j2++)
    t.push(t[j2 - 1].add(dbl));
  return t;
}
function wnafDigits(n, W2) {
  const size = 2 ** W2;
  const half = size / 2;
  const mask = BigInt(size - 1);
  const d2 = [];
  while (n > _0n3) {
    let w2 = 0;
    if (n & _1n3) {
      w2 = Number(n & mask);
      if (w2 >= half)
        w2 -= size;
      n -= BigInt(w2);
    }
    d2.push(w2);
    n >>= _1n3;
  }
  return d2;
}
function signedWindowDigits(n, W2, windows) {
  const size = 2 ** W2;
  const half = size / 2;
  const mask = BigInt(size - 1);
  const shiftBy = BigInt(W2);
  const d2 = [];
  for (let w2 = 0; w2 < windows; w2++) {
    let v2 = Number(n & mask);
    n >>= shiftBy;
    if (v2 > half) {
      v2 -= size;
      n += _1n3;
    }
    d2.push(v2);
  }
  if (n !== _0n3)
    throw new Error("invalid wnaf");
  return d2;
}
function wnafWalk(zero, tables, digits) {
  let max = 0;
  for (const d2 of digits)
    max = Math.max(max, d2.length);
  let acc = zero;
  for (let bit = max - 1; bit >= 0; bit--) {
    if (bit !== max - 1)
      acc = acc.double();
    for (let i = 0; i < digits.length; i++) {
      const w2 = digits[i][bit];
      if (w2) {
        const item = tables[i][Math.abs(w2) - 1 >> 1];
        acc = acc.add(w2 < 0 ? item.negate() : item);
      }
    }
  }
  return acc;
}
var ScalarMultiplier = class {
  Point;
  BASE;
  ZERO;
  randomBytes;
  wnafPrecomputes = /* @__PURE__ */ new WeakMap();
  baseCanBeBlinded;
  bits;
  // Parametrized with a given Point class (not individual point)
  constructor(Point, randomBytes6) {
    validatePointCons(Point);
    this.randomBytes = probeRandomBytes(randomBytes6, BLIND_BYTES);
    this.Point = Point;
    this.BASE = Point.BASE;
    this.ZERO = Point.ZERO;
    this.bits = Point.Fn.BITS;
  }
  /**
   * Creates a signed fixed-window wNAF precomputation table: for every window w, the
   * multiples `[1..2^(W−1)]⋅2^(w⋅W)⋅P`, flattened. All doublings are baked into the table,
   * so cached multiplication is additions-only. `windows = ceil(bits/W) + 1`: the extra
   * window absorbs the final carry of signed-digit recoding.
   * For a 256-bit curve and W=6, the table is 44⋅32 = 1408 points.
   * @param point - Point instance
   * @param W - window size
   * @param bits - scalar bitlength the table must cover
   */
  buildWnafTable(point, W2, bits) {
    const windows = Math.ceil(bits / W2) + 1;
    const half = 2 ** (W2 - 1);
    const comp = [];
    let base = point;
    for (let w2 = 0; w2 < windows; w2++) {
      let acc = base;
      for (let i = 0; i < half; i++) {
        comp.push(acc);
        acc = acc.add(base);
      }
      base = comp[comp.length - 1].double();
    }
    return { W: W2, bits, windows, comp };
  }
  /**
   * Implements ec multiplication using precomputed signed fixed-window wNAF tables.
   * Constant-time: fixed window count with one table addition per window — zero digits feed
   * the fake accumulator — and no doublings; the lookup scans the whole window slice.
   * Scalar bounds are validated by the public entry points ({@link ScalarMultiplier.mulCT},
   * {@link ScalarMultiplier.mulCTBlinded}, {@link ScalarMultiplier.mulUnsafe});
   * signedWindowDigits throws if `n` exceeds the table.
   * @returns real and fake (for const-time) points
   */
  wnafCachedCT(precomputes, n) {
    const { W: W2, windows, comp } = precomputes;
    const half = 2 ** (W2 - 1);
    const digits = signedWindowDigits(n, W2, windows);
    let p2 = this.ZERO;
    let f2 = this.BASE;
    for (let w2 = 0; w2 < windows; w2++) {
      const digit = digits[w2];
      const start = w2 * half;
      const idx = Math.abs(digit) - 1;
      let sel = comp[start];
      for (let i = 1; i < half; i++)
        sel = i === idx ? comp[start + i] : sel;
      const neg = sel.negate();
      if (digit === 0)
        f2 = f2.add(comp[start]);
      else
        p2 = p2.add(digit < 0 ? neg : sel);
    }
    return { p: p2, f: f2 };
  }
  // Cache key is point identity plus (W, bits); at most two entries exist per point (public-width
  // `Fn.BITS` and blinded `Fn.BITS + BLIND_BITS`). Callers must not reuse the same point with
  // incompatible `transform(...)` layouts and expect a separate cache entry.
  getWnafPrecomputes(W2, point, bits, transform) {
    let entries = this.wnafPrecomputes.get(point);
    let comp = entries?.find((entry) => entry.W === W2 && entry.bits === bits);
    if (!comp) {
      comp = this.buildWnafTable(point, W2, bits);
      if (typeof transform === "function")
        comp = { ...comp, comp: transform(comp.comp) };
      if (!entries) {
        entries = [];
        this.wnafPrecomputes.set(point, entries);
      }
      entries.push(comp);
    }
    return comp;
  }
  assertPoint(point) {
    if (!(point instanceof this.Point))
      throw new TypeError('"point" expected Point instance, got type=' + typeof point);
  }
  // Shared prologue of the constant-time entry points. Rejects scalar 0: in key/signature-style
  // callers a zero scalar means broken upstream plumbing, and concrete Points already reject it.
  // Uses inRange instead of Fn.isValidNot0: validateField() only certifies the arithmetic subset.
  validateMulInput(point, scalar) {
    this.assertPoint(point);
    if (!inRange(scalar, _1n3, this.Point.Fn.ORDER))
      throw new Error("invalid scalar");
  }
  // Constant-time dispatch shared by mulCT / mulCTBlinded. Un-precomputed points (W===1, e.g.
  // ECDH peer keys) skip building a throwaway cached table in favor of a small fixed-window
  // multiply. `n` must be < 2^bits.
  runCT(point, n, bits, transform) {
    const W2 = getWindowSize(point);
    if (W2 === 1)
      return this.fixedWindowCT(point, n, bits);
    return this.wnafCachedCT(this.getWnafPrecomputes(W2, point, bits, transform), n);
  }
  mulCT(point, scalar, transform) {
    this.validateMulInput(point, scalar);
    return this.runCT(point, scalar, this.bits, transform);
  }
  mulCTBlinded(point, scalar, transform) {
    this.validateMulInput(point, scalar);
    if (this.randomBytes === void 0)
      throw new Error("randomBytes is required for scalar blinding");
    const bits = this.Point.Fn.BITS + BLIND_BITS;
    const blind = this.randomBytes(BLIND_BYTES);
    if (!isBytes2(blind) || blind.length !== BLIND_BYTES)
      throw new Error("randomBytes returned invalid byte array");
    blind[0] = blind[0] & 63 | 128;
    const n = scalar + bytesToNumberBE(blind) * this.Point.Fn.ORDER;
    return this.runCT(point, n, bits, transform);
  }
  /**
   * Constant-time multiplication `n*point` for an un-precomputed point, via a small fixed window.
   * A cached wNAF table only pays off when reused; a flat 2^FW_WINDOW table (`size-1` adds) is
   * far cheaper to build for a single use. The point-operation sequence is independent of `n`:
   * build the table, then per window exactly FW_WINDOW doublings, a data-oblivious scan over
   * every table entry, and one addition (adds the identity when the window digit is 0 — never
   * skipped).
   *
   * `n` must be `< 2^bits`. Assumes complete addition (adding the identity costs the same as any
   * add), which holds for the Weierstrass/Edwards point types used here. The table is left in
   * projective form (no normalizeZ): normalizing this small a table costs more than the
   * mixed-add savings it would buy for a single multiply.
   * @returns real point `p`; `f` duplicates it only to match {@link wnafCachedCT}'s return shape
   * (this path needs no fake accumulator — its op-count is already scalar-independent).
   */
  fixedWindowCT(point, n, bits) {
    const W2 = FW_WINDOW;
    const size = 1 << W2;
    const mask = bitMask(W2);
    const table = new Array(size);
    table[0] = this.ZERO;
    for (let i = 1; i < size; i++)
      table[i] = table[i - 1].add(point);
    const windows = Math.ceil(bits / W2);
    let acc = this.ZERO;
    for (let window2 = windows - 1; window2 >= 0; window2--) {
      if (window2 !== windows - 1)
        for (let d2 = 0; d2 < W2; d2++)
          acc = acc.double();
      const digit = Number(n >> BigInt(window2 * W2) & mask);
      let sel = table[0];
      for (let i = 1; i < size; i++)
        sel = i === digit ? table[i] : sel;
      acc = acc.add(sel);
    }
    return { p: acc, f: acc };
  }
  shouldBlind(point, cofactor) {
    if (this.randomBytes === void 0)
      return false;
    if (cofactor === _1n3)
      return true;
    if (point !== this.BASE)
      return false;
    if (this.baseCanBeBlinded === void 0)
      this.baseCanBeBlinded = this.mulUnsafe(this.BASE, this.Point.Fn.ORDER).is0();
    return this.baseCanBeBlinded;
  }
  mulSecret(point, scalar, cofactor, transform) {
    return this.shouldBlind(point, cofactor) ? this.mulCTBlinded(point, scalar, transform) : this.mulCT(point, scalar, transform);
  }
  mulUnsafe(point, scalar, transform) {
    this.assertPoint(point);
    if (!isPosBig(scalar))
      throw new Error("invalid scalar");
    const W2 = getWindowSize(point);
    if (W2 === 1 || scalar >= this.Point.Fn.ORDER)
      return mulAddUnsafe(this.Point, [point], [scalar], true);
    const precomputes = this.getWnafPrecomputes(W2, point, this.bits, transform);
    return this.wnafCachedCT(precomputes, scalar).p;
  }
  // Remembers the window size used for precomputed wNAF multiplication of the given point
  // and drops any previously built tables. Usually only the base point is precomputed.
  // W=1 resets the point to the un-precomputed (table-less) paths.
  // W is additionally capped so tables stay under ~2 GiB ({@link TABLE_BYTES_MAX}).
  setWindowSize(point, W2) {
    this.assertPoint(point);
    validateW(W2, this.bits);
    const windows = Math.ceil((this.bits + BLIND_BITS) / W2) + 1;
    validateTableBytes(windows * 2 ** (W2 - 1), this.Point.Fp.BYTES);
    pointWindowSizes.set(point, W2);
    this.wnafPrecomputes.delete(point);
  }
  // True when a window size is set: tables themselves are built lazily on first multiply.
  hasWindowSize(point) {
    return getWindowSize(point) !== 1;
  }
};
function mulAddUnsafe(c2, points, scalars, allowOversized = false) {
  validatePointCons(c2);
  validateMSMPoints(points, c2);
  abool(allowOversized, "allowOversized");
  validateMSMScalars(scalars, c2.Fn, allowOversized ? c2.Fn.ORDER ** _4n2 : void 0);
  if (points.length !== scalars.length)
    throw new Error("arrays of points and scalars must have equal length");
  const tables = points.map((p2) => oddMultiples(p2, 4));
  const digits = scalars.map((n) => wnafDigits(n, 4));
  return wnafWalk(c2.ZERO, tables, digits);
}
function createField(order, field, isLE) {
  if (field) {
    if (field.ORDER !== order)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    validateField(field);
    return field;
  } else {
    return Field(order, { isLE });
  }
}
function createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
  if (type !== "weierstrass" && type !== "edwards")
    throw new Error('expected curve type "weierstrass" or "edwards"');
  if (FpFnLE === void 0)
    FpFnLE = type === "edwards";
  if (!CURVE || typeof CURVE !== "object")
    throw new Error(`expected valid ${type} CURVE object`);
  validateObject(curveOpts);
  for (const p2 of ["p", "n", "h"]) {
    const val = CURVE[p2];
    if (!(isPosBig(val) && val !== _0n3))
      throw new Error(`CURVE.${p2} must be positive bigint`);
  }
  const Fp4 = createField(CURVE.p, curveOpts.Fp, FpFnLE);
  const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
  const _b = type === "weierstrass" ? "b" : "d";
  const params = ["Gx", "Gy", "a", _b];
  for (const p2 of params) {
    if (!Fp4.isValid(CURVE[p2]))
      throw new Error(`CURVE.${p2} must be valid field element of CURVE.Fp`);
  }
  CURVE = Object.freeze(Object.assign({}, CURVE));
  return { CURVE, Fp: Fp4, Fn };
}
function createKeygen(randomSecretKey, getPublicKey) {
  return function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey(secretKey) };
  };
}

// node_modules/@noble/curves/abstract/hash-to-curve.js
var _0n4 = /* @__PURE__ */ BigInt(0);
var _1n4 = /* @__PURE__ */ BigInt(1);
var _2n2 = /* @__PURE__ */ BigInt(2);
var _3n2 = /* @__PURE__ */ BigInt(3);
var _4n3 = /* @__PURE__ */ BigInt(4);
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  asafenumber(value);
  asafenumber(length);
  if (length < 0 || length > 4)
    throw new Error("invalid I2OSP length: " + length);
  if (value < 0 || value > 2 ** (8 * length) - 1)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a2, b2) {
  const arr = new Uint8Array(a2.length);
  for (let i = 0; i < a2.length; i++) {
    arr[i] = a2[i] ^ b2[i];
  }
  return arr;
}
function normDST(DST) {
  if (!isBytes2(DST) && typeof DST !== "string")
    throw new Error("DST must be Uint8Array or ascii string");
  const dst = typeof DST === "string" ? asciiToBytes(DST) : DST;
  if (dst.length === 0)
    throw new Error("DST must be non-empty");
  return dst;
}
function expand_message_xmd(msg, DST, lenInBytes, H2) {
  abytes2(msg);
  asafenumber(lenInBytes);
  if (typeof H2 !== "function")
    throw new Error("expand_message_xmd: expected hash function");
  asafenumber(H2.outputLen, "hash.outputLen");
  asafenumber(H2.blockLen, "hash.blockLen");
  DST = normDST(DST);
  if (DST.length > 255)
    DST = H2(concatBytes2(asciiToBytes("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H2;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes2(DST, i2osp(DST.length, 1));
  const Z_pad = new Uint8Array(r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b2 = new Array(ell);
  const b_0 = H2(concatBytes2(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b2[0] = H2(concatBytes2(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i < ell; i++) {
    const args2 = [strxor(b_0, b2[i - 1]), i2osp(i + 1, 1), DST_prime];
    b2[i] = H2(concatBytes2(...args2));
  }
  const pseudo_random_bytes = concatBytes2(...b2);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k2, H2) {
  abytes2(msg);
  asafenumber(lenInBytes);
  asafenumber(k2, "k");
  if (k2 < 0)
    throw new Error("expand_message_xof: invalid k");
  if (typeof H2 !== "function")
    throw new Error("expand_message_xof: expected XOF function");
  if (typeof H2.create !== "function")
    throw new Error("expand_message_xof: expected XOF create");
  DST = normDST(DST);
  if (lenInBytes < 0 || lenInBytes > 65535)
    throw new Error("expand_message_xof: invalid lenInBytes");
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k2 / 8);
    DST = H2.create({ dkLen }).update(asciiToBytes("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (DST.length > 255)
    throw new Error("expand_message_xof: invalid DST");
  return H2.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    p: "bigint",
    m: "number",
    k: "number",
    hash: "function"
  });
  const { p: p2, k: k2, m: m2, hash, expand, DST } = options;
  asafenumber(hash.outputLen, "valid hash");
  abytes2(msg);
  asafenumber(count);
  asafenumber(m2, "m");
  asafenumber(k2, "k");
  if (p2 <= BigInt(1))
    throw new Error("hash_to_field: expected valid field characteristic");
  if (count < 1)
    throw new Error("hash_to_field: expected count >= 1");
  if (m2 < 1)
    throw new Error("hash_to_field: expected m >= 1");
  if (k2 < 0)
    throw new Error("hash_to_field: invalid k");
  const log2p = p2.toString(2).length;
  const L2 = Math.ceil((log2p + k2) / 8);
  const len_in_bytes = count * m2 * L2;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k2, hash);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u2 = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m2);
    for (let j2 = 0; j2 < m2; j2++) {
      const elm_offset = L2 * (j2 + i * m2);
      const tv = prb.subarray(elm_offset, elm_offset + L2);
      e[j2] = mod(os2ip(tv), p2);
    }
    u2[i] = e;
  }
  return u2;
}
function isogenyMap(field, map) {
  validateField(field);
  aarray(map, "map");
  const coeff = map.map((i, row) => {
    aarray(i, "map[" + row + "]");
    if (i.length < 1)
      throw new Error("isogenyMap: expected non-empty coefficients");
    return Array.from(i).reverse();
  });
  return (x2, y2) => {
    const [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x2), i)));
    const isZero = field.is0(xd) || field.is0(yd);
    const [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], true);
    x2 = field.mul(xn, xd_inv);
    y2 = field.mul(y2, field.mul(yn, yd_inv));
    return isZero ? { x: field.ZERO, y: field.ZERO } : { x: x2, y: y2 };
  };
}
var _DST_scalar = "HashToScalar-";
function createHasher2(Point, mapToCurve, defaults) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  validateObject(defaults);
  const snapshot = (src) => Object.freeze({
    ...src,
    DST: isBytes2(src.DST) ? copyBytes(src.DST) : src.DST,
    ...src.encodeDST === void 0 ? {} : { encodeDST: isBytes2(src.encodeDST) ? copyBytes(src.encodeDST) : src.encodeDST }
  });
  const safeDefaults = snapshot(defaults);
  const dstOverride = (options) => options && options.DST !== void 0 ? { DST: options.DST } : void 0;
  function map(num) {
    return Point.fromAffine(mapToCurve(num));
  }
  function clear(initial) {
    const P3 = initial.clearCofactor();
    if (P3.equals(Point.ZERO))
      return Point.ZERO;
    P3.assertValidity();
    return P3;
  }
  return Object.freeze({
    get defaults() {
      return snapshot(safeDefaults);
    },
    Point,
    hashToCurve(msg, options) {
      const opts = Object.assign({}, safeDefaults, dstOverride(options));
      const u2 = hash_to_field(msg, 2, opts);
      const u0 = map(u2[0]);
      const u1 = map(u2[1]);
      return clear(u0.add(u1));
    },
    encodeToCurve(msg, options) {
      const optsDst = safeDefaults.encodeDST === void 0 ? {} : { DST: safeDefaults.encodeDST };
      const opts = Object.assign({}, safeDefaults, optsDst, dstOverride(options));
      const u2 = hash_to_field(msg, 1, opts);
      const u0 = map(u2[0]);
      return clear(u0);
    },
    /** See {@link H2CHasher} */
    mapToCurve(scalars) {
      if (safeDefaults.m === 1) {
        if (typeof scalars !== "bigint")
          throw new Error("expected bigint (m=1)");
        return clear(map([scalars]));
      }
      if (!Array.isArray(scalars))
        throw new Error("expected array of bigints");
      if (scalars.length !== safeDefaults.m)
        throw new Error(`expected array of ${safeDefaults.m} bigints`);
      for (const i of scalars)
        if (typeof i !== "bigint")
          throw new Error("expected array of bigints");
      return clear(map(scalars));
    },
    // hash_to_scalar can produce 0: https://www.rfc-editor.org/errata/eid8393
    // RFC 9380, draft-irtf-cfrg-bbs-signatures-08. Default scalar DST is the shared generic
    // `HashToScalar-` prefix above unless the caller overrides it per invocation.
    hashToScalar(msg, options) {
      const N2 = Point.Fn.ORDER;
      const opts = Object.assign({}, safeDefaults, { DST: _DST_scalar }, dstOverride(options), {
        p: N2,
        m: 1
      });
      return hash_to_field(msg, 1, opts)[0][0];
    }
  });
}
function SWUFpSqrtRatio(Fp4, Z2) {
  const F2 = validateField(Fp4);
  const q2 = F2.ORDER;
  let l2 = _0n4;
  for (let o = q2 - _1n4; o % _2n2 === _0n4; o /= _2n2)
    l2 += _1n4;
  const c1 = l2;
  const _2n_pow_c1_1 = _2n2 << c1 - _1n4 - _1n4;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n2;
  const c2 = (q2 - _1n4) / _2n_pow_c1;
  const c3 = (c2 - _1n4) / _2n2;
  const c4 = _2n_pow_c1 - _1n4;
  const c5 = _2n_pow_c1_1;
  const c6 = F2.pow(Z2, c2);
  const c7 = F2.pow(Z2, (c2 + _1n4) / _2n2);
  let sqrtRatio = (u2, v2) => {
    let tv1 = c6;
    let tv2 = F2.pow(v2, c4);
    let tv3 = F2.sqr(tv2);
    tv3 = F2.mul(tv3, v2);
    let tv5 = F2.mul(u2, tv3);
    tv5 = F2.pow(tv5, c3);
    tv5 = F2.mul(tv5, tv2);
    tv2 = F2.mul(tv5, v2);
    tv3 = F2.mul(tv5, u2);
    let tv4 = F2.mul(tv3, tv2);
    tv5 = F2.pow(tv4, c5);
    let isQR = F2.eql(tv5, F2.ONE);
    tv2 = F2.mul(tv3, c7);
    tv5 = F2.mul(tv4, tv1);
    tv3 = F2.cmov(tv2, tv3, isQR);
    tv4 = F2.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n4; i--) {
      let tv52 = i - _2n2;
      tv52 = _2n2 << tv52 - _1n4;
      let tvv5 = F2.pow(tv4, tv52);
      const e1 = F2.eql(tvv5, F2.ONE);
      tv2 = F2.mul(tv3, tv1);
      tv1 = F2.mul(tv1, tv1);
      tvv5 = F2.mul(tv4, tv1);
      tv3 = F2.cmov(tv2, tv3, e1);
      tv4 = F2.cmov(tvv5, tv4, e1);
    }
    return { isValid: !F2.is0(v2) && (isQR || F2.is0(u2)), value: tv3 };
  };
  if (F2.ORDER % _4n3 === _3n2) {
    const c12 = (F2.ORDER - _3n2) / _4n3;
    const c22 = F2.sqrt(F2.neg(Z2));
    sqrtRatio = (u2, v2) => {
      let tv1 = F2.sqr(v2);
      const tv2 = F2.mul(u2, v2);
      tv1 = F2.mul(tv1, tv2);
      let y1 = F2.pow(tv1, c12);
      y1 = F2.mul(y1, tv2);
      const y2 = F2.mul(y1, c22);
      const tv3 = F2.mul(F2.sqr(y1), v2);
      const isQR = F2.eql(tv3, u2);
      let y3 = F2.cmov(y2, y1, isQR);
      return { isValid: !F2.is0(v2) && isQR, value: y3 };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp4, opts) {
  const F2 = validateField(Fp4);
  validateObject(opts, {}, {}, "opts");
  const { A, B: B2, Z: Z2 } = opts;
  if (!F2.isValidNot0(A) || !F2.isValidNot0(B2) || !F2.isValid(Z2))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  if (F2.eql(Z2, F2.neg(F2.ONE)) || FpIsSquare(F2, Z2))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const x2 = F2.mul(B2, F2.inv(F2.mul(Z2, A)));
  const gx = F2.add(F2.add(F2.mul(F2.sqr(x2), x2), F2.mul(A, x2)), B2);
  if (!FpIsSquare(F2, gx))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(F2, Z2);
  if (!F2.isOdd)
    throw new Error("Field does not have .isOdd()");
  return (u2) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x3, y2;
    tv1 = F2.sqr(u2);
    tv1 = F2.mul(tv1, Z2);
    tv2 = F2.sqr(tv1);
    tv2 = F2.add(tv2, tv1);
    tv3 = F2.add(tv2, F2.ONE);
    tv3 = F2.mul(tv3, B2);
    tv4 = F2.cmov(Z2, F2.neg(tv2), !F2.eql(tv2, F2.ZERO));
    tv4 = F2.mul(tv4, A);
    tv2 = F2.sqr(tv3);
    tv6 = F2.sqr(tv4);
    tv5 = F2.mul(tv6, A);
    tv2 = F2.add(tv2, tv5);
    tv2 = F2.mul(tv2, tv3);
    tv6 = F2.mul(tv6, tv4);
    tv5 = F2.mul(tv6, B2);
    tv2 = F2.add(tv2, tv5);
    x3 = F2.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y2 = F2.mul(tv1, u2);
    y2 = F2.mul(y2, value);
    x3 = F2.cmov(x3, tv3, isValid);
    y2 = F2.cmov(y2, value, isValid);
    const e1 = F2.isOdd(u2) === F2.isOdd(y2);
    y2 = F2.cmov(F2.neg(y2), y2, e1);
    const tv4_inv = FpInvertBatch(F2, [tv4], true)[0];
    x3 = F2.mul(x3, tv4_inv);
    return { x: x3, y: y2 };
  };
}

// node_modules/@noble/curves/abstract/weierstrass.js
var divNearest = (num, den) => (num + (num >= 0 ? den : -den) / _2n3) / den;
function _splitEndoScalar(k2, basis, n) {
  aInRange("scalar", k2, _0n5, n);
  const [[a1, b1], [a2, b2]] = basis;
  const c1 = divNearest(b2 * k2, n);
  const c2 = divNearest(-b1 * k2, n);
  let k1 = k2 - c1 * a1 - c2 * a2;
  let k22 = -c1 * b1 - c2 * b2;
  const k1neg = k1 < _0n5;
  const k2neg = k22 < _0n5;
  if (k1neg)
    k1 = -k1;
  if (k2neg)
    k22 = -k22;
  const MAX_NUM = bitMask(Math.ceil(bitLen(n) / 2)) + _1n5;
  if (k1 < _0n5 || k1 >= MAX_NUM || k22 < _0n5 || k22 >= MAX_NUM) {
    throw new Error("splitScalar (endomorphism): failed for k");
  }
  return { k1neg, k1, k2neg, k2: k22 };
}
var _0n5 = /* @__PURE__ */ BigInt(0);
var _1n5 = /* @__PURE__ */ BigInt(1);
var _2n3 = /* @__PURE__ */ BigInt(2);
var _3n3 = /* @__PURE__ */ BigInt(3);
var _4n4 = /* @__PURE__ */ BigInt(4);
function weierstrass(params, extraOpts = {}) {
  const validated = createCurveFields("weierstrass", params, extraOpts);
  const Fp4 = validated.Fp;
  const Fn = validated.Fn;
  let CURVE = validated.CURVE;
  const { h: cofactor, n: CURVE_ORDER } = CURVE;
  validateObject(extraOpts, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    randomBytes: "function"
  });
  const { endo: endoOpts, allowInfinityPoint, clearCofactor, isTorsionFree, fromBytes, toBytes } = extraOpts;
  const randomBytes6 = extraOpts.randomBytes === void 0 ? randomBytes3 : extraOpts.randomBytes;
  if (endoOpts) {
    if (!Fp4.is0(CURVE.a) || typeof endoOpts.beta !== "bigint" || !Array.isArray(endoOpts.basises)) {
      throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    }
  }
  const endo = endoOpts ? {
    beta: endoOpts.beta,
    basises: endoOpts.basises.map((basis) => [...basis])
  } : void 0;
  const lengths = getWLengths(Fp4, Fn);
  function assertCompressionIsSupported() {
    if (!Fp4.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function pointToBytes(_c, point, isCompressed) {
    if (point.is0()) {
      if (!allowInfinityPoint)
        throw new Error("bad point: ZERO");
      return Uint8Array.of(0);
    }
    const { x: x2, y: y2 } = point.toAffine();
    const bx = Fp4.toBytes(x2);
    abool(isCompressed, "isCompressed");
    if (isCompressed) {
      assertCompressionIsSupported();
      const hasEvenY = !Fp4.isOdd(y2);
      return concatBytes2(pprefix(hasEvenY), bx);
    } else {
      return concatBytes2(Uint8Array.of(4), bx, Fp4.toBytes(y2));
    }
  }
  function pointFromBytes(bytes) {
    abytes2(bytes, void 0, "Point");
    const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
    const length = bytes.length;
    const head = bytes[0];
    const tail = bytes.subarray(1);
    if (allowInfinityPoint && length === 1 && head === 0)
      return { x: Fp4.ZERO, y: Fp4.ZERO };
    if (length === comp && (head === 2 || head === 3)) {
      const x2 = Fp4.fromBytes(tail);
      if (!Fp4.isValid(x2))
        throw new Error("bad point: is not on curve, wrong x");
      const y2 = weierstrassEquation(x2);
      let y3;
      try {
        y3 = Fp4.sqrt(y2);
      } catch (sqrtError) {
        const err = sqrtError instanceof Error ? ": " + sqrtError.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + err);
      }
      assertCompressionIsSupported();
      const evenY = Fp4.isOdd(y3);
      const evenH = (head & 1) === 1;
      if (evenH !== evenY)
        y3 = Fp4.neg(y3);
      return { x: x2, y: y3 };
    } else if (length === uncomp && head === 4) {
      const L2 = Fp4.BYTES;
      const x2 = Fp4.fromBytes(tail.subarray(0, L2));
      const y2 = Fp4.fromBytes(tail.subarray(L2, L2 * 2));
      if (!isValidXY(x2, y2))
        throw new Error("bad point: is not on curve");
      return { x: x2, y: y2 };
    } else {
      throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
    }
  }
  const encodePoint = toBytes === void 0 ? pointToBytes : toBytes;
  const decodePoint = fromBytes === void 0 ? pointFromBytes : fromBytes;
  const b3 = Fp4.mul(CURVE.b, _3n3);
  const mulA = Fp4.is0(CURVE.a) ? (_2) => Fp4.ZERO : (x2) => Fp4.mul(CURVE.a, x2);
  function weierstrassEquation(x2) {
    const x22 = Fp4.sqr(x2);
    const x3 = Fp4.mul(x22, x2);
    return Fp4.add(Fp4.add(x3, Fp4.mul(x2, CURVE.a)), CURVE.b);
  }
  function isValidXY(x2, y2) {
    const left = Fp4.sqr(y2);
    const right = weierstrassEquation(x2);
    return Fp4.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp4.mul(Fp4.pow(CURVE.a, _3n3), _4n4);
  const _27b2 = Fp4.mul(Fp4.sqr(CURVE.b), BigInt(27));
  if (Fp4.is0(Fp4.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function acoord(title, n, banZero = false) {
    if (!Fp4.isValid(n) || banZero && Fp4.is0(n))
      throw new Error(`bad point coordinate ${title}`);
    return typeof n === "object" && n !== null ? Fp4.create(n) : n;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("Weierstrass Point expected");
  }
  function splitEndoScalarN(k2) {
    if (!endo || !endo.basises)
      throw new Error("no endo");
    return _splitEndoScalar(k2, endo.basises, Fn.ORDER);
  }
  function pushWnafPair(points, scalars, p2, k2) {
    if (!Fn.isValid(k2))
      throw new RangeError("invalid scalar: out of range");
    if (endo) {
      const { k1neg, k1, k2neg, k2: k22 } = splitEndoScalarN(k2);
      const psi = new Point(Fp4.mul(p2.X, endo.beta), p2.Y, p2.Z);
      points.push(k1neg ? p2.negate() : p2, k2neg ? psi.negate() : psi);
      scalars.push(k1, k22);
    } else {
      points.push(p2);
      scalars.push(k2);
    }
  }
  const validityCache = /* @__PURE__ */ new WeakSet();
  class Point {
    static BASE = new Point(CURVE.Gx, CURVE.Gy, Fp4.ONE);
    static ZERO = new Point(Fp4.ZERO, Fp4.ONE, Fp4.ZERO);
    static Fp = Fp4;
    static Fn = Fn;
    X;
    Y;
    Z;
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(X2, Y2, Z2) {
      this.X = acoord("x", X2);
      this.Y = acoord("y", Y2, true);
      this.Z = acoord("z", Z2);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(p2) {
      const { x: x2, y: y2 } = p2 || {};
      if (!p2 || !Fp4.isValid(x2) || !Fp4.isValid(y2))
        throw new Error("invalid affine point");
      if (p2 instanceof Point)
        throw new Error("projective point not allowed");
      if (Fp4.is0(x2) && Fp4.is0(y2))
        return Point.ZERO;
      return new Point(x2, y2, Fp4.ONE);
    }
    static fromBytes(bytes) {
      const P3 = Point.fromAffine(decodePoint(abytes2(bytes, void 0, "point")));
      P3.assertValidity();
      return P3;
    }
    static fromHex(hex) {
      return Point.fromBytes(hexToBytes2(hex));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * @param isLazy - true will defer table computation until the first multiplication
     */
    precompute(windowSize = 6, isLazy = true) {
      wnaf.setWindowSize(this, windowSize);
      if (!isLazy)
        this.multiply(_3n3);
      return this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      const p2 = this;
      if (p2.is0()) {
        if (allowInfinityPoint && Fp4.is0(p2.X) && Fp4.eql(p2.Y, Fp4.ONE) && Fp4.is0(p2.Z))
          return;
        throw new Error("bad point: ZERO");
      }
      if (validityCache.has(p2))
        return;
      const { x: x2, y: y2 } = p2.toAffine();
      if (!Fp4.isValid(x2) || !Fp4.isValid(y2))
        throw new Error("bad point: x or y not field elements");
      if (!isValidXY(x2, y2))
        throw new Error("bad point: equation left != right");
      if (!p2.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      validityCache.add(p2);
    }
    hasEvenY() {
      const { y: y2 } = this.toAffine();
      if (!Fp4.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !Fp4.isOdd(y2);
    }
    /** Compare one point to another. */
    equals(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const U1 = Fp4.eql(Fp4.mul(X1, Z2), Fp4.mul(X2, Z1));
      const U2 = Fp4.eql(Fp4.mul(Y1, Z2), Fp4.mul(Y2, Z1));
      return U1 && U2;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new Point(this.X, Fp4.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { X: X1, Y: Y1, Z: Z1 } = this;
      let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
      let t0 = Fp4.mul(X1, X1);
      let t1 = Fp4.mul(Y1, Y1);
      let t2 = Fp4.mul(Z1, Z1);
      let t3 = Fp4.mul(X1, Y1);
      t3 = Fp4.add(t3, t3);
      Z3 = Fp4.mul(X1, Z1);
      Z3 = Fp4.add(Z3, Z3);
      X3 = mulA(Z3);
      Y3 = Fp4.mul(b3, t2);
      Y3 = Fp4.add(X3, Y3);
      X3 = Fp4.sub(t1, Y3);
      Y3 = Fp4.add(t1, Y3);
      Y3 = Fp4.mul(X3, Y3);
      X3 = Fp4.mul(t3, X3);
      Z3 = Fp4.mul(b3, Z3);
      t2 = mulA(t2);
      t3 = Fp4.sub(t0, t2);
      t3 = mulA(t3);
      t3 = Fp4.add(t3, Z3);
      Z3 = Fp4.add(t0, t0);
      t0 = Fp4.add(Z3, t0);
      t0 = Fp4.add(t0, t2);
      t0 = Fp4.mul(t0, t3);
      Y3 = Fp4.add(Y3, t0);
      t2 = Fp4.mul(Y1, Z1);
      t2 = Fp4.add(t2, t2);
      t0 = Fp4.mul(t2, t3);
      X3 = Fp4.sub(X3, t0);
      Z3 = Fp4.mul(t2, t1);
      Z3 = Fp4.add(Z3, Z3);
      Z3 = Fp4.add(Z3, Z3);
      return new Point(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
      let t0 = Fp4.mul(X1, X2);
      let t1 = Fp4.mul(Y1, Y2);
      let t2 = Fp4.mul(Z1, Z2);
      let t3 = Fp4.add(X1, Y1);
      let t4 = Fp4.add(X2, Y2);
      t3 = Fp4.mul(t3, t4);
      t4 = Fp4.add(t0, t1);
      t3 = Fp4.sub(t3, t4);
      t4 = Fp4.add(X1, Z1);
      let t5 = Fp4.add(X2, Z2);
      t4 = Fp4.mul(t4, t5);
      t5 = Fp4.add(t0, t2);
      t4 = Fp4.sub(t4, t5);
      t5 = Fp4.add(Y1, Z1);
      X3 = Fp4.add(Y2, Z2);
      t5 = Fp4.mul(t5, X3);
      X3 = Fp4.add(t1, t2);
      t5 = Fp4.sub(t5, X3);
      Z3 = mulA(t4);
      X3 = Fp4.mul(b3, t2);
      Z3 = Fp4.add(X3, Z3);
      X3 = Fp4.sub(t1, Z3);
      Z3 = Fp4.add(t1, Z3);
      Y3 = Fp4.mul(X3, Z3);
      t1 = Fp4.add(t0, t0);
      t1 = Fp4.add(t1, t0);
      t2 = mulA(t2);
      t4 = Fp4.mul(b3, t4);
      t1 = Fp4.add(t1, t2);
      t2 = Fp4.sub(t0, t2);
      t2 = mulA(t2);
      t4 = Fp4.add(t4, t2);
      t0 = Fp4.mul(t1, t4);
      Y3 = Fp4.add(Y3, t0);
      t0 = Fp4.mul(t5, t4);
      X3 = Fp4.mul(t3, X3);
      X3 = Fp4.sub(X3, t0);
      t0 = Fp4.mul(t3, t1);
      Z3 = Fp4.mul(t5, Z3);
      Z3 = Fp4.add(Z3, t0);
      return new Point(X3, Y3, Z3);
    }
    subtract(other) {
      aprjpoint(other);
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses precomputed tables (signed fixed-window wNAF) when available.
     * Uses scalar blinding and avoids endomorphism splitting in the secret-scalar path.
     * @param scalar - by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      if (!Fn.isValidNot0(scalar))
        throw new RangeError("invalid scalar: out of range");
      const { p: p2, f: f2 } = wnaf.mulSecret(this, scalar, cofactor, normalize2);
      return normalize2([p2, f2])[0];
    }
    /**
     * Non-constant-time multiplication. Uses width-4 wNAF with GLV endomorphism splitting
     * when available (two half-width scalars sharing one halved doubling chain).
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(scalar) {
      const p2 = this;
      const sc = scalar;
      if (!Fn.isValid(sc))
        throw new RangeError("invalid scalar: out of range");
      if (sc === _0n5 || p2.is0())
        return Point.ZERO;
      if (sc === _1n5)
        return p2;
      if (wnaf.hasWindowSize(this))
        return wnaf.mulUnsafe(p2, sc, normalize2);
      const points = [];
      const scalars = [];
      pushWnafPair(points, scalars, p2, sc);
      return mulAddUnsafe(Point, points, scalars);
    }
    /**
     * Non-constant-time double-scalar multiplication `a⋅this + b⋅other` (Strauss–Shamir).
     * Both walks share one doubling chain via {@link mulAddUnsafe}, and GLV endomorphism
     * (when available) halves the chain again by splitting each scalar into two half-width
     * parts. Used by ECDSA verification and public-key recovery for `R = u1⋅G + u2⋅P`.
     * Only for public scalars.
     */
    mulAddUnsafe(a2, other, b2) {
      aprjpoint(other);
      const points = [];
      const scalars = [];
      pushWnafPair(points, scalars, this, a2);
      pushWnafPair(points, scalars, other, b2);
      return mulAddUnsafe(Point, points, scalars);
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * (X, Y, Z) ∋ (x=X/Z, y=Y/Z).
     * @param invertedZ - Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(invertedZ) {
      const p2 = this;
      let iz = invertedZ;
      if (iz != null && !Fp4.isValid(iz))
        throw new RangeError('"invertedZ" expected valid field element');
      const { X: X2, Y: Y2, Z: Z2 } = p2;
      if (Fp4.eql(Z2, Fp4.ONE))
        return { x: X2, y: Y2 };
      const is0 = p2.is0();
      if (iz == null)
        iz = is0 ? Fp4.ONE : Fp4.inv(Z2);
      const x2 = Fp4.mul(X2, iz);
      const y2 = Fp4.mul(Y2, iz);
      const zz = Fp4.mul(Z2, iz);
      if (is0)
        return { x: Fp4.ZERO, y: Fp4.ZERO };
      if (!Fp4.eql(zz, Fp4.ONE))
        throw new Error("invZ was invalid");
      return { x: x2, y: y2 };
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      if (cofactor === _1n5)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point, this);
      return wnaf.mulUnsafe(this, CURVE_ORDER).is0();
    }
    clearCofactor() {
      if (cofactor === _1n5)
        return this;
      if (clearCofactor)
        return clearCofactor(Point, this);
      return this.multiplyUnsafe(cofactor);
    }
    isSmallOrder() {
      if (cofactor === _1n5)
        return this.is0();
      return this.clearCofactor().is0();
    }
    toBytes(isCompressed = true) {
      abool(isCompressed, "isCompressed");
      this.assertValidity();
      return encodePoint(Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex2(this.toBytes(isCompressed));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  const normalize2 = (points) => normalizeZ(Point, points);
  const wnaf = new ScalarMultiplier(Point, randomBytes6);
  if (wnaf.bits >= 6)
    Point.BASE.precompute(6);
  Object.freeze(Point.prototype);
  Object.freeze(Point);
  return Point;
}
function pprefix(hasEvenY) {
  return Uint8Array.of(hasEvenY ? 2 : 3);
}
function getWLengths(Fp4, Fn) {
  return {
    secretKey: Fn.BYTES,
    publicKey: 1 + Fp4.BYTES,
    publicKeyUncompressed: 1 + 2 * Fp4.BYTES,
    publicKeyHasPrefix: true,
    // Raw compact `(r || s)` signature width; DER and recovered signatures use
    // different lengths outside this helper.
    signature: 2 * Fn.BYTES
  };
}

// node_modules/@noble/curves/abstract/bls.js
var _0n6 = BigInt(0);
var _1n6 = BigInt(1);
var _2n4 = BigInt(2);
var _3n4 = BigInt(3);
function NAfDecomposition(a2) {
  const res = [];
  for (; a2 > _1n6; a2 >>= _1n6) {
    if ((a2 & _1n6) === _0n6)
      res.unshift(0);
    else if ((a2 & _3n4) === _3n4) {
      res.unshift(-1);
      a2 += _1n6;
    } else
      res.unshift(1);
  }
  return res;
}
function aNonEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new Error("expected non-empty array");
}
function createBlsPairing(fields2, G1, G2, params) {
  validateObject(fields2, { Fp: "object", Fr: "object", Fp2: "object", Fp12: "object" }, { Fp6: "object" }, "fields");
  if (typeof G1 !== "function")
    throw new TypeError('"G1_Point" expected point constructor, got type=' + typeof G1);
  if (typeof G2 !== "function")
    throw new TypeError('"G2_Point" expected point constructor, got type=' + typeof G2);
  validateObject(params, { ateLoopSize: "bigint", xNegative: "boolean", twistType: "string" }, { randomBytes: "function", postPrecompute: "function" }, "params");
  const { Fp: Fp4, Fr, Fp2: Fp22, Fp12: Fp122 } = fields2;
  const { twistType, ateLoopSize, xNegative, postPrecompute } = params;
  const fp22 = (c0, c1) => ({ c0, c1 });
  const fp2f = ({ c0, c1 }) => Object.freeze({ c0, c1 });
  const add2 = (a2, b2) => fp22(Fp4.add(a2.c0, b2.c0), Fp4.add(a2.c1, b2.c1));
  const sub2 = (a2, b2) => fp22(Fp4.sub(a2.c0, b2.c0), Fp4.sub(a2.c1, b2.c1));
  const mul2 = (a2, b2) => {
    const t0 = Fp4.mul(a2.c0, b2.c0);
    const t1 = Fp4.mul(a2.c1, b2.c1);
    return fp22(Fp4.sub(t0, t1), Fp4.sub(Fp4.mul(Fp4.add(a2.c0, a2.c1), Fp4.add(b2.c0, b2.c1)), Fp4.add(t0, t1)));
  };
  const mul2ByFp = (a2, rhs) => fp22(Fp4.mul(a2.c0, rhs), Fp4.mul(a2.c1, rhs));
  const mul2ByNonresidue = (a2) => Fp22.mulByNonresidue(a2);
  const mul014ByLine = ({ c0: f0, c1: f1 }, o0, l1, l4, Px, Py) => {
    const o1 = mul2ByFp(l1, Px);
    const o4 = mul2ByFp(l4, Py);
    const { c0: a0, c1: a1, c2: a2 } = f0;
    const { c0: b0, c1: b1, c2: b2 } = f1;
    const t0_0 = mul2(a0, o0);
    const t0_1 = mul2(a1, o1);
    const t0_c0 = add2(mul2ByNonresidue(sub2(mul2(add2(a1, a2), o1), t0_1)), t0_0);
    const t0_c1 = sub2(sub2(mul2(add2(o0, o1), add2(a0, a1)), t0_0), t0_1);
    const t0_c2 = add2(sub2(mul2(add2(a0, a2), o0), t0_0), t0_1);
    const t1_c0 = mul2ByNonresidue(mul2(b2, o4));
    const t1_c1 = mul2(b0, o4);
    const t1_c2 = mul2(b1, o4);
    const s0 = add2(a0, b0);
    const s1 = add2(a1, b1);
    const s2 = add2(a2, b2);
    const o14 = add2(o1, o4);
    const t2_0 = mul2(s0, o0);
    const t2_1 = mul2(s1, o14);
    const t2_c0 = add2(mul2ByNonresidue(sub2(mul2(add2(s1, s2), o14), t2_1)), t2_0);
    const t2_c1 = sub2(sub2(mul2(add2(o0, o14), add2(s0, s1)), t2_0), t2_1);
    const t2_c2 = add2(sub2(mul2(add2(s0, s2), o0), t2_0), t2_1);
    return Object.freeze({
      c0: Object.freeze({
        c0: fp2f(add2(mul2ByNonresidue(t1_c2), t0_c0)),
        c1: fp2f(add2(t1_c0, t0_c1)),
        c2: fp2f(add2(t1_c1, t0_c2))
      }),
      c1: Object.freeze({
        c0: fp2f(sub2(sub2(t2_c0, t0_c0), t1_c0)),
        c1: fp2f(sub2(sub2(t2_c1, t0_c1), t1_c1)),
        c2: fp2f(sub2(sub2(t2_c2, t0_c2), t1_c2))
      })
    });
  };
  const mul034ByLine = ({ c0: f0, c1: f1 }, l0, l3, o4, Px, Py) => {
    const o0 = mul2ByFp(l0, Py);
    const o3 = mul2ByFp(l3, Px);
    const { c0: a0, c1: a1, c2: a2 } = f0;
    const { c0: b0, c1: b1, c2: b2 } = f1;
    const a_c0 = mul2(a0, o0);
    const a_c1 = mul2(a1, o0);
    const a_c2 = mul2(a2, o0);
    const b0m = mul2(b0, o3);
    const b1m = mul2(b1, o4);
    const b_c0 = add2(mul2ByNonresidue(sub2(mul2(add2(b1, b2), o4), b1m)), b0m);
    const b_c1 = sub2(sub2(mul2(add2(o3, o4), add2(b0, b1)), b0m), b1m);
    const b_c2 = add2(sub2(mul2(add2(b0, b2), o3), b0m), b1m);
    const s0 = add2(a0, b0);
    const s1 = add2(a1, b1);
    const s2 = add2(a2, b2);
    const o03 = add2(o0, o3);
    const e0m = mul2(s0, o03);
    const e1m = mul2(s1, o4);
    const e_c0 = add2(mul2ByNonresidue(sub2(mul2(add2(s1, s2), o4), e1m)), e0m);
    const e_c1 = sub2(sub2(mul2(add2(o03, o4), add2(s0, s1)), e0m), e1m);
    const e_c2 = add2(sub2(mul2(add2(s0, s2), o03), e0m), e1m);
    return Object.freeze({
      c0: Object.freeze({
        c0: fp2f(add2(mul2ByNonresidue(b_c2), a_c0)),
        c1: fp2f(add2(b_c0, a_c1)),
        c2: fp2f(add2(b_c1, a_c2))
      }),
      c1: Object.freeze({
        c0: fp2f(sub2(sub2(e_c0, a_c0), b_c0)),
        c1: fp2f(sub2(sub2(e_c1, a_c1), b_c1)),
        c2: fp2f(sub2(sub2(e_c2, a_c2), b_c2))
      })
    });
  };
  let lineFunction;
  if (twistType === "multiplicative") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => mul014ByLine(f2, c0, c1, c2, Px, Py);
  } else if (twistType === "divisive") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => mul034ByLine(f2, c2, c1, c0, Px, Py);
  } else
    throw new Error("bls: unknown twist type");
  const Fp2div2 = Fp22.div(Fp22.ONE, Fp22.mul(Fp22.ONE, _2n4));
  function pointDouble(ell, Rx, Ry, Rz) {
    const t0 = Fp22.sqr(Ry);
    const t1 = Fp22.sqr(Rz);
    const t2 = Fp22.mulByB(Fp22.mul(t1, _3n4));
    const t3 = Fp22.mul(t2, _3n4);
    const t4 = Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(Ry, Rz)), t1), t0);
    const c0 = Fp22.sub(t2, t0);
    const c1 = Fp22.mul(Fp22.sqr(Rx), _3n4);
    const c2 = Fp22.neg(t4);
    ell.push([c0, c1, c2]);
    Rx = Fp22.mul(Fp22.mul(Fp22.mul(Fp22.sub(t0, t3), Rx), Ry), Fp2div2);
    Ry = Fp22.sub(Fp22.sqr(Fp22.mul(Fp22.add(t0, t3), Fp2div2)), Fp22.mul(Fp22.sqr(t2), _3n4));
    Rz = Fp22.mul(t0, t4);
    return { Rx, Ry, Rz };
  }
  function pointAdd(ell, Rx, Ry, Rz, Qx, Qy) {
    const t0 = Fp22.sub(Ry, Fp22.mul(Qy, Rz));
    const t1 = Fp22.sub(Rx, Fp22.mul(Qx, Rz));
    const c0 = Fp22.sub(Fp22.mul(t0, Qx), Fp22.mul(t1, Qy));
    const c1 = Fp22.neg(t0);
    const c2 = t1;
    ell.push([c0, c1, c2]);
    const t2 = Fp22.sqr(t1);
    const t3 = Fp22.mul(t2, t1);
    const t4 = Fp22.mul(t2, Rx);
    const t5 = Fp22.add(Fp22.sub(t3, Fp22.mul(t4, _2n4)), Fp22.mul(Fp22.sqr(t0), Rz));
    Rx = Fp22.mul(t1, t5);
    Ry = Fp22.sub(Fp22.mul(Fp22.sub(t4, t5), t0), Fp22.mul(t3, Ry));
    Rz = Fp22.mul(Rz, t3);
    return { Rx, Ry, Rz };
  }
  const ATE_NAF = NAfDecomposition(ateLoopSize);
  const calcPairingPrecomputes = (point) => {
    if (!(point instanceof G2))
      throw new TypeError('"point" expected G2 point, got type=' + typeof point);
    const p2 = point;
    const { x: x2, y: y2 } = p2.toAffine();
    const Qx = x2, Qy = y2, negQy = Fp22.neg(y2);
    let Rx = Qx, Ry = Qy, Rz = Fp22.ONE;
    const ell = [];
    for (const bit of ATE_NAF) {
      const cur = [];
      ({ Rx, Ry, Rz } = pointDouble(cur, Rx, Ry, Rz));
      if (bit)
        ({ Rx, Ry, Rz } = pointAdd(cur, Rx, Ry, Rz, Qx, bit === -1 ? negQy : Qy));
      ell.push(cur);
    }
    if (postPrecompute) {
      const last = ell[ell.length - 1];
      postPrecompute(Rx, Ry, Rz, Qx, Qy, pointAdd.bind(null, last));
    }
    return ell;
  };
  function millerLoopBatch(pairs, withFinalExponent = false) {
    aarray(pairs, "pairs", (pair, title) => {
      aarray(pair, title);
      if (pair.length !== 3)
        throw new TypeError(`"${title}" expected precompute tuple`);
      aarray(pair[0], title + "[0]");
    });
    let f12 = Fp122.ONE;
    if (pairs.length) {
      const ellLen = pairs[0][0].length;
      for (let i = 0; i < ellLen; i++) {
        if (i !== 0)
          f12 = Fp122.sqr(f12);
        for (const [ell, Px, Py] of pairs) {
          for (const [c0, c1, c2] of ell[i])
            f12 = lineFunction(c0, c1, c2, f12, Px, Py);
        }
      }
    }
    if (xNegative)
      f12 = Fp122.conjugate(f12);
    return withFinalExponent ? Fp122.finalExponentiate(f12) : f12;
  }
  function pairingBatch(pairs, withFinalExponent = true) {
    aarray(pairs, "pairs");
    const res = [];
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      validateObject(pair, { g1: "object", g2: "object" }, {}, "pairs[" + i + "]");
      const { g1: g12, g2: g22 } = pair;
      if (!(g12 instanceof G1))
        throw new TypeError('"pairs[' + i + '].g1" expected G1 point, got type=' + typeof g12);
      if (!(g22 instanceof G2))
        throw new TypeError('"pairs[' + i + '].g2" expected G2 point, got type=' + typeof g22);
      if (g12.is0() || g22.is0())
        throw new Error("pairing is not available for ZERO point");
      g12.assertValidity();
      g22.assertValidity();
      const Qa = g12.toAffine();
      res.push([calcPairingPrecomputes(g22), Qa.x, Qa.y]);
    }
    return millerLoopBatch(res, withFinalExponent);
  }
  function pairing(Q2, P3, withFinalExponent = true) {
    if (!(Q2 instanceof G1))
      throw new TypeError('"Q" expected G1 point, got type=' + typeof Q2);
    if (!(P3 instanceof G2))
      throw new TypeError('"P" expected G2 point, got type=' + typeof P3);
    return pairingBatch([{ g1: Q2, g2: P3 }], withFinalExponent);
  }
  const lengths = {
    seed: getMinHashLength(Fr.ORDER)
  };
  const rand = params.randomBytes === void 0 ? randomBytes3 : params.randomBytes;
  const randomSecretKey = (seed) => {
    seed = seed === void 0 ? rand(lengths.seed) : seed;
    abytes2(seed, lengths.seed, "seed");
    return mapHashToField(seed, Fr.ORDER);
  };
  Object.freeze(lengths);
  return {
    lengths,
    Fr,
    Fp12: Fp122,
    // NOTE: we re-export Fp12 here because pairing results are Fp12!
    millerLoopBatch,
    pairing,
    pairingBatch,
    calcPairingPrecomputes,
    randomSecretKey
  };
}
function createBlsSig(blsPairing, PubPoint, SigPoint, isSigG1, hashToSigCurve, SignatureCoder) {
  const { Fr, Fp12: Fp122, pairingBatch, randomSecretKey, lengths } = blsPairing;
  if (!SignatureCoder) {
    SignatureCoder = {
      fromBytes: notImplemented,
      fromHex: notImplemented,
      toBytes: notImplemented,
      toHex: notImplemented
    };
  }
  const sigCoder = Object.freeze({ ...SignatureCoder });
  function normPub(point) {
    return point instanceof PubPoint ? point : PubPoint.fromBytes(point);
  }
  function normSig(point) {
    return point instanceof SigPoint ? point : sigCoder.fromBytes(point);
  }
  function amsg(m2) {
    if (!(m2 instanceof SigPoint))
      throw new Error(`expected valid message hashed to ${!isSigG1 ? "G2" : "G1"} curve`);
    return m2;
  }
  const pair = !isSigG1 ? (a2, b2) => ({ g1: a2, g2: b2 }) : (a2, b2) => ({ g1: b2, g2: a2 });
  return Object.freeze({
    lengths: Object.freeze({ ...lengths, secretKey: Fr.BYTES }),
    keygen(seed) {
      const secretKey = randomSecretKey(seed);
      const publicKey = this.getPublicKey(secretKey);
      return { secretKey, publicKey };
    },
    // P = pk x G
    getPublicKey(secretKey) {
      let sec;
      try {
        sec = PubPoint.Fn.fromBytes(secretKey);
      } catch (error) {
        throw new Error("invalid private key: " + typeof secretKey, { cause: error });
      }
      return PubPoint.BASE.multiply(sec);
    },
    // S = pk x H(m)
    sign(message, secretKey, unusedArg) {
      if (unusedArg != null)
        throw new Error("sign() expects 2 arguments");
      const sec = PubPoint.Fn.fromBytes(secretKey);
      amsg(message).assertValidity();
      return message.multiply(sec);
    },
    // Checks if pairing of public key & hash is equal to pairing of generator & signature.
    // e(P, H(m)) == e(G, S)
    // e(S, G) == e(H(m), P)
    verify(signature, message, publicKey, unusedArg) {
      if (unusedArg != null)
        throw new Error("verify() expects 3 arguments");
      signature = normSig(signature);
      publicKey = normPub(publicKey);
      const P3 = publicKey.negate();
      const G2 = PubPoint.BASE;
      const Hm = amsg(message);
      const S2 = signature;
      try {
        const exp = pairingBatch([pair(P3, Hm), pair(G2, S2)]);
        return Fp122.eql(exp, Fp122.ONE);
      } catch {
        return false;
      }
    },
    // https://ethresear.ch/t/fast-verification-of-multiple-bls-signatures/5407
    // e(G, S) = e(G, SUM(n)(Si)) = MUL(n)(e(G, Si))
    // TODO: maybe `{message: G2Hex, publicKey: G1Hex}[]` instead?
    verifyBatch(signature, items) {
      aNonEmpty(items);
      const sig = normSig(signature);
      const nMessages = items.map((i) => amsg(i.message));
      const nPublicKeys = items.map((i) => normPub(i.publicKey));
      const messagePubKeyMap = /* @__PURE__ */ new Map();
      for (let i = 0; i < nPublicKeys.length; i++) {
        const pub = nPublicKeys[i];
        const msg = nMessages[i];
        let keys = messagePubKeyMap.get(msg);
        if (keys === void 0) {
          keys = [];
          messagePubKeyMap.set(msg, keys);
        }
        keys.push(pub);
      }
      const paired = [];
      const G2 = PubPoint.BASE;
      try {
        for (const [msg, keys] of messagePubKeyMap) {
          const groupPublicKey = keys.reduce((acc, msg2) => acc.add(msg2));
          paired.push(pair(groupPublicKey, msg));
        }
        paired.push(pair(G2.negate(), sig));
        return Fp122.eql(pairingBatch(paired), Fp122.ONE);
      } catch {
        return false;
      }
    },
    // Adds a bunch of public key points together.
    // pk1 + pk2 + pk3 = pkA
    aggregatePublicKeys(publicKeys) {
      aNonEmpty(publicKeys);
      publicKeys = publicKeys.map((pub) => normPub(pub));
      const agg = publicKeys.reduce((sum, p2) => sum.add(p2), PubPoint.ZERO);
      agg.assertValidity();
      return agg;
    },
    // Adds a bunch of signature points together.
    // pk1 + pk2 + pk3 = pkA
    aggregateSignatures(signatures) {
      aNonEmpty(signatures);
      signatures = signatures.map((sig) => normSig(sig));
      const agg = signatures.reduce((sum, s) => sum.add(s), SigPoint.ZERO);
      agg.assertValidity();
      return agg;
    },
    hash(messageBytes, DST) {
      abytes2(messageBytes);
      const opts = DST === void 0 ? void 0 : { DST };
      return hashToSigCurve(messageBytes, opts);
    },
    Signature: Object.freeze({ ...sigCoder })
  });
}
function blsBasic(fields2, G1_Point2, G2_Point2, params) {
  const { Fp: Fp4, Fr, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 } = fields2;
  const G1 = { Point: G1_Point2 };
  const G2 = { Point: G2_Point2 };
  const pairingRes = createBlsPairing(fields2, G1_Point2, G2_Point2, params);
  const { millerLoopBatch, pairing, pairingBatch, calcPairingPrecomputes, randomSecretKey, lengths } = pairingRes;
  G1.Point.BASE.precompute(4);
  Object.freeze(G1);
  Object.freeze(G2);
  return Object.freeze({
    lengths: Object.freeze(lengths),
    millerLoopBatch,
    pairing,
    pairingBatch,
    G1,
    G2,
    fields: Object.freeze({ Fr, Fp: Fp4, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 }),
    params: Object.freeze({
      ateLoopSize: params.ateLoopSize,
      xNegative: params.xNegative,
      twistType: params.twistType,
      postPrecompute: params.postPrecompute
    }),
    utils: Object.freeze({
      randomSecretKey,
      calcPairingPrecomputes
    })
  });
}
function blsHashers(fields2, G1_Point2, G2_Point2, params, hasherParams) {
  const base = blsBasic(fields2, G1_Point2, G2_Point2, params);
  validateObject(hasherParams, { hasherOpts: "object", hasherOptsG1: "object", hasherOptsG2: "object" }, { mapToG1: "function", mapToG2: "function" }, "hasherParams");
  const G1Hasher = createHasher2(G1_Point2, hasherParams.mapToG1 === void 0 ? notImplemented : hasherParams.mapToG1, {
    ...hasherParams.hasherOpts,
    ...hasherParams.hasherOptsG1
  });
  const G2Hasher = createHasher2(G2_Point2, hasherParams.mapToG2 === void 0 ? notImplemented : hasherParams.mapToG2, {
    ...hasherParams.hasherOpts,
    ...hasherParams.hasherOptsG2
  });
  return Object.freeze({ ...base, G1: G1Hasher, G2: G2Hasher });
}
function bls(fields2, G1_Point2, G2_Point2, params, hasherParams, signatureCoders2) {
  const base = blsHashers(fields2, G1_Point2, G2_Point2, params, hasherParams);
  const pairingRes = {
    ...base,
    Fr: base.fields.Fr,
    Fp12: base.fields.Fp12,
    calcPairingPrecomputes: base.utils.calcPairingPrecomputes,
    randomSecretKey: base.utils.randomSecretKey
  };
  const longSignatures = createBlsSig(pairingRes, G1_Point2, G2_Point2, false, base.G2.hashToCurve, signatureCoders2?.LongSignature);
  const shortSignatures = createBlsSig(pairingRes, G2_Point2, G1_Point2, true, base.G1.hashToCurve, signatureCoders2?.ShortSignature);
  return Object.freeze({ ...base, longSignatures, shortSignatures });
}

// node_modules/@noble/curves/abstract/tower.js
var _0n7 = /* @__PURE__ */ BigInt(0);
var _1n7 = /* @__PURE__ */ BigInt(1);
var _2n5 = /* @__PURE__ */ BigInt(2);
var _3n5 = /* @__PURE__ */ BigInt(3);
var _6n = /* @__PURE__ */ BigInt(6);
var _12n = /* @__PURE__ */ BigInt(12);
var isObj = (value) => !!value && typeof value === "object";
function calcFrobeniusCoefficients(Fp4, nonResidue, modulus, degree, num = 1, divisor) {
  asafenumber(num, "num");
  asafenumber(degree, "degree");
  const divisorN = divisor === void 0 ? degree : divisor;
  asafenumber(divisorN, "divisor");
  const F2 = Fp4;
  if (typeof modulus !== "bigint" || modulus <= _1n7)
    throw new Error("calcFrobeniusCoefficients: expected valid modulus, got " + modulus);
  if (degree <= 0)
    throw new Error("calcFrobeniusCoefficients: expected positive degree, got " + degree);
  if (num <= 0)
    throw new Error("calcFrobeniusCoefficients: expected positive row count, got " + num);
  if (divisorN <= 0)
    throw new Error("calcFrobeniusCoefficients: expected positive divisor, got " + divisorN);
  const _divisor = BigInt(divisorN);
  const towerModulus = modulus ** BigInt(degree);
  const res = [];
  for (let i = 0; i < num; i++) {
    const a2 = BigInt(i + 1);
    const powers = [];
    for (let j2 = 0, qPower = _1n7; j2 < degree; j2++) {
      const numer = a2 * qPower - a2;
      if (numer % _divisor)
        throw new Error("calcFrobeniusCoefficients: inexact tower exponent");
      const power = numer / _divisor % towerModulus;
      powers.push(F2.pow(nonResidue, power));
      qPower *= modulus;
    }
    res.push(powers);
  }
  return res;
}
function psiFrobenius(Fp4, Fp22, base) {
  validateField(Fp4);
  validateField(Fp22);
  validateObject(Fp22, {
    Fp: "object",
    frobeniusMap: "function",
    fromBigTuple: "function",
    mulByB: "function",
    mulByNonresidue: "function",
    reim: "function",
    Fp4Square: "function",
    NONRESIDUE: "object"
  }, {});
  if (!isObj(base) || Array.isArray(base))
    throw new TypeError('"base" expected Fp2 element, got type=' + typeof base);
  if (!Fp22.isValid(base))
    throw new RangeError('"base" expected valid Fp2 element');
  const PSI_X = Fp22.pow(base, (Fp4.ORDER - _1n7) / _3n5);
  const PSI_Y = Fp22.pow(base, (Fp4.ORDER - _1n7) / _2n5);
  function psi(x2, y2) {
    const x22 = Fp22.mul(Fp22.frobeniusMap(x2, 1), PSI_X);
    const y22 = Fp22.mul(Fp22.frobeniusMap(y2, 1), PSI_Y);
    return [x22, y22];
  }
  const PSI2_X = Fp22.pow(base, (Fp4.ORDER ** _2n5 - _1n7) / _3n5);
  const PSI2_Y = Fp22.pow(base, (Fp4.ORDER ** _2n5 - _1n7) / _2n5);
  if (!Fp22.eql(PSI2_Y, Fp22.neg(Fp22.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function psi2(x2, y2) {
    return [Fp22.mul(x2, PSI2_X), Fp22.neg(y2)];
  }
  const mapAffine = (fn) => (c2, P3) => {
    if (typeof c2 !== "function")
      throw new TypeError('"c" expected point constructor, got type=' + typeof c2);
    validatePointCons(c2);
    if (!(P3 instanceof c2))
      throw new TypeError('"P" expected Point instance, got type=' + typeof P3);
    const affine = P3.toAffine();
    const p2 = fn(affine.x, affine.y);
    return c2.fromAffine({ x: p2[0], y: p2[1] });
  };
  const G2psi3 = mapAffine(psi);
  const G2psi22 = mapAffine(psi2);
  return { psi, psi2, G2psi: G2psi3, G2psi2: G2psi22, PSI_X, PSI_Y, PSI2_X, PSI2_Y };
}
var _Field2 = class {
  ORDER;
  BITS;
  BYTES;
  isLE;
  ZERO;
  ONE;
  Fp;
  NONRESIDUE;
  mulByB;
  Fp_NONRESIDUE;
  Fp_div2;
  constructor(Fp4, opts = {}) {
    const { NONRESIDUE = BigInt(-1), FP2_NONRESIDUE, Fp2mulByB } = opts;
    const ORDER = Fp4.ORDER;
    const FP2_ORDER = ORDER * ORDER;
    this.Fp = Fp4;
    this.ORDER = FP2_ORDER;
    this.BITS = bitLen(FP2_ORDER);
    this.BYTES = Math.ceil(bitLen(FP2_ORDER) / 8);
    this.isLE = Fp4.isLE;
    this.ZERO = this.create({ c0: Fp4.ZERO, c1: Fp4.ZERO });
    this.ONE = this.create({ c0: Fp4.ONE, c1: Fp4.ZERO });
    this.Fp_NONRESIDUE = Fp4.create(NONRESIDUE);
    this.Fp_div2 = Fp4.div(Fp4.ONE, _2n5);
    this.NONRESIDUE = this.create({ c0: FP2_NONRESIDUE[0], c1: FP2_NONRESIDUE[1] });
    this.mulByB = (num) => {
      const { c0, c1 } = Fp2mulByB(num);
      return Object.freeze({ c0, c1 });
    };
    Object.freeze(this);
  }
  fromBigTuple(tuple) {
    if (!Array.isArray(tuple) || tuple.length !== 2)
      throw new Error("invalid Fp2.fromBigTuple");
    const [c0, c1] = tuple;
    if (typeof c0 !== "bigint" || typeof c1 !== "bigint")
      throw new Error("invalid Fp2.fromBigTuple");
    return this.create({ c0, c1 });
  }
  create(num) {
    const { Fp: Fp4 } = this;
    const c0 = Fp4.create(num.c0);
    const c1 = Fp4.create(num.c1);
    return Object.freeze({ c0, c1 });
  }
  isValid(num) {
    if (!isObj(num))
      throw new TypeError("invalid field element: expected object, got " + typeof num);
    const { c0, c1 } = num;
    const { Fp: Fp4 } = this;
    return Fp4.isValid(c0) && Fp4.isValid(c1);
  }
  is0(num) {
    if (!isObj(num))
      return false;
    const { c0, c1 } = num;
    const { Fp: Fp4 } = this;
    return Fp4.is0(c0) && Fp4.is0(c1);
  }
  isValidNot0(num) {
    return !this.is0(num) && this.isValid(num);
  }
  eql({ c0, c1 }, { c0: r0, c1: r1 }) {
    const { Fp: Fp4 } = this;
    return Fp4.eql(c0, r0) && Fp4.eql(c1, r1);
  }
  neg({ c0, c1 }) {
    const { Fp: Fp4 } = this;
    return Object.freeze({ c0: Fp4.neg(c0), c1: Fp4.neg(c1) });
  }
  pow(num, power) {
    return FpPow(this, num, power);
  }
  invertBatch(nums) {
    return FpInvertBatch(this, nums, true);
  }
  // Normalized
  add(f1, f2) {
    const { Fp: Fp4 } = this;
    const { c0, c1 } = f1;
    const { c0: r0, c1: r1 } = f2;
    return Object.freeze({
      c0: Fp4.add(c0, r0),
      c1: Fp4.add(c1, r1)
    });
  }
  sub({ c0, c1 }, { c0: r0, c1: r1 }) {
    const { Fp: Fp4 } = this;
    return Object.freeze({
      c0: Fp4.sub(c0, r0),
      c1: Fp4.sub(c1, r1)
    });
  }
  mul({ c0, c1 }, rhs) {
    const { Fp: Fp4 } = this;
    if (typeof rhs === "bigint")
      return Object.freeze({ c0: Fp4.mul(c0, rhs), c1: Fp4.mul(c1, rhs) });
    const { c0: r0, c1: r1 } = rhs;
    let t1 = Fp4.mul(c0, r0);
    let t2 = Fp4.mul(c1, r1);
    const o0 = Fp4.sub(t1, t2);
    const o1 = Fp4.sub(Fp4.mul(Fp4.add(c0, c1), Fp4.add(r0, r1)), Fp4.add(t1, t2));
    return Object.freeze({ c0: o0, c1: o1 });
  }
  sqr({ c0, c1 }) {
    const { Fp: Fp4 } = this;
    const a2 = Fp4.add(c0, c1);
    const b2 = Fp4.sub(c0, c1);
    const c2 = Fp4.add(c0, c0);
    return Object.freeze({ c0: Fp4.mul(a2, b2), c1: Fp4.mul(c2, c1) });
  }
  // NonNormalized stuff
  addN(a2, b2) {
    return this.add(a2, b2);
  }
  subN(a2, b2) {
    return this.sub(a2, b2);
  }
  mulN(a2, b2) {
    return this.mul(a2, b2);
  }
  sqrN(a2) {
    return this.sqr(a2);
  }
  // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
  div(lhs, rhs) {
    const { Fp: Fp4 } = this;
    return this.mul(lhs, typeof rhs === "bigint" ? Fp4.inv(Fp4.create(rhs)) : this.inv(rhs));
  }
  inv({ c0: a2, c1: b2 }) {
    const { Fp: Fp4 } = this;
    const factor = Fp4.inv(Fp4.create(a2 * a2 + b2 * b2));
    return Object.freeze({ c0: Fp4.mul(factor, Fp4.create(a2)), c1: Fp4.mul(factor, Fp4.create(-b2)) });
  }
  sqrt(num) {
    const { Fp: Fp4 } = this;
    const Fp22 = this;
    const { c0, c1 } = num;
    if (Fp4.is0(c1)) {
      if (FpLegendre(Fp4, c0) === 1)
        return Fp22.create({ c0: Fp4.sqrt(c0), c1: Fp4.ZERO });
      else
        return Fp22.create({ c0: Fp4.ZERO, c1: Fp4.sqrt(Fp4.div(c0, this.Fp_NONRESIDUE)) });
    }
    const a2 = Fp4.sqrt(Fp4.sub(Fp4.sqr(c0), Fp4.mul(Fp4.sqr(c1), this.Fp_NONRESIDUE)));
    let d2 = Fp4.mul(Fp4.add(a2, c0), this.Fp_div2);
    const legendre = FpLegendre(Fp4, d2);
    if (legendre === -1)
      d2 = Fp4.sub(d2, a2);
    const a0 = Fp4.sqrt(d2);
    const candidateSqrt = Fp22.create({ c0: a0, c1: Fp4.div(Fp4.mul(c1, this.Fp_div2), a0) });
    if (!Fp22.eql(Fp22.sqr(candidateSqrt), num))
      throw new Error("Cannot find square root");
    const x1 = candidateSqrt;
    const x2 = Fp22.neg(x1);
    const { re: re1, im: im1 } = Fp22.reim(x1);
    const { re: re2, im: im2 } = Fp22.reim(x2);
    if (im1 > im2 || im1 === im2 && re1 > re2)
      return x1;
    return x2;
  }
  // Same as sgn0_m_eq_2 in RFC 9380
  isOdd(x2) {
    const { re: x0, im: x1 } = this.reim(x2);
    const sign_0 = x0 % _2n5;
    const zero_0 = x0 === _0n7;
    const sign_1 = x1 % _2n5;
    return BigInt(sign_0 || zero_0 && sign_1) == _1n7;
  }
  // Bytes util
  fromBytes(b2) {
    const { Fp: Fp4 } = this;
    abytes2(b2);
    if (b2.length !== this.BYTES)
      throw new Error("fromBytes invalid length=" + b2.length);
    return this.create({
      c0: Fp4.fromBytes(b2.subarray(0, Fp4.BYTES)),
      c1: Fp4.fromBytes(b2.subarray(Fp4.BYTES))
    });
  }
  toBytes({ c0, c1 }) {
    return concatBytes2(this.Fp.toBytes(c0), this.Fp.toBytes(c1));
  }
  cmov({ c0, c1 }, { c0: r0, c1: r1 }, c2) {
    const { Fp: Fp4 } = this;
    return this.create({
      c0: Fp4.cmov(c0, r0, c2),
      c1: Fp4.cmov(c1, r1, c2)
    });
  }
  reim({ c0, c1 }) {
    return { re: c0, im: c1 };
  }
  Fp4Square(a2, b2) {
    const Fp22 = this;
    const a22 = Fp22.sqr(a2);
    const b22 = Fp22.sqr(b2);
    return {
      first: Fp22.add(Fp22.mulByNonresidue(b22), a22),
      // b² * Nonresidue + a²
      second: Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(a2, b2)), a22), b22)
      // (a + b)² - a² - b²
    };
  }
  // multiply by u + 1
  mulByNonresidue({ c0, c1 }) {
    const { Fp: Fp4, NONRESIDUE: nr } = this;
    if (nr.c0 === Fp4.ONE && nr.c1 === Fp4.ONE) {
      return Object.freeze({ c0: Fp4.sub(c0, c1), c1: Fp4.add(c0, c1) });
    }
    if (nr.c1 === Fp4.ONE) {
      return Object.freeze({
        c0: Fp4.sub(Fp4.mul(c0, nr.c0), c1),
        c1: Fp4.add(c0, Fp4.mul(c1, nr.c0))
      });
    }
    return this.mul({ c0, c1 }, nr);
  }
  frobeniusMap(num, power) {
    const { c0, c1 } = num;
    const { Fp: Fp4 } = this;
    return Object.freeze({ c0, c1: power % 2 === 0 ? c1 : Fp4.neg(c1) });
  }
};
var _Field6 = class {
  ORDER;
  BITS;
  BYTES;
  isLE;
  ZERO;
  ONE;
  Fp2;
  constructor(Fp22) {
    this.Fp2 = Fp22;
    this.ORDER = Fp22.Fp.ORDER ** _6n;
    this.BITS = 3 * Fp22.BITS;
    this.BYTES = 3 * Fp22.BYTES;
    this.isLE = Fp22.isLE;
    this.ZERO = this.create({ c0: Fp22.ZERO, c1: Fp22.ZERO, c2: Fp22.ZERO });
    this.ONE = this.create({ c0: Fp22.ONE, c1: Fp22.ZERO, c2: Fp22.ZERO });
    Object.freeze(this);
  }
  // Most callers never touch Frobenius maps, so keep the sextic tables lazy:
  // eagerly deriving them dominates `bls12-381.js` / `bn254.js` import time.
  get FROBENIUS_COEFFICIENTS_1() {
    const frob2 = _FROBENIUS_COEFFICIENTS_6.get(this);
    if (frob2)
      return frob2[0];
    const { Fp2: Fp22 } = this;
    const { Fp: Fp4 } = Fp22;
    const rows = calcFrobeniusCoefficients(Fp22, Fp22.NONRESIDUE, Fp4.ORDER, 6, 2, 3);
    const cache2 = [Object.freeze(rows[0]), Object.freeze(rows[1])];
    _FROBENIUS_COEFFICIENTS_6.set(this, cache2);
    return cache2[0];
  }
  get FROBENIUS_COEFFICIENTS_2() {
    const frob2 = _FROBENIUS_COEFFICIENTS_6.get(this);
    if (frob2)
      return frob2[1];
    void this.FROBENIUS_COEFFICIENTS_1;
    return _FROBENIUS_COEFFICIENTS_6.get(this)[1];
  }
  add({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({
      c0: Fp22.add(c0, r0),
      c1: Fp22.add(c1, r1),
      c2: Fp22.add(c2, r2)
    });
  }
  sub({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({
      c0: Fp22.sub(c0, r0),
      c1: Fp22.sub(c1, r1),
      c2: Fp22.sub(c2, r2)
    });
  }
  mul({ c0, c1, c2 }, rhs) {
    const { Fp2: Fp22 } = this;
    if (typeof rhs === "bigint") {
      return Object.freeze({
        c0: Fp22.mul(c0, rhs),
        c1: Fp22.mul(c1, rhs),
        c2: Fp22.mul(c2, rhs)
      });
    }
    const { c0: r0, c1: r1, c2: r2 } = rhs;
    const t0 = Fp22.mul(c0, r0);
    const t1 = Fp22.mul(c1, r1);
    const t2 = Fp22.mul(c2, r2);
    return Object.freeze({
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: Fp22.add(t0, Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), Fp22.add(r1, r2)), Fp22.add(t1, t2)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c1), Fp22.add(r0, r1)), Fp22.add(t0, t1)), Fp22.mulByNonresidue(t2)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: Fp22.sub(Fp22.add(t1, Fp22.mul(Fp22.add(c0, c2), Fp22.add(r0, r2))), Fp22.add(t0, t2))
    });
  }
  sqr({ c0, c1, c2 }) {
    const { Fp2: Fp22 } = this;
    let t0 = Fp22.sqr(c0);
    let t1 = Fp22.mul(Fp22.mul(c0, c1), _2n5);
    let t3 = Fp22.mul(Fp22.mul(c1, c2), _2n5);
    let t4 = Fp22.sqr(c2);
    return Object.freeze({
      c0: Fp22.add(Fp22.mulByNonresidue(t3), t0),
      // T3 * (u + 1) + T0
      c1: Fp22.add(Fp22.mulByNonresidue(t4), t1),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: Fp22.sub(Fp22.sub(Fp22.add(Fp22.add(t1, Fp22.sqr(Fp22.add(Fp22.sub(c0, c1), c2))), t3), t0), t4)
    });
  }
  addN(a2, b2) {
    return this.add(a2, b2);
  }
  subN(a2, b2) {
    return this.sub(a2, b2);
  }
  mulN(a2, b2) {
    return this.mul(a2, b2);
  }
  sqrN(a2) {
    return this.sqr(a2);
  }
  create(num) {
    const { Fp2: Fp22 } = this;
    const c0 = Fp22.create(num.c0);
    const c1 = Fp22.create(num.c1);
    const c2 = Fp22.create(num.c2);
    return Object.freeze({ c0, c1, c2 });
  }
  isValid(num) {
    if (!isObj(num))
      throw new TypeError("invalid field element: expected object, got " + typeof num);
    const { c0, c1, c2 } = num;
    const { Fp2: Fp22 } = this;
    return Fp22.isValid(c0) && Fp22.isValid(c1) && Fp22.isValid(c2);
  }
  is0(num) {
    if (!isObj(num))
      return false;
    const { c0, c1, c2 } = num;
    const { Fp2: Fp22 } = this;
    return Fp22.is0(c0) && Fp22.is0(c1) && Fp22.is0(c2);
  }
  isValidNot0(num) {
    return !this.is0(num) && this.isValid(num);
  }
  neg({ c0, c1, c2 }) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({ c0: Fp22.neg(c0), c1: Fp22.neg(c1), c2: Fp22.neg(c2) });
  }
  eql({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) {
    const { Fp2: Fp22 } = this;
    return Fp22.eql(c0, r0) && Fp22.eql(c1, r1) && Fp22.eql(c2, r2);
  }
  sqrt(_2) {
    return notImplemented();
  }
  // Do we need division by bigint at all? Should be done via order:
  div(lhs, rhs) {
    const { Fp2: Fp22 } = this;
    const { Fp: Fp4 } = Fp22;
    return this.mul(lhs, typeof rhs === "bigint" ? Fp4.inv(Fp4.create(rhs)) : this.inv(rhs));
  }
  pow(num, power) {
    return FpPow(this, num, power);
  }
  invertBatch(nums) {
    return FpInvertBatch(this, nums, true);
  }
  inv({ c0, c1, c2 }) {
    const { Fp2: Fp22 } = this;
    let t0 = Fp22.sub(Fp22.sqr(c0), Fp22.mulByNonresidue(Fp22.mul(c2, c1)));
    let t1 = Fp22.sub(Fp22.mulByNonresidue(Fp22.sqr(c2)), Fp22.mul(c0, c1));
    let t2 = Fp22.sub(Fp22.sqr(c1), Fp22.mul(c0, c2));
    let t4 = Fp22.inv(Fp22.add(Fp22.mulByNonresidue(Fp22.add(Fp22.mul(c2, t1), Fp22.mul(c1, t2))), Fp22.mul(c0, t0)));
    return Object.freeze({ c0: Fp22.mul(t4, t0), c1: Fp22.mul(t4, t1), c2: Fp22.mul(t4, t2) });
  }
  // Bytes utils
  fromBytes(b2) {
    const { Fp2: Fp22 } = this;
    abytes2(b2);
    if (b2.length !== this.BYTES)
      throw new Error("fromBytes invalid length=" + b2.length);
    const B2 = Fp22.BYTES;
    return this.create({
      c0: Fp22.fromBytes(b2.subarray(0, B2)),
      c1: Fp22.fromBytes(b2.subarray(B2, B2 * 2)),
      c2: Fp22.fromBytes(b2.subarray(2 * B2))
    });
  }
  toBytes({ c0, c1, c2 }) {
    const { Fp2: Fp22 } = this;
    return concatBytes2(Fp22.toBytes(c0), Fp22.toBytes(c1), Fp22.toBytes(c2));
  }
  cmov({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }, c3) {
    const { Fp2: Fp22 } = this;
    return this.create({
      c0: Fp22.cmov(c0, r0, c3),
      c1: Fp22.cmov(c1, r1, c3),
      c2: Fp22.cmov(c2, r2, c3)
    });
  }
  fromBigSix(tuple) {
    const { Fp2: Fp22 } = this;
    if (!Array.isArray(tuple) || tuple.length !== 6)
      throw new Error("invalid Fp6.fromBigSix");
    for (let i = 0; i < 6; i++)
      if (typeof tuple[i] !== "bigint")
        throw new Error("invalid Fp6.fromBigSix");
    const t = tuple;
    return this.create({
      c0: Fp22.fromBigTuple(t.slice(0, 2)),
      c1: Fp22.fromBigTuple(t.slice(2, 4)),
      c2: Fp22.fromBigTuple(t.slice(4, 6))
    });
  }
  frobeniusMap(num, power) {
    const { c0, c1, c2 } = num;
    if (power % 6 === 0)
      return Object.freeze({ c0, c1, c2 });
    const { Fp2: Fp22 } = this;
    return Object.freeze({
      c0: Fp22.frobeniusMap(c0, power),
      c1: Fp22.mul(Fp22.frobeniusMap(c1, power), this.FROBENIUS_COEFFICIENTS_1[power % 6]),
      c2: Fp22.mul(Fp22.frobeniusMap(c2, power), this.FROBENIUS_COEFFICIENTS_2[power % 6])
    });
  }
  mulByFp2({ c0, c1, c2 }, rhs) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({
      c0: Fp22.mul(c0, rhs),
      c1: Fp22.mul(c1, rhs),
      c2: Fp22.mul(c2, rhs)
    });
  }
  mulByNonresidue({ c0, c1, c2 }) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({ c0: Fp22.mulByNonresidue(c2), c1: c0, c2: c1 });
  }
  // Sparse multiplication
  mul1({ c0, c1, c2 }, b1) {
    const { Fp2: Fp22 } = this;
    return Object.freeze({
      c0: Fp22.mulByNonresidue(Fp22.mul(c2, b1)),
      c1: Fp22.mul(c0, b1),
      c2: Fp22.mul(c1, b1)
    });
  }
  // Sparse multiplication
  mul01({ c0, c1, c2 }, b0, b1) {
    const { Fp2: Fp22 } = this;
    let t0 = Fp22.mul(c0, b0);
    let t1 = Fp22.mul(c1, b1);
    return Object.freeze({
      // ((c1 + c2) * b1 - T1) * (u + 1) + T0
      c0: Fp22.add(Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), b1), t1)), t0),
      // (b0 + b1) * (c0 + c1) - T0 - T1
      c1: Fp22.sub(Fp22.sub(Fp22.mul(Fp22.add(b0, b1), Fp22.add(c0, c1)), t0), t1),
      // (c0 + c2) * b0 - T0 + T1
      c2: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c2), b0), t0), t1)
    });
  }
};
var _FROBENIUS_COEFFICIENTS_6 = /* @__PURE__ */ new WeakMap();
var _Field12 = class {
  ORDER;
  BITS;
  BYTES;
  isLE;
  ZERO;
  ONE;
  Fp6;
  X_LEN;
  finalExponentiate;
  constructor(Fp62, opts) {
    const { X_LEN, Fp12finalExponentiate } = opts;
    const { Fp2: Fp22 } = Fp62;
    const { Fp: Fp4 } = Fp22;
    this.Fp6 = Fp62;
    this.ORDER = Fp4.ORDER ** _12n;
    this.BITS = 2 * Fp62.BITS;
    this.BYTES = 2 * Fp62.BYTES;
    this.isLE = Fp62.isLE;
    this.ZERO = this.create({ c0: Fp62.ZERO, c1: Fp62.ZERO });
    this.ONE = this.create({ c0: Fp62.ONE, c1: Fp62.ZERO });
    this.X_LEN = X_LEN;
    this.finalExponentiate = (num) => {
      const copy2 = ({ c0, c1 }) => Object.freeze({ c0, c1 });
      const copy6 = ({ c0, c1, c2 }) => Object.freeze({ c0: copy2(c0), c1: copy2(c1), c2: copy2(c2) });
      const res = Fp12finalExponentiate(num);
      return Object.freeze({ c0: copy6(res.c0), c1: copy6(res.c1) });
    };
    Object.freeze(this);
  }
  // Keep the degree-12 Frobenius row lazy too; after the first lookup the cached
  // array is reused exactly like the old eager table.
  get FROBENIUS_COEFFICIENTS() {
    const frob2 = _FROBENIUS_COEFFICIENTS_12.get(this);
    if (frob2)
      return frob2;
    const { Fp2: Fp22 } = this.Fp6;
    const { Fp: Fp4 } = Fp22;
    const cache2 = Object.freeze(calcFrobeniusCoefficients(Fp22, Fp22.NONRESIDUE, Fp4.ORDER, 12, 1, 6)[0]);
    _FROBENIUS_COEFFICIENTS_12.set(this, cache2);
    return cache2;
  }
  create(num) {
    const { Fp6: Fp62 } = this;
    const c0 = Fp62.create(num.c0);
    const c1 = Fp62.create(num.c1);
    return Object.freeze({ c0, c1 });
  }
  isValid(num) {
    if (!isObj(num))
      throw new TypeError("invalid field element: expected object, got " + typeof num);
    const { c0, c1 } = num;
    const { Fp6: Fp62 } = this;
    return Fp62.isValid(c0) && Fp62.isValid(c1);
  }
  is0(num) {
    if (!isObj(num))
      return false;
    const { c0, c1 } = num;
    const { Fp6: Fp62 } = this;
    return Fp62.is0(c0) && Fp62.is0(c1);
  }
  isValidNot0(num) {
    return !this.is0(num) && this.isValid(num);
  }
  neg({ c0, c1 }) {
    const { Fp6: Fp62 } = this;
    return Object.freeze({ c0: Fp62.neg(c0), c1: Fp62.neg(c1) });
  }
  eql({ c0, c1 }, { c0: r0, c1: r1 }) {
    const { Fp6: Fp62 } = this;
    return Fp62.eql(c0, r0) && Fp62.eql(c1, r1);
  }
  sqrt(_2) {
    return notImplemented();
  }
  inv({ c0, c1 }) {
    const { Fp6: Fp62 } = this;
    let t = Fp62.inv(Fp62.sub(Fp62.sqr(c0), Fp62.mulByNonresidue(Fp62.sqr(c1))));
    return Object.freeze({ c0: Fp62.mul(c0, t), c1: Fp62.neg(Fp62.mul(c1, t)) });
  }
  div(lhs, rhs) {
    const { Fp6: Fp62 } = this;
    const { Fp2: Fp22 } = Fp62;
    const { Fp: Fp4 } = Fp22;
    return this.mul(lhs, typeof rhs === "bigint" ? Fp4.inv(Fp4.create(rhs)) : this.inv(rhs));
  }
  pow(num, power) {
    return FpPow(this, num, power);
  }
  invertBatch(nums) {
    return FpInvertBatch(this, nums, true);
  }
  // Normalized
  add({ c0, c1 }, { c0: r0, c1: r1 }) {
    const { Fp6: Fp62 } = this;
    return Object.freeze({
      c0: Fp62.add(c0, r0),
      c1: Fp62.add(c1, r1)
    });
  }
  sub({ c0, c1 }, { c0: r0, c1: r1 }) {
    const { Fp6: Fp62 } = this;
    return Object.freeze({
      c0: Fp62.sub(c0, r0),
      c1: Fp62.sub(c1, r1)
    });
  }
  mul({ c0, c1 }, rhs) {
    const { Fp6: Fp62 } = this;
    if (typeof rhs === "bigint")
      return Object.freeze({ c0: Fp62.mul(c0, rhs), c1: Fp62.mul(c1, rhs) });
    let { c0: r0, c1: r1 } = rhs;
    let t1 = Fp62.mul(c0, r0);
    let t2 = Fp62.mul(c1, r1);
    return Object.freeze({
      c0: Fp62.add(t1, Fp62.mulByNonresidue(t2)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: Fp62.sub(Fp62.mul(Fp62.add(c0, c1), Fp62.add(r0, r1)), Fp62.add(t1, t2))
    });
  }
  sqr({ c0, c1 }) {
    const { Fp6: Fp62 } = this;
    let ab = Fp62.mul(c0, c1);
    return Object.freeze({
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: Fp62.sub(Fp62.sub(Fp62.mul(Fp62.add(Fp62.mulByNonresidue(c1), c0), Fp62.add(c0, c1)), ab), Fp62.mulByNonresidue(ab)),
      c1: Fp62.add(ab, ab)
    });
  }
  // NonNormalized stuff
  addN(a2, b2) {
    return this.add(a2, b2);
  }
  subN(a2, b2) {
    return this.sub(a2, b2);
  }
  mulN(a2, b2) {
    return this.mul(a2, b2);
  }
  sqrN(a2) {
    return this.sqr(a2);
  }
  // Bytes utils
  fromBytes(b2) {
    const { Fp6: Fp62 } = this;
    abytes2(b2);
    if (b2.length !== this.BYTES)
      throw new Error("fromBytes invalid length=" + b2.length);
    return this.create({
      c0: Fp62.fromBytes(b2.subarray(0, Fp62.BYTES)),
      c1: Fp62.fromBytes(b2.subarray(Fp62.BYTES))
    });
  }
  toBytes({ c0, c1 }) {
    const { Fp6: Fp62 } = this;
    return concatBytes2(Fp62.toBytes(c0), Fp62.toBytes(c1));
  }
  cmov({ c0, c1 }, { c0: r0, c1: r1 }, c2) {
    const { Fp6: Fp62 } = this;
    return this.create({
      c0: Fp62.cmov(c0, r0, c2),
      c1: Fp62.cmov(c1, r1, c2)
    });
  }
  // Utils
  // toString() {
  //   return '' + 'Fp12(' + this.c0 + this.c1 + '* w');
  // },
  // fromTuple(c: [Fp6, Fp6]) {
  //   return new Fp12(...c);
  // }
  fromBigTwelve(tuple) {
    const { Fp6: Fp62 } = this;
    if (!Array.isArray(tuple) || tuple.length !== 12)
      throw new Error("invalid Fp12.fromBigTwelve");
    for (let i = 0; i < 12; i++)
      if (typeof tuple[i] !== "bigint")
        throw new Error("invalid Fp12.fromBigTwelve");
    const t = tuple;
    return this.create({
      c0: Fp62.fromBigSix(t.slice(0, 6)),
      c1: Fp62.fromBigSix(t.slice(6, 12))
    });
  }
  // Raises to q**i -th power
  frobeniusMap(lhs, power) {
    const p2 = power % 12;
    if (p2 === 0)
      return Object.freeze({ c0: lhs.c0, c1: lhs.c1 });
    if (p2 === 6)
      return this.conjugate(lhs);
    const { Fp6: Fp62 } = this;
    const { Fp2: Fp22 } = Fp62;
    const { c0, c1, c2 } = Fp62.frobeniusMap(lhs.c1, power);
    const coeff = this.FROBENIUS_COEFFICIENTS[p2];
    return Object.freeze({
      c0: Fp62.frobeniusMap(lhs.c0, power),
      c1: Object.freeze({
        c0: Fp22.mul(c0, coeff),
        c1: Fp22.mul(c1, coeff),
        c2: Fp22.mul(c2, coeff)
      })
    });
  }
  mulByFp2({ c0, c1 }, rhs) {
    const { Fp6: Fp62 } = this;
    return Object.freeze({
      c0: Fp62.mulByFp2(c0, rhs),
      c1: Fp62.mulByFp2(c1, rhs)
    });
  }
  conjugate({ c0, c1 }) {
    return Object.freeze({ c0, c1: this.Fp6.neg(c1) });
  }
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  // https://eprint.iacr.org/2010/354.pdf
  _cyclotomicSquare({ c0, c1 }) {
    const { Fp6: Fp62 } = this;
    const { Fp2: Fp22 } = Fp62;
    const { c0: c0c0, c1: c0c1, c2: c0c2 } = c0;
    const { c0: c1c0, c1: c1c1, c2: c1c2 } = c1;
    const { first: t3, second: t4 } = Fp22.Fp4Square(c0c0, c1c1);
    const { first: t5, second: t6 } = Fp22.Fp4Square(c1c0, c0c2);
    const { first: t7, second: t8 } = Fp22.Fp4Square(c0c1, c1c2);
    const t9 = Fp22.mulByNonresidue(t8);
    return Object.freeze({
      c0: Object.freeze({
        c0: Fp22.add(Fp22.mul(Fp22.sub(t3, c0c0), _2n5), t3),
        // 2 * (T3 - c0c0)  + T3
        c1: Fp22.add(Fp22.mul(Fp22.sub(t5, c0c1), _2n5), t5),
        // 2 * (T5 - c0c1)  + T5
        c2: Fp22.add(Fp22.mul(Fp22.sub(t7, c0c2), _2n5), t7)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: Object.freeze({
        c0: Fp22.add(Fp22.mul(Fp22.add(t9, c1c0), _2n5), t9),
        // 2 * (T9 + c1c0) + T9
        c1: Fp22.add(Fp22.mul(Fp22.add(t4, c1c1), _2n5), t4),
        // 2 * (T4 + c1c1) + T4
        c2: Fp22.add(Fp22.mul(Fp22.add(t6, c1c2), _2n5), t6)
      })
    });
  }
  // https://eprint.iacr.org/2009/565.pdf
  _cyclotomicExp(num, n) {
    aInRange("cyclotomic exponent", n, _0n7, _1n7 << BigInt(this.X_LEN));
    if (n === _0n7)
      return this.ONE;
    let z2 = num;
    for (let i = bitLen(n) - 2; i >= 0; i--) {
      z2 = this._cyclotomicSquare(z2);
      if (bitGet(n, i))
        z2 = this.mul(z2, num);
    }
    return z2;
  }
};
var _FROBENIUS_COEFFICIENTS_12 = /* @__PURE__ */ new WeakMap();
function tower12(opts) {
  validateObject(opts, {
    ORDER: "bigint",
    X_LEN: "number",
    FP2_NONRESIDUE: "object",
    Fp2mulByB: "function",
    Fp12finalExponentiate: "function"
  }, { NONRESIDUE: "bigint" });
  asafenumber(opts.X_LEN, "X_LEN");
  if (opts.X_LEN < 1)
    throw new Error("invalid X_LEN");
  const nonresidue = opts.FP2_NONRESIDUE;
  if (!Array.isArray(nonresidue) || nonresidue.length !== 2)
    throw new Error("invalid FP2_NONRESIDUE");
  if (typeof nonresidue[0] !== "bigint" || typeof nonresidue[1] !== "bigint")
    throw new Error("invalid FP2_NONRESIDUE");
  const Fp4 = Field(opts.ORDER);
  const Fp22 = new _Field2(Fp4, opts);
  const Fp62 = new _Field6(Fp22);
  const Fp122 = new _Field12(Fp62, opts);
  return { Fp: Fp4, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 };
}

// node_modules/@noble/curves/bls12-381.js
var _0n8 = BigInt(0);
var _1n8 = BigInt(1);
var _2n6 = BigInt(2);
var _3n6 = BigInt(3);
var _4n5 = BigInt(4);
var BLS_X = BigInt("0xd201000000010000");
var BLS_X_LEN = bitLen(BLS_X);
var bls12_381_CURVE_G1 = {
  p: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  n: BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"),
  h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
  a: _0n8,
  b: _4n5,
  Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
  Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1")
};
var bls12_381_Fr = Field(bls12_381_CURVE_G1.n, {
  modFromBytes: true
});
function bls12FromCompressed(g0, g12, { g2: g22, g3, g4, g5 }) {
  return { c0: { c0: g0, c1: g4, c2: g3 }, c1: { c0: g22, c1: g12, c2: g5 } };
}
function bls12Compress({ c0, c1 }) {
  return { g2: c1.c0, g3: c0.c2, g4: c0.c1, g5: c1.c2 };
}
function bls12CyclotomicSquareCompressed({ g2: g22, g3, g4, g5 }) {
  const { first: h23c0, second: h23c1 } = Fp2.Fp4Square(g4, g5);
  const { first: h45c0, second: h45c1 } = Fp2.Fp4Square(g22, g3);
  const d2 = Fp2.add(g22, g22);
  const d3 = Fp2.add(g3, g3);
  const d4 = Fp2.add(g4, g4);
  const d5 = Fp2.add(g5, g5);
  return {
    g2: Fp2.add(Fp2.mul(Fp2.mulByNonresidue(h23c1), _3n6), d2),
    g3: Fp2.sub(Fp2.mul(h23c0, _3n6), d3),
    g4: Fp2.sub(Fp2.mul(h45c0, _3n6), d4),
    g5: Fp2.add(Fp2.mul(h45c1, _3n6), d5)
  };
}
function bls12RecoverG1Ratio({ g2: g22, g3, g4, g5 }) {
  if (Fp2.is0(g22))
    return { num: Fp2.mul(Fp2.mul(g4, g5), _2n6), den: g3 };
  return {
    num: Fp2.add(Fp2.sub(Fp2.mul(Fp2.sqr(g4), _3n6), Fp2.mul(g3, _2n6)), Fp2.mulByNonresidue(Fp2.sqr(g5))),
    den: Fp2.mul(g22, _4n5)
  };
}
function bls12RecoverG0(g12, { g2: g22, g3, g4, g5 }) {
  const g3g4 = Fp2.mul(g3, g4);
  const t = Fp2.add(Fp2.sub(Fp2.mul(Fp2.sub(Fp2.sqr(g12), g3g4), _2n6), g3g4), Fp2.mul(g22, g5));
  return Fp2.add(Fp2.mulByNonresidue(t), Fp2.ONE);
}
function bls12CyclotomicExpCompressed(num, squarings) {
  const gs = [];
  let g3 = bls12Compress(num);
  for (const count of squarings) {
    for (let i = 0; i < count; i++)
      g3 = bls12CyclotomicSquareCompressed(g3);
    gs.push(g3);
  }
  const isOne = gs.map(({ g2: g22, g3: g32 }) => Fp2.is0(g22) && Fp2.is0(g32));
  const ratios = gs.map(bls12RecoverG1Ratio);
  const invDens = Fp2.invertBatch(ratios.map(({ den }) => den));
  const elems = gs.map((compressed, i) => {
    if (isOne[i])
      return Fp12.ONE;
    const g12 = Fp2.mul(ratios[i].num, invDens[i]);
    return bls12FromCompressed(bls12RecoverG0(g12, compressed), g12, compressed);
  });
  return { result: Fp12.mul(Fp12.mul(elems[0], elems[1]), elems[2]), last: elems[2] };
}
function bls12CyclotomicExpX(num) {
  const { result, last } = bls12CyclotomicExpCompressed(num, [16, 32, 9]);
  let r2 = result;
  let s = last;
  for (let i = 0; i < 3; i++)
    s = Fp12._cyclotomicSquare(s);
  r2 = Fp12.mul(r2, s);
  for (let i = 0; i < 2; i++)
    s = Fp12._cyclotomicSquare(s);
  r2 = Fp12.mul(r2, s);
  s = Fp12._cyclotomicSquare(s);
  return Fp12.mul(r2, s);
}
var { Fp, Fp2, Fp6, Fp12 } = tower12({
  ORDER: bls12_381_CURVE_G1.p,
  X_LEN: BLS_X_LEN,
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  // Public `Fp2.NONRESIDUE` below is the sextic-tower value `(1, 1) = u + 1`;
  // the quadratic non-residue for the base Fp2 construction is still `-1`.
  FP2_NONRESIDUE: [_1n8, _1n8],
  Fp2mulByB: ({ c0, c1 }) => {
    const t0 = Fp.mul(c0, _4n5);
    const t1 = Fp.mul(c1, _4n5);
    return { c0: Fp.sub(t0, t1), c1: Fp.add(t0, t1) };
  },
  Fp12finalExponentiate: (num) => {
    const powMinusX = (num2) => Fp12.conjugate(bls12CyclotomicExpX(num2));
    const t0 = Fp12.div(Fp12.frobeniusMap(num, 6), num);
    const t1 = Fp12.mul(Fp12.frobeniusMap(t0, 2), t0);
    const t2 = powMinusX(t1);
    const t3 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicSquare(t1)), t2);
    const t4 = powMinusX(t3);
    const t5 = powMinusX(t4);
    const t6 = Fp12.mul(powMinusX(t5), Fp12._cyclotomicSquare(t2));
    const t7 = powMinusX(t6);
    const t2_t5_pow_q2 = Fp12.frobeniusMap(Fp12.mul(t2, t5), 2);
    const t4_t1_pow_q3 = Fp12.frobeniusMap(Fp12.mul(t4, t1), 3);
    const t6_t1c_pow_q1 = Fp12.frobeniusMap(Fp12.mul(t6, Fp12.conjugate(t1)), 1);
    const t7_t3c_t1 = Fp12.mul(Fp12.mul(t7, Fp12.conjugate(t3)), t1);
    return Fp12.mul(Fp12.mul(Fp12.mul(t2_t5_pow_q2, t4_t1_pow_q3), t6_t1c_pow_q1), t7_t3c_t1);
  }
});
var frob;
var getFrob = () => frob || (frob = psiFrobenius(Fp, Fp2, Fp2.div(Fp2.ONE, Fp2.NONRESIDUE)));
var G2psi = (c2, P3) => {
  const fn = getFrob().G2psi;
  G2psi = fn;
  return fn(c2, P3);
};
var G2psi2 = (c2, P3) => {
  const fn = getFrob().G2psi2;
  G2psi2 = fn;
  return fn(c2, P3);
};
var hasher_opts = Object.freeze({
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  p: Fp.ORDER,
  m: 2,
  k: 128,
  expand: "xmd",
  hash: sha256
});
var bls12_381_CURVE_G2 = {
  p: Fp2.ORDER,
  n: bls12_381_CURVE_G1.n,
  h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
  a: Fp2.ZERO,
  b: Fp2.fromBigTuple([_4n5, _4n5]),
  Gx: Fp2.fromBigTuple([
    BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
    BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
  ]),
  Gy: Fp2.fromBigTuple([
    BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
    BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
  ])
};
var sortBit = (parts, p2) => {
  for (const part of parts) {
    if (part !== _0n8)
      return Boolean(part * _2n6 / p2);
  }
  return false;
};
var fp2 = {
  // Generic tower bytes use `c0 || c1`, but the BLS12-381 G2 point/signature wire encoding uses
  // `c1 || c0`, so keep this local wrapper instead of changing generic field serialization.
  encode({ c0, c1 }) {
    const { BYTES: L2 } = Fp;
    return concatBytes2(numberToBytesBE(c1, L2), numberToBytesBE(c0, L2));
  },
  decode(bytes) {
    const { BYTES: L2 } = Fp;
    return Fp2.create({
      c0: decodeFp(bytes.subarray(L2)),
      c1: decodeFp(bytes.subarray(0, L2))
    });
  }
};
var BaseFp = Fp;
function decodeFp(bytes) {
  return Fp.fromBytes(bytes);
}
var coder = (name, Fp4, b2, encode3, decode3, yparts) => {
  const F2 = Fp4;
  const enc = encode3;
  const dec = decode3;
  const W2 = F2.BYTES;
  return (allowUncompressed) => ({
    encode(point, compressed = true) {
      if (!compressed && !allowUncompressed)
        throw new Error("invalid signature: expected compressed encoding");
      const infinity = point.is0();
      const { x: x2, y: y2 } = point.toAffine();
      const bytes = compressed ? enc(x2) : concatBytes2(enc(x2), enc(y2));
      let sort;
      if (compressed && !infinity)
        sort = sortBit(yparts(y2), BaseFp.ORDER);
      return setMask(bytes, { compressed, infinity, sort });
    },
    decode(bytes) {
      const raw = allowUncompressed ? abytes2(bytes, void 0, "point") : abytes2(bytes, W2, "signature");
      const { compressed, infinity, sort, value } = parseMask(raw);
      if (!allowUncompressed && !compressed)
        throw new Error("invalid signature: expected compressed encoding");
      const len = compressed ? W2 : 2 * W2;
      if (value.length !== len)
        throw new Error(`invalid ${name} point: expected ${len} bytes`);
      if (infinity) {
        for (const b3 of value) {
          if (b3)
            throw new Error(`invalid ${name} point: non-canonical zero`);
        }
        return { x: F2.ZERO, y: F2.ZERO };
      }
      const x2 = dec(compressed ? value : value.subarray(0, W2));
      let y2;
      if (compressed) {
        y2 = F2.sqrt(F2.add(F2.pow(x2, _3n6), b2));
        if (!y2)
          throw new Error(`invalid ${name} point: compressed`);
        if (sortBit(yparts(y2), BaseFp.ORDER) !== sort)
          y2 = F2.neg(y2);
      } else {
        y2 = dec(value.subarray(W2));
      }
      if (!compressed && F2.is0(x2) && F2.is0(y2))
        throw new Error(`invalid ${name} point: uncompressed`);
      return { x: x2, y: y2 };
    }
  });
};
function validateMask({ compressed, infinity, sort }) {
  if (!compressed && !infinity && sort || // 0010_0000 = 0x20
  !compressed && infinity && sort || // 0110_0000 = 0x60
  compressed && infinity && sort)
    throw new Error("invalid encoding flag");
}
function parseMask(bytes) {
  bytes = copyBytes(bytes);
  const mask = bytes[0] & 224;
  const compressed = !!(mask >> 7 & 1);
  const infinity = !!(mask >> 6 & 1);
  const sort = !!(mask >> 5 & 1);
  validateMask({ compressed, infinity, sort });
  bytes[0] &= 31;
  return { compressed, infinity, sort, value: bytes };
}
function setMask(bytes, mask) {
  if (bytes[0] & 224)
    throw new Error("setMask: non-empty mask");
  validateMask({ compressed: !!mask.compressed, infinity: !!mask.infinity, sort: !!mask.sort });
  if (mask.compressed)
    bytes[0] |= 128;
  if (mask.infinity)
    bytes[0] |= 64;
  if (mask.sort)
    bytes[0] |= 32;
  return bytes;
}
var g1coder = coder("G1", Fp, Fp.create(bls12_381_CURVE_G1.b), (x2) => numberToBytesBE(x2, Fp.BYTES), decodeFp, (y2) => [y2]);
var g1 = { point: g1coder(true), sig: g1coder(false) };
var signatureG1ToBytes = (point) => {
  point.assertValidity();
  return g1.sig.encode(point);
};
function signatureG1FromBytes(bytes) {
  const Point = bls12_381.G1.Point;
  const point = Point.fromAffine(g1.sig.decode(bytes));
  point.assertValidity();
  return point;
}
var g2coder = coder("G2", Fp2, bls12_381_CURVE_G2.b, fp2.encode, fp2.decode, (y2) => [
  y2.c1,
  y2.c0
]);
var g2 = { point: g2coder(true), sig: g2coder(false) };
var signatureG2ToBytes = (point) => {
  point.assertValidity();
  return g2.sig.encode(point);
};
function signatureG2FromBytes(bytes) {
  const Point = bls12_381.G2.Point;
  const point = Point.fromAffine(g2.sig.decode(bytes));
  point.assertValidity();
  return point;
}
var signatureCoders = {
  ShortSignature: {
    fromBytes(bytes) {
      return signatureG1FromBytes(abytes2(bytes));
    },
    fromHex(hex) {
      return signatureG1FromBytes(hexToBytes2(hex));
    },
    toBytes(point) {
      return signatureG1ToBytes(point);
    },
    // Historical alias: BLS signatures have a single compressed byte format here.
    toRawBytes(point) {
      return signatureG1ToBytes(point);
    },
    toHex(point) {
      return bytesToHex2(signatureG1ToBytes(point));
    }
  },
  LongSignature: {
    fromBytes(bytes) {
      return signatureG2FromBytes(abytes2(bytes));
    },
    fromHex(hex) {
      return signatureG2FromBytes(hexToBytes2(hex));
    },
    toBytes(point) {
      return signatureG2ToBytes(point);
    },
    // Historical alias: BLS signatures have a single compressed byte format here.
    toRawBytes(point) {
      return signatureG2ToBytes(point);
    },
    toHex(point) {
      return bytesToHex2(signatureG2ToBytes(point));
    }
  }
};
var fields = {
  Fp,
  Fp2,
  Fp6,
  Fp12,
  Fr: bls12_381_Fr
};
var G1_Point = weierstrass(bls12_381_CURVE_G1, {
  // Public point APIs still accept infinity, even though the Zcash proof
  // encoding rules cited above only define nonzero point encodings.
  allowInfinityPoint: true,
  Fn: bls12_381_Fr,
  fromBytes: g1.point.decode,
  toBytes: (_c, point, isComp) => g1.point.encode(point, isComp),
  // Checks is the point resides in prime-order subgroup.
  // point.isTorsionFree() should return true for valid points
  // It returns false for shitty points.
  // https://eprint.iacr.org/2021/1130.pdf
  isTorsionFree: (c2, point) => {
    const beta = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe");
    const phi = new c2(Fp.mul(point.X, beta), point.Y, point.Z);
    const xP = point.multiplyUnsafe(BLS_X).negate();
    const u2P = xP.multiplyUnsafe(BLS_X);
    return u2P.equals(phi);
  },
  // Clear cofactor of G1
  // https://eprint.iacr.org/2019/403
  clearCofactor: (_c, point) => {
    return point.multiplyUnsafe(BLS_X).add(point);
  }
});
var G2_Point = weierstrass(bls12_381_CURVE_G2, {
  Fp: Fp2,
  // Public point APIs still accept infinity, even though the Zcash proof
  // encoding rules cited above only define nonzero point encodings.
  allowInfinityPoint: true,
  Fn: bls12_381_Fr,
  fromBytes: g2.point.decode,
  toBytes: (_c, point, isComp) => g2.point.encode(point, isComp),
  // https://eprint.iacr.org/2021/1130.pdf
  // Older version: https://eprint.iacr.org/2019/814.pdf
  isTorsionFree: (c2, P3) => {
    return P3.multiplyUnsafe(BLS_X).negate().equals(G2psi(c2, P3));
  },
  // clear_cofactor_bls12381_g2 from RFC 9380.
  // https://eprint.iacr.org/2017/419.pdf
  // prettier-ignore
  clearCofactor: (c2, P3) => {
    const x2 = BLS_X;
    let t1 = P3.multiplyUnsafe(x2).negate();
    let t2 = G2psi(c2, P3);
    let t3 = P3.double();
    t3 = G2psi2(c2, t3);
    t3 = t3.subtract(t2);
    t2 = t1.add(t2);
    t2 = t2.multiplyUnsafe(x2).negate();
    t3 = t3.add(t2);
    t3 = t3.subtract(t1);
    const Q2 = t3.subtract(P3);
    return Q2;
  }
});
var bls12_hasher_opts = {
  mapToG1,
  mapToG2,
  hasherOpts: hasher_opts,
  // RFC 9380 Appendix J defines distinct G1/G2 RO and NU suite IDs, and
  // draft-irtf-cfrg-bls-signature-06 §4.2.1 gives separate G1/G2 `_NUL_` DSTs.
  // Keep G1 encode-to-curve on the G1 domain instead of inheriting G2's `encodeDST`.
  hasherOptsG1: {
    ...hasher_opts,
    m: 1,
    DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_",
    encodeDST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"
  },
  hasherOptsG2: { ...hasher_opts }
};
var bls12_params = {
  ateLoopSize: BLS_X,
  // The BLS parameter x for BLS12-381
  xNegative: true,
  twistType: "multiplicative",
  randomBytes: randomBytes3
};
var bls12_381 = bls(fields, G1_Point, G2_Point, bls12_params, bls12_hasher_opts, signatureCoders);
var isogenyMapG2 = isogenyMap(Fp2, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((i) => i.map((pair) => Fp2.fromBigTuple(pair.map(BigInt)))));
var isogenyMapG1 = isogenyMap(Fp, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j2) => BigInt(j2))));
var G1_SWU;
var G2_SWU;
var getG1_SWU = () => G1_SWU || (G1_SWU = mapToCurveSimpleSWU(Fp, {
  A: Fp.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: Fp.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: Fp.create(BigInt(11))
}));
var getG2_SWU = () => G2_SWU || (G2_SWU = mapToCurveSimpleSWU(Fp2, {
  // SWU map for the RFC 9380 §8.8.2 pre-isogeny G2 curve E':
  // y² = x³ + 240i * x + 1012 + 1012i
  A: Fp2.create({ c0: Fp.create(_0n8), c1: Fp.create(BigInt(240)) }),
  // A' = 240 * I
  B: Fp2.create({ c0: Fp.create(BigInt(1012)), c1: Fp.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: Fp2.create({ c0: Fp.create(BigInt(-2)), c1: Fp.create(BigInt(-1)) })
  // Z: -(2 + I)
}));
function mapToG1(scalars) {
  const { x: x2, y: y2 } = getG1_SWU()(Fp.create(scalars[0]));
  return isogenyMapG1(x2, y2);
}
function mapToG2(scalars) {
  const { x: x2, y: y2 } = getG2_SWU()(Fp2.fromBigTuple(scalars));
  return isogenyMapG2(x2, y2);
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/bls.js
function blsVerify(pk, sig, msg) {
  const primaryKey = typeof pk === "string" ? hexToBytes(pk) : pk;
  const signature = typeof sig === "string" ? hexToBytes(sig) : sig;
  const message = typeof msg === "string" ? hexToBytes(msg) : msg;
  const blss = bls12_381.shortSignatures;
  return blss.verify(signature, blss.hash(message), primaryKey);
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/buffer.js
function uint8FromBufLike2(bufLike) {
  if (!bufLike) {
    throw new Error("Input cannot be null or undefined");
  }
  if (bufLike instanceof Uint8Array) {
    return bufLike;
  }
  if (bufLike instanceof ArrayBuffer) {
    return new Uint8Array(bufLike);
  }
  if (Array.isArray(bufLike)) {
    return new Uint8Array(bufLike);
  }
  if ("buffer" in bufLike) {
    return uint8FromBufLike2(bufLike.buffer);
  }
  return new Uint8Array(bufLike);
}
function uint8Equals2(a2, b2) {
  if (a2.length !== b2.length) {
    return false;
  }
  for (let i = 0; i < a2.length; i++) {
    if (a2[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/@icp-sdk/core/lib/esm/agent/constants.js
var DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS = 5 * 60 * 1e3;
var IC_STATE_ROOT_DOMAIN_SEPARATOR = new TextEncoder().encode("\ric-state-root");
var IC_REQUEST_DOMAIN_SEPARATOR = new TextEncoder().encode("\nic-request");
var IC_RESPONSE_DOMAIN_SEPARATOR = new TextEncoder().encode("\vic-response");
var IC_REQUEST_AUTH_DELEGATION_DOMAIN_SEPARATOR = new TextEncoder().encode("ic-request-auth-delegation");

// node_modules/@icp-sdk/core/lib/esm/agent/certificate.js
var MINUTES_TO_MSEC = 60 * 1e3;
var HOURS_TO_MINUTES = 60;
var DAYS_TO_HOURS = 24;
var DAYS_TO_MINUTES = DAYS_TO_HOURS * HOURS_TO_MINUTES;
var DEFAULT_CERTIFICATE_MAX_AGE_IN_MINUTES = 5;
var DEFAULT_CERTIFICATE_MAX_MINUTES_IN_FUTURE = 5;
var DEFAULT_CERTIFICATE_DELEGATION_MAX_AGE_IN_MINUTES = 30 * DAYS_TO_MINUTES;
var NodeType;
(function(NodeType2) {
  NodeType2[NodeType2["Empty"] = 0] = "Empty";
  NodeType2[NodeType2["Fork"] = 1] = "Fork";
  NodeType2[NodeType2["Labeled"] = 2] = "Labeled";
  NodeType2[NodeType2["Leaf"] = 3] = "Leaf";
  NodeType2[NodeType2["Pruned"] = 4] = "Pruned";
})(NodeType || (NodeType = {}));
function isBufferGreaterThan(a2, b2) {
  for (let i = 0; i < a2.length; i++) {
    if (a2[i] > b2[i]) {
      return true;
    }
  }
  return false;
}
var Certificate = class _Certificate {
  #disableTimeVerification = false;
  #agent = void 0;
  /**
   * Create a new instance of a certificate, automatically verifying it.
   * @param {CreateCertificateOptions} options {@link CreateCertificateOptions}
   * @throws {Error} if the verification of the certificate fails
   */
  static async create(options) {
    const cert = _Certificate.createUnverified(options);
    await cert.verify();
    return cert;
  }
  static createUnverified(options) {
    return new _Certificate(options.certificate, options.rootKey, options.principal, options.blsVerify ?? blsVerify, options.maxAgeInMinutes, options.disableTimeVerification, options.agent);
  }
  constructor(certificate, _rootKey, _principal, _blsVerify, _maxAgeInMinutes = DEFAULT_CERTIFICATE_MAX_AGE_IN_MINUTES, disableTimeVerification = false, agent) {
    this._rootKey = _rootKey;
    this._principal = _principal;
    this._blsVerify = _blsVerify;
    this._maxAgeInMinutes = _maxAgeInMinutes;
    this.#disableTimeVerification = disableTimeVerification;
    this.cert = decode2(certificate);
    if (agent && "getTimeDiffMsecs" in agent && "hasSyncedTime" in agent && "syncTime" in agent) {
      this.#agent = agent;
    }
  }
  /**
   * Lookup a path in the certificate tree, using {@link lookup_path}.
   * @param path The path to lookup.
   * @returns The result of the lookup.
   */
  lookup_path(path) {
    return lookup_path(path, this.cert.tree);
  }
  /**
   * Lookup a subtree in the certificate tree, using {@link lookup_subtree}.
   * @param path The path to lookup.
   * @returns The result of the lookup.
   */
  lookup_subtree(path) {
    return lookup_subtree(path, this.cert.tree);
  }
  async verify() {
    const rootHash = await reconstruct(this.cert.tree);
    const derKey = await this._checkDelegationAndGetKey(this.cert.delegation);
    const sig = this.cert.signature;
    const key = extractDER(derKey);
    const msg = concatBytes(IC_STATE_ROOT_DOMAIN_SEPARATOR, rootHash);
    const lookupTime = lookupResultToBuffer(this.lookup_path(["time"]));
    if (!lookupTime) {
      throw ProtocolError.fromCode(new CertificateVerificationErrorCode("Certificate does not contain a time"));
    }
    if (!this.#disableTimeVerification) {
      const timeDiffMsecs = this.#agent?.getTimeDiffMsecs() ?? 0;
      const maxAgeInMsec = this._maxAgeInMinutes * MINUTES_TO_MSEC;
      const now = /* @__PURE__ */ new Date();
      const adjustedNow = now.getTime() + timeDiffMsecs;
      const earliestCertificateTime = adjustedNow - maxAgeInMsec;
      const latestCertificateTime = adjustedNow + DEFAULT_CERTIFICATE_MAX_MINUTES_IN_FUTURE * MINUTES_TO_MSEC;
      const certTime = decodeTime(lookupTime);
      const isCertificateTimePast = certTime.getTime() < earliestCertificateTime;
      const isCertificateTimeFuture = certTime.getTime() > latestCertificateTime;
      if ((isCertificateTimePast || isCertificateTimeFuture) && this.#agent && !this.#agent.hasSyncedTime()) {
        await this._syncTime();
        return await this.verify();
      }
      if (isCertificateTimePast) {
        throw TrustError.fromCode(new CertificateTimeErrorCode(this._maxAgeInMinutes, certTime, now, timeDiffMsecs, "past"));
      } else if (isCertificateTimeFuture) {
        if (this.#agent?.hasSyncedTime()) {
          throw UnknownError.fromCode(new UnexpectedErrorCode("System time has been synced with the IC network, but certificate is still too far in the future."));
        }
        throw TrustError.fromCode(new CertificateTimeErrorCode(5, certTime, now, timeDiffMsecs, "future"));
      }
    }
    try {
      const sigVer = await this._blsVerify(key, sig, msg);
      if (!sigVer) {
        throw TrustError.fromCode(new CertificateVerificationErrorCode("Invalid signature"));
      }
    } catch (err) {
      throw TrustError.fromCode(new CertificateVerificationErrorCode("Signature verification failed", err));
    }
  }
  async _checkDelegationAndGetKey(d2) {
    if (!d2) {
      return this._rootKey;
    }
    const cert = _Certificate.createUnverified({
      certificate: d2.certificate,
      rootKey: this._rootKey,
      principal: this._principal,
      blsVerify: this._blsVerify,
      disableTimeVerification: this.#disableTimeVerification,
      maxAgeInMinutes: DEFAULT_CERTIFICATE_DELEGATION_MAX_AGE_IN_MINUTES,
      agent: this.#agent
    });
    if (cert.cert.delegation) {
      throw ProtocolError.fromCode(new CertificateHasTooManyDelegationsErrorCode());
    }
    await cert.verify();
    let subnetId;
    if (isCanisterPrincipal(this._principal)) {
      const canisterId = this._principal.canisterId;
      subnetId = Principal.fromUint8Array(d2.subnet_id);
      const canisterInRange = check_canister_ranges({
        canisterId,
        subnetId,
        tree: cert.cert.tree
      });
      if (!canisterInRange) {
        throw TrustError.fromCode(new CertificateNotAuthorizedErrorCode(canisterId, subnetId));
      }
    } else if (isSubnetPrincipal(this._principal)) {
      subnetId = this._principal.subnetId;
    } else {
      throw UNREACHABLE_ERROR;
    }
    const publicKeyLookup = lookupResultToBuffer(cert.lookup_path(["subnet", subnetId.toUint8Array(), "public_key"]));
    if (!publicKeyLookup) {
      if (isSubnetPrincipal(this._principal)) {
        throw TrustError.fromCode(new CertificateNotAuthorizedForSubnetErrorCode(subnetId));
      } else {
        throw TrustError.fromCode(new MissingLookupValueErrorCode(`Could not find subnet key for subnet ID ${subnetId.toText()}`));
      }
    }
    return publicKeyLookup;
  }
  async _syncTime() {
    if (!this.#agent) {
      return;
    }
    if (isCanisterPrincipal(this._principal)) {
      await this.#agent.syncTime({ canisterId: this._principal.canisterId });
    } else {
      await this.#agent.syncTime({ subnetId: this._principal.subnetId });
    }
  }
};
function isSubnetPrincipal(principal) {
  return "subnetId" in principal;
}
function isCanisterPrincipal(principal) {
  return "canisterId" in principal;
}
var DER_PREFIX = hexToBytes("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");
var KEY_LENGTH = 96;
function extractDER(buf) {
  const expectedLength = DER_PREFIX.byteLength + KEY_LENGTH;
  if (buf.byteLength !== expectedLength) {
    throw ProtocolError.fromCode(new DerKeyLengthMismatchErrorCode(expectedLength, buf.byteLength));
  }
  const prefix = buf.slice(0, DER_PREFIX.byteLength);
  if (!uint8Equals2(prefix, DER_PREFIX)) {
    throw ProtocolError.fromCode(new DerPrefixMismatchErrorCode(DER_PREFIX, prefix));
  }
  return buf.slice(DER_PREFIX.byteLength);
}
function lookupResultToBuffer(result) {
  if (result.status !== LookupPathStatus.Found) {
    return void 0;
  }
  if (result.value instanceof Uint8Array) {
    return result.value;
  }
  return void 0;
}
async function reconstruct(t) {
  switch (t[0]) {
    case NodeType.Empty:
      return sha256(domain_sep("ic-hashtree-empty"));
    case NodeType.Pruned:
      return t[1];
    case NodeType.Leaf:
      return sha256(concatBytes(domain_sep("ic-hashtree-leaf"), t[1]));
    case NodeType.Labeled:
      return sha256(concatBytes(domain_sep("ic-hashtree-labeled"), t[1], await reconstruct(t[2])));
    case NodeType.Fork:
      return sha256(concatBytes(domain_sep("ic-hashtree-fork"), await reconstruct(t[1]), await reconstruct(t[2])));
    default:
      throw UNREACHABLE_ERROR;
  }
}
function domain_sep(s) {
  const len = new Uint8Array([s.length]);
  const str2 = new TextEncoder().encode(s);
  return concatBytes(len, str2);
}
function pathToLabel(path) {
  return typeof path[0] === "string" ? utf8ToBytes(path[0]) : path[0];
}
var LookupPathStatus;
(function(LookupPathStatus2) {
  LookupPathStatus2["Unknown"] = "Unknown";
  LookupPathStatus2["Absent"] = "Absent";
  LookupPathStatus2["Found"] = "Found";
  LookupPathStatus2["Error"] = "Error";
})(LookupPathStatus || (LookupPathStatus = {}));
var LookupSubtreeStatus;
(function(LookupSubtreeStatus2) {
  LookupSubtreeStatus2["Absent"] = "Absent";
  LookupSubtreeStatus2["Unknown"] = "Unknown";
  LookupSubtreeStatus2["Found"] = "Found";
})(LookupSubtreeStatus || (LookupSubtreeStatus = {}));
var LookupLabelStatus;
(function(LookupLabelStatus2) {
  LookupLabelStatus2["Absent"] = "Absent";
  LookupLabelStatus2["Unknown"] = "Unknown";
  LookupLabelStatus2["Found"] = "Found";
  LookupLabelStatus2["Less"] = "Less";
  LookupLabelStatus2["Greater"] = "Greater";
})(LookupLabelStatus || (LookupLabelStatus = {}));
function lookup_path(path, tree) {
  if (path.length === 0) {
    switch (tree[0]) {
      case NodeType.Empty: {
        return {
          status: LookupPathStatus.Absent
        };
      }
      case NodeType.Leaf: {
        if (!tree[1]) {
          throw UnknownError.fromCode(new HashTreeDecodeErrorCode("Invalid tree structure for leaf"));
        }
        if (tree[1] instanceof Uint8Array) {
          return {
            status: LookupPathStatus.Found,
            value: tree[1].slice(tree[1].byteOffset, tree[1].byteLength + tree[1].byteOffset)
          };
        }
        throw UNREACHABLE_ERROR;
      }
      case NodeType.Pruned: {
        return {
          status: LookupPathStatus.Unknown
        };
      }
      case NodeType.Labeled:
      case NodeType.Fork: {
        return {
          status: LookupPathStatus.Error
        };
      }
      default: {
        throw UNREACHABLE_ERROR;
      }
    }
  }
  const label = pathToLabel(path);
  const lookupResult = find_label(label, tree);
  switch (lookupResult.status) {
    case LookupLabelStatus.Found: {
      return lookup_path(path.slice(1), lookupResult.value);
    }
    case LookupLabelStatus.Absent:
    case LookupLabelStatus.Greater:
    case LookupLabelStatus.Less: {
      return {
        status: LookupPathStatus.Absent
      };
    }
    case LookupLabelStatus.Unknown: {
      return {
        status: LookupPathStatus.Unknown
      };
    }
    default: {
      throw UNREACHABLE_ERROR;
    }
  }
}
function lookup_subtree(path, tree) {
  if (path.length === 0) {
    return {
      status: LookupSubtreeStatus.Found,
      value: tree
    };
  }
  const label = pathToLabel(path);
  const lookupResult = find_label(label, tree);
  switch (lookupResult.status) {
    case LookupLabelStatus.Found: {
      return lookup_subtree(path.slice(1), lookupResult.value);
    }
    case LookupLabelStatus.Unknown: {
      return {
        status: LookupSubtreeStatus.Unknown
      };
    }
    case LookupLabelStatus.Absent:
    case LookupLabelStatus.Greater:
    case LookupLabelStatus.Less: {
      return {
        status: LookupSubtreeStatus.Absent
      };
    }
    default: {
      throw UNREACHABLE_ERROR;
    }
  }
}
function flatten_forks(t) {
  switch (t[0]) {
    case NodeType.Empty:
      return [];
    case NodeType.Fork:
      return flatten_forks(t[1]).concat(flatten_forks(t[2]));
    default:
      return [t];
  }
}
function find_label(label, tree) {
  switch (tree[0]) {
    // if we have a labelled node, compare the node's label to the one we are
    // looking for
    case NodeType.Labeled:
      if (isBufferGreaterThan(label, tree[1])) {
        return {
          status: LookupLabelStatus.Greater
        };
      }
      if (uint8Equals2(label, tree[1])) {
        return {
          status: LookupLabelStatus.Found,
          value: tree[2]
        };
      }
      return {
        status: LookupLabelStatus.Less
      };
    // if we have a fork node, we need to search both sides, starting with the left
    case NodeType.Fork: {
      const leftLookupResult = find_label(label, tree[1]);
      switch (leftLookupResult.status) {
        // if the label we're searching for is greater than the left node lookup,
        // we need to search the right node
        case LookupLabelStatus.Greater: {
          const rightLookupResult = find_label(label, tree[2]);
          if (rightLookupResult.status === LookupLabelStatus.Less) {
            return {
              status: LookupLabelStatus.Absent
            };
          }
          return rightLookupResult;
        }
        // if the left node returns an uncertain result, we need to search the
        // right node
        case LookupLabelStatus.Unknown: {
          const rightLookupResult = find_label(label, tree[2]);
          if (rightLookupResult.status === LookupLabelStatus.Less) {
            return {
              status: LookupLabelStatus.Unknown
            };
          }
          return rightLookupResult;
        }
        // if the label we're searching for is not greater than the left node
        // lookup, or the result is not uncertain, we stop searching and return
        // whatever the result of the left node lookup was, which can be either
        // Found or Absent
        default: {
          return leftLookupResult;
        }
      }
    }
    // if we encounter a Pruned node, we can't know for certain if the label
    // we're searching for is present or not
    case NodeType.Pruned:
      return {
        status: LookupLabelStatus.Unknown
      };
    // if the current node is Empty, or a Leaf, we can stop searching because
    // we know for sure that the label we're searching for is not present
    default:
      return {
        status: LookupLabelStatus.Absent
      };
  }
}
function list_paths(path, tree) {
  switch (tree[0]) {
    case NodeType.Empty | NodeType.Pruned: {
      return [];
    }
    case NodeType.Leaf: {
      return [path];
    }
    case NodeType.Fork: {
      return list_paths(path, tree[1]).concat(list_paths(path, tree[2]));
    }
    case NodeType.Labeled: {
      const label = tree[1];
      const subtree = tree[2];
      const pathWithLabel = [...path, label];
      return list_paths(pathWithLabel, subtree);
    }
    default: {
      throw UNREACHABLE_ERROR;
    }
  }
}
function check_canister_ranges(params) {
  const rangesLookupValue = lookupCanisterRanges(params);
  const ranges = decodeCanisterRanges(rangesLookupValue);
  const { canisterId } = params;
  const canisterInRange = ranges.some((r2) => r2[0].ltEq(canisterId) && r2[1].gtEq(canisterId));
  return canisterInRange;
}
function lookupCanisterRanges(params) {
  const { subnetId, tree, canisterId } = params;
  const canisterRangeShardsLookup = lookup_subtree(["canister_ranges", subnetId.toUint8Array()], tree);
  if (canisterRangeShardsLookup.status !== LookupSubtreeStatus.Found) {
    return lookupCanisterRangesFallback(subnetId, tree);
  }
  const canisterRangeShards = canisterRangeShardsLookup.value;
  const shardPaths = getCanisterRangeShardPaths(canisterRangeShards);
  if (shardPaths.length === 0) {
    throw ProtocolError.fromCode(new CertificateNotAuthorizedErrorCode(canisterId, subnetId));
  }
  shardPaths.sort(compare);
  const shardDivision = getCanisterRangeShardPartitionPoint(shardPaths, canisterId);
  const maxPotentialShard = shardPaths[shardDivision];
  const canisterRange = getCanisterRangeFromShards(maxPotentialShard, canisterRangeShards);
  return canisterRange;
}
function lookupCanisterRangesFallback(subnetId, tree) {
  const lookupResult = lookup_path(["subnet", subnetId.toUint8Array(), "canister_ranges"], tree);
  if (lookupResult.status !== LookupPathStatus.Found) {
    throw ProtocolError.fromCode(new LookupErrorCode(`Could not find canister ranges for subnet ${subnetId.toText()}`, lookupResult.status));
  }
  return lookupResult.value;
}
function decodeCanisterRanges(lookupValue) {
  const ranges_arr = decode2(lookupValue);
  const ranges = ranges_arr.map((v2) => [
    Principal.fromUint8Array(v2[0]),
    Principal.fromUint8Array(v2[1])
  ]);
  return ranges;
}
function getCanisterRangeShardPaths(canisterRangeShards) {
  const shardPaths = [];
  for (const path of list_paths([], canisterRangeShards)) {
    const firstLabel = path[0];
    if (!firstLabel) {
      throw ProtocolError.fromCode(new CertificateVerificationErrorCode("Path is invalid"));
    }
    shardPaths.push(firstLabel);
  }
  return shardPaths;
}
function getCanisterRangeShardPartitionPoint(shardPaths, canisterId) {
  const canisterIdBytes = canisterId.toUint8Array();
  let left = 0;
  let right = shardPaths.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (compare(shardPaths[mid], canisterIdBytes) <= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
function getCanisterRangeFromShards(maxShardPath, canisterRangeShards) {
  const canisterRange = lookup_path([maxShardPath], canisterRangeShards);
  if (canisterRange.status !== LookupPathStatus.Found) {
    throw ProtocolError.fromCode(new LookupErrorCode(`Could not find canister range for shard ${maxShardPath.toString()}`, canisterRange.status));
  }
  return canisterRange.value;
}
function getSubnetIdFromCertificate(certificate, rootKey) {
  if (certificate.delegation) {
    return Principal.fromUint8Array(certificate.delegation.subnet_id);
  }
  return Principal.selfAuthenticating(rootKey);
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/readState.js
var IC_ROOT_SUBNET_ID = Principal.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe");
var KnownPath = class {
  constructor(path, decode3) {
    this.decode = decode3;
    this.key = /* @__PURE__ */ Symbol();
    const segments = Array.isArray(path) ? path : [path];
    this.path = segments.map((segment) => typeof segment === "string" ? utf8ToBytes(segment) : segment);
  }
};
var StatePaths = {
  /** The canister's or subnet's time, as a {@link Date}. */
  time: new KnownPath(["time"], decodeTime),
  /**
   * The given canister's controllers, as {@link Principal}s.
   * @param canisterId the canister to scope the path to
   */
  canisterControllers: (canisterId) => new KnownPath(["canister", canisterId.toUint8Array(), "controllers"], decodeControllers),
  /**
   * The given canister's module hash.
   * @param canisterId the canister to scope the path to
   */
  canisterModuleHash: (canisterId) => new KnownPath(["canister", canisterId.toUint8Array(), "module_hash"], (x2) => x2),
  /**
   * The given canister's `candid:service` metadata, as a UTF-8 string.
   * @param canisterId the canister to scope the path to
   */
  canisterCandid: (canisterId) => StatePaths.canisterMetadataString(canisterId, "candid:service"),
  /**
   * The given canister's metadata entry, as a UTF-8 string.
   * @param canisterId the canister to scope the path to
   * @param key the metadata key to read
   */
  canisterMetadataString: (canisterId, key) => new KnownPath(["canister", canisterId.toUint8Array(), "metadata", key], (bytes) => new TextDecoder().decode(bytes)),
  /**
   * The given subnet's canister ID ranges.
   * @param subnetId the subnet to scope the path to
   */
  subnetCanisterRanges: (subnetId) => new KnownPath(["subnet", subnetId.toUint8Array(), "canister_ranges"], decodeCanisterRanges),
  /**
   * The given subnet's public key, as raw bytes.
   * @param subnetId the subnet to scope the path to
   */
  subnetPublicKey: (subnetId) => new KnownPath(["subnet", subnetId.toUint8Array(), "public_key"], (bytes) => bytes)
};
var StateValues = class {
  #values;
  constructor(values = /* @__PURE__ */ new Map()) {
    this.#values = values;
  }
  /**
   * The decoded value for `path`, or `null` if it was absent from the certificate or not requested.
   * @param path the {@link KnownPath} whose value to read
   */
  get(path) {
    return this.#values.get(path.key) ?? null;
  }
};
function encodePath(path) {
  return Array.isArray(path) ? path : path.path;
}
function decodeValue(data, strategy) {
  switch (strategy) {
    case "raw":
      return data;
    case "leb128":
      return decodeLeb128(data);
    case "cbor":
      return decode2(data);
    case "hex":
      return bytesToHex(data);
    case "utf-8":
      return new TextDecoder().decode(data);
  }
}
function decodeControllers(buf) {
  const controllersRaw = decode2(buf);
  return controllersRaw.map((buf2) => {
    return Principal.fromUint8Array(buf2);
  });
}
function lookupNodeKeysFromCertificate(certificate, subnetId) {
  const subnetLookupResult = lookup_subtree(["subnet", subnetId.toUint8Array(), "node"], certificate.tree);
  if (subnetLookupResult.status !== LookupSubtreeStatus.Found) {
    throw ProtocolError.fromCode(new LookupErrorCode("Node not found", subnetLookupResult.status));
  }
  if (subnetLookupResult.value instanceof Uint8Array) {
    throw UnknownError.fromCode(new HashTreeDecodeErrorCode("Invalid node tree"));
  }
  const nodeForks = flatten_forks(subnetLookupResult.value);
  const nodeKeys = /* @__PURE__ */ new Map();
  nodeForks.forEach((fork) => {
    const node_id = Principal.from(fork[1]).toText();
    const publicKeyLookupResult = lookup_path(["public_key"], fork[2]);
    if (publicKeyLookupResult.status !== LookupPathStatus.Found) {
      throw ProtocolError.fromCode(new LookupErrorCode("Public key not found", publicKeyLookupResult.status));
    }
    const derEncodedPublicKey = publicKeyLookupResult.value;
    if (derEncodedPublicKey.byteLength !== 44) {
      throw ProtocolError.fromCode(new DerKeyLengthMismatchErrorCode(44, derEncodedPublicKey.byteLength));
    } else {
      nodeKeys.set(node_id, derEncodedPublicKey);
    }
  });
  return nodeKeys;
}

// node_modules/@icp-sdk/core/lib/esm/agent/agent/api.js
var ReplicaRejectCode;
(function(ReplicaRejectCode2) {
  ReplicaRejectCode2[ReplicaRejectCode2["SysFatal"] = 1] = "SysFatal";
  ReplicaRejectCode2[ReplicaRejectCode2["SysTransient"] = 2] = "SysTransient";
  ReplicaRejectCode2[ReplicaRejectCode2["DestinationInvalid"] = 3] = "DestinationInvalid";
  ReplicaRejectCode2[ReplicaRejectCode2["CanisterReject"] = 4] = "CanisterReject";
  ReplicaRejectCode2[ReplicaRejectCode2["CanisterError"] = 5] = "CanisterError";
})(ReplicaRejectCode || (ReplicaRejectCode = {}));
var QueryResponseStatus;
(function(QueryResponseStatus2) {
  QueryResponseStatus2["Replied"] = "replied";
  QueryResponseStatus2["Rejected"] = "rejected";
})(QueryResponseStatus || (QueryResponseStatus = {}));
function isV2ResponseBody(body) {
  return body !== null && body !== void 0 && "reject_code" in body;
}
function isV4ResponseBody(body) {
  return body !== null && body !== void 0 && "certificate" in body;
}

// node_modules/@icp-sdk/core/lib/esm/agent/request_id.js
function hashValue(value) {
  if (typeof value === "string") {
    return hashString(value);
  }
  if (typeof value === "number") {
    return sha256(lebEncode(value));
  }
  if (value instanceof Uint8Array || ArrayBuffer.isView(value)) {
    return sha256(uint8FromBufLike2(value));
  }
  if (Array.isArray(value)) {
    const vals = value.map(hashValue);
    return sha256(concatBytes(...vals));
  }
  if (value && typeof value === "object" && value._isPrincipal) {
    return sha256(value.toUint8Array());
  }
  if (typeof value === "object" && value !== null && typeof value.toHash === "function") {
    return hashValue(value.toHash());
  }
  if (typeof value === "object") {
    return hashOfMap(value);
  }
  if (typeof value === "bigint") {
    return sha256(lebEncode(value));
  }
  throw InputError.fromCode(new HashValueErrorCode(value));
}
var hashString = (value) => {
  const encoded = new TextEncoder().encode(value);
  return sha256(encoded);
};
function requestIdOf(request4) {
  return hashOfMap(request4);
}
function hashOfMap(map) {
  const hashed = Object.entries(map).filter(([, value]) => value !== void 0).map(([key, value]) => {
    const hashedKey = hashString(key);
    const hashedValue = hashValue(value);
    return [hashedKey, hashedValue];
  });
  const traversed = hashed;
  const sorted = traversed.sort(([k1], [k2]) => {
    return compare(k1, k2);
  });
  const concatenated = concatBytes(...sorted.map((x2) => concatBytes(...x2)));
  const result = sha256(concatenated);
  return result;
}

// node_modules/@icp-sdk/core/lib/esm/agent/auth.js
var SignIdentity = class {
  /**
   * Get the principal represented by this identity. Normally should be a
   * `Principal.selfAuthenticating()`.
   */
  getPrincipal() {
    if (!this._principal) {
      this._principal = Principal.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()));
    }
    return this._principal;
  }
  /**
   * Transform a request into a signed version of the request. This is done last
   * after the transforms on the body of a request. The returned object can be
   * anything, but must be serializable to CBOR.
   * @param request - internet computer request to transform
   */
  async transformRequest(request4) {
    const { body, ...fields2 } = request4;
    const requestId = requestIdOf(body);
    return {
      ...fields2,
      body: {
        content: body,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(concatBytes(IC_REQUEST_DOMAIN_SEPARATOR, requestId))
      }
    };
  }
};
var AnonymousIdentity = class {
  getPrincipal() {
    return Principal.anonymous();
  }
  async transformRequest(request4) {
    return {
      ...request4,
      body: { content: request4.body }
    };
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/utils/random.js
var randomNumber = () => {
  if (typeof window !== "undefined" && !!window.crypto && !!window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  }
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0];
  }
  if (typeof crypto !== "undefined" && crypto.randomInt) {
    return crypto.randomInt(0, 4294967295);
  }
  return Math.floor(Math.random() * 4294967295);
};

// node_modules/@icp-sdk/core/lib/esm/agent/agent/http/types.js
var Endpoint;
(function(Endpoint2) {
  Endpoint2["Query"] = "read";
  Endpoint2["ReadState"] = "read_state";
  Endpoint2["Call"] = "call";
})(Endpoint || (Endpoint = {}));
var SubmitRequestType;
(function(SubmitRequestType2) {
  SubmitRequestType2["Call"] = "call";
})(SubmitRequestType || (SubmitRequestType = {}));
var ReadRequestType;
(function(ReadRequestType2) {
  ReadRequestType2["Query"] = "query";
  ReadRequestType2["ReadState"] = "read_state";
})(ReadRequestType || (ReadRequestType = {}));
var RequestStatusResponseStatus;
(function(RequestStatusResponseStatus2) {
  RequestStatusResponseStatus2["Received"] = "received";
  RequestStatusResponseStatus2["Processing"] = "processing";
  RequestStatusResponseStatus2["Replied"] = "replied";
  RequestStatusResponseStatus2["Rejected"] = "rejected";
  RequestStatusResponseStatus2["Unknown"] = "unknown";
  RequestStatusResponseStatus2["Done"] = "done";
})(RequestStatusResponseStatus || (RequestStatusResponseStatus = {}));
function makeNonce() {
  const buffer = new ArrayBuffer(16);
  const view = new DataView(buffer);
  const rand1 = randomNumber();
  const rand2 = randomNumber();
  const rand3 = randomNumber();
  const rand4 = randomNumber();
  view.setUint32(0, rand1);
  view.setUint32(4, rand2);
  view.setUint32(8, rand3);
  view.setUint32(12, rand4);
  return Object.assign(new Uint8Array(buffer), { __nonce__: void 0 });
}

// node_modules/@icp-sdk/core/lib/esm/agent/agent/http/transforms.js
function makeNonceTransform(nonceFn = makeNonce) {
  return async (request4) => {
    const headers = request4.request.headers;
    request4.request.headers = headers;
    if (request4.endpoint === Endpoint.Call) {
      request4.body.nonce = nonceFn();
    }
  };
}
function httpHeadersTransform(headers) {
  const headerFields = [];
  headers.forEach((value, key) => {
    headerFields.push([key, value]);
  });
  return headerFields;
}

// node_modules/@icp-sdk/core/lib/esm/agent/canisterStatus/index.js
var namedToKnown = (path, canisterId) => {
  switch (path) {
    case "time":
      return StatePaths.time;
    case "controllers":
      return StatePaths.canisterControllers(canisterId);
    case "module_hash":
      return new KnownPath(StatePaths.canisterModuleHash(canisterId).path, bytesToHex);
    case "candid":
      return StatePaths.canisterCandid(canisterId);
  }
};
var customToKnown = (custom, canisterId) => {
  const decode3 = (bytes) => decodeValue(bytes, custom.decodeStrategy);
  if (typeof custom.path === "string" || custom.path instanceof Uint8Array) {
    return new KnownPath(["canister", canisterId.toUint8Array(), "metadata", custom.path], decode3);
  }
  return new KnownPath(custom.path, decode3);
};
var request = async (options) => {
  const { agent, paths, disableCertificateTimeVerification = false } = options;
  const canisterId = Principal.from(options.canisterId);
  const uniquePaths = [...new Set(paths ?? [])];
  const status = /* @__PURE__ */ new Map();
  const keyOf = (path) => typeof path === "string" ? path : path.key;
  const promises = uniquePaths.map(async (path) => {
    try {
      if (agent.rootKey === null) {
        throw ExternalError.fromCode(new MissingRootKeyErrorCode());
      }
      const rootKey = agent.rootKey;
      if (path === "subnet") {
        const response = await agent.readState({ canisterId }, {
          paths: [[utf8ToBytes("subnet")]],
          disableTimeVerification: disableCertificateTimeVerification
        });
        status.set("subnet", fetchNodeKeys(response.certificate, canisterId, rootKey));
        return;
      }
      const known = typeof path === "string" ? namedToKnown(path, canisterId) : customToKnown(path, canisterId);
      const { values } = await agent.readState({ canisterId }, {
        paths: [known],
        disableTimeVerification: disableCertificateTimeVerification
      });
      status.set(keyOf(path), values.get(known));
    } catch (error) {
      if (error instanceof AgentError && (error.hasCode(CertificateVerificationErrorCode) || error.hasCode(CertificateTimeErrorCode) || error.hasCode(MissingRootKeyErrorCode))) {
        throw error;
      }
      status.set(keyOf(path), null);
    }
  });
  await Promise.all(promises);
  return status;
};
var fetchNodeKeys = (certificate, canisterId, root_key) => {
  if (!canisterId._isPrincipal) {
    throw InputError.fromCode(new UnexpectedErrorCode("Invalid canisterId"));
  }
  const cert = decode2(certificate);
  const { delegation } = cert;
  let subnetId;
  if (delegation && delegation.subnet_id) {
    subnetId = Principal.fromUint8Array(new Uint8Array(delegation.subnet_id));
  } else if (!delegation && typeof root_key !== "undefined") {
    subnetId = Principal.selfAuthenticating(new Uint8Array(root_key));
  } else {
    subnetId = IC_ROOT_SUBNET_ID;
  }
  const nodeKeys = lookupNodeKeysFromCertificate(cert, subnetId);
  return {
    subnetId: subnetId.toText(),
    nodeKeys
  };
};

// node_modules/@icp-sdk/core/lib/esm/agent/subnetStatus/index.js
var namedToKnown2 = (path, subnetId) => {
  switch (path) {
    case "time":
      return StatePaths.time;
    case "publicKey":
      return StatePaths.subnetPublicKey(subnetId);
    case "canisterRanges":
      return StatePaths.subnetCanisterRanges(subnetId);
  }
};
var customToKnown2 = (custom, subnetId) => {
  const decode3 = (bytes) => decodeValue(bytes, custom.decodeStrategy);
  if (typeof custom.path === "string" || custom.path instanceof Uint8Array) {
    return new KnownPath(["subnet", subnetId.toUint8Array(), custom.path], decode3);
  }
  return new KnownPath(custom.path, decode3);
};
async function request2(options) {
  const { agent, paths, disableCertificateTimeVerification = false } = options;
  const subnetId = Principal.from(options.subnetId);
  const uniquePaths = [...new Set(paths ?? [])];
  const status = /* @__PURE__ */ new Map();
  const keyOf = (path) => typeof path === "string" ? path : path.key;
  const promises = uniquePaths.map(async (path) => {
    try {
      if (path === "nodeKeys") {
        const { verifiedCertificate } = await agent.readState({ subnetId }, {
          paths: [[utf8ToBytes("subnet"), subnetId.toUint8Array(), utf8ToBytes("node")]],
          disableTimeVerification: disableCertificateTimeVerification
        });
        status.set("nodeKeys", lookupNodeKeysFromCertificate(verifiedCertificate.cert, subnetId));
        return;
      }
      const known = typeof path === "string" ? namedToKnown2(path, subnetId) : customToKnown2(path, subnetId);
      const { values } = await agent.readState({ subnetId }, {
        paths: [known],
        disableTimeVerification: disableCertificateTimeVerification
      });
      status.set(keyOf(path), values.get(known));
    } catch (error) {
      if (error instanceof AgentError && (error.hasCode(CertificateVerificationErrorCode) || error.hasCode(CertificateTimeErrorCode) || error.hasCode(MissingRootKeyErrorCode))) {
        throw error;
      }
      status.set(keyOf(path), null);
    }
  });
  await Promise.all(promises);
  return status;
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/certificateReject.js
function readCertifiedReject(certificate, path, requestId) {
  const rejectCode = new Uint8Array(lookupResultToBuffer(certificate.lookup_path([...path, "reject_code"])))[0];
  const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "reject_message"])));
  const errorCodeBuf = lookupResultToBuffer(certificate.lookup_path([...path, "error_code"]));
  const errorCode = errorCodeBuf ? new TextDecoder().decode(errorCodeBuf) : void 0;
  return new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, errorCode);
}

// node_modules/@noble/curves/abstract/edwards.js
var _0n9 = /* @__PURE__ */ BigInt(0);
var _1n9 = /* @__PURE__ */ BigInt(1);
var _2n7 = /* @__PURE__ */ BigInt(2);
var _4n6 = /* @__PURE__ */ BigInt(4);
var _8n2 = /* @__PURE__ */ BigInt(8);
function isEdValidXY(Fp4, CURVE, x2, y2) {
  const x22 = Fp4.sqr(x2);
  const y22 = Fp4.sqr(y2);
  const left = Fp4.add(Fp4.mul(CURVE.a, x22), y22);
  const right = Fp4.add(Fp4.ONE, Fp4.mul(CURVE.d, Fp4.mul(x22, y22)));
  return Fp4.eql(left, right);
}
function edwards(params, extraOpts = {}) {
  validateObject(extraOpts, {}, {}, "extraOpts");
  const opts = extraOpts;
  const validated = createCurveFields("edwards", params, opts, opts.FpFnLE);
  const { Fp: Fp4, Fn } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor } = CURVE;
  if (FpLegendre(Fp4, CURVE.a) !== 1)
    throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");
  if (FpLegendre(Fp4, CURVE.d) !== -1)
    throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");
  validateObject(opts, {}, { uvRatio: "function", randomBytes: "function" });
  const randomBytes6 = opts.randomBytes === void 0 ? randomBytes3 : opts.randomBytes;
  const MASK = _2n7 << BigInt(Fp4.BYTES * 8) - _1n9;
  function isOdd(n) {
    if (!Fp4.isOdd)
      throw new Error("Field does not have .isOdd()");
    return Fp4.isOdd(n);
  }
  const uvRatio2 = opts.uvRatio === void 0 ? (u2, v2) => {
    try {
      return { isValid: true, value: Fp4.sqrt(Fp4.div(u2, v2)) };
    } catch (e) {
      return { isValid: false, value: _0n9 };
    }
  } : opts.uvRatio;
  if (!isEdValidXY(Fp4, CURVE, CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const mulA = Fp4.eql(CURVE.a, Fp4.neg(Fp4.ONE)) ? (x2) => Fp4.neg(x2) : Fp4.eql(CURVE.a, Fp4.ONE) ? (x2) => x2 : (x2) => Fp4.mul(CURVE.a, x2);
  function acoord(title, n, banZero = false) {
    const min = banZero ? _1n9 : _0n9;
    aInRange("coordinate " + title, n, min, MASK);
    return n;
  }
  function aedpoint(other) {
    if (!(other instanceof Point))
      throw new Error("EdwardsPoint expected");
  }
  class Point {
    static BASE = new Point(CURVE.Gx, CURVE.Gy, Fp4.ONE, Fp4.mul(CURVE.Gx, CURVE.Gy));
    static ZERO = new Point(Fp4.ZERO, Fp4.ONE, Fp4.ONE, Fp4.ZERO);
    static Fp = Fp4;
    static Fn = Fn;
    X;
    Y;
    Z;
    T;
    constructor(X2, Y2, Z2, T2) {
      this.X = acoord("x", X2);
      this.Y = acoord("y", Y2);
      this.Z = acoord("z", Z2, true);
      this.T = acoord("t", T2);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /**
     * Create one extended Edwards point from affine coordinates.
     * Does NOT validate that the point is on-curve or torsion-free.
     * Use `.assertValidity()` on adversarial inputs.
     */
    static fromAffine(p2) {
      if (p2 instanceof Point)
        throw new Error("extended point not allowed");
      const { x: x2, y: y2 } = p2 || {};
      acoord("x", x2);
      acoord("y", y2);
      return new Point(x2, y2, Fp4.ONE, Fp4.mul(x2, y2));
    }
    // Uses algo from RFC8032 5.1.3.
    static fromBytes(bytes, zip215 = false) {
      const len = Fp4.BYTES;
      const { a: a2, d: d2 } = CURVE;
      bytes = copyBytes(abytes2(bytes, len, "point"));
      abool(zip215, "zip215");
      const normed = copyBytes(bytes);
      const lastByte = bytes[len - 1];
      normed[len - 1] = lastByte & ~128;
      const y2 = bytesToNumberLE(normed);
      const max = zip215 ? MASK : Fp4.ORDER;
      aInRange("point.y", y2, _0n9, max);
      const y22 = Fp4.sqr(y2);
      const u2 = Fp4.sub(y22, Fp4.ONE);
      const v2 = Fp4.sub(Fp4.mulN(d2, y22), a2);
      let { isValid, value: x2 } = uvRatio2(u2, v2);
      if (!isValid)
        throw new Error("bad point: invalid y coordinate");
      const isXOdd = isOdd(x2);
      const isLastByteOdd = (lastByte & 128) !== 0;
      if (!zip215 && Fp4.is0(x2) && isLastByteOdd)
        throw new Error("bad point: x=0 and x_0=1");
      if (isLastByteOdd !== isXOdd)
        x2 = Fp4.neg(x2);
      return Point.fromAffine({ x: x2, y: y2 });
    }
    static fromHex(hex, zip215 = false) {
      return Point.fromBytes(hexToBytes2(hex), zip215);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(windowSize = 6, isLazy = true) {
      wnaf.setWindowSize(this, windowSize);
      if (!isLazy)
        this.multiply(_2n7);
      return this;
    }
    // Useful in fromAffine() - not for fromBytes(), which always created valid points.
    assertValidity() {
      const p2 = this;
      const { a: a2, d: d2 } = CURVE;
      if (p2.is0())
        throw new Error("bad point: ZERO");
      const { X: X2, Y: Y2, Z: Z2, T: T2 } = p2;
      const X22 = Fp4.sqr(X2);
      const Y22 = Fp4.sqr(Y2);
      const Z22 = Fp4.sqr(Z2);
      const Z4 = Fp4.sqr(Z22);
      const aX2 = Fp4.mul(X22, a2);
      const left = Fp4.mul(Fp4.add(aX2, Y22), Z22);
      const right = Fp4.add(Z4, Fp4.mul(d2, Fp4.mul(X22, Y22)));
      if (!Fp4.eql(left, right))
        throw new Error("bad point: equation left != right (1)");
      const XY = Fp4.mul(X2, Y2);
      const ZT = Fp4.mul(Z2, T2);
      if (!Fp4.eql(XY, ZT))
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(other) {
      aedpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const X1Z2 = Fp4.mul(X1, Z2);
      const X2Z1 = Fp4.mul(X2, Z1);
      const Y1Z2 = Fp4.mul(Y1, Z2);
      const Y2Z1 = Fp4.mul(Y2, Z1);
      return Fp4.eql(X1Z2, X2Z1) && Fp4.eql(Y1Z2, Y2Z1);
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    negate() {
      return new Point(Fp4.neg(this.X), this.Y, this.Z, Fp4.neg(this.T));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const A = Fp4.sqr(X1);
      const B2 = Fp4.sqr(Y1);
      const C2 = Fp4.mul(Fp4.sqr(Z1), _2n7);
      const D = mulA(A);
      const x1y1 = Fp4.addN(X1, Y1);
      const E2 = Fp4.sub(Fp4.subN(Fp4.sqr(x1y1), A), B2);
      const G2 = Fp4.addN(D, B2);
      const F2 = Fp4.subN(G2, C2);
      const H2 = Fp4.subN(D, B2);
      const X3 = Fp4.mul(E2, F2);
      const Y3 = Fp4.mul(G2, H2);
      const T3 = Fp4.mul(E2, H2);
      const Z3 = Fp4.mul(F2, G2);
      return new Point(X3, Y3, Z3, T3);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(other) {
      aedpoint(other);
      const { d: d2 } = CURVE;
      const { X: X1, Y: Y1, Z: Z1, T: T1 } = this;
      const { X: X2, Y: Y2, Z: Z2, T: T2 } = other;
      const A = Fp4.mul(X1, X2);
      const B2 = Fp4.mul(Y1, Y2);
      const C2 = Fp4.mul(Fp4.mulN(T1, d2), T2);
      const D = Fp4.mul(Z1, Z2);
      const E2 = Fp4.sub(Fp4.subN(Fp4.mulN(Fp4.addN(X1, Y1), Fp4.addN(X2, Y2)), A), B2);
      const F2 = Fp4.subN(D, C2);
      const G2 = Fp4.addN(D, C2);
      const H2 = Fp4.sub(B2, mulA(A));
      const X3 = Fp4.mul(E2, F2);
      const Y3 = Fp4.mul(G2, H2);
      const T3 = Fp4.mul(E2, H2);
      const Z3 = Fp4.mul(F2, G2);
      return new Point(X3, Y3, Z3, T3);
    }
    subtract(other) {
      aedpoint(other);
      return this.add(other.negate());
    }
    // Constant-time multiplication.
    multiply(scalar) {
      if (!Fn.isValidNot0(scalar))
        throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");
      const { p: p2, f: f2 } = wnaf.mulSecret(this, scalar, cofactor, normalize2);
      return normalize2([p2, f2])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Keeps the same subgroup-scalar contract: 0 is allowed for public-scalar callers, but
    // n and larger values are rejected instead of being reduced mod n to the identity point.
    multiplyUnsafe(scalar) {
      if (!Fn.isValid(scalar))
        throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");
      if (scalar === _0n9)
        return Point.ZERO;
      if (this.is0() || scalar === _1n9)
        return this;
      return wnaf.mulUnsafe(this, scalar, normalize2);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Clears cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.clearCofactor().is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return wnaf.mulUnsafe(this, CURVE.n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(invertedZ) {
      const p2 = this;
      let iz = invertedZ;
      if (iz != null && typeof iz !== "bigint")
        throw new TypeError('"invertedZ" expected bigint, got type=' + typeof iz);
      const { X: X2, Y: Y2, Z: Z2 } = p2;
      const is0 = p2.is0();
      if (iz == null)
        iz = is0 ? Fp4.create(_8n2) : Fp4.inv(Z2);
      const x2 = Fp4.mul(X2, iz);
      const y2 = Fp4.mul(Y2, iz);
      const zz = Fp4.mul(Z2, iz);
      if (is0)
        return { x: Fp4.ZERO, y: Fp4.ONE };
      if (!Fp4.eql(zz, Fp4.ONE))
        throw new Error("invZ was invalid");
      return { x: x2, y: y2 };
    }
    clearCofactor() {
      if (cofactor === _1n9)
        return this;
      if (cofactor === _2n7)
        return this.double();
      if (cofactor === _4n6)
        return this.double().double();
      if (cofactor === _8n2)
        return this.double().double().double();
      return this.multiplyUnsafe(cofactor);
    }
    toBytes() {
      const { x: x2, y: y2 } = this.toAffine();
      const bytes = Fp4.toBytes(y2);
      bytes[bytes.length - 1] |= isOdd(x2) ? 128 : 0;
      return bytes;
    }
    toHex() {
      return bytesToHex2(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  const normalize2 = (points) => normalizeZ(Point, points);
  const wnaf = new ScalarMultiplier(Point, randomBytes6);
  if (wnaf.bits >= 6)
    Point.BASE.precompute(6);
  Object.freeze(Point.prototype);
  Object.freeze(Point);
  return Point;
}
function eddsa(Point, cHash, eddsaOpts = {}) {
  validatePointCons(Point);
  if (typeof cHash !== "function")
    throw new Error('"hash" function param is required');
  const hash = cHash;
  const opts = eddsaOpts;
  validateObject(opts, {}, {
    adjustScalarBytes: "function",
    randomBytes: "function",
    domain: "function",
    prehash: "function",
    zip215: "boolean",
    mapToCurve: "function",
    toMontgomery: "function",
    toMontgomerySecret: "function"
  });
  const { prehash } = opts;
  const { BASE, Fp: Fp4, Fn } = Point;
  const outputLen = hash.outputLen;
  const expectedLen = 2 * Fp4.BYTES;
  if (outputLen !== void 0) {
    asafenumber(outputLen, "hash.outputLen");
    if (outputLen !== expectedLen)
      throw new Error(`hash.outputLen must be ${expectedLen}, got ${outputLen}`);
  }
  const randomBytes6 = opts.randomBytes === void 0 ? randomBytes3 : opts.randomBytes;
  const toMontgomery2 = opts.toMontgomery;
  const toMontgomerySecret2 = opts.toMontgomerySecret;
  const adjustScalarBytes2 = opts.adjustScalarBytes === void 0 ? (bytes) => bytes : opts.adjustScalarBytes;
  const domain = opts.domain === void 0 ? (data, ctx, phflag) => {
    abool(phflag, "phflag");
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  } : opts.domain;
  function modN_LE(hash2) {
    return Fn.create(bytesToNumberLE(hash2));
  }
  function getPrivateScalar(key) {
    const len = lengths.secretKey;
    abytes2(key, lengths.secretKey, "secretKey");
    const hashed = abytes2(hash(key), 2 * len, "hashedSecretKey");
    const head = adjustScalarBytes2(hashed.slice(0, len));
    const prefix = hashed.slice(len, 2 * len);
    const scalar = modN_LE(head);
    return { head, prefix, scalar };
  }
  function getExtendedPublicKey(secretKey) {
    const { head, prefix, scalar } = getPrivateScalar(secretKey);
    const point = BASE.multiply(scalar);
    const pointBytes = point.toBytes();
    return { head, prefix, scalar, point, pointBytes };
  }
  function getPublicKey(secretKey) {
    return getExtendedPublicKey(secretKey).pointBytes;
  }
  function hashDomainToScalar(context = Uint8Array.of(), ...msgs) {
    const msg = concatBytes2(...msgs);
    return modN_LE(hash(domain(msg, abytes2(context, void 0, "context"), !!prehash)));
  }
  function sign(msg, secretKey, options = {}) {
    validateObject(options, {}, {}, "options");
    msg = copyBytes(abytes2(msg, void 0, "message"));
    if (prehash)
      msg = prehash(msg);
    const { prefix, scalar, pointBytes } = getExtendedPublicKey(secretKey);
    const r2 = hashDomainToScalar(options.context, prefix, msg);
    const R2 = BASE.multiply(r2).toBytes();
    const k2 = hashDomainToScalar(options.context, R2, pointBytes, msg);
    const s = Fn.create(r2 + k2 * scalar);
    if (!Fn.isValid(s))
      throw new Error("sign failed: invalid s");
    const rs = concatBytes2(R2, Fn.toBytes(s));
    return abytes2(rs, lengths.signature, "result");
  }
  const verifyOpts = {
    zip215: opts.zip215
  };
  function verify(sig, msg, publicKey, options = verifyOpts) {
    validateObject(options);
    const { context } = options;
    const zip215 = options.zip215 === void 0 ? !!verifyOpts.zip215 : options.zip215;
    const len = lengths.signature;
    sig = abytes2(sig, len, "signature");
    msg = abytes2(msg, void 0, "message");
    publicKey = abytes2(publicKey, lengths.publicKey, "publicKey");
    if (zip215 !== void 0)
      abool(zip215, "zip215");
    if (prehash)
      msg = prehash(msg);
    const mid = len / 2;
    const r2 = sig.subarray(0, mid);
    const s = bytesToNumberLE(sig.subarray(mid, len));
    let A, R2, SB;
    try {
      A = Point.fromBytes(publicKey, zip215);
      R2 = Point.fromBytes(r2, zip215);
      SB = BASE.multiplyUnsafe(s);
    } catch (error) {
      return false;
    }
    if (!zip215 && A.isSmallOrder())
      return false;
    const k2 = hashDomainToScalar(context, r2, publicKey, msg);
    const RkA = R2.add(A.multiplyUnsafe(k2));
    return RkA.subtract(SB).clearCofactor().is0();
  }
  const _size = Fp4.BYTES;
  const lengths = {
    secretKey: _size,
    publicKey: _size,
    signature: 2 * _size,
    seed: _size
  };
  function randomSecretKey(seed) {
    seed = seed === void 0 ? randomBytes6(lengths.seed) : seed;
    return abytes2(seed, lengths.seed, "seed");
  }
  function isValidSecretKey(key) {
    return isBytes2(key) && key.length === lengths.secretKey;
  }
  function isValidPublicKey(key, zip215) {
    try {
      return !!Point.fromBytes(key, zip215 === void 0 ? verifyOpts.zip215 : zip215);
    } catch (error) {
      return false;
    }
  }
  const utils = {
    getExtendedPublicKey,
    randomSecretKey,
    isValidSecretKey,
    isValidPublicKey,
    /** Converts an Edwards public key to a companion Montgomery public key. */
    toMontgomery(publicKey) {
      if (toMontgomery2 === void 0)
        throw new Error("Montgomery conversion is not supported for this curve");
      return toMontgomery2(Point.fromBytes(publicKey));
    },
    toMontgomerySecret(secretKey) {
      if (toMontgomerySecret2 === void 0)
        throw new Error("Montgomery conversion is not supported for this curve");
      return toMontgomerySecret2(secretKey);
    }
  };
  Object.freeze(lengths);
  Object.freeze(utils);
  return Object.freeze({
    keygen: createKeygen(randomSecretKey, getPublicKey),
    getPublicKey,
    sign,
    verify,
    utils,
    Point,
    lengths
  });
}

// node_modules/@noble/curves/ed25519.js
var _1n10 = /* @__PURE__ */ BigInt(1);
var _2n8 = /* @__PURE__ */ BigInt(2);
var _5n2 = /* @__PURE__ */ BigInt(5);
var _8n3 = /* @__PURE__ */ BigInt(8);
var ed25519_CURVE_p = /* @__PURE__ */ BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed");
var ed25519_CURVE = /* @__PURE__ */ (() => ({
  p: ed25519_CURVE_p,
  n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
  h: _8n3,
  a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
  d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
  Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
  Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
}))();
function ed25519_pow_2_252_3(x2) {
  const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
  const P3 = ed25519_CURVE_p;
  const x22 = x2 * x2 % P3;
  const b2 = x22 * x2 % P3;
  const b4 = pow2(b2, _2n8, P3) * b2 % P3;
  const b5 = pow2(b4, _1n10, P3) * x2 % P3;
  const b10 = pow2(b5, _5n2, P3) * b5 % P3;
  const b20 = pow2(b10, _10n, P3) * b10 % P3;
  const b40 = pow2(b20, _20n, P3) * b20 % P3;
  const b80 = pow2(b40, _40n, P3) * b40 % P3;
  const b160 = pow2(b80, _80n, P3) * b80 % P3;
  const b240 = pow2(b160, _80n, P3) * b80 % P3;
  const b250 = pow2(b240, _10n, P3) * b10 % P3;
  const pow_p_5_8 = pow2(b250, _2n8, P3) * x2 % P3;
  return { pow_p_5_8, b2 };
}
function adjustScalarBytes(bytes) {
  bytes[0] &= 248;
  bytes[31] &= 127;
  bytes[31] |= 64;
  return bytes;
}
var ED25519_SQRT_M1 = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function uvRatio(u2, v2) {
  const P3 = ed25519_CURVE_p;
  const v3 = mod(v2 * v2 * v2, P3);
  const v7 = mod(v3 * v3 * v2, P3);
  const pow3 = ed25519_pow_2_252_3(u2 * v7).pow_p_5_8;
  let x2 = mod(u2 * v3 * pow3, P3);
  const vx2 = mod(v2 * x2 * x2, P3);
  const root1 = x2;
  const root2 = mod(x2 * ED25519_SQRT_M1, P3);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === mod(-u2, P3);
  const noRoot = vx2 === mod(-u2 * ED25519_SQRT_M1, P3);
  if (useRoot1)
    x2 = root1;
  if (useRoot2 || noRoot)
    x2 = root2;
  if (isNegativeLE(x2, P3))
    x2 = mod(-x2, P3);
  return { isValid: useRoot1 || useRoot2, value: x2 };
}
var ed25519_Point = /* @__PURE__ */ edwards(ed25519_CURVE, { uvRatio });
var Fp3 = /* @__PURE__ */ (() => ed25519_Point.Fp)();
function toMontgomery(point) {
  const { y: y2 } = point;
  return Fp3.toBytes(Fp3.div(_1n10 + y2, _1n10 - y2));
}
function toMontgomerySecret(secretKey) {
  const size = ed25519_Point.Fp.BYTES;
  abytes(secretKey, size);
  return adjustScalarBytes(sha512(secretKey.subarray(0, size))).subarray(0, size);
}
function ed(opts) {
  return eddsa(ed25519_Point, sha512, Object.assign({ adjustScalarBytes, toMontgomery, toMontgomerySecret, zip215: true }, opts));
}
var ed25519 = /* @__PURE__ */ ed({});

// node_modules/@icp-sdk/core/lib/esm/agent/utils/expirableStore.js
function validateExpirationTime(expirationTime) {
  if (!Number.isFinite(expirationTime) || expirationTime <= 0) {
    throw new Error(`expirationTime must be a positive finite number, got ${expirationTime}`);
  }
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/indexedDBExpirableStore.js
var IndexedDBExpirableStore = class {
  #dbName;
  #storeName;
  #dbPromise = null;
  constructor(options) {
    if (typeof globalThis.indexedDB === "undefined") {
      throw new Error("IndexedDBExpirableStore requires IndexedDB, which is not available in this environment");
    }
    validateExpirationTime(options.expirationTime);
    this.#dbName = options.dbName;
    this.#storeName = options.storeName;
    this.expirationTime = options.expirationTime;
  }
  #getDb() {
    if (!this.#dbPromise) {
      this.#dbPromise = this.#openDb().catch((error) => {
        this.#dbPromise = null;
        throw error;
      });
    }
    return this.#dbPromise;
  }
  async #openDb() {
    const db = await this.#openRequest();
    if (db.objectStoreNames.contains(this.#storeName)) {
      return db;
    }
    const nextVersion = db.version + 1;
    db.close();
    return this.#openRequest(nextVersion);
  }
  #openRequest(version) {
    const storeName = this.#storeName;
    return new Promise((resolve, reject) => {
      const request4 = globalThis.indexedDB.open(this.#dbName, version);
      request4.onupgradeneeded = () => {
        const db = request4.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "key" });
        }
      };
      request4.onsuccess = () => {
        const db = request4.result;
        db.onversionchange = () => {
          db.close();
          this.#dbPromise = null;
        };
        resolve(db);
      };
      request4.onerror = () => reject(request4.error);
    });
  }
  async get(key) {
    const db = await this.#getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.#storeName, "readonly");
      const store = tx.objectStore(this.#storeName);
      const request4 = store.get(key);
      request4.onsuccess = () => {
        const record = request4.result;
        if (!record) {
          resolve(void 0);
          return;
        }
        if (Date.now() - record.timestamp > this.expirationTime) {
          this.delete(key).then(() => resolve(void 0), () => resolve(void 0));
          return;
        }
        resolve(record.value);
      };
      request4.onerror = () => reject(request4.error);
    });
  }
  async set(key, value) {
    await this.#prune();
    const db = await this.#getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.#storeName, "readwrite");
      const store = tx.objectStore(this.#storeName);
      const record = {
        key,
        value,
        timestamp: Date.now()
      };
      store.put(record);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
  async delete(key) {
    const db = await this.#getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.#storeName, "readwrite");
      const store = tx.objectStore(this.#storeName);
      store.delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
  async #prune() {
    const db = await this.#getDb();
    const now = Date.now();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.#storeName, "readwrite");
      const store = tx.objectStore(this.#storeName);
      const request4 = store.openCursor();
      request4.onsuccess = () => {
        const cursor = request4.result;
        if (!cursor) {
          return;
        }
        const record = cursor.value;
        if (now - record.timestamp > this.expirationTime) {
          cursor.delete();
        }
        cursor.continue();
      };
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/utils/inMemoryExpirableStore.js
var InMemoryExpirableStore = class {
  #entries;
  constructor(options) {
    validateExpirationTime(options.expirationTime);
    this.expirationTime = options.expirationTime;
    this.#entries = /* @__PURE__ */ new Map();
  }
  get(key) {
    const entry = this.#entries.get(key);
    if (!entry) {
      return Promise.resolve(void 0);
    }
    if (Date.now() - entry.timestamp > this.expirationTime) {
      this.#entries.delete(key);
      return Promise.resolve(void 0);
    }
    return Promise.resolve(entry.value);
  }
  set(key, value) {
    this.#prune();
    this.#entries.set(key, { value, timestamp: Date.now() });
    return Promise.resolve();
  }
  delete(key) {
    this.#entries.delete(key);
    return Promise.resolve();
  }
  #prune() {
    const now = Date.now();
    for (const [key, entry] of this.#entries) {
      if (now - entry.timestamp > this.expirationTime) {
        this.#entries.delete(key);
      }
    }
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/utils/createExpirableStore.js
function createExpirableStore(options) {
  if (typeof globalThis.indexedDB !== "undefined") {
    return new IndexedDBExpirableStore(options);
  }
  return new InMemoryExpirableStore({ expirationTime: options.expirationTime });
}

// node_modules/@icp-sdk/core/lib/esm/agent/der.js
var encodeLenBytes = (len) => {
  if (len <= 127) {
    return 1;
  }
  if (len <= 255) {
    return 2;
  }
  if (len <= 65535) {
    return 3;
  }
  if (len <= 16777215) {
    return 4;
  }
  throw InputError.fromCode(new DerEncodeErrorCode("Length too long (> 4 bytes)"));
};
var encodeLen = (buf, offset, len) => {
  if (len <= 127) {
    buf[offset] = len;
    return 1;
  }
  if (len <= 255) {
    buf[offset] = 129;
    buf[offset + 1] = len;
    return 2;
  }
  if (len <= 65535) {
    buf[offset] = 130;
    buf[offset + 1] = len >> 8;
    buf[offset + 2] = len;
    return 3;
  }
  if (len <= 16777215) {
    buf[offset] = 131;
    buf[offset + 1] = len >> 16;
    buf[offset + 2] = len >> 8;
    buf[offset + 3] = len;
    return 4;
  }
  throw InputError.fromCode(new DerEncodeErrorCode("Length too long (> 4 bytes)"));
};
var decodeLenBytes = (buf, offset) => {
  if (buf[offset] < 128) {
    return 1;
  }
  if (buf[offset] === 128) {
    throw InputError.fromCode(new DerDecodeErrorCode("Invalid length 0"));
  }
  if (buf[offset] === 129) {
    return 2;
  }
  if (buf[offset] === 130) {
    return 3;
  }
  if (buf[offset] === 131) {
    return 4;
  }
  throw InputError.fromCode(new DerDecodeErrorCode("Length too long (> 4 bytes)"));
};
var decodeLen = (buf, offset) => {
  const lenBytes = decodeLenBytes(buf, offset);
  if (lenBytes === 1) {
    return buf[offset];
  }
  if (lenBytes === 2) {
    return buf[offset + 1];
  }
  if (lenBytes === 3) {
    return (buf[offset + 1] << 8) + buf[offset + 2];
  }
  if (lenBytes === 4) {
    return (buf[offset + 1] << 16) + (buf[offset + 2] << 8) + buf[offset + 3];
  }
  throw InputError.fromCode(new DerDecodeErrorCode("Length too long (> 4 bytes)"));
};
var DER_COSE_OID = Uint8Array.from([
  ...[48, 12],
  // SEQUENCE
  ...[6, 10],
  // OID with 10 bytes
  ...[43, 6, 1, 4, 1, 131, 184, 67, 1, 1]
  // DER encoded COSE
]);
var ED25519_OID = Uint8Array.from([
  ...[48, 5],
  // SEQUENCE
  ...[6, 3],
  // OID with 3 bytes
  ...[43, 101, 112]
  // id-Ed25519 OID
]);
var SECP256K1_OID = Uint8Array.from([
  ...[48, 16],
  // SEQUENCE
  ...[6, 7],
  // OID with 7 bytes
  ...[42, 134, 72, 206, 61, 2, 1],
  // OID ECDSA
  ...[6, 5],
  // OID with 5 bytes
  ...[43, 129, 4, 0, 10]
  // OID secp256k1
]);
var BLS12_381_G2_OID = Uint8Array.from([
  ...[48, 29],
  // SEQUENCE, length 29 bytes
  // Algorithm OID
  ...[6, 13],
  ...[43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 1, 2, 1],
  // Curve OID
  ...[6, 12],
  ...[43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 2, 1]
]);
function wrapDER(payload, oid) {
  const bitStringHeaderLength = 2 + encodeLenBytes(payload.byteLength + 1);
  const len = oid.byteLength + bitStringHeaderLength + payload.byteLength;
  let offset = 0;
  const buf = new Uint8Array(1 + encodeLenBytes(len) + len);
  buf[offset++] = 48;
  offset += encodeLen(buf, offset, len);
  buf.set(oid, offset);
  offset += oid.byteLength;
  buf[offset++] = 3;
  offset += encodeLen(buf, offset, payload.byteLength + 1);
  buf[offset++] = 0;
  buf.set(new Uint8Array(payload), offset);
  return buf;
}
var unwrapDER = (derEncoded, oid) => {
  let offset = 0;
  const expect = (n, msg) => {
    if (buf[offset++] !== n) {
      throw InputError.fromCode(new DerDecodeErrorCode(`Expected ${msg} at offset ${offset}`));
    }
  };
  const buf = new Uint8Array(derEncoded);
  expect(48, "sequence");
  offset += decodeLenBytes(buf, offset);
  if (!uint8Equals2(buf.slice(offset, offset + oid.byteLength), oid)) {
    throw InputError.fromCode(new DerDecodeErrorCode("Not the expected OID."));
  }
  offset += oid.byteLength;
  expect(3, "bit string");
  const payloadLen = decodeLen(buf, offset) - 1;
  offset += decodeLenBytes(buf, offset);
  expect(0, "0 padding");
  const result = buf.slice(offset);
  if (payloadLen !== result.length) {
    throw InputError.fromCode(new DerDecodeLengthMismatchErrorCode(payloadLen, result.length));
  }
  return result;
};

// node_modules/@icp-sdk/core/lib/esm/agent/public_key.js
var Ed25519PublicKey = class _Ed25519PublicKey {
  static from(key) {
    return this.fromDer(key.toDer());
  }
  static fromRaw(rawKey) {
    return new _Ed25519PublicKey(rawKey);
  }
  static fromDer(derKey) {
    return new _Ed25519PublicKey(this.derDecode(derKey));
  }
  static {
    this.RAW_KEY_LENGTH = 32;
  }
  static derEncode(publicKey) {
    return wrapDER(publicKey, ED25519_OID);
  }
  static derDecode(key) {
    const unwrapped = unwrapDER(key, ED25519_OID);
    if (unwrapped.length !== this.RAW_KEY_LENGTH) {
      throw InputError.fromCode(new DerDecodeErrorCode("An Ed25519 public key must be exactly 32 bytes long"));
    }
    return unwrapped;
  }
  #rawKey;
  get rawKey() {
    return this.#rawKey;
  }
  #derKey;
  get derKey() {
    return this.#derKey;
  }
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(key) {
    if (key.byteLength !== _Ed25519PublicKey.RAW_KEY_LENGTH) {
      throw InputError.fromCode(new DerDecodeErrorCode("An Ed25519 public key must be exactly 32 bytes long"));
    }
    this.#rawKey = key.slice();
    this.#derKey = _Ed25519PublicKey.derEncode(this.#rawKey);
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/observable.js
var Observable = class {
  constructor() {
    this.observers = [];
  }
  subscribe(func) {
    this.observers.push(func);
  }
  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }
  notify(data, ...rest) {
    this.observers.forEach((observer) => observer(data, ...rest));
  }
};
var ObservableLog = class extends Observable {
  constructor() {
    super();
  }
  print(message, ...rest) {
    this.notify({ message, level: "info" }, ...rest);
  }
  warn(message, ...rest) {
    this.notify({ message, level: "warn" }, ...rest);
  }
  error(message, error, ...rest) {
    this.notify({ message, level: "error", error }, ...rest);
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/polling/backoff.js
var RANDOMIZATION_FACTOR = 0.5;
var MULTIPLIER = 1.5;
var INITIAL_INTERVAL_MSEC = 500;
var MAX_INTERVAL_MSEC = 6e4;
var MAX_ELAPSED_TIME_MSEC = 9e5;
var MAX_ITERATIONS = 10;
var ExponentialBackoff = class _ExponentialBackoff {
  #currentInterval;
  #randomizationFactor;
  #multiplier;
  #maxInterval;
  #startTime;
  #maxElapsedTime;
  #maxIterations;
  #date;
  #count = 0;
  static {
    this.default = {
      initialInterval: INITIAL_INTERVAL_MSEC,
      randomizationFactor: RANDOMIZATION_FACTOR,
      multiplier: MULTIPLIER,
      maxInterval: MAX_INTERVAL_MSEC,
      // 1 minute
      maxElapsedTime: MAX_ELAPSED_TIME_MSEC,
      maxIterations: MAX_ITERATIONS,
      date: Date
    };
  }
  constructor(options = _ExponentialBackoff.default) {
    const { initialInterval = INITIAL_INTERVAL_MSEC, randomizationFactor = RANDOMIZATION_FACTOR, multiplier = MULTIPLIER, maxInterval = MAX_INTERVAL_MSEC, maxElapsedTime = MAX_ELAPSED_TIME_MSEC, maxIterations = MAX_ITERATIONS, date = Date } = options;
    this.#currentInterval = initialInterval;
    this.#randomizationFactor = randomizationFactor;
    this.#multiplier = multiplier;
    this.#maxInterval = maxInterval;
    this.#date = date;
    this.#startTime = date.now();
    this.#maxElapsedTime = maxElapsedTime;
    this.#maxIterations = maxIterations;
  }
  get ellapsedTimeInMsec() {
    return this.#date.now() - this.#startTime;
  }
  get currentInterval() {
    return this.#currentInterval;
  }
  get count() {
    return this.#count;
  }
  get randomValueFromInterval() {
    const delta = this.#randomizationFactor * this.#currentInterval;
    const min = this.#currentInterval - delta;
    const max = this.#currentInterval + delta;
    return Math.random() * (max - min) + min;
  }
  incrementCurrentInterval() {
    this.#currentInterval = Math.min(this.#currentInterval * this.#multiplier, this.#maxInterval);
    this.#count++;
    return this.#currentInterval;
  }
  next() {
    if (this.ellapsedTimeInMsec >= this.#maxElapsedTime || this.#count >= this.#maxIterations) {
      return null;
    }
    this.incrementCurrentInterval();
    return this.randomValueFromInterval;
  }
};

// node_modules/@icp-sdk/core/lib/esm/agent/polling/strategy.js
var FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
  let first = true;
  return async () => {
    if (first) {
      first = false;
      return true;
    }
    return false;
  };
}
function conditionalDelay(condition, timeInMsec) {
  return async (target, requestId, status) => {
    if (await condition(target, requestId, status)) {
      return new Promise((resolve) => setTimeout(resolve, timeInMsec));
    }
  };
}
function timeout(timeInMsec) {
  const end = Date.now() + timeInMsec;
  return async (_target, requestId, status) => {
    if (Date.now() > end) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Request timed out after ${timeInMsec} msec`, requestId, status));
    }
  };
}
function backoff(startingThrottleInMsec, backoffFactor) {
  let currentThrottling = startingThrottleInMsec;
  return () => new Promise((resolve) => setTimeout(() => {
    currentThrottling *= backoffFactor;
    resolve();
  }, currentThrottling));
}
function chain(...strategies) {
  return async (target, requestId, status) => {
    for (const a2 of strategies) {
      await a2(target, requestId, status);
    }
  };
}

// node_modules/@icp-sdk/core/lib/esm/agent/utils/target.js
function inputToTarget(target) {
  if ("canisterId" in target) {
    return { canisterId: Principal.from(target.canisterId) };
  }
  return { subnetId: Principal.from(target.subnetId) };
}
function getTargetKey(target) {
  return "canisterId" in target ? `canister:${target.canisterId.toText()}` : `subnet:${target.subnetId.toText()}`;
}

// node_modules/@icp-sdk/core/lib/esm/agent/polling/index.js
var DEFAULT_POLLING_OPTIONS = {
  preSignReadStateRequest: false
};
function hasProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}
function isObjectWithProperty(value, property) {
  return value !== null && typeof value === "object" && hasProperty(value, property);
}
function hasFunction(value, property) {
  return hasProperty(value, property) && typeof value[property] === "function";
}
function isSignedReadStateRequestWithExpiry(value) {
  return isObjectWithProperty(value, "body") && isObjectWithProperty(value.body, "content") && value.body.content.request_type === ReadRequestType.ReadState && isObjectWithProperty(value.body.content, "ingress_expiry") && typeof value.body.content.ingress_expiry === "object" && value.body.content.ingress_expiry !== null && hasFunction(value.body.content.ingress_expiry, "toHash");
}
async function pollForResponse(agent, effectiveTarget, requestId, options = {}) {
  if (typeof effectiveTarget === "string" || effectiveTarget instanceof Principal) {
    effectiveTarget = { canisterId: Principal.from(effectiveTarget) };
  }
  const target = inputToTarget(effectiveTarget);
  const path = [utf8ToBytes("request_status"), requestId];
  let state;
  let currentRequest;
  const preSignReadStateRequest = options.preSignReadStateRequest ?? false;
  if (preSignReadStateRequest) {
    currentRequest = await constructRequest({
      paths: [path],
      agent,
      pollingOptions: options
    });
    state = await agent.readState(target, { paths: [path], blsVerify: options.blsVerify }, void 0, currentRequest);
  } else {
    state = await agent.readState(target, { paths: [path], blsVerify: options.blsVerify });
  }
  const cert = state.verifiedCertificate;
  const maybeBuf = lookupResultToBuffer(cert.lookup_path([...path, utf8ToBytes("status")]));
  let status;
  if (typeof maybeBuf === "undefined") {
    status = RequestStatusResponseStatus.Unknown;
  } else {
    status = new TextDecoder().decode(maybeBuf);
  }
  switch (status) {
    case RequestStatusResponseStatus.Replied: {
      return {
        reply: lookupResultToBuffer(cert.lookup_path([...path, "reply"])),
        certificate: cert,
        rawCertificate: state.certificate
      };
    }
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing: {
      const strategy = options.strategy ?? defaultStrategy();
      await strategy(target, requestId, status);
      return pollForResponse(agent, target, requestId, {
        ...options,
        // Pass over either the strategy already provided or the new one created above
        strategy,
        request: currentRequest
      });
    }
    case RequestStatusResponseStatus.Rejected: {
      throw RejectError.fromCode(readCertifiedReject(cert, path, requestId));
    }
    case RequestStatusResponseStatus.Done:
      throw UnknownError.fromCode(new RequestStatusDoneNoReplyErrorCode(requestId));
  }
  throw UNREACHABLE_ERROR;
}
async function constructRequest(options) {
  const { paths, agent, pollingOptions } = options;
  if (pollingOptions.request && isSignedReadStateRequestWithExpiry(pollingOptions.request)) {
    return pollingOptions.request;
  }
  const request4 = await agent.createReadStateRequest?.({
    paths
  }, void 0);
  if (!isSignedReadStateRequestWithExpiry(request4)) {
    throw InputError.fromCode(new InvalidReadStateRequestErrorCode(request4));
  }
  return request4;
}

// node_modules/@icp-sdk/core/lib/esm/agent/agent/http/index.js
var MINUTE_TO_MSECS = 60 * 1e3;
var MSECS_TO_NANOSECONDS = 1e6;
var DEFAULT_TIME_DIFF_MSECS = 0;
var IC_ROOT_KEY = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae";
var IC0_DOMAIN = "ic0.app";
var IC0_SUB_DOMAIN = ".ic0.app";
var ICP0_DOMAIN = "icp0.io";
var ICP0_SUB_DOMAIN = ".icp0.io";
var ICP_API_DOMAIN = "icp-api.io";
var ICP_API_SUB_DOMAIN = ".icp-api.io";
var HTTP_STATUS_OK = 200;
var HTTP_STATUS_ACCEPTED = 202;
var HTTP_STATUS_NOT_FOUND = 404;
function determineHost(configuredHost) {
  let host;
  if (configuredHost !== void 0) {
    if (!configuredHost.match(/^[a-z]+:/) && typeof window !== "undefined") {
      host = new URL(`${window.location.protocol}//${configuredHost}`);
    } else {
      host = new URL(configuredHost);
    }
  } else {
    const knownHosts = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"];
    const remoteHosts = [".github.dev", ".gitpod.io"];
    const location = typeof window !== "undefined" ? window.location : void 0;
    const hostname = location?.hostname;
    let knownHost;
    if (hostname && typeof hostname === "string") {
      if (remoteHosts.some((host2) => hostname.endsWith(host2))) {
        knownHost = hostname;
      } else {
        knownHost = knownHosts.find((host2) => hostname.endsWith(host2));
      }
    }
    if (location && knownHost) {
      host = new URL(`${location.protocol}//${knownHost}${location.port ? `:${location.port}` : ""}`);
    } else {
      host = new URL("https://icp-api.io");
    }
  }
  return host.toString();
}
var HttpAgent = class _HttpAgent {
  #rootKeyPromise;
  #shouldFetchRootKey;
  #timeDiffMsecs;
  // The latest synced certified time, and the local time right after it was received.
  #syncedCertifiedTime;
  #hasSyncedTime;
  #syncTimePromise;
  #shouldSyncTime;
  #identity;
  #fetch;
  #fetchOptions;
  #callOptions;
  #credentials;
  #retryTimes;
  // Retry requests N times before erroring by default
  #backoffStrategy;
  #maxIngressExpiryInMinutes;
  #subnetNodeKeyExpirableStore;
  get #maxIngressExpiryInMs() {
    return this.#maxIngressExpiryInMinutes * MINUTE_TO_MSECS;
  }
  #queryPipeline;
  #updatePipeline;
  // Tracks in-flight fetchSubnetKeys promises to deduplicate parallel requests
  // for the same canister, preventing redundant read_state round-trips.
  #subnetKeysFetching;
  #verifyQuerySignatures;
  /**
   * @param options - Options for the HttpAgent
   * @deprecated Use `HttpAgent.create` or `HttpAgent.createSync` instead
   */
  constructor(options = {}) {
    this.#rootKeyPromise = null;
    this.#shouldFetchRootKey = false;
    this.#timeDiffMsecs = DEFAULT_TIME_DIFF_MSECS;
    this.#syncedCertifiedTime = null;
    this.#hasSyncedTime = false;
    this.#syncTimePromise = null;
    this.#shouldSyncTime = false;
    this._isAgent = true;
    this.config = {};
    this.log = new ObservableLog();
    this.#queryPipeline = [];
    this.#updatePipeline = [];
    this.#subnetKeysFetching = /* @__PURE__ */ new Map();
    this.#verifyQuerySignatures = true;
    this.#verifyQueryResponse = (queryResponse, subnetNodeKeys) => {
      if (this.#verifyQuerySignatures === false) {
        return queryResponse;
      }
      const { status, signatures = [], requestId } = queryResponse;
      const maxSignatures = subnetNodeKeys.size;
      if (signatures.length > maxSignatures) {
        throw ProtocolError.fromCode(new ExcessiveSignaturesErrorCode(signatures.length, maxSignatures));
      }
      for (const sig of signatures) {
        const { timestamp, identity } = sig;
        const nodeId = Principal.fromUint8Array(identity).toText();
        let hash;
        if (status === QueryResponseStatus.Replied) {
          const { reply } = queryResponse;
          hash = hashOfMap({
            status,
            reply,
            timestamp: BigInt(timestamp),
            request_id: requestId
          });
        } else if (status === QueryResponseStatus.Rejected) {
          const { reject_code, reject_message, error_code } = queryResponse;
          hash = hashOfMap({
            status,
            reject_code,
            reject_message,
            error_code,
            timestamp: BigInt(timestamp),
            request_id: requestId
          });
        } else {
          throw UnknownError.fromCode(new UnexpectedErrorCode(`Unknown status: ${status}`));
        }
        const separatorWithHash = concatBytes(IC_RESPONSE_DOMAIN_SEPARATOR, hash);
        const pubKey = subnetNodeKeys.get(nodeId);
        if (!pubKey) {
          throw ProtocolError.fromCode(new MalformedPublicKeyErrorCode());
        }
        const rawKey = Ed25519PublicKey.fromDer(pubKey).rawKey;
        const valid = ed25519.verify(sig.signature, separatorWithHash, rawKey);
        if (!valid) {
          throw TrustError.fromCode(new QuerySignatureVerificationFailedErrorCode(nodeId));
        }
      }
      return queryResponse;
    };
    this.config = options;
    if (options.fetch) {
      this.#fetch = options.fetch;
    } else {
      const globalFetch = globalThis.fetch;
      if (typeof globalFetch !== "function") {
        throw InputError.fromCode(new MissingFetchErrorCode());
      }
      this.#fetch = globalFetch.bind(globalThis);
    }
    this.#fetchOptions = options.fetchOptions;
    this.#callOptions = options.callOptions;
    this.#shouldFetchRootKey = options.shouldFetchRootKey ?? false;
    this.#shouldSyncTime = options.shouldSyncTime ?? false;
    if (options.rootKey) {
      this.rootKey = options.rootKey;
    } else if (this.#shouldFetchRootKey) {
      this.rootKey = null;
    } else {
      this.rootKey = hexToBytes(IC_ROOT_KEY);
    }
    const host = determineHost(options.host);
    this.host = new URL(host);
    if (!this.host.pathname.endsWith("/")) {
      this.host.pathname += "/";
    }
    if (this.host.hostname.endsWith(IC0_SUB_DOMAIN)) {
      this.host.hostname = IC0_DOMAIN;
    } else if (this.host.hostname.endsWith(ICP0_SUB_DOMAIN)) {
      this.host.hostname = ICP0_DOMAIN;
    } else if (this.host.hostname.endsWith(ICP_API_SUB_DOMAIN)) {
      this.host.hostname = ICP_API_DOMAIN;
    }
    if (options.verifyQuerySignatures !== void 0) {
      this.#verifyQuerySignatures = options.verifyQuerySignatures;
    }
    this.#subnetNodeKeyExpirableStore = options.subnetNodeKeyExpirableStore ?? createExpirableStore({
      dbName: `icp-sdk-${this.host.host}`,
      storeName: "subnetNodeKeys",
      expirationTime: 5 * MINUTE_TO_MSECS
    });
    this.#retryTimes = options.retryTimes ?? 3;
    const defaultBackoffFactory = () => new ExponentialBackoff({
      maxIterations: this.#retryTimes
    });
    this.#backoffStrategy = options.backoffStrategy || defaultBackoffFactory;
    if (options.credentials) {
      const { name, password } = options.credentials;
      this.#credentials = `${name}${password ? `:${password}` : ""}`;
    }
    this.#identity = Promise.resolve(options.identity || new AnonymousIdentity());
    if (options.ingressExpiryInMinutes && options.ingressExpiryInMinutes > 5) {
      throw InputError.fromCode(new IngressExpiryInvalidErrorCode("The maximum ingress expiry time is 5 minutes.", options.ingressExpiryInMinutes));
    }
    if (options.ingressExpiryInMinutes && options.ingressExpiryInMinutes <= 0) {
      throw InputError.fromCode(new IngressExpiryInvalidErrorCode("Ingress expiry time must be greater than 0.", options.ingressExpiryInMinutes));
    }
    this.#maxIngressExpiryInMinutes = options.ingressExpiryInMinutes || 5;
    this.addTransform("update", makeNonceTransform(makeNonce));
    if (options.useQueryNonces) {
      this.addTransform("query", makeNonceTransform(makeNonce));
    }
    if (options.logToConsole) {
      this.log.subscribe((log2) => {
        if (log2.level === "error") {
          console.error(log2.message);
        } else if (log2.level === "warn") {
          console.warn(log2.message);
        } else {
          console.log(log2.message);
        }
      });
    }
  }
  static createSync(options = {}) {
    return new this({ ...options });
  }
  static async create(options = {}) {
    const agent = _HttpAgent.createSync(options);
    await agent.#asyncGuard();
    return agent;
  }
  static async from(agent) {
    try {
      if ("config" in agent) {
        return await _HttpAgent.create(agent.config);
      }
      return await _HttpAgent.create({
        fetch: agent._fetch,
        fetchOptions: agent._fetchOptions,
        callOptions: agent._callOptions,
        host: agent._host.toString(),
        identity: agent._identity ?? void 0
      });
    } catch {
      throw InputError.fromCode(new CreateHttpAgentErrorCode());
    }
  }
  isLocal() {
    const hostname = this.host.hostname;
    return hostname === "127.0.0.1" || hostname.endsWith("127.0.0.1");
  }
  addTransform(type, fn, priority = fn.priority || 0) {
    if (type === "update") {
      const i = this.#updatePipeline.findIndex((x2) => (x2.priority || 0) < priority);
      this.#updatePipeline.splice(i >= 0 ? i : this.#updatePipeline.length, 0, Object.assign(fn, { priority }));
    } else if (type === "query") {
      const i = this.#queryPipeline.findIndex((x2) => (x2.priority || 0) < priority);
      this.#queryPipeline.splice(i >= 0 ? i : this.#queryPipeline.length, 0, Object.assign(fn, { priority }));
    }
  }
  async getPrincipal() {
    if (!this.#identity) {
      throw ExternalError.fromCode(new IdentityInvalidErrorCode());
    }
    return (await this.#identity).getPrincipal();
  }
  /**
   * Makes a call to a canister method.
   * @param canisterId - The ID of the canister to call. Can be a Principal or a string.
   * @param options - Options for the call.
   * @param identity - (Optional) The identity to use for the call. If not provided, the agent's current identity will be used.
   * @returns A promise that resolves to the response of the call, including the request ID and response details.
   */
  async call(canisterId, options, identity) {
    const callSync = options.callSync ?? true;
    const id = await (identity ?? this.#identity);
    if (!id) {
      throw ExternalError.fromCode(new IdentityInvalidErrorCode());
    }
    const canister = Principal.from(canisterId);
    const target = options.effectiveTarget ? inputToTarget(options.effectiveTarget) : options.effectiveCanisterId ? { canisterId: Principal.from(options.effectiveCanisterId) } : { canisterId: canister };
    await this.#asyncGuard(target);
    const sender = id.getPrincipal();
    const ingress_expiry = calculateIngressExpiry(this.#maxIngressExpiryInMinutes, this.#timeDiffMsecs);
    const submit = {
      request_type: SubmitRequestType.Call,
      canister_id: canister,
      method_name: options.methodName,
      arg: options.arg,
      sender,
      ingress_expiry
    };
    let transformedRequest = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#credentials ? { Authorization: `Basic ${btoa(this.#credentials)}` } : {}
        }
      },
      endpoint: Endpoint.Call,
      body: submit
    });
    let nonce;
    if (options?.nonce) {
      nonce = toNonce(options.nonce);
    } else if (transformedRequest.body.nonce) {
      nonce = toNonce(transformedRequest.body.nonce);
    } else {
      nonce = void 0;
    }
    submit.nonce = nonce;
    function toNonce(buf) {
      return Object.assign(buf, { __nonce__: void 0 });
    }
    transformedRequest = await id.transformRequest(transformedRequest);
    const requestId = requestIdOf(transformedRequest.body.content ?? submit);
    const body = encode2(transformedRequest.body);
    const backoff2 = this.#backoffStrategy();
    const submittedAt = localTimestamp();
    try {
      let requestFn;
      let fallbackRequestFn;
      if ("canisterId" in target) {
        const requestSync = () => {
          const url = new URL(`api/v4/canister/${target.canisterId.toText()}/call`, this.host);
          this.log.print(`fetching "${url.pathname}" with request:`, transformedRequest);
          return this.#fetch(url, {
            ...this.#callOptions,
            ...transformedRequest.request,
            body
          });
        };
        const requestAsync = () => {
          const url = new URL(`api/v2/canister/${target.canisterId.toText()}/call`, this.host);
          this.log.print(`fetching "${url.pathname}" with request:`, transformedRequest);
          return this.#fetch(url, {
            ...this.#callOptions,
            ...transformedRequest.request,
            body
          });
        };
        requestFn = callSync ? requestSync : requestAsync;
        fallbackRequestFn = callSync ? requestAsync : void 0;
      } else {
        if (!callSync) {
          throw InputError.fromCode(new EffectiveSubnetIdAsyncErrorCode());
        }
        requestFn = () => {
          const url = new URL(`api/v4/subnet/${target.subnetId.toText()}/call`, this.host);
          this.log.print(`fetching "${url.pathname}" with request:`, transformedRequest);
          return this.#fetch(url, {
            ...this.#callOptions,
            ...transformedRequest.request,
            body
          });
        };
      }
      let rawResponse;
      try {
        rawResponse = await this.#requestAndRetry({ requestFn, backoff: backoff2, tries: 0 });
      } catch (error) {
        if (!fallbackRequestFn || !(error instanceof AgentError) || !error.hasCode(HttpV4ApiNotSupportedErrorCode)) {
          throw error;
        }
        this.log.warn("v4 api not supported. Fall back to v2");
        rawResponse = await this.#requestAndRetry({
          requestFn: fallbackRequestFn,
          backoff: this.#backoffStrategy(),
          tries: 0
        });
      }
      const { responseBodyBytes, ...response } = rawResponse;
      const responseBody = responseBodyBytes.byteLength > 0 ? decode2(responseBodyBytes) : null;
      return {
        requestId,
        response: {
          ...response,
          body: responseBody
        },
        requestDetails: submit
      };
    } catch (error) {
      let callError;
      if (error instanceof AgentError) {
        if (error.hasCode(IngressExpiryInvalidErrorCode) && !this.#hasSyncedTime) {
          await this.syncTime(target);
          if (this.#isExpiredAt(transformedRequest.body.content.ingress_expiry, submittedAt)) {
            return this.call(canister, options, identity);
          }
        }
        error.code.requestContext = {
          requestId,
          senderPubKey: transformedRequest.body.sender_pubkey,
          senderSignature: transformedRequest.body.sender_sig,
          ingressExpiry: transformedRequest.body.content.ingress_expiry
        };
        callError = error;
      } else {
        callError = UnknownError.fromCode(new UnexpectedErrorCode(error));
      }
      this.log.error(`Error while making call: ${callError.message}`, callError);
      throw callError;
    }
  }
  /**
   * Executes an update call to a canister and returns the certified result.
   * @param canisterId The canister to call.
   * @param fields The call options (method name, arg, effective canister ID, optional nonce).
   * @param pollingOptions Optional polling configuration.
   * @returns The certified result including the certificate, reply bytes, and raw certificate bytes.
   */
  async update(canisterId, fields2, pollingOptions = {}) {
    const canister = Principal.from(canisterId);
    const target = fields2.effectiveTarget ? inputToTarget(fields2.effectiveTarget) : fields2.effectiveCanisterId ? { canisterId: Principal.from(fields2.effectiveCanisterId) } : { canisterId: canister };
    const { requestId, response, requestDetails } = await this.call(canisterId, fields2);
    const { body, ...httpDetails } = response;
    if (isV4ResponseBody(body)) {
      return this.#handleV4SyncResponse(body, response, requestId, canister, target, fields2.methodName, httpDetails, requestDetails, pollingOptions, fields2.onPollingStarted);
    }
    if (isV2ResponseBody(body)) {
      this.#handleV2Rejection(body, requestId, canister, target, fields2.methodName, httpDetails);
    }
    if (response.status === HTTP_STATUS_ACCEPTED) {
      fields2.onPollingStarted?.();
      const pollResult = await pollForResponse(this, target, requestId, pollingOptions);
      return { ...pollResult, requestDetails, callResponse: response };
    }
    const unexpectedErrorCode = new UnexpectedErrorCode(`Unexpected response from call: status ${response.status} with unrecognized body`);
    unexpectedErrorCode.callContext = {
      canisterId: canister,
      effectiveTarget: target,
      methodName: fields2.methodName,
      httpDetails
    };
    throw UnknownError.fromCode(unexpectedErrorCode);
  }
  async #handleV4SyncResponse(body, response, requestId, canisterId, effectiveTarget, methodName, httpDetails, requestDetails, pollingOptions, onPollingStarted) {
    if (this.rootKey == null) {
      throw ExternalError.fromCode(new MissingRootKeyErrorCode());
    }
    const rawCertificate = body.certificate;
    const certificate = await Certificate.create({
      certificate: rawCertificate,
      rootKey: this.rootKey,
      principal: effectiveTarget,
      blsVerify: pollingOptions.blsVerify,
      agent: this
    });
    const path = [utf8ToBytes("request_status"), requestId];
    const maybeBuf = lookupResultToBuffer(certificate.lookup_path([...path, utf8ToBytes("status")]));
    const status = maybeBuf ? new TextDecoder().decode(maybeBuf) : void 0;
    switch (status) {
      case RequestStatusResponseStatus.Replied:
        return {
          reply: lookupResultToBuffer(certificate.lookup_path([...path, "reply"])),
          certificate,
          rawCertificate,
          requestDetails,
          callResponse: response
        };
      case RequestStatusResponseStatus.Rejected: {
        const error = readCertifiedReject(certificate, path, requestId);
        error.callContext = {
          canisterId,
          effectiveTarget,
          methodName,
          httpDetails
        };
        throw RejectError.fromCode(error);
      }
      case void 0: {
        this.log.warn(`v4 sync response certificate does not contain request ID ${bytesToHex(requestId)} status. Falling back to polling.`);
        onPollingStarted?.();
        const pollResult = await pollForResponse(this, effectiveTarget, requestId, pollingOptions);
        return { ...pollResult, requestDetails, callResponse: response };
      }
      default: {
        const errorCode = new UnexpectedV4StatusErrorCode(status, requestId, response, rawCertificate);
        errorCode.callContext = {
          canisterId,
          effectiveTarget,
          methodName,
          httpDetails
        };
        throw UnknownError.fromCode(errorCode);
      }
    }
  }
  #handleV2Rejection(body, requestId, canisterId, target, methodName, httpDetails) {
    const { reject_code, reject_message, error_code } = body;
    const errorCode = new UncertifiedRejectUpdateErrorCode(requestId, reject_code, reject_message, error_code);
    errorCode.callContext = {
      canisterId,
      methodName,
      httpDetails,
      effectiveTarget: target
    };
    throw RejectError.fromCode(errorCode);
  }
  async #requestAndRetryQuery(args2) {
    const { target, transformedRequest, body, requestId, backoff: backoff2, tries } = args2;
    const delay = tries === 0 ? 0 : backoff2.next();
    const url = "canisterId" in target ? new URL(`api/v3/canister/${target.canisterId.toString()}/query`, this.host) : new URL(`api/v3/subnet/${target.subnetId.toString()}/query`, this.host);
    this.log.print(`fetching "${url.pathname}" with tries:`, {
      tries,
      backoff: backoff2,
      delay
    });
    if (delay === null) {
      throw UnknownError.fromCode(new TimeoutWaitingForResponseErrorCode(`Backoff strategy exhausted after ${tries} attempts.`, requestId));
    }
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    let fetchResponse;
    try {
      this.log.print(`fetching "${url.pathname}" with request:`, transformedRequest);
      fetchResponse = await this.#fetch(url, {
        ...this.#fetchOptions,
        ...transformedRequest.request,
        body
      });
    } catch (error) {
      if (tries < this.#retryTimes) {
        this.log.warn(`Caught exception while attempting to make query:
  ${error}
  Retrying query.`);
        return await this.#requestAndRetryQuery({ ...args2, tries: tries + 1 });
      }
      throw TransportError.fromCode(new HttpFetchErrorCode(error));
    }
    const headers = httpHeadersTransform(fetchResponse.headers);
    if (fetchResponse.status !== HTTP_STATUS_OK) {
      const responseText = await fetchResponse.text();
      if (isIngressExpiryInvalidResponse(responseText)) {
        throw InputError.fromCode(new IngressExpiryInvalidErrorCode(responseText, this.#maxIngressExpiryInMinutes));
      }
      if (tries < this.#retryTimes) {
        return await this.#requestAndRetryQuery({ ...args2, tries: tries + 1 });
      }
      throw ProtocolError.fromCode(new HttpErrorCode(fetchResponse.status, fetchResponse.statusText, headers, responseText));
    }
    const queryResponse = decode2(uint8FromBufLike2(await fetchResponse.arrayBuffer()));
    const response = {
      ...queryResponse,
      httpDetails: {
        ok: fetchResponse.ok,
        status: fetchResponse.status,
        statusText: fetchResponse.statusText,
        headers
      },
      requestId
    };
    if (!this.#verifyQuerySignatures) {
      return response;
    }
    const signatureTimestampNs = response.signatures?.[0]?.timestamp;
    if (!signatureTimestampNs) {
      throw ProtocolError.fromCode(new MalformedSignatureErrorCode("Timestamp not found in query response. This suggests a malformed or malicious response."));
    }
    const signatureTimestampMs = Number(BigInt(signatureTimestampNs) / BigInt(MSECS_TO_NANOSECONDS));
    const currentTimestampInMs = Date.now() + this.#timeDiffMsecs;
    if (currentTimestampInMs - signatureTimestampMs > this.#maxIngressExpiryInMs) {
      if (tries < this.#retryTimes) {
        this.log.warn("Timestamp is older than the max ingress expiry. Retrying query.", {
          requestId,
          signatureTimestampMs
        });
        await this.syncTime(target);
        return await this.#requestAndRetryQuery({ ...args2, tries: tries + 1 });
      }
      throw TrustError.fromCode(new CertificateOutdatedErrorCode(this.#maxIngressExpiryInMinutes, requestId, tries));
    }
    return response;
  }
  /**
   * Makes a request and retries if it fails.
   * @param args - The arguments for the request.
   * @param args.requestFn - A function that returns a Promise resolving to a Response.
   * @param args.backoff - The backoff strategy to use for retries.
   * @param args.tries - The number of retry attempts made so far.
   * @returns The response from the request, if the status is 200 or 202.
   * See the https://internetcomputer.org/docs/references/ic-interface-spec#http-interface for details on the response statuses.
   * @throws {ProtocolError} if the response status is not 200 or 202, and the retry limit has been reached.
   * @throws {TransportError} if the request fails, and the retry limit has been reached.
   */
  async #requestAndRetry(args2) {
    const { requestFn, backoff: backoff2, tries } = args2;
    const delay = tries === 0 ? 0 : backoff2.next();
    if (delay === null) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Retry strategy exhausted after ${tries} attempts.`));
    }
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    let response;
    let responseBodyBytes = new Uint8Array();
    try {
      response = await requestFn();
      if (response.status === HTTP_STATUS_OK) {
        responseBodyBytes = uint8FromBufLike2(await response.clone().arrayBuffer());
      }
    } catch (error) {
      if (tries < this.#retryTimes) {
        this.log.warn(`Caught exception while attempting to make request:
  ${error}
  Retrying request.`);
        return await this.#requestAndRetry({ requestFn, backoff: backoff2, tries: tries + 1 });
      }
      throw TransportError.fromCode(new HttpFetchErrorCode(error));
    }
    const headers = httpHeadersTransform(response.headers);
    if (response.status === HTTP_STATUS_OK || response.status === HTTP_STATUS_ACCEPTED) {
      return {
        ok: response.ok,
        // should always be true
        status: response.status,
        statusText: response.statusText,
        responseBodyBytes,
        headers
      };
    }
    const responseText = await response.text();
    if (response.status === HTTP_STATUS_NOT_FOUND && response.url.includes("api/v4/canister")) {
      throw ProtocolError.fromCode(new HttpV4ApiNotSupportedErrorCode());
    }
    if (isIngressExpiryInvalidResponse(responseText)) {
      throw InputError.fromCode(new IngressExpiryInvalidErrorCode(responseText, this.#maxIngressExpiryInMinutes));
    }
    if (tries < this.#retryTimes) {
      return await this.#requestAndRetry({ requestFn, backoff: backoff2, tries: tries + 1 });
    }
    throw ProtocolError.fromCode(new HttpErrorCode(response.status, response.statusText, headers, responseText));
  }
  async query(canisterId, fields2, identity) {
    const backoff2 = this.#backoffStrategy();
    const canister = Principal.from(canisterId);
    const target = fields2.effectiveTarget ? inputToTarget(fields2.effectiveTarget) : fields2.effectiveCanisterId ? { canisterId: Principal.from(fields2.effectiveCanisterId) } : { canisterId: canister };
    const targetKey = getTargetKey(target);
    await this.#asyncGuard(target);
    if ("canisterId" in target) {
      this.log.print(`ecid ${target.canisterId.toString()}`);
    } else {
      this.log.print(`esid ${target.subnetId.toString()}`);
    }
    this.log.print(`canisterId ${canisterId.toString()}`);
    let transformedRequest;
    const id = await (identity ?? this.#identity);
    if (!id) {
      throw ExternalError.fromCode(new IdentityInvalidErrorCode());
    }
    const sender = id.getPrincipal();
    const ingressExpiry = calculateIngressExpiry(this.#maxIngressExpiryInMinutes, this.#timeDiffMsecs);
    const request4 = {
      request_type: ReadRequestType.Query,
      canister_id: canister,
      method_name: fields2.methodName,
      arg: fields2.arg,
      sender,
      ingress_expiry: ingressExpiry
    };
    transformedRequest = await this._transform({
      request: {
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#credentials ? { Authorization: `Basic ${btoa(this.#credentials)}` } : {}
        }
      },
      endpoint: Endpoint.Query,
      body: request4
    });
    transformedRequest = await id.transformRequest(transformedRequest);
    const requestId = requestIdOf(transformedRequest.body.content ?? request4);
    const body = encode2(transformedRequest.body);
    const args2 = {
      canister: canister.toText(),
      target,
      transformedRequest,
      body,
      requestId,
      backoff: backoff2,
      tries: 0
    };
    const makeQuery = async () => {
      const query = await this.#requestAndRetryQuery(args2);
      return {
        requestDetails: request4,
        ...query
      };
    };
    try {
      if (!this.#verifyQuerySignatures) {
        return await makeQuery();
      }
      const [queryWithDetails, subnetNodeKeys] = await Promise.all([
        makeQuery(),
        this.fetchSubnetKeys(target)
      ]);
      try {
        return this.#verifyQueryResponse(queryWithDetails, subnetNodeKeys);
      } catch {
        this.log.warn("Query response verification failed. Retrying with fresh subnet keys.");
        await this.#subnetNodeKeyExpirableStore.delete(targetKey);
        const updatedSubnetNodeKeys = await this.fetchSubnetKeys(target);
        return this.#verifyQueryResponse(queryWithDetails, updatedSubnetNodeKeys);
      }
    } catch (error) {
      let queryError;
      if (error instanceof AgentError) {
        if (error.hasCode(IngressExpiryInvalidErrorCode) && !this.#hasSyncedTime) {
          await this.syncTime(target);
          return this.query(canisterId, fields2, identity);
        }
        error.code.requestContext = {
          requestId,
          senderPubKey: transformedRequest.body.sender_pubkey,
          senderSignature: transformedRequest.body.sender_sig,
          ingressExpiry: transformedRequest.body.content.ingress_expiry
        };
        queryError = error;
      } else {
        queryError = UnknownError.fromCode(new UnexpectedErrorCode(error));
      }
      this.log.error(`Error while making query: ${queryError.message}`, queryError);
      throw queryError;
    }
  }
  /**
   * See https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-query for details on validation
   * @param queryResponse - The response from the query
   * @param subnetNodeKeys - The subnet node keys
   * @returns ApiQueryResponse
   */
  #verifyQueryResponse;
  async createReadStateRequest(fields2, identity) {
    await this.#asyncGuard();
    const id = await (identity ?? this.#identity);
    if (!id) {
      throw ExternalError.fromCode(new IdentityInvalidErrorCode());
    }
    const sender = id.getPrincipal();
    const transformedRequest = await this._transform({
      request: {
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#credentials ? { Authorization: `Basic ${btoa(this.#credentials)}` } : {}
        }
      },
      endpoint: Endpoint.ReadState,
      body: {
        request_type: ReadRequestType.ReadState,
        paths: fields2.paths,
        sender,
        ingress_expiry: calculateIngressExpiry(this.#maxIngressExpiryInMinutes, this.#timeDiffMsecs)
      }
    });
    return id.transformRequest(transformedRequest);
  }
  #getRequestId(options) {
    for (const path of options.paths) {
      const [pathName, value] = path;
      const request_status = new TextEncoder().encode("request_status");
      if (uint8Equals2(pathName, request_status)) {
        return value;
      }
    }
  }
  async readState(effectiveTarget, fields2, _identity, request4) {
    if (typeof effectiveTarget === "string" || effectiveTarget instanceof Principal) {
      effectiveTarget = { canisterId: Principal.from(effectiveTarget) };
    }
    await this.#rootKeyGuard();
    const target = inputToTarget(effectiveTarget);
    if (!fields2.disableTimeVerification) {
      await this.#syncTimeGuard(target);
    }
    const encodedPaths = [];
    const knownPaths = [];
    for (const path of fields2.paths) {
      const encoded = encodePath(path);
      encodedPaths.push(encoded);
      if (!Array.isArray(path)) {
        knownPaths.push({ path, encoded });
      }
    }
    const resolvedFields = { ...fields2, paths: encodedPaths };
    let transformedRequest;
    let requestId;
    if (request4) {
      transformedRequest = request4;
    } else {
      requestId = this.#getRequestId(resolvedFields);
      const identity = await this.#identity;
      if (!identity) {
        throw ExternalError.fromCode(new IdentityInvalidErrorCode());
      }
      transformedRequest = await this.createReadStateRequest(resolvedFields, identity);
    }
    const url = "canisterId" in target ? new URL(`api/v3/canister/${target.canisterId.toString()}/read_state`, this.host) : new URL(`api/v3/subnet/${target.subnetId.toString()}/read_state`, this.host);
    if (this.rootKey === null) {
      throw ExternalError.fromCode(new MissingRootKeyErrorCode(this.#shouldFetchRootKey));
    }
    const rootKey = this.rootKey;
    const { certificate } = await this.#readStateInner(url, target, transformedRequest, requestId);
    const verifiedCertificate = await Certificate.create({
      certificate,
      rootKey,
      principal: target,
      blsVerify: fields2.blsVerify,
      maxAgeInMinutes: fields2.maxAgeInMinutes,
      disableTimeVerification: fields2.disableTimeVerification,
      agent: this
    });
    const decoded = /* @__PURE__ */ new Map();
    for (const { path, encoded } of knownPaths) {
      const buffer = lookupResultToBuffer(verifiedCertificate.lookup_path(encoded));
      decoded.set(path.key, buffer === void 0 ? null : path.decode(buffer));
    }
    return { certificate, verifiedCertificate, values: new StateValues(decoded) };
  }
  // eslint-disable-next-line
  /**
   * @deprecated Use `readState`
   */
  readSubnetState(subnetId, options) {
    return this.readState({ subnetId: Principal.from(subnetId) }, options);
  }
  async #readStateInner(url, target, transformedRequest, requestId) {
    const backoff2 = this.#backoffStrategy();
    try {
      const { responseBodyBytes } = await this.#requestAndRetry({
        requestFn: () => this.#fetch(url, {
          ...this.#fetchOptions,
          ...transformedRequest.request,
          body: encode2(transformedRequest.body)
        }),
        backoff: backoff2,
        tries: 0
      });
      const decodedResponse = decode2(responseBodyBytes);
      return decodedResponse;
    } catch (error) {
      let readStateError;
      if (error instanceof AgentError) {
        if (error.hasCode(IngressExpiryInvalidErrorCode) && !this.#hasSyncedTime) {
          await this.syncTime(target);
          return await this.#readStateInner(url, target, transformedRequest, requestId);
        }
        error.code.requestContext = {
          requestId: requestId ?? requestIdOf(transformedRequest),
          senderPubKey: transformedRequest.body.sender_pubkey,
          senderSignature: transformedRequest.body.sender_sig,
          ingressExpiry: transformedRequest.body.content.ingress_expiry
        };
        readStateError = error;
      } else {
        readStateError = UnknownError.fromCode(new UnexpectedErrorCode(error));
      }
      this.log.error(`Error while making read state: ${readStateError.message}`, readStateError);
      throw readStateError;
    }
  }
  parseTimeFromResponse(response) {
    let tree;
    if (response.certificate) {
      const decoded = decode2(response.certificate);
      if (decoded && "tree" in decoded) {
        tree = decoded.tree;
      } else {
        throw ProtocolError.fromCode(new HashTreeDecodeErrorCode("Could not decode time from response"));
      }
      const timeLookup = lookup_path(["time"], tree);
      if (timeLookup.status !== LookupPathStatus.Found) {
        throw ProtocolError.fromCode(new LookupErrorCode("Time was not found in the response or was not in its expected format.", timeLookup.status));
      }
      if (!(timeLookup.value instanceof Uint8Array) && !ArrayBuffer.isView(timeLookup)) {
        throw ProtocolError.fromCode(new MalformedLookupFoundValueErrorCode("Time was not in its expected format."));
      }
      const date = decodeTime(timeLookup.value);
      this.log.print("Time from response:", date);
      this.log.print("Time from response in milliseconds:", date.getTime());
      return date.getTime();
    }
    this.log.warn("No certificate found in response");
    return 0;
  }
  /**
   * Allows agent to sync its time with the network. Can be called during initialization or mid-lifecycle if the device's clock has drifted away from the network time. This is necessary to set the Expiry for a request
   * @param {TargetPrincipal} targetOverride - Pass a canister or subnet ID if you need to sync the time with a particular subnet. Uses the ICP ledger canister by default.
   */
  async syncTime(targetOverride) {
    if (targetOverride && (typeof targetOverride === "string" || targetOverride instanceof Principal)) {
      targetOverride = { canisterId: Principal.from(targetOverride) };
    }
    this.#syncTimePromise = this.#syncTimePromise ?? (async () => {
      await this.#rootKeyGuard();
      const callTime = Date.now();
      try {
        if (!targetOverride) {
          this.log.print("Syncing time with the IC. No target provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
        }
        const target = targetOverride ?? {
          canisterId: Principal.from("ryjl3-tyaaa-aaaaa-aaaba-cai")
        };
        const anonymousAgent = _HttpAgent.createSync({
          identity: new AnonymousIdentity(),
          host: this.host.toString(),
          fetch: this.#fetch,
          retryTimes: 0,
          rootKey: this.rootKey ?? void 0,
          shouldSyncTime: false
        });
        const replicaTimes = await Promise.all(Array(3).fill(null).map(async () => {
          const status = "canisterId" in target ? await request({
            canisterId: target.canisterId,
            agent: anonymousAgent,
            paths: ["time"],
            disableCertificateTimeVerification: true
            // avoid recursive calls to syncTime
          }) : await request2({
            subnetId: target.subnetId,
            agent: anonymousAgent,
            paths: ["time"],
            disableCertificateTimeVerification: true
            // avoid recursive calls to syncTime
          });
          const date = status.get("time");
          if (date instanceof Date) {
            return date.getTime();
          }
        }, []));
        this.#setTimeDiffMsecs(callTime, localTimestamp(), replicaTimes);
      } catch (error) {
        const syncTimeError = error instanceof AgentError ? error : UnknownError.fromCode(new UnexpectedErrorCode(error));
        this.log.error("Caught exception while attempting to sync time", syncTimeError);
        throw syncTimeError;
      }
    })();
    await this.#syncTimePromise.finally(() => {
      this.#syncTimePromise = null;
    });
  }
  // eslint-disable-next-line
  /**
   * @deprecated Use {@link syncTime}
   */
  syncTimeWithSubnet(subnetId) {
    return this.syncTime({ subnetId });
  }
  #setTimeDiffMsecs(callTime, receivedAt, replicaTimes) {
    const maxReplicaTime = replicaTimes.reduce((max, current) => {
      return typeof current === "number" && current > max ? current : max;
    }, 0);
    if (maxReplicaTime > 0) {
      this.#timeDiffMsecs = maxReplicaTime - callTime;
      this.#syncedCertifiedTime = { replicaTimeMs: maxReplicaTime, receivedAt };
      this.#hasSyncedTime = true;
      this.log.notify({
        message: `Syncing time: offset of ${this.#timeDiffMsecs}`,
        level: "info"
      });
    }
  }
  /**
   * Whether the given expiry had already passed, according to the synced certified time,
   * at the given local time.
   * @param expiry The ingress expiry of the request.
   * @param at The local time to check the expiry at.
   * @returns `true` only if time has been synced and the expiry is before the lower bound
   * of the replica time at `at`.
   */
  #isExpiredAt(expiry, at) {
    if (this.#syncedCertifiedTime === null) {
      return false;
    }
    const { replicaTimeMs, receivedAt } = this.#syncedCertifiedTime;
    const elapsedMs = Math.max(receivedAt.wallMs - at.wallMs, receivedAt.monotonicMs - at.monotonicMs);
    const replicaTimeLowerBoundNs = BigInt(Math.floor(replicaTimeMs - elapsedMs)) * BigInt(MSECS_TO_NANOSECONDS);
    return expiry.toBigInt() < replicaTimeLowerBoundNs;
  }
  async status() {
    const headers = this.#credentials ? {
      Authorization: `Basic ${btoa(this.#credentials)}`
    } : {};
    const url = new URL(`api/v2/status`, this.host);
    this.log.print(`fetching "${url.pathname}"`);
    const backoff2 = this.#backoffStrategy();
    const { responseBodyBytes } = await this.#requestAndRetry({
      backoff: backoff2,
      requestFn: () => this.#fetch(url, { headers, ...this.#fetchOptions }),
      tries: 0
    });
    return decode2(responseBodyBytes);
  }
  async fetchRootKey() {
    this.#rootKeyPromise = this.#rootKeyPromise ?? (async () => {
      const value = await this.status();
      this.rootKey = value.root_key;
      return this.rootKey;
    })();
    return await this.#rootKeyPromise.finally(() => {
      this.#rootKeyPromise = null;
    });
  }
  async #asyncGuard(targetOverride) {
    await Promise.all([this.#rootKeyGuard(), this.#syncTimeGuard(targetOverride)]);
  }
  async #rootKeyGuard() {
    if (this.rootKey) {
      return;
    }
    if (this.rootKey === null && this.host.toString() !== "https://icp-api.io" && this.#shouldFetchRootKey) {
      await this.fetchRootKey();
    } else {
      throw ExternalError.fromCode(new MissingRootKeyErrorCode(this.#shouldFetchRootKey));
    }
  }
  async #syncTimeGuard(targetOverride) {
    if (this.#shouldSyncTime && !this.hasSyncedTime()) {
      await this.syncTime(targetOverride);
    }
  }
  invalidateIdentity() {
    this.#identity = null;
  }
  replaceIdentity(identity) {
    this.#identity = Promise.resolve(identity);
  }
  async fetchSubnetKeys(effectiveTarget) {
    if (typeof effectiveTarget === "string" || effectiveTarget instanceof Principal) {
      effectiveTarget = { canisterId: Principal.from(effectiveTarget) };
    }
    const target = inputToTarget(effectiveTarget);
    const targetKey = getTargetKey(target);
    const cached = await this.#subnetNodeKeyExpirableStore.get(targetKey);
    if (cached) {
      return cached;
    }
    const inflight = this.#subnetKeysFetching.get(targetKey);
    if (inflight) {
      return inflight;
    }
    const fetchPromise = this.#doFetchSubnetKeys(target).finally(() => {
      this.#subnetKeysFetching.delete(targetKey);
    });
    this.#subnetKeysFetching.set(targetKey, fetchPromise);
    return fetchPromise;
  }
  async #doFetchSubnetKeys(target) {
    await this.#asyncGuard(target);
    const rootKey = this.rootKey;
    const { verifiedCertificate: canisterCertificate } = await this.readState(target, {
      paths: [[utf8ToBytes("subnet")]]
    });
    const targetKey = getTargetKey(target);
    if ("canisterId" in target && !canisterCertificate.cert.delegation) {
      const subnetId2 = Principal.selfAuthenticating(rootKey);
      const canisterInRange = check_canister_ranges({
        canisterId: target.canisterId,
        subnetId: subnetId2,
        tree: canisterCertificate.cert.tree
      });
      if (!canisterInRange) {
        throw TrustError.fromCode(new CertificateNotAuthorizedErrorCode(target.canisterId, subnetId2));
      }
    }
    const subnetId = getSubnetIdFromCertificate(canisterCertificate.cert, rootKey);
    const nodeKeys = lookupNodeKeysFromCertificate(canisterCertificate.cert, subnetId);
    await this.#subnetNodeKeyExpirableStore.set(targetKey, nodeKeys);
    return nodeKeys;
  }
  /**
   * Returns the subnet ID for a given canister ID, by looking at the certificate delegation
   * returned by the canister's state obtained by requesting the `/time` path with {@link HttpAgent.readState | readState}.
   * @param canisterId The canister ID to get the subnet ID for.
   * @returns The subnet ID for the given canister ID.
   */
  async getSubnetIdFromCanister(canisterId) {
    const effectiveCanisterId = Principal.from(canisterId);
    await this.#asyncGuard({ canisterId: effectiveCanisterId });
    const { verifiedCertificate: canisterCertificate } = await this.readState({ canisterId: effectiveCanisterId }, {
      paths: [[utf8ToBytes("time")]]
    });
    return getSubnetIdFromCertificate(canisterCertificate.cert, this.rootKey);
  }
  _transform(request4) {
    let p2 = Promise.resolve(request4);
    if (request4.endpoint === Endpoint.Call) {
      for (const fn of this.#updatePipeline) {
        p2 = p2.then((r2) => fn(r2).then((r22) => r22 || r2));
      }
    } else {
      for (const fn of this.#queryPipeline) {
        p2 = p2.then((r2) => fn(r2).then((r22) => r22 || r2));
      }
    }
    return p2;
  }
  /**
   * Returns the time difference in milliseconds between the IC network clock and the client's clock,
   * after the clock has been synced.
   *
   * If the time has not been synced, returns `0`.
   */
  getTimeDiffMsecs() {
    return this.#timeDiffMsecs;
  }
  /**
   * Returns `true` if the time has been synced at least once with the IC network, `false` otherwise.
   */
  hasSyncedTime() {
    return this.#hasSyncedTime;
  }
};
function calculateIngressExpiry(maxIngressExpiryInMinutes, timeDiffMsecs) {
  const ingressExpiryMs = maxIngressExpiryInMinutes * MINUTE_TO_MSECS;
  return Expiry.fromDeltaInMilliseconds(ingressExpiryMs, timeDiffMsecs);
}
function localTimestamp() {
  const wallMs = Date.now();
  const monotonicMs = typeof performance !== "undefined" && typeof performance.now === "function" ? performance.now() : wallMs;
  return { wallMs, monotonicMs };
}
function isIngressExpiryInvalidResponse(responseText) {
  return responseText.includes("Invalid request expiry: ");
}

// node_modules/@icp-sdk/core/lib/esm/agent/actor.js
var metadataSymbol = /* @__PURE__ */ Symbol.for("ic-agent-metadata");
var Actor = class _Actor {
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(actor) {
    return actor[metadataSymbol].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(actor) {
    return actor[metadataSymbol].service;
  }
  static canisterIdOf(actor) {
    return Principal.from(actor[metadataSymbol].config.canisterId);
  }
  static createActorClass(interfaceFactory, options) {
    const service2 = interfaceFactory({ IDL: idl_exports });
    class CanisterActor extends _Actor {
      constructor(config) {
        if (!config.canisterId) {
          throw InputError.fromCode(new MissingCanisterIdErrorCode(config.canisterId));
        }
        const canisterId = typeof config.canisterId === "string" ? Principal.fromText(config.canisterId) : config.canisterId;
        super({
          config: {
            ...DEFAULT_ACTOR_CONFIG,
            ...config,
            canisterId
          },
          service: service2
        });
        for (const [methodName, func] of service2._fields) {
          if (options?.httpDetails) {
            func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
          }
          if (options?.certificate) {
            func.annotations.push(ACTOR_METHOD_WITH_CERTIFICATE);
          }
          this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
        }
      }
    }
    return CanisterActor;
  }
  /**
   * Creates an actor with the given interface factory and configuration.
   *
   * The [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package can be used to generate the interface factory for your canister.
   * @param interfaceFactory - the interface factory for the actor, typically generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package
   * @param configuration - the configuration for the actor
   * @returns an actor with the given interface factory and configuration
   * @see The {@link https://js.icp.build/core/latest/canister-environment/ | Canister Environment Guide} for more details on how to configure an actor using the canister environment.
   * @example
   * Using the interface factory generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { Actor, HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { idlFactory } from './api/declarations/hello-world.did';
   *
   * // For a convenient way to get the canister ID,
   * // see the https://js.icp.build/core/latest/canister-environment/ guide.
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = Actor.createActor(idlFactory, {
   *   agent,
   *   canisterId,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   * @example
   * Using the `createActor` wrapper function generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { createActor } from './api/hello-world';
   *
   * // For a convenient way to get the canister ID,
   * // see the https://js.icp.build/core/latest/canister-environment/ guide.
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = createActor(canisterId, {
   *   agent,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   */
  static createActor(interfaceFactory, configuration) {
    if (!configuration.canisterId) {
      throw InputError.fromCode(new MissingCanisterIdErrorCode(configuration.canisterId));
    }
    return new (this.createActorClass(interfaceFactory))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(interfaceFactory, configuration) {
    return new (this.createActorClass(interfaceFactory, { httpDetails: true }))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(interfaceFactory, configuration, actorClassOptions = {
    httpDetails: true,
    certificate: true
  }) {
    return new (this.createActorClass(interfaceFactory, actorClassOptions))(configuration);
  }
  constructor(metadata) {
    this[metadataSymbol] = Object.freeze(metadata);
  }
};
function decodeReturnValue(types, msg) {
  const returnValues = idl_exports.decode(types, msg);
  switch (returnValues.length) {
    case 0:
      return void 0;
    case 1:
      return returnValues[0];
    default:
      return returnValues;
  }
}
var DEFAULT_ACTOR_CONFIG = {
  pollingOptions: DEFAULT_POLLING_OPTIONS,
  queryStrategy: "query"
};
var ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
var ACTOR_METHOD_WITH_CERTIFICATE = "certificate";
function _createActorMethod(actor, methodName, func, blsVerify2) {
  let caller;
  const isQueryAnnotated = func.annotations.includes("query") || func.annotations.includes("composite_query");
  const queryStrategy = actor[metadataSymbol].config.queryStrategy;
  if (isQueryAnnotated && queryStrategy === "query") {
    caller = async (options, ...args2) => {
      options = {
        ...options,
        ...actor[metadataSymbol].config.queryTransform?.(methodName, args2, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || new HttpAgent();
      const arg = idl_exports.encode(func.argTypes, args2);
      const { canisterId, effectiveTarget, effectiveCanisterId } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const cid = Principal.from(canisterId);
      const target = effectiveTarget ?? (effectiveCanisterId ? { canisterId: effectiveCanisterId } : { canisterId: Principal.from(canisterId) });
      const result = await agent.query(cid, {
        methodName,
        arg,
        effectiveTarget: target
      });
      const httpDetails = {
        ...result.httpDetails,
        requestDetails: result.requestDetails
      };
      switch (result.status) {
        case QueryResponseStatus.Rejected: {
          const uncertifiedRejectErrorCode = new UncertifiedRejectErrorCode(result.requestId, result.reject_code, result.reject_message, result.error_code, result.signatures);
          uncertifiedRejectErrorCode.callContext = {
            canisterId: cid,
            effectiveTarget: target,
            methodName,
            httpDetails
          };
          throw RejectError.fromCode(uncertifiedRejectErrorCode);
        }
        case QueryResponseStatus.Replied:
          return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
            httpDetails,
            result: decodeReturnValue(func.retTypes, result.reply.arg)
          } : decodeReturnValue(func.retTypes, result.reply.arg);
      }
    };
  } else {
    caller = async (options, ...args2) => {
      options = {
        ...options,
        ...actor[metadataSymbol].config.callTransform?.(methodName, args2, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || HttpAgent.createSync();
      const { canisterId, effectiveTarget, effectiveCanisterId, pollingOptions } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const target = effectiveTarget ?? (effectiveCanisterId ? { canisterId: effectiveCanisterId } : { canisterId: Principal.from(canisterId) });
      const cid = Principal.from(canisterId);
      const arg = idl_exports.encode(func.argTypes, args2);
      let reply;
      let certificate;
      let callResponse;
      let requestDetails;
      try {
        ({ reply, certificate, callResponse, requestDetails } = await agent.update(cid, {
          methodName,
          arg,
          effectiveTarget: target,
          nonce: options.nonce
        }, { ...pollingOptions, blsVerify: blsVerify2 }));
      } catch (e) {
        if (e instanceof RejectError) {
          const enrichedCode = Object.create(Object.getPrototypeOf(e.code), Object.getOwnPropertyDescriptors(e.code));
          enrichedCode.callContext = { ...e.code.callContext, canisterId: cid, methodName };
          throw RejectError.fromCode(enrichedCode);
        }
        throw e;
      }
      const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
      const shouldIncludeCertificate = func.annotations.includes(ACTOR_METHOD_WITH_CERTIFICATE);
      const httpDetails = { ...callResponse, requestDetails };
      if (shouldIncludeHttpDetails && shouldIncludeCertificate) {
        return {
          httpDetails,
          certificate,
          result: decodeReturnValue(func.retTypes, reply)
        };
      }
      if (shouldIncludeCertificate) {
        return {
          certificate,
          result: decodeReturnValue(func.retTypes, reply)
        };
      }
      if (shouldIncludeHttpDetails) {
        return {
          httpDetails,
          result: decodeReturnValue(func.retTypes, reply)
        };
      }
      return decodeReturnValue(func.retTypes, reply);
    };
  }
  const handler = (...args2) => caller({}, ...args2);
  handler.withOptions = (options) => (...args2) => caller(options, ...args2);
  return handler;
}

// src/core/agent.ts
async function makeAgent(host, identity) {
  return HttpAgent.create({
    host,
    identity,
    shouldFetchRootKey: isLocalHost(host)
  });
}
function makeActor(idl, canisterId, agent) {
  return Actor.createActor(idl, { agent, canisterId });
}
function isCertainlyNotExecuted(err) {
  return err instanceof AgentError && err.kind === ErrorKindEnum.Reject;
}
function errorText(err) {
  if (err instanceof AgentError) return `${err.kind}: ${err.message.split("\n")[0]}`;
  if (err instanceof Error) return err.message;
  return String(err);
}

// src/core/sneedSmsIdl.ts
var sneedSmsIdl = ({ IDL }) => {
  const SMSError = IDL.Variant({
    AlreadyExists: IDL.Text,
    InvalidInput: IDL.Text,
    NotFound: IDL.Text,
    RateLimited: IDL.Text,
    Unauthorized: IDL.Text
  });
  const Result_1 = IDL.Variant({ ok: IDL.Nat, err: SMSError });
  const PageArgs = IDL.Record({ after: IDL.Opt(IDL.Nat), before: IDL.Opt(IDL.Nat), limit: IDL.Nat });
  const MessageResponse = IDL.Record({
    body: IDL.Text,
    can_remove_self: IDL.Bool,
    created_at: IDL.Int,
    id: IDL.Nat,
    recipients: IDL.Vec(IDL.Principal),
    reply_to: IDL.Opt(IDL.Vec(IDL.Nat)),
    sender: IDL.Principal,
    subject: IDL.Text,
    updated_at: IDL.Int
  });
  const MessagePage = IDL.Record({
    has_more: IDL.Bool,
    last_updated: IDL.Int,
    messages: IDL.Vec(MessageResponse),
    total: IDL.Nat
  });
  const CreateMessageInput = IDL.Record({
    body: IDL.Text,
    recipients: IDL.Vec(IDL.Principal),
    reply_to: IDL.Opt(IDL.Vec(IDL.Nat)),
    subject: IDL.Text
  });
  const RateRule = IDL.Record({ capacity: IDL.Nat, per_minute: IDL.Nat });
  return IDL.Service({
    get_config: IDL.Func([], [IDL.Record({
      max_body_length: IDL.Nat,
      max_recipients: IDL.Nat,
      max_subject_length: IDL.Nat,
      rate_limit_minutes: IDL.Nat
    })], ["query"]),
    get_premium_config: IDL.Func([], [IDL.Record({
      premium_max_body_length: IDL.Nat,
      premium_max_recipients: IDL.Nat,
      premium_max_subject_length: IDL.Nat,
      premium_rate_limit_minutes: IDL.Nat,
      sneed_premium_canister_id: IDL.Opt(IDL.Principal)
    })], ["query"]),
    get_send_rate_limit: IDL.Func([], [RateRule], ["query"]),
    get_rate_limit_exempt: IDL.Func([], [IDL.Vec(IDL.Principal)], ["query"]),
    get_stats: IDL.Func([], [IDL.Record({ total_messages: IDL.Nat, total_users: IDL.Nat })], ["query"]),
    get_recent_messages_count: IDL.Func([IDL.Principal], [IDL.Nat], ["query"]),
    get_last_seen_messages_timestamp: IDL.Func([IDL.Principal], [IDL.Opt(IDL.Int)], ["query"]),
    get_received_messages_page: IDL.Func([PageArgs], [MessagePage], ["query"]),
    get_sent_messages_page: IDL.Func([PageArgs], [MessagePage], ["query"]),
    get_message: IDL.Func([IDL.Nat], [IDL.Opt(MessageResponse)], ["query"]),
    mark_messages_seen_up_to: IDL.Func([IDL.Int], [], []),
    send_message: IDL.Func([CreateMessageInput], [Result_1], [])
  });
};

// src/core/registryIdl.ts
var registryIdl = ({ IDL }) => {
  const CodieProfile = IDL.Record({
    id: IDL.Principal,
    name: IDL.Text,
    owner: IDL.Opt(IDL.Principal),
    pending_owner: IDL.Opt(IDL.Principal),
    created_at: IDL.Int,
    updated_at: IDL.Int
  });
  const RegistryError = IDL.Variant({
    InvalidInput: IDL.Text,
    AlreadyExists: IDL.Text,
    NotFound: IDL.Text,
    Unauthorized: IDL.Text,
    Full: IDL.Text
  });
  const ProfileResult = IDL.Variant({ ok: CodieProfile, err: RegistryError });
  const UnitResult = IDL.Variant({ ok: IDL.Null, err: RegistryError });
  const Page = IDL.Record({ items: IDL.Vec(CodieProfile), total: IDL.Nat });
  return IDL.Service({
    register: IDL.Func([IDL.Text], [ProfileResult], []),
    rename: IDL.Func([IDL.Text], [ProfileResult], []),
    propose_owner: IDL.Func([IDL.Principal], [ProfileResult], []),
    unregister: IDL.Func([], [UnitResult], []),
    accept_ownership: IDL.Func([IDL.Principal], [ProfileResult], []),
    release_ownership: IDL.Func([IDL.Principal], [ProfileResult], []),
    get_codie: IDL.Func([IDL.Principal], [IDL.Opt(CodieProfile)], ["query"]),
    find_by_name: IDL.Func([IDL.Text], [IDL.Opt(CodieProfile)], ["query"]),
    list_codies: IDL.Func([IDL.Nat, IDL.Nat], [Page], ["query"]),
    codies_of_owner: IDL.Func([IDL.Principal], [IDL.Vec(CodieProfile)], ["query"]),
    get_stats: IDL.Func([], [IDL.Record({ total_codies: IDL.Nat, owned_codies: IDL.Nat, max_codies: IDL.Nat })], ["query"])
  });
};

// src/core/limits.ts
function limitsFromConfig(cfg, premium, burst, exempt = false, now = Date.now()) {
  return {
    maxSubject: Number(cfg.max_subject_length),
    maxBody: Number(cfg.max_body_length),
    maxRecipients: Number(cfg.max_recipients),
    rateLimitMinutes: Number(cfg.rate_limit_minutes),
    burstCapacity: burst ? Number(burst.capacity) : void 0,
    burstPerMinute: burst ? Number(burst.per_minute) : void 0,
    premium: premium ? {
      maxSubject: Number(premium.premium_max_subject_length),
      maxBody: Number(premium.premium_max_body_length),
      maxRecipients: Number(premium.premium_max_recipients),
      rateLimitMinutes: Number(premium.premium_rate_limit_minutes)
    } : void 0,
    exempt,
    fetchedAt: now
  };
}
function charLength(s) {
  let n = 0;
  for (const _2 of s) n++;
  return n;
}
function validateDraft(d2, limits) {
  const errs = [];
  const sl = charLength(d2.subject);
  const bl = charLength(d2.body);
  if (d2.subject.trim() === "") errs.push("Subject is empty.");
  if (sl > limits.maxSubject) errs.push(`Subject is ${sl} characters; the limit is ${limits.maxSubject}.`);
  if (d2.body.trim() === "") errs.push("Message is empty.");
  if (bl > limits.maxBody) errs.push(`Message is ${bl} characters; the limit is ${limits.maxBody}.`);
  if (d2.recipientCount < 1) errs.push("Add at least one recipient.");
  if (d2.recipientCount > limits.maxRecipients)
    errs.push(`${d2.recipientCount} recipients; the limit is ${limits.maxRecipients}.`);
  return errs;
}
function withCodiePrefix(subject, prefix = "[Codie] ") {
  const s = subject.trimStart();
  return s.startsWith(prefix.trim()) ? s : prefix + s;
}
function localCooldownMs(lastSentAtMs, limits, now = Date.now()) {
  if (limits.exempt || !lastSentAtMs || limits.rateLimitMinutes <= 0) return 0;
  const until = lastSentAtMs + limits.rateLimitMinutes * 6e4;
  return Math.max(0, until - now);
}
function parseRateLimitedWait(text) {
  const m2 = /(\d+(?:\.\d+)?)\s*(?:more\s+)?(second|sec|minute|min|hour|hr)s?/i.exec(text);
  if (!m2 || m2[1] === void 0 || m2[2] === void 0) return void 0;
  const n = Number(m2[1]);
  const unit = m2[2].toLowerCase();
  if (unit.startsWith("s")) return n / 60;
  if (unit.startsWith("h")) return n * 60;
  return n;
}

// src/core/clients.ts
var SneedSmsClient = class {
  constructor(canisterId, agent) {
    this.canisterId = canisterId;
    this.actor = makeActor(sneedSmsIdl, canisterId, agent);
  }
  canisterId;
  actor;
  /** Reads all limits at run time (they differ between staging and production). */
  async limits(me) {
    const [cfg, premium, burst, exempt] = await Promise.all([
      this.actor.get_config(),
      this.actor.get_premium_config(),
      this.actor.get_send_rate_limit(),
      this.actor.get_rate_limit_exempt()
    ]);
    const isExempt = me ? exempt.some((p2) => p2.toText() === me.toText()) : false;
    return limitsFromConfig(cfg, premium, burst, isExempt);
  }
  send(input) {
    return this.actor.send_message(input);
  }
  inboxApi(me) {
    return {
      recentCount: () => this.actor.get_recent_messages_count(me),
      receivedPage: (a2) => this.actor.get_received_messages_page(a2),
      markSeenUpTo: async (ts) => {
        await this.actor.mark_messages_seen_up_to(ts);
      }
    };
  }
};
var RegistryClient = class {
  constructor(canisterId, agent) {
    this.canisterId = canisterId;
    this.actor = makeActor(registryIdl, canisterId, agent);
  }
  canisterId;
  actor;
  async findByName(name) {
    const r2 = await this.actor.find_by_name(name);
    return r2[0];
  }
  async getCodie(p2) {
    return (await this.actor.get_codie(p2))[0];
  }
  /** One page of the registry's Codies, plus the grand total. */
  async listCodies(start, limit) {
    const r2 = await this.actor.list_codies(BigInt(Math.max(0, start)), BigInt(Math.max(1, limit)));
    return { items: r2.items, total: Number(r2.total) };
  }
};
function registryErrorText(e) {
  const [tag, text] = Object.entries(e)[0];
  return `${tag}: ${text}`;
}
function unwrapProfile(r2) {
  if ("ok" in r2) return r2.ok;
  throw new Error(registryErrorText(r2.err));
}
function profileView(p2) {
  return {
    id: p2.id.toText(),
    name: p2.name,
    owner: p2.owner[0]?.toText(),
    pendingOwner: p2.pending_owner[0]?.toText(),
    createdAtMs: Number(p2.created_at / 1000000n),
    updatedAtMs: Number(p2.updated_at / 1000000n)
  };
}

// node_modules/@icp-sdk/core/lib/esm/identity/identity/ed25519.js
function isObject(value) {
  return value !== null && typeof value === "object";
}
var Ed25519PublicKey2 = class _Ed25519PublicKey {
  /**
   * Construct Ed25519PublicKey from an existing PublicKey
   * @param {unknown} maybeKey - existing PublicKey, ArrayBuffer, DerEncodedPublicKey, or hex string
   * @returns {Ed25519PublicKey} Instance of Ed25519PublicKey
   */
  static from(maybeKey) {
    if (typeof maybeKey === "string") {
      const key = hexToBytes(maybeKey);
      return this.fromRaw(key);
    }
    if (isObject(maybeKey)) {
      const key = maybeKey;
      if (isObject(key) && Object.hasOwnProperty.call(key, "__derEncodedPublicKey__")) {
        return this.fromDer(key);
      }
      if (ArrayBuffer.isView(key)) {
        const view = key;
        return this.fromRaw(uint8FromBufLike(view.buffer));
      }
      if (key instanceof ArrayBuffer) {
        return this.fromRaw(uint8FromBufLike(key));
      }
      if ("rawKey" in key && key.rawKey instanceof Uint8Array) {
        return this.fromRaw(key.rawKey);
      }
      if ("derKey" in key) {
        return this.fromDer(key.derKey);
      }
      if ("toDer" in key) {
        return this.fromDer(key.toDer());
      }
    }
    throw new Error("Cannot construct Ed25519PublicKey from the provided key.");
  }
  static fromRaw(rawKey) {
    return new _Ed25519PublicKey(rawKey);
  }
  static fromDer(derKey) {
    return new _Ed25519PublicKey(this.derDecode(derKey));
  }
  static {
    this.RAW_KEY_LENGTH = 32;
  }
  static derEncode(publicKey) {
    const key = wrapDER(publicKey, ED25519_OID);
    key.__derEncodedPublicKey__ = void 0;
    return key;
  }
  static derDecode(key) {
    const unwrapped = unwrapDER(key, ED25519_OID);
    if (unwrapped.length !== this.RAW_KEY_LENGTH) {
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    }
    return unwrapped;
  }
  #rawKey;
  get rawKey() {
    return this.#rawKey;
  }
  #derKey;
  get derKey() {
    return this.#derKey;
  }
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(key) {
    if (key.byteLength !== _Ed25519PublicKey.RAW_KEY_LENGTH) {
      throw new Error("An Ed25519 public key must be exactly 32bytes long");
    }
    this.#rawKey = key.slice();
    this.#derKey = _Ed25519PublicKey.derEncode(this.#rawKey);
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
};
var Ed25519KeyIdentity = class _Ed25519KeyIdentity extends SignIdentity {
  /**
   * Generate a new Ed25519KeyIdentity.
   * @param seed a 32-byte seed for the private key. If not provided, a random seed will be generated.
   * @returns Ed25519KeyIdentity
   */
  static generate(seed) {
    if (seed && seed.length !== 32) {
      throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    }
    if (seed) {
      seed = seed.slice();
    } else {
      seed = ed25519.utils.randomSecretKey();
    }
    if (uint8Equals(seed, new Uint8Array(new Array(32).fill(0)))) {
      console.warn("Seed is all zeros. This is not a secure seed. Please provide a seed with sufficient entropy if this is a production environment.");
    }
    const sk = new Uint8Array(32);
    for (let i = 0; i < 32; i++) {
      sk[i] = seed[i];
    }
    const pk = ed25519.getPublicKey(sk);
    return _Ed25519KeyIdentity.fromKeyPair(pk, sk);
  }
  static fromParsedJson(obj) {
    const [publicKeyDer, privateKeyRaw] = obj;
    return new _Ed25519KeyIdentity(Ed25519PublicKey2.fromDer(hexToBytes(publicKeyDer)), hexToBytes(privateKeyRaw));
  }
  static fromJSON(json) {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) {
      if (typeof parsed[0] === "string" && typeof parsed[1] === "string") {
        return this.fromParsedJson([parsed[0], parsed[1]]);
      }
      throw new Error("Deserialization error: JSON must have at least 2 items.");
    }
    throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(json)}`);
  }
  static fromKeyPair(publicKey, privateKey) {
    return new _Ed25519KeyIdentity(Ed25519PublicKey2.fromRaw(publicKey), privateKey);
  }
  static fromSecretKey(secretKey) {
    const publicKey = ed25519.getPublicKey(secretKey);
    return _Ed25519KeyIdentity.fromKeyPair(publicKey, secretKey);
  }
  #publicKey;
  #privateKey;
  // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
  constructor(publicKey, privateKey) {
    super();
    this.#publicKey = Ed25519PublicKey2.from(publicKey);
    this.#privateKey = privateKey.slice();
  }
  /**
   * Serialize this key to JSON.
   */
  toJSON() {
    return [bytesToHex(this.#publicKey.toDer()), bytesToHex(this.#privateKey)];
  }
  /**
   * Return a copy of the key pair.
   */
  getKeyPair() {
    return {
      secretKey: this.#privateKey,
      publicKey: this.#publicKey
    };
  }
  /**
   * Return the public key.
   */
  getPublicKey() {
    return this.#publicKey;
  }
  /**
   * Signs a blob of data, with this identity's private key.
   * @param challenge - challenge to sign with this identity's secretKey, producing a signature
   */
  async sign(challenge) {
    const signature = ed25519.sign(challenge, this.#privateKey.slice(0, 32));
    Object.defineProperty(signature, "__signature__", {
      enumerable: false,
      value: void 0
    });
    return signature;
  }
  /**
   * Verify
   * @param sig - signature to verify
   * @param msg - message to verify
   * @param pk - public key
   * @returns - true if the signature is valid, false otherwise
   */
  static verify(sig, msg, pk) {
    const [signature, message, publicKey] = [sig, msg, pk].map((x2) => {
      if (typeof x2 === "string") {
        x2 = hexToBytes(x2);
      }
      return uint8FromBufLike(x2);
    });
    return ed25519.verify(signature, message, publicKey);
  }
};

// src/core/keycrypto.ts
var import_hash_wasm = __toESM(require_index_umd(), 1);
var ARGON = { m: 19456, t: 2, p: 1 };
var b64 = {
  enc: (u2) => btoa(String.fromCharCode(...u2)),
  dec: (s) => Uint8Array.from(atob(s), (c2) => c2.charCodeAt(0))
};
var bs = (u2) => u2;
async function importAes(raw) {
  return crypto.subtle.importKey("raw", bs(raw), "AES-GCM", false, ["encrypt", "decrypt"]);
}
async function deriveArgon(passphrase, salt, m2, t, p2) {
  const raw = await (0, import_hash_wasm.argon2id)({ password: passphrase, salt, parallelism: p2, iterations: t, memorySize: m2, hashLength: 32, outputType: "binary" });
  return importAes(raw);
}
async function derivePbkdf2(passphrase, salt, iterations) {
  const base = await crypto.subtle.importKey("raw", bs(new TextEncoder().encode(passphrase)), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: bs(salt), iterations, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}
async function newKey(passphrase) {
  if (!passphrase) throw new Error("Passphrase is empty");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await deriveArgon(passphrase, salt, ARGON.m, ARGON.t, ARGON.p);
  return { key, salt, meta: { v: 3, m: ARGON.m, t: ARGON.t, p: ARGON.p } };
}
async function keyForEnvelope(env, passphrase) {
  return env.v === 3 ? deriveArgon(passphrase, b64.dec(env.salt), env.m, env.t, env.p) : derivePbkdf2(passphrase, b64.dec(env.salt), env.iter);
}
async function encryptWithKey(plaintext, dk) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct2 = await crypto.subtle.encrypt({ name: "AES-GCM", iv: bs(iv) }, dk.key, bs(new TextEncoder().encode(plaintext)));
  const base = { salt: b64.enc(dk.salt), iv: b64.enc(iv), ct: b64.enc(new Uint8Array(ct2)) };
  return dk.meta.v === 3 ? { v: 3, kdf: "argon2id", m: dk.meta.m, t: dk.meta.t, p: dk.meta.p, ...base } : { v: 2, kdf: "PBKDF2-SHA256", iter: dk.meta.iter, ...base };
}
async function decryptWithKey(env, key) {
  let buf;
  try {
    buf = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bs(b64.dec(env.iv)) }, key, bs(b64.dec(env.ct)));
  } catch {
    throw new Error("Wrong passphrase, or the file is corrupted.");
  }
  return new TextDecoder().decode(buf);
}
function isEnvelope(v2) {
  const e = v2;
  return !!e && typeof e === "object" && (e.v === 2 || e.v === 3) && typeof e.ct === "string";
}

// src/core/pairing.ts
function sessionMeta(s) {
  const { secret: _s, ...rest } = s;
  return rest;
}
var pendingPairingDriver = {
  name: "code27-local",
  async pair() {
    throw new Error("Pairing with the real Codie is not available yet: we need the captured pairing handshake / CODE27. See docs/PAIRING_INVESTIGATION.md.");
  }
};
var mockPairingDriver = {
  name: "mock",
  async pair({ baseUrl, code, userId }) {
    if (!/^\d{6}$/.test(code)) throw new Error("The pairing code is 6 digits.");
    return {
      sessionId: `mock-${code}`,
      secret: `mock-secret-${code}`,
      userId: userId ?? "mock-user",
      baseUrl,
      pairedAtMs: Date.now(),
      expiresAtMs: Date.now() + 24 * 36e5
    };
  }
};
function pairingDriverByName(name) {
  return name === "mock" ? mockPairingDriver : pendingPairingDriver;
}

// src/core/identityStore.ts
var IdentityStore = class {
  // held while locked, until unlock() succeeds
  constructor(file, randomId2 = defaultId) {
    this.file = file;
    this.randomId = randomId2;
  }
  file;
  randomId;
  #codies = [];
  #idents = /* @__PURE__ */ new Map();
  #chain = Promise.resolve();
  #loaded = false;
  #locked = false;
  // an encrypted file we have not unlocked yet
  #enc;
  // present => keys are encrypted at rest with this key
  #lockedEnvelope;
  /** True while the file is encrypted and not yet unlocked. */
  get locked() {
    return this.#locked;
  }
  /** True when the key file on disk is passphrase-encrypted. */
  get encrypted() {
    return !!this.#enc || this.#locked;
  }
  async load() {
    const text = await this.file.read();
    if (text === null) {
      this.#codies = [];
      this.#loaded = true;
      return;
    }
    const parsed = JSON.parse(text);
    if (isEnvelope(parsed)) {
      this.#lockedEnvelope = parsed;
      this.#locked = true;
      this.#loaded = false;
      return;
    }
    this.#ingest(parsed);
    this.#loaded = true;
  }
  /** Parse+validate a plaintext file shape into memory. */
  #ingest(parsed) {
    if (parsed.version !== 1 || !Array.isArray(parsed.codies)) throw new Error("codies.json: unknown format");
    const idents = /* @__PURE__ */ new Map();
    for (const c2 of parsed.codies) {
      const ident = Ed25519KeyIdentity.fromParsedJson(c2.key);
      const p2 = ident.getPrincipal().toText();
      if (p2 !== c2.principal) throw new Error(`codies.json: key for "${c2.label}" does not match its principal`);
      idents.set(c2.id, ident);
    }
    this.#codies = parsed.codies;
    this.#idents = idents;
  }
  /** Unlock an encrypted file. Throws on a wrong passphrase. An old PBKDF2 (v2)
   *  vault is transparently re-wrapped as argon2id (v3) once unlocked. */
  async unlock(passphrase) {
    if (!this.#locked || !this.#lockedEnvelope) throw new Error("Not locked");
    const env = this.#lockedEnvelope;
    const key = await keyForEnvelope(env, passphrase);
    const plain = await decryptWithKey(env, key);
    this.#ingest(JSON.parse(plain));
    this.#locked = false;
    this.#loaded = true;
    this.#lockedEnvelope = void 0;
    if (env.v === 3) {
      this.#enc = { key, salt: fromB64Salt(env.salt), meta: { v: 3, m: env.m, t: env.t, p: env.p } };
    } else {
      try {
        const dk = await newKey(passphrase);
        this.#enc = dk;
        await this.#runExclusive(() => this.#writeWith(dk));
      } catch {
        this.#enc = { key, salt: fromB64Salt(env.salt), meta: { v: 2, iter: env.iter } };
      }
    }
  }
  /** Re-lock an encrypted store: drop the decrypted keys from memory so the
   *  passphrase is needed again. No-op if the file is not encrypted. */
  async lock() {
    if (!this.#enc) return;
    await this.#chain.catch(() => void 0);
    this.#enc = void 0;
    this.#idents.clear();
    this.#codies = [];
    this.#loaded = false;
    await this.load();
  }
  #assertLoaded() {
    if (this.#locked) throw new Error("Key file is locked \u2014 unlock with the passphrase first");
    if (!this.#loaded) throw new Error("IdentityStore not loaded");
  }
  #serialise() {
    return JSON.stringify({ version: 1, codies: this.#codies }, null, 2);
  }
  // ---- at-rest encryption controls ----
  /** Turn on encryption (or change the passphrase). Runs on the write chain so it
   *  cannot interleave with a create/rename/delete and race the atomic rename. */
  async setPassphrase(passphrase) {
    const dk = await newKey(passphrase);
    return this.#runExclusive(async () => {
      this.#assertLoaded();
      const prev = this.#enc;
      this.#enc = dk;
      try {
        await this.#writeWith(dk);
      } catch (e) {
        this.#enc = prev;
        throw e;
      }
    });
  }
  /** Turn off encryption (requires being unlocked). Write plaintext FIRST, then
   *  clear the key only on success — so a failed write can't leave memory thinking
   *  "unencrypted" while the next mutation downgrades the file to plaintext. */
  async removePassphrase() {
    return this.#runExclusive(async () => {
      this.#assertLoaded();
      const prev = this.#enc;
      try {
        await this.#writeWith(void 0);
        this.#enc = void 0;
      } catch (e) {
        this.#enc = prev;
        throw e;
      }
    });
  }
  /** Write the current state, encrypted if a key is set. */
  async #writeWith(dk) {
    const plain = this.#serialise();
    if (dk) await this.file.write(JSON.stringify(await encryptWithKey(plain, dk)));
    else await this.file.write(plain);
  }
  // ---- backup / restore (always a passphrase-encrypted envelope) ----
  /** An encrypted backup blob of all Codies. */
  async exportBackup(passphrase) {
    this.#assertLoaded();
    const dk = await newKey(passphrase);
    return JSON.stringify(await encryptWithKey(this.#serialise(), dk), null, 2);
  }
  /** Merge Codies from a backup. Returns how many were added vs already present. */
  async importBackup(blob, passphrase) {
    const env = JSON.parse(blob);
    if (!isEnvelope(env)) throw new Error("Not a Codie backup file.");
    const plain = await decryptWithKey(env, await keyForEnvelope(env, passphrase));
    const parsed = JSON.parse(plain);
    if (parsed.version !== 1 || !Array.isArray(parsed.codies)) throw new Error("Backup has an unknown format.");
    let added = 0, skipped = 0;
    await this.#mutate(() => {
      for (const c2 of parsed.codies) {
        const ident = Ed25519KeyIdentity.fromParsedJson(c2.key);
        if (ident.getPrincipal().toText() !== c2.principal) throw new Error(`Backup key for "${c2.label}" does not match its principal`);
        if (this.#codies.some((x2) => x2.id === c2.id || x2.principal === c2.principal)) {
          skipped++;
          continue;
        }
        this.#codies.push(c2);
        this.#idents.set(c2.id, ident);
        added++;
      }
    });
    return { added, skipped };
  }
  /** One global write chain: every on-disk change (mutations AND passphrase
   *  on/off) serialises through here, so no two can race the atomic rename. */
  #runExclusive(fn) {
    const run = this.#chain.then(fn);
    this.#chain = run.catch(() => void 0);
    return run;
  }
  /** Serialises mutations so two requests cannot interleave writes. */
  #mutate(fn) {
    return this.#runExclusive(async () => {
      this.#assertLoaded();
      const backup = structuredClone(this.#codies);
      const backupIdents = new Map(this.#idents);
      try {
        const result = fn();
        await this.#writeWith(this.#enc);
        return result;
      } catch (e) {
        this.#codies = backup;
        this.#idents = backupIdents;
        throw e;
      }
    });
  }
  list() {
    this.#assertLoaded();
    return this.#codies.map(toPublic);
  }
  get(id) {
    const c2 = this.#codies.find((x2) => x2.id === id);
    return c2 ? toPublic(c2) : void 0;
  }
  /** Server-side only. */
  identity(id) {
    return this.#idents.get(id);
  }
  async create(label, kind = "codie", seed) {
    const clean3 = cleanLabel(label);
    return this.#mutate(() => {
      const ident = Ed25519KeyIdentity.generate(seed);
      const rec = {
        id: this.randomId(),
        label: clean3,
        principal: ident.getPrincipal().toText(),
        key: ident.toJSON(),
        createdAt: Date.now(),
        kind
      };
      this.#codies.push(rec);
      this.#idents.set(rec.id, ident);
      return toPublic(rec);
    });
  }
  async rename(id, label) {
    const clean3 = cleanLabel(label);
    return this.#mutate(() => {
      const c2 = this.#find(id);
      c2.label = clean3;
      return toPublic(c2);
    });
  }
  setRegistryName(id, name) {
    return this.#mutate(() => {
      const c2 = this.#find(id);
      if (name === void 0) delete c2.registryName;
      else c2.registryName = name;
      return toPublic(c2);
    });
  }
  /** Store (or replace) the device pairing session for a Codie. Server-side only. */
  setSession(id, session) {
    return this.#mutate(() => {
      const c2 = this.#find(id);
      c2.session = session;
      return toPublic(c2);
    });
  }
  clearSession(id) {
    return this.#mutate(() => {
      const c2 = this.#find(id);
      delete c2.session;
      return toPublic(c2);
    });
  }
  /** The session's signing secret — server-side only, never sent to the browser. */
  sessionSecret(id) {
    return this.#codies.find((x2) => x2.id === id)?.session?.secret;
  }
  /** Permanently destroys the key. The caller must have confirmed with the user. */
  delete(id) {
    return this.#mutate(() => {
      this.#find(id);
      this.#codies = this.#codies.filter((x2) => x2.id !== id);
      this.#idents.delete(id);
    });
  }
  #find(id) {
    const c2 = this.#codies.find((x2) => x2.id === id);
    if (!c2) throw new Error(`No Codie with id ${id}`);
    return c2;
  }
};
function toPublic(c2) {
  const { key: _key, session, ...rest } = c2;
  return { ...rest, session: session ? sessionMeta(session) : void 0 };
}
function cleanLabel(label) {
  const s = label.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 60);
  if (!s) throw new Error("Label is empty");
  return s;
}
function fromB64Salt(s) {
  return Uint8Array.from(atob(s), (c2) => c2.charCodeAt(0));
}
function defaultId() {
  const b2 = new Uint8Array(8);
  globalThis.crypto.getRandomValues(b2);
  return Array.from(b2, (x2) => x2.toString(16).padStart(2, "0")).join("");
}

// src/core/sybranMemo.ts
var SYBRAN_MEMOS_PATH = "/v1/api/data/user/memos";
var DEFAULT_RINGTONE = "ringtone_default";
function partsInZone(ms, timeZone) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const got = {};
  for (const p2 of fmt.formatToParts(new Date(ms))) if (p2.type !== "literal") got[p2.type] = p2.value;
  const hour = Number(got.hour) % 24;
  return { year: Number(got.year), month: Number(got.month), day: Number(got.day), hour, minute: Number(got.minute) };
}
function buildReminderMemo(o) {
  if (!o.timezone) throw new Error("A device timezone is required to build a reminder.");
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: o.timezone });
  } catch {
    throw new Error(`Unknown timezone "${o.timezone}".`);
  }
  const triggerAtMs = (o.now ?? Date.now()) + (o.leadSeconds ?? 30) * 1e3;
  const t = partsInZone(triggerAtMs, o.timezone);
  const memo = {
    title: o.title,
    body: o.body,
    memo_type: "reminder",
    schedule_type: "once_at",
    interval_days: 1,
    trigger_year: t.year,
    trigger_month: t.month,
    // 1-12
    trigger_day: t.day,
    hour: t.hour,
    // 0-23
    minute: t.minute,
    timezone: o.timezone,
    ringtone: o.ringtone || DEFAULT_RINGTONE
  };
  return { body: JSON.stringify({ memo }), triggerAtMs, memo };
}

// src/core/device.ts
var BaseCodie = class {
  speechLog = [];
  max;
  listeners = /* @__PURE__ */ new Set();
  constructor(opts = {}) {
    this.max = opts.maxEntries ?? 200;
  }
  record(text) {
    this.speechLog.push({ at: Date.now(), text });
    if (this.speechLog.length > this.max) this.speechLog.splice(0, this.speechLog.length - this.max);
  }
  onUtterance(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  speech() {
    return [...this.speechLog];
  }
};
var MockCodie = class extends BaseCodie {
  constructor(label, opts = {}) {
    super(opts);
    this.label = label;
    this.#log = opts.log ?? ((l2) => console.log(l2));
  }
  label;
  #log;
  async announce(title, body) {
    const text = `${title}: ${body}`.trim();
    this.record(text);
    this.#log(`[MockCodie ${this.label}] says: ${text}`);
  }
  async speak(text) {
    this.record(text);
    this.#log(`[MockCodie ${this.label}] says: ${text}`);
  }
  async status() {
    return { online: true, kind: "mock", detail: "Mock Codie (no real device is contacted)" };
  }
  /** Test/UI hook: pretend the Codie heard something. */
  hear(text) {
    for (const l2 of this.listeners) l2(text);
  }
};
var noneSigner = { name: "none", headers: () => ({}) };
var code27LocalSignerPending = {
  name: "code27-local",
  headers() {
    throw new Error("The real Codie signs its requests, and we do not yet have CODE27's signing method. Awaiting CODE27 (see notes/questions-for-code27-dev.md).");
  }
};
var SIGNERS = {
  none: noneSigner,
  "code27-local": code27LocalSignerPending
};
function signerByName(name) {
  return SIGNERS[name ?? "none"] ?? noneSigner;
}
async function sha256Hex(text) {
  const buf = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function randomNonceHex() {
  const a2 = new Uint8Array(16);
  globalThis.crypto.getRandomValues(a2);
  return [...a2].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
var jsonEsc = (s) => JSON.stringify(s).slice(1, -1);
function substitute(template, vars, jsonSafe) {
  return template.replace(/\{\{(\w+)\}\}/g, (_m, k2) => {
    const v2 = vars[k2];
    if (v2 === void 0) return _m;
    return jsonSafe ? jsonEsc(v2) : v2;
  });
}
var LanCodie = class extends BaseCodie {
  constructor(label, cfg, fetchImpl = fetch, log2 = (l2) => console.log(l2), signer = noneSigner) {
    super();
    this.label = label;
    this.cfg = cfg;
    this.fetchImpl = fetchImpl;
    this.log = log2;
    this.signer = signer;
  }
  label;
  cfg;
  fetchImpl;
  log;
  signer;
  configured() {
    return !!this.cfg.sybran?.timezone || !!this.cfg.reminder?.endpoint && !!this.cfg.reminder?.bodyTemplate;
  }
  async announce(title, body) {
    await this.#createReminder(title.trim() || "Message", body.trim());
    this.record(`${title}: ${body}`.trim());
  }
  async speak(text) {
    await this.#createReminder("Waifu AI", text.trim());
    this.record(text);
  }
  /** Build the request: native SyBran memo (preferred) or the capture template. */
  #buildRequest(title, body) {
    const s = this.cfg.sybran;
    if (s?.timezone) {
      const built = buildReminderMemo({ title, body, timezone: s.timezone, ringtone: s.ringtone, leadSeconds: s.leadSeconds });
      const base = this.cfg.baseUrl.replace(/\/+$/, "");
      return {
        url: `${base}${s.path ?? SYBRAN_MEMOS_PATH}`,
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        bodyText: built.body,
        when: new Date(built.triggerAtMs).toISOString()
      };
    }
    const r2 = this.cfg.reminder;
    if (!r2?.endpoint || !r2.bodyTemplate) {
      throw new Error("Real Codie not connected yet: set the device timezone, or a reminder request (Settings \u2192 Connect real Codie).");
    }
    const trigger = new Date(Date.now() + (r2.leadSeconds ?? 30) * 1e3);
    const pad = (n) => String(n).padStart(2, "0");
    const iso = trigger.toISOString();
    const vars = {
      title,
      body,
      date: `${trigger.getFullYear()}-${pad(trigger.getMonth() + 1)}-${pad(trigger.getDate())}`,
      time: `${pad(trigger.getHours())}:${pad(trigger.getMinutes())}`,
      epochMs: String(trigger.getTime()),
      epochSec: String(Math.floor(trigger.getTime() / 1e3)),
      iso
    };
    const headers = {};
    for (const [k2, v2] of Object.entries(r2.headers ?? {})) headers[k2] = substitute(v2, vars, false);
    return { url: substitute(r2.endpoint, vars, false), method: r2.method ?? "POST", headers, bodyText: substitute(r2.bodyTemplate, vars, true), when: iso };
  }
  async #createReminder(title, body) {
    const req = this.#buildRequest(title, body);
    const ctx = {
      method: req.method,
      url: req.url,
      path: new URL(req.url).pathname,
      bodyText: req.bodyText,
      bodyHashHex: await sha256Hex(req.bodyText),
      timestampSec: Math.floor(Date.now() / 1e3),
      nonce: randomNonceHex()
    };
    const headers = { ...req.headers, ...await this.signer.headers(ctx) };
    let res;
    try {
      res = await this.fetchImpl(req.url, { method: req.method, headers, body: req.bodyText });
    } catch (e) {
      throw new Error(`Could not reach the Codie at ${this.cfg.baseUrl}: ${e.message}`);
    }
    if (!res.ok) {
      const snippet = (await res.text().catch(() => "")).slice(0, 200);
      throw new Error(`Codie rejected the reminder (HTTP ${res.status})${snippet ? `: ${snippet}` : ""}`);
    }
    this.log(`[LanCodie ${this.label}] reminder created for ${req.when}: ${title}`);
  }
  async status() {
    if (!this.configured()) {
      return { online: false, kind: "lan", detail: "Real device selected, but not connected yet: set the device timezone (or a reminder request)." };
    }
    try {
      const res = await this.fetchImpl(this.cfg.baseUrl, { method: "GET", redirect: "manual" });
      const ok = res.status > 0 && res.status < 500;
      return { online: ok, kind: "lan", detail: ok ? `Reachable at ${this.cfg.baseUrl} (HTTP ${res.status})` : `Unexpected HTTP ${res.status}` };
    } catch (e) {
      return { online: false, kind: "lan", detail: `Not reachable at ${this.cfg.baseUrl}: ${e.message}` };
    }
  }
  // Real devices don't report what they heard back to us.
  onUtterance(_listener) {
    return () => void 0;
  }
};
function messageAnnouncement(fromLabel, subject, body) {
  const subj = subject.replace(/^\[Codie\]\s*/, "").trim();
  return {
    title: `Message from ${fromLabel}`,
    body: [subj, body.trim()].filter(Boolean).join(" \u2014 ")
  };
}

// src/core/icrc1.ts
var DEFAULT_TOKENS = [
  { key: "ICP", ledger: "ryjl3-tyaaa-aaaaa-aaaba-cai", symbol: "ICP", decimals: 8, fee: 10000n },
  { key: "ckBTC", ledger: "mxzaz-hqaaa-aaaar-qaada-cai", symbol: "ckBTC", decimals: 8, fee: 10n },
  { key: "ckETH", ledger: "ss2fx-dyaaa-aaaar-qacoq-cai", symbol: "ckETH", decimals: 18, fee: 2000000000000n },
  { key: "SNEED", ledger: "hvgxa-wqaaa-aaaaq-aacia-cai", symbol: "SNEED", decimals: 8, fee: 1000n },
  { key: "sGLDT", ledger: "i2s4q-syaaa-aaaan-qz4sq-cai", symbol: "sGLDT", decimals: 8, fee: 1000n }
];
var icrc1Idl = ({ IDL }) => {
  const Account = IDL.Record({ owner: IDL.Principal, subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)) });
  const TransferArg = IDL.Record({
    to: Account,
    fee: IDL.Opt(IDL.Nat),
    memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
    from_subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
    created_at_time: IDL.Opt(IDL.Nat64),
    amount: IDL.Nat
  });
  const TransferError = IDL.Variant({
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    BadBurn: IDL.Record({ min_burn_amount: IDL.Nat }),
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
    TooOld: IDL.Null,
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    TemporarilyUnavailable: IDL.Null,
    GenericError: IDL.Record({ error_code: IDL.Nat, message: IDL.Text })
  });
  const Value = IDL.Rec();
  Value.fill(IDL.Variant({ Nat: IDL.Nat, Int: IDL.Int, Text: IDL.Text, Blob: IDL.Vec(IDL.Nat8), Array: IDL.Vec(Value), Map: IDL.Vec(IDL.Tuple(IDL.Text, Value)) }));
  const ApproveArgs = IDL.Record({
    fee: IDL.Opt(IDL.Nat),
    memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
    from_subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
    created_at_time: IDL.Opt(IDL.Nat64),
    amount: IDL.Nat,
    expected_allowance: IDL.Opt(IDL.Nat),
    expires_at: IDL.Opt(IDL.Nat64),
    spender: Account
  });
  const ApproveError = IDL.Variant({
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
    AllowanceChanged: IDL.Record({ current_allowance: IDL.Nat }),
    Expired: IDL.Record({ ledger_time: IDL.Nat64 }),
    TooOld: IDL.Null,
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    TemporarilyUnavailable: IDL.Null,
    GenericError: IDL.Record({ error_code: IDL.Nat, message: IDL.Text })
  });
  const TransferFromArgs = IDL.Record({
    spender_subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
    from: Account,
    to: Account,
    amount: IDL.Nat,
    fee: IDL.Opt(IDL.Nat),
    memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
    created_at_time: IDL.Opt(IDL.Nat64)
  });
  const TransferFromError = IDL.Variant({
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    BadBurn: IDL.Record({ min_burn_amount: IDL.Nat }),
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
    InsufficientAllowance: IDL.Record({ allowance: IDL.Nat }),
    TooOld: IDL.Null,
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    TemporarilyUnavailable: IDL.Null,
    GenericError: IDL.Record({ error_code: IDL.Nat, message: IDL.Text })
  });
  const Allowance = IDL.Record({ allowance: IDL.Nat, expires_at: IDL.Opt(IDL.Nat64) });
  const AllowanceArgs = IDL.Record({ account: Account, spender: Account });
  const StandardRecord = IDL.Record({ name: IDL.Text, url: IDL.Text });
  return IDL.Service({
    icrc1_balance_of: IDL.Func([Account], [IDL.Nat], ["query"]),
    icrc1_fee: IDL.Func([], [IDL.Nat], ["query"]),
    icrc1_decimals: IDL.Func([], [IDL.Nat8], ["query"]),
    icrc1_symbol: IDL.Func([], [IDL.Text], ["query"]),
    icrc1_name: IDL.Func([], [IDL.Text], ["query"]),
    icrc1_metadata: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, Value))], ["query"]),
    icrc1_supported_standards: IDL.Func([], [IDL.Vec(StandardRecord)], ["query"]),
    icrc1_transfer: IDL.Func([TransferArg], [IDL.Variant({ Ok: IDL.Nat, Err: TransferError })], []),
    icrc2_approve: IDL.Func([ApproveArgs], [IDL.Variant({ Ok: IDL.Nat, Err: ApproveError })], []),
    icrc2_transfer_from: IDL.Func([TransferFromArgs], [IDL.Variant({ Ok: IDL.Nat, Err: TransferFromError })], []),
    icrc2_allowance: IDL.Func([AllowanceArgs], [Allowance], ["query"])
  });
};
var Icrc1Client = class {
  constructor(ledger, agent) {
    this.ledger = ledger;
    this.actor = makeActor(icrc1Idl, ledger, agent);
  }
  ledger;
  actor;
  balanceOf(owner) {
    return this.actor.icrc1_balance_of({ owner, subaccount: [] });
  }
  fee() {
    return this.actor.icrc1_fee();
  }
  async describe() {
    const [symbol, decimals, fee, name] = await Promise.all([this.actor.icrc1_symbol(), this.actor.icrc1_decimals(), this.actor.icrc1_fee(), this.actor.icrc1_name()]);
    return { symbol, decimals, fee, name };
  }
  transfer(to, amount, opts = {}) {
    return this.actor.icrc1_transfer({
      to: { owner: to, subaccount: [] },
      amount,
      fee: opts.fee !== void 0 ? [opts.fee] : [],
      memo: [],
      from_subaccount: [],
      created_at_time: opts.createdAtTime !== void 0 ? [opts.createdAtTime] : []
    });
  }
  supportedStandards() {
    return this.actor.icrc1_supported_standards();
  }
  /** ICRC-2: approve a spender to pull up to `amount` (for DeFi, wrappers, etc.). */
  approve(spender, amount, opts = {}) {
    return this.actor.icrc2_approve({
      spender: { owner: spender, subaccount: [] },
      amount,
      fee: opts.fee !== void 0 ? [opts.fee] : [],
      expected_allowance: opts.expectedAllowance !== void 0 ? [opts.expectedAllowance] : [],
      expires_at: opts.expiresAt !== void 0 ? [opts.expiresAt] : [],
      memo: [],
      from_subaccount: [],
      created_at_time: opts.createdAtTime !== void 0 ? [opts.createdAtTime] : []
    });
  }
  allowance(owner, spender) {
    return this.actor.icrc2_allowance({ account: { owner, subaccount: [] }, spender: { owner: spender, subaccount: [] } });
  }
};
function parseAmount(input, decimals) {
  const s = input.trim().replace(/,/g, "").replace(/_/g, "");
  if (!/^\d*\.?\d*$/.test(s) || s === "" || s === ".") throw new Error("Enter a number.");
  const [whole, frac = ""] = s.split(".");
  if (frac.length > decimals) throw new Error(`Too many decimal places (max ${decimals}).`);
  const padded = frac.padEnd(decimals, "0");
  return BigInt(whole || "0") * 10n ** BigInt(decimals) + BigInt(padded || "0");
}
function formatAmount(units, decimals) {
  const neg = units < 0n;
  const u2 = neg ? -units : units;
  const base = 10n ** BigInt(decimals);
  const whole = u2 / base;
  const frac = (u2 % base).toString().padStart(decimals, "0").replace(/0+$/, "");
  return `${neg ? "-" : ""}${whole}${frac ? "." + frac : ""}`;
}
function transferErrorText(err) {
  const entry = Object.entries(err)[0];
  if (!entry) return "Unknown transfer error.";
  const [k2, v2] = entry;
  if (k2 === "InsufficientFunds") return `Insufficient funds (balance ${v2.balance}).`;
  if (k2 === "BadFee") return `Wrong fee (expected ${v2.expected_fee}).`;
  if (k2 === "GenericError") return v2.message;
  if (k2 === "Duplicate") return `Duplicate of transaction ${v2.duplicate_of}.`;
  if (k2 === "TooOld") return "The transfer timestamp was too old; try again.";
  if (k2 === "TemporarilyUnavailable") return "The ledger is temporarily unavailable; try again.";
  return k2;
}

// src/server/files.ts
import { mkdir, open, readFile, readdir, rename, rm } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";
import { randomBytes as randomBytes4 } from "node:crypto";
function dataDir(env = process.env, platform = process.platform) {
  if (env.CODE27_HELPER_DATA) return env.CODE27_HELPER_DATA;
  if (platform === "win32") return join(env.APPDATA ?? join(homedir(), "AppData", "Roaming"), "Code27Helper");
  return join(env.XDG_CONFIG_HOME ?? join(homedir(), ".config"), "code27-helper");
}
var sleep = (ms) => new Promise((r2) => setTimeout(r2, ms));
async function writeFileAtomic(path, text) {
  await mkdir(dirname(path), { recursive: true, mode: 448 });
  const tmp = `${path}.${process.pid}.${randomBytes4(4).toString("hex")}.tmp`;
  const fh = await open(tmp, "w", 384);
  try {
    await fh.writeFile(text, "utf8");
    await fh.sync();
  } finally {
    await fh.close();
  }
  for (let attempt = 0; ; attempt++) {
    try {
      await rename(tmp, path);
      try {
        const dh = await open(dirname(path), "r");
        try {
          await dh.sync();
        } finally {
          await dh.close();
        }
      } catch {
      }
      return;
    } catch (e) {
      const code = e.code;
      if (attempt < 8 && (code === "EPERM" || code === "EBUSY" || code === "EACCES")) {
        await sleep(25 * 2 ** attempt);
        continue;
      }
      await rm(tmp, { force: true });
      throw e;
    }
  }
}
async function readTextOrNull(path) {
  try {
    return await readFile(path, "utf8");
  } catch (e) {
    if (e.code === "ENOENT") return null;
    throw e;
  }
}
function textFile(path) {
  return { read: () => readTextOrNull(path), write: (t) => writeFileAtomic(path, t) };
}
async function sweepTempFiles(dir2) {
  try {
    for (const name of await readdir(dir2)) {
      if (/\.\d+\.[0-9a-f]{8}\.tmp$/.test(basename(name))) await rm(join(dir2, name), { force: true }).catch(() => void 0);
    }
  } catch {
  }
}
var JsonDoc = class _JsonDoc {
  constructor(path, value) {
    this.path = path;
    this.#value = value;
  }
  path;
  #value;
  #chain = Promise.resolve();
  static async open(path, fallback) {
    const text = await readTextOrNull(path);
    if (text === null) return new _JsonDoc(path, fallback);
    try {
      return new _JsonDoc(path, { ...fallback, ...JSON.parse(text) });
    } catch {
      await rename(path, `${path}.corrupt-${Date.now()}`).catch(() => void 0);
      return new _JsonDoc(path, fallback);
    }
  }
  get value() {
    return this.#value;
  }
  update(fn) {
    const run = this.#chain.then(async () => {
      const next = structuredClone(this.#value);
      fn(next);
      await writeFileAtomic(this.path, JSON.stringify(next, null, 2));
      this.#value = next;
    });
    this.#chain = run.catch(() => void 0);
    return run;
  }
};

// src/server/httpError.ts
var HttpError = class extends Error {
  constructor(status, message, extra) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
  status;
  extra;
};

// src/core/neurons.ts
var NNS_GOVERNANCE = "rrkah-fqaaa-aaaaa-aaaaq-cai";
var DEFAULT_SNS = [
  { gov: "fi3zi-fyaaa-aaaaq-aachq-cai", name: "Sneed" }
];
var nnsIdl = ({ IDL }) => {
  const NeuronId = IDL.Record({ id: IDL.Nat64 });
  const NeuronInfo = IDL.Record({
    dissolve_delay_seconds: IDL.Nat64,
    state: IDL.Int32,
    stake_e8s: IDL.Nat64,
    age_seconds: IDL.Nat64,
    voting_power: IDL.Nat64
  });
  const ListNeurons = IDL.Record({
    neuron_ids: IDL.Vec(IDL.Nat64),
    include_neurons_readable_by_caller: IDL.Bool,
    include_empty_neurons_readable_by_caller: IDL.Opt(IDL.Bool),
    include_public_neurons_in_full_neurons: IDL.Opt(IDL.Bool),
    page_number: IDL.Opt(IDL.Nat64),
    page_size: IDL.Opt(IDL.Nat64)
  });
  const ListNeuronsResponse = IDL.Record({ neuron_infos: IDL.Vec(IDL.Tuple(IDL.Nat64, NeuronInfo)) });
  const ProposalId = IDL.Record({ id: IDL.Nat64 });
  const RegisterVote = IDL.Record({ vote: IDL.Int32, proposal: IDL.Opt(ProposalId) });
  const Follow = IDL.Record({ topic: IDL.Int32, followees: IDL.Vec(NeuronId) });
  const NeuronIdOrSubaccount = IDL.Variant({ Subaccount: IDL.Vec(IDL.Nat8), NeuronId });
  const ManageNeuronCommandRequest = IDL.Variant({ RegisterVote, Follow });
  const ManageNeuronRequest = IDL.Record({ neuron_id_or_subaccount: IDL.Opt(NeuronIdOrSubaccount), command: IDL.Opt(ManageNeuronCommandRequest) });
  const GovernanceError = IDL.Record({ error_message: IDL.Text, error_type: IDL.Int32 });
  const Command_1 = IDL.Variant({ Error: GovernanceError, RegisterVote: IDL.Record({}), Follow: IDL.Record({}) });
  const ManageNeuronResponse = IDL.Record({ command: IDL.Opt(Command_1) });
  const NnsProposal = IDL.Record({ title: IDL.Opt(IDL.Text), summary: IDL.Text });
  const ProposalInfo = IDL.Record({ id: IDL.Opt(ProposalId), proposal: IDL.Opt(NnsProposal) });
  return IDL.Service({
    list_neurons: IDL.Func([ListNeurons], [ListNeuronsResponse], ["query"]),
    manage_neuron: IDL.Func([ManageNeuronRequest], [ManageNeuronResponse], []),
    get_pending_proposals: IDL.Func([], [IDL.Vec(ProposalInfo)], ["query"])
  });
};
function voteResult(res) {
  const cmd = res.command[0];
  if (cmd && "Error" in cmd) throw new Error(cmd.Error.error_message || "Governance rejected the vote.");
}
var NNS_STATE = { 0: "\u2014", 1: "Not dissolving", 2: "Dissolving", 3: "Dissolved", 4: "Spawning" };
var NnsGovClient = class {
  actor;
  constructor(agent) {
    this.actor = makeActor(nnsIdl, NNS_GOVERNANCE, agent);
  }
  async listReadable(extraIds = []) {
    const r2 = await this.actor.list_neurons({ neuron_ids: extraIds, include_neurons_readable_by_caller: true, include_empty_neurons_readable_by_caller: [], include_public_neurons_in_full_neurons: [], page_number: [], page_size: [] });
    return r2.neuron_infos.map(([id, n]) => ({
      id: id.toString(),
      stake: formatAmount(n.stake_e8s, 8),
      state: NNS_STATE[n.state] ?? String(n.state),
      votingPower: formatAmount(n.voting_power, 8),
      dissolveDelayDays: Math.round(Number(n.dissolve_delay_seconds) / 86400)
    }));
  }
  /** Cast a vote on an NNS proposal with a neuron (vote 1=Yes, 2=No). */
  async vote(neuronId, proposalId, yes) {
    voteResult(await this.actor.manage_neuron({
      neuron_id_or_subaccount: [{ NeuronId: { id: neuronId } }],
      command: [{ RegisterVote: { vote: yes ? 1 : 2, proposal: [{ id: proposalId }] } }]
    }));
  }
  /** Open (pending/votable) NNS proposals, across all topics: id + title + summary. */
  async openProposals(limit = 12) {
    const r2 = await this.actor.get_pending_proposals();
    return r2.slice(0, limit).map((p2) => ({
      id: p2.id[0] ? p2.id[0].id.toString() : "?",
      title: p2.proposal[0]?.title[0] ?? "(untitled)",
      summary: p2.proposal[0]?.summary ?? ""
    }));
  }
  /** Follow a neuron on an NNS topic (topic 0 = the catch-all default). Empty followees clears it. */
  async follow(neuronId, topic, followees) {
    voteResult(await this.actor.manage_neuron({
      neuron_id_or_subaccount: [{ NeuronId: { id: neuronId } }],
      command: [{ Follow: { topic, followees: followees.map((id) => ({ id })) } }]
    }));
  }
};
var snsIdl = ({ IDL }) => {
  const NeuronId = IDL.Record({ id: IDL.Vec(IDL.Nat8) });
  const NeuronPermission = IDL.Record({ principal: IDL.Opt(IDL.Principal), permission_type: IDL.Vec(IDL.Int32) });
  const DissolveState = IDL.Variant({ DissolveDelaySeconds: IDL.Nat64, WhenDissolvedTimestampSeconds: IDL.Nat64 });
  const Neuron = IDL.Record({
    id: IDL.Opt(NeuronId),
    cached_neuron_stake_e8s: IDL.Nat64,
    permissions: IDL.Vec(NeuronPermission),
    dissolve_state: IDL.Opt(DissolveState),
    voting_power_percentage_multiplier: IDL.Nat64,
    aging_since_timestamp_seconds: IDL.Nat64,
    staked_maturity_e8s_equivalent: IDL.Opt(IDL.Nat64)
  });
  const ListNeurons = IDL.Record({ of_principal: IDL.Opt(IDL.Principal), limit: IDL.Nat32, start_page_at: IDL.Opt(NeuronId) });
  const GetMetadataResponse = IDL.Record({ url: IDL.Opt(IDL.Text), logo: IDL.Opt(IDL.Text), name: IDL.Opt(IDL.Text), description: IDL.Opt(IDL.Text) });
  const ProposalId = IDL.Record({ id: IDL.Nat64 });
  const RegisterVote = IDL.Record({ vote: IDL.Int32, proposal: IDL.Opt(ProposalId) });
  const Follow = IDL.Record({ function_id: IDL.Nat64, followees: IDL.Vec(NeuronId) });
  const CommandReq = IDL.Variant({ RegisterVote, Follow });
  const ManageNeuron = IDL.Record({ subaccount: IDL.Vec(IDL.Nat8), command: IDL.Opt(CommandReq) });
  const GovernanceError = IDL.Record({ error_message: IDL.Text, error_type: IDL.Int32 });
  const Command_1 = IDL.Variant({ Error: GovernanceError, RegisterVote: IDL.Record({}), Follow: IDL.Record({}) });
  const ManageNeuronResponse = IDL.Record({ command: IDL.Opt(Command_1) });
  const ListProposals = IDL.Record({
    include_reward_status: IDL.Vec(IDL.Int32),
    before_proposal: IDL.Opt(ProposalId),
    limit: IDL.Nat32,
    exclude_type: IDL.Vec(IDL.Nat64),
    include_status: IDL.Vec(IDL.Int32)
  });
  const ProposalData = IDL.Record({ id: IDL.Opt(ProposalId), proposal: IDL.Opt(IDL.Record({ title: IDL.Text, summary: IDL.Text })) });
  const ListProposalsResponse = IDL.Record({ proposals: IDL.Vec(ProposalData) });
  return IDL.Service({
    list_neurons: IDL.Func([ListNeurons], [IDL.Record({ neurons: IDL.Vec(Neuron) })], ["query"]),
    get_metadata: IDL.Func([IDL.Record({})], [GetMetadataResponse], ["query"]),
    manage_neuron: IDL.Func([ManageNeuron], [ManageNeuronResponse], []),
    list_proposals: IDL.Func([ListProposals], [ListProposalsResponse], ["query"])
  });
};
var SNS_PERM = { 3: "submit proposals", 4: "vote" };
var SnsGovClient = class {
  constructor(gov, agent) {
    this.gov = gov;
    this.actor = makeActor(snsIdl, gov, agent);
  }
  gov;
  actor;
  async name() {
    try {
      return (await this.actor.get_metadata({})).name[0];
    } catch {
      return void 0;
    }
  }
  async listOf(principal) {
    const r2 = await this.actor.list_neurons({ of_principal: [principal], limit: 100, start_page_at: [] });
    return r2.neurons.map((n) => {
      const mine = n.permissions.find((p2) => p2.principal[0]?.toText() === principal.toText());
      const perms = mine?.permission_type ?? [];
      const ds = n.dissolve_state[0];
      return {
        id: n.id[0] ? toHex(n.id[0].id) : "\u2014",
        stake: formatAmount(n.cached_neuron_stake_e8s, 8),
        permissions: perms.map((p2) => SNS_PERM[p2]).filter(Boolean),
        canVote: perms.includes(4),
        dissolve: ds ? "DissolveDelaySeconds" in ds ? `${Math.round(Number(ds.DissolveDelaySeconds) / 86400)}d delay` : "dissolving" : "\u2014"
      };
    });
  }
  /** Open (votable) proposals, newest first: id + title + summary. */
  async openProposals(limit = 10) {
    const r2 = await this.actor.list_proposals({ include_reward_status: [], before_proposal: [], limit, exclude_type: [], include_status: [1] });
    return r2.proposals.map((p2) => ({ id: p2.id[0] ? p2.id[0].id.toString() : "?", title: p2.proposal[0]?.title ?? "(untitled)", summary: p2.proposal[0]?.summary ?? "" }));
  }
  /** Cast a vote on an SNS proposal with a neuron (its id is its subaccount). */
  async vote(neuronIdHex, proposalId, yes) {
    voteResult(await this.actor.manage_neuron({
      subaccount: fromHex(neuronIdHex),
      command: [{ RegisterVote: { vote: yes ? 1 : 2, proposal: [{ id: proposalId }] } }]
    }));
  }
  /** Follow another neuron for an SNS nervous-system function (function 0 = the catch-all). Empty followees clears it. */
  async follow(neuronIdHex, functionId, followeeHexes) {
    voteResult(await this.actor.manage_neuron({
      subaccount: fromHex(neuronIdHex),
      command: [{ Follow: { function_id: functionId, followees: followeeHexes.map((h2) => ({ id: fromHex(h2) })) } }]
    }));
  }
};
function toHex(bytes) {
  return bytes.map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function fromHex(hex) {
  const h2 = hex.replace(/[^0-9a-f]/gi, "");
  const out = [];
  for (let i = 0; i < h2.length; i += 2) out.push(parseInt(h2.slice(i, i + 2), 16));
  return out;
}

// src/server/governance.ts
var Governance = class _Governance {
  constructor(doc, ctx) {
    this.doc = doc;
    this.ctx = ctx;
  }
  doc;
  ctx;
  static async open(path, ctx) {
    return new _Governance(await JsonDoc.open(path, { version: 1, sns: [...DEFAULT_SNS] }), ctx);
  }
  daos() {
    return this.doc.value.sns;
  }
  /** Discover the neurons this Codie is a hotkey/controller of (NNS + each SNS). */
  async listNeurons(id, nnsNeuronId) {
    const c2 = this.ctx.codie(id);
    const p2 = Principal.fromText(c2.principal);
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const extra = [];
    if (nnsNeuronId) {
      try {
        extra.push(BigInt(nnsNeuronId.trim()));
      } catch {
        throw new HttpError(400, "An NNS neuron id is a number.");
      }
    }
    const nnsP = new NnsGovClient(agent).listReadable(extra).catch((e) => {
      throw new HttpError(502, `NNS list_neurons failed: ${errorText(e)}`);
    });
    const snsP = Promise.all(this.daos().map(async (d2) => {
      try {
        return { gov: d2.gov, name: d2.name, neurons: await new SnsGovClient(d2.gov, agent).listOf(p2) };
      } catch (e) {
        return { gov: d2.gov, name: d2.name, neurons: [], error: errorText(e) };
      }
    }));
    const [nns, sns] = await Promise.all([nnsP, snsP]);
    return { nns, sns };
  }
  /** Cast a vote on a proposal with one of the Codie's neurons (as a hotkey). */
  async vote(id, req) {
    const c2 = this.ctx.codie(id);
    const agent = await this.ctx.agentFor(id, IC_HOST);
    let proposal;
    try {
      proposal = BigInt(req.proposalId.trim());
    } catch {
      throw new HttpError(400, "A proposal id is a number.");
    }
    const yes = req.vote === "yes";
    if (req.scope === "nns") {
      let nid;
      try {
        nid = BigInt(req.neuronId.trim());
      } catch {
        throw new HttpError(400, "An NNS neuron id is a number.");
      }
      await new NnsGovClient(agent).vote(nid, proposal, yes);
    } else {
      if (!req.gov) throw new HttpError(400, "Which SNS? (gov canister id)");
      await new SnsGovClient(req.gov, agent).vote(req.neuronId, proposal, yes);
    }
    this.ctx.log.info(`${c2.label} voted ${req.vote} on ${req.scope} proposal ${proposal}`);
    return { ok: true };
  }
  /** Open proposals the Codie could vote on: NNS plus each watched SNS. */
  async proposals(id) {
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const nnsP = new NnsGovClient(agent).openProposals().then((proposals) => ({ scope: "nns", name: "NNS", proposals })).catch((e) => ({ scope: "nns", name: "NNS", proposals: [], error: errorText(e) }));
    const snsP = this.daos().map((d2) => new SnsGovClient(d2.gov, agent).openProposals().then((proposals) => ({ scope: "sns", gov: d2.gov, name: d2.name, proposals })).catch((e) => ({ scope: "sns", gov: d2.gov, name: d2.name, proposals: [], error: errorText(e) })));
    return Promise.all([nnsP, ...snsP]);
  }
  /** Set (or clear, with an empty followee) which neuron this Codie's neuron follows. */
  async follow(id, req) {
    const c2 = this.ctx.codie(id);
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const followees = req.followee.trim() ? [req.followee.trim()] : [];
    const topic = Number.isFinite(req.topic) ? Math.trunc(req.topic) : 0;
    if (req.scope === "nns") {
      let nid, f2;
      try {
        nid = BigInt(req.neuronId.trim());
      } catch {
        throw new HttpError(400, "An NNS neuron id is a number.");
      }
      try {
        f2 = followees.map((x2) => BigInt(x2));
      } catch {
        throw new HttpError(400, "A followee NNS neuron id is a number.");
      }
      await new NnsGovClient(agent).follow(nid, topic, f2);
    } else {
      if (!req.gov) throw new HttpError(400, "Which SNS? (gov canister id)");
      await new SnsGovClient(req.gov, agent).follow(req.neuronId, BigInt(topic), followees);
    }
    this.ctx.log.info(`${c2.label} set following on ${req.scope}${req.gov ? " " + req.gov : ""} neuron ${req.neuronId} -> ${followees.join(",") || "(cleared)"} (topic ${topic})`);
    return { ok: true };
  }
  /** Pick a neuron the Codie can vote with (optionally in a named DAO). */
  async findNeuronFor(id, dao) {
    const n = await this.listNeurons(id);
    if (dao) {
      const g3 = n.sns.find((s) => s.name.toLowerCase() === dao || s.gov === dao);
      if (g3?.neurons[0]) return { scope: "sns", gov: g3.gov, neuronId: g3.neurons[0].id };
      return void 0;
    }
    if (n.nns[0]) return { scope: "nns", neuronId: n.nns[0].id };
    for (const g3 of n.sns) if (g3.neurons[0]) return { scope: "sns", gov: g3.gov, neuronId: g3.neurons[0].id };
    return void 0;
  }
  async addDao(gov) {
    let p2;
    try {
      p2 = Principal.fromText(gov.trim());
    } catch {
      throw new HttpError(400, "Not a valid canister id.");
    }
    const govId = p2.toText();
    if (this.daos().some((d2) => d2.gov === govId)) throw new HttpError(409, "That DAO is already listed.");
    const name = await new SnsGovClient(govId, await makeAgent(IC_HOST)).name().catch(() => void 0) ?? govId.slice(0, 5);
    const dao = { gov: govId, name };
    await this.doc.update((d2) => {
      d2.sns.push(dao);
    });
    return dao;
  }
  async removeDao(gov) {
    await this.doc.update((d2) => {
      d2.sns = d2.sns.filter((x2) => x2.gov !== gov);
    });
  }
  /** The spoken summary of open proposals (optionally for one named DAO). */
  async proposalsSpeech(id, dao) {
    const q2 = dao?.toLowerCase();
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const parts = [];
    if (!q2 || q2 === "nns") {
      try {
        const np = await new NnsGovClient(agent).openProposals(5);
        parts.push(np.length ? "NNS: " + np.map((p2) => `#${p2.id} ${p2.title}`).join("; ") : "NNS: no open proposals");
      } catch {
        parts.push("NNS: couldn't read proposals");
      }
    }
    if (q2 !== "nns") {
      const daos = q2 ? this.daos().filter((d2) => d2.name.toLowerCase() === q2 || d2.gov === q2) : this.daos();
      if (q2 && !daos.length && !parts.length) return `I don't know an SNS called ${dao}.`;
      for (const d2 of daos) {
        try {
          const props = await new SnsGovClient(d2.gov, agent).openProposals(5);
          parts.push(props.length ? `${d2.name}: ` + props.map((p2) => `#${p2.id} ${p2.title}`).join("; ") : `${d2.name}: no open proposals`);
        } catch {
          parts.push(`${d2.name}: couldn't read proposals`);
        }
      }
    }
    return parts.join(". ") || "No proposals to report.";
  }
};

// src/core/voice.ts
var TOKEN_WORDS = {
  icp: "ICP",
  ckbtc: "ckBTC",
  cketh: "ckETH",
  sneed: "SNEED",
  sgldt: "sGLDT"
};
var clean2 = (s) => s.trim().replace(/[.!?]+$/, "").trim();
function isWriteIntent(i) {
  return i.kind === "send_message" || i.kind === "send_token" || i.kind === "vote" || i.kind === "add_contact" || i.kind === "remove_contact" || i.kind === "register" || i.kind === "add_token" || i.kind === "add_dao" || i.kind === "forget_orders";
}
function parseIntent(input) {
  const text = clean2(input);
  const t = text.toLowerCase();
  if (!t) return { kind: "unknown", text };
  if (/^(help|what can you do|commands|what can i say)\b/.test(t)) return { kind: "help" };
  if (/^(yes|yep|yeah|confirm|do it|go ahead|send it|ok|okay)\b/.test(t)) return { kind: "confirm" };
  if (/^(no|nope|cancel|stop|nevermind|never mind|don'?t)\b/.test(t)) return { kind: "cancel" };
  if (/\b(who am i|my principal|my (wallet )?address|what('| i)?s my (principal|address))\b/.test(t)) return { kind: "whoami" };
  if (/\b(balance|how much.*(have|got)|what('| i)?s in my wallet|my wallet)\b/.test(t) && !/send|vote/.test(t)) return { kind: "balance" };
  let m2 = t.match(/\bvote\s+(yes|no|for|against|in favou?r)\s+(?:on\s+|for\s+)?(?:proposal\s+)?#?(\d+)(?:\s+(?:in|on)\s+([a-z0-9-]+))?/);
  if (m2) return { kind: "vote", vote: /no|against/.test(m2[1]) ? "no" : "yes", proposalId: m2[2], dao: m2[3] };
  if (/\bproposals?\b/.test(t)) {
    const STOP = /* @__PURE__ */ new Set(["open", "the", "my", "any", "all", "pending", "new", "active", "current", "what", "are", "is", "a", "an", "some", "list", "show", "me", "your"]);
    const d1 = t.match(/\b(?:in|for|on)\s+([a-z0-9-]+)/);
    const d2 = t.match(/\b([a-z0-9-]+)\s+proposals?/);
    const dao = d1?.[1] ?? (d2 && !STOP.has(d2[1]) ? d2[1] : void 0);
    return { kind: "list_proposals", dao };
  }
  if (/^(mute|silence|hush|dnd)\b/.test(t) || /\bdo not disturb\b/.test(t) || /\b(silence|mute|turn off|stop)\b.*\b(notif|alert)/.test(t) || /\bnotif\w*\s+off\b/.test(t)) return { kind: "set_notify", level: "off" };
  if (/\bchime\b/.test(t) || /\b(quiet|short|minimal|small)\b.*\b(notif|alert)/.test(t)) return { kind: "set_notify", level: "chime" };
  if (/^unmute\b/.test(t) || /\b(full|turn on|louder?|speak)\b.*\b(notif|alert)/.test(t) || /\bnotif\w*\s+(on|full)\b/.test(t) || /\bnotify me (fully|again)\b/.test(t)) return { kind: "set_notify", level: "full" };
  m2 = text.match(/^(?:add|save)\s+(?:a\s+)?contact\s+(\S{1,40})\s+([a-z0-9-]{20,})$/i);
  if (m2) return { kind: "add_contact", name: clean2(m2[1]), principal: m2[2] };
  m2 = text.match(/^(?:remove|delete|forget)\s+(?:the\s+)?contact\s+(.+)$/i);
  if (m2) return { kind: "remove_contact", name: clean2(m2[1]) };
  if (/\b(my contacts|list (?:my )?contacts|who are my contacts|show (?:my )?contacts|address book)\b/.test(t)) return { kind: "list_contacts" };
  m2 = text.match(/^(?:add|track)\s+(?:a\s+)?token\s+([a-z0-9-]{20,})$/i);
  if (m2) return { kind: "add_token", canister: m2[1] };
  m2 = text.match(/^(?:add|follow)\s+(?:the\s+)?(?:sns|dao)\s+([a-z0-9-]{20,})$/i) ?? text.match(/^(?:add|follow)\s+([a-z0-9-]{20,})\s+(?:as\s+)?(?:an?\s+)?(?:sns|dao)$/i);
  if (m2) return { kind: "add_dao", gov: m2[1] };
  m2 = text.match(/^(?:register|claim)\s+(?:me\s+)?(?:as\s+|the name\s+)?([a-z0-9-]{3,32})$/i);
  if (m2) return { kind: "register", name: m2[1].toLowerCase() };
  if (/\b(am i registered|what('| i)?s my (?:registered )?name|my registry name|do i have a name)\b/.test(t)) return { kind: "registry_status" };
  if (/\b(?:read|check)\b.*\b(?:messages?|mail|inbox)\b/.test(t) || /\b(?:any|new)\s+(?:mail|messages?)\b/.test(t) || /\bwhat('| i)?s in my (?:inbox|mail)\b/.test(t)) {
    const num = t.match(/\b(\d+)\b/);
    return { kind: "read_messages", count: num ? Math.min(Math.max(Number(num[1]), 1), 10) : void 0 };
  }
  if (/\b(my neurons?|list (?:my )?neurons?|do i have (?:a )?neurons?|what neurons?|any neurons?)\b/.test(t)) return { kind: "my_neurons" };
  if (/\bhide (?:the )?shop\b/.test(t)) return { kind: "hide_shop" };
  if (/\b(?:show|unhide|reveal) (?:the )?shop\b/.test(t)) return { kind: "show_shop" };
  if (/\bforget\b.*\b(orders?|shop|history|purchases?)\b/.test(t)) return { kind: "forget_orders" };
  if (/\b(my orders?|order status|did my order ship|how('| i)?s my order)\b/.test(t)) return { kind: "orders" };
  m2 = text.match(/^buy\s+(?:me\s+)?(?:the\s+|a\s+|an\s+)?(.+)$/i);
  if (m2) return { kind: "buy", item: clean2(m2[1]) };
  if (/^(shop|go shopping|open the shop|what('| i)?s (on|in) (the )?shelf|what can i buy)\b/.test(t)) return { kind: "shop" };
  m2 = text.match(/^send\s+([\d.,]+)\s+([a-zA-Z]+)\s+to\s+(.+)$/i);
  if (m2 && TOKEN_WORDS[m2[2].toLowerCase()]) return { kind: "send_token", amount: m2[1], token: TOKEN_WORDS[m2[2].toLowerCase()], to: clean2(m2[3]) };
  m2 = text.match(/^send\s+(\S+)\s+([\d.,]+)\s+([a-zA-Z]+)$/i);
  if (m2 && TOKEN_WORDS[m2[3].toLowerCase()]) return { kind: "send_token", amount: m2[2], token: TOKEN_WORDS[m2[3].toLowerCase()], to: clean2(m2[1]) };
  m2 = text.match(/^(?:message|tell|text)\s+(\S+)\s+(.+)$/i);
  if (m2) return { kind: "send_message", to: clean2(m2[1]), text: clean2(m2[2]) };
  m2 = text.match(/^send\s+(?:a\s+)?message\s+to\s+(\S+)\s+(?:saying\s+|that\s+)?(.+)$/i);
  if (m2) return { kind: "send_message", to: clean2(m2[1]), text: clean2(m2[2]) };
  return { kind: "unknown", text };
}
var HELP_TEXT = "You can say: 'what's my balance', 'who am I', 'message <name> <text>', 'send <name> 1 ICP', 'what proposals are open', 'vote yes on <id>', 'what's on the shelf', 'buy the <product>', 'my orders', 'silence notifications' / 'chime only' / 'full notifications', 'add contact <name> <principal>', 'my contacts', 'read my messages', 'register me as <name>', 'my neurons', or 'hide the shop'.";

// src/core/iwep.ts
var IWEP_SOURCE = "codie";
function formatMoney(minor, currency) {
  const n = typeof minor === "string" ? Number(minor) : minor;
  if (!Number.isFinite(n)) return `${minor} ${currency}`;
  try {
    const fmt = new Intl.NumberFormat(void 0, { style: "currency", currency });
    const digits = fmt.resolvedOptions().maximumFractionDigits ?? 2;
    return fmt.format(n / 10 ** digits);
  } catch {
    return `${n} ${currency}`;
  }
}
function defaultVariant(p2) {
  return p2.variants.find((v2) => v2.available) ?? p2.variants[0];
}
function checkoutTotalText(co) {
  const t = co.totals.find((x2) => x2.kind === "total");
  if (!t) return void 0;
  return t.display_text ?? formatMoney(t.amount, co.currency ?? "USD");
}
function newBuyerSecret() {
  const b2 = new Uint8Array(32);
  crypto.getRandomValues(b2);
  return btoa(String.fromCharCode(...b2)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function newRequestId() {
  const b2 = new Uint8Array(16);
  crypto.getRandomValues(b2);
  return [...b2].map((x2) => x2.toString(16).padStart(2, "0")).join("");
}
function spellCode(code) {
  return code.replace(/[-\s]/g, "").split("").join(" ");
}
var IwepClient = class {
  constructor(cfg, fetchImpl = fetch) {
    this.cfg = cfg;
    this.fetchImpl = fetchImpl;
    this.source = cfg.source ?? IWEP_SOURCE;
  }
  cfg;
  fetchImpl;
  source;
  #auth() {
    return `Bearer ${this.source}.${this.cfg.buyerSecret}`;
  }
  #url(path) {
    return this.cfg.baseUrl.replace(/\/+$/, "") + path;
  }
  async #json(res) {
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    if (!res.ok) {
      const e = data.error;
      throw new Error(e?.message ?? `IWEP error (HTTP ${res.status})`);
    }
    return data;
  }
  async shelf() {
    const res = await this.fetchImpl(this.#url(`/shelf/${this.source}.json`), { headers: { accept: "application/json" } });
    return this.#json(res);
  }
  async createCheckout(store, lines, requestId) {
    const res = await this.fetchImpl(this.#url("/native/v1/checkouts"), {
      method: "POST",
      headers: { authorization: this.#auth(), "content-type": "application/json" },
      body: JSON.stringify({ store, request_id: requestId, lines: lines.map((l2) => ({ variant_id: l2.variant_id, quantity: l2.quantity })) })
    });
    return (await this.#json(res)).checkout;
  }
  async getCheckout(id) {
    const res = await this.fetchImpl(this.#url(`/native/v1/checkouts/${encodeURIComponent(id)}`), { headers: { authorization: this.#auth() } });
    return (await this.#json(res)).checkout;
  }
  async handoff(id) {
    const res = await this.fetchImpl(this.#url(`/native/v1/checkouts/${encodeURIComponent(id)}/handoff`), {
      method: "POST",
      headers: { authorization: this.#auth() }
    });
    return this.#json(res);
  }
  async cancel(id) {
    const res = await this.fetchImpl(this.#url(`/native/v1/checkouts/${encodeURIComponent(id)}/cancel`), {
      method: "POST",
      headers: { authorization: this.#auth() }
    });
    return (await this.#json(res)).checkout;
  }
  async orders() {
    const res = await this.fetchImpl(this.#url("/native/v1/orders"), { headers: { authorization: this.#auth() } });
    return (await this.#json(res)).checkouts;
  }
};

// src/core/inbox.ts
var PAGE_LIMIT = 50n;
var MAX_PAGES_PER_POLL = 10;
var FULL_CHECK_EVERY = 10;
function pageArgsAfter(state, limit = PAGE_LIMIT) {
  return { after: [BigInt(state.highestId ?? "0")], before: [], limit };
}
function applyPage(state, page) {
  const prev = state.highestId === void 0 ? -1n : BigInt(state.highestId);
  const seen = /* @__PURE__ */ new Set();
  const fresh = page.messages.filter((m2) => m2.id > prev && !seen.has(m2.id) && (seen.add(m2.id), true)).sort((a2, b2) => a2.id < b2.id ? -1 : a2.id > b2.id ? 1 : 0);
  let highest = prev;
  for (const m2 of fresh) if (m2.id > highest) highest = m2.id;
  return {
    state: {
      ...state,
      highestId: highest >= 0n ? highest.toString() : state.highestId,
      total: page.total.toString(),
      lastUpdated: page.last_updated.toString()
    },
    fresh
  };
}
function newestCreatedAt(msgs) {
  let best;
  for (const m2 of msgs) if (best === void 0 || m2.created_at > best) best = m2.created_at;
  return best;
}
function listChanged(before, after, freshCount) {
  if (before.total === void 0) return { removed: false, changed: false };
  const removed = BigInt(after.total ?? "0") < BigInt(before.total) + BigInt(freshCount);
  const changed = freshCount === 0 && before.lastUpdated !== void 0 && BigInt(after.lastUpdated ?? "0") > BigInt(before.lastUpdated);
  return { removed, changed };
}
async function markIfBehind(api, st2) {
  if (st2.newestSeen === void 0) return { state: st2 };
  const want = BigInt(st2.newestSeen);
  if (st2.markedUpTo !== void 0 && BigInt(st2.markedUpTo) >= want) return { state: st2 };
  try {
    await api.markSeenUpTo(want);
    return { state: { ...st2, markedUpTo: want.toString() } };
  } catch (markError) {
    return { state: st2, markError };
  }
}
function maxStr(a2, b2) {
  if (b2 === void 0) return a2;
  if (a2 === void 0 || b2 > BigInt(a2)) return b2.toString();
  return a2;
}
async function pollInbox(api, state, opts = {}) {
  const baseline = opts.baselineOnFirstSync ?? true;
  const firstSync = state.highestId === void 0;
  const fullDue = (state.pollsSinceFull ?? 0) + 1 >= FULL_CHECK_EVERY;
  if (!firstSync && !fullDue) {
    const n = await api.recentCount();
    if (n === 0n) {
      return {
        state: { ...state, pollsSinceFull: (state.pollsSinceFull ?? 0) + 1 },
        fresh: [],
        baselined: false,
        removed: false,
        changed: false,
        skipped: true
      };
    }
  }
  if (firstSync && baseline) {
    const top = await api.receivedPage({ after: [], before: [], limit: 1n });
    const newest = top.messages[0];
    const next = {
      highestId: newest ? newest.id.toString() : "0",
      total: top.total.toString(),
      lastUpdated: top.last_updated.toString(),
      newestSeen: maxStr(state.newestSeen, newest?.created_at),
      markedUpTo: state.markedUpTo,
      pollsSinceFull: 0
    };
    const m3 = await markIfBehind(api, next);
    return { state: m3.state, fresh: [], baselined: true, removed: false, changed: false, skipped: false, markError: m3.markError };
  }
  const before = state;
  let cur = { ...state };
  const fresh = [];
  for (let i = 0; i < MAX_PAGES_PER_POLL; i++) {
    const page = await api.receivedPage(pageArgsAfter(cur));
    const r2 = applyPage(cur, page);
    cur = r2.state;
    fresh.push(...r2.fresh);
    if (!page.has_more || r2.fresh.length === 0) break;
  }
  if (cur.highestId === void 0) cur.highestId = "0";
  const { removed, changed } = listChanged(before, cur, fresh.length);
  cur.newestSeen = maxStr(cur.newestSeen, newestCreatedAt(fresh));
  cur.pollsSinceFull = 0;
  const m2 = await markIfBehind(api, cur);
  return { state: m2.state, fresh, baselined: false, removed, changed, skipped: false, markError: m2.markError };
}

// src/core/recipients.ts
var NAME_RE = /^[a-z0-9-]{3,32}$/;
function normalizeName(s) {
  return s.trim().toLowerCase();
}
function isValidName(s) {
  return NAME_RE.test(normalizeName(s));
}
function parsePrincipal(s) {
  try {
    const p2 = Principal.fromText(s.trim());
    return p2.toText() === s.trim() ? p2 : void 0;
  } catch {
    return void 0;
  }
}
function dedupePrincipals(ps) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const p2 of ps) {
    const k2 = p2.toText();
    if (!seen.has(k2)) {
      seen.add(k2);
      out.push(p2);
    }
  }
  return out;
}
function shortPrincipal(p2) {
  const t = typeof p2 === "string" ? p2 : p2.toText();
  const parts = t.split("-");
  if (parts.length <= 3) return t;
  return `${parts[0]}\u2026${parts[parts.length - 1]}`;
}

// src/core/contacts.ts
var LABEL_MAX = 40;
var NOTE_MAX = 200;
function normalizeLabel(s) {
  return s.replace(/\s+/g, " ").trim();
}
function labelKey(s) {
  return normalizeLabel(s).toLowerCase();
}
function sortContacts(cs) {
  return [...cs].sort((a2, b2) => (a2.favorite === b2.favorite ? 0 : a2.favorite ? -1 : 1) || labelKey(a2.label).localeCompare(labelKey(b2.label)));
}

// src/server/contactBook.ts
var ContactBook = class _ContactBook {
  constructor(doc, log2) {
    this.doc = doc;
    this.log = log2;
  }
  doc;
  log;
  static async open(path, log2) {
    return new _ContactBook(await JsonDoc.open(path, { version: 1, contacts: [] }), log2);
  }
  list() {
    return sortContacts(this.doc.value.contacts);
  }
  byPrincipal(p2) {
    return this.doc.value.contacts.find((c2) => c2.principal === p2);
  }
  byLabel(label) {
    const k2 = labelKey(label);
    return this.doc.value.contacts.find((c2) => labelKey(c2.label) === k2);
  }
  #validateLabel(label) {
    const l2 = normalizeLabel(label);
    if (!l2) throw new HttpError(400, "A contact needs a name.");
    if ([...l2].length > LABEL_MAX) throw new HttpError(400, `A contact name is at most ${LABEL_MAX} characters.`);
    return l2;
  }
  #validateNote(note) {
    if (note === void 0) return void 0;
    const n = note.trim();
    if ([...n].length > NOTE_MAX) throw new HttpError(400, `A note is at most ${NOTE_MAX} characters.`);
    return n || void 0;
  }
  async add(req) {
    let p2;
    try {
      p2 = Principal.fromText(req.principal.trim());
    } catch {
      throw new HttpError(400, "That is not a valid principal.");
    }
    if (p2.isAnonymous()) throw new HttpError(400, "The anonymous principal cannot be a contact.");
    const principal = p2.toText();
    const label = this.#validateLabel(req.label);
    const note = this.#validateNote(req.note);
    if (this.byPrincipal(principal)) throw new HttpError(409, "That principal is already a contact \u2014 edit it instead.");
    const clash = this.byLabel(label);
    if (clash) throw new HttpError(409, `You already have a contact named "${clash.label}".`);
    const now = Date.now();
    const contact = { principal, label, note, favorite: req.favorite ? true : void 0, createdAtMs: now, updatedAtMs: now };
    await this.doc.update((d2) => {
      d2.contacts.push(contact);
    });
    this.log.info(`added contact "${label}" -> ${principal}`);
    return contact;
  }
  async update(principal, patch) {
    const existing = this.byPrincipal(principal);
    if (!existing) throw new HttpError(404, "No such contact.");
    const label = patch.label !== void 0 ? this.#validateLabel(patch.label) : existing.label;
    if (patch.label !== void 0) {
      const clash = this.byLabel(label);
      if (clash && clash.principal !== principal) throw new HttpError(409, `You already have a contact named "${clash.label}".`);
    }
    const note = patch.note !== void 0 ? this.#validateNote(patch.note) : existing.note;
    const favorite = patch.favorite !== void 0 ? !!patch.favorite : existing.favorite;
    await this.doc.update((d2) => {
      const c2 = d2.contacts.find((x2) => x2.principal === principal);
      if (c2) {
        c2.label = label;
        c2.note = note;
        c2.favorite = favorite ? true : void 0;
        c2.updatedAtMs = Date.now();
      }
    });
    return this.byPrincipal(principal);
  }
  async remove(principal) {
    if (!this.byPrincipal(principal)) throw new HttpError(404, "No such contact.");
    await this.doc.update((d2) => {
      d2.contacts = d2.contacts.filter((c2) => c2.principal !== principal);
    });
  }
};

// src/server/memory.ts
var MAX_NOTES = 50;
var MAX_LEN = 500;
var DIGEST_N = 8;
var MemoryBook = class _MemoryBook {
  constructor(doc) {
    this.doc = doc;
  }
  doc;
  static async open(path) {
    return new _MemoryBook(await JsonDoc.open(path, { version: 1, codies: {} }));
  }
  list(id) {
    return this.doc.value.codies[id] ?? [];
  }
  async write(id, text) {
    const clean3 = text.trim().slice(0, MAX_LEN);
    if (!clean3) throw new HttpError(400, "A note cannot be empty.");
    const note = { id: randomId(), text: clean3, atMs: Date.now() };
    await this.doc.update((d2) => {
      const list = d2.codies[id] ??= [];
      list.push(note);
      if (list.length > MAX_NOTES) list.splice(0, list.length - MAX_NOTES);
    });
    return note;
  }
  async remove(id, noteId) {
    await this.doc.update((d2) => {
      if (d2.codies[id]) d2.codies[id] = d2.codies[id].filter((n) => n.id !== noteId);
    });
  }
  /** A compact digest of the most recent notes, for the agent system prompt (empty if none). */
  digest(id, n = DIGEST_N) {
    const list = this.list(id);
    if (!list.length) return "";
    return list.slice(-n).map((x2) => `- ${x2.text}`).join("\n");
  }
};
function randomId() {
  const b2 = new Uint8Array(6);
  globalThis.crypto.getRandomValues(b2);
  return Array.from(b2, (x2) => x2.toString(16).padStart(2, "0")).join("");
}

// src/core/deposits.ts
function depositsSince(seen, balances) {
  if (!seen) return [];
  return balances.flatMap((b2) => {
    const prev = seen[b2.ledger];
    if (prev === void 0) return [];
    const prevUnits = BigInt(prev);
    return b2.balance > prevUnits ? [{ ...b2, delta: b2.balance - prevUnits }] : [];
  });
}
function seenFrom(balances) {
  return Object.fromEntries(balances.map((b2) => [b2.ledger, b2.balance.toString()]));
}

// src/server/wallet.ts
var WalletService = class _WalletService {
  constructor(tokensDoc, walletDoc, ctx) {
    this.tokensDoc = tokensDoc;
    this.walletDoc = walletDoc;
    this.ctx = ctx;
  }
  tokensDoc;
  walletDoc;
  ctx;
  #lastWalletMs = /* @__PURE__ */ new Map();
  static async open(tokensPath, walletPath, ctx) {
    return new _WalletService(
      await JsonDoc.open(tokensPath, { version: 1, custom: [] }),
      await JsonDoc.open(walletPath, { version: 1, codies: {} }),
      ctx
    );
  }
  tokens() {
    const custom = this.tokensDoc.value.custom.map((c2) => ({ key: c2.key, ledger: c2.ledger, symbol: c2.symbol, decimals: c2.decimals, fee: BigInt(c2.fee) }));
    return [...DEFAULT_TOKENS, ...custom];
  }
  ledgerForSymbol(symbol) {
    const t = this.tokens().find((x2) => x2.symbol.toLowerCase() === symbol.toLowerCase());
    if (!t) throw new HttpError(400, `I don't know the token ${symbol}.`);
    return t.ledger;
  }
  #tokenByLedger(ledger) {
    const t = this.tokens().find((x2) => x2.ledger === ledger);
    if (!t) throw new HttpError(404, "That token is not configured.");
    return t;
  }
  async balances(id) {
    const c2 = this.ctx.codie(id);
    const p2 = Principal.fromText(c2.principal);
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const tokens = await Promise.all(this.tokens().map(async (t) => {
      try {
        const bal = await new Icrc1Client(t.ledger, agent).balanceOf(p2);
        return { key: t.key, ledger: t.ledger, symbol: t.symbol, decimals: t.decimals, fee: t.fee.toString(), balance: bal.toString(), formatted: formatAmount(bal, t.decimals) };
      } catch (e) {
        return { key: t.key, ledger: t.ledger, symbol: t.symbol, decimals: t.decimals, fee: t.fee.toString(), error: errorText(e) };
      }
    }));
    return { principal: c2.principal, tokens };
  }
  watch(id) {
    return this.walletDoc.value.codies[id] ?? {};
  }
  async #rawBalances(id) {
    const c2 = this.ctx.codie(id);
    const p2 = Principal.fromText(c2.principal);
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const out = [];
    for (const t of this.tokens()) {
      try {
        out.push({ ledger: t.ledger, symbol: t.symbol, decimals: t.decimals, balance: await new Icrc1Client(t.ledger, agent).balanceOf(p2) });
      } catch {
      }
    }
    return out;
  }
  /** Deposit watch: a rise in any token balance is announced via the notification
   *  policy (reusing the durable delivery queue). First observation baselines
   *  silently; balances are tracked regardless of notify level so muting never
   *  replays on unmute. Runs at most once a minute regardless of poll speed. */
  async checkDeposits(id) {
    const now = Date.now();
    if (now - (this.#lastWalletMs.get(id) ?? 0) < 6e4) return;
    this.#lastWalletMs.set(id, now);
    const balances = await this.#rawBalances(id);
    if (!balances.length) return;
    const deposits = depositsSince(this.watch(id).seen, balances);
    const nextSeen = seenFrom(balances);
    await this.walletDoc.update((d2) => {
      const w2 = d2.codies[id] ??= {};
      w2.seen = { ...w2.seen ?? {}, ...nextSeen };
    });
    for (const dep of deposits) {
      const amount = formatAmount(dep.delta, dep.decimals);
      const balance = formatAmount(dep.balance, dep.decimals);
      await this.ctx.notify(id, `recv:${dep.ledger}:${dep.balance}`, { source: "deposit", title: "Deposit received", body: `You received ${amount} ${dep.symbol}. Balance: ${balance} ${dep.symbol}.`, chime: "You got a deposit." });
      await this.walletDoc.update((d2) => {
        const w2 = d2.codies[id] ??= {};
        w2.lastDepositAtMs = Date.now();
        w2.lastDepositText = `${amount} ${dep.symbol}`;
      });
      this.ctx.log.info(`${this.ctx.codie(id).label} received ${amount} ${dep.symbol}`);
    }
  }
  async sendToken(id, req) {
    const c2 = this.ctx.codie(id);
    const token2 = this.#tokenByLedger(req.ledger);
    const principals = await this.ctx.resolve(req.to);
    if (principals.length !== 1) throw new HttpError(400, "Send to exactly one recipient.");
    const to = principals[0];
    const units = parseAmount(req.amount, token2.decimals);
    if (units <= 0n) throw new HttpError(400, "Amount must be greater than zero.");
    const agent = await this.ctx.agentFor(id, IC_HOST);
    const client = new Icrc1Client(req.ledger, agent);
    const needed = units + token2.fee;
    const bal = await client.balanceOf(Principal.fromText(c2.principal));
    if (bal < needed) {
      throw new HttpError(400, `Not enough ${token2.symbol}: ${formatAmount(units, token2.decimals)} + ${formatAmount(token2.fee, token2.decimals)} fee needs ${formatAmount(needed, token2.decimals)}, but the balance is ${formatAmount(bal, token2.decimals)}.`);
    }
    const createdAtTime = BigInt(Date.now()) * 1000000n;
    const res = await client.transfer(to, units, { createdAtTime });
    if ("Err" in res) throw new HttpError(400, transferErrorText(res.Err));
    this.ctx.log.info(`${c2.label} sent ${formatAmount(units, token2.decimals)} ${token2.symbol} -> ${to.toText()} (block ${res.Ok})`);
    return { blockIndex: res.Ok.toString(), symbol: token2.symbol, amount: formatAmount(units, token2.decimals) };
  }
  async addToken(canisterId) {
    let p2;
    try {
      p2 = Principal.fromText(canisterId.trim());
    } catch {
      throw new HttpError(400, "Not a valid canister id.");
    }
    const ledger = p2.toText();
    if (this.tokens().some((t) => t.ledger === ledger)) throw new HttpError(409, "That token is already in the list.");
    let meta;
    try {
      meta = await new Icrc1Client(ledger, await makeAgent(IC_HOST)).describe();
    } catch (e) {
      throw new HttpError(400, `That canister does not look like an ICRC-1 ledger: ${errorText(e)}`);
    }
    const stored = { key: meta.symbol, ledger, symbol: meta.symbol, decimals: meta.decimals, fee: meta.fee.toString() };
    await this.tokensDoc.update((d2) => {
      d2.custom.push(stored);
    });
    return { ...stored, fee: meta.fee };
  }
  async removeToken(ledger) {
    if (DEFAULT_TOKENS.some((t) => t.ledger === ledger)) throw new HttpError(400, "The built-in tokens cannot be removed.");
    await this.tokensDoc.update((d2) => {
      d2.custom = d2.custom.filter((t) => t.ledger !== ledger);
    });
  }
};

// src/core/notify.ts
var NOTIFY_LEVELS = ["off", "chime", "full"];
var DEFAULT_NOTIFY = "full";
function renderAlert(level, a2) {
  if (level === "off") return { speak: null, desktop: null };
  if (level === "chime") return { speak: { title: a2.title, body: a2.chime }, desktop: { title: a2.title } };
  return { speak: { title: a2.title, body: a2.body }, desktop: { title: a2.title, body: a2.body } };
}
function parseNotifyLevel(s) {
  const t = s.trim().toLowerCase();
  return NOTIFY_LEVELS.includes(t) ? t : void 0;
}
function orderChanges(seen, orders) {
  if (!seen) return [];
  return orders.filter((o) => seen[o.id] !== void 0 && seen[o.id] !== o.status);
}
function seenOrdersFrom(orders) {
  return Object.fromEntries(orders.map((o) => [o.id, o.status]));
}

// src/core/iwepVendors.ts
var CODIE_KIND = "desktop_app";
var SURFACE_ALLOWS_BATCH = 200;
var TTL_MS = 6e4;
var conduitIdl = ({ IDL }) => IDL.Service({
  getVendors: IDL.Func([], [IDL.Vec(IDL.Record({ id: IDL.Text, name: IDL.Text, image_hosts: IDL.Vec(IDL.Text), has_connector: IDL.Bool }))], ["query"])
});
var accountsIdl = ({ IDL }) => IDL.Service({
  surfaceAllows: IDL.Func([IDL.Text, IDL.Text, IDL.Vec(IDL.Text)], [IDL.Vec(IDL.Record({ vendor: IDL.Text, allow: IDL.Bool }))], ["query"])
});
function mergeVendors(stores, allowRows) {
  const denied = new Set(allowRows.filter((r2) => r2.allow === false).map((r2) => r2.vendor));
  return stores.map((s) => ({ id: s.id, name: s.name, imageHosts: s.image_hosts, hasConnector: s.has_connector, codieAllowed: !denied.has(s.id) }));
}
var cache;
async function fetchVendors(host = IC_HOST, force = false) {
  if (!force && cache && Date.now() - cache.at < TTL_MS) return cache.vendors;
  const agent = await makeAgent(host);
  const conduit = makeActor(conduitIdl, IWEP_CONDUIT_CANISTER, agent);
  const accounts = makeActor(accountsIdl, IWEP_ACCOUNTS_CANISTER, agent);
  const stores = await conduit.getVendors();
  let rows = [];
  try {
    const ids = stores.map((s) => s.id);
    for (let i = 0; i < ids.length; i += SURFACE_ALLOWS_BATCH) {
      rows = rows.concat(await accounts.surfaceAllows(IWEP_SOURCE, CODIE_KIND, ids.slice(i, i + SURFACE_ALLOWS_BATCH)));
    }
  } catch {
    rows = [];
  }
  const vendors = mergeVendors(stores, rows);
  cache = { at: Date.now(), vendors };
  return vendors;
}

// src/server/shop.ts
var ShopSurface = class _ShopSurface {
  constructor(doc, ctx) {
    this.doc = doc;
    this.ctx = ctx;
  }
  doc;
  ctx;
  static async open(path, ctx) {
    return new _ShopSurface(await JsonDoc.open(path, { version: 1, disclosed: false, hidden: false }), ctx);
  }
  config() {
    const s = this.doc.value;
    return { configured: !!s.gatewayBaseUrl, gatewayBaseUrl: s.gatewayBaseUrl, disclosed: s.disclosed, hidden: s.hidden, source: IWEP_SOURCE };
  }
  async setConfig(patch) {
    await this.doc.update((d2) => {
      if ("gatewayBaseUrl" in patch) {
        const v2 = patch.gatewayBaseUrl;
        if (!v2) d2.gatewayBaseUrl = void 0;
        else {
          const u2 = new URL(v2.trim());
          d2.gatewayBaseUrl = u2.origin + (u2.pathname === "/" ? "" : u2.pathname.replace(/\/$/, ""));
        }
      }
      if (typeof patch.disclosed === "boolean") d2.disclosed = patch.disclosed;
      if (typeof patch.hidden === "boolean") d2.hidden = patch.hidden;
    });
  }
  /** Forget the buyer secret (new buyer, no history). Orders already placed are untouched. */
  async forgetBuyer() {
    await this.doc.update((d2) => {
      d2.buyerSecret = void 0;
    });
  }
  // ---- vendor browser + per-Codie activation (reads IWEP canisters directly; no gateway) ----
  /** The IWEP vendors, each flagged with whether this Codie has it active (default: all on). */
  async vendors(codieId) {
    const all = await fetchVendors();
    const off = new Set(this.doc.value.deactivated?.[codieId] ?? []);
    return all.map((v2) => ({ ...v2, active: !off.has(v2.id) }));
  }
  /** Turn a vendor on/off for this Codie. A deactivated set is stored, so new vendors default on. */
  async setVendorActive(codieId, store, active) {
    await this.doc.update((d2) => {
      const off = new Set((d2.deactivated ??= {})[codieId] ?? []);
      if (active) off.delete(store);
      else off.add(store);
      if (off.size) d2.deactivated[codieId] = [...off];
      else delete d2.deactivated[codieId];
    });
  }
  /** The store ids this Codie has turned OFF (the UI filters the shelf against this). */
  deactivatedStores(codieId) {
    return new Set(this.doc.value.deactivated?.[codieId] ?? []);
  }
  #iwep() {
    const s = this.doc.value;
    if (!s.gatewayBaseUrl) throw new HttpError(409, "Shop not configured: set the IWEP gateway URL.");
    if (s.hidden) throw new HttpError(409, "The shop is hidden.");
    let secret = s.buyerSecret;
    if (!secret) {
      secret = newBuyerSecret();
      void this.doc.update((d2) => {
        if (!d2.buyerSecret) d2.buyerSecret = secret;
      });
    }
    return new IwepClient({ baseUrl: s.gatewayBaseUrl, buyerSecret: secret, source: IWEP_SOURCE }, fetch);
  }
  shelf() {
    return this.#iwep().shelf();
  }
  checkout(store, lines, requestId) {
    return this.#iwep().createCheckout(store, lines, requestId ?? newRequestId());
  }
  getCheckout(id) {
    return this.#iwep().getCheckout(id);
  }
  handoff(id) {
    return this.#iwep().handoff(id);
  }
  cancel(id) {
    return this.#iwep().cancel(id);
  }
  orders() {
    return this.#iwep().orders();
  }
  /** Announce order-status changes (the shop is one-per-install). A new order baselines. */
  async checkOrders(id) {
    if (!this.doc.value.gatewayBaseUrl) return;
    let orders;
    try {
      orders = await this.orders();
    } catch {
      return;
    }
    const list = orders.map((o) => ({ id: o.id, store: o.store.name, status: o.status }));
    const changes = orderChanges(this.doc.value.seenOrders, list);
    await this.doc.update((d2) => {
      d2.seenOrders = { ...d2.seenOrders ?? {}, ...seenOrdersFrom(list) };
    });
    for (const o of changes) {
      await this.ctx.notify(id, `order:${o.id}:${o.status}`, { source: "order", title: "Order update", body: `Your ${o.store} order is now ${o.status.replace(/_/g, " ")}.`, chime: "An order changed." });
      this.ctx.log.info(`order ${o.id} -> ${o.status}`);
    }
  }
};

// src/core/tools.ts
var P2 = (name, type, required, description, enumVals) => ({ name, type, required, description, ...enumVals ? { enum: enumVals } : {} });
var CODIE_TOOLS = [
  { name: "whoami", description: "The Codie's own name and principal.", write: false, params: [] },
  { name: "balance", description: "The Codie wallet's non-zero token balances.", write: false, params: [] },
  {
    name: "read_messages",
    description: "Read the most recent received messages aloud.",
    write: false,
    params: [P2("count", "number", false, "How many to read (1\u201310, default 3).")]
  },
  {
    name: "list_proposals",
    description: "Open NNS and SNS proposals, optionally for one DAO.",
    write: false,
    params: [P2("dao", "string", false, "DAO name or governance canister id.")]
  },
  { name: "my_neurons", description: "How many NNS and SNS neurons the Codie has.", write: false, params: [] },
  { name: "registry_status", description: "Whether the Codie is registered and under what name.", write: false, params: [] },
  {
    name: "find_codie",
    description: "Look up a registered Codie by its exact name (returns its principal and owner status).",
    write: false,
    params: [P2("name", "string", true, "The Codie name to look up.")]
  },
  { name: "contacts_list", description: "List the saved contacts.", write: false, params: [] },
  { name: "memory_list", description: "List this identity's saved memory notes.", write: false, params: [] },
  {
    name: "memory_write",
    description: "Remember a short note (facts, preferences) for this identity.",
    write: false,
    params: [P2("text", "string", true, "The note to remember.")]
  },
  {
    name: "memory_remove",
    description: "Forget a memory note by its id.",
    write: false,
    params: [P2("id", "string", true, "The note id from memory_list.")]
  },
  { name: "shop_shelf", description: "What is on the shop shelf.", write: false, params: [] },
  { name: "list_vendors", description: "The IWEP vendors, and whether each is active for this Codie.", write: false, params: [] },
  { name: "orders", description: "The status of recent shop orders.", write: false, params: [] },
  // settings (no confirmation)
  {
    name: "set_notify",
    description: "Set the notification level.",
    write: false,
    params: [P2("level", "string", true, "off, chime or full.", ["off", "chime", "full"])]
  },
  {
    name: "set_vendor",
    description: "Turn an IWEP vendor on or off for this Codie.",
    write: false,
    params: [P2("vendor", "string", true, "The store id."), P2("active", "string", true, "on or off.", ["on", "off"])]
  },
  { name: "hide_shop", description: "Hide the shop.", write: false, params: [] },
  { name: "show_shop", description: "Show the shop.", write: false, params: [] },
  // writes (confirmation required)
  {
    name: "message_send",
    description: "Send a Sneed message.",
    write: true,
    params: [P2("to", "string", true, "Recipient: a contact name, Codie name, or principal."), P2("text", "string", true, "The message body.")]
  },
  {
    name: "wallet_send",
    description: "Send tokens from the Codie wallet.",
    write: true,
    params: [P2("to", "string", true, "Recipient: a contact name, Codie name, or principal."), P2("amount", "string", true, "Decimal amount, e.g. 1.5."), P2("token", "string", true, "Token symbol, e.g. ICP, ckBTC, SNEED.")]
  },
  {
    name: "vote",
    description: "Vote on a proposal with the Codie neuron.",
    write: true,
    params: [P2("proposalId", "string", true, "The proposal id."), P2("vote", "string", true, "yes or no.", ["yes", "no"]), P2("dao", "string", false, "DAO name or governance canister id.")]
  },
  {
    name: "follow",
    description: "Set the Codie's neuron to follow another neuron (auto-vote). Empty followee stops following.",
    write: true,
    params: [P2("followee", "string", true, "Neuron id to follow (empty to stop)."), P2("dao", "string", false, "DAO name or governance canister id; omit for NNS."), P2("topic", "number", false, "NNS topic or SNS function id; 0 = all (default).")]
  },
  {
    name: "shop_buy",
    description: "Start a purchase; returns a pay code to speak.",
    write: true,
    params: [P2("item", "string", true, "The product name.")]
  },
  {
    name: "contact_add",
    description: "Save a contact.",
    write: true,
    params: [P2("name", "string", true, "The nickname."), P2("principal", "string", true, "Their principal.")]
  },
  {
    name: "contact_remove",
    description: "Remove a contact by name.",
    write: true,
    params: [P2("name", "string", true, "The contact nickname.")]
  },
  {
    name: "register",
    description: "Register the Codie under a name.",
    write: true,
    params: [P2("name", "string", true, "The name (3\u201332 of a\u2013z, 0\u20139, -).")]
  },
  {
    name: "add_token",
    description: "Add an ICRC-1 token to the wallet.",
    write: true,
    params: [P2("canister", "string", true, "The ledger canister id.")]
  },
  {
    name: "add_dao",
    description: "Add an SNS DAO to watch.",
    write: true,
    params: [P2("gov", "string", true, "The governance canister id.")]
  },
  { name: "forget_orders", description: "Forget this device's shop order history.", write: true, params: [] }
];
function toolByName(name) {
  return CODIE_TOOLS.find((t) => t.name === name);
}
function toOllamaTools() {
  return CODIE_TOOLS.map((t) => ({
    type: "function",
    function: {
      name: t.name,
      description: t.description,
      parameters: {
        type: "object",
        properties: Object.fromEntries(t.params.map((p2) => [p2.name, { type: p2.type, description: p2.description, ...p2.enum ? { enum: p2.enum } : {} }])),
        required: t.params.filter((p2) => p2.required).map((p2) => p2.name)
      }
    }
  }));
}
function validateArgs(tool, args2) {
  const value = {};
  for (const p2 of tool.params) {
    const raw = args2[p2.name];
    if (raw === void 0 || raw === null || raw === "") {
      if (p2.required) return { ok: false, error: `${tool.name} needs "${p2.name}".` };
      continue;
    }
    if (p2.type === "number") {
      const n = typeof raw === "number" ? raw : Number(String(raw).trim());
      if (!Number.isFinite(n)) return { ok: false, error: `"${p2.name}" must be a number.` };
      value[p2.name] = n;
    } else {
      const v2 = String(raw);
      if (p2.enum && !p2.enum.includes(v2)) return { ok: false, error: `"${p2.name}" must be one of: ${p2.enum.join(", ")}.` };
      value[p2.name] = v2;
    }
  }
  return { ok: true, value };
}

// src/core/llm.ts
var PERSONAS = [
  { key: "easy", label: "Easy", canisterId: "v3ccn-viaaa-aaaau-afebq-cai", system: "You are Qwen-Chan, a friendly helpful AI.", maxTokens: 22 },
  { key: "spicy", label: "Spicy", canisterId: "7p3sj-mqaaa-aaaau-affza-cai", system: "You are Spicy-Chan, a flirty uncensored AI girlfriend.", maxTokens: 40 },
  { key: "smol", label: "Smol", canisterId: "7gyzv-2yaaa-aaaau-affyq-cai", system: "You are Smol-Chan, a spunky energetic AI.", maxTokens: 80 },
  { key: "coder", label: "Coder", canisterId: "lxcm7-hiaaa-aaaau-afgnq-cai", system: "You are Waifu.code, a concise AI coding assistant.", maxTokens: 25 }
];
function personaByKey(k2) {
  return PERSONAS.find((p2) => p2.key === k2);
}
var llamaIdl = ({ IDL }) => {
  const InputRecord = IDL.Record({ args: IDL.Vec(IDL.Text) });
  const RunOutputRecord = IDL.Record({ output: IDL.Text, error: IDL.Text, prompt_remaining: IDL.Text, generated_eog: IDL.Bool });
  const OutputRecordResult = IDL.Variant({ Ok: RunOutputRecord, Err: RunOutputRecord });
  return IDL.Service({
    new_chat: IDL.Func([InputRecord], [OutputRecordResult], []),
    run_update: IDL.Func([InputRecord], [OutputRecordResult], []),
    remove_prompt_cache: IDL.Func([InputRecord], [OutputRecordResult], [])
  });
};
function stripThink(t) {
  return t.replace(/<think>[\s\S]*?<\/think>\s*/g, "").replace(/<think>[\s\S]*/g, "");
}
async function personaReply(agent, p2, userText, onToken, maxCalls = 40) {
  const actor = makeActor(llamaIdl, p2.canisterId, agent);
  const cache2 = `codie_${Date.now()}.cache`;
  const prompt = `<|im_start|>system
${p2.system}<|im_end|>
<|im_start|>user
${userText}<|im_end|>
<|im_start|>assistant
`;
  const clean3 = (s) => stripThink(s).replace(/<\|im_end\|>\s*$/g, "").replace(/<\|endoftext\|>\s*$/g, "");
  try {
    await actor.remove_prompt_cache({ args: ["--prompt-cache", cache2] });
  } catch {
  }
  const nc = await actor.new_chat({ args: ["--prompt-cache", cache2] });
  if ("Err" in nc) throw new Error(nc.Err.error.includes("Access") ? "This model refused the Codie (access control)." : `new_chat: ${nc.Err.error}`);
  let full = "", promptDone = false;
  for (let i = 0; i < maxCalls; i++) {
    const args2 = ["--prompt-cache", cache2, "--prompt-cache-all", "-sp", "-n", String(p2.maxTokens), "-p", promptDone ? "" : prompt];
    const resp = await actor.run_update({ args: args2 });
    if ("Err" in resp) {
      if (full) break;
      throw new Error(`run_update: ${resp.Err.error}`);
    }
    const r2 = resp.Ok;
    if (r2.output) {
      full += r2.output;
      onToken?.(clean3(full).trim());
    }
    if (!r2.prompt_remaining) promptDone = true;
    if (r2.generated_eog) break;
  }
  try {
    await actor.remove_prompt_cache({ args: ["--prompt-cache", cache2] });
  } catch {
  }
  return clean3(full).trim() || "\u2026";
}
var AGENT_CANISTER = "w36hm-eqaaa-aaaal-qr76a-cai";
var AGENT_MODEL = "llama3.1:8b";
var chatIdl = ({ IDL }) => {
  const property = IDL.Record({ "type": IDL.Text, name: IDL.Text, description: IDL.Opt(IDL.Text), "enum": IDL.Opt(IDL.Vec(IDL.Text)) });
  const parameters = IDL.Record({ "type": IDL.Text, properties: IDL.Opt(IDL.Vec(property)), required: IDL.Opt(IDL.Vec(IDL.Text)) });
  const tool = IDL.Variant({ function: IDL.Record({ name: IDL.Text, description: IDL.Opt(IDL.Text), parameters: IDL.Opt(parameters) }) });
  const toolCallArg = IDL.Record({ name: IDL.Text, value: IDL.Text });
  const assistant = IDL.Record({ content: IDL.Opt(IDL.Text), tool_calls: IDL.Vec(IDL.Record({ id: IDL.Text, function: IDL.Record({ name: IDL.Text, arguments: IDL.Vec(toolCallArg) }) })) });
  const message = IDL.Variant({
    user: IDL.Record({ content: IDL.Text }),
    system: IDL.Record({ content: IDL.Text }),
    assistant,
    tool: IDL.Record({ content: IDL.Text, tool_call_id: IDL.Text })
  });
  const request4 = IDL.Record({ model: IDL.Text, messages: IDL.Vec(message), tools: IDL.Opt(IDL.Vec(tool)) });
  const response = IDL.Record({ message: assistant });
  return IDL.Service({ v1_chat: IDL.Func([request4], [response], []) });
};
function toolsToSchema(tools) {
  return tools.map((t) => ({
    function: {
      name: t.name,
      description: [t.description],
      parameters: [{
        "type": "object",
        properties: [t.params.map((p2) => ({ "type": p2.type, name: p2.name, description: [p2.description], "enum": p2.enum ? [p2.enum] : [] }))],
        required: [t.params.filter((p2) => p2.required).map((p2) => p2.name)]
      }]
    }
  }));
}
async function agentChatOnce(agent, messages, tools) {
  const actor = makeActor(chatIdl, AGENT_CANISTER, agent);
  const r2 = await actor.v1_chat({ model: AGENT_MODEL, messages, tools: tools.length ? [tools] : [] });
  return r2.message;
}
function normToChatMsg(m2) {
  if (m2.role === "system") return { system: { content: m2.content } };
  if (m2.role === "tool") return { tool: { content: m2.content, tool_call_id: m2.toolCallId ?? "" } };
  if (m2.role === "assistant") return { assistant: { content: m2.content ? [m2.content] : [], tool_calls: (m2.toolCalls ?? []).map((t) => ({ id: t.id, function: { name: t.name, arguments: Object.entries(t.args).map(([name, value]) => ({ name, value })) } })) } };
  return { user: { content: m2.content } };
}
function w36hmBrain(agent, tools) {
  const schema = toolsToSchema(tools);
  return async (messages) => {
    const r2 = await agentChatOnce(agent, messages.map(normToChatMsg), schema);
    return { content: r2.content[0] ?? "", toolCalls: r2.tool_calls.map((t) => ({ id: t.id, name: t.function.name, args: Object.fromEntries(t.function.arguments.map((a2) => [a2.name, a2.value])) })) };
  };
}

// src/core/providers.ts
var jsonProps = (t) => ({
  type: "object",
  properties: Object.fromEntries(t.params.map((p2) => [p2.name, { type: p2.type, description: p2.description, ...p2.enum ? { enum: p2.enum } : {} }])),
  required: t.params.filter((p2) => p2.required).map((p2) => p2.name)
});
var strArgs = (o) => Object.fromEntries(Object.entries(o ?? {}).map(([k2, v2]) => [k2, typeof v2 === "string" ? v2 : JSON.stringify(v2)]));
var DEFAULT_MODELS = { claude: "claude-opus-5-5", gpt: "gpt-4o-mini" };
function anthropicBrain(apiKey, model, tools) {
  const toolDefs = tools.map((t) => ({ name: t.name, description: t.description, input_schema: jsonProps(t) }));
  return async (messages) => {
    const system = messages.filter((m2) => m2.role === "system").map((m2) => m2.content).join("\n\n");
    const amsgs = [];
    for (const m2 of messages) {
      if (m2.role === "system") continue;
      if (m2.role === "user") amsgs.push({ role: "user", content: m2.content });
      else if (m2.role === "assistant") {
        const content2 = m2.raw ?? [
          ...m2.content ? [{ type: "text", text: m2.content }] : [],
          ...(m2.toolCalls ?? []).map((tc) => ({ type: "tool_use", id: tc.id, name: tc.name, input: tc.args }))
        ];
        amsgs.push({ role: "assistant", content: content2 });
      } else {
        const block = { type: "tool_result", tool_use_id: m2.toolCallId, content: m2.content };
        const last = amsgs[amsgs.length - 1];
        if (last && last.role === "user" && Array.isArray(last.content)) last.content.push(block);
        else amsgs.push({ role: "user", content: [block] });
      }
    }
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model, max_tokens: 2048, system, messages: amsgs, tools: toolDefs })
    });
    if (!res.ok) throw new Error(`Anthropic ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    const blocks = data.content ?? [];
    const content = blocks.filter((b2) => b2.type === "text").map((b2) => b2.text ?? "").join("");
    const toolCalls = blocks.filter((b2) => b2.type === "tool_use").map((b2) => ({ id: b2.id ?? "", name: b2.name ?? "", args: strArgs(b2.input ?? {}) }));
    return { content, toolCalls, raw: blocks };
  };
}
function openaiBrain(apiKey, model, tools) {
  const toolDefs = tools.map((t) => ({ type: "function", function: { name: t.name, description: t.description, parameters: jsonProps(t) } }));
  return async (messages) => {
    const omsgs = messages.map((m2) => {
      if (m2.role === "tool") return { role: "tool", tool_call_id: m2.toolCallId, content: m2.content };
      if (m2.role === "assistant") return { role: "assistant", content: m2.content || null, ...m2.toolCalls?.length ? { tool_calls: m2.toolCalls.map((tc) => ({ id: tc.id, type: "function", function: { name: tc.name, arguments: JSON.stringify(tc.args) } })) } : {} };
      return { role: m2.role, content: m2.content };
    });
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
      body: JSON.stringify({ model, messages: omsgs, tools: toolDefs, tool_choice: "auto" })
    });
    if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    const msg = data.choices?.[0]?.message ?? {};
    const toolCalls = (msg.tool_calls ?? []).map((tc) => {
      let a2 = {};
      try {
        a2 = JSON.parse(tc.function.arguments || "{}");
      } catch {
      }
      return { id: tc.id, name: tc.function.name, args: strArgs(a2) };
    });
    return { content: msg.content ?? "", toolCalls };
  };
}

// src/server/service.ts
import { randomBytes as randomBytes5, createHash, timingSafeEqual as timingSafeEqual2 } from "node:crypto";
import { networkInterfaces } from "node:os";

// src/core/sendGuard.ts
function outcomeFromResult(r2) {
  if ("ok" in r2) return { kind: "sent", id: r2.ok.toString() };
  const [tag, text] = Object.entries(r2.err)[0];
  if (tag === "RateLimited") return { kind: "rate_limited", message: text, waitMinutes: parseRateLimitedWait(text) };
  return { kind: "rejected", message: `${tag}: ${text}` };
}
function outcomeFromError(message, certainlyNotExecuted) {
  if (certainlyNotExecuted) {
    if (/rate|too many|wait/i.test(message)) return { kind: "rate_limited", message, waitMinutes: parseRateLimitedWait(message) };
    return { kind: "rejected", message };
  }
  return { kind: "uncertain", message };
}
function sameSet(a2, b2) {
  if (a2.length !== b2.length) return false;
  const s = new Set(a2);
  return b2.every((x2) => s.has(x2));
}
var CLOCK_SLACK_MS = 5 * 6e4;
function matchesPending(m2, p2) {
  const createdMs = Number(m2.created_at / 1000000n);
  return m2.subject === p2.draft.subject && m2.body === p2.draft.body && sameSet(m2.recipients.map((r2) => r2.toText()), p2.draft.recipients) && createdMs >= p2.startedAtMs - CLOCK_SLACK_MS && createdMs <= p2.startedAtMs + CLOCK_SLACK_MS;
}
function findPendingInSent(sent, p2) {
  return sent.find((m2) => matchesPending(m2, p2));
}

// src/server/settings.ts
var MAX_AUTO_LOCK_MINUTES = 1440;
var MAINNET_REGISTRY_ID = "3ssaf-2aaaa-aaaal-qxqvq-cai";
var DEFAULT_SETTINGS = {
  sneedNetwork: "staging",
  registryId: MAINNET_REGISTRY_ID,
  registryHost: IC_HOST,
  pollSeconds: 45
};
var MIN_POLL_SECONDS = 30;
var MAX_POLL_SECONDS = 600;
function envOverrides(env = process.env) {
  const o = {};
  if (env.CODE27_REGISTRY_ID) o.registryId = env.CODE27_REGISTRY_ID.trim();
  if (env.CODE27_REGISTRY_HOST) o.registryHost = env.CODE27_REGISTRY_HOST.trim();
  if (env.CODE27_SNEED_NETWORK === "staging" || env.CODE27_SNEED_NETWORK === "production")
    o.sneedNetwork = env.CODE27_SNEED_NETWORK;
  if (env.CODE27_II_DERIVATION_ORIGIN) o.iiDerivationOrigin = env.CODE27_II_DERIVATION_ORIGIN.trim();
  if (env.CODE27_LAN_TOOLS === "1" || env.CODE27_LAN_TOOLS === "0") o.lanTools = env.CODE27_LAN_TOOLS === "1";
  return o;
}
function effective(file, env) {
  return { ...DEFAULT_SETTINGS, ...file, ...env };
}
function sneedCanister(s) {
  return SNEED_SMS[s.sneedNetwork];
}
function validatePatch(patch) {
  const out = {};
  if ("sneedNetwork" in patch) {
    if (patch.sneedNetwork !== "staging" && patch.sneedNetwork !== "production") throw new Error("sneedNetwork must be staging or production");
    out.sneedNetwork = patch.sneedNetwork;
  }
  if ("registryId" in patch) {
    const v2 = patch.registryId;
    if (v2 === null || v2 === "") out.registryId = void 0;
    else if (typeof v2 === "string") {
      const p2 = Principal.fromText(v2.trim());
      if (p2.toText() !== v2.trim()) throw new Error("registryId is not a valid canister id");
      out.registryId = p2.toText();
    } else throw new Error("registryId must be text");
  }
  if ("registryHost" in patch) {
    const v2 = patch.registryHost;
    if (typeof v2 !== "string") throw new Error("registryHost must be text");
    const u2 = new URL(v2.trim());
    if (u2.protocol !== "https:" && !(u2.protocol === "http:" && (u2.hostname === "127.0.0.1" || u2.hostname === "localhost")))
      throw new Error("registryHost must be https, or http on 127.0.0.1/localhost");
    out.registryHost = u2.origin;
  }
  if ("pollSeconds" in patch) {
    const n = Number(patch.pollSeconds);
    if (!Number.isFinite(n) || n < MIN_POLL_SECONDS || n > MAX_POLL_SECONDS)
      throw new Error(`pollSeconds must be ${MIN_POLL_SECONDS}..${MAX_POLL_SECONDS}`);
    out.pollSeconds = Math.round(n);
  }
  if ("iiDerivationOrigin" in patch) {
    const v2 = patch.iiDerivationOrigin;
    if (v2 === null || v2 === "") out.iiDerivationOrigin = void 0;
    else if (typeof v2 === "string") {
      const u2 = new URL(v2.trim());
      if (u2.protocol !== "https:") throw new Error("iiDerivationOrigin must be an https origin");
      out.iiDerivationOrigin = u2.origin;
    } else throw new Error("iiDerivationOrigin must be text");
  }
  if ("lanTools" in patch) out.lanTools = !!patch.lanTools;
  if ("autoLockMinutes" in patch) {
    const v2 = patch.autoLockMinutes;
    if (v2 === null || v2 === "" || v2 === 0 || v2 === "0") out.autoLockMinutes = 0;
    else {
      const n = Number(v2);
      if (!Number.isFinite(n) || n < 1 || n > MAX_AUTO_LOCK_MINUTES) throw new Error(`autoLockMinutes must be 1..${MAX_AUTO_LOCK_MINUTES} (or 0 for off)`);
      out.autoLockMinutes = Math.round(n);
    }
  }
  if (patch.confirmProduction === true) out.confirmProduction = true;
  return out;
}

// src/server/service.ts
var DEFAULT_DEVICE = { mode: "mock" };
var MAX_QUEUE = 100;
var CHAT_READ_TOOLS = /* @__PURE__ */ new Set(["whoami", "balance", "read_messages", "list_proposals", "my_neurons", "registry_status", "find_codie", "contacts_list", "memory_list", "shop_shelf", "list_vendors", "orders"]);
var CHAT_WRITE_TOOLS = /* @__PURE__ */ new Set(["message_send", "wallet_send", "vote", "follow", "contact_add", "contact_remove", "memory_write", "memory_remove", "shop_buy", "add_token", "add_dao", "set_notify", "set_vendor", "hide_shop", "show_shop"]);
var CHAT_TOOLS = /* @__PURE__ */ new Set([...CHAT_READ_TOOLS, ...CHAT_WRITE_TOOLS]);
var LIMITS_TTL_MS = 5 * 6e4;
var NAME_TTL_MS = 10 * 6e4;
var MAX_BACKOFF_MS = 10 * 6e4;
var HelperService = class {
  constructor(dir2, log2, pairingDriver = pendingPairingDriver) {
    this.dir = dir2;
    this.log = log2;
    this.store = new IdentityStore(textFile(join2(dir2, "codies.json")));
    this.#pairingDriver = pairingDriver;
  }
  dir;
  log;
  store;
  #settingsDoc;
  #stateDoc;
  #devicesDoc;
  #deliveriesDoc;
  #wallet;
  #neurons;
  #voiceDoc;
  #voicePending = /* @__PURE__ */ new Map();
  #shop;
  #contacts;
  #memory;
  #notifyDoc;
  #toolTokensDoc;
  #toolPending = /* @__PURE__ */ new Map();
  // Paused agent-chat turns waiting on a user Confirm/Cancel for a write tool.
  #chatSessions = /* @__PURE__ */ new Map();
  #secretsDoc;
  #brainsDoc;
  // per-identity chat brain + autonomy + 'auto' policy
  #auditDoc;
  // what ran unattended in 'auto' mode
  #hooksDoc;
  // open-device "announce" webhook (HA Voice / ESP32 / Willow …)
  // Autonomous proposals awaiting the user's Approve/Dismiss (in-memory, per identity).
  #proposals = /* @__PURE__ */ new Map();
  #autoTurns = /* @__PURE__ */ new Map();
  // autonomy loop guard: turn timestamps per identity (rolling hour)
  #env = envOverrides();
  #devices = /* @__PURE__ */ new Map();
  #agents = /* @__PURE__ */ new Map();
  #limits = /* @__PURE__ */ new Map();
  #names = /* @__PURE__ */ new Map();
  #timers = /* @__PURE__ */ new Map();
  #backoff = /* @__PURE__ */ new Map();
  #polling = /* @__PURE__ */ new Set();
  #sending = /* @__PURE__ */ new Set();
  #stopped = false;
  #lastActivityMs = Date.now();
  // for auto-lock: reset on each helper request
  #autoLockTimer;
  #lanBound = false;
  // whether the HTTP server is actually bound to a non-loopback address
  #pairingDriver;
  async init() {
    await this.store.load();
    this.#settingsDoc = await JsonDoc.open(join2(this.dir, "settings.json"), {});
    this.#stateDoc = await JsonDoc.open(join2(this.dir, "state.json"), { version: 1, nets: {} });
    this.#devicesDoc = await JsonDoc.open(join2(this.dir, "devices.json"), { version: 1, devices: {} });
    this.#deliveriesDoc = await JsonDoc.open(join2(this.dir, "deliveries.json"), { version: 1, queues: {} });
    this.#wallet = await WalletService.open(join2(this.dir, "tokens.json"), join2(this.dir, "wallet.json"), this.#svcCtx());
    this.#neurons = await Governance.open(join2(this.dir, "neurons.json"), this.#svcCtx());
    this.#voiceDoc = await JsonDoc.open(join2(this.dir, "voice.json"), { version: 1, codies: {} });
    this.#shop = await ShopSurface.open(join2(this.dir, "shop.json"), this.#svcCtx());
    this.#contacts = await ContactBook.open(join2(this.dir, "contacts.json"), this.log);
    this.#memory = await MemoryBook.open(join2(this.dir, "memory.json"));
    this.#notifyDoc = await JsonDoc.open(join2(this.dir, "notify.json"), { version: 1, codies: {} });
    this.#toolTokensDoc = await JsonDoc.open(join2(this.dir, "tool-tokens.json"), { version: 1, codies: {} });
    this.#secretsDoc = await JsonDoc.open(join2(this.dir, "secrets.json"), {});
    this.#brainsDoc = await JsonDoc.open(join2(this.dir, "brains.json"), { version: 1, codies: {} });
    this.#auditDoc = await JsonDoc.open(join2(this.dir, "audit.json"), { version: 1, codies: {} });
    this.#hooksDoc = await JsonDoc.open(join2(this.dir, "device-hooks.json"), { version: 1, codies: {} });
    if (!this.store.locked) this.#startAll();
    this.#autoLockTimer = setInterval(() => this.#maybeAutoLock(), 3e4);
    this.#autoLockTimer.unref?.();
  }
  /** Reset the auto-lock idle clock — called on each helper request. */
  touch() {
    this.#lastActivityMs = Date.now();
  }
  #maybeAutoLock() {
    const mins = this.settings.autoLockMinutes ?? 0;
    if (!mins || this.store.locked || !this.store.encrypted) return;
    if (Date.now() - this.#lastActivityMs < mins * 6e4) return;
    void this.lockKeys("auto-locked after inactivity");
  }
  /** Re-lock the key file: stop pollers and drop decrypted keys. Needs a passphrase to reopen. */
  async lockKeys(why = "locked") {
    if (!this.store.encrypted) throw new HttpError(409, "Set a passphrase before locking.");
    if (this.store.locked) return { ok: true };
    for (const t of this.#timers.values()) clearTimeout(t);
    this.#timers.clear();
    this.#polling.clear();
    await this.store.lock();
    this.log.info(`key file ${why}`);
    return { ok: true };
  }
  /** Build devices and start pollers (after load, or after unlock/import). */
  #startAll() {
    for (const c2 of this.store.list()) this.#device(c2);
    this.#restartPollers();
  }
  get locked() {
    return this.store.locked;
  }
  // ---------- key protection ----------
  async unlock(passphrase) {
    if (!this.store.locked) return;
    await this.store.unlock(passphrase);
    this.#startAll();
    this.log.info("key file unlocked");
  }
  async setPassphrase(passphrase) {
    if (typeof passphrase !== "string" || passphrase.length < 8) throw new HttpError(400, "Passphrase must be at least 8 characters");
    await this.store.setPassphrase(passphrase);
    this.log.info("key file encryption enabled/updated");
  }
  async removePassphrase() {
    await this.store.removePassphrase();
    this.log.warn("key file encryption disabled (keys now stored in plain text)");
  }
  async exportBackup(passphrase) {
    if (typeof passphrase !== "string" || passphrase.length < 8) throw new HttpError(400, "Backup passphrase must be at least 8 characters");
    return this.store.exportBackup(passphrase);
  }
  async importBackup(blob, passphrase) {
    const r2 = await this.store.importBackup(blob, passphrase);
    if (r2.added > 0) this.#restartPollers(), this.store.list().forEach((c2) => this.#device(c2));
    this.log.info(`imported backup: ${r2.added} added, ${r2.skipped} already present`);
    return r2;
  }
  stop() {
    this.#stopped = true;
    for (const t of this.#timers.values()) clearTimeout(t);
    this.#timers.clear();
    if (this.#autoLockTimer) clearInterval(this.#autoLockTimer);
  }
  get settings() {
    return effective(this.#settingsDoc.value, this.#env);
  }
  get lockedSettings() {
    return Object.keys(this.#env);
  }
  /** main.ts tells us whether the listener actually bound a non-loopback address. */
  setLanBound(v2) {
    this.#lanBound = v2;
  }
  /** This machine's non-internal IPv4 addresses, for the "reach me on the LAN" hint. */
  #lanAddresses() {
    const out = [];
    for (const ifaces of Object.values(networkInterfaces())) {
      for (const i of ifaces ?? []) if (i.family === "IPv4" && !i.internal) out.push(i.address);
    }
    return out;
  }
  // ---------- devices ----------
  deviceConfig(id) {
    return this.#devicesDoc?.value.devices[id] ?? DEFAULT_DEVICE;
  }
  /** Build (or rebuild) the device for a Codie from its saved config. */
  #device(c2) {
    const existing = this.#devices.get(c2.id);
    const wantLan = this.deviceConfig(c2.id).mode === "lan";
    const isLan = existing instanceof LanCodie;
    if (existing && wantLan === isLan) return existing;
    const d2 = this.#buildDevice(c2);
    this.#devices.set(c2.id, d2);
    return d2;
  }
  #buildDevice(c2) {
    const cfg = this.deviceConfig(c2.id);
    if (cfg.mode === "lan") {
      const lanCfg = { baseUrl: cfg.baseUrl ?? "", sybran: cfg.sybran, reminder: cfg.reminder };
      return new LanCodie(c2.label, lanCfg, fetch, (l2) => this.log.info(l2), signerByName(cfg.signer));
    }
    const d2 = new MockCodie(c2.label, { log: (l2) => this.log.info(l2) });
    d2.onUtterance((text) => this.log.info(`[MockCodie ${c2.label}] heard: ${text}`));
    return d2;
  }
  speech(id) {
    return this.#devices.get(id)?.speech() ?? [];
  }
  async setDevice(id, patch) {
    const c2 = this.#codie(id);
    const next = this.#validateDevice({ ...this.deviceConfig(id), ...patch });
    await this.#devicesDoc.update((doc) => void (doc.devices[id] = next));
    this.#devices.delete(id);
    this.#device(c2);
    this.log.info(`device for "${c2.label}": mode=${next.mode}${next.baseUrl ? ` base=${next.baseUrl}` : ""}${next.reminder ? " reminder=set" : ""}`);
    return next;
  }
  #validateDevice(d2) {
    if (d2.mode !== "mock" && d2.mode !== "lan") throw new HttpError(400, "mode must be mock or lan");
    const out = { mode: d2.mode };
    if (d2.signer !== void 0) {
      if (d2.signer !== "none" && d2.signer !== "code27-local") throw new HttpError(400, "signer must be none or code27-local");
      out.signer = d2.signer;
    }
    if (d2.sybran) {
      const sb = d2.sybran;
      if (typeof sb.timezone !== "string" || !sb.timezone.trim()) throw new HttpError(400, "sybran.timezone is required");
      try {
        new Intl.DateTimeFormat("en-US", { timeZone: sb.timezone });
      } catch {
        throw new HttpError(400, `Unknown timezone "${sb.timezone}"`);
      }
      out.sybran = {
        timezone: sb.timezone,
        ringtone: typeof sb.ringtone === "string" && sb.ringtone ? sb.ringtone : void 0,
        leadSeconds: Number.isFinite(sb.leadSeconds) ? Math.max(5, Math.min(600, Number(sb.leadSeconds))) : 30,
        path: typeof sb.path === "string" && sb.path.startsWith("/") ? sb.path : void 0
      };
    }
    if (d2.baseUrl) {
      const u2 = new URL(d2.baseUrl);
      if (u2.protocol !== "http:" && u2.protocol !== "https:") throw new HttpError(400, "baseUrl must be http(s)");
      out.baseUrl = u2.origin;
    }
    if (d2.reminder) {
      const r2 = d2.reminder;
      if (typeof r2.endpoint !== "string" || !/^https?:\/\//.test(r2.endpoint)) throw new HttpError(400, "reminder.endpoint must be an http(s) URL");
      if (typeof r2.bodyTemplate !== "string" || !r2.bodyTemplate.trim()) throw new HttpError(400, "reminder.bodyTemplate is required");
      out.reminder = {
        endpoint: r2.endpoint,
        method: r2.method ?? "POST",
        headers: r2.headers && typeof r2.headers === "object" ? r2.headers : {},
        bodyTemplate: r2.bodyTemplate,
        leadSeconds: Number.isFinite(r2.leadSeconds) ? Math.max(5, Math.min(600, Number(r2.leadSeconds))) : 30
      };
    }
    if (out.mode === "lan" && !out.baseUrl && out.reminder) out.baseUrl = new URL(out.reminder.endpoint).origin;
    return out;
  }
  /** Reachability / readiness probe for a Codie's device. */
  async testDevice(id) {
    const c2 = this.#codie(id);
    return this.#device(c2).status();
  }
  // ---------- pairing ----------
  /** Pair a Codie to its device with the 6-digit code; stores the session (encrypted). */
  async pairDevice(id, code) {
    const c2 = this.#codie(id);
    const cfg = this.deviceConfig(id);
    if (cfg.mode !== "lan") throw new HttpError(400, "Switch the Codie to Real before pairing.");
    const baseUrl = cfg.baseUrl;
    if (!baseUrl) throw new HttpError(400, "Set the device address first.");
    if (!/^\d{6}$/.test(code.trim())) throw new HttpError(400, "The pairing code is 6 digits.");
    const driver = this.#pairingDriver;
    const session = await driver.pair({ baseUrl, code: code.trim() });
    await this.store.setSession(id, session);
    this.log.info(`paired "${c2.label}" to ${baseUrl} (session ${session.sessionId})`);
    return sessionMeta(session);
  }
  async unpairDevice(id) {
    this.#codie(id);
    await this.store.clearSession(id);
    this.log.info(`unpaired device session for ${id}`);
  }
  // ---------- delivery queue (robust: never lose a message if the device is off) ----------
  #queue(id) {
    return this.#deliveriesDoc?.value.queues[id] ?? [];
  }
  async #enqueueDelivery(id, key, title, body) {
    await this.#deliveriesDoc.update((d2) => {
      const q2 = d2.queues[id] ??= [];
      if (q2.some((j2) => j2.key === key)) return;
      q2.push({ key, title, body, enqueuedAtMs: Date.now(), attempts: 0 });
      if (q2.length > MAX_QUEUE) q2.splice(0, q2.length - MAX_QUEUE);
    });
  }
  /** Try to speak queued messages, oldest first. One failure pauses the rest (device down). */
  async #processDeliveries(id) {
    const c2 = this.store.get(id);
    if (!c2 || !this.#queue(id).length) return;
    const dev = this.#device(c2);
    for (const job of [...this.#queue(id)]) {
      try {
        await dev.announce(job.title, job.body);
        await this.#deliveriesDoc.update((d2) => {
          const q2 = d2.queues[id];
          if (q2) d2.queues[id] = q2.filter((j2) => j2.key !== job.key);
        });
        this.log.info(`delivered to "${c2.label}": ${job.title}`);
      } catch (e) {
        await this.#deliveriesDoc.update((d2) => {
          const j2 = d2.queues[id]?.find((x2) => x2.key === job.key);
          if (j2) {
            j2.attempts++;
            j2.lastAttemptMs = Date.now();
            j2.lastError = errorText(e);
          }
        });
        return;
      }
    }
  }
  /** User-triggered: retry the queue now. */
  async retryDeliveries(id) {
    this.#codie(id);
    await this.#processDeliveries(id);
    return { pending: this.#queue(id).length };
  }
  async clearDeliveries(id) {
    this.#codie(id);
    await this.#deliveriesDoc.update((d2) => {
      delete d2.queues[id];
    });
  }
  // ---------- notifications (one level per Codie, both channels) ----------
  notifyLevel(id) {
    return this.#notifyDoc?.value.codies[id]?.level ?? DEFAULT_NOTIFY;
  }
  async setNotify(id, level) {
    this.#codie(id);
    await this.#notifyDoc.update((d2) => {
      d2.codies[id] = { level };
    });
    return level;
  }
  /** Enqueue a spoken alert at this Codie's level. The desktop channel is the UI's,
   *  reading the same level from the snapshot. `off` stays quiet on both. */
  async #notify(id, key, a2) {
    const { speak } = renderAlert(this.notifyLevel(id), a2);
    if (speak) await this.#enqueueDelivery(id, key, speak.title, speak.body);
  }
  async hear(id, text) {
    const c2 = this.#codie(id);
    const d2 = this.#device(c2);
    if (this.voiceConfig(id).enabled) {
      const reply = await this.handleUtterance(id, text);
      await d2.speak(reply);
      return;
    }
    if (d2 instanceof MockCodie) {
      d2.hear(text);
      await d2.speak(`(mock) I heard: ${text}`);
    } else {
      await d2.speak(text);
    }
  }
  // ---------- voice loop (talk to the Codie; it uses the helper) ----------
  voiceConfig(id) {
    return this.#voiceDoc?.value.codies[id] ?? { enabled: false, autoConfirm: false };
  }
  async setVoiceConfig(id, patch) {
    this.#codie(id);
    const next = { ...this.voiceConfig(id), ...patch };
    await this.#voiceDoc.update((d2) => {
      d2.codies[id] = next;
    });
    return next;
  }
  /** The brain of the voice loop: utterance -> action -> spoken reply. Never throws. */
  async handleUtterance(id, text) {
    try {
      const intent = parseIntent(text);
      if (intent.kind === "cancel") {
        this.#voicePending.delete(id);
        return "Okay, cancelled.";
      }
      if (intent.kind === "confirm") {
        const pending = this.#voicePending.get(id);
        this.#voicePending.delete(id);
        if (!pending) return "There was nothing to confirm.";
        return await this.#runIntent(id, pending);
      }
      if (isWriteIntent(intent) && !this.voiceConfig(id).autoConfirm) {
        this.#voicePending.set(id, intent);
        return `${this.#describeIntent(intent)} \u2014 say "yes" to confirm, or "no" to cancel.`;
      }
      this.#voicePending.delete(id);
      return await this.#runIntent(id, intent);
    } catch (e) {
      return `Sorry, that didn't work: ${errorText(e)}`;
    }
  }
  #describeIntent(i) {
    if (i.kind === "send_message") return `I'll message ${i.to}: "${i.text}"`;
    if (i.kind === "send_token") return `I'll send ${i.amount} ${i.token} to ${i.to}`;
    if (i.kind === "vote") return `I'll vote ${i.vote} on proposal ${i.proposalId}${i.dao ? ` in ${i.dao}` : ""}`;
    if (i.kind === "add_contact") return `I'll save ${i.name} as a contact (${i.principal})`;
    if (i.kind === "remove_contact") return `I'll remove the contact ${i.name}`;
    if (i.kind === "register") return `I'll register this Codie as ${i.name}`;
    if (i.kind === "add_token") return `I'll add the token ${i.canister}`;
    if (i.kind === "add_dao") return `I'll add the DAO ${i.gov}`;
    if (i.kind === "forget_orders") return `I'll forget this device's shop order history`;
    return "I will do that";
  }
  async #runIntent(id, i) {
    const mapped = this.#intentToTool(i);
    if (!mapped) return `I didn't understand that. ${HELP_TEXT}`;
    return (await this.#execTool(id, mapped.name, mapped.args)).speech;
  }
  /** Map a parsed voice Intent onto a tool name + args, so the voice loop and the
   *  Codie Tool API run the SAME executor (#execTool). */
  #intentToTool(i) {
    switch (i.kind) {
      case "help":
        return { name: "help", args: {} };
      case "whoami":
        return { name: "whoami", args: {} };
      case "balance":
        return { name: "balance", args: {} };
      case "list_proposals":
        return { name: "list_proposals", args: { dao: i.dao } };
      case "send_message":
        return { name: "message_send", args: { to: i.to, text: i.text } };
      case "send_token":
        return { name: "wallet_send", args: { to: i.to, amount: i.amount, token: i.token } };
      case "vote":
        return { name: "vote", args: { proposalId: i.proposalId, vote: i.vote, dao: i.dao } };
      case "shop":
        return { name: "shop_shelf", args: {} };
      case "buy":
        return { name: "shop_buy", args: { item: i.item } };
      case "orders":
        return { name: "orders", args: {} };
      case "set_notify":
        return { name: "set_notify", args: { level: i.level } };
      case "add_contact":
        return { name: "contact_add", args: { name: i.name, principal: i.principal } };
      case "remove_contact":
        return { name: "contact_remove", args: { name: i.name } };
      case "list_contacts":
        return { name: "contacts_list", args: {} };
      case "read_messages":
        return { name: "read_messages", args: { count: i.count } };
      case "add_token":
        return { name: "add_token", args: { canister: i.canister } };
      case "add_dao":
        return { name: "add_dao", args: { gov: i.gov } };
      case "register":
        return { name: "register", args: { name: i.name } };
      case "registry_status":
        return { name: "registry_status", args: {} };
      case "my_neurons":
        return { name: "my_neurons", args: {} };
      case "hide_shop":
        return { name: "hide_shop", args: {} };
      case "show_shop":
        return { name: "show_shop", args: {} };
      case "forget_orders":
        return { name: "forget_orders", args: {} };
      default:
        return void 0;
    }
  }
  /** The single executor behind BOTH the voice loop and the Codie Tool API. Runs the
   *  action and returns the spoken-friendly result. Confirmation lives above this
   *  (handleUtterance's #voicePending for voice; invokeTool's confirmToken for the API). */
  async #execTool(id, name, args2) {
    const s = (k2) => String(args2[k2] ?? "");
    switch (name) {
      case "help":
        return { speech: HELP_TEXT };
      case "whoami": {
        const c2 = this.#codie(id);
        return { speech: `I'm ${c2.label}${c2.registryName ? `, known as ${c2.registryName}` : ""}. My principal is ${c2.principal}.`, data: { principal: c2.principal, label: c2.label, registryName: c2.registryName } };
      }
      case "balance": {
        const w2 = await this.walletBalances(id);
        const nonzero = w2.tokens.filter((t) => t.formatted && t.formatted !== "0");
        return { speech: nonzero.length ? "You have " + nonzero.map((t) => `${t.formatted} ${t.symbol}`).join(", ") + "." : "Your wallet is empty.", data: w2.tokens };
      }
      case "list_proposals":
        return { speech: await this.#neurons.proposalsSpeech(id, args2.dao ? s("dao") : void 0) };
      case "message_send": {
        const r2 = await this.send(id, { to: s("to"), subject: "Message", body: s("text") });
        if (r2.kind === "sent") return { speech: `Sent your message to ${s("to")}.` };
        if (r2.kind === "rate_limited") return { speech: `I can't send yet \u2014 ${r2.message}.` };
        return { speech: `I couldn't send that: ${r2.message ?? r2.kind}.` };
      }
      case "wallet_send": {
        const r2 = await this.sendToken(id, { ledger: this.#ledgerForSymbol(s("token")), to: await this.#resolveOne(s("to")), amount: s("amount") });
        return { speech: `Sent ${r2.amount} ${r2.symbol}. Transaction ${r2.blockIndex}.`, data: { blockIndex: r2.blockIndex } };
      }
      case "vote": {
        const dao = args2.dao ? s("dao") : void 0;
        const found = await this.#neurons.findNeuronFor(id, dao);
        if (!found) return { speech: dao ? `You don't have a neuron in ${dao}.` : `You don't have a neuron I can vote with.` };
        const vote = s("vote").toLowerCase() === "no" ? "no" : "yes";
        await this.#neurons.vote(id, { scope: found.scope, gov: found.gov, neuronId: found.neuronId, proposalId: s("proposalId"), vote });
        return { speech: `Voted ${vote} on proposal ${s("proposalId")}.` };
      }
      case "shop_shelf": {
        const shelf = await this.shopShelf();
        const items = shelf.stores.flatMap((st2) => st2.products.map((p2) => {
          const v2 = defaultVariant(p2);
          return `${p2.title}${v2 ? ` (${formatMoney(v2.price, v2.currency)})` : ""}`;
        }));
        return { speech: items.length ? `On the shelf: ${items.slice(0, 6).join(", ")}. Say "buy" and a name to order.` : "The shelf is empty right now." };
      }
      case "shop_buy": {
        const item = s("item");
        const shelf = await this.shopShelf();
        const found = findShelfProduct(shelf, item);
        const variant = found && defaultVariant(found.product);
        if (!found || !variant) return { speech: `I couldn't find "${item}" on the shelf.` };
        let co = await this.shopCheckout(found.store, [{ variant_id: variant.id, quantity: 1 }]);
        for (let t = 0; t < 6 && co.status === "incomplete"; t++) {
          await sleep2(1200);
          co = await this.shopGetCheckout(co.id);
        }
        if (co.status !== "ready_for_complete") return { speech: `The ${found.product.title} is being priced \u2014 ask again in a moment.` };
        const { handoff } = await this.shopHandoff(co.id);
        const price = checkoutTotalText(co) ?? "the listed price";
        return { speech: `The ${found.product.title} is ${price} at ${co.store.name}. You pay on your phone \u2014 go to ${handoff.entryUrl} and enter ${spellCode(handoff.code)}.`, data: { code: handoff.code, entryUrl: handoff.entryUrl } };
      }
      case "orders": {
        const orders = await this.shopOrders();
        return { speech: orders.length ? "Your orders: " + orders.slice(0, 3).map((o) => `${o.store.name} \u2014 ${o.status.replace(/_/g, " ")}`).join("; ") + "." : "You have no orders yet." };
      }
      case "set_notify": {
        const level = parseNotifyLevel(s("level"));
        if (!level) return { speech: "Say off, chime, or full." };
        await this.setNotify(id, level);
        return { speech: level === "off" ? "I'll stay quiet." : level === "chime" ? "I'll just chime for new things." : "I'll speak your notifications in full." };
      }
      case "contact_add": {
        const ct2 = await this.addContact({ principal: s("principal"), label: s("name") });
        return { speech: `Saved ${ct2.label} as a contact.` };
      }
      case "contact_remove": {
        const ct2 = this.#contacts.byLabel(s("name"));
        if (!ct2) return { speech: `I don't have a contact named ${s("name")}.` };
        await this.removeContact(ct2.principal);
        return { speech: `Removed the contact ${ct2.label}.` };
      }
      case "contacts_list": {
        const cs = this.contacts();
        return { speech: cs.length ? "Your contacts: " + cs.slice(0, 10).map((x2) => x2.label).join(", ") + "." : "You have no contacts yet.", data: cs };
      }
      case "memory_list": {
        const notes = this.#memory.list(id);
        return { speech: notes.length ? "I remember: " + notes.map((n) => n.text).join("; ") + "." : "I don't have any notes yet.", data: notes };
      }
      case "memory_write": {
        const n = await this.#memory.write(id, s("text"));
        return { speech: "Noted.", data: { id: n.id } };
      }
      case "memory_remove": {
        await this.#memory.remove(id, s("id"));
        return { speech: "Forgotten." };
      }
      case "read_messages": {
        const { messages } = await this.messages(id, "received");
        const count = typeof args2.count === "number" && Number.isFinite(args2.count) ? Math.min(Math.max(args2.count, 1), 10) : 3;
        const recent = messages.slice(0, count);
        return { speech: recent.length ? recent.map((m2) => `From ${m2.senderLabel}: ${m2.subject}. ${m2.body}`).join(" \u2014 ") : "Your inbox is empty." };
      }
      case "add_token": {
        const t = await this.addToken(s("canister"));
        return { speech: `Added ${t.symbol} to your wallet.` };
      }
      case "add_dao": {
        const d2 = await this.addSnsDao(s("gov"));
        return { speech: `Added the ${d2.name} DAO.` };
      }
      case "register": {
        const prof = await this.register(id, s("name"));
        return { speech: `Registered as ${prof.name}.` };
      }
      case "registry_status": {
        const prof = await this.registryProfile(id);
        return { speech: prof ? `You're registered as ${prof.name}.` : `You're not registered yet. Say "register me as" and a name.` };
      }
      case "my_neurons": {
        const r2 = await this.listNeurons(id);
        const sns = r2.sns.reduce((a2, g3) => a2 + g3.neurons.length, 0);
        return { speech: !r2.nns.length && !sns ? "You don't have any neurons I can see." : `You have ${r2.nns.length} NNS neuron${r2.nns.length === 1 ? "" : "s"} and ${sns} SNS neuron${sns === 1 ? "" : "s"}.` };
      }
      case "find_codie": {
        const prof = await this.directoryFind(s("name"));
        return prof ? { speech: `${prof.name} is ${prof.owner ? "a claimed Codie" : "registered but unclaimed"}. Its principal is ${prof.id}.`, data: prof } : { speech: `I couldn't find a Codie named ${s("name")}.` };
      }
      case "list_vendors": {
        const vendors = await this.shopVendors(id);
        return { speech: vendors.length ? `Vendors: ${vendors.map((v2) => `${v2.name}${v2.active && v2.hasConnector && v2.codieAllowed ? "" : " (off)"}`).join(", ")}.` : "No IWEP vendors are listed yet.", data: vendors };
      }
      case "set_vendor": {
        const on = /^(on|true|yes|active|1)$/i.test(s("active").trim());
        await this.setShopVendorActive(id, s("vendor"), on);
        return { speech: `Turned ${s("vendor")} ${on ? "on" : "off"} for shopping.` };
      }
      case "follow": {
        const dao = args2.dao ? s("dao") : void 0;
        const found = await this.#neurons.findNeuronFor(id, dao);
        if (!found) return { speech: dao ? `You don't have a neuron in ${dao}.` : `You don't have a neuron I can set following on.` };
        const topic = typeof args2.topic === "number" && Number.isFinite(args2.topic) ? args2.topic : 0;
        await this.followNeuron(id, { scope: found.scope, gov: found.gov, neuronId: found.neuronId, followee: s("followee"), topic });
        return { speech: s("followee").trim() ? `Now following ${s("followee")}.` : "Stopped following." };
      }
      case "hide_shop": {
        await this.setShopConfig({ hidden: true });
        return { speech: "The shop is hidden." };
      }
      case "show_shop": {
        await this.setShopConfig({ hidden: false });
        return { speech: "The shop is visible again." };
      }
      case "forget_orders": {
        await this.forgetBuyer();
        return { speech: "I forgot this device's shop order history." };
      }
      default:
        throw new HttpError(400, `Unknown tool "${name}".`);
    }
  }
  // ---------- Codie Tool API (an LLM/device can invoke helper actions) ----------
  toolManifest() {
    return { tools: CODIE_TOOLS, ollama: toOllamaTools() };
  }
  /** Describe a pending write for the spoken confirmation prompt. */
  #describeTool(name, a2) {
    const s = (k2) => String(a2[k2] ?? "");
    switch (name) {
      case "wallet_send":
        return `send ${s("amount")} ${s("token")} to ${s("to")}`;
      case "message_send":
        return `message ${s("to")}: "${s("text")}"`;
      case "vote":
        return `vote ${s("vote")} on proposal ${s("proposalId")}`;
      case "follow":
        return s("followee").trim() ? `set your neuron to follow ${s("followee")}${a2.dao ? ` in ${s("dao")}` : ""}` : "stop following";
      case "shop_buy":
        return `start buying ${s("item")}`;
      case "contact_add":
        return `save ${s("name")} as a contact`;
      case "contact_remove":
        return `remove the contact ${s("name")}`;
      case "register":
        return `register this Codie as ${s("name")}`;
      case "add_token":
        return `add the token ${s("canister")}`;
      case "add_dao":
        return `add the DAO ${s("gov")}`;
      case "forget_orders":
        return `forget this device's shop order history`;
      default:
        return `run ${name}`;
    }
  }
  #newConfirmToken() {
    const now = Date.now();
    for (const [k2, v2] of this.#toolPending) if (now - v2.atMs > 3e5) this.#toolPending.delete(k2);
    while (this.#toolPending.size >= 64) this.#toolPending.delete(this.#toolPending.keys().next().value);
    return randomBytes5(9).toString("base64url");
  }
  // Per-Codie sliding-window rate limit for the Codie Tool API (the LAN/agent caller).
  #toolCalls = /* @__PURE__ */ new Map();
  /** Record a tool call; throws 429 past TOOL_CALLS_PER_MIN in the last minute. */
  noteToolCall(codieId) {
    const now = Date.now();
    const hits = (this.#toolCalls.get(codieId) ?? []).filter((t) => now - t < 6e4);
    if (hits.length >= 60) throw new HttpError(429, "Too many tool calls \u2014 slow down.");
    hits.push(now);
    this.#toolCalls.set(codieId, hits);
  }
  /** Execute a named tool for a Codie. Writes return needsConfirm + a token first; the
   *  caller re-invokes with that confirmToken to actually run it. */
  async invokeTool(codieId, name, args2, opts) {
    this.#codie(codieId);
    const tool = toolByName(name);
    if (!tool) throw new HttpError(400, `Unknown tool "${name}".`);
    if (opts?.confirmToken && tool.write) {
      const pending = this.#toolPending.get(opts.confirmToken);
      this.#toolPending.delete(opts.confirmToken);
      if (!pending || pending.codieId !== codieId || pending.name !== name || Date.now() - pending.atMs > 3e5) {
        return { speech: "That confirmation has expired \u2014 ask again." };
      }
      return this.#execTool(codieId, name, pending.args);
    }
    const v2 = validateArgs(tool, args2);
    if (!v2.ok) throw new HttpError(400, v2.error);
    if (tool.write) {
      const token2 = this.#newConfirmToken();
      this.#toolPending.set(token2, { codieId, name, args: v2.value, atMs: Date.now() });
      return { speech: `You want me to ${this.#describeTool(name, v2.value)} \u2014 confirm?`, needsConfirm: true, confirmToken: token2 };
    }
    return this.#execTool(codieId, name, v2.value);
  }
  // ---------- Codie Tool API tokens (bearer auth for the device/LLM caller) ----------
  #hashToken(raw) {
    return createHash("sha256").update(raw).digest("hex");
  }
  hasToolToken(id) {
    return !!this.#toolTokensDoc?.value.codies[id];
  }
  async grantToolToken(id) {
    this.#codie(id);
    const raw = randomBytes5(32).toString("base64url");
    const hash = this.#hashToken(raw);
    await this.#toolTokensDoc.update((d2) => {
      d2.codies[id] = { hash, createdAtMs: Date.now() };
    });
    this.log.info(`granted a Codie Tool API token for ${id}`);
    return { token: raw };
  }
  async revokeToolToken(id) {
    await this.#toolTokensDoc.update((d2) => {
      delete d2.codies[id];
    });
  }
  /** Which Codie a bearer token authorises, or undefined. Constant-time per candidate. */
  verifyToolToken(raw) {
    if (!raw) return void 0;
    const h2 = Buffer.from(this.#hashToken(raw));
    for (const [id, rec] of Object.entries(this.#toolTokensDoc?.value.codies ?? {})) {
      const b2 = Buffer.from(rec.hash);
      if (h2.length === b2.length && timingSafeEqual2(h2, b2)) return id;
    }
    return void 0;
  }
  // ---------- MCP bridge (an external AI client drives this identity's tools) ----------
  mcpWritesAllowed(id) {
    return !!this.#toolTokensDoc?.value.codies[id]?.mcpWrites;
  }
  async setMcpWrites(id, allowed) {
    await this.#toolTokensDoc.update((d2) => {
      if (d2.codies[id]) d2.codies[id].mcpWrites = allowed;
    });
  }
  /** The tools an MCP client may list — reads always; writes only when this connection allows them. */
  mcpTools(writesAllowed) {
    return CODIE_TOOLS.filter((t) => CHAT_TOOLS.has(t.name) && (writesAllowed || !t.write)).map((t) => ({
      name: t.name,
      description: t.description + (t.write ? " (write \u2014 runs immediately on this write-enabled connection)" : ""),
      inputSchema: {
        type: "object",
        properties: Object.fromEntries(t.params.map((p2) => [p2.name, { type: p2.type, description: p2.description, ...p2.enum ? { enum: p2.enum } : {} }])),
        required: t.params.filter((p2) => p2.required).map((p2) => p2.name)
      }
    }));
  }
  /** Run one tool for an MCP client. Reads always; writes only when the connection is write-enabled
   *  (the user made that trust decision when granting the token). */
  async mcpInvoke(id, name, args2, writesAllowed) {
    const spec = toolByName(name);
    if (!spec || !CHAT_TOOLS.has(name)) return { text: `"${name}" is not an available tool.`, isError: true };
    if (spec.write && !writesAllowed) return { text: `"${name}" changes state, but this MCP connection is read-only. Enable writes for it in the Waifu AI app.`, isError: true };
    const v2 = validateArgs(spec, args2);
    if (!v2.ok) return { text: v2.error, isError: true };
    try {
      const r2 = await this.#execTool(id, name, v2.value);
      return { text: r2.speech + (r2.data ? `
${JSON.stringify(r2.data)}` : "") };
    } catch (e) {
      return { text: errorText(e), isError: true };
    }
  }
  #ledgerForSymbol(symbol) {
    return this.#wallet.ledgerForSymbol(symbol);
  }
  /** Resolve a spoken recipient (a registry name or a principal) to a principal string. */
  async #resolveOne(to) {
    const { principals } = await this.resolveRecipients(to);
    if (!principals[0]) throw new HttpError(400, `I couldn't find ${to}.`);
    return principals[0].toText();
  }
  /** The slice of this service that feature collaborators (governance, shop, wallet) get. */
  #svcCtx() {
    return {
      log: this.log,
      codie: (id) => this.#codie(id),
      agentFor: (id, host) => this.#agentFor(id, host),
      notify: (id, key, alert) => this.#notify(id, key, alert),
      resolve: async (to) => (await this.resolveRecipients(to)).principals
    };
  }
  // ---------- agents / clients ----------
  #agentFor(id, host) {
    const key = `${id}@${host}`;
    let a2 = this.#agents.get(key);
    if (!a2) {
      const ident = this.store.identity(id);
      if (!ident) throw new HttpError(404, "No such Codie");
      a2 = makeAgent(host, ident);
      a2.catch(() => this.#agents.delete(key));
      this.#agents.set(key, a2);
    }
    return a2;
  }
  async #sneed(id) {
    return new SneedSmsClient(sneedCanister(this.settings), await this.#agentFor(id, IC_HOST));
  }
  #anonRegistry;
  async #registryAnon() {
    const s = this.settings;
    if (!s.registryId) throw new HttpError(409, "Registry not configured");
    const key = `${s.registryId}@${s.registryHost}`;
    if (this.#anonRegistry?.key !== key) {
      const regId = s.registryId;
      const client = makeAgent(s.registryHost).then((a2) => new RegistryClient(regId, a2));
      client.catch(() => this.#anonRegistry = void 0);
      this.#anonRegistry = { key, client };
    }
    return this.#anonRegistry.client;
  }
  async #registryAs(id) {
    const s = this.settings;
    if (!s.registryId) throw new HttpError(409, "Registry not configured");
    return new RegistryClient(s.registryId, await this.#agentFor(id, s.registryHost));
  }
  // ---------- directory (the registry phonebook) ----------
  /** One page of registered Codies, read anonymously (a free query). */
  async directory(start = 0, limit = 50) {
    const r2 = await (await this.#registryAnon()).listCodies(start, Math.min(Math.max(1, limit), 100));
    return { items: r2.items.map(profileView), total: r2.total };
  }
  /** Look up one Codie by its exact registry name. */
  async directoryFind(name) {
    const p2 = await (await this.#registryAnon()).findByName(name.trim());
    return p2 ? profileView(p2) : void 0;
  }
  // ---------- memory ----------
  memoryNotes(id) {
    this.#codie(id);
    return this.#memory.list(id);
  }
  memoryWrite(id, text) {
    this.#codie(id);
    return this.#memory.write(id, text);
  }
  memoryRemove(id, noteId) {
    this.#codie(id);
    return this.#memory.remove(id, noteId);
  }
  // ---------- on-chain LLM chat ----------
  personaList() {
    return PERSONAS;
  }
  /** Persona chat: talk to a waifu.ic0.ai llama.cpp model as this Codie. */
  async chatPersona(codieId, personaKey, text) {
    this.#codie(codieId);
    const p2 = personaByKey(personaKey);
    if (!p2) throw new HttpError(400, "Unknown persona.");
    if (!text.trim()) throw new HttpError(400, "Say something first.");
    const agent = await this.#agentFor(codieId, IC_HOST);
    try {
      return { reply: await personaReply(agent, p2, text.trim()) };
    } catch (e) {
      throw new HttpError(502, `Chat failed: ${errorText(e)}`);
    }
  }
  /** The identity's chosen chat brain (persisted per identity; default the on-chain agent). */
  identityBrain(id) {
    return this.#brainsDoc?.value.codies[id]?.brain || "agent";
  }
  async setIdentityBrain(id, brain) {
    this.#codie(id);
    await this.#brainsDoc.update((d2) => {
      (d2.codies[id] ??= {}).brain = brain.trim() || "agent";
    });
  }
  // ---------- autonomy ('off' | 'propose' = suggest, user confirms | 'auto' = run allowlisted within caps) ----------
  identityAutonomy(id) {
    return this.#brainsDoc?.value.codies[id]?.autonomy ?? "off";
  }
  async setIdentityAutonomy(id, mode) {
    this.#codie(id);
    await this.#brainsDoc.update((d2) => {
      (d2.codies[id] ??= {}).autonomy = mode;
    });
    if (mode === "off") this.#proposals.delete(id);
  }
  /** The 'auto' policy: which tools may run unattended, and per-symbol spend caps. */
  autoPolicy(id) {
    const a2 = this.#brainsDoc?.value.codies[id]?.auto;
    return { allow: a2?.allow ? [...a2.allow] : [], caps: a2?.caps ? { ...a2.caps } : {} };
  }
  async setAutoPolicy(id, policy) {
    this.#codie(id);
    const allow = (policy.allow ?? []).filter((n) => CHAT_WRITE_TOOLS.has(n));
    const caps = {};
    for (const [sym, c2] of Object.entries(policy.caps ?? {})) {
      if (!sym.trim()) continue;
      const perTx = Number(c2?.perTx), perDay = Number(c2?.perDay);
      const cap = {};
      if (Number.isFinite(perTx) && perTx > 0) cap.perTx = perTx;
      if (Number.isFinite(perDay) && perDay > 0) cap.perDay = perDay;
      if (cap.perTx || cap.perDay) caps[sym.trim().toUpperCase()] = cap;
    }
    await this.#brainsDoc.update((d2) => {
      (d2.codies[id] ??= {}).auto = { allow, caps };
    });
  }
  /** The unattended-action audit log, newest last. */
  auditLog(id) {
    return [...this.#auditDoc?.value.codies[id] ?? []];
  }
  async #audit(id, e) {
    await this.#auditDoc.update((d2) => {
      const list = d2.codies[id] ??= [];
      list.push(e);
      if (list.length > 200) list.splice(0, list.length - 200);
    });
  }
  /** May this tool+args run unattended under the identity's 'auto' policy? */
  #autoAllows(id, name, args2) {
    const pol = this.autoPolicy(id);
    if (!pol.allow.includes(name)) return { ok: false, reason: `${name} is not on the allowlist` };
    if (name === "wallet_send") {
      const sym = String(args2.token ?? "").toUpperCase();
      const amt = Number(args2.amount);
      if (!sym || !Number.isFinite(amt) || amt <= 0) return { ok: false, reason: "unparseable amount/token" };
      const cap = pol.caps[sym];
      if (!cap) return { ok: false, reason: `no spend cap set for ${sym}` };
      if (cap.perTx !== void 0 && amt > cap.perTx) return { ok: false, reason: `${amt} ${sym} exceeds the ${cap.perTx} per-transfer cap` };
      if (cap.perDay !== void 0) {
        const since = Date.now() - 864e5;
        const spent = this.auditLog(id).filter((x2) => x2.outcome === "ran" && x2.tool === "wallet_send" && x2.atMs >= since && (x2.token ?? "").toUpperCase() === sym).reduce((s, x2) => s + (x2.amount ?? 0), 0);
        if (spent + amt > cap.perDay) return { ok: false, reason: `would exceed the ${cap.perDay} ${sym}/24h cap (already ${spent.toFixed(4)})` };
      }
    }
    return { ok: true };
  }
  proposals(id) {
    return (this.#proposals.get(id) ?? []).map(({ token: _t, ...p2 }) => p2);
  }
  /** An inbound event (a new message) → let the identity's brain act. In 'propose' it only
   *  suggests; in 'auto' an allowlisted, within-cap write runs unattended (and is audited),
   *  anything else falls back to a proposal. */
  async #proposeFromMessage(id, senderPrincipal, from, subject, body) {
    const mode = this.identityAutonomy(id);
    if (mode === "off") return;
    const now = Date.now();
    const win = (this.#autoTurns.get(id) ?? []).filter((t) => now - t < 36e5);
    if (win.length >= 12) {
      this.log.info(`autonomy hourly cap hit for ${id}; skipping`);
      return;
    }
    win.push(now);
    this.#autoTurns.set(id, win);
    try {
      const agent = await this.#agentFor(id, IC_HOST);
      const brain = this.#brainFor(id, this.identityBrain(id), agent);
      let peer = "";
      try {
        const prof = await (await this.#registryAnon()).getCodie(Principal.fromText(senderPrincipal));
        if (prof?.name) peer = prof.name;
      } catch {
      }
      const trigger = `New message from ${from}: "${subject}" \u2014 ${body}`.slice(0, 600);
      const peerLine = peer ? ` This message is from another registered AI identity named "${peer}" \u2014 you are conversing with another AI and may reply or transact.` : "";
      const confirmLine = mode === "auto" ? ` If an action is clearly warranted, call the single matching tool; allowlisted actions within caps run automatically, the rest are proposed to the user.` : ` If an action is clearly warranted, call the single matching tool \u2014 it will be PROPOSED to the user for confirmation, not run now.`;
      const sys = `You are ${this.#codie(id).label}. A new message just arrived.${peerLine}${confirmLine} Otherwise reply with one short suggested next step. Be brief.`;
      const result = await this.#runAgent(id, this.identityBrain(id), brain, [{ role: "system", content: sys }, { role: "user", content: trigger }], 0);
      if (mode === "auto" && result.pending?.token) {
        const sess = this.#chatSessions.get(result.pending.token);
        const name = sess?.name ?? result.pending.tool;
        const args2 = sess?.args ?? {};
        const summary = this.#describeTool(name, args2);
        const gate = this.#autoAllows(id, name, args2);
        if (gate.ok) {
          const run = await this.chatAgentConfirm(id, result.pending.token, true);
          const vm = name === "wallet_send" ? { amount: Number(args2.amount), token: String(args2.token ?? "").toUpperCase() } : {};
          await this.#audit(id, { atMs: Date.now(), tool: name, summary, trigger, outcome: "ran", detail: (run.reply ?? "").slice(0, 300), ...vm });
          this.log.info(`${this.#codie(id).label} auto-ran ${name}: ${summary}`);
          await this.#notify(id, `auto:${randomBytes5(4).toString("hex")}`, { source: "message", title: `${this.#codie(id).label} acted`, body: summary, chime: "An automatic action ran." });
          return;
        }
        this.#chatSessions.delete(result.pending.token);
        await this.#audit(id, { atMs: Date.now(), tool: name, summary, trigger, outcome: "blocked", detail: gate.reason });
        this.log.info(`${this.#codie(id).label} auto-blocked ${name} (${gate.reason}); proposing instead`);
        const pid2 = randomBytes5(6).toString("hex");
        const list2 = this.#proposals.get(id) ?? [];
        const token2 = this.#newChatToken();
        if (sess) this.#chatSessions.set(token2, { ...sess, atMs: Date.now() });
        list2.push({ id: pid2, atMs: Date.now(), trigger, text: `${summary} \u2014 held: ${gate.reason}`, kind: "action", ...sess ? { token: token2 } : {} });
        if (list2.length > 20) list2.splice(0, list2.length - 20);
        this.#proposals.set(id, list2);
        await this.#notify(id, `propose:${pid2}`, { source: "message", title: `${this.#codie(id).label} held an action`, body: `${summary} \u2014 ${gate.reason}`, chime: "An action needs your OK." });
        return;
      }
      const pid = randomBytes5(6).toString("hex");
      const p2 = result.pending ? { id: pid, atMs: Date.now(), trigger, text: result.pending.prompt, kind: "action", token: result.pending.token } : { id: pid, atMs: Date.now(), trigger, text: (result.reply ?? "").slice(0, 600), kind: "note" };
      if (p2.kind === "note" && !p2.text) return;
      const list = this.#proposals.get(id) ?? [];
      list.push(p2);
      if (list.length > 20) list.splice(0, list.length - 20);
      this.#proposals.set(id, list);
      this.log.info(`${this.#codie(id).label} proposed (${p2.kind}) from a message by ${from}`);
      await this.#notify(id, `propose:${pid}`, { source: "message", title: `${this.#codie(id).label} has a suggestion`, body: p2.text, chime: "A suggestion is waiting." });
    } catch (e) {
      this.log.warn(`autonomous turn failed for ${id}: ${errorText(e)}`);
    }
  }
  // ---------- open-device adapter (announce webhook) ----------
  // A generic device adapter: POST a message/announcement to a user-set local endpoint so an open
  // companion (HA Voice / Wyoming / ESP32 / Willow) can speak/show it. The device's *outbound* side
  // (calling this identity's tools) uses the MCP bridge. Codie keeps its own signed-device path.
  deviceHook(id) {
    const h2 = this.#hooksDoc?.value.codies[id];
    return h2 ? { url: h2.url } : void 0;
  }
  async setDeviceHook(id, url, auth) {
    this.#codie(id);
    await this.#hooksDoc.update((d2) => {
      if (!url) {
        delete d2.codies[id];
        return;
      }
      try {
        new URL(url);
      } catch {
        throw new HttpError(400, "Not a valid URL.");
      }
      d2.codies[id] = { url: url.trim(), ...auth && auth.trim() ? { auth: auth.trim() } : {} };
    });
  }
  /** POST {title, text} to the identity's device webhook (used by the poller and the Test button). */
  async announceToHook(id, title, text) {
    const h2 = this.#hooksDoc?.value.codies[id];
    if (!h2) throw new HttpError(409, "No device webhook is set for this identity.");
    const res = await fetch(h2.url, {
      method: "POST",
      headers: { "content-type": "application/json", ...h2.auth ? { authorization: h2.auth } : {} },
      body: JSON.stringify({ title, text, source: "waifu-ai", identity: id }),
      signal: AbortSignal.timeout(5e3)
    });
    if (!res.ok) throw new HttpError(502, `Device webhook returned ${res.status}.`);
  }
  /** Approve a proposed action (runs the parked write) or dismiss it. */
  async resolveProposal(id, pid, approve) {
    const list = this.#proposals.get(id) ?? [];
    const p2 = list.find((x2) => x2.id === pid);
    this.#proposals.set(id, list.filter((x2) => x2.id !== pid));
    if (!p2) throw new HttpError(404, "That proposal is gone.");
    if (!approve || !p2.token) return { reply: approve ? "Noted." : "Dismissed." };
    return this.chatAgentConfirm(id, p2.token, true);
  }
  // BYO provider config (keys never leave the server). model: 'agent' (w36hm) | 'claude' | 'gpt'.
  llmConfig() {
    const s = this.#secretsDoc.value;
    return {
      claude: { hasKey: !!s.anthropicKey, model: s.claudeModel || DEFAULT_MODELS.claude },
      gpt: { hasKey: !!s.openaiKey, model: s.gptModel || DEFAULT_MODELS.gpt }
    };
  }
  async setLlmKey(provider, key, model) {
    await this.#secretsDoc.update((d2) => {
      if (provider === "claude") {
        if (key !== null) d2.anthropicKey = key.trim() || void 0;
        if (model) d2.claudeModel = model.trim() || void 0;
      } else {
        if (key !== null) d2.openaiKey = key.trim() || void 0;
        if (model) d2.gptModel = model.trim() || void 0;
      }
    });
  }
  #brainFor(codieId, model, agent) {
    const tools = CODIE_TOOLS.filter((t) => CHAT_TOOLS.has(t.name));
    const s = this.#secretsDoc.value;
    if (model === "claude") {
      if (!s.anthropicKey) throw new HttpError(409, "Add your Anthropic API key in Settings to use Claude.");
      return anthropicBrain(s.anthropicKey, s.claudeModel || DEFAULT_MODELS.claude, tools);
    }
    if (model === "gpt") {
      if (!s.openaiKey) throw new HttpError(409, "Add your OpenAI API key in Settings to use ChatGPT.");
      return openaiBrain(s.openaiKey, s.gptModel || DEFAULT_MODELS.gpt, tools);
    }
    return w36hmBrain(agent, tools);
  }
  /** Agent chat with a chosen brain (w36hm / Claude / ChatGPT). Reads run on their own;
   *  a write tool pauses and returns a `pending` proposal for the user to confirm. */
  async chatAgent(codieId, model, text, history = []) {
    const c2 = this.#codie(codieId);
    if (!text.trim()) throw new HttpError(400, "Say something first.");
    const agent = await this.#agentFor(codieId, IC_HOST);
    const brain = this.#brainFor(codieId, model, agent);
    const mem = this.#memory.digest(codieId);
    const sys = `You are ${c2.label}, an assistant that acts as this identity on the Internet Computer. Use the tools to answer questions about and act on its wallet, messages, neurons, registry and shop. Prefer reading real data with tools before answering. Be concise and friendly. For actions that spend or send, call the matching tool \u2014 the user confirms before it runs.${mem ? `

You remember:
${mem}` : ""}`;
    const messages = [{ role: "system", content: sys }, ...history.slice(-8), { role: "user", content: text.trim() }];
    return this.#runAgent(codieId, model, brain, messages, 0);
  }
  /** Resume a paused agent turn after the user confirms (or cancels) a proposed write. */
  async chatAgentConfirm(codieId, token2, approved) {
    const s = this.#chatSessions.get(token2);
    this.#chatSessions.delete(token2);
    if (!s || s.codieId !== codieId) throw new HttpError(400, "That action expired \u2014 ask again.");
    let writeResult;
    if (approved) {
      try {
        writeResult = (await this.#execTool(codieId, s.name, s.args)).speech;
      } catch (e) {
        writeResult = `Error: ${errorText(e)}`;
      }
    } else {
      writeResult = "The user declined this action.";
    }
    const messages = [...s.messages, s.assistant, ...s.results, { role: "tool", toolCallId: s.tcId, content: writeResult }];
    const brain = this.#brainFor(codieId, s.model, await this.#agentFor(codieId, IC_HOST));
    return this.#runAgent(codieId, s.model, brain, messages, 0);
  }
  async #runAgent(codieId, model, brain, messages, hop) {
    let reply;
    for (let attempt = 0; ; attempt++) {
      try {
        reply = await brain(messages);
        break;
      } catch (e) {
        if (attempt >= 1) throw new HttpError(502, `The LLM is busy or unavailable \u2014 try again in a moment. (${errorText(e)})`);
        await sleep2(800);
      }
    }
    if (hop >= 6 || !reply.toolCalls.length) return { reply: reply.content.trim() || "\u2026" };
    const assistant = { role: "assistant", content: reply.content, toolCalls: reply.toolCalls, raw: reply.raw };
    const results = [];
    for (const tc of reply.toolCalls) {
      const spec = toolByName(tc.name);
      if (!spec || !CHAT_TOOLS.has(tc.name)) {
        results.push({ role: "tool", toolCallId: tc.id, content: `"${tc.name}" is not available from chat.` });
        continue;
      }
      if (spec.write) {
        const v2 = validateArgs(spec, tc.args);
        if (!v2.ok) {
          results.push({ role: "tool", toolCallId: tc.id, content: `Error: ${v2.error}` });
          continue;
        }
        const token2 = this.#newChatToken();
        this.#chatSessions.set(token2, { codieId, model, atMs: Date.now(), messages, assistant, results, tcId: tc.id, name: tc.name, args: v2.value });
        return { pending: { tool: tc.name, prompt: this.#describeTool(tc.name, v2.value), token: token2 } };
      }
      try {
        const r2 = await this.invokeTool(codieId, tc.name, tc.args);
        results.push({ role: "tool", toolCallId: tc.id, content: r2.speech + (r2.data ? `
${JSON.stringify(r2.data).slice(0, 800)}` : "") });
      } catch (e) {
        results.push({ role: "tool", toolCallId: tc.id, content: `Error: ${errorText(e)}` });
      }
    }
    return this.#runAgent(codieId, model, brain, [...messages, assistant, ...results], hop + 1);
  }
  #newChatToken() {
    const now = Date.now();
    for (const [k2, v2] of this.#chatSessions) if (now - v2.atMs > 3e5) this.#chatSessions.delete(k2);
    while (this.#chatSessions.size >= 32) this.#chatSessions.delete(this.#chatSessions.keys().next().value);
    return randomBytes5(9).toString("base64url");
  }
  // ---------- streaming chat (SSE) ----------
  /** Persona streaming: emit the cumulative text after each generation step. */
  async chatPersonaStream(codieId, personaKey, text, emit) {
    this.#codie(codieId);
    const p2 = personaByKey(personaKey);
    if (!p2) throw new HttpError(400, "Unknown persona.");
    if (!text.trim()) throw new HttpError(400, "Say something first.");
    const agent = await this.#agentFor(codieId, IC_HOST);
    const reply = await personaReply(agent, p2, text.trim(), (full) => emit({ type: "text", text: full }));
    emit({ type: "text", text: reply });
    emit({ type: "done" });
  }
  /** Agent streaming: live step-progress as tools run, then the final reply (or a write proposal). */
  async chatAgentStream(codieId, model, text, history, emit) {
    const c2 = this.#codie(codieId);
    if (!text.trim()) throw new HttpError(400, "Say something first.");
    const agent = await this.#agentFor(codieId, IC_HOST);
    const brain = this.#brainFor(codieId, model, agent);
    const mem = this.#memory.digest(codieId);
    const sys = `You are ${c2.label}, an assistant that acts as this identity on the Internet Computer. Use the tools to answer questions about and act on its wallet, messages, neurons, registry and shop. Prefer reading real data with tools before answering. Be concise and friendly. For actions that spend or send, call the matching tool \u2014 the user confirms before it runs.${mem ? `

You remember:
${mem}` : ""}`;
    const messages = [{ role: "system", content: sys }, ...history.slice(-8), { role: "user", content: text.trim() }];
    await this.#streamLoop(codieId, model, brain, messages, 0, emit);
  }
  async chatAgentStreamConfirm(codieId, token2, approved, emit) {
    const s = this.#chatSessions.get(token2);
    this.#chatSessions.delete(token2);
    if (!s || s.codieId !== codieId) throw new HttpError(400, "That action expired \u2014 ask again.");
    let writeResult;
    if (approved) {
      try {
        writeResult = (await this.#execTool(codieId, s.name, s.args)).speech;
      } catch (e) {
        writeResult = `Error: ${errorText(e)}`;
      }
    } else {
      writeResult = "The user declined this action.";
    }
    emit({ type: "step", text: approved ? `did ${s.name}` : "cancelled" });
    const messages = [...s.messages, s.assistant, ...s.results, { role: "tool", toolCallId: s.tcId, content: writeResult }];
    const brain = this.#brainFor(codieId, s.model, await this.#agentFor(codieId, IC_HOST));
    await this.#streamLoop(codieId, s.model, brain, messages, 0, emit);
  }
  async #streamLoop(codieId, model, brain, messages, hop, emit) {
    let reply;
    for (let attempt = 0; ; attempt++) {
      try {
        reply = await brain(messages);
        break;
      } catch (e) {
        if (attempt >= 1) {
          emit({ type: "error", message: `The LLM is busy \u2014 try again. (${errorText(e)})` });
          return;
        }
        await sleep2(800);
      }
    }
    if (hop >= 6 || !reply.toolCalls.length) {
      emit({ type: "text", text: reply.content.trim() || "\u2026" });
      emit({ type: "done" });
      return;
    }
    const assistant = { role: "assistant", content: reply.content, toolCalls: reply.toolCalls, raw: reply.raw };
    const results = [];
    for (const tc of reply.toolCalls) {
      const spec = toolByName(tc.name);
      if (!spec || !CHAT_TOOLS.has(tc.name)) {
        results.push({ role: "tool", toolCallId: tc.id, content: `"${tc.name}" is not available from chat.` });
        continue;
      }
      if (spec.write) {
        const v2 = validateArgs(spec, tc.args);
        if (!v2.ok) {
          results.push({ role: "tool", toolCallId: tc.id, content: `Error: ${v2.error}` });
          continue;
        }
        const token2 = this.#newChatToken();
        this.#chatSessions.set(token2, { codieId, model, atMs: Date.now(), messages, assistant, results, tcId: tc.id, name: tc.name, args: v2.value });
        emit({ type: "pending", tool: tc.name, prompt: this.#describeTool(tc.name, v2.value), token: token2 });
        return;
      }
      emit({ type: "step", text: `using ${tc.name}\u2026` });
      try {
        const r2 = await this.invokeTool(codieId, tc.name, tc.args);
        results.push({ role: "tool", toolCallId: tc.id, content: r2.speech + (r2.data ? `
${JSON.stringify(r2.data).slice(0, 800)}` : "") });
      } catch (e) {
        results.push({ role: "tool", toolCallId: tc.id, content: `Error: ${errorText(e)}` });
      }
    }
    await this.#streamLoop(codieId, model, brain, [...messages, assistant, ...results], hop + 1, emit);
  }
  // ---------- codies ----------
  #codie(id) {
    const c2 = this.store.get(id);
    if (!c2) throw new HttpError(404, "No such Codie");
    return c2;
  }
  async createCodie(label, kind = "codie") {
    const c2 = await this.store.create(label, kind);
    this.#device(c2);
    this.#schedule(c2.id, 2e3);
    this.log.info(`created ${kind} identity "${c2.label}" ${c2.principal}`);
    return c2;
  }
  async renameCodie(id, label) {
    this.#codie(id);
    return this.store.rename(id, label);
  }
  async deleteCodie(id, confirmPrincipal) {
    const c2 = this.#codie(id);
    if (confirmPrincipal !== c2.principal) throw new HttpError(400, "Confirmation does not match this Codie's principal");
    this.#unschedule(id);
    await this.store.delete(id);
    this.#devices.delete(id);
    for (const k2 of [...this.#agents.keys()]) if (k2.startsWith(`${id}@`)) this.#agents.delete(k2);
    await this.#stateDoc.update((s) => {
      for (const net of Object.values(s.nets)) if (net) delete net[id];
    });
    await this.#devicesDoc.update((d2) => void delete d2.devices[id]);
    await this.#deliveriesDoc.update((d2) => void delete d2.queues[id]);
    this.log.warn(`deleted Codie "${c2.label}" ${c2.principal} (key destroyed)`);
  }
  #net(id) {
    return this.#stateDoc.value.nets[this.settings.sneedNetwork]?.[id] ?? { inbox: {} };
  }
  #updateNet(id, fn, network = this.settings.sneedNetwork) {
    return this.#stateDoc.update((doc) => {
      const net = doc.nets[network] ??= {};
      const cur = net[id] ??= { inbox: {} };
      fn(cur);
    });
  }
  // ---------- settings ----------
  async setSettings(patch) {
    const p2 = validatePatch(patch);
    for (const k2 of Object.keys(p2)) {
      if (k2 !== "confirmProduction" && this.lockedSettings.includes(k2)) throw new HttpError(409, `${k2} is set by an environment variable`);
    }
    if (p2.sneedNetwork === "production" && this.settings.sneedNetwork !== "production" && !p2.confirmProduction)
      throw new HttpError(400, "Switching to production needs confirmProduction: true");
    const { confirmProduction: _c, ...rest } = p2;
    await this.#settingsDoc.update((s) => {
      for (const [k2, v2] of Object.entries(rest)) {
        if (v2 === void 0) delete s[k2];
        else s[k2] = v2;
      }
    });
    if ("registryId" in rest || "registryHost" in rest) this.#names.clear();
    if ("sneedNetwork" in rest || "pollSeconds" in rest) this.#restartPollers();
    this.log.info(`settings: ${JSON.stringify(rest)}`);
    return this.settings;
  }
  // ---------- limits ----------
  async limits(id, force = false) {
    const c2 = this.#codie(id);
    const key = `${this.settings.sneedNetwork}:${id}`;
    const hit = this.#limits.get(key);
    if (!force && hit && Date.now() - hit.at < LIMITS_TTL_MS) return hit.limits;
    const limits = await (await this.#sneed(id)).limits(Principal.fromText(c2.principal));
    this.#limits.set(key, { at: Date.now(), limits });
    return limits;
  }
  cooldownMs(id, limits) {
    if (!limits) return 0;
    return localCooldownMs(this.#net(id).lastSentAtMs, limits);
  }
  // ---------- names ----------
  /** Registry name for a principal, if the registry knows it (cached). Never throws. */
  async nameOf(p2) {
    const local = this.store.list().find((c2) => c2.principal === p2);
    const hit = this.#names.get(p2);
    if (hit && Date.now() - hit.at < NAME_TTL_MS) return hit.name ?? local?.registryName;
    if (!this.settings.registryId) return local?.registryName;
    try {
      const prof = await (await this.#registryAnon()).getCodie(Principal.fromText(p2));
      this.#names.set(p2, { at: Date.now(), name: prof?.name });
      return prof?.name ?? local?.registryName;
    } catch {
      return local?.registryName;
    }
  }
  async #speakerLabel(p2) {
    const t = p2.toText();
    const contact = this.#contacts.byPrincipal(t);
    if (contact) return contact.label;
    const name = await this.nameOf(t);
    if (name) return name;
    const local = this.store.list().find((c2) => c2.principal === t);
    if (local) return local.label;
    return shortPrincipal(t);
  }
  // ---------- sending ----------
  async resolveRecipients(to) {
    const parts = to.split(/[\s,;]+/).map((x2) => x2.trim()).filter(Boolean);
    if (!parts.length) throw new HttpError(400, "Enter at least one recipient.");
    const resolved = [];
    const errors = [];
    let viaRegistry = false;
    for (const raw of parts) {
      const forcedName = raw.startsWith("@");
      const bare = forcedName ? raw.slice(1) : raw;
      const p2 = forcedName ? void 0 : parsePrincipal(bare);
      if (p2) {
        if (p2.isAnonymous()) {
          errors.push("The anonymous principal cannot receive messages.");
          continue;
        }
        resolved.push({ input: raw, principal: p2.toText(), name: this.#contacts.byPrincipal(p2.toText())?.label });
        continue;
      }
      const contact = this.#contacts.byLabel(bare);
      if (contact) {
        resolved.push({ input: raw, principal: contact.principal, name: contact.label });
        continue;
      }
      if (isValidName(bare)) {
        if (!this.settings.registryId) {
          errors.push(`"${bare}" looks like a Codie name, but the registry is not configured. Use a principal.`);
          continue;
        }
        const prof = await (await this.#registryAnon()).findByName(normalizeName(bare));
        if (!prof) {
          errors.push(`No contact or registered Codie named "${bare}".`);
          continue;
        }
        viaRegistry = true;
        resolved.push({ input: raw, principal: prof.id.toText(), name: prof.name });
        continue;
      }
      errors.push(`"${raw}" is neither a principal, a contact, nor a Codie name.`);
    }
    if (errors.length) throw new HttpError(400, errors.join(" "));
    if (!viaRegistry && this.settings.registryId) {
      for (const r2 of resolved) if (await this.nameOf(r2.principal)) {
        viaRegistry = true;
        break;
      }
    }
    const principals = dedupePrincipals(resolved.map((r2) => Principal.fromText(r2.principal)));
    return { principals, viaRegistry, resolved };
  }
  async send(id, req) {
    const network = this.settings.sneedNetwork;
    if (this.#sending.has(id)) throw new HttpError(409, "A send for this Codie is already in progress.");
    const st2 = this.#net(id);
    if (st2.pending) {
      throw new HttpError(409, "The last send had an uncertain result. Check whether it went out before sending again.", { pending: true });
    }
    this.#sending.add(id);
    try {
      const limits = await this.limits(id);
      const wait = this.cooldownMs(id, limits);
      if (wait > 0) return { kind: "rate_limited", message: "Local cooldown since the last send", waitMinutes: wait / 6e4, network };
      const { principals, viaRegistry } = await this.resolveRecipients(req.to);
      const codieMessage = req.codieMessage ?? viaRegistry;
      const subject = codieMessage ? withCodiePrefix(req.subject, CODIE_SUBJECT_PREFIX) : req.subject.trim();
      const body = req.body;
      const errs = validateDraft({ subject, body, recipientCount: principals.length }, limits);
      if (errs.length) throw new HttpError(400, errs.join(" "));
      const replyTo = req.replyTo?.length ? [req.replyTo.map((x2) => BigInt(x2))] : [];
      const pending = {
        draft: { subject, body, recipients: principals.map((p2) => p2.toText()) },
        startedAtMs: Date.now()
      };
      await this.#updateNet(id, (s) => void (s.pending = pending), network);
      let outcome;
      try {
        const sms = await this.#sneed(id);
        outcome = outcomeFromResult(await sms.send({ subject, body, recipients: principals, reply_to: replyTo }));
      } catch (e) {
        outcome = outcomeFromError(errorText(e), isCertainlyNotExecuted(e));
      }
      await this.#updateNet(id, (s) => {
        if (outcome.kind !== "uncertain") delete s.pending;
        if (outcome.kind === "sent") s.lastSentAtMs = Date.now();
      }, network);
      this.log.info(`send from ${id} on ${network}: ${outcome.kind}${"message" in outcome ? ` (${outcome.message})` : ""}`);
      return { ...outcome, subject, network };
    } finally {
      this.#sending.delete(id);
    }
  }
  /** After an uncertain send: look in get_sent_messages_page for it. Never resends. */
  async verifyPending(id) {
    const st2 = this.#net(id);
    if (!st2.pending) return { found: false, cleared: true };
    const pending = st2.pending;
    const sms = await this.#sneed(id);
    const page = await sms.actor.get_sent_messages_page({ after: [], before: [], limit: 50n });
    const hit = findPendingInSent(page.messages, pending);
    await this.#updateNet(id, (s) => {
      delete s.pending;
      if (hit) s.lastSentAtMs = Number(hit.created_at / 1000000n);
    });
    this.log.info(`verify pending send for ${id}: ${hit ? `found #${hit.id}` : "not found, resend allowed"}`);
    return { found: !!hit, id: hit?.id.toString(), cleared: true };
  }
  pending(id) {
    return this.#net(id).pending;
  }
  // ---------- reading mail ----------
  async messages(id, box, before) {
    this.#codie(id);
    const sms = await this.#sneed(id);
    const args2 = { after: [], before: before ? [BigInt(before)] : [], limit: 25n };
    const page = box === "received" ? await sms.actor.get_received_messages_page(args2) : await sms.actor.get_sent_messages_page(args2);
    const messages = await Promise.all(page.messages.map((m2) => this.#view(m2)));
    return { messages, hasMore: page.has_more, total: page.total.toString() };
  }
  async #view(m2) {
    return {
      id: m2.id.toString(),
      sender: m2.sender.toText(),
      senderLabel: await this.#speakerLabel(m2.sender),
      knownContact: !!this.#contacts.byPrincipal(m2.sender.toText()),
      recipients: m2.recipients.map((r2) => r2.toText()),
      subject: m2.subject,
      body: m2.body,
      replyTo: (m2.reply_to[0] ?? []).map((x2) => x2.toString()),
      createdAtMs: Number(m2.created_at / 1000000n)
    };
  }
  // ---------- polling ----------
  #restartPollers() {
    for (const id of [...this.#timers.keys()]) this.#unschedule(id);
    this.#backoff.clear();
    let i = 0;
    for (const c2 of this.store.list()) this.#schedule(c2.id, 3e3 + i++ * 4e3);
  }
  #unschedule(id) {
    const t = this.#timers.get(id);
    if (t) clearTimeout(t);
    this.#timers.delete(id);
  }
  #schedule(id, delayMs) {
    if (this.#stopped) return;
    this.#unschedule(id);
    const base = this.settings.pollSeconds * 1e3;
    const jitter = Math.round((Math.random() - 0.5) * 0.2 * base);
    const d2 = delayMs ?? Math.max(base + jitter, this.#backoff.get(id) ?? 0);
    const t = setTimeout(() => void this.pollOnce(id).finally(() => this.store.get(id) && this.#schedule(id)), d2);
    t.unref?.();
    this.#timers.set(id, t);
  }
  async pollOnce(id) {
    const c2 = this.store.get(id);
    if (!c2 || this.#polling.has(id)) return void 0;
    const network = this.settings.sneedNetwork;
    this.#polling.add(id);
    try {
      const sms = await this.#sneed(id);
      const me = Principal.fromText(c2.principal);
      const r2 = await pollInbox(sms.inboxApi(me), this.#net(id).inbox);
      await this.#updateNet(id, (s) => {
        s.inbox = r2.state;
        s.lastPollAtMs = Date.now();
        s.lastPollError = r2.markError ? `mark seen failed: ${errorText(r2.markError)}` : void 0;
      }, network);
      this.#backoff.delete(id);
      for (const m2 of r2.fresh) {
        const from = await this.#speakerLabel(m2.sender);
        const a2 = messageAnnouncement(from, m2.subject, m2.body);
        await this.#notify(id, `${network}:${m2.id}`, { source: "message", title: a2.title, body: a2.body, chime: "You've got mail." });
        if (this.deviceHook(id)) void this.announceToHook(id, a2.title, a2.body).catch((e) => this.log.warn(`device webhook for ${id} failed: ${errorText(e)}`));
        if (!r2.baselined && this.identityAutonomy(id) !== "off") void this.#proposeFromMessage(id, m2.sender.toText(), from, m2.subject, m2.body);
      }
      await this.#wallet.checkDeposits(id).catch((e) => this.log.warn(`wallet watch "${c2.label}" failed: ${errorText(e)}`));
      if (this.store.list()[0]?.id === id) await this.#shop.checkOrders(id).catch((e) => this.log.warn(`order watch failed: ${errorText(e)}`));
      await this.#processDeliveries(id);
      if (r2.baselined) this.log.info(`inbox baseline for "${c2.label}" on ${network}: highest id ${r2.state.highestId}`);
      return { fresh: r2.fresh.length, skipped: r2.skipped };
    } catch (e) {
      const prev = this.#backoff.get(id) ?? this.settings.pollSeconds * 1e3;
      this.#backoff.set(id, Math.min(prev * 2, MAX_BACKOFF_MS));
      await this.#updateNet(id, (s) => {
        s.lastPollAtMs = Date.now();
        s.lastPollError = errorText(e);
      }, network).catch(() => void 0);
      this.log.warn(`poll "${c2.label}" failed: ${errorText(e)}`);
      return void 0;
    } finally {
      this.#polling.delete(id);
    }
  }
  async pollNow(id) {
    this.#codie(id);
    const r2 = await this.pollOnce(id);
    this.#schedule(id);
    return r2;
  }
  // ---------- registry (as the Codie) ----------
  async registryProfile(id) {
    const c2 = this.#codie(id);
    const prof = await (await this.#registryAnon()).getCodie(Principal.fromText(c2.principal));
    if (prof && prof.name !== c2.registryName) await this.store.setRegistryName(id, prof.name);
    if (!prof && c2.registryName) await this.store.setRegistryName(id, void 0);
    return prof ? profileView(prof) : null;
  }
  async register(id, name) {
    this.#codie(id);
    const n = normalizeName(name);
    if (!isValidName(n)) throw new HttpError(400, "Name must be 3-32 characters of a-z, 0-9 and -");
    const prof = unwrapProfile(await (await this.#registryAs(id)).actor.register(n));
    await this.store.setRegistryName(id, prof.name);
    this.#names.delete(prof.id.toText());
    return profileView(prof);
  }
  async registryRename(id, name) {
    this.#codie(id);
    const n = normalizeName(name);
    if (!isValidName(n)) throw new HttpError(400, "Name must be 3-32 characters of a-z, 0-9 and -");
    const prof = unwrapProfile(await (await this.#registryAs(id)).actor.rename(n));
    await this.store.setRegistryName(id, prof.name);
    this.#names.delete(prof.id.toText());
    return profileView(prof);
  }
  async proposeOwner(id, owner) {
    this.#codie(id);
    let p2;
    try {
      p2 = Principal.fromText(owner.trim());
    } catch {
      throw new HttpError(400, "Owner is not a valid principal");
    }
    if (p2.isAnonymous()) throw new HttpError(400, "Owner cannot be anonymous \u2014 sign in with Internet Identity first");
    return profileView(unwrapProfile(await (await this.#registryAs(id)).actor.propose_owner(p2)));
  }
  async releaseAsCodie(id) {
    const c2 = this.#codie(id);
    return profileView(unwrapProfile(await (await this.#registryAs(id)).actor.release_ownership(Principal.fromText(c2.principal))));
  }
  async unregister(id) {
    this.#codie(id);
    const r2 = await (await this.#registryAs(id)).actor.unregister();
    if ("err" in r2) throw new HttpError(400, registryErrorText(r2.err));
    await this.store.setRegistryName(id, void 0);
  }
  async findByName(name) {
    const prof = await (await this.#registryAnon()).findByName(normalizeName(name));
    return prof ? profileView(prof) : null;
  }
  async codiesOfOwner(owner) {
    const list = await (await this.#registryAnon()).actor.codies_of_owner(Principal.fromText(owner));
    return list.map(profileView);
  }
  async registryStats() {
    const s = await (await this.#registryAnon()).actor.get_stats();
    return { total: s.total_codies.toString(), owned: s.owned_codies.toString(), max: s.max_codies.toString() };
  }
  // ---------- contacts (local address book) — see server/contactBook.ts ----------
  contacts() {
    return this.#contacts.list();
  }
  addContact(req) {
    return this.#contacts.add(req);
  }
  updateContact(principal, patch) {
    return this.#contacts.update(principal, patch);
  }
  removeContact(principal) {
    return this.#contacts.remove(principal);
  }
  // ---------- wallet (ICRC-1/2) — see server/wallet.ts ----------
  tokens() {
    return this.#wallet.tokens();
  }
  walletBalances(id) {
    return this.#wallet.balances(id);
  }
  walletWatch(id) {
    return this.#wallet.watch(id);
  }
  sendToken(id, req) {
    return this.#wallet.sendToken(id, req);
  }
  addToken(canisterId) {
    return this.#wallet.addToken(canisterId);
  }
  removeToken(ledger) {
    return this.#wallet.removeToken(ledger);
  }
  // ---------- neurons (governance) — see server/governance.ts ----------
  snsDaos() {
    return this.#neurons.daos();
  }
  listNeurons(id, nnsNeuronId) {
    return this.#neurons.listNeurons(id, nnsNeuronId);
  }
  voteNeuron(id, req) {
    return this.#neurons.vote(id, req);
  }
  neuronProposals(id) {
    this.#codie(id);
    return this.#neurons.proposals(id);
  }
  followNeuron(id, req) {
    return this.#neurons.follow(id, req);
  }
  addSnsDao(gov) {
    return this.#neurons.addDao(gov);
  }
  removeSnsDao(gov) {
    return this.#neurons.removeDao(gov);
  }
  // ---------- IWEP shop (hand-off) — see server/shop.ts ----------
  shopConfig() {
    return this.#shop.config();
  }
  setShopConfig(patch) {
    return this.#shop.setConfig(patch);
  }
  forgetBuyer() {
    return this.#shop.forgetBuyer();
  }
  shopShelf() {
    return this.#shop.shelf();
  }
  shopCheckout(store, lines, requestId) {
    return this.#shop.checkout(store, lines, requestId);
  }
  shopGetCheckout(id) {
    return this.#shop.getCheckout(id);
  }
  shopHandoff(id) {
    return this.#shop.handoff(id);
  }
  shopCancel(id) {
    return this.#shop.cancel(id);
  }
  shopOrders() {
    return this.#shop.orders();
  }
  shopVendors(codieId) {
    this.#codie(codieId);
    return this.#shop.vendors(codieId);
  }
  setShopVendorActive(codieId, store, active) {
    this.#codie(codieId);
    return this.#shop.setVendorActive(codieId, store, active);
  }
  // ---------- snapshot for the UI ----------
  snapshot() {
    const s = this.settings;
    if (this.store.locked) {
      return { locked: true, encrypted: true, settings: s, lockedSettings: this.lockedSettings, sneedCanister: SNEED_SMS[s.sneedNetwork], registryConfigured: !!s.registryId, codies: [] };
    }
    return {
      locked: false,
      encrypted: this.store.encrypted,
      settings: s,
      lockedSettings: this.lockedSettings,
      sneedCanister: SNEED_SMS[s.sneedNetwork],
      registryConfigured: !!s.registryId,
      lan: { enabled: !!s.lanTools, bound: this.#lanBound, addresses: this.#lanAddresses() },
      contacts: this.contacts(),
      codies: this.store.list().map((c2) => {
        const net = this.#net(c2.id);
        const hit = this.#limits.get(`${s.sneedNetwork}:${c2.id}`);
        const dcfg = this.deviceConfig(c2.id);
        return {
          ...c2,
          device: {
            mode: dcfg.mode,
            baseUrl: dcfg.baseUrl,
            reminderSet: !!dcfg.reminder || !!dcfg.sybran,
            sybran: dcfg.sybran ? { timezone: dcfg.sybran.timezone } : void 0,
            signer: dcfg.signer ?? "none",
            paired: !!c2.session,
            session: c2.session ? { sessionId: c2.session.sessionId, pairedAtMs: c2.session.pairedAtMs, expiresAtMs: c2.session.expiresAtMs } : void 0,
            pendingDeliveries: this.#queue(c2.id).length,
            deliveryError: this.#queue(c2.id)[0]?.lastError
          },
          voice: this.voiceConfig(c2.id),
          notify: this.notifyLevel(c2.id),
          toolToken: this.hasToolToken(c2.id),
          mcpWrites: this.mcpWritesAllowed(c2.id),
          brain: this.identityBrain(c2.id),
          autonomy: this.identityAutonomy(c2.id),
          autoPolicy: this.autoPolicy(c2.id),
          audit: this.auditLog(c2.id).slice(-30).reverse(),
          proposals: this.proposals(c2.id),
          deviceHook: this.deviceHook(c2.id)?.url,
          wallet: (() => {
            const w2 = this.walletWatch(c2.id);
            return { lastDepositAtMs: w2.lastDepositAtMs, lastDepositText: w2.lastDepositText };
          })(),
          speech: this.speech(c2.id).slice(-30),
          inbox: { highestId: net.inbox.highestId, total: net.inbox.total, lastPollAtMs: net.lastPollAtMs, lastPollError: net.lastPollError },
          lastSentAtMs: net.lastSentAtMs,
          cooldownMs: hit ? this.cooldownMs(c2.id, hit.limits) : void 0,
          pending: net.pending ? { startedAtMs: net.pending.startedAtMs, subject: net.pending.draft.subject } : void 0,
          limits: hit?.limits
        };
      })
    };
  }
};
var sleep2 = (ms) => new Promise((r2) => setTimeout(r2, ms));
function findShelfProduct(shelf, query) {
  const q2 = query.toLowerCase().trim();
  const all = shelf.stores.flatMap((s) => s.products.map((p2) => ({ store: s.id, product: p2 })));
  return all.find((x2) => x2.product.title.toLowerCase() === q2) ?? all.find((x2) => x2.product.title.toLowerCase().includes(q2)) ?? all.find((x2) => q2.split(/\s+/).some((w2) => w2.length > 2 && x2.product.title.toLowerCase().includes(w2)));
}

// src/server/http.ts
var VERSION = true ? "0.58.0" : "dev";
var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};
var MAX_BODY = 64 * 1024;
function csp(service2) {
  const registryHost = service2.settings.registryHost;
  const connect = /* @__PURE__ */ new Set(["'self'", IC_HOST, "https://icp0.io", "https://*.icp0.io", "https://ic0.app", "https://*.ic0.app", "https://id.ai", registryHost]);
  return [
    "default-src 'self'",
    "script-src 'self'",
    // Inline style attributes only (the UI builds elements with style="…"); scripts stay
    // locked to 'self'. Inline styles can't exfiltrate data, so this keeps the XSS surface closed.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    `connect-src ${[...connect].join(" ")}`,
    "frame-ancestors 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    // II (https) for the owner-claim popup, plus http: so the Lab tab can embed
    // the Codie device's own page (served over http on the LAN). The embedded page
    // runs in its own origin; our code can't read it (same-origin policy).
    `frame-src ${new URL(II_AUTHORIZE_URL).origin} http:`
  ].join("; ");
}
function send(res, status, body, headers = {}) {
  const text = JSON.stringify(body, (_k, v2) => typeof v2 === "bigint" ? v2.toString() : v2);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    ...headers
  });
  res.end(text);
}
async function readJson(req) {
  if (req.method === "GET" || req.method === "HEAD") return {};
  const hasBody = req.headers["transfer-encoding"] !== void 0 || Number(req.headers["content-length"] ?? 0) > 0;
  if (!hasBody) return {};
  const ct2 = req.headers["content-type"] ?? "";
  if (!ct2.startsWith("application/json")) throw new HttpError(415, "JSON only");
  const chunks = [];
  let n = 0;
  for await (const c2 of req) {
    n += c2.length;
    if (n > MAX_BODY) throw new HttpError(413, "Body too large");
    chunks.push(c2);
  }
  if (n === 0) return {};
  const v2 = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  if (typeof v2 !== "object" || v2 === null || Array.isArray(v2)) throw new HttpError(400, "Body must be an object");
  return v2;
}
var str = (v2, name) => {
  if (typeof v2 !== "string") throw new HttpError(400, `${name} must be text`);
  return v2;
};
function buildRoutes(d2) {
  const s = d2.service;
  return [
    ["GET", /^\/api\/state$/, async () => ({ version: VERSION, ...s.snapshot() })],
    ["POST", /^\/api\/unlock$/, async ({ body }) => {
      await s.unlock(str(body.passphrase, "passphrase"));
      return { ok: true };
    }],
    ["POST", /^\/api\/lock$/, async () => s.lockKeys("locked by request")],
    ["POST", /^\/api\/keys\/passphrase$/, async ({ body }) => {
      await s.setPassphrase(str(body.passphrase, "passphrase"));
      return { ok: true };
    }],
    ["DELETE", /^\/api\/keys\/passphrase$/, async () => {
      await s.removePassphrase();
      return { ok: true };
    }],
    ["POST", /^\/api\/keys\/backup$/, async ({ body }) => ({ blob: await s.exportBackup(str(body.passphrase, "passphrase")) })],
    ["POST", /^\/api\/keys\/import$/, async ({ body }) => s.importBackup(str(body.blob, "blob"), str(body.passphrase, "passphrase"))],
    ["POST", /^\/api\/settings$/, async ({ body }) => s.setSettings(body)],
    ["POST", /^\/api\/quit$/, async () => {
      setTimeout(() => d2.onQuit?.(), 200);
      return { ok: true };
    }],
    ["POST", /^\/api\/codies$/, async ({ body }) => s.createCodie(str(body.label, "label"), body.kind === "generic" ? "generic" : "codie")],
    ["PATCH", /^\/api\/codies\/([0-9a-f]{16})$/, async ({ body, params }) => s.renameCodie(params[0], str(body.label, "label"))],
    ["DELETE", /^\/api\/codies\/([0-9a-f]{16})$/, async ({ body, params }) => {
      await s.deleteCodie(params[0], str(body.confirmPrincipal, "confirmPrincipal"));
      return { ok: true };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/limits$/, async ({ params, query }) => {
      const limits = await s.limits(params[0], query.get("refresh") === "1");
      return { limits, cooldownMs: s.cooldownMs(params[0], limits) };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/messages\/(received|sent)$/, async ({ params, query }) => s.messages(params[0], params[1], query.get("before") ?? void 0)],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/send$/, async ({ body, params }) => s.send(params[0], {
      to: str(body.to, "to"),
      subject: str(body.subject, "subject"),
      body: str(body.body, "body"),
      codieMessage: typeof body.codieMessage === "boolean" ? body.codieMessage : void 0,
      replyTo: Array.isArray(body.replyTo) ? body.replyTo.filter((x2) => typeof x2 === "string") : void 0
    })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/verify-pending$/, async ({ params }) => s.verifyPending(params[0])],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/poll$/, async ({ params }) => ({ result: await s.pollNow(params[0]) ?? null })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/hear$/, async ({ body, params }) => {
      await s.hear(params[0], str(body.text, "text").slice(0, 500));
      return { ok: true };
    }],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/voice$/, async ({ body, params }) => ({ voice: await s.setVoiceConfig(params[0], {
      ...typeof body.enabled === "boolean" ? { enabled: body.enabled } : {},
      ...typeof body.autoConfirm === "boolean" ? { autoConfirm: body.autoConfirm } : {}
    }) })],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/device$/, async ({ params }) => ({ device: s.deviceConfig(params[0]) })],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/device$/, async ({ body, params }) => ({ device: await s.setDevice(params[0], body) })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/device\/test$/, async ({ params }) => s.testDevice(params[0])],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/device\/pair$/, async ({ body, params }) => ({ session: await s.pairDevice(params[0], str(body.code, "code")) })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/device\/unpair$/, async ({ params }) => {
      await s.unpairDevice(params[0]);
      return { ok: true };
    }],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/deliveries\/retry$/, async ({ params }) => s.retryDeliveries(params[0])],
    ["DELETE", /^\/api\/codies\/([0-9a-f]{16})\/deliveries$/, async ({ params }) => {
      await s.clearDeliveries(params[0]);
      return { ok: true };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/profile$/, async ({ params }) => ({ profile: await s.registryProfile(params[0]) })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/register$/, async ({ body, params }) => s.register(params[0], str(body.name, "name"))],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/registry-rename$/, async ({ body, params }) => s.registryRename(params[0], str(body.name, "name"))],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/propose-owner$/, async ({ body, params }) => s.proposeOwner(params[0], str(body.owner, "owner"))],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/release-owner$/, async ({ params }) => s.releaseAsCodie(params[0])],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/unregister$/, async ({ params }) => {
      await s.unregister(params[0]);
      return { ok: true };
    }],
    ["GET", /^\/api\/registry\/find$/, async ({ query }) => ({ profile: await s.findByName(query.get("name") ?? "") })],
    ["GET", /^\/api\/registry\/owner\/([a-z0-9-]+)$/, async ({ params }) => ({ codies: await s.codiesOfOwner(params[0]) })],
    ["GET", /^\/api\/registry\/stats$/, async () => s.registryStats()],
    ["GET", /^\/api\/shop$/, async () => s.shopConfig()],
    ["PUT", /^\/api\/shop$/, async ({ body }) => {
      await s.setShopConfig(body);
      return s.shopConfig();
    }],
    ["POST", /^\/api\/shop\/forget$/, async () => {
      await s.forgetBuyer();
      return { ok: true };
    }],
    ["GET", /^\/api\/shop\/shelf$/, async () => ({ shelf: await s.shopShelf() })],
    ["POST", /^\/api\/shop\/checkouts$/, async ({ body }) => ({ checkout: await s.shopCheckout(str(body.store, "store"), Array.isArray(body.lines) ? body.lines : [], typeof body.requestId === "string" ? body.requestId : void 0) })],
    ["GET", /^\/api\/shop\/checkouts\/([A-Za-z0-9_.-]+)$/, async ({ params }) => ({ checkout: await s.shopGetCheckout(params[0]) })],
    ["POST", /^\/api\/shop\/checkouts\/([A-Za-z0-9_.-]+)\/handoff$/, async ({ params }) => s.shopHandoff(params[0])],
    ["POST", /^\/api\/shop\/checkouts\/([A-Za-z0-9_.-]+)\/cancel$/, async ({ params }) => ({ checkout: await s.shopCancel(params[0]) })],
    ["GET", /^\/api\/shop\/orders$/, async () => ({ checkouts: await s.shopOrders() })],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/shop\/vendors$/, async ({ params }) => ({ vendors: await s.shopVendors(params[0]) })],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/shop\/vendors\/([A-Za-z0-9_.:-]+)$/, async ({ body, params }) => {
      await s.setShopVendorActive(params[0], params[1], body.active !== false);
      return { ok: true };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/wallet$/, async ({ params }) => s.walletBalances(params[0])],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/wallet\/send$/, async ({ body, params }) => s.sendToken(params[0], { ledger: str(body.ledger, "ledger"), to: str(body.to, "to"), amount: str(body.amount, "amount") })],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/notify$/, async ({ body, params }) => {
      const level = parseNotifyLevel(str(body.level, "level"));
      if (!level) throw new HttpError(400, "level must be off, chime or full");
      return { notify: await s.setNotify(params[0], level) };
    }],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/tool-token$/, async ({ params }) => s.grantToolToken(params[0])],
    ["DELETE", /^\/api\/codies\/([0-9a-f]{16})\/tool-token$/, async ({ params }) => {
      await s.revokeToolToken(params[0]);
      return { ok: true };
    }],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/mcp$/, async ({ body, params }) => {
      await s.setMcpWrites(params[0], body.writes === true);
      return { writes: s.mcpWritesAllowed(params[0]) };
    }],
    ["POST", /^\/api\/tokens$/, async ({ body }) => ({ token: { ...await s.addToken(str(body.canisterId, "canisterId")), fee: void 0 } })],
    ["DELETE", /^\/api\/tokens\/([a-z0-9-]+)$/, async ({ params }) => {
      await s.removeToken(params[0]);
      return { ok: true };
    }],
    ["GET", /^\/api\/contacts$/, async () => ({ contacts: s.contacts() })],
    ["POST", /^\/api\/contacts$/, async ({ body }) => ({ contact: await s.addContact({
      principal: str(body.principal, "principal"),
      label: str(body.label, "label"),
      note: typeof body.note === "string" ? body.note : void 0,
      favorite: typeof body.favorite === "boolean" ? body.favorite : void 0
    }) })],
    ["PUT", /^\/api\/contacts\/([a-z0-9-]+)$/, async ({ body, params }) => ({ contact: await s.updateContact(params[0], {
      label: typeof body.label === "string" ? body.label : void 0,
      note: typeof body.note === "string" ? body.note : void 0,
      favorite: typeof body.favorite === "boolean" ? body.favorite : void 0
    }) })],
    ["DELETE", /^\/api\/contacts\/([a-z0-9-]+)$/, async ({ params }) => {
      await s.removeContact(params[0]);
      return { ok: true };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/neurons$/, async ({ params, query }) => s.listNeurons(params[0], query.get("nns") ?? void 0)],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/neurons\/vote$/, async ({ body, params }) => s.voteNeuron(params[0], {
      scope: body.scope === "sns" ? "sns" : "nns",
      gov: typeof body.gov === "string" ? body.gov : void 0,
      neuronId: str(body.neuronId, "neuronId"),
      proposalId: str(body.proposalId, "proposalId"),
      vote: body.vote === "no" ? "no" : "yes"
    })],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/proposals$/, async ({ params }) => ({ groups: await s.neuronProposals(params[0]) })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/neurons\/follow$/, async ({ body, params }) => s.followNeuron(params[0], {
      scope: body.scope === "sns" ? "sns" : "nns",
      gov: typeof body.gov === "string" ? body.gov : void 0,
      neuronId: str(body.neuronId, "neuronId"),
      followee: typeof body.followee === "string" ? body.followee : "",
      topic: typeof body.topic === "number" ? body.topic : 0
    })],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/memory$/, async ({ params }) => ({ notes: s.memoryNotes(params[0]) })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/memory$/, async ({ body, params }) => ({ note: await s.memoryWrite(params[0], str(body.text, "text")) })],
    ["DELETE", /^\/api\/codies\/([0-9a-f]{16})\/memory\/([0-9a-f]{12})$/, async ({ params }) => {
      await s.memoryRemove(params[0], params[1]);
      return { ok: true };
    }],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/brain$/, async ({ body, params }) => {
      await s.setIdentityBrain(params[0], str(body.brain, "brain"));
      return { brain: s.identityBrain(params[0]) };
    }],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/autonomy$/, async ({ body, params }) => {
      const m2 = body.mode === "propose" ? "propose" : body.mode === "auto" ? "auto" : "off";
      await s.setIdentityAutonomy(params[0], m2);
      return { autonomy: s.identityAutonomy(params[0]) };
    }],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/auto-policy$/, async ({ body, params }) => {
      await s.setAutoPolicy(params[0], { allow: Array.isArray(body.allow) ? body.allow.map(String) : [], caps: body.caps && typeof body.caps === "object" ? body.caps : {} });
      return { autoPolicy: s.autoPolicy(params[0]) };
    }],
    ["GET", /^\/api\/codies\/([0-9a-f]{16})\/audit$/, async ({ params }) => ({ audit: s.auditLog(params[0]).slice(-100).reverse() })],
    ["PUT", /^\/api\/codies\/([0-9a-f]{16})\/device-hook$/, async ({ body, params }) => {
      await s.setDeviceHook(params[0], typeof body.url === "string" && body.url.trim() ? body.url : null, typeof body.auth === "string" ? body.auth : void 0);
      return { deviceHook: s.deviceHook(params[0])?.url ?? null };
    }],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/device-hook\/test$/, async ({ params }) => {
      await s.announceToHook(params[0], "Waifu AI", "This is a test announcement from your identity.");
      return { ok: true };
    }],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/proposals\/([0-9a-f]{12})\/(approve|dismiss)$/, async ({ params }) => s.resolveProposal(params[0], params[1], params[2] === "approve")],
    ["GET", /^\/api\/personas$/, async () => ({ personas: s.personaList() })],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/chat\/persona$/, async ({ body, params }) => s.chatPersona(params[0], str(body.persona, "persona"), str(body.text, "text"))],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/chat\/agent$/, async ({ body, params }) => {
      const hist = Array.isArray(body.history) ? body.history : [];
      const messages = hist.filter((m2) => m2 && typeof m2.content === "string").slice(-8).map((m2) => ({ role: m2.role === "assistant" ? "assistant" : "user", content: m2.content }));
      return s.chatAgent(params[0], typeof body.model === "string" ? body.model : "agent", str(body.text, "text"), messages);
    }],
    ["POST", /^\/api\/codies\/([0-9a-f]{16})\/chat\/agent\/confirm$/, async ({ body, params }) => s.chatAgentConfirm(params[0], str(body.token, "token"), body.approved === true)],
    ["GET", /^\/api\/llm$/, async () => s.llmConfig()],
    ["PUT", /^\/api\/llm\/(claude|gpt)$/, async ({ body, params }) => {
      await s.setLlmKey(params[0], typeof body.apiKey === "string" ? body.apiKey : null, typeof body.model === "string" ? body.model : void 0);
      return s.llmConfig();
    }],
    ["DELETE", /^\/api\/llm\/(claude|gpt)$/, async ({ params }) => {
      await s.setLlmKey(params[0], "");
      return s.llmConfig();
    }],
    ["GET", /^\/api\/directory$/, async ({ query }) => s.directory(Number(query.get("start") ?? "0") || 0, Number(query.get("limit") ?? "50") || 50)],
    ["GET", /^\/api\/directory\/find$/, async ({ query }) => ({ profile: await s.directoryFind(query.get("name") ?? "") ?? null })],
    ["POST", /^\/api\/sns$/, async ({ body }) => ({ dao: await s.addSnsDao(str(body.gov, "gov")) })],
    ["DELETE", /^\/api\/sns\/([a-z0-9-]+)$/, async ({ params }) => {
      await s.removeSnsDao(params[0]);
      return { ok: true };
    }]
  ];
}
function createHelperServer(d2) {
  const routes = buildRoutes(d2);
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://localhost");
      const isApi = url.pathname.startsWith("/api/");
      if (url.pathname === "/api/ping" && req.method === "GET") {
        const g4 = checkRequest({ host: req.headers.host, isApi: false }, d2.token, d2.port);
        if (!g4.ok) return send(res, g4.status, { error: g4.reason });
        return send(res, 200, { app: "code27-helper", version: VERSION });
      }
      if (url.pathname.startsWith("/codie/v1/")) {
        const g4 = checkToolRequest(req.headers.host, req.headers.origin, d2.port, !!d2.service.settings.lanTools, req.socket.remoteAddress ?? void 0);
        if (!g4.ok) return send(res, g4.status, { error: g4.reason });
        const auth = req.headers["authorization"];
        const bearer = typeof auth === "string" && auth.startsWith("Bearer ") ? auth.slice(7) : void 0;
        const codieId = d2.service.verifyToolToken(bearer);
        if (!codieId) return send(res, 401, { error: "invalid or missing tool token" });
        d2.service.noteToolCall(codieId);
        if (req.method === "GET" && url.pathname === "/codie/v1/tools") return send(res, 200, d2.service.toolManifest());
        if (req.method === "POST" && url.pathname === "/codie/v1/invoke") {
          const body = await readJson(req);
          const args2 = body.arguments && typeof body.arguments === "object" && !Array.isArray(body.arguments) ? body.arguments : {};
          const confirmToken = typeof body.confirmToken === "string" ? body.confirmToken : void 0;
          const tool = str(body.tool, "tool");
          d2.service.log.info(`tool invoke ${tool} for ${codieId}${confirmToken ? " (confirm)" : ""}`);
          return send(res, 200, await d2.service.invokeTool(codieId, tool, args2, { confirmToken }));
        }
        if (req.method === "POST" && url.pathname === "/codie/v1/say") {
          const body = await readJson(req);
          d2.service.log.info(`tool say for ${codieId}`);
          return send(res, 200, { speech: await d2.service.handleUtterance(codieId, str(body.text, "text").slice(0, 500)) });
        }
        return send(res, 404, { error: "not found" });
      }
      if (url.pathname === "/mcp" || url.pathname.startsWith("/mcp/")) {
        const g4 = checkToolRequest(req.headers.host, req.headers.origin, d2.port, !!d2.service.settings.lanTools, req.socket.remoteAddress ?? void 0);
        if (!g4.ok) return send(res, g4.status, { error: g4.reason });
        if (req.method !== "POST") return send(res, 405, { error: "POST only" });
        const auth = req.headers["authorization"];
        const bearer = typeof auth === "string" && auth.startsWith("Bearer ") ? auth.slice(7) : void 0;
        const identityId = d2.service.verifyToolToken(bearer);
        if (!identityId) return send(res, 401, { error: "invalid or missing MCP token" });
        const pathId = url.pathname.length > 5 ? url.pathname.slice(5) : "";
        if (pathId && pathId !== identityId) return send(res, 403, { error: "token does not match this identity" });
        d2.service.noteToolCall(identityId);
        const body = await readJson(req);
        const msgs = Array.isArray(body) ? body : [body];
        const results = [];
        for (const m2 of msgs) {
          const r2 = await handleMcp(d2.service, identityId, VERSION, m2);
          if (r2 !== void 0) results.push(r2);
        }
        if (!results.length) return send(res, 202, {});
        return send(res, 200, Array.isArray(body) ? results : results[0]);
      }
      const g3 = checkRequest(
        {
          host: req.headers.host,
          origin: req.headers.origin,
          token: req.headers["x-helper-token"],
          fetchSite: req.headers["sec-fetch-site"],
          isApi
        },
        d2.token,
        d2.port
      );
      if (!g3.ok) return send(res, g3.status, { error: g3.reason });
      const sm = url.pathname.match(/^\/api\/codies\/([0-9a-f]{16})\/chat\/stream(\/confirm)?$/);
      if (isApi && req.method === "POST" && sm) {
        const codieId = sm[1];
        const body = await readJson(req);
        d2.service.touch();
        res.writeHead(200, { "content-type": "text/event-stream; charset=utf-8", "cache-control": "no-cache", connection: "keep-alive", "x-content-type-options": "nosniff" });
        const emit = (e) => {
          try {
            res.write(`data: ${JSON.stringify(e)}

`);
          } catch {
          }
        };
        try {
          if (sm[2]) {
            await d2.service.chatAgentStreamConfirm(codieId, str(body.token, "token"), body.approved === true, emit);
          } else {
            const model = typeof body.model === "string" ? body.model : "agent";
            const text = str(body.text, "text");
            if (model === "agent" || model === "claude" || model === "gpt") {
              const hist = Array.isArray(body.history) ? body.history : [];
              const messages = hist.filter((m2) => m2 && typeof m2.content === "string").slice(-8).map((m2) => ({ role: m2.role === "assistant" ? "assistant" : "user", content: m2.content }));
              await d2.service.chatAgentStream(codieId, model, text, messages, emit);
            } else {
              await d2.service.chatPersonaStream(codieId, model, text, emit);
            }
          }
        } catch (e) {
          emit({ type: "error", message: e instanceof Error ? e.message : String(e) });
        }
        res.end();
        return;
      }
      if (isApi) {
        for (const [method, re, h2] of routes) {
          const m2 = re.exec(url.pathname);
          if (!m2 || method !== req.method) continue;
          d2.service.touch();
          const body = await readJson(req);
          const out = await h2({ body, params: m2.slice(1), query: url.searchParams });
          return send(res, 200, out);
        }
        return send(res, 404, { error: "not found" });
      }
      if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, { error: "method" });
      const rel = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
      const file = normalize(join3(d2.uiDir, rel));
      if (!file.startsWith(normalize(d2.uiDir + sep)) || rel.includes("\0")) return send(res, 404, { error: "not found" });
      const ext = extname(file);
      const type = MIME[ext];
      if (!type) return send(res, 404, { error: "not found" });
      let data;
      try {
        data = await readFile2(file);
      } catch {
        return send(res, 404, { error: "not found" });
      }
      res.writeHead(200, {
        "content-type": type,
        "cache-control": "no-store",
        "x-content-type-options": "nosniff",
        "referrer-policy": "no-referrer",
        "cross-origin-opener-policy": "unsafe-none",
        // II's window transport needs window.opener
        ...ext === ".html" ? { "content-security-policy": csp(d2.service) } : {}
      });
      res.end(req.method === "HEAD" ? void 0 : data);
    } catch (e) {
      if (e instanceof HttpError) return send(res, e.status, { error: e.message, ...e.extra });
      if (e instanceof SyntaxError) return send(res, 400, { error: "bad JSON" });
      d2.service.log.warn(`request failed: ${errorText(e)}`);
      return send(res, 502, { error: errorText(e) });
    }
  });
}

// src/server/main.ts
var args = process.argv.slice(2);
var noOpen = args.includes("--no-open") || process.env.CODE27_HELPER_NO_OPEN === "1";
var portArg = args.indexOf("--port");
var port = Number(portArg >= 0 ? args[portArg + 1] : process.env.CODE27_HELPER_PORT ?? HELPER_PORT);
var dir = dataDir();
await mkdir2(dir, { recursive: true, mode: 448 });
await sweepTempFiles(dir);
var logFile = join4(dir, "helper.log");
var instanceFile = join4(dir, "instance.json");
var log = {
  info: (m2) => write("INFO", m2),
  warn: (m2) => write("WARN", m2)
};
function write(level, m2) {
  const line = `${(/* @__PURE__ */ new Date()).toISOString()} ${level} ${m2}`;
  console.log(line);
  void appendFile(logFile, line + "\n").catch(() => void 0);
}
function urlFor(token2) {
  return `http://localhost:${port}/?t=${encodeURIComponent(token2)}`;
}
function findChromium() {
  if (process.platform === "win32") {
    const pf = process.env.ProgramFiles ?? "C:\\Program Files";
    const pf86 = process.env["ProgramFiles(x86)"] ?? "C:\\Program Files (x86)";
    const local = process.env.LOCALAPPDATA ?? "";
    return [
      `${pf86}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${pf}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${pf}\\Google\\Chrome\\Application\\chrome.exe`,
      `${pf86}\\Google\\Chrome\\Application\\chrome.exe`,
      local && `${local}\\Google\\Chrome\\Application\\chrome.exe`
    ].filter((p2) => !!p2).find((p2) => existsSync(p2));
  }
  if (process.platform === "darwin") {
    return ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"].find((p2) => existsSync(p2));
  }
  return void 0;
}
function openDefault(url) {
  if (process.platform === "win32") spawn("rundll32.exe", ["url.dll,FileProtocolHandler", url], { detached: true, stdio: "ignore", windowsHide: true }).unref();
  else if (process.platform === "darwin") spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
  else if (!process.env.WSL_DISTRO_NAME) spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).on("error", () => void 0).unref();
}
function openBrowser(url) {
  if (noOpen) return;
  try {
    const chromium = process.env.CODE27_NO_APP_WINDOW ? void 0 : findChromium();
    if (chromium) {
      const profile = join4(dir, "browser");
      spawn(
        chromium,
        [`--app=${url}`, `--user-data-dir=${profile}`, "--window-size=1180,860", "--no-first-run", "--no-default-browser-check"],
        { detached: true, stdio: "ignore", windowsHide: true }
      ).on("error", () => openDefault(url)).unref();
      return;
    }
    openDefault(url);
  } catch (e) {
    log.warn(`could not open a window: ${e.message}`);
  }
}
function ping() {
  return new Promise((resolve) => {
    const r2 = request3(
      { host: "127.0.0.1", port, path: "/api/ping", method: "GET", headers: { host: `127.0.0.1:${port}` }, timeout: 2e3 },
      (res) => {
        let s = "";
        res.on("data", (c2) => s += c2);
        res.on("end", () => {
          try {
            resolve(JSON.parse(s).app === "code27-helper");
          } catch {
            resolve(false);
          }
        });
      }
    );
    r2.on("error", () => resolve(false));
    r2.on("timeout", () => {
      r2.destroy();
      resolve(false);
    });
    r2.end();
  });
}
async function reopenExisting() {
  if (await ping()) {
    const inst = await readTextOrNull(instanceFile);
    const token2 = inst ? JSON.parse(inst).token : void 0;
    if (token2) {
      log.info("Waifu AI is already running; opening the browser.");
      openBrowser(urlFor(token2));
      process.exit(0);
    }
  }
  log.warn(`Port ${port} is in use by something that is not a Waifu AI. Close it and try again.`);
  process.exit(1);
}
var here = fileURLToPath(new URL(".", import.meta.url));
var uiDir = process.env.CODE27_HELPER_UI_DIR ?? (existsSync(join4(here, "ui")) ? join4(here, "ui") : join4(here, "..", "..", "dist", "ui"));
if (await ping()) await reopenExisting();
var token = newToken();
var service = new HelperService(dir, log, pairingDriverByName(process.env.CODE27_PAIRING_DRIVER));
await service.init();
var quitting = false;
async function quit(code = 0) {
  if (quitting) return;
  quitting = true;
  log.info("shutting down");
  service.stop();
  server.close();
  const inst = await readTextOrNull(instanceFile).catch(() => null);
  if (inst && JSON.parse(inst).pid === process.pid) await rm2(instanceFile, { force: true });
  setTimeout(() => process.exit(code), 300).unref();
}
var server = createHelperServer({ service, token, port, uiDir, onQuit: () => void quit(0) });
server.on("error", (e) => {
  if (e.code === "EADDRINUSE") void reopenExisting();
  else {
    log.warn(`server error: ${e.message}`);
    process.exit(1);
  }
});
var bindHost = service.settings.lanTools ? "0.0.0.0" : "127.0.0.1";
service.setLanBound(bindHost !== "127.0.0.1");
server.listen(port, bindHost, async () => {
  await writeFileAtomic(instanceFile, JSON.stringify({ pid: process.pid, port, token, startedAt: (/* @__PURE__ */ new Date()).toISOString(), version: VERSION }));
  log.info(`Waifu AI ${VERSION} on http://localhost:${port}${bindHost === "0.0.0.0" ? " (LAN tools ON \u2014 /codie/v1 reachable on this Wi-Fi)" : ""} (data: ${dir}, ui: ${uiDir})`);
  if (noOpen) console.log(`UI: ${urlFor(token)}`);
  openBrowser(urlFor(token));
});
process.on("SIGINT", () => void quit(0));
process.on("SIGTERM", () => void quit(0));
/*! For license information please see server.mjs.LEGAL.txt */
