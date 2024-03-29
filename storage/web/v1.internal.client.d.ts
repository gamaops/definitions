// package: storage.v1.internal
// file: storage/web/v1.internal.proto

import * as storage_proto_v1_internal_pb from "../../storage/web/v1.internal";
import {grpc} from "@improbable-eng/grpc-web";

type UploadAdminServiceSetUploadUrlRule = {
  readonly methodName: string;
  readonly service: typeof UploadAdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_proto_v1_internal_pb.SetUploadUrlRuleRequest;
  readonly responseType: typeof storage_proto_v1_internal_pb.SetUploadUrlRuleResponse;
};

export class UploadAdminService {
  static readonly serviceName: string;
  static readonly SetUploadUrlRule: UploadAdminServiceSetUploadUrlRule;
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

export class UploadAdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setUploadUrlRule(
    requestMessage: storage_proto_v1_internal_pb.SetUploadUrlRuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_internal_pb.SetUploadUrlRuleResponse|null) => void
  ): UnaryResponse;
  setUploadUrlRule(
    requestMessage: storage_proto_v1_internal_pb.SetUploadUrlRuleRequest,
    callback: (error: ServiceError|null, responseMessage: storage_proto_v1_internal_pb.SetUploadUrlRuleResponse|null) => void
  ): UnaryResponse;
}

