// package: document.v1
// file: document/web/v1.proto

import * as document_proto_v1_pb from "../../document/web/v1";
import {grpc} from "@improbable-eng/grpc-web";

type DocumentServiceAddDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof document_proto_v1_pb.AddDocumentRequest;
  readonly responseType: typeof document_proto_v1_pb.AddDocumentResponse;
};

export class DocumentService {
  static readonly serviceName: string;
  static readonly AddDocument: DocumentServiceAddDocument;
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

export class DocumentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addDocument(
    requestMessage: document_proto_v1_pb.AddDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: document_proto_v1_pb.AddDocumentResponse|null) => void
  ): UnaryResponse;
  addDocument(
    requestMessage: document_proto_v1_pb.AddDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: document_proto_v1_pb.AddDocumentResponse|null) => void
  ): UnaryResponse;
}

