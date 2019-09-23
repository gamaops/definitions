// package: person.v1
// file: person/web/v1.proto

var person_proto_v1_pb = require("../../person/web/v1");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PersonService = (function () {
  function PersonService() {}
  PersonService.serviceName = "person.v1.PersonService";
  return PersonService;
}());

PersonService.CreateLead = {
  methodName: "CreateLead",
  service: PersonService,
  requestStream: false,
  responseStream: false,
  requestType: person_proto_v1_pb.CreateLeadRequest,
  responseType: person_proto_v1_pb.CreateLeadResponse
};

PersonService.VerifyLead = {
  methodName: "VerifyLead",
  service: PersonService,
  requestStream: false,
  responseStream: false,
  requestType: person_proto_v1_pb.VerifyLeadRequest,
  responseType: person_proto_v1_pb.VerifyLeadResponse
};

exports.PersonService = PersonService;

function PersonServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PersonServiceClient.prototype.createLead = function createLead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PersonService.CreateLead, {
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

PersonServiceClient.prototype.verifyLead = function verifyLead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PersonService.VerifyLead, {
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

exports.PersonServiceClient = PersonServiceClient;

