// package: carrier.v1
// file: carrier/web/v1.proto

import * as carrier_proto_v1_pb from "../../carrier/web/v1";
import {grpc} from "@improbable-eng/grpc-web";

type CarrierServiceAddVehicle = {
  readonly methodName: string;
  readonly service: typeof CarrierService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof carrier_proto_v1_pb.AddVehicleRequest;
  readonly responseType: typeof carrier_proto_v1_pb.AddVehicleResponse;
};

export class CarrierService {
  static readonly serviceName: string;
  static readonly Addvehicle: CarrierServiceAddVehicle;
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

export class CarrierServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addVehicle(
    requestMessage: carrier_proto_v1_pb.AddVehicleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: carrier_proto_v1_pb.AddVehicleResponse|null) => void
  ): UnaryResponse;
  addVehicle(
    requestMessage: carrier_proto_v1_pb.AddVehicleRequest,
    callback: (error: ServiceError|null, responseMessage: carrier_proto_v1_pb.AddVehicleResponse|null) => void
  ): UnaryResponse;
}

