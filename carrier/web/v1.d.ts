import * as jspb from "google-protobuf"

export class Vehicle extends jspb.Message {
  getVehicleId(): string;
  setVehicleId(value: string): void;

  getPersonId(): string;
  setPersonId(value: string): void;

  getKind(): Vehicle.VehicleKind;
  setKind(value: Vehicle.VehicleKind): void;

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
  static serializeBinaryToWriter(message: Vehicle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vehicle;
  static deserializeBinaryFromReader(message: Vehicle, reader: jspb.BinaryReader): Vehicle;
}

export namespace Vehicle {
  export type AsObject = {
    vehicleId: string,
    personId: string,
    kind: Vehicle.VehicleKind,
    brandId: string,
    modelId: string,
    color: string,
    licensePlate: string,
  }

  export enum VehicleKind { 
    MOTORCYCLE = 0,
    CAR = 1,
  }
}

export class AddVehicleRequest extends jspb.Message {
  getVehicle(): Vehicle | undefined;
  setVehicle(value?: Vehicle): void;
  hasVehicle(): boolean;
  clearVehicle(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddVehicleRequest): AddVehicleRequest.AsObject;
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
  static serializeBinaryToWriter(message: AddVehicleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVehicleResponse;
  static deserializeBinaryFromReader(message: AddVehicleResponse, reader: jspb.BinaryReader): AddVehicleResponse;
}

export namespace AddVehicleResponse {
  export type AsObject = {
    vehicleId: string,
  }
}

