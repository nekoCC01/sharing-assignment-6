import {Component} from '@angular/core';
import {SentenceService} from "./sentence.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SentenceService]
})
export class AppComponent {
    title = 'Japanese sentences';
    subtitle = 'Click on a kanji to filter the sentences!';

    //load the sentences from sentence.service.ts
    constructor(private sentenceService: SentenceService) {
    }

    //main variable that contains the sentences to be displayed
    sentenceList = null;
    //variables for display
    showKanji: boolean = false;
    filterKanji = null;

    //handle the filter-event triggered within sentence.component
    handleKanjiFilter(kanji): void {
        //get filtered sentences from data-service
        this.sentenceList = this.sentenceService.listSentencesByKanji(kanji);
        this.showKanji = true;
        this.filterKanji = kanji;
    }

    //if a user, after filtering, clicks the "Show All"-button
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
