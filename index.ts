console.clear();


import { ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";

const randomNumber = new ReplaySubject(5);

const subscriber1 = randomNumber.subscribe(nums=>
                                console.log(`Susbcriber One got ${nums}`));

randomNumber.next(1);
randomNumber.next(2);
randomNumber.next(3);
randomNumber.next(4);
randomNumber.next(5);

//Since buffer size is 5, subscriber 2 gets all the previously emitted data
const subscriber2 = randomNumber.subscribe(nums=>
                                console.log(`Susbcriber Two got ${nums}`));