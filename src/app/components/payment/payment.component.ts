import { Car } from './../../models/carModel';
import { PaymentService } from './../../services/payment.service';
import { CreditCardService } from './../../services/credit-card.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CreditCard } from 'src/app/models/creditCard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentals: Rental[] = [];
  rental: Rental;
  amount: number;
  rentDate: Date;
  returnDate: Date;

  cardNumber: string;
  nameOnTheCard: string;
  expirationDate: string;
  cvv: number;
  cardId: number;

  creditCards: CreditCard[] = [];
  creditCardAddForm: FormGroup;

  @Input() car: Car;
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router,
    private toastr: ToastrService,
    private paymentService: PaymentService,
    private creditCardService: CreditCardService,
    private rentalService: RentalService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {

    // })
  }

  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10)
  }
  create() {
    let rentals: Rental =
    {
      carID: this.car.carId,
      customerID: 1,
      rentDate: this.rentDate,
      returnDate: this.returnDate
    }
    this.rentalService.add(rentals).subscribe(repsonse => {
    }, error => {
      console.info(error)
      this.toastr.error(error.error)
      this.toastr.error(error.error.Message)
    })
  }
  createCreditCardAddForm() {
    this.creditCardAddForm = this.formBuilder.group({
      customerCards: ['', Validators.required],
      nameOnTheCard: ['', Validators.required, Validators.maxLength(20)],
      cardNumber: ['', Validators.required, Validators.maxLength(16)],
      cvv: ['', Validators.required, Validators.maxLength(3)],
      expirationDate: ['', Validators.required, Validators.maxLength(5)],
    });
  }

  save() {
    let cardModel: CreditCard = {
      cardNumber: this.cardNumber,
      nameOnTheCard: this.nameOnTheCard,
      expirationDate: this.expirationDate,
      cvv: this.cvv,
      customerId: this.rental.customerID,
    };
    this.creditCardService.add(cardModel).subscribe((response) => {
      this.toastr.success('SAVE OK');
      this.payment();
    }, responseError => {
      this.toastr.error('ERRORR', responseError.error);
    });
  }

  totalPayment() {
    if (this.rental.returnDate != null) {
      let dateRent = new Date(this.rental.returnDate.toString());
      let dateReturn = new Date(this.rental.rentDate.toString());
      let difference = (dateRent.getTime() - dateReturn.getTime());
      let differenceOfDays = Math.ceil(difference / (1000 * 3600 * 24));
      if (differenceOfDays == 0) {
        differenceOfDays = 1;
      }
      this.amount = differenceOfDays * (this.car.dailyPrice + (this.car.dailyPrice * 8 / 100)); //calculate with VAT
    }
  }

  payment() {
    if (this.amount > 100) {
      let paymentModel: Payment = {
        amount: this.amount
      }
      this.paymentService.payment(paymentModel).subscribe(response => {
        this.toastr.success("Payment OK");
      }, error => {
        this.toastr.error(error.error);
      }
      )
    }
  }


}


