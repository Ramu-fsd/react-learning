package com.ramuboya.learning.customers.customer;

public record Customer(
        String id,
        String fullName,
        String email,
        String status
) {}
