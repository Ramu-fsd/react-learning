package com.ramuboya.learning.payments;
import java.math.BigDecimal;
import java.time.Instant;
public record Payment(String id,String beneficiary,BigDecimal amount,String currency,String status,Instant createdAt,String reference) {}
