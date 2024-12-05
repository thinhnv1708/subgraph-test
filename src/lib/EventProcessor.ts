import { IEvent } from './types/IEvent';
import { IStore } from './types/IStore';
import { ITokenManager } from './types/ITokenManager';

export abstract class EventProcessor {
  constructor(
    protected readonly store: IStore,
    protected readonly tokenManager: ITokenManager
  ) {}

  abstract processEvent(event: IEvent): Promise<void>;
}
