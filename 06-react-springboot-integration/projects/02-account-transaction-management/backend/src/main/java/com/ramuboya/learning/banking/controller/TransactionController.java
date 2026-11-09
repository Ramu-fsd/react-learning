package com.ramuboya.learning.banking.controller;

import com.ramuboya.learning.banking.dto.PageResponse;
import com.ramuboya.learning.banking.model.Transaction;
import com.ramuboya.learning.banking.service.BankingDataService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TransactionController {
    private final BankingDataService service;
    public TransactionController(BankingDataService service) { this.service = service; }

    @GetMapping("/accounts/{accountId}/transactions")
    public PageResponse<Transaction> transactions(
            @PathVariable String accountId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size,
            @RequestParam(defaultValue = "ALL") String type,
            @RequestParam(defaultValue = "") String search) {
        return service.transactions(accountId, page, size, type, search);
    }

    @GetMapping("/transactions/{transactionId}")
    public Transaction transaction(@PathVariable String transactionId) {
        return service.transaction(transactionId);
    }
}
