// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

import { IDisposable } from "./base";
import { INode } from "./model";

export interface ISelection extends IDisposable {
    getSelectedNodes(): INode[];
    select(models: INode[], toggle: boolean): void;
    clearSelected(): void;
    deselect(models: INode[]): void;
}
