import { LightningElement, api } from 'lwc';
import checkAvailability from '@salesforce/apex/SpeakerController.checkAvailability';
import createAssignment from '@salesforce/apex/SpeakerController.createAssignment';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BookSession extends LightningElement {

    @api speaker;
    selectedDate;
    disabled = true;

    handleDate(event){
        this.selectedDate = event.target.value;

        checkAvailability({
            speakerId: this.speaker.Id,
            sessionDate: this.selectedDate
        }).then(result => {
            this.disabled = !result;
            if(!result){
                this.showToast('Error','Slot already booked','error');
            }
        });
    }

    handleCreate(){
        createAssignment({
            speakerId: this.speaker.Id,
            sessionId: null // (later map to selected session)
        });
        this.showToast('Success','Assignment Created','success');
    }

    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({ title, message, variant })
        );
    }
}
