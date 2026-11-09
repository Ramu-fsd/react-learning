package com.ramuboya.learning.banking.controller;

import com.ramuboya.learning.banking.model.Account;
import com.ramuboya.learning.banking.service.BankingDataService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final BankingDataService service;
    public AccountController(BankingDataService service) { this.service = service; }

    @GetMapping
    public List<Account> accounts() { return service.accounts(); }

    @GetMapping("/{accountId}")
    public Account account(@PathVariable String accountId) { return service.account(accountId); }
}
