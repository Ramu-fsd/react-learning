package com.ramuboya.learning.banking.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public record Transaction(
        String id,
        String accountId,
        String reference,
        String description,
        String type,
        String status,
        BigDecimal amount,
        String currency,
        LocalDate bookingDate,
        String counterparty
) {}
