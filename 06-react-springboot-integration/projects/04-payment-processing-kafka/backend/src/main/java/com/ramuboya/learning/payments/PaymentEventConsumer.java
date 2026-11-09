package com.ramuboya.learning.payments;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
@Component
public class PaymentEventConsumer {
 private final PaymentService service;
 public PaymentEventConsumer(PaymentService service){this.service=service;}
 @KafkaListener(topics="payment-events",groupId="payment-status-workers")
 public void consume(PaymentEvent event){
  try { Thread.sleep(1200); service.progress(event.paymentId(),"PROCESSING"); Thread.sleep(1200); service.progress(event.paymentId(),"COMPLETED"); }
  catch(InterruptedException ex){Thread.currentThread().interrupt();}
 }
}
