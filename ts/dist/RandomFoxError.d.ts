import { Context } from './Context';
declare class RandomFoxError extends Error {
    isRandomFoxError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RandomFoxError };
