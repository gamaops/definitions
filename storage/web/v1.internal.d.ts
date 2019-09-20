import * as jspb from "google-protobuf"

export class UploadUrlRule extends jspb.Message {
  getAudience(): string;
  setAudience(value: string): void;

  getLimits(): UploadUrlRule.Limits | undefined;
  setLimits(value?: UploadUrlRule.Limits): void;
  hasLimits(): boolean;
  clearLimits(): void;

  getBucketId(): string;
  setBucketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadUrlRule.AsObject;
  static toObject(includeInstance: boolean, msg: UploadUrlRule): UploadUrlRule.AsObject;
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

export class setUploadUrlRuleRequest extends jspb.Message {
  getUploadUrlRule(): UploadUrlRule | undefined;
  setUploadUrlRule(value?: UploadUrlRule): void;
  hasUploadurlrule(): boolean;
  clearUploadurlrule(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): setUploadUrlRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: setUploadUrlRuleRequest): setUploadUrlRuleRequest.AsObject;
  static serializeBinaryToWriter(message: setUploadUrlRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): setUploadUrlRuleRequest;
  static deserializeBinaryFromReader(message: setUploadUrlRuleRequest, reader: jspb.BinaryReader): setUploadUrlRuleRequest;
}

export namespace setUploadUrlRuleRequest {
  export type AsObject = {
    uploadurlrule?: UploadUrlRule.AsObject,
  }
}

export class setUploadUrlRuleResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): setUploadUrlRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: setUploadUrlRuleResponse): setUploadUrlRuleResponse.AsObject;
  static serializeBinaryToWriter(message: setUploadUrlRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): setUploadUrlRuleResponse;
  static deserializeBinaryFromReader(message: setUploadUrlRuleResponse, reader: jspb.BinaryReader): setUploadUrlRuleResponse;
}

export namespace setUploadUrlRuleResponse {
  export type AsObject = {
    success: boolean,
  }
}

