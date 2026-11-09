package com.ramuboya.learning.customers.customer;

import com.ramuboya.learning.customers.error.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CustomerService {
    private final ConcurrentHashMap<String, Customer> customers = new ConcurrentHashMap<>();

    public CustomerService() {
        seed("Aarav Sharma", "aarav.sharma@example.com", "ACTIVE");
        seed("Diya Reddy", "diya.reddy@example.com", "ACTIVE");
        seed("Kabir Mehta", "kabir.mehta@example.com", "INACTIVE");
        seed("Ananya Iyer", "ananya.iyer@example.com", "ACTIVE");
        seed("Vihaan Rao", "vihaan.rao@example.com", "ACTIVE");
        seed("Meera Nair", "meera.nair@example.com", "INACTIVE");
        seed("Arjun Patel", "arjun.patel@example.com", "ACTIVE");
        seed("Ishita Das", "ishita.das@example.com", "ACTIVE");
        seed("Reyansh Gupta", "reyansh.gupta@example.com", "ACTIVE");
    }

    private void seed(String name, String email, String status) {
        String id = UUID.randomUUID().toString().substring(0, 8).toUpperCase(Locale.ROOT);
        customers.put(id, new Customer(id, name, email, status));
    }

    public PageResponse<Customer> findAll(int page, int size, String search) {
        if (page < 0) throw new IllegalArgumentException("Page must be zero or greater");
        if (size < 1 || size > 100) throw new IllegalArgumentException("Size must be between 1 and 100");

        String term = search == null ? "" : search.trim().toLowerCase(Locale.ROOT);
        List<Customer> filtered = customers.values().stream()
                .filter(c -> c.fullName().toLowerCase(Locale.ROOT).contains(term)
                        || c.email().toLowerCase(Locale.ROOT).contains(term)
                        || c.id().toLowerCase(Locale.ROOT).contains(term))
                .sorted(Comparator.comparing(Customer::fullName))
                .toList();

        int from = Math.min(page * size, filtered.size());
        int to = Math.min(from + size, filtered.size());
        int totalPages = (int) Math.ceil((double) filtered.size() / size);
        return new PageResponse<>(filtered.subList(from, to), page, size, filtered.size(), totalPages);
    }

    public Customer findById(String id) {
        Customer customer = customers.get(id);
        if (customer == null) throw new NotFoundException("Customer not found: " + id);
        return customer;
    }

    public Customer create(CustomerRequest request) {
        ensureUniqueEmail(request.email(), null);
        String id = UUID.randomUUID().toString().substring(0, 8).toUpperCase(Locale.ROOT);
        Customer customer = new Customer(id, request.fullName().trim(),
                request.email().trim().toLowerCase(Locale.ROOT), normalizeStatus(request.status()));
        customers.put(id, customer);
        return customer;
    }

    public Customer update(String id, CustomerRequest request) {
        findById(id);
        ensureUniqueEmail(request.email(), id);
        Customer updated = new Customer(id, request.fullName().trim(),
                request.email().trim().toLowerCase(Locale.ROOT), normalizeStatus(request.status()));
        customers.put(id, updated);
        return updated;
    }

    public void delete(String id) {
        if (customers.remove(id) == null) throw new NotFoundException("Customer not found: " + id);
    }

    private void ensureUniqueEmail(String email, String exceptId) {
        boolean duplicate = customers.values().stream()
                .anyMatch(c -> c.email().equalsIgnoreCase(email.trim()) && !c.id().equals(exceptId));
        if (duplicate) throw new IllegalArgumentException("A customer with this email already exists");
    }

    private String normalizeStatus(String status) {
        try {
            return CustomerStatus.valueOf(status.trim().toUpperCase(Locale.ROOT)).name();
        } catch (RuntimeException ex) {
            throw new IllegalArgumentException("Status must be ACTIVE or INACTIVE");
        }
    }
}
