/**
 * @fileoverview gRPC-Web generated client stub for identity.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.identity = {};
proto.identity.v1 = require('./v1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.identity.v1.SignUpServiceClient =
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
proto.identity.v1.SignUpServicePromiseClient =
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
 *   !proto.identity.v1.SignUpLeadRequest,
 *   !proto.identity.v1.SignUpResponse>}
 */
const methodDescriptor_SignUpService_SignUpLead = new grpc.web.MethodDescriptor(
  '/identity.v1.SignUpService/SignUpLead',
  grpc.web.MethodType.UNARY,
  proto.identity.v1.SignUpLeadRequest,
  proto.identity.v1.SignUpResponse,
  /** @param {!proto.identity.v1.SignUpLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.identity.v1.SignUpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.identity.v1.SignUpLeadRequest,
 *   !proto.identity.v1.SignUpResponse>}
 */
const methodInfo_SignUpService_SignUpLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.identity.v1.SignUpResponse,
  /** @param {!proto.identity.v1.SignUpLeadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.identity.v1.SignUpResponse.deserializeBinary
);


/**
 * @param {!proto.identity.v1.SignUpLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.identity.v1.SignUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.identity.v1.SignUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.identity.v1.SignUpServiceClient.prototype.signUpLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/identity.v1.SignUpService/SignUpLead',
      request,
      metadata || {},
      methodDescriptor_SignUpService_SignUpLead,
      callback);
};


/**
 * @param {!proto.identity.v1.SignUpLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.identity.v1.SignUpResponse>}
 *     A native promise that resolves to the response
 */
proto.identity.v1.SignUpServicePromiseClient.prototype.signUpLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/identity.v1.SignUpService/SignUpLead',
      request,
      metadata || {},
      methodDescriptor_SignUpService_SignUpLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.identity.v1.ValidateSignUpRequest,
 *   !proto.identity.v1.ValidateSignUpResponse>}
 */
const methodDescriptor_SignUpService_ValidateSignUp = new grpc.web.MethodDescriptor(
  '/identity.v1.SignUpService/ValidateSignUp',
  grpc.web.MethodType.UNARY,
  proto.identity.v1.ValidateSignUpRequest,
  proto.identity.v1.ValidateSignUpResponse,
  /** @param {!proto.identity.v1.ValidateSignUpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.identity.v1.ValidateSignUpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.identity.v1.ValidateSignUpRequest,
 *   !proto.identity.v1.ValidateSignUpResponse>}
 */
const methodInfo_SignUpService_ValidateSignUp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.identity.v1.ValidateSignUpResponse,
  /** @param {!proto.identity.v1.ValidateSignUpRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.identity.v1.ValidateSignUpResponse.deserializeBinary
);


/**
 * @param {!proto.identity.v1.ValidateSignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.identity.v1.ValidateSignUpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.identity.v1.ValidateSignUpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.identity.v1.SignUpServiceClient.prototype.validateSignUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/identity.v1.SignUpService/ValidateSignUp',
      request,
      metadata || {},
      methodDescriptor_SignUpService_ValidateSignUp,
      callback);
};


/**
 * @param {!proto.identity.v1.ValidateSignUpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.identity.v1.ValidateSignUpResponse>}
 *     A native promise that resolves to the response
 */
proto.identity.v1.SignUpServicePromiseClient.prototype.validateSignUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/identity.v1.SignUpService/ValidateSignUp',
      request,
      metadata || {},
      methodDescriptor_SignUpService_ValidateSignUp);
};


module.exports = proto.identity.v1;

