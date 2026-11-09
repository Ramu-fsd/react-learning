package com.ramuboya.learning.banking.service;

import com.ramuboya.learning.banking.dto.PageResponse;
import com.ramuboya.learning.banking.model.Account;
import com.ramuboya.learning.banking.model.Transaction;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class BankingDataService {
    private final List<Account> accounts = List.of(
        new Account("ACC-1001", "Everyday Account", "CURRENT", "•••• 4821", "USD", new BigDecimal("18450.75"), new BigDecimal("18950.75"), "ACTIVE"),
        new Account("ACC-1002", "Savings Account", "SAVINGS", "•••• 9034", "USD", new BigDecimal("42780.20"), new BigDecimal("42780.20"), "ACTIVE"),
        new Account("ACC-1003", "Business Account", "BUSINESS", "•••• 1176", "USD", new BigDecimal("126300.00"), new BigDecimal("125900.00"), "ACTIVE")
    );

    private final List<Transaction> transactions = List.of(
        tx("TX-9001","ACC-1001","TRX-2026-1001","Salary credit","CREDIT","COMPLETED","6200.00","2026-11-06","ACME TECHNOLOGIES"),
        tx("TX-9002","ACC-1001","TRX-2026-1002","Mortgage payment","DEBIT","COMPLETED","1850.00","2026-11-05","HOME FINANCE"),
        tx("TX-9003","ACC-1001","TRX-2026-1003","Grocery purchase","DEBIT","COMPLETED","142.65","2026-11-04","FRESH MART"),
        tx("TX-9004","ACC-1001","TRX-2026-1004","Online subscription","DEBIT","PENDING","18.99","2026-11-04","STREAM SERVICES"),
        tx("TX-9005","ACC-1001","TRX-2026-1005","Refund received","CREDIT","COMPLETED","64.50","2026-11-02","URBAN STORE"),
        tx("TX-9006","ACC-1001","TRX-2026-1006","Utility bill","DEBIT","COMPLETED","96.40","2026-10-31","CITY UTILITIES"),
        tx("TX-9007","ACC-1001","TRX-2026-1007","Dining","DEBIT","FAILED","76.20","2026-10-29","THE OLIVE TABLE"),
        tx("TX-9008","ACC-1001","TRX-2026-1008","Investment contribution","DEBIT","COMPLETED","500.00","2026-10-27","BROKERAGE"),
        tx("TX-9010","ACC-1002","TRX-2026-1010","Monthly savings","CREDIT","COMPLETED","1200.00","2026-11-06","INTERNAL TRANSFER"),
        tx("TX-9011","ACC-1002","TRX-2026-1011","Interest credit","CREDIT","COMPLETED","42.18","2026-11-01","BANK INTEREST"),
        tx("TX-9012","ACC-1003","TRX-2026-1012","Client settlement","CREDIT","COMPLETED","18500.00","2026-11-05","NORTHWIND PARTNERS")
    );

    private Transaction tx(String id, String accountId, String ref, String desc, String type, String status,
                           String amount, String date, String counterparty) {
        return new Transaction(id, accountId, ref, desc, type, status, new BigDecimal(amount), "USD",
                LocalDate.parse(date), counterparty);
    }

    public List<Account> accounts() { return accounts; }

    public Account account(String id) {
        return accounts.stream().filter(a -> a.id().equals(id)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Account not found: " + id));
    }

    public PageResponse<Transaction> transactions(String accountId, int page, int size, String type, String search) {
        account(accountId);
        if (page < 0 || size < 1 || size > 100) throw new IllegalArgumentException("Invalid pagination parameters");
        String normalizedType = type == null ? "ALL" : type.toUpperCase(Locale.ROOT);
        String term = search == null ? "" : search.toLowerCase(Locale.ROOT).trim();
        List<Transaction> filtered = transactions.stream()
                .filter(t -> t.accountId().equals(accountId))
                .filter(t -> normalizedType.equals("ALL") || t.type().equals(normalizedType))
                .filter(t -> (t.reference() + " " + t.description() + " " + t.counterparty())
                        .toLowerCase(Locale.ROOT).contains(term))
                .sorted(Comparator.comparing(Transaction::bookingDate).reversed())
                .toList();
        int from = Math.min(page * size, filtered.size());
        int to = Math.min(from + size, filtered.size());
        return new PageResponse<>(filtered.subList(from, to), page, size, filtered.size(),
                (int) Math.ceil((double) filtered.size() / size));
    }

    public Transaction transaction(String id) {
        return transactions.stream().filter(t -> t.id().equals(id)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Transaction not found: " + id));
    }
}
