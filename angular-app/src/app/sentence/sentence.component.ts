import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-sentence',
    templateUrl: './sentence.component.html',
    styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
    @Input() sentenceList;
    @Output() kanjiFilterEvent = new EventEmitter<string>();

    filterByKanji(kanji): void {
        console.log("clicked on button " + kanji);
        this.kanjiFilterEvent.emit(kanji);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
