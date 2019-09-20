import * as grpcWeb from 'grpc-web';

import {
  SignUpLeadRequest,
  SignUpResponse,
  ValidateSignUpRequest,
  ValidateSignUpResponse} from './v1_pb';

export class SignUpServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  signUpLead(
    request: SignUpLeadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SignUpResponse) => void
  ): grpcWeb.ClientReadableStream<SignUpResponse>;

  validateSignUp(
    request: ValidateSignUpRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ValidateSignUpResponse) => void
  ): grpcWeb.ClientReadableStream<ValidateSignUpResponse>;

}

export class SignUpServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  signUpLead(
    request: SignUpLeadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SignUpResponse>;

  validateSignUp(
    request: ValidateSignUpRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ValidateSignUpResponse>;

}

