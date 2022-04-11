import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private subject = new Subject<any>();
    constructor() { }

    alert(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'alert', siFn, noFn);
    }

    information(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'information', siFn, noFn);
    }

    webcall(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmationWebCall(message, 'webcall', siFn, noFn);
    }

    webchat(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmationWebChat(message, 'webcall', siFn, noFn);
    }

    action(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'action', siFn, noFn);
    }

    setConfirmation(message: string, type: string, siFn: () => void, noFn: () => void, header?: string) {
        const that = this;
        this.subject.next({
            type: type,
            header: header,
            text: message,
            siFn() {
                that.subject.next();
                siFn();
            },
            noFn() {
                that.subject.next();
                () => {

                };
            }
        });
    }

    setConfirmationNew(message: string, type: string, siFn: () => boolean, noFn: () => boolean): boolean {
        const that = this;
        this.subject.next({
            type: type,
            text: message,
            siFn() {
                that.subject.next(); // this will close the modal
                siFn();
                return true
            },
            noFn() {
                that.subject.next();
                () => {
                    // No To Do
                };
                return false
            }
        });
        return true
    }

    setConfirmationWebCall(message: string, type: string, siFn: () => void, noFn: () => void, header?: string) {
        console.log(message)
        let tmpVar: any = message
        const that = this;
        this.subject.next({
            type: type,
            header: header,
            text: message,
            siFn() {
                console.log(type)
                that.subject.next();
                // window.location.href = 'https://localhost:5001/?groupId=' + tmpVar.chatUrl + '&uname=' + tmpVar.userName;
                let url = 'https://webcalling.azurewebsites.net/?groupId=' + tmpVar.chatUrl + '&uname=' + tmpVar.userName;
                window.open(url, '_blank');
                siFn();
            },
            noFn() {
                that.subject.next();
                () => {

                };
            }
        });
    }

    setConfirmationWebChat(message: string, type: string, siFn: () => void, noFn: () => void, header?: string) {
        console.log(message)
        let tmpVar: any = message
        const that = this;
        this.subject.next({
            type: type,
            header: header,
            text: message,
            siFn() {
                console.log(type)
                that.subject.next();
                let url = 'https://webcalling.azurewebsites.net/?threadId=' + tmpVar.chatUrl + '&uname=' + tmpVar.userName;
                window.open(url, '_blank');
                siFn();
            },
            noFn() {
                that.subject.next();
                () => {

                };
            }
        });
    }

    // let url = 'https://webcalling.azurewebsites.net/?threadId=' + data
    // window.open(url, '_blank');

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
