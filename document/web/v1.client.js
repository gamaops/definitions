// package: document.v1
// file: document/web/v1.proto

var document_proto_v1_pb = require("../../document/web/v1");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DocumentService = (function () {
  function DocumentService() {}
  DocumentService.serviceName = "document.v1.DocumentService";
  return DocumentService;
}());

DocumentService.AddDocument = {
  methodName: "AddDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: document_proto_v1_pb.AddDocumentRequest,
  responseType: document_proto_v1_pb.AddDocumentResponse
};

exports.DocumentService = DocumentService;

function DocumentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DocumentServiceClient.prototype.addDocument = function addDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DocumentService.AddDocument, {
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

exports.DocumentServiceClient = DocumentServiceClient;

