package com.ramuboya.learning.banking.model;

import java.math.BigDecimal;

public record Account(
        String id,
        String accountName,
        String accountType,
        String maskedAccountNumber,
        String currency,
        BigDecimal availableBalance,
        BigDecimal currentBalance,
        String status
) {}
