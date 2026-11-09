package com.ramuboya.learning.payments;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;
public record PaymentRequest(@NotBlank @Size(max=80) String beneficiary,@NotNull @DecimalMin("0.01") @Digits(integer=12,fraction=2) BigDecimal amount,@NotBlank @Pattern(regexp="[A-Z]{3}") String currency) {}
