// package: storage.v1
// file: storage/web/v1.proto

import * as storage_proto_v1_pb from "../../storage/web/v1";
import {grpc} from "@improbable-eng/grpc-web";

type UploadServiceCreateUploadUrl = {
  readonly methodName: string;
  readonly service: typeof UploadService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_proto_v1_pb.CreateUploadUrlRequest;
  readonly responseType: typeof storage_proto_v1_pb.CreateUploadUrlResponse;
};

export class UploadService {
  static readonly serviceName: string;
  static readonly CreateUploadUrl: UploadServiceCreateUploadUrl;
}

type StorageServiceCreateBucket = {
  readonly methodName: string;
  readonly service: typeof StorageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_proto_v1_pb.CreateBucketRequest;
  readonly responseType: typeof storage_proto_v1_pb.CreateBucketResponse;
};

export class StorageService {
  static readonly serviceName: string;
  static readonly CreateBucket: StorageServiceCreateBucket;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UploadServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createUploadUrl(
    requestMessage: storage_proto_v1_pb.CreateUploadUrlRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_pb.CreateUploadUrlResponse|null) => void
  ): UnaryResponse;
  createUploadUrl(
    requestMessage: storage_proto_v1_pb.CreateUploadUrlRequest,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_pb.CreateUploadUrlResponse|null) => void
  ): UnaryResponse;
}

export class StorageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createBucket(
    requestMessage: storage_proto_v1_pb.CreateBucketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_pb.CreateBucketResponse|null) => void
  ): UnaryResponse;
  createBucket(
    requestMessage: storage_proto_v1_pb.CreateBucketRequest,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_pb.CreateBucketResponse|null) => void
  ): UnaryResponse;
}

