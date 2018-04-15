import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()
export class SentenceService {

    sentenceList = [
        {
            "kanjis": [
                "字",
                "意",
                "味",
                "知"
            ],
            "_id": "5aca66af92ff1103e5603fa8",
            "japanese": "この数字に意味があることを知っていますか？",
            "english": "Do you know the meaning to this figure?",
            "createdAt": "2018-04-08T18:59:59.917Z",
            "updatedAt": "2018-04-14T10:27:28.233Z",
            "__v": 1
        },
        {
            "kanjis": [
                "東",
                "京",
                "高"
            ],
            "_id": "5aca669492ff1103e5603fa7",
            "japanese": "さて、東京スカイツリーの高さは634m。",
            "english": "So Tokyo Sky Tree is 634 meters high.",
            "createdAt": "2018-04-08T18:59:32.009Z",
            "updatedAt": "2018-04-08T18:59:36.202Z",
            "__v": 1
        },
        {
            "kanjis": [
                "東",
                "京",
                "田",
                "区",
                "行",
                "外",
                "名",
                "日",
                "本",
                "国",
                "大",
                "知",
                "両"
            ],
            "_id": "5aca665292ff1103e5603fa6",
            "japanese": "東京スカイツリーは東京都墨田区に建ち、歩いて行ける範囲に、海外でも有名な観光地・浅草や、日本の国技・大相撲で知られる両国があります。",
            "english": "Tokyo Sky Tree is located in Sumida-ku, Tokyo, and within walking distance is the world famous tourist destination Asakusa and the area famous for Japan's national sport, professional sumo.",
            "createdAt": "2018-04-08T18:58:26.043Z",
            "updatedAt": "2018-04-08T18:58:53.482Z",
            "__v": 1
        },
        {
            "kanjis": [
                "東",
                "京",
                "新",
                "名",
                "所",
                "高",
                "大",
                "光",
                "日"
            ],
            "_id": "5aca660692ff1103e5603fa5",
            "japanese": "「東京の新名所」との呼び声高いこちらは、各種マスメディアでも大きく取り上げられ、多くの観光客で日々、混雑しています。",
            "english": "Known as \"Tokyo's New Landmark,\" the tower has been widely covered in the mass media and is crowded every day with many tourists.",
            "createdAt": "2018-04-08T18:57:10.667Z",
            "updatedAt": "2018-04-08T18:57:35.971Z",
            "__v": 1
        },
        {
            "kanjis": [
                "立",
                "世",
                "界",
                "一",
                "高",
                "東",
                "京"
            ],
            "_id": "5aca65d592ff1103e5603fa4",
            "japanese": "2011年3月…自立式電波塔として世界一の高さに到達した「東京スカイツリー」。",
            "english": "March 2011... As a freestanding tower, the \"Tokyo Sky Tree\" became the highest in the world.",
            "createdAt": "2018-04-08T18:56:21.633Z",
            "updatedAt": "2018-04-08T18:56:39.480Z",
            "__v": 1
        }
    ];

    //for later use with API
    constructor(private http: HttpClient) {
    }

    //for later use with API --> set apiUrl (Express App)
    private apiUrl = environment.apiUrl;


    listSentences() {
        return this.sentenceList;
    }

    listSentencesByKanji(kanji) {
        return this.sentenceList.filter((el) => {
            return el.kanjis.includes(kanji);
        });
    }

    getSentence(id) {
        return this.sentenceList.find((el) => {
            return el._id == id;
        })
    }


    /*
    For later use: with API connection

    listSentences() {
        return this.http.get(this.apiUrl + 'api/sentences');
    }

    getSentence(id) {
        return this.http.get(this.apiUrl + 'api/sentences/' + id);
    }
    */
}
