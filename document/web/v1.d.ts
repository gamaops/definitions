// package: document.v1
// file: document/web/v1.proto

import * as jspb from "google-protobuf";
import * as document_proto_kinds_pb from "../../document/web/kinds";

export class DocumentFile extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getDocumentId(): string;
  setDocumentId(value: string): void;

  getValidatedAt(): string;
  setValidatedAt(value: string): void;

  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentFile.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentFile): DocumentFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentFile;
  static deserializeBinaryFromReader(message: DocumentFile, reader: jspb.BinaryReader): DocumentFile;
}

export namespace DocumentFile {
  export type AsObject = {
    fileId: string,
    documentId: string,
    validatedAt: string,
    isValid: boolean,
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
    subject: string,
  }
}

export class Document extends jspb.Message {
  getDocumentId(): string;
  setDocumentId(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  hasBraCpf(): boolean;
  clearBraCpf(): void;
  getBraCpf(): document_proto_kinds_pb.BraCpf | undefined;
  setBraCpf(value?: document_proto_kinds_pb.BraCpf): void;

  hasBraCnh(): boolean;
  clearBraCnh(): void;
  getBraCnh(): document_proto_kinds_pb.BraCnh | undefined;
  setBraCnh(value?: document_proto_kinds_pb.BraCnh): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  getAudience(): string;
  setAudience(value: string): void;

  getValueCase(): Document.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    documentId: string,
    subject: string,
    bracpf?: document_proto_kinds_pb.BraCpf.AsObject,
    bracnh?: document_proto_kinds_pb.BraCnh.AsObject,
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
    audience: string,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    BRACPF = 3,
    BRACNH = 4,
  }
}

export class AddDocumentRequest extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Document | undefined;
  setDocument(value?: Document): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDocumentRequest): AddDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDocumentRequest;
  static deserializeBinaryFromReader(message: AddDocumentRequest, reader: jspb.BinaryReader): AddDocumentRequest;
}

export namespace AddDocumentRequest {
  export type AsObject = {
    document?: Document.AsObject,
  }
}

export class AddDocumentResponse extends jspb.Message {
  getDocumentId(): string;
  setDocumentId(value: string): void;

  getBucketId(): string;
  setBucketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddDocumentResponse): AddDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDocumentResponse;
  static deserializeBinaryFromReader(message: AddDocumentResponse, reader: jspb.BinaryReader): AddDocumentResponse;
}

export namespace AddDocumentResponse {
  export type AsObject = {
    documentId: string,
    bucketId: string,
  }
}

