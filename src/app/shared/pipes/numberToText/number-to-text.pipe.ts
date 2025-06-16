import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToText',
  standalone: true,
})
export class NumberToTextPipe implements PipeTransform {

  private langMap: any = {
    "vi": {
      currency: {
        "VND": "đồng",
        "USD": "đô la mỹ",
        "EUR": "euro"
      },
      comma: "phẩy",
      special: {
        billion: "tỷ",
        million: "triệu",
        thousand: "ngàn",
        hundred: "trăm",
        only:"(chẵn)"
      },
      specialOnes: {
        1: "mốt",
        5: "lăm",
      },
      ones: ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
      tens: ["lẻ", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"],
    },
    "en": {
      currency: {
        "VND": "vietnam dong",
        "USD": "dollar",
        "EUR": "euro"
      },
      comma: "point",
      special: {
        billion: "billion",
        million: "million",
        thousand: "thousand",
        hundred: "hundred",
        only:"(only)"
      },
      ones: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
      tens: ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
      teens: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    }
  }

  transform(value: string|number, currency = "VND", lang="vi"): string|null {
    if(value == null || value == "null") return null;
    const {commas, clusters } = this.sliceNumberToClusters(value);
    const text = `${this.convert(clusters, lang)} `;
    const commasText = commas !=undefined
      ? `${this.langMap[lang].comma} ${this.convertCluster3IntoText(commas?.slice(1), lang)}`
      :"";
    const result = `${text} ${commasText} ${this.langMap[lang].currency[currency]}${lang!="vi" && Number(value)>1 ? "s":""}`;
    return result.split(" ").filter(item=>item).join(" ");
  }

  convert(array:string[], lang:string):string {
    return array.reverse().map((cluster,index)=> {
      if(index==0) return this.convertCluster3IntoText(cluster, lang);
      let text = this.convertCluster3IntoText(cluster, lang);
      switch(index%3) {
        case 0:
          text += ` ${this.langMap[lang].special.billion}`;
          break;
        case 1:
          text += text ? ` ${this.langMap[lang].special.thousand}` : "";
          break;
        case 2:
          text += text ? ` ${this.langMap[lang].special.million}` : "";
          break;
      }
      return text;
    }).reverse().join(" ");
  }

  /**
 * convert clusters of 3 numbers into text
 * @param  string
 * @param  string
 * @return string
 */
  convertCluster3IntoText(input:string, lang:string):string {
    if(input == undefined || input == "000") return "";
    return lang == "en"
      ? this.convertCluster3IntoTextEn(Number(input), lang)
      : this.convertCluster3IntoTextVi(input.split(""), lang);
  }

  convertCluster3IntoTextVi(input:any[], lang:string):string {
    return input.reverse().map((number,index)=> {
      let text = "";
      switch(index) {
        case 0: //unit digit
          if(number == "0") break;
          if(input[1] && ((number === "5" && input[1] !== "0") || ((number === "1") && Number(input[1]) > 1))) {
            text = this.langMap[lang].specialOnes[number];
          }
          else text = this.langMap[lang].ones[number];
          break;
        case 1:// digits in the tens place
          if(number == "0" && input[0] == "0") break;
          text = this.langMap[lang].tens[number];
          break;
        default://digits in the hundreds place
          text = `${this.langMap[lang].ones[number]} ${this.langMap[lang].special.hundred}`;
          break;
      }
      return text;
    }).reverse().join(" ");
  }

  convertCluster3IntoTextEn(input:number, lang:string):string {
    const hundred = this.divGetInt(input, 100),
      tens = input%100;
    let text="";

    if(hundred > 0) text+= `${this.langMap[lang].ones[hundred]} ${this.langMap[lang].special.hundred}`;

    if(tens == 0) return text;
    else if(tens==20) text+= this.langMap[lang].tens[2];
    else if(tens<10) text+= this.langMap[lang].ones[tens];
    else if(tens>=10 && tens<20) text+= this.langMap[lang].teens[tens%10];
    else text+= ` ${this.langMap[lang].tens[tens.toString().slice(0,1)]}-${this.langMap[lang].ones[tens.toString().slice(-1)]}`;
   return text;
  }

  /**
   * slice numbers into clusters of 3 numbers
   * @param  {string|number}
   * @return {commas, clusters }  clusters : clusters of 3 numbers
   */

  sliceNumberToClusters(currency:string|number) {
    currency = String(currency).replaceAll(/,/gi, "");
    let commas, result = [];

    if(currency.indexOf(".")!=-1) {
      commas = currency.slice(currency.indexOf("."), currency.length);
      currency = currency.replace(commas,"");
    }
    do {
      result.push(currency.slice(-3));
      currency = currency.substring(0, currency.length-3);
    } while (currency.length);
    return {commas: commas, clusters : result.reverse()};
  }

  divGetInt(divisor:number, dividend:number):number {
    return (divisor - divisor % dividend)/dividend;
  }
}
