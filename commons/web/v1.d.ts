// package: commons.v1
// file: commons/web/v1.proto

import * as jspb from "google-protobuf";

export class OperationsDates extends jspb.Message {
  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsDates.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsDates): OperationsDates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationsDates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsDates;
  static deserializeBinaryFromReader(message: OperationsDates, reader: jspb.BinaryReader): OperationsDates;
}

export namespace OperationsDates {
  export type AsObject = {
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
  }
}

