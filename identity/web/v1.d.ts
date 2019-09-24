// package: identity.v1
// file: identity/web/v1.proto

import * as jspb from "google-protobuf";

export class SignUpLead extends jspb.Message {
  getSignUpId(): string;
  setSignUpId(value: string): void;

  getValidationChannel(): ValidationChannelMap[keyof ValidationChannelMap];
  setValidationChannel(value: ValidationChannelMap[keyof ValidationChannelMap]): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCellphone(): string;
  setCellphone(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  getSignedUpAt(): string;
  setSignedUpAt(value: string): void;

  getSignedUpJobId(): string;
  setSignedUpJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpLead.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpLead): SignUpLead.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpLead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpLead;
  static deserializeBinaryFromReader(message: SignUpLead, reader: jspb.BinaryReader): SignUpLead;
}

export namespace SignUpLead {
  export type AsObject = {
    signUpId: string,
    validationChannel: ValidationChannelMap[keyof ValidationChannelMap],
    name: string,
    email: string,
    cellphone: string,
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
    signedUpAt: string,
    signedUpJobId: string,
  }
}

export class SignUpLeadRequest extends jspb.Message {
  hasSignUpLead(): boolean;
  clearSignUpLead(): void;
  getSignUpLead(): SignUpLead | undefined;
  setSignUpLead(value?: SignUpLead): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpLeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpLeadRequest): SignUpLeadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpLeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpLeadRequest;
  static deserializeBinaryFromReader(message: SignUpLeadRequest, reader: jspb.BinaryReader): SignUpLeadRequest;
}

export namespace SignUpLeadRequest {
  export type AsObject = {
    signuplead?: SignUpLead.AsObject,
  }
}

export class SignUpResponse extends jspb.Message {
  getSignUpId(): string;
  setSignUpId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpResponse;
  static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
  export type AsObject = {
    signUpId: string,
  }
}

export class ValidateSignUpRequest extends jspb.Message {
  getSignUpId(): string;
  setSignUpId(value: string): void;

  getValidationCode(): string;
  setValidationCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateSignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateSignUpRequest): ValidateSignUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateSignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateSignUpRequest;
  static deserializeBinaryFromReader(message: ValidateSignUpRequest, reader: jspb.BinaryReader): ValidateSignUpRequest;
}

export namespace ValidateSignUpRequest {
  export type AsObject = {
    signUpId: string,
    validationCode: string,
  }
}

export class ValidateSignUpResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getIdentityToken(): string;
  setIdentityToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateSignUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateSignUpResponse): ValidateSignUpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateSignUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateSignUpResponse;
  static deserializeBinaryFromReader(message: ValidateSignUpResponse, reader: jspb.BinaryReader): ValidateSignUpResponse;
}

export namespace ValidateSignUpResponse {
  export type AsObject = {
    success: boolean,
    identityToken: string,
  }
}

export interface ValidationChannelMap {
  email: 0;
  cellphone: 1;
}

export const validationChannel: ValidationChannelMap;

