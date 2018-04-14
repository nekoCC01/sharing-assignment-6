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

    ngOnInit() {
        this.sentenceList = this.sentenceService.listSentences().subscribe((sentences) => {
            this.sentenceList = sentences;
        });
    }

}
