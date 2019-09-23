// package: document.v1.internal
// file: document/web/v1.internal.proto

var document_proto_v1_internal_pb = require("../../document/web/v1.internal");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DocumentAdminService = (function () {
  function DocumentAdminService() {}
  DocumentAdminService.serviceName = "document.v1.internal.DocumentAdminService";
  return DocumentAdminService;
}());

DocumentAdminService.setDocumentRule = {
  methodName: "setDocumentRule",
  service: DocumentAdminService,
  requestStream: false,
  responseStream: false,
  requestType: document_proto_v1_internal_pb.setDocumentRuleRequest,
  responseType: document_proto_v1_internal_pb.setDocumentRuleResponse
};

exports.DocumentAdminService = DocumentAdminService;

function DocumentAdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DocumentAdminServiceClient.prototype.setDocumentRule = function setDocumentRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DocumentAdminService.setDocumentRule, {
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

exports.DocumentAdminServiceClient = DocumentAdminServiceClient;

