// package: storage.v1
// file: storage/web/v1.proto

var storage_proto_v1_pb = require("../../storage/web/v1");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UploadService = (function () {
  function UploadService() {}
  UploadService.serviceName = "storage.v1.UploadService";
  return UploadService;
}());

UploadService.CreateUploadUrl = {
  methodname: "CreateUploadUrl",
  service: UploadService,
  requestStream: false,
  responseStream: false,
  requestType: storage_proto_v1_pb.CreateUploadUrlRequest,
  responseType: storage_proto_v1_pb.CreateUploadUrlResponse
};

exports.UploadService = UploadService;

function UploadServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UploadServiceClient.prototype.createUploadUrl = function createUploadUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UploadService.CreateUploadUrl, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.UploadServiceClient = UploadServiceClient;

var StorageService = (function () {
  function StorageService() {}
  StorageService.serviceName = "storage.v1.StorageService";
  return StorageService;
}());

StorageService.CreateBucket = {
  methodname: "CreateBucket",
  service: StorageService,
  requestStream: false,
  responseStream: false,
  requestType: storage_proto_v1_pb.CreateBucketRequest,
  responseType: storage_proto_v1_pb.CreateBucketResponse
};

exports.StorageService = StorageService;

function StorageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StorageServiceClient.prototype.createBucket = function createBucket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StorageService.CreateBucket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.StorageServiceClient = StorageServiceClient;

