import * as jspb from "google-protobuf"

export class BraCpf extends jspb.Message {
  getCpf(): string;
  setCpf(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BraCpf.AsObject;
  static toObject(includeInstance: boolean, msg: BraCpf): BraCpf.AsObject;
  static serializeBinaryToWriter(message: BraCpf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BraCpf;
  static deserializeBinaryFromReader(message: BraCpf, reader: jspb.BinaryReader): BraCpf;
}

export namespace BraCpf {
  export type AsObject = {
    cpf: string,
  }
}

export class BraCnh extends jspb.Message {
  getCnh(): string;
  setCnh(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BraCnh.AsObject;
  static toObject(includeInstance: boolean, msg: BraCnh): BraCnh.AsObject;
  static serializeBinaryToWriter(message: BraCnh, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BraCnh;
  static deserializeBinaryFromReader(message: BraCnh, reader: jspb.BinaryReader): BraCnh;
}

export namespace BraCnh {
  export type AsObject = {
    cnh: string,
  }
}

