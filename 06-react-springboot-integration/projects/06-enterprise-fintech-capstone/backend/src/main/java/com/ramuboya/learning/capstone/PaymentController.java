package com.ramuboya.learning.capstone;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/payments")
public class PaymentController {
 private final PaymentService service;
 public PaymentController(PaymentService service){this.service=service;}
 @PostMapping @ResponseStatus(HttpStatus.ACCEPTED) public Payment create(@Valid @RequestBody PaymentRequest req){return service.create(req);}
 @GetMapping public List<Payment> all(){return service.all();}
}
