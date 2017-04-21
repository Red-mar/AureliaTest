import { TestEvent } from './message';
import { inject } from 'aurelia-framework';

import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Test {
    message = 'This is a test page';

    constructor(private ea: EventAggregator) {

    }

    test() {
        this.ea.publish(new TestEvent('Bericht van test class'));
    }
}