package com.ramuboya.learning.capstone;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.UUID;
@Service
public class PaymentService {
 private final PaymentRepository repository; private final KafkaTemplate<String,PaymentAcceptedEvent> kafka;
 public PaymentService(PaymentRepository repository,KafkaTemplate<String,PaymentAcceptedEvent> kafka){this.repository=repository;this.kafka=kafka;}
 @Transactional public Payment create(PaymentRequest request){
  Payment p=repository.save(new Payment("PAY-"+UUID.randomUUID().toString().substring(0,10).toUpperCase(),request.beneficiary().trim(),request.amount(),request.currency()));
  kafka.send("payment-accepted",p.getId(),new PaymentAcceptedEvent(p.getId(),"PAYMENT_ACCEPTED"));
  return p;
 }
 @Transactional(readOnly=true) public List<Payment> all(){return repository.findAll();}
}
