// package: document.v1.internal
// file: document/web/v1.internal.proto

import * as jspb from "google-protobuf";

export class DocumentRule extends jspb.Message {
  getDocumentKind(): string;
  setDocumentKind(value: string): void;

  hasLimits(): boolean;
  clearLimits(): void;
  getLimits(): DocumentRule.Limits | undefined;
  setLimits(value?: DocumentRule.Limits): void;

  clearAllowedaudiencesList(): void;
  getAllowedAudiencesList(): Array<string>;
  setAllowedAudiencesList(value: Array<string>): void;
  addAllowedaudiences(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRule.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRule): DocumentRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRule;
  static deserializeBinaryFromReader(message: DocumentRule, reader: jspb.BinaryReader): DocumentRule;
}

export namespace DocumentRule {
  export type AsObject = {
    documentKind: string,
    limits?: DocumentRule.Limits.AsObject,
    allowedaudiencesList: Array<string>,
  }

  export class Limits extends jspb.Message {
    getMaxValueCount(): number;
    setMaxValueCount(value: number): void;

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
      maxValueCount: number,
    }
  }
}

export class setDocumentRuleRequest extends jspb.Message {
  hasDocumentrule(): boolean;
  clearDocumentrule(): void;
  getDocumentRule(): DocumentRule | undefined;
  setDocumentRule(value?: DocumentRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): setDocumentRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: setDocumentRuleRequest): setDocumentRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: setDocumentRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): setDocumentRuleRequest;
  static deserializeBinaryFromReader(message: setDocumentRuleRequest, reader: jspb.BinaryReader): setDocumentRuleRequest;
}

export namespace setDocumentRuleRequest {
  export type AsObject = {
    documentrule?: DocumentRule.AsObject,
  }
}

export class setDocumentRuleResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): setDocumentRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: setDocumentRuleResponse): setDocumentRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: setDocumentRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): setDocumentRuleResponse;
  static deserializeBinaryFromReader(message: setDocumentRuleResponse, reader: jspb.BinaryReader): setDocumentRuleResponse;
}

export namespace setDocumentRuleResponse {
  export type AsObject = {
    success: boolean,
  }
}

