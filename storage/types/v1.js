"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileProcessor;
(function (FileProcessor) {
    FileProcessor[FileProcessor["NONE"] = 0] = "NONE";
    FileProcessor[FileProcessor["DOCUMENT"] = 1] = "DOCUMENT";
})(FileProcessor = exports.FileProcessor || (exports.FileProcessor = {}));
var Status;
(function (Status) {
    Status[Status["STORED"] = 0] = "STORED";
    Status[Status["UPLOADING"] = 1] = "UPLOADING";
    Status[Status["FAILED"] = 2] = "FAILED";
})(Status = exports.Status || (exports.Status = {}));
