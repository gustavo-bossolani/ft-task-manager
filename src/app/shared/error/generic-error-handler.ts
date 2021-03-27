import { ErrorHandler } from '@angular/core';

export class GenericErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.log('erro');
    console.log(error);
  }

}
