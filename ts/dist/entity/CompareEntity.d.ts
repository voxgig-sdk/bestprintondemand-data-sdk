import { BestprintondemandDataEntityBase } from '../BestprintondemandDataEntityBase';
import type { BestprintondemandDataSDK } from '../BestprintondemandDataSDK';
import type { Control } from '../types';
import type { Compare, CompareLoadMatch } from '../BestprintondemandDataTypes';
declare class CompareEntity extends BestprintondemandDataEntityBase<Compare> {
    constructor(client: BestprintondemandDataSDK, entopts: any);
    make(this: CompareEntity): CompareEntity;
    load(this: any, reqmatch?: CompareLoadMatch, ctrl?: Control): Promise<CompareEntity>;
}
export { CompareEntity };
