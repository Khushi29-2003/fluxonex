import { LightningElement } from 'lwc';

export default class SpeakerSearch extends LightningElement {

    name = '';
    speciality = '';
    selectedSpeaker;

    options = [
        { label: 'Apex', value: 'Apex' },
        { label: 'LWC', value: 'LWC' },
        { label: 'Integrations', value: 'Integrations' },
        { label: 'Architecture', value: 'Architecture' }
    ];

    handleName(event){
        this.name = event.target.value;
    }

    handleSpeciality(event){
        this.speciality = event.target.value;
    }

    handleSelect(event){
        this.selectedSpeaker = event.detail;
    }
}
