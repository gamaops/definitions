import * as grpcWeb from 'grpc-web';

import {
  AddVehicleRequest,
  AddVehicleResponse} from './v1';

export class CarrierServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addVehicle(
    request: AddVehicleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AddVehicleResponse) => void
  ): grpcWeb.ClientReadableStream<AddVehicleResponse>;

}

export class CarrierServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addVehicle(
    request: AddVehicleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AddVehicleResponse>;

}

