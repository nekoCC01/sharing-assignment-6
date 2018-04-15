import {Component} from '@angular/core';
import {SentenceService} from "./sentence.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SentenceService]
})
export class AppComponent {
    title = 'app';

    constructor(private sentenceService: SentenceService) {

    }

    sentenceList = null;
    showKanji: boolean = false;
    filterKanji = null;

    handleKanjiFilter(kanji): void {
        console.log("kanji Filter has been pressed" + kanji);
        this.sentenceList = this.sentenceService.listSentencesByKanji(kanji);
        this.showKanji = true;
        this.filterKanji = kanji;
    }

    showAll(): void {
        this.sentenceList = this.sentenceService.listSentences();
        this.showKanji = false;
    }

    ngOnInit() {
        this.sentenceList = this.sentenceService.listSentences();
    }

    /*
    For later use: get sentenceList via API

    ngOnInit() {
        this.sentenceList = this.sentenceService.listSentences().subscribe((sentences) => {
            this.sentenceList = sentences;
        });
    }
    */

}
