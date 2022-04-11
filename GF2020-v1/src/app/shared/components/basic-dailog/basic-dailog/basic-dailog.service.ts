import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BasicDailogService {

    private subject = new Subject<any>();
    constructor() { }
    confirmThis(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'confirm', siFn, noFn);
    }

    doAlert(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'do-alert', siFn, noFn);
    }

    deactivateThis(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'deactivate', siFn, noFn);
    }

    actionRequiredThis(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'actionRequired', siFn, noFn);
    }

    alertThis(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'Alert', siFn, noFn);
    }
    // BookingAlert
    bookingAlertThis(message: string, header: string = 'BOOKING CONFIRMATION', siFn?: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'BookingAlert', siFn, noFn, header);
    }

    bookingConfirmThis(message: string, header: string = 'BOOKING CONFIRMATION', siFn?: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'BookingConfirm', siFn, noFn, header);
    }

    // QuotationAlert
    quoteAlertThis(message: string, alert: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'QuoteAlert', siFn, noFn, alert);
    }
    // QuotationReject
    quoteRejectThis(message: string, alert: string, reject: string, siFn: () => void, noFn?: () => void) {
        this.setReject(message, 'QuoteReject', siFn, noFn, alert, reject);
    }


    simpleAlert(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'simpleAlert', siFn, noFn);
    }

    informationAlert(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'informationAlert', siFn, noFn);
    }

    actionAlert(message: string, siFn: () => void, noFn?: () => void) {
        this.setConfirmation(message, 'actionAlert', siFn, noFn);
    }

    setConfirmation(message: string, type: string, siFn: () => void, noFn: () => void, header?: string) {
        const that = this;
        this.subject.next({
            type: type,
            header: header,
            text: message,
            siFn() {
                that.subject.next(); // this will close the modal
                siFn();
            },
            noFn() {
                that.subject.next();
                noFn();
            }
        });
    }
    setReject(message: string, type: string, siFn: () => void, noFn: () => void, header?: string, reject?: string) {
        const that = this;
        this.subject.next({
            type: type,
            header: header,
            text: message,
            reject: reject,
            siFn() {
                that.subject.next(); // this will close the modal
                siFn();
            },
            noFn() {
                that.subject.next();
                noFn();
            }
        });
    }


    confirmThisNew(message: string, siFn: () => boolean, noFn?: () => boolean): boolean {
        return this.setConfirmationNew(message, 'confirm', siFn, noFn);
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
                noFn();
                return false
            }
        });
        return true
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
