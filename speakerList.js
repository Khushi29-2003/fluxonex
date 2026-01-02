import { LightningElement, api, wire } from 'lwc';
import getSpeakers from '@salesforce/apex/SpeakerController.getSpeakers';

export default class SpeakerList extends LightningElement {

    @api nameKey;
    @api speciality;

    speakers;

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email__c' },
        { label: 'Speciality', fieldName: 'Speciality__c' },
        {
            type: 'button',
            typeAttributes: {
                label: 'Book Session',
                name: 'select'
            }
        }
    ];

    @wire(getSpeakers, { nameKey: '$nameKey', speciality: '$speciality' })
    wiredSpeakers({ data }){
        if(data){
            this.speakers = data;
        }
    }

    handleRowAction(event){
        this.dispatchEvent(
            new CustomEvent('selectspeaker', {
                detail: event.detail.row
            })
        );
    }
}
