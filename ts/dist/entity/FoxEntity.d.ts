import { RandomFoxEntityBase } from '../RandomFoxEntityBase';
import type { RandomFoxSDK } from '../RandomFoxSDK';
import type { Control } from '../types';
import type { Fox, FoxLoadMatch } from '../RandomFoxTypes';
declare class FoxEntity extends RandomFoxEntityBase<Fox> {
    constructor(client: RandomFoxSDK, entopts: any);
    make(this: FoxEntity): FoxEntity;
    load(this: any, reqmatch?: FoxLoadMatch, ctrl?: Control): Promise<FoxEntity>;
}
export { FoxEntity };
