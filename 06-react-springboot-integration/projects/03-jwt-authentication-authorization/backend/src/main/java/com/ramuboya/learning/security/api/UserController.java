package com.ramuboya.learning.security.api;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/me")
    public Map<String, Object> me(Authentication authentication) {
        if (authentication instanceof JwtAuthenticationToken jwtAuth) {
            return Map.of(
                    "subject", jwtAuth.getToken().getSubject(),
                    "issuer", jwtAuth.getToken().getIssuer().toString(),
                    "authorities", authentication.getAuthorities().stream().map(a -> a.getAuthority()).toList()
            );
        }
        return Map.of("name", authentication.getName());
    }
}
