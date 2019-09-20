import * as grpcWeb from 'grpc-web';

import {
  CreateBucketRequest,
  CreateBucketResponse,
  CreateUploadUrlRequest,
  CreateUploadUrlResponse} from './v1_pb';

export class UploadServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createUploadUrl(
    request: CreateUploadUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateUploadUrlResponse) => void
  ): grpcWeb.ClientReadableStream<CreateUploadUrlResponse>;

}

export class StorageServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateBucketResponse) => void
  ): grpcWeb.ClientReadableStream<CreateBucketResponse>;

}

export class UploadServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createUploadUrl(
    request: CreateUploadUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateUploadUrlResponse>;

}

export class StorageServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createBucket(
    request: CreateBucketRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateBucketResponse>;

}

