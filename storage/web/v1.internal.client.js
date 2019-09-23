// package: storage.v1.internal
// file: storage/web/v1.internal.proto

var storage_proto_v1_internal_pb = require("../../storage/web/v1.internal");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UploadAdminService = (function () {
  function UploadAdminService() {}
  UploadAdminService.serviceName = "storage.v1.internal.UploadAdminService";
  return UploadAdminService;
}());

UploadAdminService.SetUploadUrlRule = {
  methodName: "SetUploadUrlRule",
  service: UploadAdminService,
  requestStream: false,
  responseStream: false,
  requestType: storage_proto_v1_internal_pb.SetUploadUrlRuleRequest,
  responseType: storage_proto_v1_internal_pb.SetUploadUrlRuleResponse
};

exports.UploadAdminService = UploadAdminService;

function UploadAdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UploadAdminServiceClient.prototype.setUploadUrlRule = function setUploadUrlRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UploadAdminService.SetUploadUrlRule, {
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

exports.UploadAdminServiceClient = UploadAdminServiceClient;

