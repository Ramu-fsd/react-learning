package com.ramuboya.learning.payments;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
@Service
public class PaymentService {
 private final Map<String,Payment> store=new ConcurrentHashMap<>();
 private final KafkaTemplate<String,PaymentEvent> kafka;
 public PaymentService(KafkaTemplate<String,PaymentEvent> kafka){this.kafka=kafka;}
 public Payment create(PaymentRequest req){
  String id="PAY-"+UUID.randomUUID().toString().substring(0,8).toUpperCase(Locale.ROOT);
  Payment p=new Payment(id,req.beneficiary().trim(),req.amount(),req.currency(),"ACCEPTED",Instant.now(),id);
  store.put(id,p); kafka.send("payment-events",id,new PaymentEvent(id,"PAYMENT_ACCEPTED")); return p;
 }
 public List<Payment> all(){return store.values().stream().sorted(Comparator.comparing(Payment::createdAt).reversed()).toList();}
 public Payment get(String id){Payment p=store.get(id);if(p==null)throw new NoSuchElementException("Payment not found");return p;}
 public void progress(String id,String status){Payment p=get(id);store.put(id,new Payment(p.id(),p.beneficiary(),p.amount(),p.currency(),status,p.createdAt(),p.reference()));}
}
