import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject, interval, takeWhile, type Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly InitialTimerCount = 60;
  isCompleted$ = new BehaviorSubject<boolean>(false);
  isActiveInterval$ = new BehaviorSubject<boolean>(false);
  currentWord$ = new BehaviorSubject<number>(0);
  currentChar$ = new Subject<string>();
  private timerSubscription!: Subscription;

  char = signal<number>(0);
  correct = signal<number>(0);
  wrong = signal<number>(0);
  accuracy = signal<number>(0);
  time = signal<number>(0);

  constructor() {
    this.resetTime();
  }

  resetTime() {
    const intervalTime = (this.InitialTimerCount/0.8)

    this.timerSubscription = interval(1000/intervalTime)
      .pipe(takeWhile(() => this.time() < this.InitialTimerCount))
      .subscribe({
        next: (val) => {
          this.time.set(val);
          if (this.time() === this.InitialTimerCount) {
            this.timerSubscription.unsubscribe();
          }
        },
      });
  }

  simpleWords = signal<Array<string>>([
    'the',
    'be',
    'of',
    'and',
    'a',
    'to',
    'in',
    'he',
    'have',
    'it',
    'that',
    'for',
    'they',
    'I',
    'with',
    'as',
    'not',
    'on',
    'she',
    'at',
    'by',
    'this',
    'we',
    'you',
    'do',
    'but',
    'from',
    'or',
    'which',
    'one',
    'would',
    'all',
    'will',
    'there',
    'say',
    'who',
    'make',
    'when',
    'can',
    'more',
    'if',
    'no',
    'man',
    'out',
    'other',
    'so',
    'what',
    'time',
    'up',
    'go',
    'about',
    'than',
    'into',
    'could',
    'state',
    'only',
    'new',
    'year',
    'some',
    'take',
    'come',
    'these',
    'know',
    'see',
    'use',
    'get',
    'like',
    'then',
    'first',
    'any',
    'work',
    'now',
    'may',
    'such',
    'give',
    'over',
    'think',
    'most',
    'even',
    'find',
    'day',
    'also',
    'after',
    'way',
    'many',
    'must',
    'look',
    'before',
    'great',
    'back',
    'through',
    'long',
    'where',
    'much',
    'should',
    'well',
    'people',
    'down',
    'own',
    'just',
    'because',
    'good',
    'each',
    'those',
    'feel',
    'seem',
    'how',
    'high',
    'too',
    'place',
    'little',
    'world',
    'very',
    'still',
    'nation',
    'hand',
    'old',
    'life',
    'tell',
    'write',
    'become',
    'here',
    'show',
    'house',
    'both',
    'between',
    'need',
    'mean',
    'call',
    'develop',
    'under',
    'last',
    'right',
    'move',
    'thing',
    'general',
    'school',
    'never',
    'same',
    'another',
    'begin',
    'while',
    'number',
    'part',
    'turn',
    'real',
    'leave',
    'might',
    'want',
    'point',
    'form',
    'off',
    'child',
    'few',
    'small',
    'since',
    'against',
    'ask',
    'late',
    'home',
    'interest',
    'large',
    'person',
    'end',
    'open',
    'public',
    'follow',
    'during',
    'present',
    'without',
    'again',
    'hold',
    'govern',
    'around',
    'possible',
    'head',
    'consider',
    'word',
    'program',
    'problem',
    'however',
    'lead',
    'system',
    'set',
    'order',
    'eye',
    'plan',
    'run',
    'keep',
    'face',
    'fact',
    'group',
    'play',
    'stand',
    'increase',
    'early',
    'course',
    'change',
    'help',
    'line',
  ]);
}
