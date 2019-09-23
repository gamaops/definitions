// package: identity.v1
// file: identity/web/v1.proto

var identity_proto_v1_pb = require("../../identity/web/v1");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SignUpService = (function () {
  function SignUpService() {}
  SignUpService.serviceName = "identity.v1.SignUpService";
  return SignUpService;
}());

SignUpService.SignUpLead = {
  methodname: "SignUpLead",
  service: SignUpService,
  requestStream: false,
  responseStream: false,
  requestType: identity_proto_v1_pb.SignUpLeadRequest,
  responseType: identity_proto_v1_pb.SignUpResponse
};

SignUpService.ValidateSignUp = {
  methodname: "ValidateSignUp",
  service: SignUpService,
  requestStream: false,
  responseStream: false,
  requestType: identity_proto_v1_pb.ValidateSignUpRequest,
  responseType: identity_proto_v1_pb.ValidateSignUpResponse
};

exports.SignUpService = SignUpService;

function SignUpServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SignUpServiceClient.prototype.signUpLead = function signUpLead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SignUpService.SignUpLead, {
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

SignUpServiceClient.prototype.validateSignUp = function validateSignUp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SignUpService.ValidateSignUp, {
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

exports.SignUpServiceClient = SignUpServiceClient;

