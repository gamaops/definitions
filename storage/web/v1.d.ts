// package: storage.v1
// file: storage/web/v1.proto

import * as jspb from "google-protobuf";

export class File extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getBucketId(): string;
  setBucketId(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getUploadUrl(): string;
  setUploadUrl(value: string): void;

  getStatus(): File.StatusMap[keyof File.StatusMap];
  setStatus(value: File.StatusMap[keyof File.StatusMap]): void;

  getProcessor(): FileProcessorMap[keyof FileProcessorMap];
  setProcessor(value: FileProcessorMap[keyof FileProcessorMap]): void;

  getName(): string;
  setName(value: string): void;

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
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    fileId: string,
    path: string,
    mimeType: string,
    tagsList: Array<string>,
    bucketId: string,
    size: number,
    uploadurl: string,
    status: File.StatusMap[keyof File.StatusMap],
    processor: FileProcessorMap[keyof FileProcessorMap],
    name: string,
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
    subject: string,
  }

  export interface StatusMap {
    STORED: 0;
    UPLOADING: 1;
    FAILED: 2;
  }

  export const status: StatusMap;
}

export class Bucket extends jspb.Message {
  getBucketId(): string;
  setBucketId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasUpload(): boolean;
  clearUpload(): void;
  getUpload(): Bucket.Upload | undefined;
  setUpload(value?: Bucket.Upload): void;

  clearAcceptedMimeTypesList(): void;
  getAcceptedMimeTypesList(): Array<string>;
  setAcceptedMimeTypesList(value: Array<string>): void;
  addAcceptedMimeTypes(value: string, index?: number): string;

  getMaxSize(): number;
  setMaxSize(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getProcessor(): FileProcessorMap[keyof FileProcessorMap];
  setProcessor(value: FileProcessorMap[keyof FileProcessorMap]): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCreatedJobId(): string;
  setCreatedJobId(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  getUpdatedJobId(): string;
  setUpdatedJobId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bucket.AsObject;
  static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bucket;
  static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
}

export namespace Bucket {
  export type AsObject = {
    bucketId: string,
    name: string,
    upload?: Bucket.Upload.AsObject,
    acceptedmimetypesList: Array<string>,
    maxSize: number,
    tagsList: Array<string>,
    processor: FileProcessorMap[keyof FileProcessorMap],
    createdAt: string,
    createdJobId: string,
    updatedAt: string,
    updatedJobId: string,
  }

  export class Upload extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): void;

    getTokenExpirationSeconds(): number;
    setTokenExpirationSeconds(value: number): void;

    getFieldName(): string;
    setFieldName(value: string): void;

    getMaxCount(): number;
    setMaxCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Upload.AsObject;
    static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Upload;
    static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
  }

  export namespace Upload {
    export type AsObject = {
      url: string,
      tokenExpirationSeconds: number,
      fieldName: string,
      maxCount: number,
    }
  }
}

export class CreateFileRequest extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileRequest): CreateFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileRequest;
  static deserializeBinaryFromReader(message: CreateFileRequest, reader: jspb.BinaryReader): CreateFileRequest;
}

export namespace CreateFileRequest {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class CreateBucketRequest extends jspb.Message {
  hasBucket(): boolean;
  clearBucket(): void;
  getBucket(): Bucket | undefined;
  setBucket(value?: Bucket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketRequest): CreateBucketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketRequest;
  static deserializeBinaryFromReader(message: CreateBucketRequest, reader: jspb.BinaryReader): CreateBucketRequest;
}

export namespace CreateBucketRequest {
  export type AsObject = {
    bucket?: Bucket.AsObject,
  }
}

export class CreateBucketResponse extends jspb.Message {
  getBucketId(): string;
  setBucketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketResponse): CreateBucketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketResponse;
  static deserializeBinaryFromReader(message: CreateBucketResponse, reader: jspb.BinaryReader): CreateBucketResponse;
}

export namespace CreateBucketResponse {
  export type AsObject = {
    bucketId: string,
  }
}

export class CreateUploadUrlRequest extends jspb.Message {
  getBucketId(): string;
  setBucketId(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUploadUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUploadUrlRequest): CreateUploadUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUploadUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUploadUrlRequest;
  static deserializeBinaryFromReader(message: CreateUploadUrlRequest, reader: jspb.BinaryReader): CreateUploadUrlRequest;
}

export namespace CreateUploadUrlRequest {
  export type AsObject = {
    bucketId: string,
    subject: string,
  }
}

export class CreateUploadUrlResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getUploadToken(): string;
  setUploadToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUploadUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUploadUrlResponse): CreateUploadUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUploadUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUploadUrlResponse;
  static deserializeBinaryFromReader(message: CreateUploadUrlResponse, reader: jspb.BinaryReader): CreateUploadUrlResponse;
}

export namespace CreateUploadUrlResponse {
  export type AsObject = {
    success: boolean,
    uploadToken: string,
  }
}

export interface FileProcessorMap {
  NONE: 0;
  DOCUMENT: 1;
}

export const Fileprocessor: FileProcessorMap;

