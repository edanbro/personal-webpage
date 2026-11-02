import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { IconComponent } from '../../components/icon/icon.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { contactLinks, profile } from '../../data/profile';

// EmailJS public identifiers. These are meant to be used from the browser;
// sending limits and allowed origins are configured in the EmailJS dashboard.
const EMAILJS_SERVICE_ID = 'service_cfr4br5';
const EMAILJS_TEMPLATE_ID = 'template_5jfepli';
const EMAILJS_PUBLIC_KEY = 'uc8szqbeuHGXj9MRt';

type Status = 'idle' | 'sending' | 'sent' | 'invalid' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, IconComponent, SectionHeadingComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly contactLinks = contactLinks;

  name = '';
  email = '';
  message = '';
  status: Status = 'idle';
  mailtoFallback = '';

  async send(form: NgForm): Promise<void> {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.status = 'invalid';
      return;
    }

    this.status = 'sending';
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: this.name, email: this.email, message: this.message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      this.status = 'sent';
      form.resetForm();
    } catch (err) {
      console.error('EmailJS send failed', err);
      // Offer the visitor's own mail app with the message already filled in.
      const subject = encodeURIComponent(`Website contact from ${this.name}`);
      const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`);
      this.mailtoFallback = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      this.status = 'error';
    }
  }
}
