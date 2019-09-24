// package: storage.v1.internal
// file: storage/web/v1.internal.proto

import * as jspb from "google-protobuf";

export class UploadUrlRule extends jspb.Message {
  getAudience(): string;
  setAudience(value: string): void;

  hasLimits(): boolean;
  clearLimits(): void;
  getLimits(): UploadUrlRule.Limits | undefined;
  setLimits(value?: UploadUrlRule.Limits): void;

  getBucketId(): string;
  setBucketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadUrlRule.AsObject;
  static toObject(includeInstance: boolean, msg: UploadUrlRule): UploadUrlRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadUrlRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadUrlRule;
  static deserializeBinaryFromReader(message: UploadUrlRule, reader: jspb.BinaryReader): UploadUrlRule;
}

export namespace UploadUrlRule {
  export type AsObject = {
    audience: string,
    limits?: UploadUrlRule.Limits.AsObject,
    bucketId: string,
  }

  export class Limits extends jspb.Message {
    getMaxFileCount(): number;
    setMaxFileCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Limits.AsObject;
    static toObject(includeInstance: boolean, msg: Limits): Limits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Limits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Limits;
    static deserializeBinaryFromReader(message: Limits, reader: jspb.BinaryReader): Limits;
  }

  export namespace Limits {
    export type AsObject = {
      maxFileCount: number,
    }
  }
}

export class SetUploadUrlRuleRequest extends jspb.Message {
  hasUploadUrlRule(): boolean;
  clearUploadUrlRule(): void;
  getUploadUrlRule(): UploadUrlRule | undefined;
  setUploadUrlRule(value?: UploadUrlRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUploadUrlRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUploadUrlRuleRequest): SetUploadUrlRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUploadUrlRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUploadUrlRuleRequest;
  static deserializeBinaryFromReader(message: SetUploadUrlRuleRequest, reader: jspb.BinaryReader): SetUploadUrlRuleRequest;
}

export namespace SetUploadUrlRuleRequest {
  export type AsObject = {
    uploadurlrule?: UploadUrlRule.AsObject,
  }
}

export class SetUploadUrlRuleResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUploadUrlRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetUploadUrlRuleResponse): SetUploadUrlRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUploadUrlRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUploadUrlRuleResponse;
  static deserializeBinaryFromReader(message: SetUploadUrlRuleResponse, reader: jspb.BinaryReader): SetUploadUrlRuleResponse;
}

export namespace SetUploadUrlRuleResponse {
  export type AsObject = {
    success: boolean,
  }
}

