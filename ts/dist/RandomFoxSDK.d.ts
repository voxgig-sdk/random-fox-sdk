import { FoxEntity } from './entity/FoxEntity';
export type * from './RandomFoxTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RandomFoxEntityBase } from './RandomFoxEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class RandomFoxSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Fox(entopts?: Record<string, any>): FoxEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RandomFoxSDK;
    tester(testopts?: any, sdkopts?: any): RandomFoxSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RandomFoxSDK;
export { stdutil, config, BaseFeature, RandomFoxEntityBase, RandomFoxSDK, SDK, };
export type { DirectResult };
