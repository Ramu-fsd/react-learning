package com.ramuboya.learning.capstone;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
@Entity @Table(name="payment_instructions")
public class Payment {
 @Id private String id;
 @Column(nullable=false) private String beneficiary;
 @Column(nullable=false,precision=14,scale=2) private BigDecimal amount;
 @Column(nullable=false,length=3) private String currency;
 @Column(nullable=false) private String status;
 @Column(nullable=false) private Instant createdAt;
 protected Payment(){}
 public Payment(String id,String beneficiary,BigDecimal amount,String currency){this.id=id;this.beneficiary=beneficiary;this.amount=amount;this.currency=currency;this.status="ACCEPTED";this.createdAt=Instant.now();}
 public String getId(){return id;} public String getBeneficiary(){return beneficiary;} public BigDecimal getAmount(){return amount;} public String getCurrency(){return currency;} public String getStatus(){return status;} public Instant getCreatedAt(){return createdAt;}
}
