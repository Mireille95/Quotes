export class Quote {
  showDescription: boolean;
  showAuthor: boolean;
  constructor(public id: number,public name: string, public author:string, public description: string, public completeDate: Date){
      this.showDescription=false;
      this.showAuthor=false;
    }
  }
