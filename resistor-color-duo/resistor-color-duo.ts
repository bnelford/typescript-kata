import { createBrotliCompress } from "zlib";

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors;
    var len = this.colors.length;
    if (len < 2) {
      console.log("Length is less than 2");  
      throw new Error('At least two colors need to be present');
    }
  }
  value = (): number => {
    var values: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
    var total = '';
    for (var index = 0; index < 2; index++) {
      total += ""+values.indexOf(this.colors[index]);
    }
    return +total;
  }
}
