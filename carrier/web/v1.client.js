// package: carrier.v1
// file: carrier/web/v1.proto

var carrier_proto_v1_pb = require("../../carrier/web/v1");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CarrierService = (function () {
  function CarrierService() {}
  CarrierService.serviceName = "carrier.v1.CarrierService";
  return CarrierService;
}());

CarrierService.AddVehicle = {
  methodName: "AddVehicle",
  service: CarrierService,
  requestStream: false,
  responseStream: false,
  requestType: carrier_proto_v1_pb.AddVehicleRequest,
  responseType: carrier_proto_v1_pb.AddVehicleResponse
};

exports.CarrierService = CarrierService;

function CarrierServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CarrierServiceClient.prototype.addVehicle = function addVehicle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CarrierService.AddVehicle, {
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

exports.CarrierServiceClient = CarrierServiceClient;

