/**
 * @fileoverview gRPC-Web generated client stub for document.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var document_proto_kinds_pb = require('../../document/web/kinds')
const proto = {};
proto.document = {};
proto.document.v1 = require('./v1');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.document.v1.DocumentServiceClient =
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
proto.document.v1.DocumentServicePromiseClient =
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
 *   !proto.document.v1.AddDocumentRequest,
 *   !proto.document.v1.AddDocumentResponse>}
 */
const methodDescriptor_DocumentService_AddDocument = new grpc.web.MethodDescriptor(
  '/document.v1.DocumentService/AddDocument',
  grpc.web.MethodType.UNARY,
  proto.document.v1.AddDocumentRequest,
  proto.document.v1.AddDocumentResponse,
  /** @param {!proto.document.v1.AddDocumentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.document.v1.AddDocumentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.document.v1.AddDocumentRequest,
 *   !proto.document.v1.AddDocumentResponse>}
 */
const methodInfo_DocumentService_AddDocument = new grpc.web.AbstractClientBase.MethodInfo(
  proto.document.v1.AddDocumentResponse,
  /** @param {!proto.document.v1.AddDocumentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.document.v1.AddDocumentResponse.deserializeBinary
);


/**
 * @param {!proto.document.v1.AddDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.document.v1.AddDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.document.v1.AddDocumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.document.v1.DocumentServiceClient.prototype.addDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/document.v1.DocumentService/AddDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_AddDocument,
      callback);
};


/**
 * @param {!proto.document.v1.AddDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.document.v1.AddDocumentResponse>}
 *     A native promise that resolves to the response
 */
proto.document.v1.DocumentServicePromiseClient.prototype.addDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/document.v1.DocumentService/AddDocument',
      request,
      metadata || {},
      methodDescriptor_DocumentService_AddDocument);
};


module.exports = proto.document.v1;

