/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MapsEventListener } from './event';
import { __registerMockInstance } from '../../registry';
import { vi } from 'vitest';

/* eslint-disable @typescript-eslint/no-explicit-any */

export class MVCObject implements google.maps.MVCObject {
  public static _mockClasses: typeof MVCObject[] = [];
  public static mockInstances: MVCObject[] = [];

  public constructor() {
    const ctor = this.constructor as typeof MVCObject;

    __registerMockInstance(ctor, this);

    if (ctor.mockInstances === undefined) {
      ctor.mockInstances = [];
    }

    if (MVCObject._mockClasses === undefined) {
      MVCObject._mockClasses = [];
    }

    ctor.mockInstances.push(this);
    MVCObject._mockClasses.push(ctor);
  }

  public addListener = vi
    .fn()
    .mockImplementation(
      (eventName: string, handler: Function): google.maps.MapsEventListener =>
        MapsEventListener
    );
  public bindTo = vi
    .fn()
    .mockImplementation(
      (
        key: string,
        target: MVCObject,
        targetKey?: string,
        noNotify?: boolean
      ): void => null
    );
  public changed = vi.fn().mockImplementation((key: string): void => null);
  public get = vi.fn().mockImplementation((key: string): any => {});
  public notify = vi.fn().mockImplementation((key: string): void => null);
  public set = vi
    .fn()
    .mockImplementation((key: string, value: any): void => null);
  public setValues = vi.fn().mockImplementation((values: any): void => null);
  public unbind = vi.fn().mockImplementation((key: string): void => null);
  public unbindAll = vi.fn().mockImplementation(() => null);
}

// if running a test that supports afterEach, then we will cleanup the instances
// automatically at the end of each test.
if (typeof afterEach === 'function') {
  afterEach(() => {
    if (MVCObject._mockClasses) {
      for (const ctor of MVCObject._mockClasses) {
        ctor.mockInstances = undefined;
      }
    }
    MVCObject._mockClasses = undefined;
  });
}
