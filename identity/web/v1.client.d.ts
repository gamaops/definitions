// package: identity.v1
// file: identity/web/v1.proto

import * as identity_proto_v1_pb from "../../identity/web/v1";
import {grpc} from "@improbable-eng/grpc-web";

type SignUpServiceSignUpLead = {
  readonly methodName: string;
  readonly service: typeof SignUpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof identity_proto_v1_pb.SignUpLeadRequest;
  readonly responseType: typeof identity_proto_v1_pb.SignUpResponse;
};

type SignUpServiceValidateSignUp = {
  readonly methodName: string;
  readonly service: typeof SignUpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof identity_proto_v1_pb.ValidateSignUpRequest;
  readonly responseType: typeof identity_proto_v1_pb.ValidateSignUpResponse;
};

export class SignUpService {
  static readonly serviceName: string;
  static readonly SignUpLead: SignUpServiceSignUpLead;
  static readonly ValidateSignUp: SignUpServiceValidateSignUp;
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

export class SignUpServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signUpLead(
    requestMessage: identity_proto_v1_pb.SignUpLeadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: identity_proto_v1_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  signUpLead(
    requestMessage: identity_proto_v1_pb.SignUpLeadRequest,
    callback: (error: ServiceError|null, responseMessage: identity_proto_v1_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  validateSignUp(
    requestMessage: identity_proto_v1_pb.ValidateSignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: identity_proto_v1_pb.ValidateSignUpResponse|null) => void
  ): UnaryResponse;
  validateSignUp(
    requestMessage: identity_proto_v1_pb.ValidateSignUpRequest,
    callback: (error: ServiceError|null, responseMessage: identity_proto_v1_pb.ValidateSignUpResponse|null) => void
  ): UnaryResponse;
}

