import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-sentence',
    templateUrl: './sentence.component.html',
    styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
    //receive sentences from app.component
    @Input() sentenceList;
    @Output() kanjiFilterEvent = new EventEmitter<string>();

    //if a user clicks on a kanji (for filtering) --> emit an event (handled by app.component)
    filterByKanji(kanji): void {
        this.kanjiFilterEvent.emit(kanji);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
