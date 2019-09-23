/**
 * @fileoverview gRPC-Web generated client stub for storage.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.storage = {};
proto.storage.v1 = require('./v1');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.storage.v1.UploadServiceClient =
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
proto.storage.v1.UploadServicePromiseClient =
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
 *   !proto.storage.v1.CreateUploadUrlRequest,
 *   !proto.storage.v1.CreateUploadUrlResponse>}
 */
const methodDescriptor_UploadService_CreateUploadUrl = new grpc.web.MethodDescriptor(
  '/storage.v1.UploadService/CreateUploadUrl',
  grpc.web.MethodType.UNARY,
  proto.storage.v1.CreateUploadUrlRequest,
  proto.storage.v1.CreateUploadUrlResponse,
  /** @param {!proto.storage.v1.CreateUploadUrlRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.CreateUploadUrlResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.v1.CreateUploadUrlRequest,
 *   !proto.storage.v1.CreateUploadUrlResponse>}
 */
const methodInfo_UploadService_CreateUploadUrl = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.v1.CreateUploadUrlResponse,
  /** @param {!proto.storage.v1.CreateUploadUrlRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.CreateUploadUrlResponse.deserializeBinary
);


/**
 * @param {!proto.storage.v1.CreateUploadUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.v1.CreateUploadUrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.v1.CreateUploadUrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.v1.UploadServiceClient.prototype.createUploadUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.v1.UploadService/CreateUploadUrl',
      request,
      metadata || {},
      methodDescriptor_UploadService_CreateUploadUrl,
      callback);
};


/**
 * @param {!proto.storage.v1.CreateUploadUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.v1.CreateUploadUrlResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.v1.UploadServicePromiseClient.prototype.createUploadUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.v1.UploadService/CreateUploadUrl',
      request,
      metadata || {},
      methodDescriptor_UploadService_CreateUploadUrl);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.storage.v1.StorageServiceClient =
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
proto.storage.v1.StorageServicePromiseClient =
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
 *   !proto.storage.v1.CreateBucketRequest,
 *   !proto.storage.v1.CreateBucketResponse>}
 */
const methodDescriptor_StorageService_CreateBucket = new grpc.web.MethodDescriptor(
  '/storage.v1.StorageService/CreateBucket',
  grpc.web.MethodType.UNARY,
  proto.storage.v1.CreateBucketRequest,
  proto.storage.v1.CreateBucketResponse,
  /** @param {!proto.storage.v1.CreateBucketRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.CreateBucketResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.v1.CreateBucketRequest,
 *   !proto.storage.v1.CreateBucketResponse>}
 */
const methodInfo_StorageService_CreateBucket = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.v1.CreateBucketResponse,
  /** @param {!proto.storage.v1.CreateBucketRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.v1.CreateBucketResponse.deserializeBinary
);


/**
 * @param {!proto.storage.v1.CreateBucketRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.v1.CreateBucketResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.v1.CreateBucketResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.v1.StorageServiceClient.prototype.createBucket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.v1.StorageService/CreateBucket',
      request,
      metadata || {},
      methodDescriptor_StorageService_CreateBucket,
      callback);
};


/**
 * @param {!proto.storage.v1.CreateBucketRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.v1.CreateBucketResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.v1.StorageServicePromiseClient.prototype.createBucket =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.v1.StorageService/CreateBucket',
      request,
      metadata || {},
      methodDescriptor_StorageService_CreateBucket);
};


module.exports = proto.storage.v1;

