package com.ramuboya.learning.security.api;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/operations")
public class OperationsController {
    @GetMapping
    public List<Map<String, String>> operations() {
        return List.of(
                Map.of("id", "OPS-1001", "type", "PAYMENT_REVIEW", "status", "PENDING"),
                Map.of("id", "OPS-1002", "type", "CUSTOMER_REVIEW", "status", "IN_PROGRESS")
        );
    }

    @PostMapping("/approve")
    public Map<String, String> approve(@RequestBody Map<String, String> request) {
        String reference = request.getOrDefault("reference", "DEMO-REFERENCE");
        return Map.of("reference", reference, "result", "DEMO_APPROVAL_ACCEPTED",
                "message", "Illustrative endpoint only; no financial action was performed.");
    }
}
