/**
 * @fileoverview gRPC-Web generated client stub for storage.v1.internal
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.storage = {};
proto.storage.v1 = {};
proto.storage.v1.internal = require('./v1.internal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.storage.v1.internal.UploadAdminServiceClient =
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
proto.storage.v1.internal.UploadAdminServicePromiseClient =
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
 *   !proto.storage.v1.internal.setUploadUrlRuleRequest,
 *   !proto.storage.v1.internal.setUploadUrlRuleResponse>}
 */
const methodDescriptor_UploadAdminService_setUploadUrlRule = new grpc.web.MethodDescriptor(
  '/storage.v1.internal.UploadAdminService/setUploadUrlRule',
  grpc.web.MethodType.UNARY,
  proto.storage.v1.internal.setUploadUrlRuleRequest,
  proto.storage.v1.internal.setUploadUrlRuleResponse,
  /** @param {!proto.storage.v1.internal.setUploadUrlRuleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.internal.setUploadUrlRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.v1.internal.setUploadUrlRuleRequest,
 *   !proto.storage.v1.internal.setUploadUrlRuleResponse>}
 */
const methodInfo_UploadAdminService_setUploadUrlRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.v1.internal.setUploadUrlRuleResponse,
  /** @param {!proto.storage.v1.internal.setUploadUrlRuleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.internal.setUploadUrlRuleResponse.deserializeBinary
);


/**
 * @param {!proto.storage.v1.internal.setUploadUrlRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.v1.internal.setUploadUrlRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.v1.internal.setUploadUrlRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.v1.internal.UploadAdminServiceClient.prototype.setUploadUrlRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.v1.internal.UploadAdminService/setUploadUrlRule',
      request,
      metadata || {},
      methodDescriptor_UploadAdminService_setUploadUrlRule,
      callback);
};


/**
 * @param {!proto.storage.v1.internal.setUploadUrlRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.v1.internal.setUploadUrlRuleResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.v1.internal.UploadAdminServicePromiseClient.prototype.setUploadUrlRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.v1.internal.UploadAdminService/setUploadUrlRule',
      request,
      metadata || {},
      methodDescriptor_UploadAdminService_setUploadUrlRule);
};


module.exports = proto.storage.v1.internal;

