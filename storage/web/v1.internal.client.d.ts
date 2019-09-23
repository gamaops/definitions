import * as grpcWeb from 'grpc-web';

import {
  setUploadUrlRuleRequest,
  setUploadUrlRuleResponse} from './v1.internal';

export class UploadAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  setUploadUrlRule(
    request: setUploadUrlRuleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: setUploadUrlRuleResponse) => void
  ): grpcWeb.ClientReadableStream<setUploadUrlRuleResponse>;

}

export class UploadAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  setUploadUrlRule(
    request: setUploadUrlRuleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<setUploadUrlRuleResponse>;

}

