import { BestprintondemandDataEntityBase } from '../BestprintondemandDataEntityBase';
import type { BestprintondemandDataSDK } from '../BestprintondemandDataSDK';
import type { Control } from '../types';
import type { PriceChange, PriceChangeLoadMatch } from '../BestprintondemandDataTypes';
declare class PriceChangeEntity extends BestprintondemandDataEntityBase<PriceChange> {
    constructor(client: BestprintondemandDataSDK, entopts: any);
    make(this: PriceChangeEntity): PriceChangeEntity;
    load(this: any, reqmatch?: PriceChangeLoadMatch, ctrl?: Control): Promise<PriceChangeEntity>;
}
export { PriceChangeEntity };
