import { CompareEntity } from './entity/CompareEntity';
import { CostEntity } from './entity/CostEntity';
import { PriceChangeEntity } from './entity/PriceChangeEntity';
export type * from './BestprintondemandDataTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BestprintondemandDataEntityBase } from './BestprintondemandDataEntityBase';
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
declare class BestprintondemandDataSDK {
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
    Compare(entopts?: Record<string, any>): CompareEntity;
    Cost(entopts?: Record<string, any>): CostEntity;
    PriceChange(entopts?: Record<string, any>): PriceChangeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BestprintondemandDataSDK;
    tester(testopts?: any, sdkopts?: any): BestprintondemandDataSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BestprintondemandDataSDK;
export { stdutil, config, BaseFeature, BestprintondemandDataEntityBase, BestprintondemandDataSDK, SDK, };
export type { DirectResult };
