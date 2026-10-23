import { BestprintondemandDataEntityBase } from '../BestprintondemandDataEntityBase';
import type { BestprintondemandDataSDK } from '../BestprintondemandDataSDK';
import type { Control } from '../types';
import type { Cost, CostLoadMatch } from '../BestprintondemandDataTypes';
declare class CostEntity extends BestprintondemandDataEntityBase<Cost> {
    constructor(client: BestprintondemandDataSDK, entopts: any);
    make(this: CostEntity): CostEntity;
    load(this: any, reqmatch?: CostLoadMatch, ctrl?: Control): Promise<CostEntity>;
}
export { CostEntity };
