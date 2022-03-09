
function Translate(word,language){
    this.apikey = "Your Yandex Translate API key";
    this.word = word;
    this.language = language;

    //XHR object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(Callback) {
    // Ajax
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status ===200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            Callback(null,text);

            
        }
        else{
            Callback("Bir Hata Oluştu",null)
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}