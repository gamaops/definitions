/**
 * @fileoverview gRPC-Web generated client stub for person.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.person = {};
proto.person.v1 = require('./v1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.person.v1.PersonServiceClient =
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
proto.person.v1.PersonServicePromiseClient =
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
 *   !proto.person.v1.CreateLeadRequest,
 *   !proto.person.v1.CreateLeadResponse>}
 */
const methodDescriptor_PersonService_CreateLead = new grpc.web.MethodDescriptor(
  '/person.v1.PersonService/CreateLead',
  grpc.web.MethodType.UNARY,
  proto.person.v1.CreateLeadRequest,
  proto.person.v1.CreateLeadResponse,
  /** @param {!proto.person.v1.CreateLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.person.v1.CreateLeadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.person.v1.CreateLeadRequest,
 *   !proto.person.v1.CreateLeadResponse>}
 */
const methodInfo_PersonService_CreateLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.person.v1.CreateLeadResponse,
  /** @param {!proto.person.v1.CreateLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.person.v1.CreateLeadResponse.deserializeBinary
);


/**
 * @param {!proto.person.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.person.v1.CreateLeadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.person.v1.CreateLeadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.person.v1.PersonServiceClient.prototype.createLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/person.v1.PersonService/CreateLead',
      request,
      metadata || {},
      methodDescriptor_PersonService_CreateLead,
      callback);
};


/**
 * @param {!proto.person.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.person.v1.CreateLeadResponse>}
 *     A native promise that resolves to the response
 */
proto.person.v1.PersonServicePromiseClient.prototype.createLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/person.v1.PersonService/CreateLead',
      request,
      metadata || {},
      methodDescriptor_PersonService_CreateLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.person.v1.VerifyLeadRequest,
 *   !proto.person.v1.VerifyLeadResponse>}
 */
const methodDescriptor_PersonService_VerifyLead = new grpc.web.MethodDescriptor(
  '/person.v1.PersonService/VerifyLead',
  grpc.web.MethodType.UNARY,
  proto.person.v1.VerifyLeadRequest,
  proto.person.v1.VerifyLeadResponse,
  /** @param {!proto.person.v1.VerifyLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.person.v1.VerifyLeadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.person.v1.VerifyLeadRequest,
 *   !proto.person.v1.VerifyLeadResponse>}
 */
const methodInfo_PersonService_VerifyLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.person.v1.VerifyLeadResponse,
  /** @param {!proto.person.v1.VerifyLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.person.v1.VerifyLeadResponse.deserializeBinary
);


/**
 * @param {!proto.person.v1.VerifyLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.person.v1.VerifyLeadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.person.v1.VerifyLeadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.person.v1.PersonServiceClient.prototype.verifyLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/person.v1.PersonService/VerifyLead',
      request,
      metadata || {},
      methodDescriptor_PersonService_VerifyLead,
      callback);
};


/**
 * @param {!proto.person.v1.VerifyLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.person.v1.VerifyLeadResponse>}
 *     A native promise that resolves to the response
 */
proto.person.v1.PersonServicePromiseClient.prototype.verifyLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/person.v1.PersonService/VerifyLead',
      request,
      metadata || {},
      methodDescriptor_PersonService_VerifyLead);
};


module.exports = proto.person.v1;

