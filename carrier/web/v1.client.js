/**
 * @fileoverview gRPC-Web generated client stub for carrier.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.carrier = {};
proto.carrier.v1 = require('./v1');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.carrier.v1.CarrierServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.carrier.v1.CarrierServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.carrier.v1.AddVehicleRequest,
 *   !proto.carrier.v1.AddVehicleResponse>}
 */
const methodDescriptor_CarrierService_AddVehicle = new grpc.web.MethodDescriptor(
  '/carrier.v1.CarrierService/AddVehicle',
  grpc.web.MethodType.UNARY,
  proto.carrier.v1.AddVehicleRequest,
  proto.carrier.v1.AddVehicleResponse,
  /** @param {!proto.carrier.v1.AddVehicleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.carrier.v1.AddVehicleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.carrier.v1.AddVehicleRequest,
 *   !proto.carrier.v1.AddVehicleResponse>}
 */
const methodInfo_CarrierService_AddVehicle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.carrier.v1.AddVehicleResponse,
  /** @param {!proto.carrier.v1.AddVehicleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.carrier.v1.AddVehicleResponse.deserializeBinary
);


/**
 * @param {!proto.carrier.v1.AddVehicleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.carrier.v1.AddVehicleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.carrier.v1.AddVehicleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.carrier.v1.CarrierServiceClient.prototype.addVehicle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/carrier.v1.CarrierService/AddVehicle',
      request,
      metadata || {},
      methodDescriptor_CarrierService_AddVehicle,
      callback);
};


/**
 * @param {!proto.carrier.v1.AddVehicleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.carrier.v1.AddVehicleResponse>}
 *     A native promise that resolves to the response
 */
proto.carrier.v1.CarrierServicePromiseClient.prototype.addVehicle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/carrier.v1.CarrierService/AddVehicle',
      request,
      metadata || {},
      methodDescriptor_CarrierService_AddVehicle);
};


module.exports = proto.carrier.v1;

