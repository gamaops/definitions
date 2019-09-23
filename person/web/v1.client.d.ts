// package: person.v1
// file: person/web/v1.proto

import * as person_proto_v1_pb from "../../person/web/v1";
import {grpc} from "@improbable-eng/grpc-web";

type PersonServiceCreateLead = {
  readonly methodName: string;
  readonly service: typeof PersonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof person_proto_v1_pb.CreateLeadRequest;
  readonly responseType: typeof person_proto_v1_pb.CreateLeadResponse;
};

type PersonServiceVerifyLead = {
  readonly methodName: string;
  readonly service: typeof PersonService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof person_proto_v1_pb.VerifyLeadRequest;
  readonly responseType: typeof person_proto_v1_pb.VerifyLeadResponse;
};

export class PersonService {
  static readonly serviceName: string;
  static readonly CreateLead: PersonServiceCreateLead;
  static readonly VerifyLead: PersonServiceVerifyLead;
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

export class PersonServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLead(
    requestMessage: person_proto_v1_pb.CreateLeadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: person_proto_v1_pb.CreateLeadResponse|null) => void
  ): UnaryResponse;
  createLead(
    requestMessage: person_proto_v1_pb.CreateLeadRequest,
    callback: (error: ServiceError|null, responseMessage: person_proto_v1_pb.CreateLeadResponse|null) => void
  ): UnaryResponse;
  verifyLead(
    requestMessage: person_proto_v1_pb.VerifyLeadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: person_proto_v1_pb.VerifyLeadResponse|null) => void
  ): UnaryResponse;
  verifyLead(
    requestMessage: person_proto_v1_pb.VerifyLeadRequest,
    callback: (error: ServiceError|null, responseMessage: person_proto_v1_pb.VerifyLeadResponse|null) => void
  ): UnaryResponse;
}

