/**
 * @fileoverview gRPC-Web generated client stub for document.v1.internal
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.document = {};
proto.document.v1 = {};
proto.document.v1.internal = require('./v1.internal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.document.v1.internal.DocumentAdminServiceClient =
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
proto.document.v1.internal.DocumentAdminServicePromiseClient =
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
 *   !proto.document.v1.internal.setDocumentRuleRequest,
 *   !proto.document.v1.internal.setDocumentRuleResponse>}
 */
const methodDescriptor_DocumentAdminService_setDocumentRule = new grpc.web.MethodDescriptor(
  '/document.v1.internal.DocumentAdminService/setDocumentRule',
  grpc.web.MethodType.UNARY,
  proto.document.v1.internal.setDocumentRuleRequest,
  proto.document.v1.internal.setDocumentRuleResponse,
  /** @param {!proto.document.v1.internal.setDocumentRuleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.document.v1.internal.setDocumentRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.document.v1.internal.setDocumentRuleRequest,
 *   !proto.document.v1.internal.setDocumentRuleResponse>}
 */
const methodInfo_DocumentAdminService_setDocumentRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.document.v1.internal.setDocumentRuleResponse,
  /** @param {!proto.document.v1.internal.setDocumentRuleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.document.v1.internal.setDocumentRuleResponse.deserializeBinary
);


/**
 * @param {!proto.document.v1.internal.setDocumentRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.document.v1.internal.setDocumentRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.document.v1.internal.setDocumentRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.document.v1.internal.DocumentAdminServiceClient.prototype.setDocumentRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/document.v1.internal.DocumentAdminService/setDocumentRule',
      request,
      metadata || {},
      methodDescriptor_DocumentAdminService_setDocumentRule,
      callback);
};


/**
 * @param {!proto.document.v1.internal.setDocumentRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.document.v1.internal.setDocumentRuleResponse>}
 *     A native promise that resolves to the response
 */
proto.document.v1.internal.DocumentAdminServicePromiseClient.prototype.setDocumentRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/document.v1.internal.DocumentAdminService/setDocumentRule',
      request,
      metadata || {},
      methodDescriptor_DocumentAdminService_setDocumentRule);
};


module.exports = proto.document.v1.internal;

