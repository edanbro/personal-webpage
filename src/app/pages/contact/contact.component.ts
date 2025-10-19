import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  async onSubmit() {
    // quick client-side validation
    if (!this.name || !this.email || !this.message) {
      alert('Please fill all fields.');
      return;
    }

    // Yes I know the keys are exposed, this is temporary.
    const SERVICE_ID = 'service_cfr4br5';
    const TEMPLATE_ID = 'template_5jfepli';
    const PUBLIC_KEY = 'uc8szqbeuHGXj9MRt';

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert('Message sent — thank you!');
      this.name = this.email = this.message = '';
    } catch (err) {
      console.error('EmailJS send failed', err);
      // fallback to mailto if EmailJS or network is unavailable
      const subject = encodeURIComponent(`Website contact from ${this.name}`);
      const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`);
      window.location.href = `mailto:eduard.andrei.broasca@gmail.com?subject=${subject}&body=${body}`;
    }
  }
}