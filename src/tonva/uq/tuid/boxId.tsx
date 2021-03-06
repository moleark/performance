//import * as React from 'react';
//import { observer } from 'mobx-react';
import { Tuid } from "./tuid";

export interface BoxId {
    readonly id: number;
    obj: any;
    boxName:string;
    isUndefined: boolean;
    assure(): Promise<BoxId>;
    equ(id:BoxId|number): boolean;
}

export type CreateBoxId = (tuid:Tuid, id:number) => BoxId;
