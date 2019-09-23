// package: carrier.v1
// file: carrier/web/v1.proto

import * as jspb from "google-protobuf";

export class Vehicle extends jspb.Message {
  getVehicleId(): string;
  setVehicleId(value: string): void;

  getPersonId(): string;
  setPersonId(value: string): void;

  getKind(): Vehicle.VehicleKindMap[keyof Vehicle.VehicleKindMap];
  setKind(value: Vehicle.VehicleKindMap[keyof Vehicle.VehicleKindMap]): void;

  getBrandId(): string;
  setBrandId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  getColor(): string;
  setColor(value: string): void;

  getLicensePlate(): string;
  setLicensePlate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vehicle.AsObject;
  static toObject(includeInstance: boolean, msg: Vehicle): Vehicle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vehicle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vehicle;
  static deserializeBinaryFromReader(message: Vehicle, reader: jspb.BinaryReader): Vehicle;
}

export namespace Vehicle {
  export type AsObject = {
    vehicleId: string,
    personId: string,
    kind: Vehicle.VehicleKindMap[keyof Vehicle.VehicleKindMap],
    brandId: string,
    modelId: string,
    color: string,
    licensePlate: string,
  }

  export interface VehicleKindMap {
    MOTORCYCLE: 0;
    CAR: 1;
  }

  export const Vehiclekind: VehicleKindMap;
}

export class AddVehicleRequest extends jspb.Message {
  hasVehicle(): boolean;
  clearVehicle(): void;
  getVehicle(): Vehicle | undefined;
  setVehicle(value?: Vehicle): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddVehicleRequest): AddVehicleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddVehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVehicleRequest;
  static deserializeBinaryFromReader(message: AddVehicleRequest, reader: jspb.BinaryReader): AddVehicleRequest;
}

export namespace AddVehicleRequest {
  export type AsObject = {
    vehicle?: Vehicle.AsObject,
  }
}

export class AddVehicleResponse extends jspb.Message {
  getVehicleId(): string;
  setVehicleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVehicleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddVehicleResponse): AddVehicleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVehicleResponse;
  static deserializeBinaryFromReader(message: AddVehicleResponse, reader: jspb.BinaryReader): AddVehicleResponse;
}

export namespace AddVehicleResponse {
  export type AsObject = {
    vehicleId: string,
  }
}

