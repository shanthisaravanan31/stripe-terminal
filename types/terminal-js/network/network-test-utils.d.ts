import { net_rpc_proto_rpc } from '../ixmodel/app/model/com/goindex/proto/net/rpc/base/rpc.model';
import { net_rpc_proto_applicationerrorcode } from '../ixmodel/app/model/com/goindex/proto/net/rpc/base/applicationerrorcode.model';
import { TypescriptRpcResponse } from './typescript-rpc.model';
import IxRpcError from './ix-rpc-error';
import RpcEC = net_rpc_proto_rpc.RpcEC;
import ApplicationEC = net_rpc_proto_applicationerrorcode.ApplicationEC;
export declare function rpcEncode(contentJson: Object): string;
export declare function createRpcErrorResponse(rpcEc: RpcEC, message?: string): TypescriptRpcResponse;
export declare function createAppErrorResponse(applicationEc: ApplicationEC, message?: string): TypescriptRpcResponse;
export declare function createIxRpcErrorFromRpcEc(rpcEc: RpcEC, message?: string): IxRpcError;
export declare function createIxRpcErrorFromAppEc(appEc: ApplicationEC, message?: string): IxRpcError;