// package: document.v1.internal
// file: document/web/v1.internal.proto

import * as document_proto_v1_internal_pb from "../../document/web/v1.internal";
import {grpc} from "@improbable-eng/grpc-web";

type DocumentAdminServiceSetDocumentRule = {
  readonly methodName: string;
  readonly service: typeof DocumentAdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof document_proto_v1_internal_pb.SetDocumentRuleRequest;
  readonly responseType: typeof document_proto_v1_internal_pb.SetDocumentRuleResponse;
};

export class DocumentAdminService {
  static readonly serviceName: string;
  static readonly SetDocumentRule: DocumentAdminServiceSetDocumentRule;
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

export class DocumentAdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setDocumentRule(
    requestMessage: document_proto_v1_internal_pb.SetDocumentRuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: document_proto_v1_internal_pb.SetDocumentRuleResponse|null) => void
  ): UnaryResponse;
  setDocumentRule(
    requestMessage: document_proto_v1_internal_pb.SetDocumentRuleRequest,
    callback: (error: ServiceError|null, responseMessage: document_proto_v1_internal_pb.SetDocumentRuleResponse|null) => void
  ): UnaryResponse;
}

