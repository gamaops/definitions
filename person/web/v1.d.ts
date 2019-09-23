// package: person.v1
// file: person/web/v1.proto

import * as jspb from "google-protobuf";

export class Lead extends jspb.Message {
  getLeadId(): string;
  setLeadId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCellphone(): string;
  setCellphone(value: string): void;

  getValidationChannel(): Lead.ValidationChannelMap[keyof Lead.ValidationChannelMap];
  setValidationChannel(value: Lead.ValidationChannelMap[keyof Lead.ValidationChannelMap]): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lead.AsObject;
  static toObject(includeInstance: boolean, msg: Lead): Lead.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Lead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lead;
  static deserializeBinaryFromReader(message: Lead, reader: jspb.BinaryReader): Lead;
}

export namespace Lead {
  export type AsObject = {
    leadId: string,
    name: string,
    email: string,
    cellphone: string,
    validationChannel: Lead.ValidationChannelMap[keyof Lead.ValidationChannelMap],
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
  }

  export interface ValidationChannelMap {
    email: 0;
    cellphone: 1;
  }

  export const validationChannel: ValidationChannelMap;
}

export class CreateLeadRequest extends jspb.Message {
  hasLead(): boolean;
  clearLead(): void;
  getLead(): Lead | undefined;
  setLead(value?: Lead): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLeadRequest): CreateLeadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLeadRequest;
  static deserializeBinaryFromReader(message: CreateLeadRequest, reader: jspb.BinaryReader): CreateLeadRequest;
}

export namespace CreateLeadRequest {
  export type AsObject = {
    lead?: Lead.AsObject,
  }
}

export class CreateLeadResponse extends jspb.Message {
  getLeadId(): string;
  setLeadId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLeadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLeadResponse): CreateLeadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLeadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLeadResponse;
  static deserializeBinaryFromReader(message: CreateLeadResponse, reader: jspb.BinaryReader): CreateLeadResponse;
}

export namespace CreateLeadResponse {
  export type AsObject = {
    leadId: string,
  }
}

export class VerifyLeadRequest extends jspb.Message {
  getLeadId(): string;
  setLeadId(value: string): void;

  getValidationCode(): string;
  setValidationCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyLeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyLeadRequest): VerifyLeadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyLeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyLeadRequest;
  static deserializeBinaryFromReader(message: VerifyLeadRequest, reader: jspb.BinaryReader): VerifyLeadRequest;
}

export namespace VerifyLeadRequest {
  export type AsObject = {
    leadId: string,
    validationCode: string,
  }
}

export class VerifyLeadResponse extends jspb.Message {
  getPersonId(): string;
  setPersonId(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyLeadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyLeadResponse): VerifyLeadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyLeadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyLeadResponse;
  static deserializeBinaryFromReader(message: VerifyLeadResponse, reader: jspb.BinaryReader): VerifyLeadResponse;
}

export namespace VerifyLeadResponse {
  export type AsObject = {
    personId: string,
    success: boolean,
  }
}

